import React from 'react';
import { Trophy, Award, Users, Star, GraduationCap, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export default function PcpStatsTicker() {
    const stats = [
        {
            icon: Trophy,
            value: "AIR-1",
            label: "NEET UG 2024",
            subtext: "First Time in Sikar",
            badge: "National Topper",
            highlight: true,
        },
        {
            icon: Flame,
            value: "AIR-225",
            label: "JEE Advanced 2026",
            subtext: "Sikar Coachings' Topper",
            badge: "JEE Adv Lead",
            highlight: true,
        },
        {
            icon: Award,
            value: "1,000+",
            label: "MBBS Selections",
            subtext: "NEET 2026 Results",
            badge: "Highest Ratio",
        },
        {
            icon: GraduationCap,
            value: "500+",
            label: "IIT, NIT & IIIT",
            subtext: "JEE 2026 Selections",
            badge: "Engineering Wing",
        },
        {
            icon: CheckCircle2,
            value: "102",
            label: "Students >= 99%ile",
            subtext: "JEE Mains 2026",
            badge: "Top Percentile",
        },
        {
            icon: Users,
            value: "1:4 & 1:5",
            label: "Selection Ratio",
            subtext: "1:4 JEE Adv • 1:5 NEET",
            badge: "Efficiency Rate",
        },
        {
            icon: Star,
            value: "4.6 ★",
            label: "Google Rating",
            subtext: "1,315+ Verified Reviews",
            badge: "Google Verified",
            highlight: true,
        },
        {
            icon: ShieldCheck,
            value: "25+ Years",
            label: "Academic Legacy",
            subtext: "Prince Eduhub Group",
            badge: "Trusted Brand",
        },
    ];

    return (
        <section className="relative z-20 mt-6 sm:mt-8 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl border border-slate-200/90">
                {/* Top header badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#ffc107] ring-4 ring-amber-100 animate-pulse" />
                        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2e1065]">
                            Official Performance Benchmarks • PCP Sikar & Jaipur
                        </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                        India's Highest Selection Ratio in IIT-JEE & NEET
                    </span>
                </div>

                {/* Grid of stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={idx} 
                                className={`relative flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                                    stat.highlight 
                                        ? 'bg-purple-50/80 border border-purple-200 shadow-sm shadow-purple-950/5' 
                                        : 'bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-purple-200 hover:shadow-md'
                                }`}
                            >
                                <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${
                                    stat.highlight ? 'bg-[#ffc107] text-black font-extrabold shadow-2xs' : 'bg-slate-200/80 text-slate-700'
                                }`}>
                                    {stat.badge}
                                </span>

                                <div className="text-xl sm:text-2xl lg:text-2.5xl font-black tracking-tight text-[#2e1065] mb-1 font-sans">
                                    {stat.value}
                                </div>

                                <div className="text-xs font-bold text-slate-900 leading-tight mb-0.5">
                                    {stat.label}
                                </div>

                                <div className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-tight">
                                    {stat.subtext}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
