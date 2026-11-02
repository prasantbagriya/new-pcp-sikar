import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GlobalNavbar from '../../NextComponents/GlobalNavbar';
import BlogFooter from '../../NextComponents/BlogFooter';
import { ShieldCheck, Lock, Sparkles } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="bg-[#faf7fe] dark:bg-[#070d1e] min-h-screen flex flex-col font-sans selection:bg-purple-800 selection:text-white">
            <Head>
                <title>Privacy Policy &amp; Data Security | PCP Sikar &amp; Sikar Education Hub</title>
                <meta name="description" content="Sikar Education Hub and PCP Sikar Privacy Policy explains how information is collected, used, protected, and handled when you use our website." />
            </Head>
            <GlobalNavbar />

            {/* PCP Hero Header */}
            <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#120326] text-white overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5b40cf]/25 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-200/80 mb-5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                        <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-amber-300 font-bold">Privacy Policy</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-widest mb-4">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>DATA PROTECTION &amp; STUDENT PRIVACY</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
                        Privacy Policy
                    </h1>

                    <p className="text-purple-100/80 text-xs sm:text-sm font-medium">
                        Last Updated: September 21, 2026 • Official Compliance Notice
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-20 relative z-20 flex-grow">
                <div className="bg-white dark:bg-[#0c1428] rounded-3xl border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5 p-6 sm:p-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base">
                    
                    <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800 text-xs sm:text-sm text-[#2e0854] dark:text-purple-200 font-medium">
                        <strong>Overview:</strong> This Privacy Policy outlines our procedures on collecting, using, and safeguarding information when you access Sikar Education Hub and Prince Career Pioneer (PCP Sikar) admission services.
                    </div>

                    <p>
                        We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and only where We have a valid legal basis to do so, including Your consent.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        1. Interpretation and Definitions
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Account:</strong> A unique account created for You to access Our Service or parts of Our Service.</li>
                        <li><strong>Company:</strong> Refers to Sikar Education Hub and Prince Career Pioneer (PCP Sikar), Palwas Road, Sikar, Rajasthan.</li>
                        <li><strong>Cookies:</strong> Small files placed on Your device containing details of Your browsing activity.</li>
                        <li><strong>Service:</strong> Refers to the website accessible at <a href="https://sikareducationhub.com/" className="text-[#5b40cf] font-semibold hover:underline">https://sikareducationhub.com/</a>.</li>
                        <li><strong>Usage Data:</strong> Data collected automatically, such as page duration and browser diagnostics.</li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        2. Collecting and Using Your Personal Information
                    </h2>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Student &amp; Parent Name</li>
                        <li>WhatsApp / Mobile Phone Number</li>
                        <li>Email Address</li>
                        <li>City, State &amp; Target Examination (NEET / IIT-JEE / Pre-Foundation)</li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        3. Zero Commercial Data Sharing Guarantee
                    </h2>
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-semibold">
                        🔒 Strict Privacy Promise: Student and parent contact numbers submitted for admission inquiries are never sold, rented, or shared with third-party advertisers or external telemarketers. They are solely used by verified PCP Sikar academic counselors.
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        4. Security of Your Personal Data
                    </h2>
                    <p>
                        The security of Your Personal Data is important to Us. We employ industry-standard encryption, SSL protocols, and restricted staff access to protect all stored lead records and inquiry correspondence.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800">
                        5. Contacting Our Data Privacy Team
                    </h2>
                    <p>
                        If You have any questions regarding this Privacy Policy or wish to request data modification or deletion, please reach out through our official counseling desk:
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                        Email: <a href="mailto:pcpsikar@gmail.com" className="text-[#5b40cf] hover:underline">pcpsikar@gmail.com</a> | Helpline: <a href="tel:9610892222" className="text-[#5b40cf] hover:underline">9610-89-2222</a>
                    </p>

                </div>
            </main>

            <BlogFooter />
        </div>
    );
}
