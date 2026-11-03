import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GlobalNavbar from '../../NextComponents/GlobalNavbar';
import BlogFooter from '../../NextComponents/BlogFooter';
import { Mail, MapPin, Phone, Send, MessageSquare, ArrowRight, Clock, CheckCircle2, Building2, Sparkles, ShieldCheck } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        student_name: '',
        phone: '',
        course: 'NEET-UG Medical',
        campus: 'Palwas Road Residential HQ, Sikar',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.student_name.trim() || !formData.phone.trim()) return;

        setIsSubmitting(true);
        try {
            const basePath = typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '';
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
                    course: `${formData.course} (${formData.campus})`,
                    business_name: 'PCP Sikar',
                    source: 'contact_page_form',
                    message: `Preferred Campus: ${formData.campus} | Query: ${formData.message}`
                })
            });
            const data = await resp.json();
            if (data.success) {
                setSubmitted(true);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const campusCards = [
        {
            title: 'Palwas Road Headquarters',
            category: 'Main Residential Campus',
            phone: '9610-89-2222',
            phoneSec: '9610-61-2222',
            email: 'pcpsikar@gmail.com',
            address: 'Palwas Road, Sikar (Raj.) 332001',
            badge: '100+ Acre Campus'
        },
        {
            title: 'Piprali Road Classroom Wing',
            category: 'Classroom & Test Center',
            phone: '9610-53-2222',
            phoneSec: '9610-83-2222',
            email: 'pcppalwasroad@gmail.com',
            address: 'Elenza Heights, Piprali Road, Sikar',
            badge: 'Coaching Hub'
        },
        {
            title: 'Jaipur Gopalpura Center',
            category: 'Metro Target Division',
            phone: '9610-57-2222',
            phoneSec: '9610-83-2222',
            email: 'pcpjaipur1@gmail.com',
            address: 'Balaji Tower, Gopalpura Bypass, Jaipur',
            badge: 'New 2026 Center'
        },
        {
            title: 'Central Admissions Desk',
            category: '24/7 Student Counseling',
            phone: '9610-89-2222',
            phoneSec: '1800-123-2222',
            email: 'info@sikareducationhub.com',
            address: 'Open 8:00 AM to 8:00 PM (All 7 Days)',
            badge: 'Quick Helpline'
        }
    ];

    return (
        <div className="bg-[#faf7fe] dark:bg-[#070d1e] min-h-screen flex flex-col font-sans selection:bg-purple-800 selection:text-white">
            <Head>
                <title>Contact Us &amp; Campus Helpline | PCP Sikar &amp; Sikar Education Hub</title>
                <meta name="description" content="Get in touch with PCP Sikar and Sikar Education Hub. Palwas Road HQ, Piprali Road campus, and Jaipur center helplines, location maps, and admission counselor contact." />
            </Head>
            
            <GlobalNavbar />

            {/* PCP Luxury Hero Header */}
            <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#120326] text-white overflow-hidden">
                {/* Ambient Glows */}
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#5b40cf]/25 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />

                <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
                    
                    {/* Breadcrumbs */}
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-200/80 mb-6 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                        <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-amber-300 font-bold">Contact &amp; Counseling</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>24/7 ADMISSION HELPLINE &amp; CAMPUS VISITS</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-normal leading-snug max-w-4xl mx-auto mb-4">
                        We're Here to Guide Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">Medical &amp; IIT Journey.</span>
                    </h1>

                    <p className="text-purple-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                        Visit our 100+ acre residential campus in Sikar, connect with experienced faculty counselors, or get instant batch and scholarship guidance over phone and WhatsApp.
                    </p>

                    {/* Parallel Action Buttons */}
                    <div className="mt-8 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-md mx-auto">
                        <a 
                            href="tel:+919610892222"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all no-underline text-center"
                        >
                            <Phone className="w-4 h-4 text-slate-950" />
                            <span className="sm:hidden">Call Helpline</span>
                            <span className="hidden sm:inline">Call Helpline: 9610-89-2222</span>
                        </a>

                        <a 
                            href="https://wa.me/919610892222?text=Hello%20PCP%20Sikar,%20I%20want%20to%20know%20more%20about%20admissions."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all no-underline text-center"
                        >
                            <MessageSquare className="w-4 h-4 text-white" />
                            <span className="sm:hidden">WhatsApp</span>
                            <span className="hidden sm:inline">Chat on WhatsApp</span>
                        </a>
                    </div>

                </div>
            </section>

            {/* 4 Campus Helplines Grid (-mt-10 overlap) */}
            <section className="relative z-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 -mt-10 sm:-mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {campusCards.map((camp, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white dark:bg-[#0c1428] rounded-2xl p-5 border border-purple-100/90 dark:border-slate-800 shadow-lg shadow-purple-950/5 hover:border-[#5b40cf] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 text-[#2e0854] text-[10px] font-bold uppercase tracking-wider border border-purple-200">
                                        <Building2 className="w-3 h-3 text-[#5b40cf]" />
                                        <span>{camp.badge}</span>
                                    </span>
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                </div>

                                <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-1">
                                    {camp.title}
                                </h3>
                                <p className="text-xs text-[#5b40cf] font-semibold mb-3">
                                    {camp.category}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-start gap-1.5 leading-relaxed">
                                    <MapPin className="w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" />
                                    <span>{camp.address}</span>
                                </p>
                            </div>

                            <div className="pt-3 border-t border-purple-50 dark:border-slate-800 space-y-1.5 text-xs">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">Helpline:</span>
                                    <a href={`tel:${camp.phone.replace(/-/g, '')}`} className="font-bold text-[#2e0854] dark:text-purple-300 hover:text-[#5b40cf]">
                                        {camp.phone}
                                    </a>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">Email:</span>
                                    <a href={`mailto:${camp.email}`} className="font-medium text-slate-700 dark:text-slate-300 hover:text-[#5b40cf] truncate max-w-[150px]">
                                        {camp.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content: Counseling Form + Campus Visits Guide */}
            <section className="py-16 sm:py-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    
                    {/* Left: Guidance & Trust */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-xs font-bold uppercase tracking-wider mb-3 border border-purple-200">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#5b40cf]" />
                                Direct Admission Desk
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-normal leading-snug">
                                Plan Your Campus Visit or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] to-[#5b40cf]">Request Counseling.</span>
                            </h2>
                            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                Our senior academic counselors provide transparent evaluation of your child's stream selection, dropper batch eligibility, and hostel arrangements.
                            </p>
                        </div>

                        {/* What happens next */}
                        <div className="space-y-3.5">
                            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                                What to expect when you contact us:
                            </h4>
                            {[
                                'Direct consultation with experienced NEET/JEE subject mentors.',
                                'Complete syllabus roadmap & fee structure explanation.',
                                'Hostel accommodation & steam mess walk-through booking.',
                                'Prince Olympiad & P-SAT scholarship evaluation (up to 100% waiver).',
                                'Zero pressure, honest academic counseling based on aptitude.'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5b40cf]" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Direct FAQ Prompt Card */}
                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#2e0854] to-[#5b40cf] text-white shadow-xl shadow-purple-950/10">
                            <h3 className="font-black text-lg mb-1">Have Real Doubts About Hostels?</h3>
                            <p className="text-purple-100 text-xs sm:text-sm mb-4 leading-relaxed font-normal">
                                Read our full parent doubts breakdown covering mobile phone restrictions, 12-hour faculty doubt counters, and weekly dropper batches.
                            </p>
                            <Link 
                                href="/courses/neet-ug#faq" 
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#2e0854] hover:bg-amber-300 font-bold text-xs transition-colors no-underline shadow-sm"
                            >
                                <span>Read Parent FAQs</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                    </div>

                    {/* Right: Direct Inquiry Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-[#0c1428] rounded-3xl p-6 sm:p-10 border border-purple-100 dark:border-slate-800 shadow-xl shadow-purple-950/5">
                            
                            {submitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-200 shadow-sm">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">Inquiry Received!</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                                        Thank you, <strong>{formData.student_name}</strong>. A senior academic counselor from PCP Sikar will call you shortly on <strong>{formData.phone}</strong>.
                                    </p>
                                    <div className="pt-4 flex justify-center gap-3">
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="px-5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#2e0854] font-bold text-xs border border-purple-200 transition-colors"
                                        >
                                            Submit Another Query
                                        </button>
                                        <a
                                            href="https://wa.me/919610892222"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors no-underline flex items-center gap-1.5"
                                        >
                                            <MessageSquare className="w-3.5 h-3.5" />
                                            <span>Chat on WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <span className="text-xs font-bold text-[#5b40cf] uppercase tracking-wider block mb-1">
                                            Direct Student Form
                                        </span>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-normal">
                                            Send Us An Inquiry
                                        </h3>
                                        <p className="text-xs text-slate-500 mt-1">
                                            Fill your details below. We typically respond within 15 to 30 minutes.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                                                Student Full Name *
                                            </label>
                                            <input 
                                                type="text" 
                                                required
                                                value={formData.student_name}
                                                onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
                                                placeholder="e.g. Aman Sharma"
                                                className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                                                WhatsApp Mobile Number *
                                            </label>
                                            <input 
                                                type="tel" 
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="10-digit mobile number"
                                                className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                                                Course of Interest
                                            </label>
                                            <select
                                                value={formData.course}
                                                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
                                            >
                                                <option value="NEET-UG Medical">NEET-UG Medical (11th, 12th &amp; Target)</option>
                                                <option value="IIT-JEE Engineering">IIT-JEE Engineering (Main + Advanced)</option>
                                                <option value="Pre-Foundation">Pre-Foundation (Class 5th - 10th)</option>
                                                <option value="NDA Defence Academy">NDA &amp; Defence Academy (Prince)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                                                Preferred Campus
                                            </label>
                                            <select
                                                value={formData.campus}
                                                onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
                                            >
                                                <option value="Palwas Road Residential HQ, Sikar">Palwas Road Residential HQ, Sikar</option>
                                                <option value="Piprali Road Campus, Sikar">Piprali Road Campus, Sikar</option>
                                                <option value="Jaipur Gopalpura Bypass Center">Jaipur Gopalpura Bypass Center</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                                            Your Question or Hostel Requirements (Optional)
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Ask about batch timings, hostel accommodation, dropper batches, or fee concessions..."
                                            className="w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 px-6 rounded-xl font-black text-sm bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#492ea3] text-white shadow-lg shadow-purple-950/20 hover:shadow-purple-950/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                <span>Submitting Details...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Submit Counseling Inquiry</span>
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    <div className="text-center pt-1">
                                        <span className="text-[11px] text-slate-500 font-medium">
                                            🔒 Your contact information is 100% private. PCP Sikar never shares student phone numbers.
                                        </span>
                                    </div>

                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </section>

            <BlogFooter />
        </div>
    );
}
