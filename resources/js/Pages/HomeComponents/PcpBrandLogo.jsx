import React from 'react';

export default function PcpBrandLogo({ size = 'default', showTagline = false, variant = 'light', className = '' }) {
    const isHero = size === 'hero';
    const isSm = size === 'sm';
    const isLg = size === 'lg';
    const isDark = variant === 'dark';

    return (
        <div className={`inline-flex flex-col items-center justify-center select-none text-center ${className}`}>
            {showTagline && (
                <span className={`${
                    isHero ? 'text-xs sm:text-sm md:text-base mb-2 sm:mb-2.5 font-semibold' : 'text-[10px] mb-0.5 font-medium'
                } ${isDark ? 'text-purple-200/95' : 'text-[#4a0e78]'} tracking-wide`}>
                    Your Search will End Here...
                </span>
            )}
            
            <div className="flex flex-col items-center justify-center leading-none">
                {/* PCP Title - Royal Purple on light theme, Crisp White on dark theme */}
                <span className={`font-black tracking-tight font-sans ${
                    isDark ? 'text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.4)]' : 'text-[#2e1065] drop-shadow-sm'
                } ${
                    isSm ? 'text-2xl' : isHero ? 'text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black tracking-tighter' : isLg ? 'text-3xl' : 'text-3xl'
                }`}>
                    PCP
                </span>

                {/* Golden Yellow Solid Box with Black IIT-JEE • NEET */}
                <div className={`inline-flex items-center justify-center font-black uppercase text-black bg-[#ffc107] shadow-md shadow-amber-500/20 ${
                    isSm ? 'px-2 py-0.5 text-[9px] rounded my-0.5' : isHero ? 'px-4 sm:px-6 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base font-extrabold rounded-md my-1.5 sm:my-2' : 'px-3 py-0.5 text-[10px] font-extrabold rounded my-1'
                }`}>
                    <span>IIT-JEE • NEET</span>
                </div>

                {/* Sikar • Jaipur subtitle */}
                <span className={`font-bold tracking-widest uppercase ${
                    isDark ? 'text-white' : 'text-[#3b0764]'
                } ${
                    isSm ? 'text-[9px]' : isHero ? 'text-sm sm:text-base md:text-lg tracking-widest mt-0.5' : 'text-xs tracking-wider'
                }`}>
                    Sikar • Jaipur
                </span>
            </div>
        </div>
    );
}
