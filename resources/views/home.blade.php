<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="content-language" content="{{ str_replace('_', '-', app()->getLocale()) }}">

    <title>{{ $meta['title'] ?? config('app.name', 'Your Search will End Here...') }}</title>
    <meta name="description" content="{{ $meta['description'] ?? 'Explore top schools, colleges, and coaching institutes in Sikar with Sikar Education Hub.' }}">
    <meta name="robots" content="{{ $meta['robots'] ?? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }}">
    <link rel="canonical" href="{{ $meta['url'] ?? url()->current() }}">
    <meta property="og:locale" content="{{ str_replace('-', '_', app()->getLocale()) }}">
    <meta property="og:title" content="{{ $meta['og_title'] ?? $meta['title'] ?? 'Sikar Education Hub' }}">
    <meta property="og:description" content="{{ $meta['og_description'] ?? $meta['description'] ?? 'Explore top schools, colleges, and coaching institutes in Sikar with Sikar Education Hub.' }}">
    <meta property="og:url" content="{{ $meta['url'] ?? url()->current() }}">
    <meta property="og:type" content="{{ $meta['type'] ?? 'website' }}">
    @if(!empty($meta['og_image']))
    <meta property="og:image" content="{{ $meta['og_image'] }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:image" content="{{ $meta['og_image'] }}">
    @endif
    <meta name="twitter:card" content="{{ $meta['twitter_card'] ?? 'summary_large_image' }}">
    <meta name="twitter:site" content="@sikareducationhub">
    <meta name="twitter:creator" content="@sikareducationhub">
    <meta name="twitter:title" content="{{ $meta['twitter_title'] ?? $meta['title'] ?? 'Sikar Education Hub' }}">
    <meta name="twitter:description" content="{{ $meta['twitter_description'] ?? $meta['description'] ?? 'Explore top schools, colleges, and coaching institutes in Sikar with Sikar Education Hub.' }}">
    @if(!empty($meta['keywords']))
    <meta name="keywords" content="{{ $meta['keywords'] }}">
    @endif

    @foreach($meta['schemas'] ?? [] as $schema)
    <script type="application/ld+json">{!! json_encode($schema, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_AMP | JSON_HEX_QUOT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}</script>
    @endforeach
    @if(!empty($meta['preload_image']))
    <link rel="preload" as="image" href="{{ $meta['preload_image'] }}" fetchpriority="high">
    @endif

    <meta name="msvalidate.01" content="{{ env('BING_SITE_VERIFICATION', 'FB8652B2A23AAD6CEE2AF8CACF4580A9') }}">

    <link rel="alternate" type="application/rss+xml" title="Blog RSS Feed" href="{{ url('/blog/feed.xml') }}">
    <link rel="icon" type="image/png" href="/uploads/pcp_logo.png">
    <link rel="apple-touch-icon" href="/uploads/pcp_logo.png">



    <script>
        try {
            var rawBase = "{{ url('') }}";
            window.BASE_PATH = new URL(rawBase, window.location.origin).pathname;
            if (window.BASE_PATH === '/') window.BASE_PATH = '';
        } catch (e) {
            window.BASE_PATH = '';
        }
        // Force light white theme as per user specification
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    </script>
    {{-- Critical CSS: only the minimum needed to paint the above-the-fold hero skeleton
         without any render-blocking external request. --}}
    <style>
        *,*::before,*::after{box-sizing:border-box;padding:0;margin:0}
        html{overflow-x:clip;overflow-y:scroll;font-size:16px;-webkit-text-size-adjust:100%;text-size-adjust:100%;scroll-behavior:smooth}
        body{max-width:100vw;overflow-x:clip;font-family:'Outfit',system-ui,-apple-system,sans-serif;background:#ffffff;color:#0f172a;line-height:1.75;letter-spacing:0.01em;-webkit-font-smoothing:antialiased}
        img,video{max-width:100%;height:auto;display:block}
        h1,h2,h3,h4,h5,h6{font-weight:700;line-height:1.36;letter-spacing:0.01em;margin-bottom:1rem;color:#0f172a}
        p,span,li,a{line-height:1.7;letter-spacing:0.01em}
        .tracking-tight,.tracking-tighter{letter-spacing:normal !important}
        a{color:inherit;text-decoration:none}
        .btn-brand-yellow{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:9999px;background:#ffc107;color:#000000;font-weight:800;font-size:.875rem;box-shadow:0 10px 15px -3px rgba(255,193,7,.3);transition:all .15s;border:none;cursor:pointer}
        @keyframes pcpSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes pcpPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.96)}}
    </style>

    {{-- Non-blocking CSS: load the full home stylesheet without blocking rendering.
         The media="print" trick causes browsers to fetch at low priority;
         onload swaps it to media="all" so all styles apply after first paint. --}}
    @php
        $homeCssHref = null;
        try {
            $manifestPath = public_path('build/manifest.json');
            if (file_exists($manifestPath)) {
                $manifest = json_decode(file_get_contents($manifestPath), true);
                // home.pcss is a top-level Vite entry; 'file' is the hashed CSS filename
                $pcssEntry = $manifest['resources/css/home.pcss'] ?? null;
                if ($pcssEntry && !empty($pcssEntry['file'])) {
                    $homeCssHref = asset('build/' . $pcssEntry['file']);
                }
            }
        } catch (\Throwable $e) {}
    @endphp
    @if($homeCssHref)
    <link rel="preload" href="{{ $homeCssHref }}" as="style" fetchpriority="low">
    <link rel="stylesheet" href="{{ $homeCssHref }}" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="{{ $homeCssHref }}"></noscript>
    @endif

    {{-- Vite JS entry only (CSS is handled above; Vite emits the <script type="module"> tag which is non-blocking by spec) --}}
    @vite('resources/js/home.jsx')


    {{-- Load analytics after an interaction or an extended quiet period. --}}
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        const loadAnalytics = () => {
            if (window.__analyticsLoaded) return;
            window.__analyticsLoaded = true;
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NRXEX23V4X';
            script.fetchPriority = 'low';
            document.head.appendChild(script);

            const swgScript = document.createElement('script');
            swgScript.async = true;
            swgScript.src = 'https://news.google.com/swg/js/v1/swg-basic.js';
            swgScript.fetchPriority = 'low';
            document.head.appendChild(swgScript);

            gtag('js', new Date());
            gtag('config', 'G-NRXEX23V4X');
        };
        const scheduleAnalytics = () => {
            if (window.__analyticsScheduled) return;
            window.__analyticsScheduled = true;
            if ('requestIdleCallback' in window) window.requestIdleCallback(loadAnalytics, { timeout: 2000 });
            else window.setTimeout(loadAnalytics, 1000);
        };
        const scheduleAfterLoad = () => {
            if (document.readyState === 'complete') scheduleAnalytics();
            else window.addEventListener('load', scheduleAnalytics, { once: true });
        };
        const engagementEvents = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
        const onFirstEngagement = () => {
            engagementEvents.forEach((eventName) => window.removeEventListener(eventName, onFirstEngagement));
            scheduleAfterLoad();
        };
        engagementEvents.forEach((eventName) => window.addEventListener(eventName, onFirstEngagement, { passive: true, once: true }));
        window.setTimeout(scheduleAfterLoad, 8000);
    </script>

    <!-- Google Publisher SWG -->
    <script>
    (self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
        basicSubscriptions.init({
        type: "NewsArticle",
        isPartOfType: ["Product"],
        isPartOfProductId: "CAowxuXhCw:openaccess",
        clientOptions: { theme: "light", lang: "en" },
        });
    });
    </script>

