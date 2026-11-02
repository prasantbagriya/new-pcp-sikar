import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, Image } from './utils';
import { 
    Clock, 
    Calendar, 
    ArrowRight, 
    TrendingUp, 
    BookOpen, 
    ShieldCheck, 
    Mail, 
    Search,
    CheckCircle2
} from 'lucide-react';

const EditorialFeed = ({ 
    posts = [], 
    categories = [], 
    trendingPosts = [], 
    basePath = '', 
    formatDate 
}) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [emailSub, setEmailSub] = useState('');
    const [subMessage, setSubMessage] = useState('');
    const [isDesktop, setIsDesktop] = useState(false);
    const [showAllMobile, setShowAllMobile] = useState(false);

    const leftFeedRef = useRef(null);
    const rightSidebarRef = useRef(null);
    const [sidebarHeight, setSidebarHeight] = useState(null);

    // Keep Left Feed container height matched to the Right Sidebar bottom on Desktop only
    useEffect(() => {
        const handleResize = () => {
            const isDesk = typeof window !== 'undefined' && window.innerWidth >= 1024;
            setIsDesktop(isDesk);
            if (rightSidebarRef.current && isDesk) {
                setSidebarHeight(rightSidebarRef.current.offsetHeight);
            } else {
                setSidebarHeight(null);
            }
        };

        handleResize();
        const timer = setTimeout(handleResize, 350);
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [posts, categories, trendingPosts, selectedCategory]);

    // Filter posts by selected category tab
    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'All') return posts;
        return posts.filter(p => (p.category || '').toLowerCase() === selectedCategory.toLowerCase());
    }, [posts, selectedCategory]);

    // On Desktop: pass mouse wheel directly to window when reaching top/bottom so screen never gets stuck
    useEffect(() => {
        const el = leftFeedRef.current;
        if (!el || !isDesktop) return;

        const onWheel = (e) => {
            const { scrollTop, scrollHeight, clientHeight } = el;
            const isScrollingDown = e.deltaY > 0;
            const isScrollingUp = e.deltaY < 0;
            const atBottom = scrollTop + clientHeight >= scrollHeight - 3;
            const atTop = scrollTop <= 3;

            // When reaching boundary, seamlessly scroll window
            if ((isScrollingDown && atBottom) || (isScrollingUp && atTop)) {
                window.scrollBy({ top: e.deltaY, behavior: 'auto' });
            }
        };

        el.addEventListener('wheel', onWheel, { passive: true });
        return () => el.removeEventListener('wheel', onWheel);
    }, [isDesktop, sidebarHeight, filteredPosts]);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setShowAllMobile(false);
        if (leftFeedRef.current && isDesktop) {
            leftFeedRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const getPostUrl = (post) => {
        if (!post) return '#';
        return `${basePath || ''}${post.url_path || '/' + post.slug}`;
    };

    const getCategoryUrl = (category) => {
        if (!category) return '#';
        const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `${basePath || ''}/category/${slug}`;
    };



    const handleSubscribe = (e) => {
        e.preventDefault();
        if (emailSub.trim()) {
            setSubMessage('Thank you! You have subscribed to Sikar Education Hub updates.');
            setEmailSub('');
        }
    };

    // Main category pills to display
    const topCategoryPills = [
        'All',
        'CBSE Schools',
        'Jee Coachings',
        'NEET UG',
        'Colleges',
        'Defence Coaching',
        'English Medium Schools',
        'Hospitals',
        'News'
    ];

    const renderCard = (post, idx) => (
        <article
            key={post.id || idx}
            className="group flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300/70 dark:hover:border-zinc-700 transition-all duration-300"
        >
            {/* Thumbnail with Hover Zoom */}
            <Link
                href={getPostUrl(post)}
                className="relative aspect-[16/10] w-full block overflow-hidden bg-slate-100 dark:bg-zinc-800"
            >
                <Image
                    src={post.coverImage || '/uploads/2026/07/Logo_sikareducationhub.png'}
                    alt={post.title}
                    fill={true}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#082755] text-white shadow-sm border border-[#f2650b]/30">
                        {post.category || 'Article'}
                    </span>
                </div>
            </Link>

            {/* Card Body */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-zinc-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                    </span>
                    <span>•</span>
                    <span>{Math.max(3, Math.ceil((post.excerpt?.length || 100) / 40))} min read</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 mb-2 group-hover:text-[#f2650b] dark:group-hover:text-orange-400 transition-colors">
                    <Link href={getPostUrl(post)}>
                        {post.title}
                    </Link>
                </h3>

                {post.excerpt && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed font-normal">
                        {post.excerpt}
                    </p>
                )}

                <div className="mt-auto pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                    <span className="font-medium text-slate-700 dark:text-zinc-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 inline" />
                        {post.author_name || 'Prasant'}
                    </span>
                    <Link
                        href={getPostUrl(post)}
                        className="font-bold text-[#f2650b] dark:text-orange-400 inline-flex items-center gap-1 hover:underline"
                    >
                        Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </article>
    );

    return (
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-10">
            {/* Section Header */}
            <div className="mb-8 border-b border-slate-200 dark:border-zinc-800 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            Latest Educational Updates & Guides
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                            Explore verified coaching reviews, school admissions, fees, and exam results in Sikar
                        </p>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                        <Link 
                            href={`${basePath || ''}/search`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:text-[#f2650b] dark:hover:text-orange-400 hover:border-orange-300 transition-colors shadow-sm"
                        >
                            <Search className="w-3.5 h-3.5" /> Search All
                        </Link>
                    </div>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                    {topCategoryPills.map((cat) => {
                        const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
                        return (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                                    isSelected
                                        ? 'bg-gradient-to-r from-[#f2650b] to-[#ea580c] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-400/20'
                                        : 'bg-white hover:bg-orange-50/60 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-700/80'
                                }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Layout: 8 cols (Merged 2-Column Cards Feed) + 4 cols (Right Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* 8 Cols: Merged 2-Column Card Grid (Clean, borderless, zero scrollbar line) */}
                <div className="lg:col-span-8 flex flex-col">
                    {filteredPosts.length > 0 ? (
                        <div
                            ref={leftFeedRef}
                            className={
                                isDesktop 
                                    ? "overflow-y-auto overscroll-auto no-scrollbar [&::-webkit-scrollbar]:hidden" 
                                    : "overflow-visible h-auto max-h-none"
                            }
                            style={
                                isDesktop && sidebarHeight 
                                    ? {
                                        height: `${sidebarHeight}px`,
                                        maxHeight: `${sidebarHeight}px`,
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none'
                                    } 
                                    : {}
                            }
                        >
                            {/* 2-Column Grid on tablet/desktop, clean native flow on mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 pb-2">
                                {(isDesktop || showAllMobile ? filteredPosts : filteredPosts.slice(0, 6)).map((post, idx) => renderCard(post, idx))}
                            </div>

                            {/* Mobile View More Button (prevents huge scroll on phone while keeping page 100% natural) */}
                            {!isDesktop && !showAllMobile && filteredPosts.length > 6 && (
                                <div className="text-center pt-5 pb-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowAllMobile(true)}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 dark:from-zinc-800 dark:to-zinc-800 text-[#f2650b] dark:text-orange-400 font-bold text-xs uppercase tracking-wider transition-all shadow-sm border border-orange-200/80 dark:border-zinc-700 cursor-pointer active:scale-95"
                                    >
                                        View All {filteredPosts.length} Articles
                                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-20 px-4 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800">
                            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-200 mb-1">
                                No articles found in this category
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-zinc-400 mb-4">
                                Browse all articles to explore coaching, schools, and results in Sikar.
                            </p>
                            <button
                                type="button"
                                onClick={() => setSelectedCategory('All')}
                                className="px-5 py-2.5 bg-[#082755] hover:bg-[#0c3570] text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
                            >
                                View All Articles
                            </button>
                        </div>
                    )}
                </div>

                {/* 4 Cols: Right Sidebar (Natural flow, allows page scrolling cleanly down through Stay Updated box) */}
                <aside ref={rightSidebarRef} className="lg:col-span-4 space-y-8">
                    {/* Widget 1: About Sikar Education Hub */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 p-2 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                                <img
                                    src="/images/384/2026/07/Logo_sikareducationhub.png"
                                    loading="lazy"
                                    decoding="async"
                                    width="48"
                                    height="48"
                                    alt="Sikar Education Hub"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-1.5">
                                    Sikar Education Hub <ShieldCheck className="w-4 h-4 text-[#f2650b]" />
                                </h4>
                                <span className="text-xs text-slate-500 dark:text-zinc-400">
                                    Trusted Education Companion
                                </span>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                            Sikar Education Hub is the dedicated education information platform providing unbiased guides, coaching rankings, fee comparisons, and school admission insights in Sikar, Rajasthan.
                        </p>
                        <Link
                            href={`${basePath || ''}/about`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#f2650b] dark:text-orange-400 hover:underline"
                        >
                            Learn More About Us <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Widget 2: Trending / Top Reads */}
                    {trendingPosts && trendingPosts.length > 0 && (
                        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
                            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-100 dark:border-zinc-800">
                                <TrendingUp className="w-4 h-4 text-[#f2650b]" />
                                <h4 className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                                    Trending in Sikar
                                </h4>
                            </div>

                            <div className="space-y-4">
                                {trendingPosts.map((post, idx) => (
                                    <article key={post.id || idx} className="flex items-start gap-3.5 group">
                                        <span className="text-2xl font-black text-slate-300 dark:text-zinc-700 leading-none shrink-0 w-6">
                                            0{idx + 1}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <Link
                                                href={getCategoryUrl(post.category)}
                                                className="text-[10px] font-bold uppercase tracking-wider text-[#f2650b] dark:text-orange-400 hover:underline block mb-1"
                                            >
                                                {post.category}
                                            </Link>
                                            <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-zinc-200 leading-snug line-clamp-2 group-hover:text-[#f2650b] dark:group-hover:text-orange-400 transition-colors">
                                                <Link href={getPostUrl(post)}>{post.title}</Link>
                                            </h5>
                                            <span className="text-[11px] text-slate-400 dark:text-zinc-500 mt-1 block">
                                                {formatDate(post.date)}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Widget 3: Categories Directory */}
                    {categories && categories.length > 0 && (
                        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-zinc-800">
                                <BookOpen className="w-4 h-4 text-[#082755] dark:text-blue-400" />
                                <h4 className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                                    Explore Categories
                                </h4>
                            </div>

                            <div className="space-y-2">
                                {categories.slice(0, 10).map((cat) => (
                                    <Link
                                        key={cat.id || cat.slug}
                                        href={`${basePath || ''}/category/${cat.slug}`}
                                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-orange-50/50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm font-medium transition-colors group"
                                    >
                                        <span className="group-hover:text-[#f2650b] dark:group-hover:text-orange-400 transition-colors">
                                            {cat.name}
                                        </span>
                                        {cat.posts_count !== undefined && (
                                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:bg-orange-100/70 group-hover:text-[#f2650b] dark:group-hover:bg-orange-950/40 dark:group-hover:text-orange-400 transition-colors">
                                                {cat.posts_count}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Widget 4: Newsletter Subscription (Stay Updated with Sikar Education) */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#082755] via-[#0a316b] to-[#041530] text-white shadow-xl border border-orange-500/20">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 text-orange-400">
                            <Mail className="w-5 h-5 text-orange-400" />
                        </div>
                        <h4 className="font-extrabold text-lg leading-tight mb-2">
                            Stay Updated with Sikar Education
                        </h4>
                        <p className="text-xs text-blue-100/90 mb-4 leading-relaxed">
                            Get latest alerts on coaching admissions, board results, and scholarship exams in Sikar directly to your inbox.
                        </p>

                        {subMessage ? (
                            <div className="p-3 bg-white/20 rounded-xl text-xs font-semibold text-white">
                                {subMessage}
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="space-y-2.5">
                                <input
                                    type="email"
                                    required
                                    value={emailSub}
                                    onChange={(e) => setEmailSub(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#f2650b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                                >
                                    Subscribe Free
                                </button>
                            </form>
                        )}
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default EditorialFeed;
