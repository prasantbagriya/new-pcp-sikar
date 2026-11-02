import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';
import { Mail, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const basePath = typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '';

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#070d1e] font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854] px-6 py-12 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-[#2e0854]/10 dark:bg-[#2e0854]/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#5b40cf]/10 dark:bg-[#5b40cf]/15 rounded-full blur-3xl pointer-events-none"></div>

            <Head title="Forgot Password | Sikar Education Hub" />

            <div className="w-full max-w-md relative z-10">
                {/* Brand Logo */}
                <div className="text-center mb-8">
                    <Link href={`${basePath}/`} className="inline-flex items-center gap-3 group decoration-transparent no-underline">
                        <div className="h-11 px-2.5 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-md shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 group-hover:scale-105 transition-all">
                            <img
                                src={`${basePath}/uploads/2026/07/Logo_sikareducationhub.png`}
                                alt="Sikar Education Hub Logo"
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <div className="text-left">
                            <span className="block text-xl font-extrabold text-[#2e0854] dark:text-white tracking-tight leading-none">
                                Sikar Education Hub
                            </span>
                            <span className="block text-[11px] font-bold text-[#5b40cf] uppercase tracking-wider mt-1">
                                Password Recovery
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="bg-white dark:bg-[#0b1c36] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl">
                    <div className="mb-6">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2e0854] dark:text-white tracking-tight mb-2">
                            Forgot Password?
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            No problem. Enter your email address and we will send you a password reset link to get back into your account.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-6 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-4 py-3 rounded-2xl text-sm font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-[#2e0854] dark:text-slate-200 mb-1.5">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm"
                                    placeholder="you@example.com"
                                    required
                                    autoFocus
                                />
                            </div>
                            {errors.email && <p className="mt-1.5 text-xs font-semibold text-rose-500">{errors.email}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="group relative w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-[#5b40cf] hover:bg-[#2e0854] focus:outline-none focus:ring-4 focus:ring-[#5b40cf]/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.99] shadow-lg shadow-purple-950/25 cursor-pointer"
                        >
                            {processing ? 'Sending Link...' : 'Send Reset Link'}
                            {!processing && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link
                            href={route('login')}
                            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-[#5b40cf] dark:hover:text-[#5b40cf] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