</head>
<body class="font-sans antialiased">
    <div id="home-app">
        <div id="home-preloader" style="min-height:80vh; width:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#ffffff; padding:3rem 1.5rem;">
            <div style="position:relative; width:88px; height:88px; display:flex; align-items:center; justify-content:center;">
                <!-- Spinning gradient border ring -->
                <div style="position:absolute; inset:0; border-radius:50%; border:3.5px solid #f3e8ff; border-top-color:#5b40cf; border-right-color:#f59e0b; animation:pcpSpin 0.85s cubic-bezier(0.4, 0, 0.2, 1) infinite;"></div>
                <!-- Soft pulsing ambient core -->
                <div style="position:absolute; inset:6px; border-radius:50%; background:radial-gradient(circle, rgba(91,64,207,0.12) 0%, transparent 70%); animation:pcpPulse 1.6s ease-in-out infinite;"></div>
                <!-- PCP Sikar Logo -->
                <img src="/uploads/pcp_logo.png" alt="PCP Sikar" width="50" height="50" style="width:50px; height:50px; object-fit:contain; border-radius:50%; position:relative; z-index:2;" />
            </div>
            <div style="margin-top:1.25rem; font-weight:900; font-size:1.125rem; letter-spacing:0.04em; color:#2e0854; font-family:'Outfit',system-ui,sans-serif;">PCP SIKAR</div>
            <div style="margin-top:0.35rem; display:flex; align-items:center; gap:0.5rem; font-size:0.75rem; font-weight:700; color:#6b21a8; letter-spacing:0.06em; text-transform:uppercase;">
                <span>Preparing Rankers</span>
                <span style="display:inline-block; width:5px; height:5px; border-radius:50%; background:#f59e0b; animation:pcpPulse 1s infinite alternate;"></span>
                <span>Session 2026-27</span>
            </div>
        </div>
    </div>
    <script id="home-props" type="application/json">{!! json_encode([
        'featuredPosts' => $featuredPosts ?? [],
        'recentPosts' => $recentPosts ?? [],
        'trendingPosts' => $trendingPosts ?? [],
        'morePosts' => $morePosts ?? [],
        'publishedStories' => $publishedStories ?? [],
        'sliders' => $sliders ?? [],
        'categories' => $categories ?? [],
        'meta' => $meta ?? [],
        'featuredBusinesses' => $featuredBusinesses ?? [],
        'feedPosts' => $feedPosts ?? [],
        'topCommunities' => $topCommunities ?? [],
        'global_nav' => $global_nav ?? [],
        'reviewsData' => $reviewsData ?? null,
    ], JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_AMP | JSON_HEX_QUOT) !!}</script>
</body>
</html>
