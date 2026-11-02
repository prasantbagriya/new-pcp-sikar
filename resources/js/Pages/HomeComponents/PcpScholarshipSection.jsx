import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, ArrowRight, Calculator, FileText, Send } from 'lucide-react';

export default function PcpScholarshipSection() {
    const [targetStream, setTargetStream] = useState('neet');
    const [scoreBracket, setScoreBracket] = useState('95plus');
    const [calculatedScholarship, setCalculatedScholarship] = useState('90% - 100% Fee Waiver');

    const handleCalculate = (bracket, stream) => {
        setScoreBracket(bracket);
        setTargetStream(stream);

        let scholarship = 'Up to 25% Fee Waiver';
        if (bracket === '95plus') {
            scholarship = '90% - 100% Tuition Fee Waiver';
        } else if (bracket === '90to95') {
            scholarship = '60% - 75% Tuition Fee Waiver';
        } else if (bracket === '85to90') {
            scholarship = '40% - 50% Tuition Fee Waiver';
        } else if (bracket === '80to85') {
            scholarship = '25% - 35% Tuition Fee Waiver';
        }
        setCalculatedScholarship(scholarship);
    };

    return (
        <section id="scholarship" className="py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3">
                        <Award className="w-4 h-4 text-purple-700" />
                        <span>P-SAT & Prince Olympiad 2026-27</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
                        Earn Up to <span className="text-[#3b0764]">100% Scholarship</span> in Fees
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed font-normal">
                        Deserving students should never be held back by financial constraints. Unlock substantial fee waivers through the <strong>Prince Olympiad</strong>, <strong>P-SAT Exam</strong>, or your board class marks.
                    </p>
                </div>

                {/* Calculator & Registration Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left: Interactive Scholarship Calculator */}
                    <div className="lg:col-span-7 rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl">
                        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                            <div className="w-10 h-10 rounded-xl bg-[#ffc107] flex items-center justify-center text-black shadow-xs">
                                <Calculator className="w-5 h-5 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-900">Instant Scholarship Estimator</h3>
                                <p className="text-xs text-slate-500">Select your parameters to check your estimated fee waiver bracket.</p>
                            </div>
                        </div>

                        {/* Step 1: Stream */}
                        <div className="mb-5">
                            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                1. Select Target Exam Stream
                            </label>
                            <div className="grid grid-cols-3 gap-2.5">
                                {[
                                    { id: 'neet', label: 'NEET-UG' },
                                    { id: 'jee', label: 'IIT-JEE' },
                                    { id: 'foundation', label: 'Pre-Foundation' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => handleCalculate(scoreBracket, tab.id)}
                                        className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                                            targetStream === tab.id
                                                ? 'bg-[#ffc107] text-black shadow-xs'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 2: Score Bracket */}
                        <div className="mb-6">
                            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                2. Board Class Percentage or P-SAT Predicted Score
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {[
                                    { id: '95plus', label: '>= 95% Marks' },
                                    { id: '90to95', label: '90% - 94.9%' },
                                    { id: '85to90', label: '85% - 89.9%' },
                                    { id: '80to85', label: '80% - 84.9%' }
                                ].map((b) => (
                                    <button
                                        key={b.id}
                                        type="button"
                                        onClick={() => handleCalculate(b.id, targetStream)}
                                        className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                            scoreBracket === b.id
                                                ? 'bg-[#2e1065] text-white shadow-xs'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                                        }`}
                                    >
                                        {b.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 3: Result Output Card */}
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2e1065] to-[#4c1d95] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                            <div>
                                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                                    Estimated Eligibility
                                </span>
                                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                                    {calculatedScholarship}
                                </div>
                                <p className="text-xs text-purple-200 mt-1">
                                    Applicable on tuition fee component for session 2026-27.
                                </p>
                            </div>

                            <a
                                href="#courses"
                                className="btn-brand-yellow px-6 py-3 text-xs font-black uppercase text-black inline-flex items-center gap-1.5 shrink-0 shadow-md"
                            >
                                <span>Claim Waiver</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Prince Olympiad & P-SAT Information Card */}
                    <div className="lg:col-span-5 rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-2">
                                <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                                <span>Exam Pathways</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                How to Qualify for Scholarship
                            </h3>
                        </div>

                        <div className="space-y-4 text-xs sm:text-sm">
                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                                <div className="w-8 h-8 rounded-lg bg-[#ffc107] text-black font-black flex items-center justify-center shrink-0">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-0.5">Prince Olympiad (Pan-India)</h4>
                                    <p className="text-slate-600 text-xs">
                                        Massive annual science & maths talent exam held across multiple states with cash rewards, laptops, and up to 100% scholarships.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                                <div className="w-8 h-8 rounded-lg bg-[#ffc107] text-black font-black flex items-center justify-center shrink-0">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-0.5">P-SAT (PCP Scholarship Test)</h4>
                                    <p className="text-slate-600 text-xs">
                                        Weekly admission cum scholarship test conducted every Sunday both online and offline across all PCP Sikar & Jaipur branches.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                                <div className="w-8 h-8 rounded-lg bg-[#ffc107] text-black font-black flex items-center justify-center shrink-0">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-0.5">Direct Board Marks Waiver</h4>
                                    <p className="text-slate-600 text-xs">
                                        Students scoring 90%+ marks in Class 10th or 12th board exams qualify for direct merit-based concession without test.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href="tel:9610892222"
                                className="w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-purple-200"
                            >
                                <span>Speak with Scholarship Desk (9610-89-2222)</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
