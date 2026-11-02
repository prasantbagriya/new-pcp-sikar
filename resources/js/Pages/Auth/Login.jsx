import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff, CheckCircle2, ShieldCheck, GraduationCap, Award, Check } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const basePath = typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '';

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex bg-[#f8fafc] dark:bg-[#070d1e] font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854]">
            <Head title="Sign In | Sikar Education Hub" />

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
                                        Education Portal
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
                            Welcome Back
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                            Sign in to access your Sikar Education Hub dashboard, reviews, and bookmarks.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-6 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-4 py-3 rounded-2xl text-sm font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            {status}
                        </div>
                    )}

                    {/* Form */}
                    <form className="space-y-5" onSubmit={submit}>
                        <div>
                            <label className="block text-sm font-bold text-[#2e0854] dark:text-slate-200 mb-1.5">
                                Email Address or Username
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3.5 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm"
                                    placeholder="admin@sikareducationhub.com or admin"
                                    required
                                    autoFocus
                                />
                            </div>
                            {errors.email && <p className="mt-1.5 text-xs font-semibold text-rose-500">{errors.email}</p>}
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-sm font-bold text-[#2e0854] dark:text-slate-200">
                                    Password
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-xs font-bold text-[#5b40cf] hover:text-[#2e0854] transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="block w-full pl-12 pr-12 py-3.5 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm"
                                    placeholder="••••••••"
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

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2.5 cursor-pointer group select-none">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-300 text-[#5b40cf] focus:ring-[#5b40cf] cursor-pointer"
                                />
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="group relative w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-[#5b40cf] hover:bg-[#2e0854] focus:outline-none focus:ring-4 focus:ring-[#5b40cf]/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.99] shadow-lg shadow-purple-950/25 cursor-pointer"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {processing ? 'Signing In...' : 'Sign In'}
                                    {!processing && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                        Don't have an account?{' '}
                        <Link
                            href={route('register')}
                            className="font-bold text-[#5b40cf] hover:text-[#2e0854] transition-colors underline decoration-2 underline-offset-4"
                        >
                            Sign up for free
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
                        <span>Sikar's Verified Education Network</span>
                    </div>
                    <span className="text-xs font-medium text-white/60">Updated 2026</span>
                </div>

                {/* Middle Content: Platform Highlights */}
                <div className="relative z-10 my-auto py-10 max-w-lg">
                    <h2 className="text-3xl xl:text-4xl font-extrabold leading-tight text-white mb-6">
                        Empowering Students & Parents Across Sikar
                    </h2>
                    <p className="text-slate-300 text-base leading-relaxed mb-8">
                        Get transparent faculty analysis, real student reviews, fee benchmarks, and hostel details for top NEET, IIT-JEE & Olympiad coachings in Sikar.
                    </p>

                    <div className="space-y-3.5 mb-10">
                        {[
                            '100% Fact-checked coaching fee structures & batch details',
                            'Unbiased student and parent reviews with verified feedback',
                            'Direct admission inquiry and scholarship alerts',
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#5b40cf]/20 border border-[#5b40cf]/60 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-[#5b40cf]" />
                                </div>
                                <span className="text-sm font-medium text-slate-200">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial Quote Card */}
                    <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl shadow-2xl">
                        <p className="text-sm italic text-white/95 leading-relaxed mb-4">
                            "Finding the right NEET batch at PCP Sikar was made so much easier through the comparative guides on Sikar Education Hub."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#5b40cf] flex items-center justify-center font-bold text-white text-sm shadow-md">
                                PC
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Pooja Choudhary</div>
                                <div className="text-xs text-slate-300">NEET UG Aspirant, Sikar</div>
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
