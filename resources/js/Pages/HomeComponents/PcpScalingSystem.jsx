import React, { useState, useEffect } from 'react';
import { 
    Zap, 
    ArrowRight, 
    ChevronLeft, 
    ChevronRight, 
    Trophy, 
    CheckCircle2, 
    Sparkles, 
    Target, 
    ShieldCheck, 
    Award,
    TrendingUp
} from 'lucide-react';

export default function PcpScalingSystem() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const stages = [
        {
            stage: "Stage 01",
            level: "Foundational Rigor",
            title: "NCERT Conceptual Mastery & Diagnostics",
            badge: "Concept Lockdown",
            metric: "100% Core Clarity",
            desc: "Every competitive journey begins with rock-solid fundamentals. We bridge the gap between school board curriculum and competitive exam demands through rigorous conceptual teaching.",
            highlights: [
                "Line-by-line NCERT analysis for Biology & Chemistry",
                "Derivation-based deep physics problem solving",
                "Baseline diagnostic test to identify existing conceptual gaps",
                "Daily 15-minute speed arithmetic & formula memorization"
            ],
            image: "/uploads/pcp/Pre-FoundationBlog.png",
            tag: "Groundwork",
        },
        {
            stage: "Stage 02",
            level: "Application & Daily Rigor",
            title: "12-Hour Doubt Desks & DPP Mastery",
            badge: "Zero Pending Doubts",
            metric: "99.4% Doubts Cleared Daily",
            desc: "Concept learning without daily problem solving is useless. Students solve daily 20-question DPPs, and any difficult concept is resolved same-day on our 12-hour faculty doubt counters.",
            highlights: [
                "12 hours continuous face-to-face faculty doubt desks",
                "Daily Practice Problems (DPP) checking & grading",
                "Level-1 & Level-2 graded multi-concept question banks",
                "Personal academic mentor assigned for weekly progress reviews"
            ],
            image: "/uploads/pcp/NEETUG.jpg",
            tag: "Execution",
        },
        {
            stage: "Stage 03",
            level: "Pan-India CBT Benchmarking",
            title: "P-AITS All India Simulation & AI Analysis",
            badge: "NTA Simulation",
            metric: "100+ Pan-India Mock Exams",
            desc: "Real exam temper is built inside our high-tech CBT simulation computer labs. Students face the exact NTA exam screen, clock pressure, and negative marking rules against 40,000+ peers nationwide.",
            highlights: [
                "PCP Arjuna (IIT-JEE) & Drona (NEET) test schedules",
                "Instant AI breakdown of negative marking & silly mistakes",
                "Time-per-question micro analysis report",
                "Detailed step-by-step video solutions post test completion"
            ],
            image: "/uploads/pcp/JeeMain2026.png",
            tag: "Simulation",
        },
        {
            stage: "Stage 04",
            level: "National Rank Conversion",
            title: "Super-Rankers Mentorship & AIR Conversion",
            badge: "AIR-1 Proven Strategy",
            metric: "Top 0.1% National Conversion",
            desc: "The final sprint that produced NEET AIR-1 and JEE Adv AIR-225. High-intensity test series, error-log revisions, time optimization drills, and 1-on-1 counseling to reach AIIMS & IITs.",
            highlights: [
                "Special Super-Rankers revision batches & focus groups",
                "Personal mentoring from faculties who produced AIR-1",
                "Complete full-length revision marathons & formula sprints",
                "Psychological stamina coaching for peak exam-day performance"
            ],
            image: "/uploads/pcp/NEET2024.jpg",
            tag: "Peak Rank",
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % stages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, stages.length]);

    const activeStage = stages[currentStep];

    return (
        <section 
            className="py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Ambient glows */}
            <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header (Blue Guardian High-Performance Style) */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200/80">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3">
                            <Zap className="w-3.5 h-3.5 text-purple-700" />
                            <span>The High-Performance Scaling System</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
                            Scaling Students with <br className="hidden sm:inline" />
                            <span className="text-[#3b0764]">World-Class Academic Force</span>
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-normal">
                            How PCP systematically scales an average school student into an elite All India Ranker through a 4-stage scientific pipeline.
                        </p>
                    </div>

                    {/* Step Navigation Pill Controls */}
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                            {stages.map((stg, sIdx) => (
                                <button
                                    key={sIdx}
                                    type="button"
                                    onClick={() => setCurrentStep(sIdx)}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                                        currentStep === sIdx
                                            ? 'bg-[#ffc107] text-black shadow-xs'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                                >
                                    <span>{stg.stage}</span>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setCurrentStep((prev) => (prev - 1 + stages.length) % stages.length)}
                                aria-label="Previous scaling stage"
                                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setCurrentStep((prev) => (prev + 1) % stages.length)}
                                aria-label="Next scaling stage"
                                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Scaling Stage Display Card */}
                <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                        
                        {/* Left Content Area (7 Cols) */}
                        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                            <div>
                                {/* Step Breadcrumb & Metric Badge */}
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 rounded-full bg-[#2e1065] text-white text-xs font-black uppercase tracking-wider">
                                            {activeStage.stage}
                                        </span>
                                        <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">
                                            {activeStage.level}
                                        </span>
                                    </div>
                                    <span className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-black uppercase">
                                        {activeStage.metric}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                                    {activeStage.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                                    {activeStage.desc}
                                </p>

                                {/* Highlights list */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                                    {activeStage.highlights.map((item, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Stage Progress Bar & CTAs */}
                            <div className="pt-6 border-t border-slate-100 space-y-4">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                                    <span>Pipeline Progress</span>
                                    <span>Stage {currentStep + 1} of {stages.length}</span>
                                </div>

                                {/* Progress bar track */}
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-[#2e1065] via-[#ffc107] to-[#2e1065] rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${((currentStep + 1) / stages.length) * 100}%` }}
                                    />
                                </div>

                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <a
                                        href="#scholarship"
                                        className="btn-brand-yellow px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
                                    >
                                        <span>Enroll in this Pipeline</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="#courses"
                                        className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors"
                                    >
                                        View Curriculum
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Right Visual Image (5 Cols) */}
                        <div className="lg:col-span-5 relative bg-slate-900 overflow-hidden min-h-[300px] lg:min-h-[auto]">
                            <img
                                src={activeStage.image}
                                alt={activeStage.title}
                                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = '/uploads/pcp/Neet-2026.jpg';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-white/0 lg:via-black/30 lg:to-black/80" />

                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <span className="px-3 py-1 rounded-md bg-[#ffc107] text-black text-[11px] font-black uppercase tracking-wider inline-block mb-2 shadow">
                                    {activeStage.badge}
                                </span>
                                <h4 className="text-lg font-black text-white leading-snug drop-shadow-sm">
                                    {activeStage.level}
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
