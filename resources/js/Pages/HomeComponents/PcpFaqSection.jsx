// @ts-nocheck
import React, { useState } from 'react';
import { 
    HelpCircle, 
    ChevronDown, 
    MessageSquare, 
    Search, 
    PhoneCall, 
    CheckCircle2, 
    Sparkles, 
    ArrowRight, 
    GraduationCap, 
    ShieldCheck, 
    Building2 
} from 'lucide-react';

export default function PcpFaqSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Questions' },
        { id: 'admissions', label: 'Admissions & Fees' },
        { id: 'academics', label: 'NEET & JEE Academics' },
        { id: 'hostel', label: 'Hostels & Campus' }
    ];

    const faqs = [
        {
            category: 'academics',
            q: "What makes Sikar Rajasthan's premier coaching and education hub?",
            a: "Sikar has emerged as India's leading alternative to overcrowded coaching cities. It offers a distraction-free environment, disciplined residential campuses, 12-hour continuous faculty doubt resolution desks, and proven top national ranks including All India Rank 1 in NEET-UG and AIR 225 in JEE Advanced directly from classroom batches."
        },
        {
            category: 'admissions',
            q: "How to compare and choose the best coaching institute in Sikar?",
            a: "When comparing coaching institutes in Sikar, look for: 1) Verified classroom results (single-institute selections, not distance learning); 2) Permanent, full-time faculty from IITs/NITs; 3) Daily one-on-one faculty doubt desks; 4) Transparent fee structures with merit scholarships; and 5) Disciplined in-house AC residential hostels with round-the-clock mentorship."
        },
        {
            category: 'admissions',
            q: "Does PCP offer scholarships on coaching fees?",
            a: "Yes! Deserving and meritorious students can secure up to 100% scholarship on tuition fees through the annual Prince Olympiad, the P-SAT (PCP Scholarship cum Admission Test), and high marks in Class 10th or 12th Board exams. Over ₹5+ Crores worth of academic scholarships are distributed every academic session."
        },
        {
            category: 'academics',
            q: "What courses and integrated school programs are offered?",
            a: "PCP offers comprehensive classroom programs for: 1) NEET-UG (Classes 11th, 12th & 12th Pass Droppers); 2) IIT-JEE Main + Advanced (Classes 11th, 12th & Repeaters); 3) Pre-Foundation (Classes 7th to 10th for Olympiads, NTSE & STSE); and 4) School-Integrated Programs combining CBSE/RBSE board education with national competitive coaching under one roof."
        },
        {
            category: 'hostel',
            q: "What are the hostel, boarding, and dining facilities for outside students?",
            a: "PCP features dedicated, state-of-the-art residential hostel wings separately for boys and girls within secured gated campuses. Hostels include air-conditioned rooms, 24/7 CCTV surveillance, resident faculty wardens, supervised night study sessions, and pure vegetarian dining halls serving 4 nutritious meals daily."
        },
        {
            category: 'academics',
            q: "How does the 12-Hour Continuous Faculty Doubt Desk system work?",
            a: "Unlike typical institutes where students struggle to find teachers after lectures, PCP operates dedicated continuous doubt resolution counters from 8:00 AM to 8:00 PM. Experienced Kota and Sikar HODs sit one-on-one with students to clarify conceptual doubts, numerical problem-solving, and test desk analyses."
        },
        {
            category: 'academics',
            q: "What is PCP's selection ratio record compared to Kota coachings?",
            a: "PCP holds the highest selection efficiency ratio in North India: 1 out of every 4 students qualifies for JEE Advanced, and 1 out of every 5 students secures a Government MBBS seat in NEET. Over 1,000+ classroom students achieved government medical college selections in 2024-2026 alone."
        },
        {
            category: 'hostel',
            q: "How can parents monitor their child's academic attendance and test progress?",
            a: "Parents receive automated real-time SMS alerts and mobile app updates following every weekly OMR test desk. Detailed performance analytics cover subject-wise percentile, All India Rank predictions, classroom attendance records, and personal teacher feedback."
        },
        {
            category: 'admissions',
            q: "What is the admission procedure and batch commencement schedule for 2026-27?",
            a: "Admissions for Target (12th Pass), Foundation (11th & 12th), and Pre-Foundation batches commence from January 2026. Direct admission is available through academic merit or P-SAT scholarship percentiles. New batches start weekly in April, May, and June."
        },
        {
            category: 'admissions',
            q: "What is the fee installment policy and scholarship criteria?",
            a: "Fees can be deposited in convenient interest-free installments throughout the academic year. Merit concessions are directly mapped to Class 10/12 board percentages and P-SAT scores, with immediate concession certificates provided at the admission desk."
        },
        {
            category: 'hostel',
            q: "Are there separate residential hostel wings and study halls for girls?",
            a: "Yes. PCP provides 100% independent, gated girls' hostel wings managed exclusively by female wardens and security personnel. It includes in-house study libraries, dedicated medical care rooms, biometric attendance, and strict visitor verification."
        },
        {
            category: 'hostel',
            q: "What medical support and recreational facilities are available on campus?",
            a: "The campus houses a 24/7 medical infirmary with visiting doctors and an on-campus ambulance. To keep students mentally sharp and energized, campuses include green sports grounds for cricket, basketball, badminton, and yoga sessions."
        }
    ];

    const filteredFaqs = activeCategory === 'all' 
        ? faqs 
        : faqs.filter(f => f.category === activeCategory);

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    // SEO JSON-LD FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <section 
            id="faq-section" 
            className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 bg-gradient-to-b from-white via-[#faf7fe] to-white text-slate-900 overflow-visible font-sans border-t border-purple-100/90 select-none"
        >
            {/* Inject JSON-LD Structured Data for Google Rich Snippets */}
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
            />

            {/* Ambient Soft Brand Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-10 left-10 w-[600px] h-[500px] bg-purple-200/25 rounded-full blur-[140px]" />
                <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-purple-100/35 rounded-full blur-[130px]" />
            </div>

            <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2-Column Split Layout matching Services Section (Sticky Left Header while Right Cards Scroll) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
                    
                    {/* LEFT COLUMN: Sticky Info & Counselor Card (lg:col-span-5) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-5">
                        
                        {/* Header Intro Block */}
                        <div className="reveal-scroll">
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-xs font-bold border border-[#eed3f8] shadow-2xs mb-3">
                                <MessageSquare className="w-4 h-4 text-[#5b40cf] shrink-0" />
                                <span>Got Questions? • Sikar Admission &amp; Coaching Guide</span>
                            </div>

                            {/* Main Title */}
                            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                                Frequently Asked{' '}
                                <span className="text-[#2e0854] underline decoration-[#5b40cf]/40 decoration-4 underline-offset-4">
                                    Questions
                                </span>
                            </h2>

                            {/* Subtitle */}
                            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                Everything you need to know about coaching admissions, fee structures, residential hostels, faculty mentorship, and competitive preparation in Sikar.
                            </p>
                        </div>

                        {/* Interactive Category Filter Chips */}
                        <div className="reveal-scroll flex flex-wrap gap-2 pt-1">
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory(cat.id);
                                            setOpenIndex(0);
                                        }}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                                            isActive
                                                ? 'bg-[#2e0854] text-white shadow-xs scale-102'
                                                : 'bg-white border border-purple-200/90 text-slate-700 hover:border-[#5b40cf] hover:text-[#5b40cf]'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Sticky Educational Counselor Card */}
                        <div className="reveal-scroll rounded-2xl p-5 sm:p-6 bg-white border border-purple-200/90 shadow-[0_10px_30px_-10px_rgba(46,8,84,0.08)] flex flex-col sm:flex-row items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 text-[#5b40cf] shadow-2xs">
                                <Search className="w-6 h-6 text-[#5b40cf]" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 text-base mb-1">
                                    Still have questions?
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                                    Chat with senior educational counselors for personalized guidance on courses, batch selection, and campus visits.
                                </p>
                                
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <a 
                                        href="/contact" 
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#3b1165] hover:to-[#6947d1] text-white font-bold text-xs shadow-sm hover:shadow-purple-500/25 transition-all hover:scale-102 active:scale-98"
                                    >
                                        <span>Contact Support</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-purple-200" />
                                    </a>

                                    <a
                                        href="tel:9610892222"
                                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#2e0854] font-bold text-xs border border-purple-200/80 transition-colors"
                                    >
                                        <PhoneCall className="w-3.5 h-3.5 text-[#5b40cf]" />
                                        <span>9610-89-2222</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Trust Highlights Pill List */}
                        <div className="reveal-scroll pt-1 flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>100% Transparent Fee &amp; Scholarship Guidelines</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Verified Classroom Student Results (AIR 1 NEET, AIR 225 JEE)</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Interactive Accordion Cards (lg:col-span-7) */}
                    <div className="lg:col-span-7 space-y-2.5">
                        {filteredFaqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div 
                                    key={index}
                                    className="reveal-scroll"
                                    style={{ transitionDelay: `${index * 40}ms` }}
                                >
                                    <div 
                                        className={`group rounded-2xl transition-all duration-300 border ${
                                            isOpen 
                                                ? 'bg-white border-[#5b40cf] ring-2 ring-purple-100/90 shadow-md shadow-purple-500/5' 
                                                : 'bg-white/80 border-purple-100/90 hover:border-purple-300 hover:bg-white shadow-2xs'
                                        }`}
                                    >
                                    <button 
                                        type="button"
                                        className="w-full px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between text-left focus:outline-none focus:ring-0 border-none bg-transparent cursor-pointer"
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className={`font-bold text-sm sm:text-base pr-4 transition-colors duration-200 ${
                                            isOpen 
                                                ? 'text-[#2e0854]' 
                                                : 'text-slate-900 group-hover:text-[#5b40cf]'
                                        }`}>
                                            {faq.q}
                                        </span>
                                        
                                        {/* Rotating Pill Button */}
                                        <div className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            isOpen 
                                                ? 'bg-[#5b40cf] text-white rotate-180 shadow-xs' 
                                                : 'bg-purple-50 text-[#5b40cf] group-hover:bg-purple-100'
                                        }`}>
                                            <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                        </div>
                                    </button>

                                    {/* Collapsible Answer Body */}
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="px-4 pb-3.5 sm:px-5 sm:pb-4 pt-0.5">
                                            <div className="w-full h-px bg-purple-50 mb-2" />
                                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal m-0">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}
