import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight, Eye, EyeOff, ShieldCheck, Award, Check } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const basePath = typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '';

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen flex bg-[#f8fafc] dark:bg-[#070d1e] font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854]">
            <Head title="Create an Account | Sikar Education Hub" />

            {/* Left Panel - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-10 relative z-10">
                <div className="max-w-md w-full mx-auto">
                    {/* Brand Logo & Back Link */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <Link href={`${basePath}/`} className="inline-flex items-center gap-3 group decoration-transparent no-underline">
                                <div className="h-11 px-2.5 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-md shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 group-hover:scale-105 transition-all">
                                    <img
                                        src={`${basePath}/uploads/2026/07/Logo_sikareducationhub.png`}
                                        alt="Sikar Education Hub Logo"
                                        className="h-8 w-auto object-contain"
                                    />
                                </div>
                                <div>
                                    <span className="block text-xl font-extrabold text-[#2e0854] dark:text-white tracking-tight leading-none">
                                        Sikar Education Hub
                                    </span>
                                    <span className="block text-[11px] font-bold text-[#5b40cf] uppercase tracking-wider mt-1">
                                        Join the Hub
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href={`${basePath}/`}
                                className="text-xs font-semibold text-slate-500 hover:text-[#2e0854] dark:text-slate-400 dark:hover:text-white transition-colors"
                            >
                                &larr; Back to Home
                            </Link>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2e0854] dark:text-white tracking-tight mb-2">
                            Create Your Account
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                            Join Sikar's largest education community to bookmark guides and stay updated.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={submit}>
                        <div>
                            <label className="block text-sm font-bold text-[#2e0854] dark:text-slate-200 mb-1.5">
                                Full Name
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm"
                                    placeholder="Enter your name"
                                    required
                                    autoFocus
                                />
                            </div>
                            {errors.name && <p className="mt-1.5 text-xs font-semibold text-rose-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#2e0854] dark:text-slate-200 mb-1.5">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            {errors.email && <p className="mt-1.5 text-xs font-semibold text-rose-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#2e0854] dark:text-slate-200 mb-1.5">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="block w-full pl-12 pr-12 py-3 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm"
                                    placeholder="Minimum 8 characters"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1.5 text-xs font-semibold text-rose-500">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#2e0854] dark:text-slate-200 mb-1.5">
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm"
                                    placeholder="Re-enter password"
                                    required
                                />
                            </div>
                            {errors.password_confirmation && (
                                <p className="mt-1.5 text-xs font-semibold text-rose-500">{errors.password_confirmation}</p>
                            )}
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="group relative w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-[#5b40cf] hover:bg-[#2e0854] focus:outline-none focus:ring-4 focus:ring-[#5b40cf]/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.99] shadow-lg shadow-purple-950/25 cursor-pointer"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {processing ? 'Creating Account...' : 'Create Account'}
                                    {!processing && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                        Already have an account?{' '}
                        <Link
                            href={route('login')}
                            className="font-bold text-[#5b40cf] hover:text-[#2e0854] transition-colors underline decoration-2 underline-offset-4"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Panel - Sikar Education Showcase (Desktop) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#2e0854] overflow-hidden flex-col justify-between p-12 xl:p-16 text-white">
                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5b40cf]/15 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Top badge */}
                <div className="relative z-10 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold uppercase tracking-wider text-amber-300">
                        <Award className="w-4 h-4" />
                        <span>Join Sikar Education Hub</span>
                    </div>
                    <span className="text-xs font-medium text-white/60">Free Account</span>
                </div>

                {/* Middle Content: Platform Highlights */}
                <div className="relative z-10 my-auto py-10 max-w-lg">
                    <h2 className="text-3xl xl:text-4xl font-extrabold leading-tight text-white mb-6">
                        Stay Ahead in Your Educational Journey
                    </h2>
                    <p className="text-slate-300 text-base leading-relaxed mb-8">
                        Sign up to receive timely alerts on board results, scholarship deadlines, and batch admissions across Sikar's premier educational institutions.
                    </p>

                    <div className="space-y-4 mb-10">
                        {[
                            'Instant alerts for scholarship exams & Olympiads (PCP Olympiad, Matrix etc.)',
                            'Personalized guides for NEET, IIT-JEE and CBSE/RBSE admissions',
                            'Save and bookmark important articles and comparisons for quick access',
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#5b40cf]/20 border border-[#5b40cf]/60 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-[#5b40cf]" />
                                </div>
                                <span className="text-sm font-medium text-slate-200">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Trust indicator */}
                    <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-white text-base">Privacy First & Spam Free</div>
                                <div className="text-xs text-slate-300">We never share your personal data with third-party advertisers.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom trust footer */}
                <div className="relative z-10 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-6">
                    <span>&copy; {new Date().getFullYear()} Sikar Education Hub</span>
                    <span>100% Independent Editorial Standards</span>
                </div>
            </div>
        </div>
    );
}
