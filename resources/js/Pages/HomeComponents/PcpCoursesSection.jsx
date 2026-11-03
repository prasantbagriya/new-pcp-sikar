// @ts-nocheck
import React, { useState } from 'react';
import { 
    GraduationCap, 
    Award, 
    Sparkles, 
    ArrowRight, 
    CheckCircle2, 
    ShieldCheck, 
    Clock, 
    Calendar, 
    Stethoscope, 
    Atom, 
    Trophy, 
    Phone, 
    MessageSquare, 
    X,
    Check,
    Layers,
    ChevronDown,
    Eye
} from 'lucide-react';

export default function PcpCoursesSection() {
    const [activeTab, setActiveTab] = useState('all');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeCardId, setActiveCardId] = useState(null);
    const [selectedCourseModal, setSelectedCourseModal] = useState(null);

    const coursesData = [
        {
            id: 'neet-ug',
            category: 'neet',
            stream: 'MEDICAL DIVISION',
            streamBadgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
            title: 'NEET-UG Medical Division',
            classes: 'Class 11th, 12th & 12th Pass Repeaters',
            tagline: 'AIR 1 NEET Benchmark • 720/720 Pedagogy',
            badge: 'AIR 1 NEET SYSTEM',
            badgeColor: 'bg-emerald-600 text-white',
            circleGradient: 'from-purple-900 via-[#2e0854] to-emerald-600',
            circleBorder: 'border-emerald-400/50',
            circleShadow: 'shadow-emerald-500/25',
            accentIcon: Stethoscope,
            accentColor: 'text-emerald-400',
            avatar: '/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg',
            topperName: 'Devesh Joshi (AIR 1 AIIMS)',
            featured: false,
            idlePill: '⭐ AIR 1 Proven System • 1,000+ MBBS Selections',
            description: 'Intensive medical entrance classroom coaching designed strictly around NCERT line-by-line depth, continuous AIIMS-level test benchmarking, and 12-hour doctor faculty doubt clearance.',
            stats: [
                { label: 'MBBS Selections', val: '1,000+' },
                { label: 'Highest Score', val: '720/720' },
                { label: 'Daily Doubts', val: '12 Hrs' }
            ],
            keyPoints: [
                'Permanent senior doctor & expert medical faculty team',
                'Daily Practice Problem (DPP) sheets with micro-analysis',
                'North India’s only 12-hour non-stop faculty doubt counters',
                'Integrated Schooling + Coaching + AC Residential campus'
            ],
            batchInfo: {
                name: 'Target NEET Batch 2026-27',
                sub: 'Fresh Batches Starting Every Monday',
                cta: 'Explore Syllabus',
                accentColor: 'from-purple-50 via-indigo-50/50 to-purple-50',
                textColor: 'text-slate-900',
                subColor: 'text-purple-700 font-semibold',
                btnColor: 'bg-[#2e0854] hover:bg-[#5b40cf] text-white',
            },
            modalDetails: {
                subjects: ['Physics (Theory + Numericals)', 'Chemistry (Physical, Organic, Inorganic)', 'Biology (NCERT Botany & Zoology)'],
                tests: 'Bi-weekly Minor Tests, Monthly Grand Revision Mocks, Pan-India P-AITS Test Series',
                hostel: 'Separate Air-Cooled & AC Hostels for Boys & Girls with Resident Wardens and Nutritious Dining',
                scholarship: 'Up to 100% Coaching & Hostel Fee Concession via P-SAT National Talent Exam'
            }
        },
        {
            id: 'iit-jee',
            category: 'jee',
            stream: 'ENGINEERING WING',
            streamBadgeColor: 'bg-amber-50 text-amber-900 border-amber-300',
            title: 'IIT-JEE (Main + Advanced)',
            classes: 'Class 11th, 12th & Super-50 Dropper Batch',
            tagline: 'AIR 225 Sikar Coaching Topper • Super-50',
            badge: 'SIKAR COACHING TOPPER',
            badgeColor: 'bg-[#ffc107] text-slate-950 font-black',
            circleGradient: 'from-[#2e0854] via-[#5b40cf] to-[#f59e0b]',
            circleBorder: 'border-amber-300/60',
            circleShadow: 'shadow-amber-500/30',
            accentIcon: Atom,
            accentColor: 'text-amber-300',
            avatar: '/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg',
            topperName: 'Vivek Gupta (AIR 225 IIT-B)',
            featured: true, // Center Elevated Card
            idlePill: '⭐ AIR 225 Sikar Topper • 1:4 JEE Adv Ratio',
            description: 'Premier analytical coaching for IIT aspirants mentored by full-time IITian and NITian faculties. Produced Sikar coaching topper (AIR 225) in JEE Advanced with an unprecedented 1:4 selection ratio.',
            stats: [
                { label: 'JEE Adv Ratio', val: '1 in 4' },
                { label: '99+ Percentilers', val: '102+' },
                { label: 'Sikar Rank 1', val: 'AIR 225' }
            ],
            keyPoints: [
                '100% permanent IITian & NITian core educators pool',
                'Arjuna Advanced & Drona Main dedicated test schedules',
                'High-tech computer lab for real NTA CBT exam simulations',
                'Special Super-50 Rankers Batch with personal mentor'
            ],
            batchInfo: {
                name: 'Super-50 Rankers Batch',
                sub: 'Entrance Merit & Direct Admission Open',
                cta: 'Enroll Now',
                accentColor: 'from-[#2e0854] via-[#3b0764] to-[#5b40cf]',
                textColor: 'text-white',
                subColor: 'text-amber-200 font-medium',
                btnColor: 'bg-[#ffc107] hover:bg-white text-slate-950 font-black',
            },
            modalDetails: {
                subjects: ['Physics (Mechanics to Modern Physics)', 'Chemistry (In-depth Mechanisms)', 'Mathematics (Advanced Calculus & Algebra)'],
                tests: 'NTA CBT Simulation Tests, Weekly Topic Quizzes, Full Syllabus All-India Ranker Mocks',
                hostel: 'Strictly monitored residential facilities with high-speed CBT lab access and library counters',
                scholarship: 'Direct scholarship based on Class 10th Board % or P-SAT National Scholarship Score'
            }
        },
        {
            id: 'pre-foundation',
            category: 'foundation',
            stream: 'PRE-FOUNDATION & OLYMPIAD',
            streamBadgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
            title: 'Classes 5th to 10th Division',
            classes: 'Pre-Foundation, Olympiads & Board Mastery',
            tagline: '₹108+ Cr Scholarships • National Medals',
            badge: 'EARLY EDGE 5TH-10TH',
            badgeColor: 'bg-[#5b40cf] text-white',
            circleGradient: 'from-[#2e0854] via-[#5b40cf] to-cyan-400',
            circleBorder: 'border-cyan-400/50',
            circleShadow: 'shadow-cyan-500/25',
            accentIcon: Trophy,
            accentColor: 'text-cyan-300',
            avatar: null, // Shows Trophy & Shield 3D emblem
            topperName: 'Prince Olympiad Medals',
            featured: false,
            idlePill: '⭐ ₹108+ Cr Scholarships • 500+ Medals',
            description: 'Scientific aptitude grooming that builds conceptual brilliance for competitive exams like IJSO, PRMO, NTSE, and STSE while ensuring 95%+ board performance.',
            stats: [
                { label: 'Scholarship Fund', val: '₹108+ Cr' },
                { label: 'Olympiad Medals', val: '500+' },
                { label: 'School Sync', val: 'CBSE & RBSE' }
            ],
            keyPoints: [
                'Dual synchronization: School Board + Olympiad syllabus',
                'Rigorous mental ability, logic & problem-solving drills',
                'Smart digital concept labs & interactive experiment desks',
                'Holistic growth: Sports, Yoga, personality development'
            ],
            batchInfo: {
                name: 'Junior Olympiad Batch',
                sub: 'Classes 5th to 10th • Day & Boarding',
                cta: 'Explore Batch',
                accentColor: 'from-purple-50 via-indigo-50/50 to-purple-50',
                textColor: 'text-slate-900',
                subColor: 'text-purple-700 font-semibold',
                btnColor: 'bg-[#2e0854] hover:bg-[#5b40cf] text-white',
            },
            modalDetails: {
                subjects: ['Science (Physics, Chemistry, Biology)', 'Mathematics & Advanced Mental Ability', 'Social Science & English Language'],
                tests: 'Weekly Stage-1 & Stage-2 Olympiad Mocks, Term-wise School Board Simulations',
                hostel: 'Special junior residential wings with dedicated wardens, evening supervised study tables and sports',
                scholarship: 'Prince Olympiad & P-SAT Awards with cash prizes and up to 100% fee waivers'
            }
        }
    ];

    const filteredCards = activeTab === 'all' 
        ? coursesData 
        : coursesData.filter(c => c.category === activeTab);

    return (
        <section 
            id="courses" 
            className="py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-[#fdfcff] via-[#f7f4fd] to-white relative overflow-hidden border-b border-purple-100 select-none scroll-mt-20"
        >
            {/* ========================================================================= */}
            {/* MAIN CONTENT CONTAINER (Clean UI without distracting background circles)  */}
            {/* ========================================================================= */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ------------------------------------------------------------- */}
                {/* SECTION HEADER & STREAM SELECTOR                              */}
                {/* ------------------------------------------------------------- */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                    
                    {/* Brand Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[#2e0854] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-purple-700 animate-pulse" />
                        <span>Academic Excellence • Session 2026-27</span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                        Our Flagship{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#7c3aed]">
                            Classroom Programs
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 font-normal max-w-2xl mx-auto leading-relaxed">
                        Engineered with 25 years of academic discipline, North India’s only 12-hour continuous faculty doubt desks, and national AIR 1 benchmarks.
                    </p>

                    {/* Stream Selector Filter Tabs */}
                    <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md">
                        {[
                            { id: 'all', label: 'All 3 Flagship Wings' },
                            { id: 'neet', label: 'NEET-UG Medical' },
                            { id: 'jee', label: 'IIT-JEE Engineering' },
                            { id: 'foundation', label: 'Pre-Foundation 5th-10th' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                                    activeTab === tab.id
                                        ? 'bg-[#2e0854] text-white shadow-md shadow-purple-950/20'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-purple-50/80'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* THE 3 COMPACT & INTERACTIVE REVEAL CARDS (items-start Grid)   */}
                {/* - Default: Chhota / Compact Card                              */}
                {/* - Hover: Upper Circle & Title glide UPWARDS, Detailed Content  */}
                {/*   reveals with smooth height/opacity animation                */}
                {/* - Bottom: Signature Horizontal Oval capsule                   */}
                {/* ------------------------------------------------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start pt-2">
                    {filteredCards.map((card) => {
                        const IconComponent = card.accentIcon;
                        const isFeatured = card.featured;
                        const isExpanded = hoveredCard === card.id || activeCardId === card.id;

                        return (
                            <div
                                key={card.id}
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => setActiveCardId(activeCardId === card.id ? null : card.id)}
                                className={`group relative rounded-[32px] sm:rounded-[36px] bg-white/95 backdrop-blur-xl border transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
                                    isFeatured
                                        ? 'border-purple-300/90 shadow-[0_20px_50px_rgba(91,64,207,0.16)] ring-2 ring-purple-600/25'
                                        : 'border-purple-100/90 hover:border-purple-300 shadow-[0_12px_36px_rgba(46,8,84,0.06)] hover:shadow-[0_24px_50px_rgba(91,64,207,0.14)]'
                                } ${isExpanded ? 'shadow-[0_30px_70px_rgba(91,64,207,0.2)] -translate-y-2' : ''}`}
                            >
                                {/* Top Banner Ribbon for Featured Card (IIT-JEE Center) */}
                                {isFeatured && (
                                    <div className="bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#2e0854] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-inner">
                                        <Sparkles className="w-3.5 h-3.5 text-[#ffc107] animate-pulse" />
                                        <span>Premier Flagship Classroom Wing</span>
                                        <Sparkles className="w-3.5 h-3.5 text-[#ffc107] animate-pulse" />
                                    </div>
                                )}

                                {/* Main Card Body Container */}
                                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                                    
                                    {/* ------------------------------------------------------------- */}
                                    {/* 1. UPPER SECTION: Glides UPWARDS smoothly on Hover           */}
                                    {/* ------------------------------------------------------------- */}
                                    <div className={`transition-transform duration-400 ease-out transform ${
                                        isExpanded ? '-translate-y-2 sm:-translate-y-3' : 'translate-y-0'
                                    }`}>
                                        
                                        {/* Upper Circle with Glowing Orbital Ring */}
                                        <div className="relative mx-auto mb-4 flex flex-col items-center">
                                            
                                            <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr ${card.circleGradient} ${card.circleShadow} shadow-lg relative transition-all duration-500 border ${card.circleBorder} ${
                                                isExpanded ? 'scale-105 rotate-2 shadow-2xl ring-4 ring-purple-300/40' : 'scale-100'
                                            }`}>
                                                
                                                {/* Inner Masked Container */}
                                                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#2e0854] to-[#1a0533] relative flex items-center justify-center shadow-inner">
                                                    
                                                    {card.avatar ? (
                                                        <div className="relative w-full h-full">
                                                            <img 
                                                                src={card.avatar} 
                                                                alt={card.topperName} 
                                                                width="160"
                                                                height="160"
                                                                loading="lazy"
                                                                decoding="async"
                                                                className={`w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 ${
                                                                    isExpanded ? 'scale-110' : 'scale-100'
                                                                }`}
                                                                onError={(e) => {
                                                                    e.currentTarget.style.display = 'none';
                                                                }}
                                                            />
                                                            {/* Micro floating icon badge */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-1">
                                                                <div className="w-6 h-6 rounded-full bg-white/95 shadow-md flex items-center justify-center border border-white/80">
                                                                    <IconComponent className="w-3 h-3 text-[#2e0854]" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center text-center p-2">
                                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-1">
                                                                <IconComponent className={`w-5 h-5 ${card.accentColor}`} />
                                                            </div>
                                                            <span className="text-[8.5px] font-black uppercase tracking-wider text-purple-200">
                                                                OLYMPIAD
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Attached Floating Badge (Anchored under the Circle) */}
                                            <div className="mt-[-12px] z-10">
                                                <span className={`px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider shadow-md border border-white/80 ${card.badgeColor}`}>
                                                    {card.badge}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Course Heading & Target Info */}
                                        <div className="text-center">
                                            
                                            {/* Stream Tag */}
                                            <div className="mb-1.5">
                                                <span className={`inline-block px-2.5 py-0.5 rounded-md text-[9.5px] font-black uppercase tracking-wider border ${card.streamBadgeColor}`}>
                                                    {card.stream}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#2e0854] transition-colors">
                                                {card.title}
                                            </h3>

                                            {/* Target Classes */}
                                            <p className="text-[11.5px] font-bold text-[#5b40cf] mt-0.5">
                                                {card.classes}
                                            </p>

                                            {/* Idle Highlight Pill (Clean & prominent when card is compact) */}
                                            <div className={`transition-all duration-300 overflow-hidden ${
                                                isExpanded ? 'max-h-0 opacity-0 mt-0 pointer-events-none' : 'max-h-12 opacity-100 mt-2.5'
                                            }`}>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50/90 text-purple-900 text-[11px] font-bold border border-purple-200/90 shadow-2xs">
                                                    {card.idlePill}
                                                </span>
                                                <div className="mt-2 text-[10.5px] text-slate-400 font-medium flex items-center justify-center gap-1">
                                                    <span>Hover to reveal curriculum &amp; doubt counters</span>
                                                    <ChevronDown className="w-3 h-3 text-purple-600 animate-bounce" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ------------------------------------------------------------- */}
                                    {/* 2. EXPANDABLE CONTENT DRAWER (Animates in smoothly on Hover)  */}
                                    {/* ------------------------------------------------------------- */}
                                    <div className={`transition-all duration-500 ease-out overflow-hidden ${
                                        isExpanded 
                                            ? 'max-h-[460px] opacity-100 mt-3 pt-3 border-t border-purple-100/70' 
                                            : 'max-h-0 opacity-0 mt-0 pt-0 pointer-events-none'
                                    }`}>
                                        
                                        {/* Short Description */}
                                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3.5 text-center">
                                            {card.description}
                                        </p>

                                        {/* Metric Stats Strip */}
                                        <div className="grid grid-cols-3 gap-2 py-2.5 px-2 rounded-2xl bg-slate-50/90 border border-slate-100 mb-3.5">
                                            {card.stats.map((st, sIdx) => (
                                                <div key={sIdx} className="text-center">
                                                    <span className="block text-xs sm:text-sm font-black text-[#2e0854]">
                                                        {st.val}
                                                    </span>
                                                    <span className="block text-[9.5px] text-slate-500 font-medium truncate">
                                                        {st.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Key Pedagogy Bullet Points with Checkmarks */}
                                        <div className="space-y-1.5 text-left mb-2">
                                            {card.keyPoints.map((pt, pIdx) => (
                                                <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                    <span className="leading-tight">{pt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                {/* ------------------------------------------------------------- */}
                                {/* 3. LOWER HORIZONTAL OVAL (Strictly from User Sketch Design)    */}
                                {/* Shaped as an elongated horizontal capsule/oval at card base   */}
                                {/* ------------------------------------------------------------- */}
                                <div className="px-5 sm:px-6 pb-5 pt-0">
                                    <div 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCourseModal(card);
                                        }}
                                        className={`w-full rounded-full p-2.5 sm:p-3 bg-gradient-to-r ${card.batchInfo.accentColor} border border-purple-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between gap-2.5 cursor-pointer group/oval`}
                                    >
                                        {/* Oval Left: Batch Details & Calendar Indicator */}
                                        <div className="flex items-center gap-2 pl-2 min-w-0">
                                            <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-purple-100">
                                                <Calendar className="w-3 h-3 text-purple-700" />
                                            </div>
                                            <div className="truncate">
                                                <div className={`text-[11.5px] font-black truncate leading-tight ${card.batchInfo.textColor}`}>
                                                    {card.batchInfo.name}
                                                </div>
                                                <div className={`text-[9.5px] truncate ${card.batchInfo.subColor}`}>
                                                    {card.batchInfo.sub}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Oval Right: Interactive Pill Button */}
                                        <div className="shrink-0">
                                            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all shadow-sm ${card.batchInfo.btnColor} group-hover/oval:scale-105`}>
                                                <span>{card.batchInfo.cta}</span>
                                                <ArrowRight className="w-3 h-3 group-hover/oval:translate-x-0.5 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* ------------------------------------------------------------- */}
                {/* PEDESTAL STAGE VALUE BAR (Resting on the giant bottom ellipse) */}
                {/* ------------------------------------------------------------- */}
                <div className="mt-12 sm:mt-16 pt-8 border-t border-purple-200/70">
                    <div className="max-w-4xl mx-auto rounded-3xl bg-white/85 backdrop-blur-md border border-purple-200/80 p-4 sm:p-6 shadow-sm shadow-purple-950/5">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-purple-100">
                            
                            <div className="pt-2 md:pt-0 px-2">
                                <div className="text-xl sm:text-2xl font-black text-[#2e0854]">25+ Years</div>
                                <div className="text-xs text-slate-500 font-medium">Continuous Academic Legacy</div>
                            </div>

                            <div className="pt-2 md:pt-0 px-2">
                                <div className="text-xl sm:text-2xl font-black text-[#5b40cf]">12-Hour Daily</div>
                                <div className="text-xs text-slate-500 font-medium">Non-Stop Doubt Counters</div>
                            </div>

                            <div className="pt-2 md:pt-0 px-2">
                                <div className="text-xl sm:text-2xl font-black text-[#2e0854]">1,000+ MBBS & IIT</div>
                                <div className="text-xs text-slate-500 font-medium">Selections Every Year</div>
                            </div>

                            <div className="pt-2 md:pt-0 px-2">
                                <div className="text-xl sm:text-2xl font-black text-[#ffc107]">₹108+ Crore</div>
                                <div className="text-xs text-slate-500 font-medium">P-SAT Talent Scholarships</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* ========================================================================= */}
            {/* COURSE DETAILS & ADMISSION MODAL (Opens on Clicking Oval / CTA)          */}
            {/* ========================================================================= */}
            {selectedCourseModal && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedCourseModal(null)}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-200 p-6 sm:p-8 relative animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setSelectedCourseModal(null)}
                            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider border ${selectedCourseModal.streamBadgeColor}`}>
                                {selectedCourseModal.stream}
                            </span>
                            <span className="text-xs font-bold text-purple-700">
                                Session 2026-27
                            </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                            {selectedCourseModal.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                            {selectedCourseModal.description}
                        </p>

                        {/* Detailed Syllabus & Facilities Breakdown */}
                        <div className="space-y-4 mb-6">
                            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                                <h4 className="text-xs font-black uppercase tracking-wider text-[#2e0854] mb-2 flex items-center gap-1.5">
                                    <Layers className="w-3.5 h-3.5 text-purple-700" />
                                    <span>Core Curriculum & Subjects</span>
                                </h4>
                                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                                    {selectedCourseModal.modalDetails.subjects.map((s, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                                <h4 className="text-xs font-black uppercase tracking-wider text-amber-950 mb-1 flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                                    <span>Examination & Mock Test Schedule</span>
                                </h4>
                                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                                    {selectedCourseModal.modalDetails.tests}
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                                    <span>Residential Hostels & Scholarships</span>
                                </h4>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                    {selectedCourseModal.modalDetails.hostel} • {selectedCourseModal.modalDetails.scholarship}
                                </p>
                            </div>
                        </div>

                        {/* Direct Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-4 border-t border-slate-100">
                            <a
                                href={`/courses/${selectedCourseModal.id}`}
                                className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-[#2e0854] hover:bg-[#5b40cf] text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md transition-all no-underline text-center"
                            >
                                <span>View Full Course Syllabus & Routine</span>
                                <ArrowRight className="w-4 h-4 text-amber-300" />
                            </a>

                            <a
                                href="tel:9610892222"
                                className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100 text-[#2e0854] text-xs font-black flex items-center justify-center gap-1.5 border border-purple-200 transition-all no-underline"
                            >
                                <Phone className="w-3.5 h-3.5 text-[#5b40cf]" />
                                <span>9610892222</span>
                            </a>

                            <a
                                href="https://wa.me/919610892222?text=Hello%20PCP%20Sikar,%20I%20want%20to%20know%20more%20about%20admissions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md transition-all no-underline"
                            >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}
