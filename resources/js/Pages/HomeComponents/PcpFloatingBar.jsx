import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles, Send, X, CheckCircle } from 'lucide-react';

export default function PcpFloatingBar({ onOpenModal }) {
    const [showTop, setShowTop] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('NEET-UG');

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone) return;
        setSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setSubmitted(false);
            setName('');
            setPhone('');
        }, 3000);
    };

    return (
        <>
            {/* Floating Action Pills at bottom */}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5">
                
                {/* Back to top button */}
                {showTop && (
                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                )}

                {/* WhatsApp Chat Floating Pill */}
                <a
                    href="https://wa.me/919610892222?text=Hello%20PCP%20Sikar,%20I%20want%20to%20know%20about%20Admissions%20and%20Scholarship%202026-27."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-200 font-bold text-xs hover:scale-105"
                    title="Chat with Senior Counselor on WhatsApp"
                >
                    <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4 fill-white" />
                    <span className="hidden sm:inline">WhatsApp Help</span>
                </a>

                {/* Direct Call Button */}
                <a
                    href="tel:9610892222"
                    className="flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-[#ffc107] hover:bg-[#ffd600] text-black shadow-2xl transition-all duration-200 font-extrabold text-xs hover:scale-105"
                    title="Call PCP Sikar Helpline"
                >
                    <Phone className="w-5 h-5 sm:w-4 sm:h-4 fill-black text-black" />
                    <span className="hidden sm:inline">Call 9610-89-2222</span>
                </a>

                {/* Quick Admission Modal Button */}
                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2e1065] hover:bg-[#3b0764] text-white shadow-2xl transition-all duration-200 font-extrabold text-xs border border-purple-400/40 hover:scale-105 cursor-pointer"
                >
                    <Sparkles className="w-4 h-4 text-[#ffc107]" />
                    <span>Admission 2026-27</span>
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-2xl text-slate-900">
                        
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="mb-4">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#ffc107] text-black text-[10px] font-black uppercase tracking-wider mb-2 inline-block">
                                Quick Callback Request
                            </span>
                            <h3 className="text-xl font-black text-slate-900">
                                Connect with Senior Counselor
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                Enter your details and our team will get in touch immediately.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="py-6 text-center space-y-2">
                                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h4 className="text-base font-bold text-slate-900">Request Received!</h4>
                                <p className="text-xs text-slate-600">
                                    We will contact you shortly on {phone}.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Full name"
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-[#2e1065] focus:ring-1 focus:ring-[#2e1065] transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                        placeholder="10-digit mobile number"
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-[#2e1065] focus:ring-1 focus:ring-[#2e1065] transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Course Looking For
                                    </label>
                                    <select
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-[#2e1065] transition-all"
                                    >
                                        <option value="NEET-UG">NEET-UG (Medical)</option>
                                        <option value="IIT-JEE">IIT-JEE (Engineering)</option>
                                        <option value="Pre-Foundation">Pre-Foundation (7th-10th)</option>
                                        <option value="Dropper">Dropper / Repeater Batch</option>
                                    </select>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="btn-brand-yellow w-full py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                                    >
                                        <Send className="w-3.5 h-3.5" />
                                        <span>Request Immediate Call</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
