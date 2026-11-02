// @ts-nocheck
import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PcpFoudreVideoSection() {
    // 4 Campus & Student Life Video Stories
    const stories = [
        {
            id: 1,
            title: "Live Classroom Lectures & Faculty Guidance",
            category: "Academic Excellence",
            video: "/uploads/pcp/classroom-lecture.mp4",
            poster: "/uploads/pcp/toppers/devesh_joshi_air1.jpg",
            thumbnail: "/uploads/pcp/toppers/devesh_joshi_air1.jpg",
            tag: "AIR 1 NEET-UG Mentors",
            highlight: "Interactive daily lectures by experienced Kota and Sikar HODs breaking down complex concepts step-by-step."
        },
        {
            id: 2,
            title: "12-Hour Continuous Faculty Doubt Desks",
            category: "Personal Mentorship",
            video: "/uploads/pcp/classroom-study.mp4",
            poster: "/uploads/pcp/toppers/vivek_gupta_air225.jpg",
            thumbnail: "/uploads/pcp/toppers/vivek_gupta_air225.jpg",
            tag: "AIR 225 JEE Adv Mentors",
            highlight: "One-on-one personal concept clearance directly with senior faculty counters every morning and evening."
        },
        {
            id: 3,
            title: "Focused Night Library & Daily Problem Solving",
            category: "Self-Study Desks",
            video: "/uploads/pcp/study-bg-small.mp4",
            poster: "/uploads/pcp/toppers/saurabh_agarwal_air87.jpg",
            thumbnail: "/uploads/pcp/toppers/saurabh_agarwal_air87.jpg",
            tag: "AIR 87 AIIMS Delhi Batch",
            highlight: "Supervised study sessions where 50+ Daily Practice Problems (DPPs) are solved with faculty support."
        },
        {
            id: 4,
            title: "Campus Energy & Residential Life",
            category: "Residential Wing",
            video: "/uploads/pcp/skills-visual.mp4",
            poster: "/uploads/pcp/toppers/navdeep_mann_air469.jpg",
            thumbnail: "/uploads/pcp/toppers/navdeep_mann_air469.jpg",
            tag: "AIR 469 First Attempt",
            highlight: "Holistic student development with round-the-clock hostel mentorship, sports, and peer motivation."
        }
    ];

    const [activeStoryIdx, setActiveStoryIdx] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const activeStory = stories[activeStoryIdx];

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const selectStory = (idx) => {
        setActiveStoryIdx(idx);
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
        }
    };

    return (
        <section 
            id="foudre-ecosystem" 
            className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-[#1f0a38] text-white overflow-hidden font-sans border-b border-purple-900/60 selection:bg-[#ffc1e3] selection:text-[#1f0a38]"
        >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute -top-32 left-10 w-[700px] h-[550px] bg-purple-600/15 rounded-full blur-[160px]" />
                <div className="absolute -bottom-32 right-10 w-[650px] h-[550px] bg-pink-500/10 rounded-full blur-[170px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#2e0854]/40 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2-Column Split Layout matching Agence Foudre Reference */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* LEFT COLUMN: Agence Foudre Typography, Speech Bubble & Video Switcher */}
                    <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
                        
                        {/* 1. Floating Chat Bubble with Emojis (Exact Agence Foudre Style) */}
                        <div className="relative mb-3 sm:mb-4 inline-block">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#ffd6e8] text-[#1f0a38] font-bold text-base sm:text-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                                <span className="tracking-widest">📱 💖 😎</span>
                            </div>
                            {/* Chat bubble tail */}
                            <div className="absolute -bottom-2 left-6 w-3 h-3 bg-[#ffd6e8] transform rotate-45" />
                        </div>

                        {/* 2. Massive Condensed All-Caps Headline (Exact Agence Foudre Style) */}
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] select-none">
                            NOUS <br />
                            LES RENDONS, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-[#ffd6e8]">
                                TOPPERS
                            </span>
                        </h2>

                        {/* English & Academic Context Line */}
                        <p className="mt-5 text-sm sm:text-base text-purple-200/80 max-w-lg leading-relaxed font-normal">
                            We don’t just teach syllabi; we sculpt discipline, habits, and mindset. Watch authentic glimpses of everyday life, faculty doubt desks, and peer study culture across PCP Sikar campuses.
                        </p>

                        {/* 3. Circular Thumbnails Row (Switch active video on click) */}
                        <div className="mt-8 flex items-center gap-2.5 sm:gap-3 flex-wrap">
                            {stories.map((story, idx) => {
                                const isActive = activeStoryIdx === idx;
                                return (
                                    <button
                                        key={story.id}
                                        type="button"
                                        onClick={() => selectStory(idx)}
                                        className={`relative rounded-full transition-all duration-300 p-0.5 cursor-pointer ${
                                            isActive 
                                                ? 'ring-3 ring-[#ffd6e8] scale-110 shadow-lg' 
                                                : 'opacity-65 hover:opacity-100 hover:scale-105'
                                        }`}
                                        title={story.title}
                                        aria-label={`Watch ${story.title}`}
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/80 bg-slate-800">
                                            <img 
                                                src={story.thumbnail} 
                                                alt={story.title} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                    </button>
                                );
                            })}

                            {/* +1,315 Counter Pill (Matching Foudre's +2 Badge) */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e84393] text-white font-black text-xs sm:text-[13px] flex items-center justify-center border-2 border-white/80 shadow-md">
                                +1,315
                            </div>
                        </div>

                        {/* Active Story Caption & Key Highlights */}
                        <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-lg">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-wider text-[#ffd6e8]">{activeStory.category}</span>
                                <span className="text-white/40">•</span>
                                <span className="text-xs text-purple-200 font-bold">{activeStory.tag}</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                                {activeStory.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-purple-200/70 mt-1 leading-relaxed">
                                {activeStory.highlight}
                            </p>
                        </div>

                        {/* Bottom Underlined Category Label (Matching Agence Foudre) */}
                        <div className="mt-8 pt-4">
                            <a 
                                href="#results-orbit"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-white/80 hover:text-white underline underline-offset-8 decoration-2 decoration-[#ffd6e8] transition-colors"
                            >
                                <span>CAMPUS LIFE & PROJETS</span>
                                <ArrowRight className="w-4 h-4 text-[#ffd6e8]" />
                            </a>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Video Player in Rounded Vertical Card Frame */}
                    <div className="lg:col-span-6 flex items-center justify-center">
                        
                        {/* Video Card Container (Matching Foudre's Tall Rounded Ratio) */}
                        <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[520px] sm:h-[580px] lg:h-[620px] rounded-[32px] sm:rounded-[40px] overflow-hidden bg-black border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group">
                            
                            {/* 1. Floating Speech Bubble '⚡' on top-left of Video (Exact Foudre Feature) */}
                            <div className="absolute top-5 left-5 z-30 pointer-events-none">
                                <div className="relative px-3.5 py-2 rounded-2xl bg-[#ffd6e8] text-[#1f0a38] font-black text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                                    <span>⚡</span>
                                    <div className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-[#ffd6e8] transform rotate-45" />
                                </div>
                            </div>

                            {/* 2. Top-Right Audio / Play Controls */}
                            <div className="absolute top-5 right-5 z-30 flex items-center gap-2">
                                {/* Mute / Unmute Button */}
                                <button
                                    type="button"
                                    onClick={toggleMute}
                                    className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                                    aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                                >
                                    {isMuted ? <VolumeX className="w-4 h-4 text-white/80" /> : <Volume2 className="w-4 h-4 text-[#ffd6e8]" />}
                                </button>

                                {/* Play / Pause Button */}
                                <button
                                    type="button"
                                    onClick={togglePlay}
                                    className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                                >
                                    {isPlaying ? <Pause className="w-4 h-4 text-white/80" /> : <Play className="w-4 h-4 text-[#ffd6e8]" />}
                                </button>
                            </div>

                            {/* 3. HTML5 Video Player with Smooth Autoplay & Loop */}
                            <video 
                                ref={videoRef}
                                key={activeStory.video}
                                src={activeStory.video} 
                                poster={activeStory.poster}
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />

                            {/* 4. Bottom Video Overlay Information Card */}
                            <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 bg-gradient-to-t from-black via-black/70 to-transparent z-20 flex flex-col justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[11px] font-black uppercase tracking-wider text-[#ffd6e8]">
                                        {activeStory.category}
                                    </span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-black text-white mt-0.5 tracking-tight drop-shadow-md">
                                    {activeStory.title}
                                </h3>
                                <p className="text-xs text-white/70 mt-1 line-clamp-2 font-normal">
                                    {activeStory.highlight}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
