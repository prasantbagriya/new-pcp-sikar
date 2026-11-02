// @ts-nocheck
import React, { useState } from 'react';
import { Target, Award, BookOpen, Trophy, ArrowRight, CheckCircle2, Sparkles, ArrowDownRight, Compass } from 'lucide-react';

/**
 * Default process steps data - 100% dynamic & customizable.
 * Users can pass custom `steps` prop to easily add, remove, or modify steps.
 */
export const DEFAULT_PROCESS_STEPS = [
  {
    id: 1,
    stepNumber: "01",
    badge: "Step 01 • Goal Alignment",
    title: "Choose Your Challenge & Stream",
    description: "Select NEET-UG, IIT-JEE (Main+Adv), or Pre-Foundation (Classes 6-10) with residential hostel or day-boarding tailored to your career ambitions.",
    highlight: "NEET • IIT-JEE • Foundation",
    icon: Target,
    isActive: false,
  },
  {
    id: 2,
    stepNumber: "02",
    badge: "Step 02 • Aptitude Test",
    title: "Appear in P-SAT Scholarship Test",
    description: "Evaluate your foundational aptitude and qualify for up to 100% tuition fee scholarships, cash awards, and allocation into elite rankers' batches.",
    highlight: "Up to 100% Scholarship",
    icon: Award,
    isActive: false,
  },
  {
    id: 3,
    stepNumber: "03",
    badge: "Step 03 • Daily Discipline",
    title: "12-Hr Faculty Doubt & Rigorous Prep",
    description: "Immerse in daily 12-hour continuous faculty desks, NCERT line-by-line decoding, and weekly NTA-pattern OMR testing with micro-analytics.",
    highlight: "12-Hr Doubt Support Desks",
    icon: BookOpen,
    isActive: false,
  },
  {
    id: 4,
    stepNumber: "04",
    badge: "Step 04 • Rank & Selection",
    title: "Get Your All India Rank & Allotment",
    description: "Convert disciplined academic effort into top national percentiles and secure guaranteed admissions into AIIMS, premier Govt. Medical colleges, or IITs/NITs.",
    highlight: "National Selection Guaranteed",
    icon: Trophy,
    isActive: true, // Blueberry Futures highlighted active step 4
  },
];

export default function PcpProcessSection({
  tagline = "ACADEMIC ADMISSION & SUCCESS ROADMAP",
  titlePrefix = "How Our Academic",
  titleHighlight = "Process Works",
  subtitle = "Follow these simple, disciplined steps to enroll in PCP Sikar, master competitive benchmarks, and convert your hard work into an All India Rank.",
  steps = DEFAULT_PROCESS_STEPS,
  ctaText = "Start Your Preparation",
  ctaLink = "#admission",
  ctaSubtext = "Session 2026-27 Registrations & P-SAT Scholarship Test Now Active"
}) {
  const [activeStepHover, setActiveStepHover] = useState(null);

  return (
    <section 
      id="process" 
      data-w-id="pcp-process-section"
      className="relative bg-[#0b0a0f] py-16 sm:py-20 lg:py-24 text-slate-100 font-sans border-t border-purple-950/60 overflow-hidden"
    >
      {/* Background Soft Purple Glow & Grid Texture */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(126,34,206,0.12),transparent_70%)]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 blur-[130px] rounded-full" 
      />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header (Blueberry Futures Split-Title Architecture) */}
        <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{tagline}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15] mb-4">
            <span>{titlePrefix} </span>
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-amber-200 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4-Step Process Cards Grid (funding-process-works-wrapper) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 relative items-stretch">
          {steps.map((step, idx) => {
            const IconComponent = step.icon || Compass;
            const isHovered = activeStepHover === step.id;
            const isLast = idx === steps.length - 1;

            return (
              <div 
                key={step.id || idx}
                onMouseEnter={() => setActiveStepHover(step.id)}
                onMouseLeave={() => setActiveStepHover(null)}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 overflow-hidden group border ${
                  step.isActive || isHovered
                    ? 'bg-[#181324] border-purple-500/60 shadow-[0_16px_40px_-10px_rgba(147,51,234,0.3)] -translate-y-1'
                    : 'bg-[#120f18]/90 hover:bg-[#161220] border-purple-900/30 hover:border-purple-500/40 shadow-sm'
                }`}
              >
                {/* Background Watermark Step Number */}
                <div 
                  aria-hidden="true" 
                  className="absolute top-2 right-4 text-6xl sm:text-7xl font-black text-purple-500/[0.06] group-hover:text-purple-400/[0.14] transition-colors pointer-events-none select-none"
                >
                  {step.stepNumber}
                </div>

                <div>
                  {/* Top Step Check Indicator (thik-wrapper) */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all ${
                      step.isActive || isHovered
                        ? 'bg-purple-600/30 border-purple-400/60 text-purple-200 shadow-xs'
                        : 'bg-purple-950/60 border-purple-800/40 text-purple-400'
                    }`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${step.isActive || isHovered ? 'text-amber-300' : 'text-purple-400'}`} />
                      <span>{step.badge || `Step ${step.stepNumber}`}</span>
                    </div>

                    <span className="text-xs font-mono font-semibold text-purple-400/60">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all mb-4 border ${
                    step.isActive || isHovered
                      ? 'bg-gradient-to-br from-purple-600 to-[#4c1d95] text-white border-purple-300 shadow-md shadow-purple-900/40 scale-105'
                      : 'bg-purple-950/70 text-purple-300 border-purple-500/30 group-hover:border-purple-400'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-white group-hover:text-purple-200 transition-colors leading-snug mb-2.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13px] text-slate-400 group-hover:text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill & Step Connection */}
                <div className="mt-6 pt-4 border-t border-purple-950/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-800/40">
                    <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                    <span>{step.highlight}</span>
                  </span>

                  {/* Connecting Arrow for Desktop (Between Steps) */}
                  {!isLast && (
                    <div className="hidden xl:flex items-center text-purple-500/40 group-hover:text-purple-300 group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Compact & Attractive Action CTA Button (get-btn-wrap) */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#171223]/90 via-[#130f1d] to-[#171223]/90 border border-purple-900/40 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-950/90 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 hidden sm:flex">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                Ready to Start Your Disciplined Academic Journey?
              </h4>
              <p className="text-xs text-purple-300/80 mt-0.5">
                {ctaSubtext}
              </p>
            </div>
          </div>

          <a 
            href={ctaLink} 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2e1065] via-[#3b0764] to-[#4c1d95] hover:from-[#3b0764] hover:to-[#581c87] shadow-md shadow-purple-950/40 hover:shadow-lg hover:shadow-purple-900/60 border border-purple-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all group shrink-0 decoration-transparent"
          >
            <span>{ctaText}</span>
            <ArrowDownRight className="w-4 h-4 text-purple-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
