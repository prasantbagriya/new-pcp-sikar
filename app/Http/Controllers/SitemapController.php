<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;
use App\Models\Community;
use App\Models\Author;
use App\Models\Story;

class SitemapController extends Controller
{
    /**
     * Resolve canonical base domain (always https://sikareducationhub.com in sitemaps).
     */
    public static function canonicalBase(): string
    {
        $appUrl = config('app.url');
        if (!empty($appUrl) && !str_contains($appUrl, '127.0.0.1') && !str_contains($appUrl, 'localhost')) {
            return rtrim($appUrl, '/');
        }
        return 'https://sikareducationhub.com';
    }

    public function index()
    {
        return response()->view('sitemap.index', ['baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function pages()
    {
        return response()->view('sitemap.pages', ['baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function blogPosts()
    {
        $posts = Post::where('published', true)
            ->where(function($q) { $q->where('isNoIndex', false)->orWhereNull('isNoIndex'); })
            ->whereNull('community_id')
            ->orderBy('updated_at', 'desc')
            ->get();
        return response()->view('sitemap.posts', ['posts' => $posts, 'baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function communityPosts()
    {
        $posts = Post::where('published', true)
            ->where(function($q) { $q->where('isNoIndex', false)->orWhereNull('isNoIndex'); })
            ->whereNotNull('community_id')
            ->with('community')
            ->orderBy('updated_at', 'desc')
            ->get();
        return response()->view('sitemap.community_posts', ['posts' => $posts, 'baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function categories()
    {
        $categories = Category::orderBy('updated_at', 'desc')->get();
        return response()->view('sitemap.categories', ['categories' => $categories, 'baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function communities()
    {
        $communities = Community::orderBy('updated_at', 'desc')->get();
        return response()->view('sitemap.communities', ['communities' => $communities, 'baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function authors()
    {
        $authors = Author::orderBy('updated_at', 'desc')->get();
        return response()->view('sitemap.authors', ['authors' => $authors, 'baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function stories()
    {
        $stories = Story::where('published', true)
            ->where(function($q) { $q->where('isNoIndex', false)->orWhereNull('isNoIndex'); })
            ->orderBy('updated_at', 'desc')
            ->get();
        return response()->view('sitemap.stories', ['stories' => $stories, 'baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }

    public function businesses()
    {
        $businesses = \App\Models\Business::orderBy('updated_at', 'desc')->get();
        return response()->view('sitemap.businesses', ['businesses' => $businesses, 'baseUrl' => self::canonicalBase()])
            ->header('Content-Type', 'text/xml; charset=utf-8');
    }
}
