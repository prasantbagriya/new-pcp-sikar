import React from 'react';
import { Link, Image } from './utils';
import { Clock, Calendar, ArrowRight, Flame } from 'lucide-react';

const HeroMagazine = ({ posts = [], basePath = '', formatDate }) => {
    if (!posts || posts.length === 0) return null;

    const primaryPost = posts[0];
    const secondaryPosts = posts.slice(1, 4);

    const getPostUrl = (post) => {
        if (!post) return '#';
        return `${basePath || ''}${post.url_path || '/' + post.slug}`;
    };

    const getCategoryUrl = (category) => {
        if (!category) return '#';
        const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `${basePath || ''}/category/${slug}`;
    };

    return (
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pt-4 pb-10">
            {/* Breaking / Trending Label */}
            <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-50 dark:bg-orange-950/60 text-[#f2650b] dark:text-orange-400 font-bold text-xs uppercase tracking-wider border border-orange-200/60 dark:border-orange-900/40">
                    <Flame className="w-3.5 h-3.5 fill-current animate-pulse text-[#f2650b]" /> Featured Stories
                </span>
                <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium hidden sm:inline">
                    Handpicked education guides & updates from Sikar
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* Primary Hero Post (Large 7 cols) */}
                {primaryPost && (
                    <article className="lg:col-span-7 group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#082755] min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] shadow-lg transition-transform duration-300">
                        {/* Background Cover Image with Hover Zoom */}
                        <div className="absolute inset-0 overflow-hidden">
                            <Image
                                src={primaryPost.coverImage || '/uploads/social-cover.webp'}
                                alt={primaryPost.title}
                                fill={true}
                                priority={true}
                                className="object-cover w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Rich Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#082755] via-[#082755]/70 to-transparent" />
                        </div>

                        {/* Content inside Primary Card */}
                        <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end text-white">
                            <div className="flex items-center gap-2.5 mb-3">
                                <Link
                                    href={getCategoryUrl(primaryPost.category)}
                                    className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#082755] hover:bg-[#0c3570] text-white border border-[#f2650b]/40 transition-colors shadow-sm"
                                >
                                    {primaryPost.category}
                                </Link>
                                <span className="inline-flex items-center gap-1 text-xs text-slate-300">
                                    <Calendar className="w-3 h-3 text-slate-400" />
                                    {formatDate(primaryPost.date)}
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug mb-3 text-white group-hover:text-amber-200 transition-colors">
                                <Link href={getPostUrl(primaryPost)}>
                                    {primaryPost.title}
                                </Link>
                            </h1>

                            {primaryPost.excerpt && (
                                <p className="text-slate-200 text-sm sm:text-base line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed font-normal max-w-2xl">
                                    {primaryPost.excerpt}
                                </p>
                            )}

                            <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-slate-300">
                                <span className="font-semibold text-white">
                                    By {primaryPost.author_name || 'Sikar Education Hub'}
                                </span>
                                <Link
                                    href={getPostUrl(primaryPost)}
                                    className="inline-flex items-center gap-1 text-[#f2650b] font-bold hover:text-amber-300 transition-colors"
                                >
                                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </article>
                )}

                {/* Secondary Featured Stack (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                    {secondaryPosts.map((post, idx) => (
                        <article
                            key={post.id || idx}
                            className="group flex gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-[#f2650b]/40 transition-all duration-300 flex-1 items-center"
                        >
                            {/* Thumbnail */}
                            <Link
                                href={getPostUrl(post)}
                                className="relative w-28 sm:w-36 h-24 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-zinc-800"
                            >
                                <Image
                                    src={post.coverImage || '/uploads/2026/07/Logo_sikareducationhub.png'}
                                    alt={post.title}
                                    fill={true}
                                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-108"
                                />
                            </Link>

                            {/* Details */}
                            <div className="flex flex-col flex-1 min-w-0 justify-center">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <Link
                                        href={getCategoryUrl(post.category)}
                                        className="text-[11px] font-bold uppercase tracking-wider text-[#f2650b] dark:text-orange-400 hover:underline line-clamp-1"
                                    >
                                        {post.category}
                                    </Link>
                                    <span className="text-[11px] text-slate-400 dark:text-zinc-500">
                                        • {formatDate(post.date)}
                                    </span>
                                </div>

                                <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#f2650b] dark:group-hover:text-orange-400 transition-colors">
                                    <Link href={getPostUrl(post)}>
                                        {post.title}
                                    </Link>
                                </h2>

                                {post.excerpt && (
                                    <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-1 mt-1 font-normal">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroMagazine;
