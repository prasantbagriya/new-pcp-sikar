// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Trophy, Award, Sparkles } from 'lucide-react';

export default function PcpGalleryShowcase() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const cardRefs = useRef([]);

    // Custom floating cursor tracking
    const [mousePos, setMousePos] = useState({ x: -300, y: -300 });
    const [isHoveringSection, setIsHoveringSection] = useState(false);
    
    // In-place scaled card index (Original Smooth Expand Interaction)
    const [scaledIndex, setScaledIndex] = useState(null);

    // Track horizontal panning offset (px)
    const [panningX, setPanningX] = useState(0);

    // Dynamic item width for sibling shift
    const [itemWidth, setItemWidth] = useState(190);

    // Mobile touch drag tracking
    const touchStartX = useRef(0);
    const touchStartPan = useRef(0);

    // Authentic PCP Sikar Toppers with Unified Luxury Purple Theme Background
    const galleryItems = [
        {
            id: 1,
            src: '/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg',
            title: 'Devesh Joshi',
            rank: 'AIR 1 (NEET-UG)',
            badge: 'NEET AIR 1',
            score: '720 / 720 Perfect Score',
            batch: 'Regular Classroom',
            alt: 'Devesh Joshi AIR 1 NEET'
        },
        {
            id: 2,
            src: '/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg',
            title: 'Vivek Gupta',
            rank: 'AIR 225 (JEE Adv)',
            badge: 'JEE Adv AIR 225',
            score: 'IIT Bombay CS',
            batch: 'Super-50 Elite',
            alt: 'Vivek Gupta AIR 225 JEE Adv'
        },
        {
            id: 3,
            src: '/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg',
            title: 'Saurabh Agarwal',
            rank: 'AIR 87 (AIIMS/NEET)',
            badge: 'AIR 87 AIIMS',
            score: 'AIIMS New Delhi',
            batch: 'Medical Division',
            alt: 'Saurabh Agarwal AIR 87 AIIMS'
        },
        {
            id: 4,
            src: '/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg',
            title: 'Navdeep Mann',
            rank: 'AIR 469 (JEE Adv)',
            badge: 'AIR 469 JEE Adv',
            score: 'IIT Delhi Selection',
            batch: 'Integrated Schooling',
            alt: 'Navdeep Mann AIR 469 IIT Delhi'
        },
        {
            id: 5,
            src: '/uploads/pcp/theme_toppers/braj_kishor_air677.jpg',
            title: 'Braj Kishor',
            rank: 'AIR 677 (JEE Adv)',
            badge: 'AIR 677 JEE Adv',
            score: 'IIT Roorkee Selection',
            batch: 'Classroom Aspirant',
            alt: 'Braj Kishor AIR 677 IIT Roorkee'
        },
        {
            id: 6,
            src: '/uploads/pcp/theme_toppers/vikas_dhakharwal_air779.jpg',
            title: 'Vikas Dhakharwal',
            rank: 'AIR 779 (JEE Adv)',
            badge: 'AIR 779 JEE Adv',
            score: 'IIT Kanpur Selection',
            batch: 'Regular Classroom',
            alt: 'Vikas Dhakharwal AIR 779 IIT Kanpur'
        },
        {
            id: 7,
            src: '/uploads/pcp/theme_toppers/nikhil_jeemain.jpg',
            title: 'Nikhil & Top Rankers',
            rank: '99.9478 Percentile',
            badge: '99.94%tile JEE',
            score: 'State Rankers JEE Main',
            batch: 'Doubt Desk Mentorship',
            alt: 'Nikhil 99.9478%tile JEE Main'
        },
        {
            id: 8,
            src: '/uploads/pcp/theme_toppers/rahul_kumawat_jeemain.jpg',
            title: 'Rahul Kumawat',
            rank: 'Top State Ranker',
            badge: 'JEE Main Topper',
            score: 'NIT Top Engineering',
            batch: 'Classroom Regular',
            alt: 'Rahul Kumawat JEE Main Topper'
        },
        {
            id: 9,
            src: '/uploads/pcp/theme_toppers/devesh_joshi.jpg',
            title: 'Devesh Joshi',
            rank: 'All India Rank 1',
            badge: 'NEET Champion',
            score: 'AIIMS New Delhi Selected',
            batch: 'PCP Sikar Classroom',
            alt: 'Devesh Joshi Felicitation'
        },
        {
            id: 10,
            src: '/uploads/pcp/theme_toppers/saurabh_agarwal.jpg',
            title: 'Saurabh Agarwal',
            rank: 'AIIMS New Delhi Selected',
            badge: 'AIIMS Delhi',
            score: 'Top Medical Ranker',
            batch: 'Medical Division',
            alt: 'Saurabh Agarwal Classroom Ranker'
        }
    ];

    // Measure dynamic width
    const updateMeasurements = useCallback(() => {
        if (cardRefs.current[0]) {
            setItemWidth(cardRefs.current[0].offsetWidth || 190);
        }
    }, []);

    useEffect(() => {
        updateMeasurements();
        window.addEventListener('resize', updateMeasurements);
        return () => window.removeEventListener('resize', updateMeasurements);
    }, [updateMeasurements]);

    // Close scaled card on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setScaledIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Mouse movement drives cursor and horizontal panning (when no card is scaled)
    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });

        if (scaledIndex === null && sectionRef.current && trackRef.current) {
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const relX = Math.max(0, Math.min(1, (e.clientX - sectionRect.left) / sectionRect.width));
            
            const trackWidth = trackRef.current.scrollWidth;
            const viewportWidth = sectionRect.width;
            const maxPan = Math.max(0, trackWidth - viewportWidth + 60);

            setPanningX(-(relX * maxPan));
        }
    };

    // Mobile touch drag swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartPan.current = panningX;
    };

    const handleTouchMove = (e) => {
        if (scaledIndex !== null) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - touchStartX.current;
        
        if (sectionRef.current && trackRef.current) {
            const sectionWidth = sectionRef.current.offsetWidth;
            const trackWidth = trackRef.current.scrollWidth;
            const maxPan = Math.max(0, trackWidth - sectionWidth + 60);
            const newPan = Math.min(0, Math.max(-maxPan, touchStartPan.current + diff));
            setPanningX(newPan);
        }
    };

    // Toggle In-Place Card Scale
    const handleCardClick = (idx, e) => {
        e.stopPropagation();
        if (scaledIndex === idx) {
            setScaledIndex(null);
        } else {
            setScaledIndex(idx);
            
            // Auto-center the clicked card smoothly in viewport
            if (sectionRef.current && trackRef.current) {
                const sectionWidth = sectionRef.current.offsetWidth;
                const cardEl = cardRefs.current[idx];
                if (cardEl) {
                    const cardLeft = cardEl.offsetLeft;
                    const cardW = cardEl.offsetWidth;
                    const targetCenter = cardLeft + (cardW / 2);
                    const idealPan = -(targetCenter - (sectionWidth / 2));
                    
                    const trackWidth = trackRef.current.scrollWidth;
                    const maxPan = Math.max(0, trackWidth - sectionWidth + 60);
                    const clampedPan = Math.min(0, Math.max(-maxPan, idealPan));
                    
                    setPanningX(clampedPan);
                }
            }
        }
    };

    return (
        <section 
            id="campus-spaces" 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringSection(true)}
            onMouseLeave={() => {
                setIsHoveringSection(false);
                setMousePos({ x: -300, y: -300 });
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onClick={() => setScaledIndex(null)}
            className="relative w-full pt-6 pb-12 sm:pt-8 sm:pb-16 bg-white overflow-visible select-none border-t border-purple-100"
            style={{ 
                cursor: isHoveringSection ? 'none' : 'default',
                contain: 'none'
            }}
        >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-purple-100/40 rounded-full blur-[140px]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-amber-100/30 rounded-full blur-[130px]" />
            </div>

            {/* Section Header */}
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#2e0854] text-xs font-black uppercase tracking-wider border border-purple-200/80 mb-2">
                            <Trophy className="w-3.5 h-3.5 text-amber-500" />
                            <span>HALL OF FAME &amp; CHAMPIONS</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-normal">
                            Meet Our National Rankers &amp; Selections
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm mt-1">
                            Click any topper card to expand details in-place. Move mouse horizontally to browse.
                        </p>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/80 text-xs font-bold text-[#2e0854] shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Interactive Ribbon • Click to Expand</span>
                    </div>
                </div>
            </div>

            {/* Custom Interactive Floating Cursor ("Scale" / "Close") */}
            {isHoveringSection && (
                <div 
                    style={{ 
                        left: `${mousePos.x}px`, 
                        top: `${mousePos.y}px` 
                    }}
                    className={`fixed z-[120] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-150 ease-out hidden md:flex ${
                        scaledIndex !== null
                            ? 'w-[54px] h-[54px] bg-[#2e0854] text-white shadow-xl ring-2 ring-purple-300' 
                            : 'w-[48px] h-[48px] bg-white text-[#2e0854] shadow-md ring-1 ring-purple-200 font-bold'
                    }`}
                >
                    <span className="text-[10px] font-bold tracking-wider uppercase select-none">
                        {scaledIndex !== null ? 'Close' : 'Scale'}
                    </span>
                </div>
            )}

            {/* ========================================================================= */}
            {/* HORIZONTAL CARDS TRACK: Direct In-Place Scale + Sibling Parting Shift     */}
            {/* Generous top headroom (pt-28 sm:pt-32) prevents any clipping of head/top  */}
            {/* ========================================================================= */}
            <div className="relative z-20 w-full overflow-visible pt-28 sm:pt-32 pb-4">
                
                {/* Smooth Mouse-Panned Ribbon Track */}
                <div 
                    ref={trackRef}
                    style={{ 
                        transform: `translate3d(${panningX}px, 0px, 0px)`,
                        transition: scaledIndex !== null ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.2s ease-out'
                    }}
                    className="flex items-end gap-3.5 sm:gap-4 px-4 sm:px-8 lg:px-12 will-change-transform overflow-visible"
                >
                    {galleryItems.map((item, idx) => {
                        const isScaled = scaledIndex === idx;
                        
                        // Sibling shift ("Parting the Sea"):
                        // Center item scales 2.15x in-place upwards (transformOrigin: 50% 90%)
                        // Left siblings translate smoothly to the left
                        // Right siblings translate smoothly to the right
                        const siblingShift = Math.round(itemWidth * 0.65);
                        let siblingTransform = 'translate3d(0px, 0px, 0px)';
                        if (scaledIndex !== null) {
                            if (idx < scaledIndex) {
                                siblingTransform = `translate3d(-${siblingShift}px, 0px, 0px)`;
                            } else if (idx > scaledIndex) {
                                siblingTransform = `translate3d(${siblingShift}px, 0px, 0px)`;
                            }
                        }

                        return (
                            <div
                                key={item.id}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                onClick={(e) => handleCardClick(idx, e)}
                                style={{
                                    transformOrigin: '50% 90%',
                                    transform: isScaled 
                                        ? 'scale(2.15, 2.15)' 
                                        : `${siblingTransform} scale(1, 1)`,
                                    zIndex: isScaled ? 90 : 10,
                                    boxShadow: isScaled 
                                        ? '0 25px 60px -15px rgba(46, 8, 84, 0.5), 0 0 0 2px rgba(168, 85, 247, 0.6)' 
                                        : '0 4px 15px -3px rgba(46, 8, 84, 0.1)',
                                    transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.1s ease, box-shadow 0.4s ease'
                                }}
                                className={`w-[145px] sm:w-[170px] lg:w-[195px] h-[190px] sm:h-[220px] lg:h-[250px] shrink-0 cursor-pointer relative overflow-hidden select-none will-change-transform rounded-2xl border ${
                                    isScaled 
                                        ? 'border-purple-400 bg-[#2e0854]' 
                                        : 'border-purple-200/90 bg-[#250646] hover:border-purple-400'
                                }`}
                            >
                                {/* Top Rank Badge Pill */}
                                <div className="absolute top-2 left-2 z-20">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-amber-300 font-extrabold text-[9px] uppercase tracking-wide border border-amber-300/30">
                                        <Trophy className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                                        <span>{item.badge}</span>
                                    </span>
                                </div>

                                {/* High-Resolution Topper Image with Luxury Purple Background */}
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    width="195"
                                    height="250"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover object-top block select-none pointer-events-none transition-transform duration-500"
                                />

                                {/* Bottom Label Strip */}
                                <div className="absolute inset-x-0 bottom-0 z-20 p-2 sm:p-2.5 bg-gradient-to-t from-[#2e0854] via-[#2e0854]/85 to-transparent text-white">
                                    <p className="text-[11px] sm:text-xs font-bold tracking-tight text-white leading-tight truncate">
                                        {item.title}
                                    </p>
                                    <p className="text-[9px] sm:text-[10px] font-semibold text-purple-200 leading-tight truncate mt-0.5">
                                        {item.rank}
                                    </p>
                                    {isScaled && (
                                        <p className="text-[8px] text-amber-300 font-bold leading-tight truncate mt-0.5 animate-fade-in">
                                            {item.score}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
