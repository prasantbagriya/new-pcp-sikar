// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { 
    Flame, 
    Newspaper, 
    ArrowRight, 
    ChevronLeft, 
    ChevronRight, 
    Clock, 
    User, 
    Radio, 
    Bell, 
    FileText, 
    ExternalLink, 
    Sparkles, 
    Calendar,
    Award,
    CheckCircle2,
    BookOpen,
    GraduationCap
} from 'lucide-react';

export default function PcpBlogUpdatesSection() {
    // =========================================================================
    // 1. FEATURED SLIDER STATE & DATA (Left Column)
    // =========================================================================
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);
    const SLIDE_DURATION = 5000; // 5 seconds per slide
    const progressIntervalRef = useRef(null);

    const featuredStories = [
        {
            id: 1,
            tag: 'NEET Masterclass',
            tagColor: 'bg-purple-100 text-[#2e0854] border-purple-200',
            title: 'How Devesh Joshi Scored 720/720 in NEET-UG: Daily Revision Blueprint & Error Elimination Log',
            excerpt: 'An in-depth breakdown of NCERT line-by-line active recall, 3-tier biology diagrams, and how utilizing PCP Sikar’s 12-hour continuous faculty doubt desk converted weak areas into 100 percentile.',
            image: '/uploads/pcp/portraits/devesh_joshi.jpg',
            readTime: '8 min read',
            date: 'Oct 28, 2026',
            author: 'Dr. M.R. Poonia',
            role: 'Chairman, Prince Eduhub',
            link: '/blog/devesh-joshi-neet-720-strategy',
            stats: 'AIR 1 (Classroom)'
        },
        {
            id: 2,
            tag: 'National Scholarship',
            tagColor: 'bg-amber-100 text-amber-950 border-amber-200',
            title: 'P-SAT 2026: North India’s ₹108+ Crore Scholarship Exam Syllabus, Test Centers & 100% Fee Waivers',
            excerpt: 'Everything parents and students must know about North India’s largest pre-selection talent exam covering Class 5th to 12th & Target Droppers. Discover how to secure up to 100% tuition + residential fee waiver.',
            image: '/uploads/pcp/Olympiad.jpg',
            readTime: '6 min read',
            date: 'Oct 26, 2026',
            author: 'Academic Directorate',
            role: 'P-SAT Examination Board',
            link: '/psat-2026-scholarship-guide',
            stats: '₹108 Cr Scholarship Pool'
        },
        {
            id: 3,
            tag: 'Ecosystem Analysis',
            tagColor: 'bg-purple-100 text-[#2e0854] border-purple-200',
            title: 'Why 1 in 4 Serious Aspirants is Choosing Sikar Over Kota: The Distraction-Free Residential Culture',
            excerpt: 'A data-backed comparative study on student mental well-being, mobile-free residential hostels, round-the-clock mentor supervision, and verified classroom selection ratios that have made Sikar India’s new coaching capital.',
            image: '/uploads/pcp_campus_building.png',
            readTime: '9 min read',
            date: 'Oct 22, 2026',
            author: 'Education Research Cell',
            role: 'PCP Academic Forum',
            link: '/blog/why-sikar-is-beating-kota',
            stats: '1,000+ MBBS Selections'
        },
        {
            id: 4,
            tag: 'JEE Advanced Edge',
            tagColor: 'bg-amber-100 text-amber-950 border-amber-200',
            title: 'JEE Advanced Physics: Cracking Multi-Concept Rotational & Electrodynamics Questions with Veteran HODs',
            excerpt: 'Subject HODs analyze the previous 5 years of JEE Advanced pattern shifts and present a high-yield formula sheet with solved step-by-step illustrations for aspiring IITians.',
            image: '/uploads/pcp/slider/JEE-ADVANCED-2025.jpg',
            readTime: '7 min read',
            date: 'Oct 18, 2026',
            author: 'Er. O.P. Choudhary',
            role: 'HOD Physics, PCP Sikar',
            link: '/blog/jee-advanced-physics-mastery',
            stats: 'AIR 225 Sikar Topper'
        }
    ];

    // Slide progress animation & auto-advance
    useEffect(() => {
        if (isHovered) {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
            return;
        }

        const step = 50; // update every 50ms
        const increment = (step / SLIDE_DURATION) * 100;

        progressIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setCurrentSlide((curr) => (curr + 1) % featuredStories.length);
                    return 0;
                }
                return prev + increment;
            });
        }, step);

        return () => {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [isHovered, currentSlide, featuredStories.length]);

    const handlePrevSlide = () => {
        setProgress(0);
        setCurrentSlide((curr) => (curr - 1 + featuredStories.length) % featuredStories.length);
    };

    const handleNextSlide = () => {
        setProgress(0);
        setCurrentSlide((curr) => (curr + 1) % featuredStories.length);
    };

    const handleSelectSlide = (idx) => {
        setProgress(0);
        setCurrentSlide(idx);
    };

    // =========================================================================
    // 2. LIVE PCP PULSE BULLETINS (Right Column Auto-Scrolling Stream)
    // =========================================================================
    const liveBulletins = [
        {
            id: 'b1',
            category: 'EXAM ALERT',
            badgeClass: 'bg-rose-50 text-rose-800 border-rose-200 ring-rose-500/10',
            dotColor: 'bg-rose-500',
            time: '12 mins ago',
            title: 'NTA NEET-UG 2026 Advisory Released',
            desc: 'Official notification on category certificate deadlines (OBC-NCL / EWS) and document upload specifications. Download PCP guidance checklist.',
            linkText: 'Download Guidelines PDF',
            linkHref: '#neet-notice',
            isHot: true
        },
        {
            id: 'b2',
            category: 'ADMISSIONS OPEN',
            badgeClass: 'bg-purple-50 text-[#2e0854] border-purple-200 ring-purple-500/10',
            dotColor: 'bg-[#5b40cf]',
            time: '1 hour ago',
            title: 'Target Dropper Batch 2026-27 (NEET & JEE)',
            desc: 'Phase-1 registrations now active. Early-bird residential hostel rooms allocated on priority merit basis. Seats strictly limited to 60 students per section.',
            linkText: 'Apply Online for Target Batch',
            linkHref: '#admissions-target',
            isHot: true
        },
        {
            id: 'b3',
            category: 'P-SAT UPDATE',
            badgeClass: 'bg-amber-50 text-amber-900 border-amber-200 ring-amber-500/10',
            dotColor: 'bg-[#f59e0b]',
            time: 'Today, 10:45 AM',
            title: 'P-SAT Phase 2 Offline Admit Cards Out',
            desc: 'Students can now download roll numbers and check allotted test center locations across 350+ district venues in Rajasthan, Haryana, UP, and Bihar.',
            linkText: 'Download P-SAT Hall Ticket',
            linkHref: '#psat-admit-card',
            isHot: false
        },
        {
            id: 'b4',
            category: 'ACADEMIC NOTICE',
            badgeClass: 'bg-purple-50 text-[#2e0854] border-purple-200 ring-purple-500/10',
            dotColor: 'bg-[#5b40cf]',
            time: 'Today, 08:30 AM',
            title: 'Bi-Weekly CBT Minor Test 04 Detailed Syllabus',
            desc: 'CBT Test 04 for 11th & 12th NEET/JEE scheduled for this Sunday. Physics (Rotational Dynamics), Chemistry (Thermodynamics) question blueprints live.',
            linkText: 'View Syllabus Breakdown',
            linkHref: '#minor-test-04',
            isHot: false
        },
        {
            id: 'b5',
            category: 'TOPPER HONOUR',
            badgeClass: 'bg-amber-50 text-amber-900 border-amber-200 ring-amber-500/10',
            dotColor: 'bg-[#f59e0b]',
            time: 'Yesterday',
            title: 'AIR 225 JEE Adv Vivek Gupta Awarded ₹11 Lakh',
            desc: 'Grand felicitation celebration at Palwas Road Mega Campus honoring Vivek Gupta with a ₹11,00,000 cash incentive and traditional turban honor.',
            linkText: 'Watch Felicitation Ceremony',
            linkHref: '#topper-felicitation',
            isHot: false
        },
        {
            id: 'b6',
            category: 'HOSTEL & CAMPUS',
            badgeClass: 'bg-purple-50 text-[#2e0854] border-purple-200 ring-purple-500/10',
            dotColor: 'bg-[#5b40cf]',
            time: 'Oct 29, 2026',
            title: 'Parent-Teacher Meeting (PTM) & Digital Cards',
            desc: 'Residential campus quarterly PTM scheduled for November 9th. Outstation parents can access live biometric attendance and test logs on the Prince app.',
            linkText: 'Access Parent Portal',
            linkHref: '#parent-portal',
            isHot: false
        },
        {
            id: 'b7',
            category: 'PRE-FOUNDATION',
            badgeClass: 'bg-amber-50 text-amber-900 border-amber-200 ring-amber-500/10',
            dotColor: 'bg-[#f59e0b]',
            time: 'Oct 28, 2026',
            title: 'National Science Olympiad (NSO) Special Camp',
            desc: 'Daily 2-hour problem-solving camp launched for Class 8, 9 & 10 aspirants preparing for Stage-1 Olympiad and NTSE benchmarks.',
            linkText: 'Check Workshop Schedule',
            linkHref: '#pre-foundation-nso',
            isHot: false
        }
    ];

    // Duplicate list for seamless infinite vertical scroll
    const infiniteBulletins = [...liveBulletins, ...liveBulletins];

    return (
        <section 
            id="pcp-intelligence-newsroom"
            style={{ contentVisibility: 'visible', contain: 'none' }}
            className="w-full relative py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#faf7fe] via-white to-[#faf7fe] border-b border-purple-100/70 overflow-hidden"
        >
            {/* Embedded Marquee Animation CSS with hover-pause */}
            <style>{`
                @keyframes pulseTickerUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .bulletin-marquee-track {
                    animation: pulseTickerUp 34s linear infinite;
                    will-change: transform;
                }
                .bulletin-marquee-container:hover .bulletin-marquee-track {
                    animation-play-state: paused !important;
                }
            `}</style>

            {/* Subtle background ambient purple and amber glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-10 left-1/4 w-[420px] h-[320px] bg-purple-200/20 rounded-full blur-[110px]" />
                <div className="absolute bottom-10 right-10 w-[460px] h-[340px] bg-amber-100/25 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
                
                {/* ================================================================= */}
                {/* 1. SECTION HEADER: Compact Margins & Tight Vertical Spacing       */}
                {/* ================================================================= */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-5">
                    <div className="max-w-4xl">
                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-purple-900 text-xs font-bold tracking-wide uppercase shadow-2xs mb-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#5b40cf]" />
                            <span>PCP Academic Newsroom & Live Updates</span>
                        </div>
                        
                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-extrabold text-[#2e0854] tracking-tight leading-tight">
                            Educational Insights &amp; <span className="bg-gradient-to-r from-[#5b40cf] via-[#7c3aed] to-[#f59e0b] bg-clip-text text-transparent">Live Campus Pulse</span>
                        </h2>
                        
                        {/* Subtitle */}
                        <p className="mt-1.5 text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-3xl">
                            Explore in-depth ranker preparation blueprints and academic guides on the left, while tracking continuous real-time exam circulars, admission alerts, and scholarship schedules on the right.
                        </p>
                    </div>

                    {/* View all articles CTA link */}
                    <div className="shrink-0 flex items-center gap-3">
                        <a 
                            href="/blog" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-purple-200 text-[#3b1165] font-semibold text-xs sm:text-sm hover:bg-[#3b1165] hover:text-white hover:border-[#3b1165] shadow-2xs transition-all duration-200 group"
                        >
                            <span>Browse All 48+ Articles &amp; Updates</span>
                            <ArrowRight className="w-4 h-4 text-[#5b40cf] group-hover:text-white group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* ================================================================= */}
                {/* 2. DUAL ARCHITECTURE: Equal Height Slide Card + Live News Card     */}
                {/* ================================================================= */}
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch">
                    
                    {/* ============================================================= */}
                    {/* LEFT COLUMN: Expansive Wide Magazine Slide (Equal Height)     */}
                    {/* ============================================================= */}
                    <div 
                        className="flex-1 min-w-0 flex flex-col"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Main Slide Card - Exactly Equal in Height to Right News Card */}
                        <div className="relative rounded-2xl overflow-hidden bg-[#2e0854] border border-purple-200/80 shadow-lg group h-[470px] sm:h-[500px] lg:h-[520px] flex flex-col justify-end p-6 sm:p-8 lg:p-10 select-none">
                            
                            {/* Slide Countdown Progress Bar at Top */}
                            <div 
                                style={{ width: `${progress}%` }}
                                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#5b40cf] via-[#7c3aed] to-[#ffc107] transition-all duration-75 z-30"
                            />

                            {/* Slide Background Image with smooth zoom on hover */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={featuredStories[currentSlide].image} 
                                    alt={featuredStories[currentSlide].title}
                                    width="800"
                                    height="450"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Multi-layer Russian Purple brand gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2e0854] via-[#2e0854]/85 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2e0854]/95 via-[#2e0854]/65 to-transparent" />
                            </div>

                            {/* Top Header Floating Controls inside the slide */}
                            <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
                                <div className="flex items-center gap-2.5 pointer-events-auto">
                                    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border backdrop-blur-md ${featuredStories[currentSlide].tagColor} bg-white/95 shadow-xs`}>
                                        <BookOpen className="w-3.5 h-3.5" />
                                        <span>{featuredStories[currentSlide].tag}</span>
                                    </span>
                                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 bg-[#2e0854]/75 backdrop-blur-md border border-purple-300/30">
                                        <Clock className="w-3.5 h-3.5 text-[#ffc107]" />
                                        <span>{featuredStories[currentSlide].readTime}</span>
                                    </span>
                                </div>

                                {/* Slide Counter & Prev/Next Pill */}
                                <div className="flex items-center gap-2 bg-[#2e0854]/85 backdrop-blur-md p-1.5 rounded-full border border-purple-300/30 pointer-events-auto shadow-md">
                                    <button 
                                        type="button"
                                        onClick={handlePrevSlide}
                                        aria-label="Previous Slide"
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <span className="text-xs font-bold text-white px-2.5 tracking-wider font-mono">
                                        0{currentSlide + 1} <span className="text-white/40">/</span> 0{featuredStories.length}
                                    </span>
                                    <button 
                                        type="button"
                                        onClick={handleNextSlide}
                                        aria-label="Next Slide"
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Bottom Card Content with Large Typography & High Legibility */}
                            <div className="relative z-10 flex flex-col gap-3 max-w-3xl">
                                
                                {/* Stat pill */}
                                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-md bg-[#ffc107] text-[#2e0854] text-xs font-black tracking-wide uppercase shadow-xs">
                                    <Award className="w-3.5 h-3.5 text-[#2e0854]" />
                                    <span>{featuredStories[currentSlide].stats}</span>
                                </div>

                                {/* Story Title */}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug drop-shadow-sm line-clamp-2">
                                    {featuredStories[currentSlide].title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-xs sm:text-sm lg:text-base text-purple-100/90 leading-relaxed line-clamp-2 sm:line-clamp-3">
                                    {featuredStories[currentSlide].excerpt}
                                </p>

                                {/* Author info + Read Article button */}
                                <div className="pt-3 sm:pt-4 border-t border-purple-300/20 flex items-center justify-between gap-4 flex-wrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#5b40cf] to-[#7c3aed] border border-purple-300/40 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                                            {featuredStories[currentSlide].author.charAt(0)}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs sm:text-sm font-bold text-white leading-none">
                                                {featuredStories[currentSlide].author}
                                            </span>
                                            <span className="text-[11px] text-purple-200/80 leading-tight mt-1">
                                                {featuredStories[currentSlide].role} • {featuredStories[currentSlide].date}
                                            </span>
                                        </div>
                                    </div>

                                    <a
                                        href={featuredStories[currentSlide].link}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ffc107] hover:bg-white text-[#2e0854] font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200"
                                    >
                                        <span>Read Full Story</span>
                                        <ArrowRight className="w-4 h-4 text-[#2e0854]" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ============================================================= */}
                    {/* RIGHT COLUMN: Live PCP Pulse & Bulletins (EQUAL HEIGHT)       */}
                    {/* Compact Header with Reduced Text Gap & Balanced Height         */}
                    {/* ============================================================= */}
                    <div className="w-full lg:w-[380px] xl:w-[410px] shrink-0 flex flex-col">
                        <div className="relative rounded-2xl border border-purple-200/90 bg-white shadow-sm flex flex-col h-[470px] sm:h-[500px] lg:h-[520px] overflow-hidden">
                            
                            {/* Bulletin Terminal Header - Tight Text Gap Between Heading & Sub-line */}
                            <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 border-b border-purple-100 bg-gradient-to-r from-purple-50/80 via-white to-purple-50/40 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-2 sm:gap-2.5">
                                    {/* Pulsing Live Dot */}
                                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                                    </span>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-xs sm:text-[12.5px] font-black text-[#2e0854] uppercase tracking-wide leading-none m-0 p-0">
                                            Live PCP Bulletins &amp; Alerts
                                        </h4>
                                        <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-none mt-1 m-0 p-0">
                                            Official circulars, exam dates &amp; admission notices
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 text-[#2e0854] border border-purple-200 text-[10px] font-bold shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b40cf] animate-pulse" />
                                    <span>STREAM ACTIVE</span>
                                </div>
                            </div>

                            {/* Continuous Marquee Ticker Container */}
                            <div className="bulletin-marquee-container relative flex-1 min-h-0 overflow-hidden px-4 sm:px-5 py-2">
                                
                                {/* Top and bottom smooth fade masks */}
                                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                                {/* Infinite Running Track */}
                                <div className="bulletin-marquee-track flex flex-col gap-3 py-1">
                                    {infiniteBulletins.map((item, idx) => (
                                        <div 
                                            key={`${item.id}-${idx}`}
                                            className="group p-3.5 rounded-xl border border-purple-100/90 bg-white hover:bg-purple-50/50 hover:border-purple-300 transition-all duration-200 shadow-2xs relative"
                                        >
                                            {/* Tag & Time */}
                                            <div className="flex items-center justify-between gap-2 mb-1.5">
                                                <div className="flex items-center gap-1.5">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                                                    <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md border ${item.badgeClass}`}>
                                                        {item.category}
                                                    </span>
                                                    {item.isHot && (
                                                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-rose-500 text-white text-[9px] font-extrabold uppercase">
                                                            <Flame className="w-2.5 h-2.5" />
                                                            <span>HOT</span>
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-[10px] text-slate-400 font-medium">
                                                    {item.time}
                                                </span>
                                            </div>

                                            {/* Bulletin Title */}
                                            <h5 className="text-xs sm:text-sm font-bold text-[#2e0854] group-hover:text-[#5b40cf] transition-colors leading-snug">
                                                {item.title}
                                            </h5>

                                            {/* Bulletin Summary */}
                                            <p className="mt-1 text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                                                {item.desc}
                                            </p>

                                            {/* Action Link */}
                                            <div className="mt-2 pt-2 border-t border-purple-50 flex items-center justify-between">
                                                <a 
                                                    href={item.linkHref}
                                                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5b40cf] group-hover:text-[#3b1165] hover:underline"
                                                >
                                                    <span>{item.linkText}</span>
                                                    <ExternalLink className="w-3 h-3 text-[#5b40cf] group-hover:translate-x-0.5 transition-transform" />
                                                </a>
                                                <span className="text-[10px] text-slate-400 font-mono">
                                                    REF #{item.id.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Strip: Hover Guidance & Quick WhatsApp Alert Subscription */}
                            <div className="p-3 sm:p-3.5 bg-purple-50/70 border-t border-purple-100 flex items-center justify-between gap-2 shrink-0">
                                <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                                    <Bell className="w-3.5 h-3.5 text-[#5b40cf]" />
                                    <span>Hover to freeze bulletin stream</span>
                                </span>

                                <a 
                                    href="https://api.whatsapp.com/send?phone=919610532222&text=Subscribe%20to%20PCP%20Exam%20Alerts"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2e0854] text-white hover:bg-[#5b40cf] text-[11px] font-bold shadow-xs transition-colors"
                                >
                                    <span>Get WhatsApp Alerts</span>
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
