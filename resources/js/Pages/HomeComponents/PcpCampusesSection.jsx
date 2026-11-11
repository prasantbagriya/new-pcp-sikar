import React from 'react';
import { MapPin, Phone, Mail, Compass, ExternalLink, Building, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function PcpCampusesSection() {
    const campuses = [
        {
            name: "PCP Prime Branch (Head Office)",
            tag: "Headquarters & Prime Residential",
            address: "Palwas Road, Sikar, Rajasthan - 332001",
            phone: "+91 96108 92222",
            phoneAlt: "9610-61-2222",
            email: "pcpsikar@gmail.com",
            image: "/uploads/pcp/Neet-2026.jpg",
            tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
            mapQuery: "PCP+Prime+Palwas+Road+Sikar",
            features: [
                "Head branch with administrative council",
                "Full-fledged separate boys & girls AC hostels",
                "12-hour main faculty doubt clearing hub",
                "Central digital library & testing arena"
            ],
            badge: "Main Campus",
        },
        {
            name: "PCP Jaipur Branch",
            tag: "New Flagship Jaipur Center",
            address: "Balaji Tower, Near Triveni Nagar, Gopalpura Bypass, Jaipur, Rajasthan",
            phone: "+91 96105 72222",
            phoneAlt: "9610-83-2222",
            email: "pcpjaipur1@gmail.com",
            image: "/uploads/pcp/PCPjaipur.jpg",
            tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
            mapQuery: "Balaji+Tower+Gopalpura+Bypass+Jaipur",
            features: [
                "Prime location at Gopalpura coaching corridor",
                "Smart interactive hybrid classrooms",
                "Dedicated NEET & JEE repeaters wing",
                "Convenient metro & transit connectivity"
            ],
            badge: "Jaipur Center",
        },
        {
            name: "PCP Piprali Road Branch",
            tag: "High-Energy Academic Wing",
            address: "Elenza Heights, New Janta Colony, Piprali Road, Sikar, Rajasthan",
            phone: "+91 96105 32222",
            phoneAlt: "9610-83-2222",
            email: "pcppalwasroad@gmail.com",
            image: "/uploads/pcp/PCPjaipur.jpg",
            tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
            mapQuery: "Elenza+Heights+Piprali+Road+Sikar",
            features: [
                "Heart of Sikar coaching landmark",
                "Ultra-modern concept test labs",
                "Pre-medical and IIT-JEE day-scholar wing",
                "Experienced doubt assistance desks"
            ],
            badge: "Piprali Road",
        },
        {
            name: "PCP Brainy Branch",
            tag: "Expansive Sports & Eco Campus",
            address: "Jaipur - Bikaner Bypass (Prince Bypass), Sikar, Rajasthan",
            phone: "+91 96106 02222",
            phoneAlt: "9610-89-2222",
            email: "pcpsikar@gmail.com",
            image: "/uploads/pcp/Pre-FoundationBlog.png",
            tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
            mapQuery: "Prince+Eduhub+Bypass+Sikar",
            features: [
                "Serene 100+ acre green environment",
                "Pre-Foundation & Olympiad specialized wing",
                "Olympic standard sports grounds & swimming",
                "Zero distraction residential facility"
            ],
            badge: "Eco Campus",
        },
    ];

    return (
        <section id="campuses" className="py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3">
                            <Building className="w-4 h-4 text-purple-700" />
                            <span>World-Class Infrastructure</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight">
                            Explore PCP <span className="text-[#3b0764]">Campuses in Sikar & Jaipur</span>
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl font-normal">
                            Equipped with high-tech smart classrooms, air-conditioned hostels, biometric security, and pure-veg hygienic dining.
                        </p>
                    </div>

                    <a
                        href="https://tour.princeeduhub.com/princt34/old-campus/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-brand-yellow px-5 py-3 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 shadow-md"
                    >
                        <Compass className="w-4 h-4" />
                        <span>Experience 360° Virtual Tour</span>
                    </a>
                </div>

                {/* 4 Campuses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {campuses.map((campus, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                        >
                            {/* Campus Photo */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                                <img
                                    src={campus.image}
                                    alt={campus.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.src = '/uploads/pcp/Neet-2026.jpg';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                
                                <div className="absolute top-3 left-3">
                                    <span className="px-2.5 py-1 rounded-md bg-[#ffc107] text-black text-[10px] font-black uppercase tracking-wider shadow">
                                        {campus.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block mb-1">
                                        {campus.tag}
                                    </span>
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-3">
                                        {campus.name}
                                    </h3>

                                    {/* Address */}
                                    <div className="flex items-start gap-2 text-xs text-slate-600 mb-3">
                                        <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                                        <span>{campus.address}</span>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-2 text-xs text-slate-900 font-bold mb-3">
                                        <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <a href={`tel:${campus.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                                            {campus.phone}
                                        </a>
                                        {campus.phoneAlt && (
                                            <>
                                                <span className="text-slate-300">|</span>
                                                <span className="text-slate-600">{campus.phoneAlt}</span>
                                            </>
                                        )}
                                    </div>

                                    {/* Features bullets */}
                                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                                        {campus.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-600 font-medium">
                                                <CheckCircle2 className="w-3 h-3 text-purple-700 shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action links */}
                                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                                    <a
                                        href={`https://maps.google.com/?q=${encodeURIComponent(campus.mapQuery)}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                                    >
                                        <MapPin className="w-3.5 h-3.5 text-purple-700" />
                                        <span>Directions</span>
                                    </a>

                                    <a
                                        href={campus.tourUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#2e1065] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-purple-200"
                                    >
                                        <Compass className="w-3.5 h-3.5 text-purple-700" />
                                        <span>360° Tour</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
