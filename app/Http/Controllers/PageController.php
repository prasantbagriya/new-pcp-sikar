<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function about()
    {
        return Inertia::render('Static/About', [
            'meta' => [
                'title'       => 'About Us | PCP Sikar & Sikar Education Hub',
                'h1'          => 'About PCP Sikar — 25 Years of Academic Legacy & AIR-1 Pedagogy',
                'description' => 'Learn about PCP Sikar & Sikar Education Hub — Rajasthan’s premier coaching institute for NEET-UG, IIT-JEE, and Pre-Foundation with 100+ acre residential headquarters in Sikar and Gopalpura Bypass Center in Jaipur.',
                'url'         => url('/about-us'),
            ],
        ]);
    }

    public function contact()
    {
        $dbPage = \App\Models\Page::whereIn('slug', ['contacts', 'contact'])->first();
        if ($dbPage) {
            return $this->showDynamicPage($dbPage);
        }

        return Inertia::render('Static/Contact', [
            'meta' => [
                'title'       => 'Contact Us | Sikar Education Hub',
                'h1'          => 'Contact Sikar Education Hub — Get in Touch With Our Team',
                'description' => 'Have a question about coaching or schools in Sikar? Reach out to the Sikar Education Hub team with suggestions, corrections, or inquiries.',
                'url'         => url('/contact'),
            ],
        ]);
    }

    public function submitContact(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        \App\Models\ContactMessage::create([
            'name'    => $validated['name'],
            'email'   => $validated['email'],
            'phone'   => $validated['phone'] ?? null,
            'subject' => $validated['subject'],
            'message' => $validated['message'],
            'status'  => 'unread',
        ]);

        return back()->with('success', 'Message sent successfully!');
    }

    public function editorialPolicy()
    {
        return Inertia::render('Static/EditorialPolicy', [
            'meta' => [
                'title'       => 'Editorial Policy | Sikar Education Hub',
                'h1'          => 'Editorial Policy — How We Create and Review Content',
                'description' => 'Read about Sikar Education Hub\'s editorial standards, fact-checking process, and commitment to accurate, unbiased education content.',
                'url'         => url('/editorial-policy'),
            ],
        ]);
    }

    public function factCheckingPolicy()
    {
        return Inertia::render('Static/FactCheckingPolicy', [
            'meta' => [
                'title'       => 'Fact-Checking Policy | Sikar Education Hub',
                'h1'          => 'Fact-Checking Policy — Our Commitment to Accuracy',
                'description' => 'Sikar Education Hub\'s fact-checking policy explains how we verify data, fees, results, and rankings of coaching institutes and schools in Sikar.',
                'url'         => url('/fact-checking-policy'),
            ],
        ]);
    }

    public function privacy()
    {
        $dbPage = \App\Models\Page::whereIn('slug', ['privacy', 'privacy-policy'])->first();
        if ($dbPage) {
            return $this->showDynamicPage($dbPage);
        }

        return Inertia::render('Static/Privacy', [
            'meta' => [
                'title'       => 'Privacy Policy | Sikar Education Hub',
                'h1'          => 'Privacy Policy — How We Handle Your Data',
                'description' => 'Read Sikar Education Hub\'s privacy policy to understand how we collect, use, and protect your personal information.',
                'url'         => url('/privacy'),
            ],
        ]);
    }

    public function terms()
    {
        return Inertia::render('Static/Terms', [
            'meta' => [
                'title'       => 'Terms of Service | Sikar Education Hub',
                'h1'          => 'Terms of Service — Rules for Using Sikar Education Hub',
                'description' => 'Review the terms and conditions governing your use of the Sikar Education Hub platform, including content, listings, and user responsibilities.',
                'url'         => url('/terms'),
            ],
        ]);
    }

    public function showDynamicPage(\App\Models\Page $page)
    {
        return Inertia::render('Static/CustomPage', [
            'page' => $page,
            'meta' => [
                'title'       => ($page->seo_title ?: $page->title) . ' | Sikar Education Hub',
                'h1'          => $page->title,
                'description' => $page->seo_description ?: '',
                'keywords'    => $page->seo_keywords ?: '',
                'og_title'    => ($page->og_title ?: ($page->seo_title ?: $page->title)) . ' | Sikar Education Hub',
                'og_description' => $page->og_description ?: $page->seo_description,
                'og_image'    => $page->og_image ?: url('/uploads/2026/07/Logo_sikareducationhub.png'),
                'url'         => url('/' . ltrim($page->slug, '/')),
            ],
            'faqs' => $page->faqs ?? [],
        ]);
    }

    public function search()
    {
        return Inertia::render('Search/Index');
    }
}

