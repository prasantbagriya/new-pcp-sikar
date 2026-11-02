<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use PDO;

class ExportToMysqlCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:export-mysql 
                            {--database=coachtim_lara427 : The target MySQL database name}
                            {--file= : Custom output file path}
                            {--data-only : Export data only without table schemas}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export the local SQLite database into a 100% MySQL-compatible SQL dump file for server deployment';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $targetDb = $this->option('database') ?: 'coachtim_lara427';
        $dataOnly = (bool) $this->option('data-only');
        
        $outputFilePath = $this->option('file') ?: database_path("{$targetDb}_dump.sql");
        $dataOnlyFilePath = database_path("{$targetDb}_data_only.sql");

        $this->info("=== Sikar Education Hub MySQL Database Exporter ===");
        $this->info("Target Database: {$targetDb}");
        $this->info("Reading SQLite database tables...");

        $tables = DB::select("SELECT name, sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name");
        $indexes = DB::select("SELECT tbl_name, name, sql FROM sqlite_master WHERE type='index' AND sql IS NOT NULL ORDER BY tbl_name");

        if (empty($tables)) {
            $this->error("No tables found in SQLite database!");
            return Command::FAILURE;
        }

        $this->info("Found " . count($tables) . " tables. Generating MySQL statements...");

        $fullSql = [];
        $dataOnlySql = [];

        // File Header
        $header = "-- ========================================================\n"
                . "-- Sikar Education Hub MySQL Database Dump\n"
                . "-- Target Server Database: {$targetDb}\n"
                . "-- Export Date: " . date('Y-m-d H:i:s') . "\n"
                . "-- Source Engine: SQLite (Local) -> MySQL 5.7+ / 8.0+ / MariaDB\n"
                . "-- ========================================================\n\n"
                . "SET NAMES utf8mb4;\n"
                . "SET FOREIGN_KEY_CHECKS = 0;\n"
                . "SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';\n"
                . "SET AUTOCOMMIT = 0;\n"
                . "START TRANSACTION;\n\n";

        $fullSql[] = $header;
        $dataOnlySql[] = $header;

        // Group indexes by table
        $tableIndexes = [];
        foreach ($indexes as $idx) {
            $tableIndexes[$idx->tbl_name][] = $idx;
        }

        $totalRowsExported = 0;

        foreach ($tables as $t) {
            $tableName = $t->name;
            $sqliteSql = $t->sql;

            $this->line("Processing table: <comment>{$tableName}</comment>...");

            // 1. Schema DDL (Full dump only)
            if (!$dataOnly && !empty($sqliteSql)) {
                $mysqlDdl = $this->convertSqliteSchemaToMysql($sqliteSql, $tableName);
                $fullSql[] = "-- --------------------------------------------------------\n"
                           . "-- Table structure for table `{$tableName}`\n"
                           . "-- --------------------------------------------------------\n\n"
                           . $mysqlDdl . "\n\n";
            }

            // 2. Data Insertion
            $rows = DB::table($tableName)->get();
            $rowCount = count($rows);

            if ($rowCount > 0) {
                $totalRowsExported += $rowCount;
                $this->info("  -> Exporting {$rowCount} rows for `{$tableName}`");

                $insertBlock = "-- --------------------------------------------------------\n"
                             . "-- Dumping data for table `{$tableName}` ({$rowCount} rows)\n"
                             . "-- --------------------------------------------------------\n\n";

                $columns = array_keys((array) $rows[0]);
                $quotedColumns = array_map(fn($col) => "`" . str_replace("`", "``", $col) . "`", $columns);
                $columnsList = implode(', ', $quotedColumns);

                // Insert in batches of 100 for optimal MySQL performance
                $chunks = array_chunk($rows->toArray(), 100);

                foreach ($chunks as $chunk) {
                    $insertBlock .= "INSERT INTO `{$tableName}` ({$columnsList}) VALUES\n";
                    $valueRows = [];

                    foreach ($chunk as $row) {
                        $values = [];
                        foreach ($columns as $col) {
                            $val = $row->$col;
                            if (is_null($val)) {
                                $values[] = "NULL";
                            } elseif (is_bool($val)) {
                                $values[] = $val ? '1' : '0';
                            } elseif (is_int($val)) {
                                $values[] = (string) $val;
                            } elseif (is_float($val)) {
                                $values[] = (string) $val;
                            } else {
                                // String escaping for MySQL
                                $escaped = $this->escapeMysqlString((string) $val);
                                $values[] = "'" . $escaped . "'";
                            }
                        }
                        $valueRows[] = "  (" . implode(', ', $values) . ")";
                    }

                    $insertBlock .= implode(",\n", $valueRows) . ";\n";
                }

                $insertBlock .= "\n";
                $fullSql[] = $insertBlock;
                $dataOnlySql[] = $insertBlock;
            }

            // 3. Indexes for this table
            if (!$dataOnly && isset($tableIndexes[$tableName])) {
                $indexSql = [];
                foreach ($tableIndexes[$tableName] as $idx) {
                    if (!empty($idx->sql)) {
                        $convertedIdx = $this->convertSqliteIndexToMysql($idx->sql);
                        if ($convertedIdx) {
                            $indexSql[] = $convertedIdx . ";";
                        }
                    }
                }
                if (!empty($indexSql)) {
                    $fullSql[] = "-- Indexes for table `{$tableName}`\n" . implode("\n", $indexSql) . "\n\n";
                }
            }
        }

        // File Footer
        $footer = "COMMIT;\n"
                . "SET FOREIGN_KEY_CHECKS = 1;\n"
                . "-- Export completed successfully.\n";

        $fullSql[] = $footer;
        $dataOnlySql[] = $footer;

        // Save Full Dump
        $fullContent = implode('', $fullSql);
        File::put($outputFilePath, $fullContent);
        $fullSizeKb = round(strlen($fullContent) / 1024, 2);

        // Save Data-Only Dump
        $dataContent = implode('', $dataOnlySql);
        File::put($dataOnlyFilePath, $dataContent);
        $dataSizeKb = round(strlen($dataContent) / 1024, 2);

        $this->newLine();
        $this->info("========================================================");
        $this->info("SUCCESS! MySQL Dump Created:");
        $this->info("1. Full Schema & Data: {$outputFilePath} ({$fullSizeKb} KB)");
        $this->info("2. Data Only Dump:     {$dataOnlyFilePath} ({$dataSizeKb} KB)");
        $this->info("Total tables exported: " . count($tables));
        $this->info("Total records exported: {$totalRowsExported}");
        $this->info("========================================================");
        $this->newLine();

        $this->line("<comment>How to Import to Your Server MySQL Database ({$targetDb}):</comment>");
        $this->line("1. Via phpMyAdmin (Recommended):");
        $this->line("   - Open cPanel -> phpMyAdmin");
        $this->line("   - Select database: `{$targetDb}`");
        $this->line("   - Click 'Import' tab -> choose `{$outputFilePath}` -> Click 'Go'");
        $this->newLine();
        $this->line("2. Via SSH / Terminal:");
        $this->line("   mysql -u {$targetDb} -p'p6D5(u)X3S' {$targetDb} < " . basename($outputFilePath));

        return Command::SUCCESS;
    }

    /**
     * Escape strings safely for MySQL queries.
     */
    protected function escapeMysqlString(string $value): string
    {
        $search = ["\\", "\x00", "\n", "\r", "'", '"', "\x1a"];
        $replace = ["\\\\", "\\0", "\\n", "\\r", "\\'", '\\"', "\\Z"];
        return str_replace($search, $replace, $value);
    }

    /**
     * Convert SQLite CREATE TABLE statement into valid MySQL DDL.
     */
    protected function convertSqliteSchemaToMysql(string $sqliteSql, string $tableName): string
    {
        $sql = trim($sqliteSql);

        $firstParen = strpos($sql, '(');
        $lastParen = strrpos($sql, ')');
        if ($firstParen === false || $lastParen === false) {
            return "DROP TABLE IF EXISTS `{$tableName}`;\n" . $sql . ";";
        }

        $columnsBody = substr($sql, $firstParen + 1, $lastParen - $firstParen - 1);

        $tokens = [];
        $parenDepth = 0;
        $currentToken = '';
        $inQuotes = false;
        $quoteChar = '';

        for ($i = 0; $i < strlen($columnsBody); $i++) {
            $ch = $columnsBody[$i];
            if (!$inQuotes && ($ch === '"' || $ch === '`')) {
                $inQuotes = true;
                $quoteChar = $ch;
                $currentToken .= '`';
            } elseif ($inQuotes && $ch === $quoteChar) {
                $inQuotes = false;
                $currentToken .= '`';
            } elseif (!$inQuotes && $ch === '(') {
                $parenDepth++;
                $currentToken .= $ch;
            } elseif (!$inQuotes && $ch === ')') {
                $parenDepth--;
                $currentToken .= $ch;
            } elseif (!$inQuotes && $ch === ',' && $parenDepth === 0) {
                $tokens[] = trim($currentToken);
                $currentToken = '';
            } else {
                $currentToken .= $ch;
            }
        }
        if (trim($currentToken) !== '') {
            $tokens[] = trim($currentToken);
        }

        $convertedColumns = [];
        foreach ($tokens as $token) {
            $colDef = $token;

            // Handle Foreign Keys
            if (preg_match('/^foreign\s+key/i', $colDef)) {
                $colDef = preg_replace('/"([^"]+)"/', '`$1`', $colDef);
                $colDef = preg_replace('/\bon delete no action\b/i', 'ON DELETE RESTRICT', $colDef);
                $colDef = preg_replace('/\bon update no action\b/i', 'ON UPDATE RESTRICT', $colDef);
                $convertedColumns[] = $colDef;
                continue;
            }

            // Handle Primary Key
            if (preg_match('/^primary\s+key/i', $colDef)) {
                $colDef = preg_replace('/"([^"]+)"/', '`$1`', $colDef);
                $convertedColumns[] = $colDef;
                continue;
            }

            // Normalize quotes to backticks
            $colDef = preg_replace('/"([^"]+)"/', '`$1`', $colDef);

            // SQLite integer primary key autoincrement -> MySQL bigint unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY
            if (preg_match('/`([^`]+)`\s+integer\s+primary\s+key\s+autoincrement/i', $colDef, $m)) {
                $convertedColumns[] = "`{$m[1]}` bigint unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY";
                continue;
            }

            if (preg_match('/`([^`]+)`\s+integer\s+primary\s+key\s+not\s+null/i', $colDef, $m)) {
                $convertedColumns[] = "`{$m[1]}` bigint unsigned NOT NULL PRIMARY KEY";
                continue;
            }

            // Extract column name and rest
            if (preg_match('/^`([^`]+)`\s+(.*)$/s', $colDef, $parts)) {
                $colName = $parts[1];
                $typeAndRest = $parts[2];

                // Replace column types (only the type keyword at the start)
                $typeAndRest = preg_replace('/^varchar(?!\s*\()/i', 'varchar(255)', $typeAndRest);
                $typeAndRest = preg_replace('/^text\b/i', 'longtext', $typeAndRest);
                $typeAndRest = preg_replace('/^integer\b/i', 'bigint', $typeAndRest);

                // Convert SQLite defaults: default ('0') or default ('TEXT')
                $typeAndRest = preg_replace('/default\s*\(\s*\'([^\']*)\'\s*\)/i', "DEFAULT '$1'", $typeAndRest);
                $typeAndRest = preg_replace('/default\s*\(\s*(\d+)\s*\)/i', 'DEFAULT $1', $typeAndRest);

                $convertedColumns[] = "`{$colName}` {$typeAndRest}";
            } else {
                $convertedColumns[] = $colDef;
            }
        }

        $out = "DROP TABLE IF EXISTS `{$tableName}`;\n";
        $out .= "CREATE TABLE `{$tableName}` (\n  " . implode(",\n  ", $convertedColumns) . "\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

        return $out;
    }

    /**
     * Convert SQLite index statements to MySQL.
     */
    protected function convertSqliteIndexToMysql(string $sqliteIndexSql): ?string
    {
        $sql = trim($sqliteIndexSql);

        // CREATE [UNIQUE] INDEX "name" on "table" ("col1", "col2")
        if (preg_match('/CREATE\s+(UNIQUE\s+)?INDEX\s+"?([^"\s]+)"?\s+on\s+"?([^"\s]+)"?\s*\((.+)\)/i', $sql, $m)) {
            $unique = !empty($m[1]) ? 'UNIQUE ' : '';
            $indexName = $m[2];
            $tableName = $m[3];
            $cols = preg_replace('/"([^"]+)"/', '`$1`', $m[4]);

            return "CREATE {$unique}INDEX `{$indexName}` ON `{$tableName}` ({$cols})";
        }

        return null;
    }
}
