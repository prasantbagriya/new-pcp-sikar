import React from 'react';
import { 
    MessageSquare, 
    Send, 
    Users, 
    Sparkles, 
    ArrowUpRight, 
    CheckCircle2, 
    Bot, 
    GraduationCap, 
    Award,
    Flame,
    BellRing
} from 'lucide-react';

export default function PcpCommunitySection() {
    const communityPerks = [
        "45,000+ Active PCP Aspirants",
        "24/7 Peer & Faculty Doubt Channels",
        "Daily PDF DPPs & Formula Sheets",
        "Live Sunday Quiz Leaderboards",
        "Instant NTA Exam Notifications",
        "100% Free Student Access"
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-[#0a0114] text-white overflow-hidden border-b border-purple-900/30">
            
            {/* 1. Deep Polygonal Geometric Wireframe SVG Mesh (Authentic Blueberry Futures Geometric Polygon Network) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <svg 
                    className="w-[1200px] h-[750px] max-w-none opacity-25" 
                    viewBox="0 0 1200 750" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Outer Polygon Lines */}
                    <polygon 
                        points="600,60 1050,220 950,620 250,620 150,220" 
                        stroke="#a855f7" 
                        strokeWidth="1.2" 
                        strokeDasharray="4 4"
                    />
                    {/* Inner Diamond / Pentagonal Facets */}
                    <polygon 
                        points="600,140 920,270 820,560 380,560 280,270" 
                        stroke="#7e22ce" 
                        strokeWidth="1.5" 
                    />
                    {/* Geometric Intersection Lines connecting to center */}
                    <line x1="600" y1="60" x2="600" y2="140" stroke="#ffc107" strokeWidth="1.5" />
                    <line x1="1050" y1="220" x2="920" y2="270" stroke="#a855f7" strokeWidth="1" />
                    <line x1="950" y1="620" x2="820" y2="560" stroke="#a855f7" strokeWidth="1" />
                    <line x1="250" y1="620" x2="380" y2="560" stroke="#a855f7" strokeWidth="1" />
                    <line x1="150" y1="220" x2="280" y2="270" stroke="#a855f7" strokeWidth="1" />
                    
                    {/* Center Accent Connections */}
                    <line x1="600" y1="140" x2="380" y2="560" stroke="#a855f7" strokeWidth="0.8" strokeOpacity="0.4" />
                    <line x1="600" y1="140" x2="820" y2="560" stroke="#a855f7" strokeWidth="0.8" strokeOpacity="0.4" />
                    <line x1="280" y1="270" x2="920" y2="270" stroke="#a855f7" strokeWidth="0.8" strokeOpacity="0.3" />

                    {/* Nodes at Vertices */}
                    <circle cx="600" cy="140" r="4" fill="#ffc107" />
                    <circle cx="920" cy="270" r="3.5" fill="#a855f7" />
                    <circle cx="820" cy="560" r="3.5" fill="#a855f7" />
                    <circle cx="380" cy="560" r="3.5" fill="#a855f7" />
                    <circle cx="280" cy="270" r="3.5" fill="#a855f7" />
                </svg>

                {/* Central Ambient Glow Core */}
                <div className="absolute w-[500px] h-[500px] bg-purple-700/25 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute w-[300px] h-[300px] bg-[#ffc107]/10 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Hero Community Stage */}
                <div className="relative min-h-[520px] flex flex-col items-center justify-center text-center py-6">
                    
                    {/* Top 3D Glossy App Squircle Icon */}
                    <div className="relative mb-6">
                        <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-[#2e1065] via-[#6b21a8] to-[#9333ea] border-2 border-purple-400/40 p-4 shadow-2xl shadow-purple-900/60 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer">
                            <div className="relative">
                                <Send className="w-9 h-9 text-white drop-shadow transform -rotate-12 translate-x-0.5" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ffc107] animate-ping" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ffc107]" />
                            </div>
                        </div>
                    </div>

                    {/* Massive Bold Heading (Blueberry Futures Style) */}
                    <div className="space-y-1 mb-4">
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                            Join our
                        </h2>
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
                            community
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="max-w-xl text-sm sm:text-base text-purple-200/90 leading-relaxed font-normal mb-8 px-4">
                        Sign into our Official Student & Parent Community for access to daily quiz marathons, faculty PDF notes, AIR ranker AMAs, and instant exam notifications!
                    </p>

                    {/* Vibrant Action Button with Arrow Up-Right */}
                    <div className="flex flex-wrap items-center justify-center gap-4 z-20">
                        <a
                            href="https://t.me/pcpsikar"
                            target="_blank"
                            rel="noreferrer"
                            className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#182bff] hover:bg-[#0d1fe8] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-xl shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer group"
                        >
                            <span>Join Official Community Now</span>
                            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        
                        <a
                            href="https://chat.whatsapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all backdrop-blur-md inline-flex items-center gap-2"
                        >
                            <MessageSquare className="w-4 h-4 text-blue-300" />
                            <span>WhatsApp Updates Channel</span>
                        </a>
                    </div>

                    {/* 3 Floating Glass Chat Notification Cards (Blueberry Futures Authentic Exact Layout) */}
                    
                    {/* Card 1: Left Floating Card (PCP Daily Quiz Bot) */}
                    <div className="hidden lg:flex absolute left-0 top-1/3 -translate-y-6 w-80 p-4 rounded-2xl bg-[#170529]/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-950/80 items-start gap-3 text-left animate-float-1 pointer-events-none select-none">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                                <span className="text-xs font-black text-white truncate">PCP Daily Quiz Bot</span>
                                <span className="text-[10px] text-purple-300/70 shrink-0">Today 10:23 AM</span>
                            </div>
                            <p className="text-[11px] text-purple-200/90 leading-snug mt-1 font-normal">
                                🔥 <strong>NEET 2026 Target:</strong> 45 Biology NCERT Questions with video solutions now live! Solve now.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Top-Right Floating Card (Topper Testimonial) */}
                    <div className="hidden lg:flex absolute right-4 top-14 w-80 p-4 rounded-2xl bg-[#170529]/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-950/80 items-start gap-3 text-left animate-float-2 pointer-events-none select-none">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shrink-0 shadow-md">
                            <Award className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                                <span className="text-xs font-black text-white truncate">Arjun (JEE Adv AIR-225)</span>
                                <span className="text-[10px] text-purple-300/70 shrink-0">Today 10:23 AM</span>
                            </div>
                            <p className="text-[11px] text-purple-200/90 leading-snug mt-1 font-normal">
                                Just passed my evaluation! Permanent faculty resolved my Rotational doubt on desk. Revision notes pinned 📌
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Bottom-Right Floating Card (Faculty Desk) */}
                    <div className="hidden lg:flex absolute right-6 bottom-8 w-80 p-4 rounded-2xl bg-[#170529]/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-950/80 items-start gap-3 text-left animate-float-3 pointer-events-none select-none">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-md">
                            <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                                <span className="text-xs font-black text-white truncate">Dr. Faculty Desk (Medical)</span>
                                <span className="text-[10px] text-purple-300/70 shrink-0">Today 10:23 AM</span>
                            </div>
                            <p className="text-[11px] text-purple-200/90 leading-snug mt-1 font-normal">
                                Anyone attending the Sunday AMA session? We are revealing key negative-marking avoidance strategies!
                            </p>
                        </div>
                    </div>

                </div>

                {/* 2. Infinite Continuous Marquee Ticker (Blueberry Futures logo-slider v2 Style) */}
                <div className="mt-12 pt-8 border-t border-purple-900/40 relative">
                    <div className="relative overflow-hidden w-full">
                        
                        {/* Side Fading Gradient Masks */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0114] to-transparent z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0114] to-transparent z-10" />

                        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
                            {[...communityPerks, ...communityPerks, ...communityPerks].map((perk, idx) => (
                                <div 
                                    key={idx}
                                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 text-xs font-bold text-purple-200 backdrop-blur-sm"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-[#ffc107]" />
                                    <span>{perk}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
