import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Pause, Play } from 'lucide-react';
import { Link, Image } from './utils';

export default function HomeHeroSlider({ sliders = [], basePath = '' }) {
    if (!sliders || sliders.length === 0) return null;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    const total = sliders.length;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % total);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Autoplay effect
    useEffect(() => {
        if (total <= 1 || isPaused) return;

        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % total);
        }, 5500);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [total, isPaused, currentIndex]);

    const currentSlide = sliders[currentIndex] || sliders[0];
    const slideLink = currentSlide.link 
        ? (currentSlide.link.startsWith('http') ? currentSlide.link : `${basePath || ''}${currentSlide.link}`) 
        : '#';

    return (
        <section 
            className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pt-4 pb-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Home Featured Slider"
        >
            <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] md:aspect-[2.4/1] min-h-[260px] sm:min-h-[340px] md:min-h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-zinc-800 bg-[#082755]">
                {/* Slides Layer */}
                {sliders.map((slide, idx) => {
                    const isActive = idx === currentIndex;
                    const imgUrl = slide.image_url || slide.image || slide.coverImage;
                    const thisSlideLink = slide.link 
                        ? (slide.link.startsWith('http') ? slide.link : `${basePath || ''}${slide.link}`) 
                        : '#';
                    return (
                        <div
                            key={slide.id || idx}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                        >
                            <a href={thisSlideLink} className="block w-full h-full cursor-pointer">
                                <img
                                    src={imgUrl}
                                    alt={slide.title || 'Sikar Education Hub Feature'}
                                    fetchPriority={idx === 0 ? 'high' : 'low'}
                                    loading={idx === 0 ? 'eager' : 'lazy'}
                                    className="w-full h-full object-cover object-center transform transition-transform duration-1000 scale-100 hover:scale-102"
                                />
                                {/* Rich Brand Gradient Overlay (Deep Navy + Sunset Glow) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#082755]/95 via-[#082755]/60 to-transparent md:bg-gradient-to-r md:from-[#082755]/95 md:via-[#082755]/70 md:to-transparent" />
                            </a>
                        </div>
                    );
                })}

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end md:justify-center p-6 sm:p-10 md:p-14 max-w-2xl text-white pointer-events-none">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f2650b] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3.5 shadow-md w-fit pointer-events-auto">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Featured Announcement</span>
                    </div>

                    {/* Title */}
                    {currentSlide.title && (
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight sm:leading-snug mb-2 text-white drop-shadow-sm pointer-events-auto">
                            <a href={slideLink} className="hover:text-amber-300 transition-colors">
                                {currentSlide.title}
                            </a>
                        </h2>
                    )}

                    {/* Subtitle / Excerpt */}
                    {currentSlide.subtitle && (
                        <p className="text-xs sm:text-sm md:text-base text-slate-200 line-clamp-2 mb-4 sm:mb-6 font-normal leading-relaxed max-w-xl pointer-events-auto">
                            {currentSlide.subtitle}
                        </p>
                    )}

                    {/* CTA Button */}
                    <div className="flex items-center gap-3 pointer-events-auto">
                        <a
                            href={slideLink}
                            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-[#f2650b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white text-xs sm:text-sm font-extrabold tracking-wide shadow-lg shadow-orange-600/30 transition-all hover:scale-105 active:scale-95"
                        >
                            <span>Explore Details</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <span className="text-xs text-slate-300 hidden sm:inline font-medium">
                            • Verified Sikar Guide
                        </span>
                    </div>
                </div>

                {/* Left & Right Arrow Controls */}
                {total > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                prevSlide();
                            }}
                            aria-label="Previous slide"
                            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#f2650b] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                nextSlide();
                            }}
                            aria-label="Next slide"
                            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#f2650b] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}

                {/* Bottom Pagination Dots */}
                {total > 1 && (
                    <div className="absolute bottom-3 sm:bottom-5 right-5 sm:right-10 z-30 flex items-center gap-2">
                        {sliders.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => goToSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${
                                    idx === currentIndex
                                        ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-[#f2650b] shadow-md shadow-orange-500/50'
                                        : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
