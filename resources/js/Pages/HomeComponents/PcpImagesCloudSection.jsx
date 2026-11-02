// @ts-nocheck
import React, { useState, useRef } from 'react';
import { ArrowRight, Leaf, Compass } from 'lucide-react';

export default function PcpImagesCloudSection() {
    const sectionRef = useRef(null);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

    // 6 Expander Images from User's SectionImagesCloud Snippet
    // Placed in an open perimeter so center text is 100% visible and uncluttered
    const items = [
        {
            id: 1,
            src: "/uploads/cloud/cloud-1.jpg",
            baseX: -460,
            baseY: -80,
            width: 220,
            height: 250,
            depth: 0.045,
            tag: "Fauna Care",
            caption: "Biodiversity Conservation"
        },
        {
            id: 2,
            src: "/uploads/cloud/cloud-2.jpg",
            baseX: -40,
            baseY: -320,
            width: 180,
            height: 200,
            depth: -0.055,
            tag: "Wildlife",
            caption: "Habitat Protection"
        },
        {
            id: 3,
            src: "/uploads/cloud/cloud-3.jpg",
            baseX: 460,
            baseY: -70,
            width: 220,
            height: 250,
            depth: 0.05,
            tag: "Stewardship",
            caption: "Living Ecosystems"
        },
        {
            id: 4,
            src: "/uploads/cloud/cloud-4.jpg",
            baseX: -420,
            baseY: 240,
            width: 200,
            height: 230,
            depth: -0.045,
            tag: "Flora Reserve",
            caption: "Botanical Reserves"
        },
        {
            id: 5,
            src: "/uploads/cloud/cloud-5.jpg",
            baseX: 70,
            baseY: 330,
            width: 210,
            height: 240,
            depth: 0.06,
            tag: "Sanctuary",
            caption: "Species Preservation"
        },
        {
            id: 6,
            src: "/uploads/cloud/cloud-6.jpg",
            baseX: 450,
            baseY: 230,
            width: 190,
            height: 220,
            depth: -0.065,
            tag: "Waterways",
            caption: "Riverine Corridors"
        }
    ];

    // Smooth Mouse Move Parallax Handler
    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX);
        const y = (e.clientY - centerY);
        setMouseOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setMouseOffset({ x: 0, y: 0 });
    };

    return (
        <section 
            id="images-cloud-section" 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#faf7fe] via-white to-[#faf7fe] text-slate-900 overflow-hidden font-sans border-b border-purple-100/90 select-none"
        >
            {/* Ambient Background Radial Auras */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[150px]" />
                <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[130px]" />
                <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-100/25 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                
                {/* 1. DESKTOP & TABLET VIEW: Interactive Floating Cloud (hidden on small mobile) */}
                <div className="hidden sm:flex relative w-full max-w-[1400px] h-[640px] lg:h-[860px] items-center justify-center overflow-visible">
                    
                    {/* Inner Parallax Canvas Stage: Full 1400x860 scaled on tablets */}
                    <div className="absolute w-[1400px] h-[860px] origin-center scale-[0.62] md:scale-[0.78] lg:scale-100 transition-transform duration-300 flex items-center justify-center">
                        
                        {/* Center Brand Content: 100% visible without any image overlap */}
                        <div className="relative z-20 flex flex-col items-center text-center max-w-[420px] px-4 pointer-events-auto">
                            
                            {/* Suptitle / Category Badge */}
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f7e8fc] text-[#2e0854] text-xs font-black uppercase tracking-widest border border-[#eed3f8] shadow-2xs mb-3">
                                <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>Conservation</span>
                            </div>

                            {/* Main Display Headline */}
                            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.08] drop-shadow-sm">
                                Preserving Life’s{' '}
                                <span className="text-[#2e0854] underline decoration-[#5b40cf]/40 decoration-4 underline-offset-4">
                                    Balance
                                </span>
                            </h2>

                            {/* Narrative Subtitle */}
                            <p className="mt-3.5 text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
                                Sustaining ecological harmony, biodiversity stewardship, and environmental equilibrium across living landscapes.
                            </p>

                            {/* Button Pill (Matching User's snippet ButtonPill) */}
                            <a 
                                href="/conservation"
                                className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#2e0854] via-[#3b1165] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 group"
                            >
                                <span>Learn about our efforts</span>
                                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </span>
                            </a>

                        </div>

                        {/* Floating Medias Cloud (6 Expanders) */}
                        <div className="absolute inset-0 pointer-events-none">
                            {items.map((item) => {
                                // Calculate Parallax coordinates with smooth mouse drift
                                const posX = item.baseX + (mouseOffset.x * item.depth);
                                const posY = item.baseY + (mouseOffset.y * item.depth);

                                return (
                                    <div
                                        key={item.id}
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            width: `${item.width}px`,
                                            height: `${item.height}px`,
                                            transform: `translate(${posX}px, ${posY}px)`,
                                            transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)'
                                        }}
                                        className="pointer-events-auto group cursor-pointer"
                                    >
                                        {/* Card Container with Rounded Corners & Soft Drop Shadow */}
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border-2 border-white shadow-[0_12px_32px_-8px_rgba(46,8,84,0.16)] transition-all duration-500 group-hover:scale-108 group-hover:shadow-[0_20px_45px_-10px_rgba(91,64,207,0.3)] group-hover:border-[#5b40cf] group-hover:z-30">
                                            
                                            {/* Image */}
                                            <img 
                                                src={item.src}
                                                alt={item.caption}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            />

                                            {/* Hover Glass Caption Overlay */}
                                            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                                                <span className="text-[10px] font-black tracking-wider uppercase text-amber-300">
                                                    {item.tag}
                                                </span>
                                                <span className="text-[11px] font-bold truncate">
                                                    {item.caption}
                                                </span>
                                            </div>

                                            {/* Ambient subtle border glow on idle */}
                                            <div className="absolute inset-0 rounded-2xl border border-black/5 pointer-events-none" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                </div>

                {/* 2. MOBILE VIEW: Dedicated Sleek Presentation (Visible only on mobile devices) */}
                <div className="block sm:hidden w-full space-y-8">
                    
                    {/* Center Content */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[11px] font-black uppercase tracking-widest border border-[#eed3f8] shadow-2xs mb-2.5">
                            <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>Conservation</span>
                        </div>

                        <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                            Preserving Life’s{' '}
                            <span className="text-[#2e0854] underline decoration-[#5b40cf]/40 decoration-4 underline-offset-4">
                                Balance
                            </span>
                        </h2>

                        <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal max-w-xs">
                            Sustaining ecological harmony, biodiversity stewardship, and environmental equilibrium across living landscapes.
                        </p>

                        <a 
                            href="/conservation"
                            className="mt-4 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95"
                        >
                            <span>Learn about our efforts</span>
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </a>
                    </div>

                    {/* Staggered 2-Column Photo Cards */}
                    <div className="grid grid-cols-2 gap-3 px-2">
                        {items.map((item, idx) => (
                            <div 
                                key={item.id} 
                                className={`rounded-xl overflow-hidden bg-white border border-purple-100 shadow-sm relative ${
                                    idx % 2 === 1 ? 'mt-4' : ''
                                }`}
                            >
                                <div className="h-40 w-full relative">
                                    <img 
                                        src={item.src} 
                                        alt={item.caption} 
                                        loading="lazy" 
                                        className="w-full h-full object-cover" 
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
                                        <span className="text-[9px] font-black uppercase text-amber-300 block">
                                            {item.tag}
                                        </span>
                                        <span className="text-[10px] font-bold block truncate">
                                            {item.caption}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
