import React from 'react';
import { Sparkles, ArrowRight, Calendar, Trophy, Award, CheckCircle2, ExternalLink } from 'lucide-react';

export default function PcpOlympiadCountdown() {
    return (
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200/80">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1045] via-[#2a0e5f] to-[#160b33] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-purple-500/30">
                    
                    {/* Background glow effects */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ffc107]/10 rounded-full blur-[140px] pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Left Column: Urgency & Event Details */}
                        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                            
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffc107] text-black text-xs font-black uppercase tracking-wider shadow-md">
                                <Sparkles className="w-3.5 h-3.5 text-black" />
                                <span>India's Biggest Talent Discovery & Scholarship Exam</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">PRINCE</span>
                                <span className="text-xl sm:text-2xl font-black text-[#ffc107] italic tracking-tight">Olympiad</span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-white/20 text-white">Classes V - XII</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
                                HURRY UP! <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffc107] via-amber-300 to-[#ffb703]">
                                    Don't Miss The Last Opportunity
                                </span>
                            </h2>

                            <div className="flex items-center gap-2 text-sm sm:text-base text-purple-200 font-semibold">
                                <Calendar className="w-4 h-4 text-[#ffc107]" />
                                <span>Last Date to Enroll: <strong className="text-white">17 SEPT., 2026</strong></span>
                            </div>

                            <p className="text-xs sm:text-sm text-purple-200/90 max-w-xl leading-relaxed">
                                Win up to 100% Tuition Fee Waivers, Cash Rewards, Laptops, and National Recognition for Classes 5th to 12th. Test centers across Rajasthan, Haryana, Punjab, UP & MP.
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                                <a
                                    href="https://www.po.princeeduhub.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-brand-yellow px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
                                >
                                    <span>Apply ONLINE Now (po.princeeduhub.com)</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>

                                <a
                                    href="tel:9610892222"
                                    className="px-5 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-colors"
                                >
                                    Helpline: 9610-89-2222
                                </a>
                            </div>

                        </div>

                        {/* Right Column: Visual Days-To-Go Countdown Dial from Uploaded Image */}
                        <div className="lg:col-span-5 flex flex-col items-center justify-center">
                            
                            {/* Graphic Arc matching user's uploaded banner */}
                            <div className="relative w-full max-w-xs sm:max-w-sm p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center">
                                
                                <span className="text-[11px] font-black uppercase tracking-widest text-[#ffc107] mb-4">
                                    Admissions Closing Soon
                                </span>

                                {/* 3-Dial Arc representation */}
                                <div className="flex items-end justify-center gap-2 w-full my-2">
                                    
                                    {/* 6 Days */}
                                    <div className="flex-1 py-4 px-2 rounded-2xl bg-purple-900/50 border border-purple-400/20 text-center opacity-60">
                                        <div className="text-xl sm:text-2xl font-black text-purple-300">6</div>
                                        <div className="text-[9px] font-bold text-purple-300 uppercase">Days Left</div>
                                    </div>

                                    {/* 5 Days (Featured Active Dial) */}
                                    <div className="flex-[1.4] py-6 px-3 rounded-2xl bg-white text-slate-900 text-center shadow-2xl border-2 border-[#ffc107] transform -translate-y-2 relative">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#ffc107]" />
                                        <div className="text-4xl sm:text-5xl font-black text-[#2e1065] leading-none">5</div>
                                        <div className="text-xs font-black uppercase tracking-wider text-slate-800 mt-1">Days To Go</div>
                                    </div>

                                    {/* 4 Days */}
                                    <div className="flex-1 py-4 px-2 rounded-2xl bg-purple-900/50 border border-purple-400/20 text-center opacity-60">
                                        <div className="text-xl sm:text-2xl font-black text-purple-300">4</div>
                                        <div className="text-[9px] font-bold text-purple-300 uppercase">Days Left</div>
                                    </div>

                                </div>

                                <div className="text-center mt-4">
                                    <span className="text-xs text-amber-300 font-bold block">
                                        ⚡ Limited Seats per Exam Center
                                    </span>
                                    <span className="text-[10px] text-purple-200/80">
                                        Online Registration Closes at 11:59 PM
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
