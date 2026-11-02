<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use PDO;

class ImportWordPressDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:wordpress 
                            {path=c:\Users\1\Downloads\coachtim_wp568.sql : Path to WordPress SQL dump}
                            {--database= : Target database connection (e.g. sqlite or mysql)}
                            {--force : Force deletion of existing data without confirmation}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Wipe old data and import all posts, categories, pages, SEO meta, and comments from WordPress SQL dump';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sqlPath = $this->argument('path');
        $dbConn = $this->option('database') ?: config('database.default');

        // Check if database connection works
        try {
            DB::connection($dbConn)->getPdo();
            $this->info("Using database connection: [{$dbConn}]");
        } catch (\Throwable $e) {
            $this->warn("Could not connect to database connection [{$dbConn}]: " . $e->getMessage());
            // If default was mysql and failed, try sqlite fallback if available
            if ($dbConn !== 'sqlite' && file_exists(database_path('database.sqlite'))) {
                $this->info("Falling back to [sqlite] connection...");
                $dbConn = 'sqlite';
                DB::purge();
                config(['database.default' => 'sqlite']);
            } else {
                $this->error("Database connection failed. Please check your database service or credentials.");
                return 1;
            }
        }

        if (!file_exists($sqlPath)) {
            $this->error("SQL file not found at: {$sqlPath}");
            return 1;
        }

        $this->info("Reading and parsing WordPress SQL dump from: {$sqlPath}");

        // Step 1: Create or use temporary SQLite database for parsing SQL dump
        $tempDbPath = storage_path('app/temp_wp_import.sqlite');
        if (file_exists($tempDbPath)) {
            @unlink($tempDbPath);
        }

        $this->info("Parsing WordPress SQL dump into temporary parser database...");
        $wpPdo = $this->loadSqlIntoSqlite($sqlPath, $tempDbPath);

        // Step 2: Clean old data as requested by user
        $this->info("Cleaning existing data from database...");
        $this->wipeOldData($dbConn);

        // Step 3: Ensure Admin User exists
        $adminId = $this->ensureAdminUser($dbConn);
        $this->info("Admin user verified (ID: {$adminId})");

        // Step 4: Import Categories
        $this->info("Importing categories...");
        $categoryMap = $this->importCategories($wpPdo, $dbConn);
        $this->info("Imported " . count($categoryMap) . " categories.");

        // Step 5: Import Media/Attachments map
        $this->info("Indexing media attachments...");
        $attachmentMap = $this->buildAttachmentMap($wpPdo);
        $this->info("Indexed " . count($attachmentMap) . " attachments.");

        // Step 6: Import Published Posts
        $this->info("Importing published posts with SEO metadata and featured images...");
        $postMap = $this->importPosts($wpPdo, $dbConn, $adminId, $attachmentMap, $categoryMap);
        $this->info("Imported " . count($postMap) . " published posts.");

        // Step 7: Import Static Pages
        $this->info("Importing static pages (About Us, Contacts, etc.)...");
        $pageCount = $this->importPages($wpPdo, $dbConn);
        $this->info("Imported {$pageCount} pages.");

        // Step 8: Import Comments
        $this->info("Importing comments...");
        $commentCount = $this->importComments($wpPdo, $dbConn, $adminId, $postMap);
        $this->info("Imported {$commentCount} approved comments.");

        // Clean up temporary SQLite
        unset($wpPdo);
        if (file_exists($tempDbPath)) {
            @unlink($tempDbPath);
        }

        $this->newLine();
        $this->info("==================================================");
        $this->info(" SUCCESS: WordPress Data Import Completed!");
        $this->info(" - Categories: " . count($categoryMap));
        $this->info(" - Posts: " . count($postMap));
        $this->info(" - Pages: {$pageCount}");
        $this->info(" - Comments: {$commentCount}");
        $this->info("==================================================");
        $this->newLine();
        $this->info("Tip: You can now run 'php artisan migrate:images' to download all images locally.");

        return 0;
    }

    /**
     * Load MySQL dump into SQLite for fast relational queries
     */
    protected function loadSqlIntoSqlite(string $sqlPath, string $sqlitePath): PDO
    {
        $pdo = new PDO('sqlite:' . $sqlitePath);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->exec('PRAGMA synchronous = OFF');
        $pdo->exec('PRAGMA journal_mode = MEMORY');

        $handle = fopen($sqlPath, 'r');
        $buffer = '';
        $pdo->beginTransaction();

        while (($line = fgets($handle)) !== false) {
            $trimmed = trim($line);
            if ($trimmed === '' || str_starts_with($trimmed, '--') || str_starts_with($trimmed, '/*')) {
                continue;
            }
            if (preg_match('/^(LOCK TABLES|UNLOCK TABLES)/i', $trimmed)) {
                continue;
            }

            $buffer .= $line;

            if (preg_match('/;\s*$/', $trimmed)) {
                $stmt = trim($buffer);
                $buffer = '';

                if (preg_match('/^CREATE TABLE/i', $stmt)) {
                    $stmt = preg_replace('/\)\s*ENGINE=[^;]+;/i', ');', $stmt);
                    $stmt = preg_replace('/COLLATE\s+[a-zA-Z0-9_]+/i', '', $stmt);
                    $stmt = preg_replace('/CHARACTER SET\s+[a-zA-Z0-9_]+/i', '', $stmt);
                    $stmt = preg_replace('/auto_increment/i', '', $stmt);
                    $stmt = preg_replace('/UNSIGNED/i', '', $stmt);
                    $stmt = preg_replace('/ON UPDATE [a-zA-Z0-9_()]+/i', '', $stmt);

                    $cleanedLines = [];
                    foreach (explode("\n", $stmt) as $l) {
                        if (preg_match('/^\s*(KEY|UNIQUE KEY|FULLTEXT KEY|CONSTRAINT)\s/i', $l)) {
                            continue;
                        }
                        $cleanedLines[] = $l;
                    }
                    $stmt = implode("\n", $cleanedLines);
                    $stmt = preg_replace('/,\s*\n\s*\)/', "\n)", $stmt);

                    try {
                        $pdo->exec($stmt);
                    } catch (\Throwable $e) {}
                } elseif (preg_match('/^INSERT INTO/i', $stmt)) {
                    // Escape handling for SQLite
                    $placeholder = '___BSLASH___';
                    $stmt = str_replace('\\\\', $placeholder, $stmt);
                    $stmt = str_replace("\\'", "''", $stmt);
                    $stmt = str_replace('\\"', '"', $stmt);
                    $stmt = str_replace('\\r\\n', "\r\n", $stmt);
                    $stmt = str_replace('\\n', "\n", $stmt);
                    $stmt = str_replace('\\r', "\r", $stmt);
                    $stmt = str_replace('\\t', "\t", $stmt);
                    $stmt = str_replace($placeholder, '\\', $stmt);
                    $stmt = str_replace("'0000-00-00 00:00:00'", "'1970-01-01 00:00:00'", $stmt);
                    $stmt = str_replace("'0000-00-00'", "'1970-01-01'", $stmt);

                    try {
                        $pdo->exec($stmt);
                    } catch (\Throwable $e) {}
                }
            }
        }
        fclose($handle);
        $pdo->commit();

        return $pdo;
    }

    /**
     * Wipe all existing demo/old data from application database
     */
    protected function wipeOldData(string $conn): void
    {
        $isSqlite = DB::connection($conn)->getDriverName() === 'sqlite';

        if ($isSqlite) {
            DB::connection($conn)->statement('PRAGMA foreign_keys = OFF;');
        } else {
            DB::connection($conn)->statement('SET FOREIGN_KEY_CHECKS = 0;');
        }

        $tablesToWipe = [
            'posts',
            'categories',
            'pages',
            'comments',
            'businesses',
            'reviews',
            'review_campaigns',
            'stories',
            'sliders',
            'saved_posts',
            'votes',
            'authors',
            'reports',
        ];

        foreach ($tablesToWipe as $table) {
            if (Schema::connection($conn)->hasTable($table)) {
                DB::connection($conn)->table($table)->truncate();
                $this->line(" - Cleared table: <comment>{$table}</comment>");
            }
        }

        if ($isSqlite) {
            DB::connection($conn)->statement('PRAGMA foreign_keys = ON;');
        } else {
            DB::connection($conn)->statement('SET FOREIGN_KEY_CHECKS = 1;');
        }
    }

    /**
     * Ensure default admin user is present
     */
    protected function ensureAdminUser(string $conn): int
    {
        $existing = DB::connection($conn)->table('users')->where('email', 'admin@coachingsinsikar.com')->first();
        if ($existing) {
            return $existing->id;
        }

        $id = DB::connection($conn)->table('users')->insertGetId([
            'name' => 'Super Administrator',
            'username' => 'admin',
            'email' => 'admin@coachingsinsikar.com',
            'password' => Hash::make('Admin@12345'),
            'role' => 'super_admin',
            'is_admin' => 1,
            'email_verified_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    /**
     * Import WordPress categories
     */
    protected function importCategories(PDO $wpPdo, string $conn): array
    {
        $stmt = $wpPdo->query("
            SELECT t.term_id, t.name, t.slug, tt.description
            FROM wp5w_terms t
            JOIN wp5w_term_taxonomy tt ON t.term_id = tt.term_id
            WHERE tt.taxonomy = 'category'
        ");

        $categoryMap = []; // term_id => category_name

        while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $catId = (string) Str::uuid();
            $name = html_entity_decode($r['name'], ENT_QUOTES | ENT_HTML5, 'UTF-8');
            $slug = $r['slug'];
            $desc = $r['description'] ? html_entity_decode($r['description'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : null;

            DB::connection($conn)->table('categories')->insert([
                'id' => $catId,
                'name' => $name,
                'slug' => $slug,
                'description' => $desc,
                'seo_title' => $name . ' in Sikar',
                'seo_description' => $desc ?: ($name . ' listings, guides, and reviews in Sikar.'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $categoryMap[$r['term_id']] = [
                'id' => $catId,
                'name' => $name,
                'slug' => $slug,
            ];
        }

        return $categoryMap;
    }

    /**
     * Build mapping of attachment ID to image URL and alt text
     */
    protected function buildAttachmentMap(PDO $wpPdo): array
    {
        $stmt = $wpPdo->query("
            SELECT p.ID, p.guid,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_wp_attached_file') as attached_file,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_wp_attachment_image_alt') as alt
            FROM wp5w_posts p
            WHERE p.post_type = 'attachment'
        ");

        $map = [];
        while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $url = $r['guid'];
            // If the image file exists locally in public/uploads, prioritize local path!
            if ($r['attached_file'] && file_exists(public_path('uploads/' . $r['attached_file']))) {
                $url = '/uploads/' . ltrim(str_replace('\\', '/', $r['attached_file']), '/');
            } elseif ($r['attached_file'] && !str_starts_with($url, 'https://sikareducationhub.com')) {
                $url = 'https://sikareducationhub.com/wp-content/uploads/' . ltrim($r['attached_file'], '/');
            }

            $map[$r['ID']] = [
                'url' => $url,
                'alt' => $r['alt'] ?? '',
            ];
        }

        return $map;
    }

    /**
     * Import WordPress published posts
     */
    protected function importPosts(PDO $wpPdo, string $conn, int $adminId, array $attachmentMap, array $categoryMap): array
    {
        // Detect permalink structure from WordPress options table
        $permalinkOpt = $wpPdo->query("SELECT option_value FROM wp5w_options WHERE option_name = 'permalink_structure'")->fetchColumn();
        $urlFormat = '{slug}'; // Default direct post
        if ($permalinkOpt) {
            $cleaned = trim($permalinkOpt, '/');
            if ($cleaned === '%postname%') {
                $urlFormat = '{slug}';
            } elseif (str_contains($cleaned, '%category%')) {
                $urlFormat = str_replace(['%category%', '%postname%'], ['{category}', '{slug}'], $cleaned);
            }
        }

        $stmt = $wpPdo->query("
            SELECT p.ID, p.post_title, p.post_name, p.post_content, p.post_excerpt, p.post_date, p.post_modified,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_thumbnail_id') as thumb_id,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_yoast_wpseo_title') as seo_title,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_yoast_wpseo_metadesc') as seo_desc,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_yoast_wpseo_focuskw') as focus_kw,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_yoast_wpseo_primary_category') as primary_cat_id
            FROM wp5w_posts p
            WHERE p.post_type = 'post' AND p.post_status = 'publish'
            ORDER BY p.post_date DESC
        ");

        $postMap = []; // wp_id => uuid

        while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $wpId = $r['ID'];
            $uuid = (string) Str::uuid();
            $title = html_entity_decode($r['post_title'], ENT_QUOTES | ENT_HTML5, 'UTF-8');
            $seoTitle = $r['seo_title'] ? html_entity_decode($r['seo_title'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : $title;

            // Fix placeholder title if post was submitted as feedback or placeholder
            if (strcasecmp(trim($title), 'give feedback') === 0 && !empty($seoTitle)) {
                $title = $seoTitle;
            }

            $slug = $r['post_name'] ?: Str::slug($title);

            // Clean Gutenberg block comments
            $rawContent = $r['post_content'];
            $cleanContent = preg_replace('/<!--\s*\/?wp:[a-zA-Z0-9_\/-]+(\s+.*?)?-->/s', '', $rawContent);
            $cleanContent = trim($cleanContent);

            // Excerpt
            $excerpt = $r['post_excerpt'] ? html_entity_decode($r['post_excerpt'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : null;
            if (!$excerpt) {
                $excerpt = Str::limit(strip_tags($cleanContent), 160);
            }

            // Featured Image
            $coverImage = null;
            $coverImageAlt = null;
            if (!empty($r['thumb_id']) && isset($attachmentMap[$r['thumb_id']])) {
                $coverImage = $attachmentMap[$r['thumb_id']]['url'];
                $coverImageAlt = $attachmentMap[$r['thumb_id']]['alt'] ?: $title;
            }

            // Categories & Tags
            $catStmt = $wpPdo->prepare("
                SELECT t.term_id, t.name, tt.taxonomy
                FROM wp5w_term_relationships tr
                JOIN wp5w_term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
                JOIN wp5w_terms t ON tt.term_id = t.term_id
                WHERE tr.object_id = ?
            ");
            $catStmt->execute([$wpId]);
            $postTerms = $catStmt->fetchAll(PDO::FETCH_ASSOC);

            $primaryCategory = 'General';
            $tags = [];

            // Check if Yoast primary category was set
            if (!empty($r['primary_cat_id']) && isset($categoryMap[$r['primary_cat_id']])) {
                $primaryCategory = $categoryMap[$r['primary_cat_id']]['name'];
            }

            foreach ($postTerms as $term) {
                $tName = html_entity_decode($term['name'], ENT_QUOTES | ENT_HTML5, 'UTF-8');
                if ($primaryCategory === 'General' && $term['taxonomy'] === 'category') {
                    $primaryCategory = $tName;
                }
                $tags[] = $tName;
            }
            $tags = array_values(array_unique($tags));

            // SEO Metadata
            $seoTitle = $r['seo_title'] ? html_entity_decode($r['seo_title'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : $title;
            $seoDesc = $r['seo_desc'] ? html_entity_decode($r['seo_desc'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : $excerpt;
            $focusKw = $r['focus_kw'] ? html_entity_decode($r['focus_kw'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : null;

            DB::connection($conn)->table('posts')->insert([
                'id' => $uuid,
                'slug' => $slug,
                'title' => $title,
                'type' => 'TEXT',
                'content' => $cleanContent,
                'excerpt' => $excerpt,
                'coverImage' => $coverImage,
                'coverImageAlt' => $coverImageAlt,
                'category' => $primaryCategory,
                'tags' => json_encode($tags),
                'published' => 1,
                'status' => 'published',
                'score' => 0,
                'author_id' => $adminId,
                'date' => $r['post_date'],
                'created_at' => $r['post_date'],
                'updated_at' => $r['post_modified'] ?: $r['post_date'],
                'seoTitle' => $seoTitle,
                'ogTitle' => $seoTitle,
                'metaDescription' => $seoDesc,
                'ogDescription' => $seoDesc,
                'focusKeyword' => $focusKw,
                'keywords' => $focusKw,
                'canonicalUrl' => url('/' . ltrim(str_replace(['{slug}', '{category}'], [$slug, Str::slug($primaryCategory)], $urlFormat), '/')),
                'url_format' => $urlFormat,
            ]);

            $postMap[$wpId] = $uuid;
        }

        return $postMap;
    }

    /**
     * Import WordPress static pages (About Us, Contacts)
     */
    protected function importPages(PDO $wpPdo, string $conn): int
    {
        $stmt = $wpPdo->query("
            SELECT p.ID, p.post_title, p.post_name, p.post_content, p.post_date, p.post_modified,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_yoast_wpseo_title') as seo_title,
                   (SELECT meta_value FROM wp5w_postmeta WHERE post_id = p.ID AND meta_key = '_yoast_wpseo_metadesc') as seo_desc
            FROM wp5w_posts p
            WHERE p.post_type = 'page' AND p.post_status = 'publish'
        ");

        $count = 0;
        while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $title = html_entity_decode($r['post_title'], ENT_QUOTES | ENT_HTML5, 'UTF-8');
            $seoTitle = $r['seo_title'] ? html_entity_decode($r['seo_title'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : $title;

            // Fix placeholder title if post was submitted as feedback or placeholder
            if (strcasecmp(trim($title), 'give feedback') === 0 && !empty($seoTitle)) {
                $title = $seoTitle;
            }

            $slug = $r['post_name'] ?: Str::slug($title);
            $cleanContent = preg_replace('/<!--\s*\/?wp:[a-zA-Z0-9_\/-]+(\s+.*?)?-->/s', '', $r['post_content']);
            $cleanContent = trim($cleanContent);

            $seoTitle = $r['seo_title'] ? html_entity_decode($r['seo_title'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : $title;
            $seoDesc = $r['seo_desc'] ? html_entity_decode($r['seo_desc'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : Str::limit(strip_tags($cleanContent), 160);

            DB::connection($conn)->table('pages')->insert([
                'id' => (string) Str::uuid(),
                'title' => $title,
                'slug' => $slug,
                'type' => 'static',
                'content' => $cleanContent,
                'seo_title' => $seoTitle,
                'seo_description' => $seoDesc,
                'og_title' => $seoTitle,
                'og_description' => $seoDesc,
                'created_at' => $r['post_date'] ?: now(),
                'updated_at' => $r['post_modified'] ?: now(),
            ]);

            $count++;
        }

        return $count;
    }

    /**
     * Import WordPress comments
     */
    protected function importComments(PDO $wpPdo, string $conn, int $adminId, array $postMap): int
    {
        $stmt = $wpPdo->query("
            SELECT c.comment_ID, c.comment_post_ID, c.comment_content, c.comment_date
            FROM wp5w_comments c
            WHERE c.comment_approved = '1'
        ");

        $count = 0;
        while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $wpPostId = $r['comment_post_ID'];
            if (!isset($postMap[$wpPostId])) {
                continue;
            }

            $postId = $postMap[$wpPostId];
            $content = trim($r['comment_content']);

            DB::connection($conn)->table('comments')->insert([
                'post_id' => $postId,
                'author_id' => $adminId,
                'content' => $content,
                'score' => 0,
                'is_pinned' => 0,
                'is_deleted' => 0,
                'is_spam' => 0,
                'status' => 'published',
                'created_at' => $r['comment_date'] ?: now(),
                'updated_at' => $r['comment_date'] ?: now(),
            ]);

            $count++;
        }

        return $count;
    }
}
