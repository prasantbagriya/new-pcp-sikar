import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GlobalNavbar from '../../NextComponents/GlobalNavbar';
import BlogFooter from '../../NextComponents/BlogFooter';
import { CheckCheck, Sparkles, BookOpen } from 'lucide-react';

export default function EditorialPolicy() {
    return (
        <div className="bg-[#faf7fe] dark:bg-[#070d1e] min-h-screen flex flex-col font-sans selection:bg-purple-800 selection:text-white">
            <Head>
                <title>Editorial Policy &amp; Content Standards | Sikar Education Hub</title>
                <meta name="description" content="Learn how Sikar Education Hub researches, verifies, and updates articles on coachings, schools, and academic programs in Sikar with honesty and accuracy." />
            </Head>
            <GlobalNavbar />

            {/* PCP Hero Header */}
            <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#120326] text-white overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5b40cf]/25 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-200/80 mb-5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                        <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-amber-300 font-bold">Editorial Policy</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-widest mb-4">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        <span>EDITORIAL STANDARDS &amp; INTEGRITY</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-normal leading-snug sm:leading-tight mb-3">
                        Editorial Policy
                    </h1>

                    <p className="text-purple-100/80 text-xs sm:text-sm font-medium">
                        Last Updated: September 2026 • Independence &amp; Academic Transparency
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-20 relative z-20 flex-grow">
                <div className="bg-white dark:bg-[#0c1428] rounded-3xl border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5 p-6 sm:p-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base">
                    
                    <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800 text-xs sm:text-sm text-[#2e0854] dark:text-purple-200 font-medium">
                        This Editorial Policy outlines the principles, standards, and processes that guide the content published on Sikar Education Hub to help students and parents make informed decisions.
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        1. Accuracy First &amp; Ground Sourcing
                    </h2>
                    <p>
                        All factual data—including fee schedules, faculty credentials, residential facilities, and national AIR rankings—is verified through physical campus visits, student interaction, and authentic institutional records.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        2. Editorial Independence
                    </h2>
                    <p>
                        Our evaluations, comparative analyses, and student guidance reviews are independent of commercial sponsorship. Featured badges and rank highlights are based on verified academic track records, NEET/JEE selection ratios, and authenticated alumni reviews.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        3. Corrections &amp; Transparency
                    </h2>
                    <p>
                        We promptly update and correct any factual discrepancies. If you notice outdated batch information or facility details, please report them to our editorial desk at <a href="mailto:info@sikareducationhub.com" className="text-[#5b40cf] font-semibold hover:underline">info@sikareducationhub.com</a>.
                    </p>

                </div>
            </main>

            <BlogFooter />
        </div>
    );
}
