import React from 'react';
import { 
    BookOpen, 
    Clock, 
    Layers, 
    Laptop, 
    FileCheck2, 
    Building2, 
    LineChart, 
    HeartHandshake,
    CheckCircle2, 
    Sparkles, 
    ArrowRight,
    Download
} from 'lucide-react';

export default function PcpWhatIsIncluded() {
    const deliverables = [
        {
            icon: BookOpen,
            title: "Full NCERT to Advanced Masterclasses",
            subtitle: "Physics, Chemistry, Biology & Maths",
            desc: "Comprehensive syllabus coverage by seasoned IITians and senior medical faculties. Digital smart-board lectures with downloadable annotated notes.",
            badge: "Core Curriculum",
            highlights: [
                "Doctor & IITian faculty roster",
                "100% synchronized board + competitive syllabus",
                "Recorded lecture revision vault"
            ]
        },
        {
            icon: Clock,
            title: "12-Hour Daily Face-to-Face Doubt Desks",
            subtitle: "Morning 8:00 AM to Evening 8:00 PM",
            desc: "Dedicated personal faculty rooms where teachers sit one-on-one with students. No token limits, no AI bots — permanent teachers clear every single doubt.",
            badge: "Signature PCP Feature",
            highlights: [
                "Zero pending doubts policy",
                "Separate subject counters (P, C, B, M)",
                "Special speed & formula doubt sessions"
            ]
        },
        {
            icon: Layers,
            title: "25+ Volume Printed Study Material & Modules",
            subtitle: "Exhaustive Theory + 3-Level Graded Exercises",
            desc: "Scientifically engineered study material covering fundamental concepts, Level-1 board mastery, Level-2 NEET/JEE Main, and Level-3 Advanced brainstormers.",
            badge: "Printed Modules",
            highlights: [
                "Previous 15-Year Solved Chapter Papers",
                "Color-coded formula cheat sheets",
                "NCERT Line-by-Line Medical question bank"
            ]
        },
        {
            icon: Laptop,
            title: "P-AITS Pan-India CBT Simulation Tests",
            subtitle: "Exact NTA Interface & Nationwide Rank",
            desc: "High-tech computer lab testing arena simulating the real NTA exam screen, clock, and marking rules. Benchmarks your percentile against 40,000+ test-takers.",
            badge: "All-India Ranking",
            highlights: [
                "Strict NTA CBT user interface",
                "Instant AI negative marking diagnosis",
                "Micro-analysis of time spent per question"
            ]
        },
        {
            icon: FileCheck2,
            title: "Daily Practice Problem (DPP) System",
            subtitle: "Daily Homework & Video Solutions",
            desc: "Every single lecture is followed by a structured 15-20 question DPP. Homework is checked daily with step-by-step video solutions on the student portal.",
            badge: "Daily Rigor",
            highlights: [
                "Graded difficulty problem sheets",
                "Immediate video explanation access",
                "Classroom discussion of tricky questions"
            ]
        },
        {
            icon: Building2,
            title: "Integrated Residential AC Campus & Hostels",
            subtitle: "Coaching + Hostel + Mess inside 1 perimeter",
            desc: "Zero transit fatigue. Separate boys and girls residential blocks with AC rooms, study tables, attached clean washrooms, 24/7 security, and resident wardens.",
            badge: "1-Campus Living",
            highlights: [
                "Biometric entry & 24/7 CCTV vigilance",
                "Pure vegetarian hygienic 4-meal mess",
                "Silent night study library halls"
            ]
        },
        {
            icon: LineChart,
            title: "Parent Biometric & Academic Score Portal",
            subtitle: "Transparent Progress Tracking",
            desc: "Parents receive automated SMS notifications on student attendance, daily class arrival, weekly test scores, negative marking errors, and batch rankings.",
            badge: "Parent Trust",
            highlights: [
                "Real-time attendance push alerts",
                "Question-wise performance graph",
                "Direct mentor-parent monthly review calls"
            ]
        },
        {
            icon: HeartHandshake,
            title: "Wellness, Motivation & Sports Complex",
            subtitle: "Counter Exam Pressure with Joyful Learning",
            desc: "A positive, encouraging environment with regular motivational sessions by AIR toppers, dedicated psychological counselors, morning yoga, and sports grounds.",
            badge: "Student Wellbeing",
            highlights: [
                "Cricket, Basketball & Badminton grounds",
                "Weekly motivational talks by AIR-1 mentors",
                "Certified counseling & stress management"
            ]
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
            {/* Subtle background mesh */}
            <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-10 -left-32 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Block (Chart Academy Style) */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                        <span>Complete Educational Package</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
                        What's Included in Your <br className="hidden sm:inline" />
                        <span className="text-[#3b0764]">PCP Sikar Enrollment?</span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
                        No hidden costs, no surprise test charges. Everything an aspirant needs from foundational NCERT mastery to All India Rank conversion under one disciplined roof.
                    </p>
                </div>

                {/* 8 Deliverables Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deliverables.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div 
                                key={idx}
                                className="flex flex-col justify-between p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-purple-300 hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
                            >
                                <div>
                                    {/* Top badge & Icon */}
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#ffc107] flex items-center justify-center text-black shadow-xs group-hover:scale-105 transition-transform">
                                            <Icon className="w-6 h-6 text-black" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-100 text-[#2e1065] border border-purple-200">
                                            {item.badge}
                                        </span>
                                    </div>

                                    {/* Title & Subtitle */}
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-1">
                                        {item.title}
                                    </h3>
                                    <h4 className="text-xs font-bold text-purple-800 mb-3">
                                        {item.subtitle}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                                        {item.desc}
                                    </p>

                                    {/* Highlight Checklist */}
                                    <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                                        {item.highlights.map((h, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-1.5 text-[11px] font-medium text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2e1065] via-[#3b0764] to-[#4c1d95] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div>
                        <span className="px-3 py-1 rounded-full bg-[#ffc107] text-black text-[11px] font-black uppercase tracking-wider inline-block mb-2">
                            Session 2026-27 Registrations Open
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                            Ready to Experience India's Most Disciplined Coaching?
                        </h3>
                        <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
                            Join over 10,000+ ambitious students preparing for NEET & IIT-JEE at PCP Sikar and Jaipur campuses.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <a
                            href="#scholarship"
                            className="btn-brand-yellow px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
                        >
                            <span>Apply for Admission</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="tel:9610892222"
                            className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-colors"
                        >
                            Call: 9610-89-2222
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
