// @ts-nocheck
import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import GlobalNavbar from '../../NextComponents/GlobalNavbar';
import BlogFooter from '../../NextComponents/BlogFooter';
import { 
    Sparkles, ShieldCheck, Trophy, Target, Users, BookOpen, 
    Building2, MapPin, Phone, GraduationCap, ChevronRight, 
    Check, ArrowRight, Clock, Award, CheckCircle2,
    MessageSquare, Star, Stethoscope, Atom, Compass, Layers, 
    FileText, Download, ArrowUpRight
} from 'lucide-react';

export default function CoursesIndex({ courses = [], meta }) {
    const basePath = typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '';
    const [selectedStream, setSelectedStream] = useState('all');

    const streams = [
        { id: 'all', label: 'All Programs' },
        { id: 'neet', label: 'NEET-UG (Medical)' },
        { id: 'jee', label: 'IIT-JEE (Engineering)' },
        { id: 'foundation', label: 'Pre-Foundation (5th-10th)' },
        { id: 'defence', label: 'NDA & Defence' },
    ];

    const filteredCourses = selectedStream === 'all'
        ? courses
        : courses.filter(c => c.category === selectedStream);

    const stats = [
        { value: 'AIR 1', label: 'NEET-UG Benchmark', sub: 'National Rank 1 Pedagogy' },
        { value: 'AIR 225', label: 'Sikar Coaching Topper', sub: 'JEE Advanced (IIT Bombay)' },
        { value: '15,000+', label: 'Selections Produced', sub: 'MBBS, IIT/NIT & NDA Seats' },
        { value: '12 Hours', label: 'Daily Faculty Doubts', sub: 'Non-stop 8 AM to 8 PM' },
        { value: '₹108+ Cr', label: 'Scholarship Corpus', sub: 'Prince Olympiad & P-SAT' },
    ];

    const comparisonHeaders = ['Program', 'Target Classes', 'Core Examination', 'Daily Doubt Desks', 'Hostel Facility', 'Scholarship Test', 'Action'];
    const comparisonRows = [
        {
            name: 'NEET-UG Medical',
            classes: '11th, 12th & Dropper',
            exam: 'NTA NEET-UG (MBBS/BDS)',
            doubts: '12 Hours Continuous',
            hostel: 'Boys & Girls AC/Air-Cooled',
            test: 'P-SAT & Board % Concession',
            slug: 'neet-ug'
        },
        {
            name: 'IIT-JEE Engineering',
            classes: '11th, 12th & Super-50',
            exam: 'JEE Main + JEE Advanced',
            doubts: '12 Hours Continuous',
            hostel: 'Boys & Girls Residential',
            test: 'P-SAT & JEE Main Concession',
            slug: 'iit-jee'
        },
        {
            name: 'Pre-Foundation & Olympiad',
            classes: '5th to 10th Standard',
            exam: 'Olympiads, NTSE, PRMO, Boards',
            doubts: 'Supervised Evening Tables',
            hostel: 'Junior Residential Wing',
            test: 'Prince Olympiad (₹108+ Cr)',
            slug: 'pre-foundation'
        },
        {
            name: 'Prince Defence Academy',
            classes: '11th, 12th & 12th Pass',
            exam: 'UPSC NDA/NA + SSB Interview',
            doubts: 'Classroom + SSB Assessors',
            hostel: 'Military Barracks Hostels',
            test: 'Defence Talent Exam',
            slug: 'nda-defence'
        }
    ];

    return (
        <div className="bg-[#faf7fe] dark:bg-[#070b14] min-h-screen text-slate-900 dark:text-white font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854] flex flex-col transition-colors duration-300">
            <Head>
                <title>{meta?.title || 'Academic Coaching Programs | PCP Sikar & Prince Eduhub'}</title>
                <meta name="description" content={meta?.description || 'Explore premier classroom and residential coaching programs for NEET-UG, IIT-JEE, Pre-Foundation, and NDA in Sikar & Jaipur.'} />
            </Head>

            <GlobalNavbar />

            <main className="flex-grow">
                {/* ========================================================================= */}
                {/* 1. HERO SECTION: Brand Russian Violet Palette                            */}
                {/* ========================================================================= */}
                <section className="relative w-full py-20 md:py-26 overflow-hidden bg-gradient-to-br from-[#2e0854] via-[#190433] to-[#120120] text-white">
                    {/* Lighting Blurs */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#5b40cf]/30 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
                        {/* Breadcrumbs */}
                        <nav className="inline-flex items-center gap-2 text-xs text-purple-200/80 mb-6 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                            <Link href={`${basePath}/`} className="hover:text-amber-300 transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3 text-purple-300" />
                            <span className="text-white font-bold">Academic Programs</span>
                        </nav>

                        {/* Top Live Session Pill */}
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/30 to-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-white/15 backdrop-blur-md shadow-inner">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                <span>Session 2026-27 Admissions Open • Fresh Batches Every Monday</span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-snug sm:leading-tight mb-6 max-w-4xl mx-auto">
                            Empowering India’s Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-200 to-white">Doctors, IITians &amp; Officers.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-3xl mx-auto font-normal mb-10">
                            PCP Sikar pairs high-caliber faculties with an uncompromising daily routine, residential care, and authentic academic transparency across <strong>NEET-UG, IIT-JEE, Pre-Foundation, and NDA Defence</strong> divisions.
                        </p>

                        {/* Quick CTA Buttons: Strictly Parallel */}
                        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xl mx-auto">
                            <a 
                                href="tel:+919610892222"
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-extrabold text-xs sm:text-sm px-3 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-amber-950/20 transition-all hover:scale-102 active:scale-98 no-underline text-center"
                            >
                                <Phone className="w-4 h-4 text-[#2e0854]" />
                                <span className="sm:hidden">Call Helpline</span>
                                <span className="hidden sm:inline">Helpline: 9610-89-2222</span>
                            </a>
                            <a 
                                href="https://api.whatsapp.com/send?phone=919610892222&text=Hello%20PCP%20Counselor,%20I%20want%20information%20about%20PCP%20Courses"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-white/20 shadow-md transition-all no-underline text-center"
                            >
                                <MessageSquare className="w-4 h-4 fill-white" />
                                <span className="sm:hidden">WhatsApp Desk</span>
                                <span className="hidden sm:inline">WhatsApp Counselor</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 2. STATS RIBBON                                                          */}
                {/* ========================================================================= */}
                <section className="relative -mt-8 z-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5">
                        {stats.map((s, idx) => (
                            <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-900/50 border border-purple-100/60 dark:border-slate-800 text-center flex flex-col justify-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#2e0854] dark:text-purple-300 tracking-tight">
                                    {s.value}
                                </div>
                                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
                                    {s.label}
                                </div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                    {s.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 3. INTERACTIVE STREAM SELECTOR & PROGRAM CARDS CATALOG                    */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-24 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2">
                            Curated Academic Divisions
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2e0854] dark:text-white tracking-tight">
                            Select Your Competitive Path
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3">
                            Each division operates with dedicated permanent faculties, tailored daily practice problem sheets (DPPs), and personalized doubt counters.
                        </p>

                        {/* Stream Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-purple-100/70 dark:bg-slate-900 border border-purple-200/80 dark:border-slate-800 max-w-fit mx-auto">
                            {streams.map((st) => (
                                <button
                                    key={st.id}
                                    onClick={() => setSelectedStream(st.id)}
                                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                                        selectedStream === st.id
                                            ? 'bg-[#2e0854] text-white shadow-md'
                                            : 'text-slate-700 dark:text-slate-300 hover:text-[#2e0854] hover:bg-white/60 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    {st.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Courses Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {filteredCourses.map((c) => (
                            <div 
                                key={c.id}
                                className="flex flex-col justify-between rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100 dark:border-slate-800 shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-6 sm:p-8">
                                    {/* Stream Badge & Banner */}
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-[11px] font-black uppercase tracking-wider border border-purple-200">
                                            <GraduationCap className="w-3.5 h-3.5 text-[#5b40cf]" />
                                            <span>{c.stream}</span>
                                        </span>
                                        <span className="text-[11px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-900/60">
                                            {c.classes}
                                        </span>
                                    </div>

                                    {/* Title & Tagline */}
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#2e0854] dark:text-white tracking-tight leading-snug mb-2">
                                        {c.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-semibold text-[#5b40cf] dark:text-purple-300 mb-4">
                                        {c.tagline}
                                    </p>

                                    {/* Short Description */}
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                                        {c.description}
                                    </p>

                                    {/* Quick Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-purple-50/60 dark:bg-slate-900 border border-purple-100/70 dark:border-slate-800 mb-6 text-center">
                                        {c.stats.slice(0, 3).map((st, sIdx) => (
                                            <div key={sIdx}>
                                                <div className="text-base sm:text-lg font-black text-[#2e0854] dark:text-purple-200">
                                                    {st.value}
                                                </div>
                                                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                                                    {st.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Batches Preview */}
                                    <div className="space-y-2 mb-6">
                                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-[#5b40cf]" />
                                            <span>Available Batches</span>
                                        </h4>
                                        <div className="space-y-1.5">
                                            {c.batches.map((b, bIdx) => (
                                                <div key={bIdx} className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                                                    <span className="font-bold text-slate-800 dark:text-white">{b.name}</span>
                                                    <span className="text-[11px] text-purple-700 dark:text-purple-300 font-semibold">{b.duration}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer with Direct Action Buttons */}
                                <div className="p-5 sm:p-6 bg-purple-50/40 dark:bg-slate-900 border-t border-purple-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                                    <Link 
                                        href={`${basePath}/courses/${c.slug}`}
                                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#2e0854] hover:bg-[#5b40cf] text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md hover:shadow-lg no-underline text-center"
                                    >
                                        <span>View Full Course Syllabus &amp; Routine</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <a 
                                        href="tel:+919610892222"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-purple-100 text-[#2e0854] dark:text-white font-bold py-3 px-4 rounded-xl text-xs border border-purple-200 dark:border-slate-700 transition-colors no-underline whitespace-nowrap"
                                    >
                                        <Phone className="w-3.5 h-3.5 text-[#5b40cf]" />
                                        <span>9610-89-2222</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 4. COMPARISON MATRIX TABLE                                               */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-20 bg-white dark:bg-[#070e1b] border-y border-purple-100/90 dark:border-slate-800">
                    <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2">
                                Direct Side-by-Side Comparison
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-tight">
                                Program Matrix At A Glance
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mt-3">
                                Compare targets, batch structure, doubt hours, and residential boarding arrangements.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-purple-100 dark:border-slate-800 shadow-sm">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="bg-[#2e0854] text-white">
                                        {comparisonHeaders.map((head, idx) => (
                                            <th key={idx} className="p-4 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap border-r border-purple-900/50 last:border-r-0">
                                                {head}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-purple-100/70 dark:divide-slate-800">
                                    {comparisonRows.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-purple-50/50 dark:hover:bg-slate-900/50 transition-colors">
                                            <td className="p-4 font-bold text-[#2e0854] dark:text-white whitespace-nowrap">
                                                {row.name}
                                            </td>
                                            <td className="p-4 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                                {row.classes}
                                            </td>
                                            <td className="p-4 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                                {row.exam}
                                            </td>
                                            <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold whitespace-nowrap">
                                                {row.doubts}
                                            </td>
                                            <td className="p-4 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                                {row.hostel}
                                            </td>
                                            <td className="p-4 text-amber-600 dark:text-amber-400 font-semibold whitespace-nowrap">
                                                {row.test}
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <Link 
                                                    href={`${basePath}/courses/${row.slug}`}
                                                    className="inline-flex items-center gap-1 font-bold text-[#5b40cf] hover:text-[#2e0854] hover:underline"
                                                >
                                                    <span>Explore</span>
                                                    <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 5. CALL TO ACTION BANNER                                                 */}
                {/* ========================================================================= */}
                <section className="py-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="p-7 sm:p-10 bg-gradient-to-br from-purple-50/90 via-indigo-50/50 to-amber-50/40 dark:from-[#150e26] dark:via-[#1a1233] dark:to-[#0f172a] rounded-3xl border border-purple-200/80 dark:border-purple-800/50 shadow-lg shadow-purple-950/5 relative overflow-hidden">
                        <div className="absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-br from-purple-300/25 to-pink-300/20 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-950/60 text-[#2e0854] dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-purple-200/80 shadow-2xs">
                                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                                <span>Admissions Session 2026-27 Open</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5"></span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-black text-[#2e0854] dark:text-white mb-3 tracking-tight leading-snug">
                                Need Help Choosing the Right Batch?
                            </h2>

                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                                Connect with senior academic counselors at PCP Sikar for stream guidance, hostel allocation, and scholarship concessions via the P-SAT National Talent Exam.
                            </p>

                            <div className="flex flex-row items-center gap-2 sm:gap-3.5 w-full">
                                <a 
                                    href="tel:+919610892222"
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#2e0854] hover:bg-[#451378] text-white font-bold py-2.5 sm:py-3 px-2 sm:px-6 rounded-lg shadow-md transition-all text-xs sm:text-sm whitespace-nowrap no-underline text-center"
                                >
                                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc107]" />
                                    <span>Call Admissions: 9610-89-2222</span>
                                </a>
                                <a 
                                    href="https://api.whatsapp.com/send?phone=919610892222&text=Hello%20PCP%20Counselor,%20I%20want%20information%20about%20PCP%20Courses"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 sm:py-3 px-2 sm:px-6 rounded-lg shadow-md transition-all text-xs sm:text-sm whitespace-nowrap no-underline text-center"
                                >
                                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-[#25D366]" />
                                    <span>WhatsApp Desk</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Mobile Sticky Conversion Bar */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 dark:bg-[#0c1428]/95 backdrop-blur-md border-t border-purple-200 dark:border-slate-800 shadow-[0_-4px_25px_rgba(46,8,84,0.18)] flex items-center gap-2">
                <a
                    href="tel:+919610892222"
                    className="flex-1 py-2.5 px-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-[#2e0854] font-black text-xs flex items-center justify-center gap-1 border border-purple-200 transition-colors no-underline whitespace-nowrap"
                >
                    <Phone className="w-3.5 h-3.5 text-[#5b40cf]" />
                    <span>Call Helpline</span>
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=919610892222&text=Hello%20PCP%20Counselor,%20I%20want%20information%20about%20PCP%20Courses"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs flex items-center justify-center gap-1 shadow-md transition-colors no-underline whitespace-nowrap"
                >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                    <span>WhatsApp</span>
                </a>
                <a
                    href="#courses"
                    className="flex-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-black text-xs flex items-center justify-center gap-1 shadow-md transition-all active:scale-98 whitespace-nowrap no-underline text-center"
                >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2e0854]" />
                    <span>Explore Batches</span>
                </a>
            </div>

            <BlogFooter />
        </div>
    );
}
