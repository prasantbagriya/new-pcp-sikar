// @ts-nocheck
import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import GlobalNavbar from '../../NextComponents/GlobalNavbar';
import BlogFooter from '../../NextComponents/BlogFooter';
import { 
    Sparkles, ShieldCheck, Trophy, Target, Users, BookOpen, 
    Building2, MapPin, Phone, GraduationCap, ChevronRight, 
    Check, ArrowRight, Clock, Award, CheckCircle2,
    MessageSquare, Star, Stethoscope, Atom, Compass, Layers, 
    FileText, Download, Calendar, ArrowUpRight, Bed, Utensils,
    ChevronDown, Printer, X, Send, HelpCircle, Image as ImageIcon
} from 'lucide-react';

export default function CourseShow({ course, allCourses = [], meta }) {
    const basePath = typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '';
    
    // Interactive State
    const [openFaqIndex, setOpenFaqIndex] = useState(0);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
    const [selectedBatchForApply, setSelectedBatchForApply] = useState('');

    // Lead Capture Form State
    const [formData, setFormData] = useState({
        student_name: '',
        phone: '',
        course: course?.shortTitle || course?.title || '',
        batch: course?.batches?.[0]?.name || '',
        medium: 'English Medium',
        preference: 'Residential Hostel',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    if (!course) return null;

    const otherCourses = allCourses.filter(c => c.slug !== course.slug);

    // Form Submission
    const handleApplySubmit = async (e) => {
        e.preventDefault();
        if (!formData.student_name.trim() || !formData.phone.trim()) return;

        setIsSubmitting(true);
        try {
            const resp = await fetch(`${basePath}/api/inquiries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify({
                    student_name: formData.student_name,
                    phone: formData.phone,
                    course: `${course.shortTitle || course.title} (${formData.batch || 'General'} - ${formData.medium})`,
                    business_name: 'PCP Sikar',
                    source: 'course_page_direct',
                    message: `Hostel: ${formData.preference} | Medium: ${formData.medium} | Note: ${formData.message}`
                })
            });
            const data = await resp.json();
            if (data.success) {
                setSubmitSuccess(true);
            }
        } catch (err) {
            console.error('Inquiry error:', err);
            setSubmitSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Course FAQs (Parents ke Real Doubts)
    const faqs = [
        {
            q: 'Kya hostel aur coaching campus me mobile phone allowed hai?',
            a: 'Nahi, PCP Sikar campus aur hostels me strictly Zero-Mobile Phone Policy follow hoti hai. Mobile distractions se bachne ke liye students ko personal smartphone rakhne ki anumati nahi hai. Parents se regular baat karne ke liye designated landline/calling slots hote hain, aur emergency me hostel warden 24/7 parents ke contact me rehte hain.'
        },
        {
            q: '12-Hour Doubt Counter me sham ko bhi permanent faculties available rehte hain?',
            a: 'Haan, bilkul. PCP North India ka ekmatra residential coaching institute hai jahan subah 8:00 AM se raat 8:00 PM tak continuous 12 ghante doubt counters open rehte hain. PCP ke 100% faculties permanent resident hain jo Sikar me hi rehte hain, isliye evening sessions me bhi senior subject HODs aur expert mentors personal 1-on-1 doubts solve karte hain.'
        },
        {
            q: 'Droppers / Repeaters ke liye fresh batch kab-kab shuru hote hain?',
            a: 'NEET aur JEE droppers ke liye fresh target batches har Monday shuru hote hain. Isse jo students mid-season aate hain unka syllabus zero backlog ke saath cover hota hai aur special bridge classes se unke weak chapters strengthen kiye jaate hain.'
        },
        {
            q: 'Mess ka khana aur hygiene standard kaisa hai?',
            a: 'Palwas Road HQ aur city campuses par fully mechanized modern steam kitchens hain jahan pure vegetarian aur high-nutrition 4-time meals (morning sprouts/milk, warm lunch, evening refreshment, and wholesome dinner) serve kiye jaate hain. Food quality aur hygiene regular administration aur doctor team dwara inspect hoti hai.'
        },
        {
            q: 'P-SAT aur Board scholarship ka benefit kaise milta hai?',
            a: 'Student ya toh Sunday ko P-SAT (Prince Scholarship cum Admission Test) online/offline appear kar sakta hai ya apne Class 10th/12th Board marks (90%+ par direct concession) submit kar sakta hai. Isme tuition aur hostel fee me 10% se 100% tak concession milta hai.'
        },
        {
            q: 'Super-50 aur Special Rankers Batch me selection ka criteria kya hai?',
            a: 'Super-50 Batch me admission internal screening test aur high performance ke base par hota hai. In students ko dedicated library desks, 1-on-1 IITian/Doctor mentor aur daily advanced multi-concept question banks provide kiye jaate hain.'
        }
    ];

    // Infrastructure Showcase Data
    const infrastructure = [
        {
            title: '100+ Acre Palwas Road Residential HQ',
            category: 'Main Campus',
            image: `${basePath}/uploads/pcp_campus_building.png`,
            desc: 'North India’s largest self-contained coaching ecosystem with modern academic blocks, digital libraries, and peaceful distraction-free greenery.'
        },
        {
            title: 'Smart Classrooms & 12-Hour Doubt Counters',
            category: 'Academic Facilities',
            image: `${basePath}/uploads/aboutus.webp`,
            desc: 'Interactive digital smart boards, air-conditioned lecture halls, and dedicated one-on-one faculty doubt resolution counters.'
        },
        {
            title: 'Olympic-Standard Sports & Physical Complex',
            category: 'Sports & Fitness',
            image: `${basePath}/uploads/2024/06/sports-facilities-in-sikar-coaching-institutes.png`,
            desc: '400m synthetic running track, international basketball courts, Olympic swimming pool, horse riding arena, and physical conditioning grounds.'
        },
        {
            title: 'Disciplined Air-Cooled & AC Residential Hostels',
            category: 'Hostel Living',
            image: `${basePath}/uploads/pcp_banner.png`,
            desc: 'Separate multi-acre boy’s and girl’s hostels with 24/7 biometric monitoring, resident wardens, and zero mobile phone distraction policy.'
        },
        {
            title: 'Automated Mechanized Steam Mess Dining',
            category: 'Nutritious Mess',
            image: `${basePath}/uploads/aboutus.webp`,
            desc: 'Wholesome pure-vegetarian 4-time meal plan cooked in automated steam kettles under daily nutritional and doctor team supervision.'
        },
        {
            title: 'Prince Defence Academy & GTO Ground',
            category: 'Officer Ground',
            image: `${basePath}/uploads/2024/06/prince-defence-academy-review-2026.png`,
            desc: 'Permanent 15-obstacle GTO training ground, firing range simulator, and SSB interview screening lab under retired Defence officers.'
        }
    ];

    return (
        <div className="bg-[#faf7fe] dark:bg-[#070b14] min-h-screen text-slate-900 dark:text-white font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854] flex flex-col transition-colors duration-300 pb-16 sm:pb-0">
            <Head>
                <title>{meta?.title || `${course.title} | PCP Sikar & Prince Eduhub`}</title>
                <meta name="description" content={meta?.description || course.description} />
            </Head>

            <GlobalNavbar />

            <main className="flex-grow">
                {/* ========================================================================= */}
                {/* 1. HERO SECTION: Brand Russian Violet & Custom Gradient Canvas           */}
                {/* ========================================================================= */}
                <section className={`relative w-full py-20 md:py-26 overflow-hidden bg-gradient-to-br ${course.heroColor || 'from-[#2e0854] via-[#1a0533] to-[#120120]'} text-white`}>
                    {/* Atmospheric Lighting */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#5b40cf]/30 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                        {/* Breadcrumbs */}
                        <nav className="inline-flex items-center gap-2 text-xs text-purple-200/80 mb-6 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                            <Link href={`${basePath}/`} className="hover:text-amber-300 transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3 text-purple-300" />
                            <Link href={`${basePath}/courses`} className="hover:text-amber-300 transition-colors">Academic Programs</Link>
                            <ChevronRight className="w-3 h-3 text-purple-300" />
                            <span className="text-white font-bold">{course.shortTitle || course.title}</span>
                        </nav>

                        {/* Top Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-black uppercase tracking-wider border border-white/20 backdrop-blur-md">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                <span>{course.badge}</span>
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-purple-200 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-400/30">
                                <span>Classes:</span>
                                <strong className="text-white">{course.classes}</strong>
                            </span>
                        </div>

                        {/* Main Title & Tagline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-snug sm:leading-tight mb-4 max-w-4xl">
                            {course.title}
                        </h1>

                        <p className="text-lg sm:text-xl font-bold text-amber-300/95 mb-6">
                            {course.tagline}
                        </p>

                        <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-3xl font-normal mb-10">
                            {course.description}
                        </p>

                        {/* Hero CTAs: Parallel on Mobile and Desktop */}
                        <div className="flex flex-row flex-wrap items-center gap-2.5 sm:gap-3.5 w-full">
                            <button
                                onClick={() => {
                                    setSelectedBatchForApply(course.batches[0]?.name || '');
                                    setFormData(prev => ({ ...prev, batch: course.batches[0]?.name || '' }));
                                    setIsApplyModalOpen(true);
                                }}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-extrabold text-xs sm:text-sm px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-amber-950/20 transition-all hover:scale-102 active:scale-98 text-center cursor-pointer"
                            >
                                <CheckCircle2 className="w-4 h-4 text-[#2e0854] shrink-0" />
                                <span className="sm:hidden">Apply Online</span>
                                <span className="hidden sm:inline">Apply For Admission 2026-27</span>
                            </button>

                            <button
                                onClick={() => setIsPdfModalOpen(true)}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all text-center cursor-pointer"
                            >
                                <Download className="w-4 h-4 text-amber-300 shrink-0" />
                                <span className="sm:hidden">Syllabus PDF</span>
                                <span className="hidden sm:inline">Download Syllabus (PDF)</span>
                            </button>

                            <a 
                                href="tel:+919610892222"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-purple-200 hover:text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-white/15 transition-all no-underline text-center"
                            >
                                <Phone className="w-4 h-4 text-purple-300" />
                                <span>Helpline: 9610-89-2222</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 2. STATS RIBBON                                                          */}
                {/* ========================================================================= */}
                <section className="relative -mt-8 z-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5">
                        {course.stats.map((s, idx) => (
                            <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-900/50 border border-purple-100/60 dark:border-slate-800 text-center flex flex-col justify-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#2e0854] dark:text-purple-300 tracking-tight">
                                    {s.value}
                                </div>
                                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
                                    {s.label}
                                </div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                    {s.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 3. BATCHES SCHEDULE & ENROLLMENT PLANS                                    */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-24 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2">
                            Session 2026-27 Enrollment
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-tight">
                            Available Batches &amp; Timelines
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3">
                            Separate English and Hindi medium batches with synchronized classroom teaching and 12-hour continuous faculty doubt assistance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {course.batches.map((b, idx) => (
                            <div 
                                key={idx}
                                className="flex flex-col justify-between rounded-3xl bg-white dark:bg-[#0c1c38] border-2 border-purple-100 dark:border-slate-800 hover:border-[#5b40cf] shadow-lg shadow-purple-950/5 transition-all duration-300 p-6 sm:p-7 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/40 dark:bg-purple-950/20 rounded-bl-full pointer-events-none"></div>

                                <div>
                                    <div className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-[#5b40cf] border border-purple-100 mb-3">
                                        <Calendar className="w-3 h-3" />
                                        <span>{b.startDate}</span>
                                    </div>

                                    <h3 className="text-xl font-black text-[#2e0854] dark:text-white mb-1.5 leading-snug">
                                        {b.name}
                                    </h3>

                                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-4">
                                        <span>Target: {b.target}</span>
                                        <span>•</span>
                                        <span>{b.duration}</span>
                                    </div>

                                    <div className="p-2.5 rounded-xl bg-purple-50/60 dark:bg-slate-900 border border-purple-100/60 text-xs font-bold text-slate-700 dark:text-slate-300 mb-5">
                                        Medium: {b.medium}
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {b.highlights.map((h, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-purple-50 dark:border-slate-800">
                                    <button
                                        onClick={() => {
                                            setSelectedBatchForApply(b.name);
                                            setFormData(prev => ({ ...prev, batch: b.name }));
                                            setIsApplyModalOpen(true);
                                        }}
                                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#2e0854] hover:bg-[#5b40cf] text-white font-bold text-xs transition-colors shadow-sm"
                                    >
                                        <span>Apply For This Batch</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 4. SUBJECT-WISE CURRICULUM DEEP DIVE                                     */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-20 bg-white dark:bg-[#070e1b] border-y border-purple-100/90 dark:border-slate-800">
                    <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <span className="text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2">
                                Academic Pedagogy
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-tight">
                                Subject-Wise Curriculum Architecture
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3">
                                Built to eliminate conceptual confusion and cultivate lightning-fast numerical problem-solving.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {course.curriculum.map((cSub, idx) => (
                                <div 
                                    key={idx}
                                    className="p-6 sm:p-8 rounded-3xl bg-[#faf7fe] dark:bg-slate-900 border border-purple-100/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-purple-100 dark:border-slate-800 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-black text-[#2e0854] dark:text-white">
                                                {cSub.subject}
                                            </h3>
                                            <span className="text-xs font-semibold text-[#5b40cf] dark:text-purple-300">
                                                Faculty Lead: {cSub.faculty}
                                            </span>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-purple-200 text-[#2e0854] dark:text-purple-300 self-start sm:self-center">
                                            <Layers className="w-3.5 h-3.5 text-[#5b40cf]" />
                                            <span>Comprehensive Syllabus</span>
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                                        <strong className="text-slate-900 dark:text-white">Topics Covered:</strong> {cSub.coverage}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {cSub.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                                <div className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-2.5 h-2.5 text-[#5b40cf] dark:text-purple-300" />
                                                </div>
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 5. ZERO-LEAKAGE DAILY ROUTINE TIMELINE                                    */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-24 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-5 space-y-4">
                            <span className="text-xs font-black uppercase tracking-wider text-[#5b40cf] block">
                                Sikar Pedagogy Rhythm
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-tight leading-tight">
                                Zero-Leakage Daily Routine (6:00 AM to 10:30 PM)
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                The secret behind PCP’s All-India Top Ranks is an unbroken daily schedule. Lectures, supervised self-study, and 12-hour faculty doubt clearance happen in seamless sequence without study lag.
                            </p>
                            
                            <div className="p-4 rounded-2xl bg-purple-100/70 dark:bg-slate-900 border-l-4 border-[#2e0854] text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                                "When every hour has a clear academic purpose, stress vanishes and consistency takes over."
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100 dark:border-slate-800 shadow-xl p-6 sm:p-8 space-y-4">
                                {course.dailyRoutine.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 pb-3 border-b border-purple-50 dark:border-slate-800 last:border-b-0 last:pb-0">
                                        <div className="w-36 shrink-0 text-xs font-black text-[#5b40cf] dark:text-purple-300 font-mono">
                                            {item.time}
                                        </div>
                                        <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            {item.activity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 6. HOSTEL & RESIDENTIAL LIFE + SCHOLARSHIP CARD                           */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-20 bg-white dark:bg-[#070e1b] border-y border-purple-100/90 dark:border-slate-800">
                    <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            
                            {/* Residential Hostels Card */}
                            <div className="p-6 sm:p-8 rounded-3xl bg-[#faf7fe] dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-xs font-black uppercase tracking-wider mb-4 border border-purple-200">
                                        <Bed className="w-3.5 h-3.5 text-[#5b40cf]" />
                                        <span>Residential Campus</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-[#2e0854] dark:text-white mb-2">
                                        {course.hostelInfo.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                        {course.hostelInfo.desc}
                                    </p>
                                    <div className="space-y-2.5 mb-6">
                                        {course.hostelInfo.features.map((hf, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{hf}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-purple-100 text-xs font-bold text-slate-700 dark:text-slate-300 text-center">
                                    Separate Boy's &amp; Girl's AC Hostels with 24/7 Wardens
                                </div>
                            </div>

                            {/* Scholarship Concessions Card */}
                            <div className="p-6 sm:p-8 rounded-3xl bg-[#faf7fe] dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 border border-amber-200">
                                        <Award className="w-3.5 h-3.5 text-amber-600" />
                                        <span>Scholarship Opportunities</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-[#2e0854] dark:text-white mb-2">
                                        P-SAT &amp; Board Merit Concessions
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                        Financial constraints will never hold back genuine merit. Aspirants can secure up to 100% complete coaching &amp; hostel fee waivers.
                                    </p>
                                    <div className="space-y-3 mb-6 text-xs sm:text-sm">
                                        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-purple-100">
                                            <strong className="text-[#2e0854] dark:text-purple-300 block mb-0.5">National Talent Exam:</strong>
                                            <span className="text-slate-600 dark:text-slate-300">{course.scholarshipInfo.test}</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-purple-100">
                                            <strong className="text-[#2e0854] dark:text-purple-300 block mb-0.5">Total Scholarship Pool:</strong>
                                            <span className="text-slate-600 dark:text-slate-300">{course.scholarshipInfo.fund}</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-purple-100">
                                            <strong className="text-[#2e0854] dark:text-purple-300 block mb-0.5">Direct Board Concessions:</strong>
                                            <span className="text-slate-600 dark:text-slate-300">{course.scholarshipInfo.boardCriteria}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        setSelectedBatchForApply('Scholarship P-SAT Seat');
                                        setFormData(prev => ({ ...prev, batch: 'P-SAT Scholarship Evaluation' }));
                                        setIsApplyModalOpen(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#2e0854] font-extrabold text-xs transition-colors shadow-sm text-center"
                                >
                                    <span>Check Scholarship Eligibility For Your Score</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 7. CAMPUS & HOSTEL INFRASTRUCTURE PHOTO SHOWCASE                          */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-24 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-xs font-bold uppercase tracking-wider mb-3 border border-purple-200">
                            <Building2 className="w-3.5 h-3.5 text-[#5b40cf]" />
                            <span>Verified Campus Facilities</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2e0854] dark:text-white tracking-tight">
                            World-Class Learning &amp; Boarding Environment
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3">
                            Take a virtual tour of Rajasthan’s premier residential coaching campus before visiting in person.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infrastructure.map((infra, idx) => (
                            <div 
                                key={idx}
                                className="group rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                            >
                                <div>
                                    <div className="relative h-48 w-full overflow-hidden bg-purple-50">
                                        <img 
                                            src={infra.image} 
                                            alt={infra.title}
                                            width="600"
                                            height="400"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.currentTarget.src = basePath + '/uploads/aboutus.webp';
                                            }}
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2.5 py-1 rounded-lg bg-black/60 text-white backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                                                {infra.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                                            {infra.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                                            {infra.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-5 pb-5 pt-0">
                                    <div className="text-[11px] font-semibold text-[#5b40cf] dark:text-purple-300 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                        <span>Active Student Facility</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 8. STAR ACHIEVERS FROM THIS PROGRAM                                       */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-20 bg-white dark:bg-[#070e1b] border-y border-purple-100/90 dark:border-slate-800">
                    <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2">
                                Hall of Fame
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-tight">
                                Star Achievers Produced by this Pedagogy
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {course.toppers.map((top, idx) => (
                                <div 
                                    key={idx}
                                    className="p-6 rounded-3xl bg-[#faf7fe] dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center font-black text-[#2e0854] dark:text-purple-300 text-xl border border-purple-200 mb-4 shadow-inner">
                                        <Trophy className="w-7 h-7 text-amber-500" />
                                    </div>
                                    <div className="text-xl font-black text-[#2e0854] dark:text-white mb-1">
                                        {top.name}
                                    </div>
                                    <div className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                                        {top.rank}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                                        {top.college}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 9. COURSE-SPECIFIC FAQ ACCORDION (PARENTS KE REAL DOUBTS)                 */}
                {/* ========================================================================= */}
                <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-xs font-bold uppercase tracking-wider mb-3 border border-purple-200">
                            <HelpCircle className="w-3.5 h-3.5 text-[#5b40cf]" />
                            <span>Frequently Asked Questions</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-tight">
                            Answers to Real Parents' &amp; Droppers' Questions
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mt-3">
                            Direct answers regarding mobile phone policy, 12-hour doubt counters, mess hygiene, and batch admissions.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div 
                                    key={idx}
                                    className="rounded-2xl bg-white dark:bg-[#0c1c38] border border-purple-100/90 dark:border-slate-800 overflow-hidden shadow-xs transition-all"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-[#5b40cf] transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#5b40cf] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-purple-50 dark:border-slate-800/60 font-normal">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 10. EXPLORE OTHER PROGRAMS                                                */}
                {/* ========================================================================= */}
                {otherCourses.length > 0 && (
                    <section className="py-14 bg-white dark:bg-[#070e1b] border-t border-purple-100/90 dark:border-slate-800">
                        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <span className="text-xs font-black uppercase tracking-wider text-[#5b40cf] block">
                                        More Pathways
                                    </span>
                                    <h3 className="text-2xl font-black text-[#2e0854] dark:text-white tracking-tight">
                                        Explore Other Academic Programs
                                    </h3>
                                </div>
                                <Link 
                                    href={`${basePath}/courses`}
                                    className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#5b40cf] hover:underline"
                                >
                                    <span>All Programs</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {otherCourses.slice(0, 3).map((oc) => (
                                    <Link 
                                        key={oc.id}
                                        href={`${basePath}/courses/${oc.slug}`}
                                        className="p-5 rounded-2xl bg-[#faf7fe] dark:bg-slate-900 border border-purple-100 hover:border-[#5b40cf] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group no-underline"
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 block mb-1">
                                                {oc.stream}
                                            </span>
                                            <h4 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#5b40cf] transition-colors mb-1">
                                                {oc.shortTitle}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                                                {oc.tagline}
                                            </p>
                                        </div>
                                        <div className="pt-3 border-t border-purple-100/60 mt-4 flex items-center justify-between text-xs font-bold text-[#5b40cf]">
                                            <span>Explore Program</span>
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ========================================================================= */}
                {/* 11. ADMISSIONS FINAL CTA BANNER                                           */}
                {/* ========================================================================= */}
                <section className="py-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="p-7 sm:p-10 bg-gradient-to-br from-purple-50/90 via-indigo-50/50 to-amber-50/40 dark:from-[#150e26] dark:via-[#1a1233] dark:to-[#0f172a] rounded-3xl border border-purple-200/80 dark:border-purple-800/50 shadow-lg shadow-purple-950/5 relative overflow-hidden">
                        <div className="absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-br from-purple-300/25 to-pink-300/20 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-950/60 text-[#2e0854] dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-purple-200/80 shadow-2xs">
                                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                                <span>Admissions Session 2026-27 Open</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5"></span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-black text-[#2e0854] dark:text-white mb-3 tracking-tight leading-snug">
                                Ready to Enroll in {course.shortTitle || course.title}?
                            </h2>

                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                                Connect with senior counselors at PCP Sikar for batch allocation, hostel tours, and immediate scholarship evaluation.
                            </p>

                            <div className="flex flex-row items-center gap-2 sm:gap-3.5 w-full">
                                <button 
                                    onClick={() => {
                                        setSelectedBatchForApply(course.batches[0]?.name || '');
                                        setFormData(prev => ({ ...prev, batch: course.batches[0]?.name || '' }));
                                        setIsApplyModalOpen(true);
                                    }}
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#2e0854] hover:bg-[#451378] text-white font-bold py-2.5 sm:py-3 px-3 sm:px-6 rounded-lg shadow-md transition-all text-xs sm:text-sm whitespace-nowrap text-center"
                                >
                                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc107]" />
                                    <span>Apply For Admission Desk</span>
                                </button>
                                <a 
                                    href={`https://api.whatsapp.com/send?phone=919610892222&text=${encodeURIComponent(`Hello PCP Counselor, I want admission assistance for ${course.title}.`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 sm:py-3 px-3 sm:px-6 rounded-lg shadow-md transition-all text-xs sm:text-sm whitespace-nowrap no-underline text-center"
                                >
                                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-[#25D366]" />
                                    <span>WhatsApp Desk</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ========================================================================= */}
            {/* 12. MOBILE STICKY CONVERSION BAR (Visible only on smartphones)            */}
            {/* ========================================================================= */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 dark:bg-[#0c1428]/95 backdrop-blur-md border-t border-purple-200 dark:border-slate-800 shadow-[0_-4px_25px_rgba(46,8,84,0.18)] flex items-center gap-2">
                <a
                    href="tel:+919610892222"
                    className="flex-1 py-2.5 px-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-[#2e0854] font-black text-xs flex items-center justify-center gap-1 border border-purple-200 transition-colors no-underline whitespace-nowrap"
                >
                    <Phone className="w-3.5 h-3.5 text-[#5b40cf]" />
                    <span>Call Helpline</span>
                </a>
                <a
                    href={`https://api.whatsapp.com/send?phone=919610892222&text=${encodeURIComponent(`Hello PCP Sikar Counselor, I want details about ${course.shortTitle || course.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs flex items-center justify-center gap-1 shadow-md transition-colors no-underline whitespace-nowrap"
                >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                    <span>WhatsApp</span>
                </a>
                <button
                    onClick={() => {
                        setSelectedBatchForApply(course.batches[0]?.name || '');
                        setFormData(prev => ({ ...prev, batch: course.batches[0]?.name || '' }));
                        setIsApplyModalOpen(true);
                    }}
                    className="flex-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-black text-xs flex items-center justify-center gap-1 shadow-md transition-all active:scale-98 whitespace-nowrap"
                >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2e0854]" />
                    <span>Apply Now</span>
                </button>
            </div>

            {/* ========================================================================= */}
            {/* 13. ADMISSION INQUIRY MODAL (Lead Form)                                   */}
            {/* ========================================================================= */}
            {isApplyModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsApplyModalOpen(false)}
                >
                    <div 
                        className="bg-white dark:bg-[#0c1c38] rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-purple-200 dark:border-slate-800 p-6 sm:p-8 relative animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setIsApplyModalOpen(false)}
                            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {submitSuccess ? (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                                    Application Submitted!
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                                    Thank you, <strong>{formData.student_name}</strong>. Senior PCP counselor will call you at <strong>{formData.phone}</strong> shortly.
                                </p>
                                <div className="flex flex-col gap-2.5">
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=919610892222&text=${encodeURIComponent(`Hello PCP Sikar, I just submitted an admission inquiry for ${formData.student_name} (${formData.course} - ${formData.batch}). Please assist me with fee and hostel details.`)}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="py-3 px-5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md no-underline"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        <span>Continue to WhatsApp Counselor</span>
                                    </a>
                                    <button
                                        onClick={() => {
                                            setSubmitSuccess(false);
                                            setIsApplyModalOpen(false);
                                        }}
                                        className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs"
                                    >
                                        Done / Close
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-purple-100 text-[#2e0854] border border-purple-200">
                                        Session 2026-27
                                    </span>
                                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span>Admissions Active</span>
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black text-[#2e0854] dark:text-white tracking-tight mb-1">
                                    Apply for Admission
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                                    {course.shortTitle || course.title} • Sikar Headquarters &amp; Jaipur Centers
                                </p>

                                <form onSubmit={handleApplySubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                            Student Full Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.student_name}
                                            onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
                                            placeholder="Enter student's name"
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#5b40cf]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                            Mobile / WhatsApp Number *
                                        </label>
                                        <input 
                                            type="tel" 
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="10-digit mobile number"
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#5b40cf]"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                                Target Batch
                                            </label>
                                            <select 
                                                value={formData.batch}
                                                onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                                                className="w-full px-3 py-2.5 rounded-xl border border-purple-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#5b40cf]"
                                            >
                                                {course.batches.map((b, bIdx) => (
                                                    <option key={bIdx} value={b.name}>{b.name}</option>
                                                ))}
                                                <option value="Scholarship P-SAT Seat">P-SAT Scholarship Seat</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                                Medium
                                            </label>
                                            <select 
                                                value={formData.medium}
                                                onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
                                                className="w-full px-3 py-2.5 rounded-xl border border-purple-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#5b40cf]"
                                            >
                                                <option value="English Medium">English Medium</option>
                                                <option value="Hindi Medium">Hindi Medium</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                            Hostel / Day-Scholar Preference
                                        </label>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            {['Residential Hostel', 'Day Scholar (City)'].map((pref) => (
                                                <label 
                                                    key={pref}
                                                    className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                                                        formData.preference === pref
                                                            ? 'border-[#5b40cf] bg-purple-50/70 text-[#2e0854] font-bold'
                                                            : 'border-slate-200 text-slate-600'
                                                    }`}
                                                >
                                                    <input 
                                                        type="radio" 
                                                        name="preference" 
                                                        checked={formData.preference === pref} 
                                                        onChange={() => setFormData({ ...formData, preference: pref })}
                                                        className="hidden" 
                                                    />
                                                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${formData.preference === pref ? 'border-[#5b40cf] bg-[#5b40cf]' : 'border-slate-300'}`}>
                                                        {formData.preference === pref && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                                                    </span>
                                                    <span>{pref}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                            Previous Class % / Questions (Optional)
                                        </label>
                                        <input 
                                            type="text" 
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="e.g. 10th score 92%, need Palwas hostel"
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#5b40cf]"
                                        />
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 disabled:opacity-50"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>{isSubmitting ? 'Registering...' : 'Submit Admission Inquiry'}</span>
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ========================================================================= */}
            {/* 14. DOWNLOAD SYLLABUS & BATCH PLANNER MODAL (Printable PDF View)           */}
            {/* ========================================================================= */}
            {isPdfModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
                    onClick={() => setIsPdfModalOpen(false)}
                >
                    <div 
                        className="bg-white text-slate-900 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Action Controls (Top Right) */}
                        <div className="absolute top-5 right-5 flex items-center gap-2 print:hidden">
                            <button
                                onClick={() => window.print()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2e0854] text-white text-xs font-bold hover:bg-[#5b40cf] transition-colors shadow-sm"
                            >
                                <Printer className="w-3.5 h-3.5 text-amber-300" />
                                <span>Print / Save PDF</span>
                            </button>
                            <button 
                                onClick={() => setIsPdfModalOpen(false)}
                                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Printable Document Content */}
                        <div className="space-y-6 text-slate-800">
                            {/* Official Institutional Header */}
                            <div className="pb-4 border-b-2 border-purple-900/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-black text-[#2e0854] tracking-tight">
                                        PCP SIKAR • PRINCE CAREER PIONEER
                                    </h2>
                                    <p className="text-xs font-semibold text-purple-700">
                                        Academic Division of Prince Eduhub • Palwas Road HQ, Sikar (Raj.)
                                    </p>
                                </div>
                                <div className="text-left sm:text-right text-xs">
                                    <div className="font-mono font-bold text-[#2e0854]">Helpline: 9610-89-2222</div>
                                    <div className="text-slate-500">Session 2026-27 Prospectus</div>
                                </div>
                            </div>

                            {/* Program Overview */}
                            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                                <h3 className="text-lg font-black text-[#2e0854] mb-1">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-purple-900 font-bold mb-2">
                                    {course.tagline} • Target: {course.classes}
                                </p>
                                <p className="text-xs text-slate-700 leading-relaxed">
                                    {course.description}
                                </p>
                            </div>

                            {/* Batch Schedules Table */}
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-[#2e0854] mb-2.5">
                                    1. Approved Batch Offerings (2026-27)
                                </h4>
                                <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                                    <thead className="bg-[#2e0854] text-white">
                                        <tr>
                                            <th className="p-2.5 font-bold">Batch Name</th>
                                            <th className="p-2.5 font-bold">Target</th>
                                            <th className="p-2.5 font-bold">Duration</th>
                                            <th className="p-2.5 font-bold">Medium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {course.batches.map((b, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50">
                                                <td className="p-2.5 font-bold text-[#2e0854]">{b.name}</td>
                                                <td className="p-2.5">{b.target}</td>
                                                <td className="p-2.5">{b.duration}</td>
                                                <td className="p-2.5">{b.medium}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Daily Routine Summary */}
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-[#2e0854] mb-2.5">
                                    2. Zero-Leakage Daily Routine (6:00 AM - 10:30 PM)
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                    {course.dailyRoutine.map((r, idx) => (
                                        <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
                                            <span className="font-mono font-bold text-[#5b40cf] shrink-0 text-[11px]">{r.time}:</span>
                                            <span className="text-slate-700">{r.activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Curriculum Breakdown */}
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-[#2e0854] mb-2.5">
                                    3. Core Subject Coverage &amp; 12-Hour Doubt Desks
                                </h4>
                                <div className="space-y-2 text-xs">
                                    {course.curriculum.map((cSub, idx) => (
                                        <div key={idx} className="p-2.5 rounded-xl border border-purple-100 bg-white">
                                            <strong className="text-[#2e0854]">{cSub.subject}</strong> ({cSub.faculty}):{' '}
                                            <span className="text-slate-600">{cSub.coverage}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Note */}
                            <div className="pt-4 border-t border-slate-200 text-center text-xs text-slate-500">
                                Official Document • For direct admissions and hostel allotment, call Central Desk: <strong>9610-89-2222</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <BlogFooter />
        </div>
    );
}
