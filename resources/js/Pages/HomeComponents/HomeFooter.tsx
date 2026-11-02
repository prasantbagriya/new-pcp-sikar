// @ts-nocheck
"use client"

import React, { useState } from "react"
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  ChevronRight,
  Clock,
  Send,
  Trophy
} from "lucide-react"
import { Facebook, Twitter, Instagram, Youtube } from "../../NextComponents/BrandIcons"

export default function HomeFooter({ global_nav: passedNav }) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (pathname?.startsWith('/blog/admin')) {
    return null;
  }

  const getLinkHref = (page) => {
    if (!page) return '#';
    if (page.startsWith('http://') || page.startsWith('https://')) return page;
    if (page.startsWith('/')) return page;
    const basePath = typeof window !== 'undefined' && window.BASE_PATH ? window.BASE_PATH : '';
    if (page === 'landing' || page === '/') return (basePath || '') + '/';
    return (basePath || '') + '/' + page;
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2500);
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#faf7fe] via-white to-[#faf7fe] text-slate-800 pt-16 pb-12 overflow-hidden w-full border-t border-purple-200/90 font-sans selection:bg-[#5b40cf] selection:text-white select-none">
      
      {/* 1. SIDE LIGHTING EFFECTS IN OUR ORIGINAL THEME (Purple & Iris Lighting Glow) */}
      {/* Left-Side Luminous Spotlight */}
      <div 
        className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-6 -left-10 w-[420px] h-[420px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Right-Side Luminous Spotlight */}
      <div 
        className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#5b40cf]/15 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 -right-10 w-[450px] h-[450px] bg-purple-200/35 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Luminous Edge Glow Line in Brand Colors */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#5b40cf]/60 via-[#7c52c9]/60 to-transparent" />

      <div className="w-full max-w-[1520px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* 2. Pre-Footer Call to Action Banner (Our Original Purple & White Theme) */}
        <div className="mb-14 rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-purple-50/90 via-[#fbf7fe] to-purple-50/90 border border-purple-200/90 shadow-[0_12px_40px_-15px_rgba(46,8,84,0.08)] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#5b40cf]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-purple-200 shadow-2xs text-[#2e0854] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Admissions Open 2026-27 • NEET-UG &amp; IIT-JEE</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
              Ready to Turn Your Dream into a Top Rank?
            </h3>
            
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Join Rajasthan's most disciplined residential coaching campus. Connect directly with senior counselors for personalized course, hostel, and P-SAT scholarship guidance.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2e0854] via-[#3b1165] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-102 active:scale-98"
            >
              <span>Book Free Campus Visit</span>
              <ArrowRight className="w-4 h-4 text-purple-200" />
            </a>

            <a 
              href="tel:9610892222" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-purple-50 text-[#2e0854] font-bold text-xs sm:text-sm border border-purple-200/90 shadow-2xs hover:shadow-xs transition-all"
            >
              <Phone className="w-4 h-4 text-[#5b40cf]" />
              <span>Talk to Counselor</span>
            </a>
          </div>

        </div>

        {/* 3. Top 3 Campuses Quick Contact Cards (Our Original Theme: White & Russian Purple) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          
          {/* Campus 1: Palwas Road */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 hover:border-[#5b40cf] shadow-2xs hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[10.5px] font-bold uppercase tracking-wider border border-[#eed3f8]">
                <Building2 className="w-3 h-3 text-[#5b40cf]" />
                <span>Head Office • Sikar</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Open Daily" />
            </div>

            <h4 className="text-base font-bold text-slate-900 group-hover:text-[#5b40cf] transition-colors mb-1.5">
              PCP Sikar, Palwas Road Campus
            </h4>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" />
              <span>Palwas Road, Sikar, Rajasthan - 332001</span>
            </p>

            <div className="pt-3 border-t border-purple-50 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Helpline:</span>
                <div className="flex items-center gap-2 font-bold text-[#2e0854]">
                  <a href="tel:9610892222" className="hover:text-[#5b40cf]">9610-89-2222</a>
                  <span className="text-purple-300">|</span>
                  <a href="tel:9610612222" className="hover:text-[#5b40cf]">61-2222</a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Email:</span>
                <a href="mailto:pcpsikar@gmail.com" className="font-semibold text-slate-700 hover:text-[#5b40cf] truncate">
                  pcpsikar@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Campus 2: Piprali Road */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 hover:border-[#5b40cf] shadow-2xs hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[10.5px] font-bold uppercase tracking-wider border border-[#eed3f8]">
                <Building2 className="w-3 h-3 text-[#5b40cf]" />
                <span>Piprali Branch • Sikar</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Open Daily" />
            </div>

            <h4 className="text-base font-bold text-slate-900 group-hover:text-[#5b40cf] transition-colors mb-1.5">
              PCP Sikar, Piprali Road Campus
            </h4>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" />
              <span>Elenza Heights, New Janta Colony, Piprali Road, Sikar</span>
            </p>

            <div className="pt-3 border-t border-purple-50 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Helpline:</span>
                <div className="flex items-center gap-2 font-bold text-[#2e0854]">
                  <a href="tel:9610532222" className="hover:text-[#5b40cf]">9610-53-2222</a>
                  <span className="text-purple-300">|</span>
                  <a href="tel:9610832222" className="hover:text-[#5b40cf]">83-2222</a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Email:</span>
                <a href="mailto:pcppalwasroad@gmail.com" className="font-semibold text-slate-700 hover:text-[#5b40cf] truncate">
                  pcppalwasroad@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Campus 3: Jaipur Center */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 hover:border-[#5b40cf] shadow-2xs hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[10.5px] font-bold uppercase tracking-wider border border-[#eed3f8]">
                <Building2 className="w-3 h-3 text-[#5b40cf]" />
                <span>Jaipur Campus</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Open Daily" />
            </div>

            <h4 className="text-base font-bold text-slate-900 group-hover:text-[#5b40cf] transition-colors mb-1.5">
              PCP Jaipur, Gopalpura Bypass
            </h4>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" />
              <span>Balaji Tower, Gopalpura Bypass, Jaipur, Rajasthan</span>
            </p>

            <div className="pt-3 border-t border-purple-50 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Helpline:</span>
                <div className="flex items-center gap-2 font-bold text-[#2e0854]">
                  <a href="tel:9610572222" className="hover:text-[#5b40cf]">9610-57-2222</a>
                  <span className="text-purple-300">|</span>
                  <a href="tel:9610832222" className="hover:text-[#5b40cf]">83-2222</a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Email:</span>
                <a href="mailto:pcpjaipur1@gmail.com" className="font-semibold text-slate-700 hover:text-[#5b40cf] truncate">
                  pcpjaipur1@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Campus Highlights Ribbon (100+ Acres, 4 Campuses, 24x7 Security, Transport Hub) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center mb-8 pb-6 border-b border-purple-100">
          <div className="py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all">
            <span className="block text-lg sm:text-xl font-extrabold text-[#2e0854]">100+ Acres</span>
            <span className="block text-[11.5px] text-slate-500 font-medium mt-0.5">Headquarters Campus Area</span>
          </div>
          <div className="py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all">
            <span className="block text-lg sm:text-xl font-extrabold text-[#2e0854]">4 Campuses</span>
            <span className="block text-[11.5px] text-slate-500 font-medium mt-0.5">Sikar &amp; Jaipur Presence</span>
          </div>
          <div className="py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all">
            <span className="block text-lg sm:text-xl font-extrabold text-[#2e0854]">24x7 Security</span>
            <span className="block text-[11.5px] text-slate-500 font-medium mt-0.5">CCTV &amp; Warden Monitored</span>
          </div>
          <div className="py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all">
            <span className="block text-lg sm:text-xl font-extrabold text-[#2e0854]">Transport Hub</span>
            <span className="block text-[11.5px] text-slate-500 font-medium mt-0.5">Direct Bus &amp; Train Connectivity</span>
          </div>
        </div>

        {/* 4. Main Footer Columns (2 Columns on Mobile for Links: "do do me ane chaye aor clome me") */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 mb-14">
          
          {/* Brand Identity & Typography in Our Theme */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-4">
            
            {/* Pure Typographic Brand Identity */}
            <div className="flex flex-col items-start gap-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7e8fc] border border-[#eed3f8] text-[#2e0854] text-[11px] font-black tracking-widest uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>PRINCE CAREER PIONEER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none mt-1">
                PCP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#7c52c9]">SIKAR</span>
              </h2>
              <p className="text-[11px] text-[#5b40cf] font-bold tracking-wider uppercase mt-0.5">
                Premier IIT-JEE &amp; NEET-UG Division of Prince Eduhub
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
              <strong>PCP Sikar (Prince Career Pioneer)</strong> is North India's premier classroom coaching institute for NEET-UG and IIT-JEE, operational since 2009. Running under the visionary aegis of <strong>Prince Eduhub</strong> (25+ years of academic excellence in Sikar, Rajasthan).
            </p>

            {/* Social Media Pills */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { Icon: Facebook, url: 'https://www.facebook.com/pcpsikar', name: 'Facebook' },
                { Icon: Youtube, url: 'https://www.youtube.com/@pcpsikar', name: 'YouTube' },
                { Icon: Instagram, url: 'https://www.instagram.com/pcp_sikar', name: 'Instagram' },
                { Icon: Twitter, url: 'https://x.com/pcp_sikar', name: 'X' },
              ].map(({ Icon, url, name }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`PCP Sikar on ${name}`}
                  className="w-9 h-9 rounded-full bg-white border border-purple-200/90 flex items-center justify-center text-[#5b40cf] hover:text-white hover:bg-[#2e0854] hover:border-[#2e0854] transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

          </div>

          {/* Academic Wings (col-span-1 on mobile: 2-column layout for links) */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Courses &amp; Batches</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 list-none p-0 m-0 font-medium">
              <li>
                <a href={getLinkHref('courses/neet-ug')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  NEET-UG Target (Pre-Medical)
                </a>
              </li>
              <li>
                <a href={getLinkHref('courses/neet-ug')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  NEET Droppers &amp; Repeaters Batch
                </a>
              </li>
              <li>
                <a href={getLinkHref('courses/iit-jee')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  IIT-JEE (Main + Advanced)
                </a>
              </li>
              <li>
                <a href={getLinkHref('courses/iit-jee')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  JEE Repeater / Drop Batch
                </a>
              </li>
              <li>
                <a href={getLinkHref('courses/pre-foundation')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  Pre-Foundation (Class 5th to 10th)
                </a>
              </li>
              <li>
                <a href={getLinkHref('courses/nda-defence')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  Prince Defence Academy (NDA)
                </a>
              </li>
              <li>
                <a href={getLinkHref('courses')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform font-bold text-[#5b40cf]">
                  Explore All Programs →
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Resources (col-span-1 on mobile: 2-column layout for links) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5b40cf]"></span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 list-none p-0 m-0 font-medium">
              <li>
                <a href="#results-orbit" className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  PCP Hall of Fame
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  Our Campus Journey
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  Google Reviews (4.6★)
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href={getLinkHref('about-us')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  About Prince Eduhub
                </a>
              </li>
              <li>
                <a href={getLinkHref('contact')} className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  Contact Counseling Desks
                </a>
              </li>
              <li>
                <a href="https://pcpsikar.com/" target="_blank" rel="noreferrer" className="hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform">
                  Official Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions Newsletter & Support (col-span-2 on mobile) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Admissions Updates</span>
            </h4>
            
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Receive updates on NEET/JEE exam alerts, answer keys, and P-SAT scholarship dates.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-[#2e0854] font-bold flex items-center gap-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter parent/student email"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-purple-200/90 text-slate-900 placeholder:text-slate-400 text-xs focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-xs flex items-center gap-1 transition-all"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 block">
                  Official alerts only. No spam. Unsubscribe anytime.
                </span>
              </form>
            )}

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2.5 shadow-2xs">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[11px] text-slate-700 font-medium">
                  Rajasthan's Highest Selection Ratio in NEET &amp; JEE
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 5. Bottom Copyright & Legal Strip */}
        <div className="pt-8 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} <strong>PCP Sikar (Prince Career Pioneer)</strong>. A constituent unit of <strong>Prince Eduhub</strong>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            <a href="/terms" className="hover:text-[#5b40cf] transition-colors">Terms of Service</a>
            <span className="text-purple-200">•</span>
            <a href="/privacy" className="hover:text-[#5b40cf] transition-colors">Privacy Policy</a>
            <span className="text-purple-200">•</span>
            <a href="/sitemap.xml" className="hover:text-[#5b40cf] transition-colors">Sitemap</a>
            <span className="text-purple-200">•</span>
            <span className="text-[#5b40cf] font-semibold">Sikar • Jaipur</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
