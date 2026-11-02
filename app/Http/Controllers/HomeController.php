<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Story;
use App\Models\Community;

class HomeController extends Controller
{
    public function index()
    {
        $getHomeData = function () {
            // Eager load author and select necessary fields for magazine layout
            $allPublishedPosts = Post::where('published', true)
                ->whereNull('community_id')
                ->with(['author:id,name,username'])
                ->select(['id', 'slug', 'title', 'excerpt', 'coverImage', 'category', 'date', 'url_format', 'author_id'])
                ->orderBy('date', 'desc')
                ->take(24)
                ->get()
                ->map(function ($p) {
                    $authorName = 'Sikar Education Hub';
                    if ($p->author) {
                        $authorName = $p->author->name ?: ($p->author->username ?: 'Sikar Education Hub');
                    }
                    $rawExcerpt = strip_tags($p->excerpt ?: '');
                    $cleanExcerpt = \Illuminate\Support\Str::limit(preg_replace('/\s+/', ' ', $rawExcerpt), 140);
                    return [
                        'id' => $p->id,
                        'slug' => $p->slug,
                        'title' => $p->title,
                        'excerpt' => $cleanExcerpt,
                        'coverImage' => $p->coverImage,
                        'category' => $p->category ?: 'Education',
                        'date' => $p->date ? $p->date->toIso8601String() : now()->toIso8601String(),
                        'url_format' => $p->url_format ?: '{slug}',
                        'url_path' => $p->url_path,
                        'author_name' => $authorName,
                    ];
                })
                ->toArray();

            $featuredPosts = array_slice($allPublishedPosts, 0, 4);
            $recentPosts = array_slice($allPublishedPosts, 4, 16);
            $trendingPosts = array_slice($allPublishedPosts, 0, 5);

            $publishedStories = Story::where('published', true)
                ->select(['id', 'slug', 'title', 'posterImage'])
                ->take(4)
                ->get()
                ->toArray();
            $sliders = \App\Models\Slider::where('active', true)
                ->where(function($q) {
                    $q->where('locations', 'like', '%"home"%')
                      ->orWhere('locations', 'like', '%home%')
                      ->orWhereNull('locations'); // Backward compatibility for sliders before this feature
                })
                ->select(['id', 'image_url', 'title', 'subtitle', 'link', 'order'])
                ->orderBy('order', 'asc')
                ->get()
                ->map(function ($slider) {
                    $slider->image_url = $this->responsiveImageUrl($slider->image_url, 672);

                    return $slider;
                })
                ->toArray();

            $categories = \App\Models\Category::select(['id', 'name', 'slug', 'description'])
                ->get()
                ->map(function ($cat) {
                    $count = Post::where('published', true)
                        ->where(function($q) use ($cat) {
                            $q->where('category', $cat->name)
                              ->orWhere('category_id', $cat->id)
                              ->orWhere('category', $cat->slug);
                        })->count();
                    $cat->posts_count = $count;
                    return $cat;
                })
                ->sortByDesc('posts_count')
                ->values()
                ->toArray();
            $featuredBusinesses = [];
            // Hero section utilizes CSS gradient and branded elements; no external LCP background image preload needed
            $heroImage = null;

            $feedPosts = [];
            $topCommunities = [];

            return [
                'morePosts' => $allPublishedPosts,
                'featuredPosts' => $featuredPosts,
                'recentPosts' => $recentPosts,
                'trendingPosts' => $trendingPosts,
                'categories' => $categories,
                'publishedStories' => $publishedStories,
                'sliders' => $sliders,
                'featuredBusinesses' => $featuredBusinesses,
                'feedPosts' => $feedPosts,
                'topCommunities' => $topCommunities,
                'meta' => [
                    'title' => 'PCP Sikar | Top JEE & NEET Coaching in Sikar & Jaipur Since 2009',
                    'description' => 'PCP Sikar (Prince Career Pioneer) is a premier JEE & NEET coaching institute in Sikar and Jaipur since 2009. Known for NEET AIR-1, JEE Advanced toppers, 12-hour continuous doubt desks, disciplined campuses, and AC hostels.',
                    'keywords' => 'pcp sikar, prince career pioneer, jee neet coaching sikar, pcp sikar campus, pcp sikar results, pcp sikar hostel, best neet coaching in sikar, best jee coaching in sikar, pcp jaipur',
                    'og_title' => 'PCP Sikar | Trusted JEE & NEET Coaching Institute in Sikar & Jaipur',
                    'og_description' => 'PCP Sikar is a leading JEE & NEET coaching institute in Sikar and Jaipur since 2009. Part of Prince Eduhub, known for disciplined campuses, expert faculty, hostels, and consistent top results.',
                    'twitter_title' => 'PCP Sikar - Top JEE & NEET Coaching in Sikar & Jaipur',
                    'twitter_description' => 'PCP Sikar is a leading JEE & NEET coaching institute in Sikar and Jaipur since 2009. Part of Prince Eduhub, known for disciplined campuses, expert faculty, hostels, and consistent top results.',
                    'url' => url('/'),
                    'type' => 'website',
                    'og_image' => url('/uploads/pcp/Neet-2026.jpg'),
                    'twitter_card' => 'summary_large_image',
                    // Blade emits this before the JavaScript application starts, allowing
                    // the browser to request the LCP image immediately.
                    'preload_image' => $heroImage,
                    'schemas' => [
                        [
                            "@context" => "https://schema.org",
                            "@graph" => [
                                [
                                    "@type" => "WebSite",
                                    "@id" => url('/') . "/#website",
                                    "url" => url('/'),
                                    "name" => "PCP Sikar",
                                    "potentialAction" => [
                                        "@type" => "SearchAction",
                                        "target" => url('/search?q={search_term_string}'),
                                        "query-input" => "required name=search_term_string"
                                    ]
                                ],
                                [
                                    "@type" => "Organization",
                                    "@id" => url('/') . "/#organization",
                                    "name" => "PCP Sikar (Prince Career Pioneer)",
                                    "url" => url('/'),
                                    "logo" => [
                                        "@type" => "ImageObject",
                                        "url" => url('/uploads/pcp_logo.png')
                                    ],
                                    "sameAs" => [
                                        "https://pcpsikar.com",
                                        "https://www.facebook.com/pcpsikar",
                                        "https://www.youtube.com/@pcpsikar",
                                        "https://www.instagram.com/pcp_sikar"
                                    ]
                                ],
                                [
                                    "@type" => "EducationalOrganization",
                                    "@id" => url('/') . "/#educationalorganization",
                                    "name" => "PCP Sikar (Prime Branch)",
                                    "url" => url('/'),
                                    "image" => url('/uploads/pcp_logo.png'),
                                    "telephone" => "+91-9610892222",
                                    "address" => [
                                        "@type" => "PostalAddress",
                                        "streetAddress" => "Palwas Road",
                                        "addressLocality" => "Sikar",
                                        "addressRegion" => "Rajasthan",
                                        "postalCode" => "332001",
                                        "addressCountry" => "IN"
                                    ],
                                    "sameAs" => [
                                        "https://pcpsikar.com"
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ];
        };

        try {
            $homeData = \Illuminate\Support\Facades\Cache::remember('homepage_data_pcp_v1', 3600, $getHomeData);
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::warning('Homepage cache error: ' . $e->getMessage());
            $homeData = $getHomeData();
        }

        // Dynamically replace .png/.jpg to .webp for any images from /uploads/ in the homepage data
        // array_walk_recursive($homeData, function(&$item) {
        //     if (is_string($item) && str_contains($item, 'uploads/')) {
        //         $item = preg_replace('/(uploads\/[^"\'\s>]+)\.(png|jpg|jpeg|bmp)/i', '$1.webp', $item);
        //     }
        // });

        $global_nav = [];
        try {
            $global_nav = \Illuminate\Support\Facades\Cache::remember('global_nav_active', 86400, function () {
                if (\Illuminate\Support\Facades\Schema::hasTable('navigations')) {
                    return \App\Models\Navigation::where('is_active', true)
                        ->orWhere('show_in_footer', true)
                        ->orderBy('order', 'asc')
                        ->get()
                        ->toArray();
                }
                return [];
            });
        } catch (\Exception $e) {}

        $reviewsData = null;
        try {
            $reviewsData = \Illuminate\Support\Facades\Cache::remember('pcp_reviews_data_v4', 3600, function () {
                try {
                    $response = \Illuminate\Support\Facades\Http::timeout(3)->get('https://app.coachingsinsikar.com/api/widget/reviews?locationName=accounts%2F113869565307694473678%2Flocations%2F4936449928671220296&minRating=4');
                    if ($response->successful()) {
                        return $response->json();
                    }
                } catch (\Throwable $e) {}

                $localFile = base_path('pcp_reviews_data.json');
                if (file_exists($localFile)) {
                    return json_decode(file_get_contents($localFile), true);
                }
                return null;
            });
        } catch (\Throwable $e) {}

        $viewData = [
            'morePosts' => $homeData['morePosts'] ?? [],
            'featuredPosts' => $homeData['featuredPosts'] ?? [],
            'recentPosts' => $homeData['recentPosts'] ?? [],
            'trendingPosts' => $homeData['trendingPosts'] ?? [],
            'publishedStories' => $homeData['publishedStories'] ?? [],
            'sliders' => $homeData['sliders'] ?? [],
            'categories' => $homeData['categories'] ?? [],
            'meta' => $homeData['meta'] ?? [],
            'featuredBusinesses' => $homeData['featuredBusinesses'] ?? [],
            'feedPosts' => $homeData['feedPosts'] ?? [],
            'topCommunities' => $homeData['topCommunities'] ?? [],
            'global_nav' => $global_nav,
            'reviewsData' => $reviewsData,
        ];

        return view('home', $viewData);
    }

    public function getFeedData()
    {
        try {
            $homeData = \Illuminate\Support\Facades\Cache::get('homepage_data_v6');
        } catch (\Throwable $e) {
            $homeData = null;
        }

        if (!$homeData) {
            $this->index();
            try {
                $homeData = \Illuminate\Support\Facades\Cache::get('homepage_data_v6');
            } catch (\Throwable $e) {
                $homeData = null;
            }
        }

        if (!isset($homeData['topCommunities'])) {
            $homeData['topCommunities'] = [];
        }
        if (!isset($homeData['feedPosts'])) {
            $homeData['feedPosts'] = [];
        }

        // Map joined status for communities outside the cache
        if (auth()->check()) {
            $joinedIds = auth()->user()->communities()->pluck('communities.id')->toArray();
            foreach ($homeData['topCommunities'] as &$community) {
                $community['is_joined'] = in_array($community['id'], $joinedIds);
            }
            
            $votedPostIds = \Illuminate\Support\Facades\DB::table('votes')
                ->where('user_id', auth()->id())
                ->where('votable_type', \App\Models\Post::class)
                ->where('value', 1)
                ->pluck('votable_id')->toArray();
            foreach ($homeData['feedPosts'] as &$post) {
                $post['has_voted'] = in_array($post['id'], $votedPostIds);
            }
        } else {
            foreach ($homeData['topCommunities'] as &$community) {
                $community['is_joined'] = false;
            }
            foreach ($homeData['feedPosts'] as &$post) {
                $post['has_voted'] = false;
            }
        }

        return response()->json([
            'featuredBusinesses' => $homeData['featuredBusinesses'] ?? [],
            'feedPosts' => $homeData['feedPosts'],
            'topCommunities' => $homeData['topCommunities'],
        ]);
    }

    private function responsiveImageUrl(?string $imageUrl, int $width): ?string
    {
        if (! $imageUrl || ! str_starts_with($imageUrl, '/uploads/')) {
            return $imageUrl;
        }

        return '/images/' . $width . '/' . ltrim(substr($imageUrl, strlen('/uploads/')), '/');
    }
}
