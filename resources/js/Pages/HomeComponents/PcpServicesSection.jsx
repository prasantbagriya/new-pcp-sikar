// @ts-nocheck
import React from 'react';
import { ArrowUpRight, Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function PcpServicesSection() {
    const services = [
        {
            number: "01",
            title: "NEET-UG Medical Classroom Division",
            subtitle: "Class 11th, 12th & 12th Pass Target / Dropper Batches",
            description: "Rigorous NCERT-centric medical curriculum, daily practice problem (DPP) sessions, and continuous bi-weekly minor tests crafted by experienced medical coaching faculties with AIIMS benchmarks.",
            link: "/category/neet-ug",
            tag: "AIR 1 NEET Proven System"
        },
        {
            number: "02",
            title: "IIT-JEE Engineering Wing (Main & Advanced)",
            subtitle: "Targeted Classroom Mentorship for Top IITs & NITs",
            description: "Deep analytical and problem-solving pedagogy, daily mathematics and physics doubt counters, and national-level Computer-Based Tests (CBT) rivaling Kota & Hyderabad standards.",
            link: "/category/jee-coachings",
            tag: "AIR 225 Sikar Topper"
        },
        {
            number: "03",
            title: "Pre-Foundation & Olympiad Division",
            subtitle: "Class 5th to 10th (Prince Olympiad, IJSO, PRMO, NTSE)",
            description: "Early competitive aptitude grooming, mental ability drills, and science Olympiad mentorship that builds an unbreakable conceptual base before entering Class 11.",
            link: "#scholarship",
            tag: "Classes 5th - 10th"
        },
        {
            number: "04",
            title: "12-Hour Continuous Faculty Doubt Counters",
            subtitle: "North India's Only Non-Stop Doubt Clearance System",
            description: "Dedicated, continuous one-on-one doubt counters operating from 8:00 AM to 8:00 PM daily. Students sit directly with subject HODs to clear every question on the spot.",
            link: "/about",
            tag: "8:00 AM - 8:00 PM Daily"
        },
        {
            number: "05",
            title: "Disciplined Residential Campus & Separate Hostels",
            subtitle: "Biometric Security, Zero Distraction & Mentored Routine",
            description: "Separate, air-cooled/AC hostels for boys and girls with strict biometric monitoring, nutritious home-style meals, hygienic dining halls, and resident faculty supervision.",
            link: "/about",
            tag: "Safe & Disciplined Hostels"
        },
        {
            number: "06",
            title: "P-SAT National Talent Scholarship Test",
            subtitle: "₹108+ Crore Scholarships & Educational Foreign Tours",
            description: "Prince Eduhub's signature scholarship test identifying and rewarding young talent across Rajasthan, Haryana, UP, and Bihar with up to 100% coaching & hostel fee concessions.",
            link: "#scholarship",
            tag: "Up to 100% Scholarships"
        }
    ];

    return (
        <section 
            id="services" 
            className="py-8 sm:py-12 lg:py-16 bg-[#fbf9fe] border-b border-purple-100/90 relative select-none"
        >
            {/* Ambient Background Spotlights */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#5b40cf]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start relative">
                    
                    {/* LEFT COLUMN: Sticky Header (Aquafix Style - Stays fixed while right cards scroll) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-4">
                        
                        {/* Eyebrow Pill */}
                        <div className="reveal-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-xs sm:text-sm font-bold border border-purple-200 shadow-none">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span>Our Academic Programs</span>
                        </div>

                        {/* Section Headline */}
                        <h2 className="reveal-scroll text-2xl sm:text-3xl lg:text-[42px] font-black text-slate-900 leading-[1.12] tracking-tight">
                            <span className="relative inline-block">Ensuring Proven</span><br />
                            Results &amp; All India Ranks.
                        </h2>

                        {/* Subtitle Description */}
                        <p className="reveal-scroll text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                            We specialize in rigorous classroom coaching, disciplined residential hostels, and dedicated 12-hour faculty doubt desks for NEET-UG and IIT-JEE aspirants across India.
                        </p>

                        {/* Action CTA Button */}
                        <div className="reveal-scroll pt-1">
                            <a 
                                href="/category/jee-coachings" 
                                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#2e0854] hover:bg-[#5b40cf] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-none group cursor-pointer"
                            >
                                <span>See All Programs</span>
                                <ArrowUpRight className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* Quick Trust Highlights (Exact Match with Image 3) */}
                        <div className="reveal-scroll pt-4 border-t border-purple-200/70 space-y-2 text-xs text-slate-700 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>Classroom Verified Results (AIR 1 NEET, AIR 225 JEE)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>12-Hour Continuous Faculty Doubt Desk System</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Stacked Services Cards (Content Starts BELOW Number to Eliminate Side Gap) */}
                    <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
                        {services.map((item, idx) => (
                            <div 
                                key={idx}
                                className="reveal-scroll"
                                style={{ transitionDelay: `${idx * 60}ms` }}
                            >
                                <a 
                                    href={item.link} 
                                    className="aquafix-card-hover block group p-4 sm:p-5 lg:p-6 rounded-2xl bg-white hover:bg-purple-50/50 border border-purple-100/90 hover:border-[#5b40cf] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
                                >
                                    {/* Top Row: Number Badge + Tag on Left | Arrow on Right */}
                                    <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            {/* Number Circle Badge */}
                                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-purple-200 text-[#2e0854] flex items-center justify-center flex-shrink-0 font-black text-xs sm:text-sm group-hover:bg-[#5b40cf] group-hover:border-[#5b40cf] group-hover:text-white transition-colors duration-300 shadow-2xs">
                                                <span>{item.number}</span>
                                            </div>

                                            {/* Category Tag */}
                                            <span className="px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-[#2e0854]">
                                                {item.tag}
                                            </span>
                                        </div>

                                        {/* Corner Arrow Indicator */}
                                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-50 group-hover:bg-[#2e0854] flex items-center justify-center shrink-0 text-[#2e0854] group-hover:text-white transition-all duration-300 shadow-2xs">
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>

                                    {/* Card Text Content: Starts BELOW Number Circle Across Full Width (Eliminating Narrow Squeeze & Gap) */}
                                    <div>
                                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-[#2e0854] transition-colors duration-200 leading-snug mb-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs sm:text-[12.5px] font-semibold text-[#5b40cf] mb-1.5">
                                            {item.subtitle}
                                        </p>

                                        <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed font-normal">
                                            {item.description}
                                        </p>
                                    </div>

                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
