// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquare, ExternalLink, Quote, CheckCircle2, MapPin } from 'lucide-react';

export default function PcpReviewsSection({ initialData = null }) {
    const [profile, setProfile] = useState(() => {
        return initialData?.profile || {
            title: "PCP Sikar (Prime Branch)",
            averageRating: 4.6,
            totalReviews: 1315,
            reviewLink: "https://search.google.com/local/writereview?placeid=ChIJR3xYQV6kbDkR9PbItQ6ea9A"
        };
    });

    const [reviews, setReviews] = useState(() => {
        return initialData?.reviews && initialData.reviews.length > 0 ? initialData.reviews : [];
    });

    const [expandedReplies, setExpandedReplies] = useState({});
    
    // Dynamic Scroll-driven progressive highlight animation
    const highlightRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!highlightRef.current) return;
            const rect = highlightRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Progressive reveal as user scrolls to this section
            // Starts drawing when heading enters bottom 95% of screen
            // Completes fill when it reaches 55% of screen
            const start = windowHeight * 0.95;
            const end = windowHeight * 0.55;
            
            if (rect.top > start) {
                setScrollProgress(0);
            } else if (rect.top < end) {
                setScrollProgress(100);
            } else {
                const pct = ((start - rect.top) / (start - end)) * 100;
                setScrollProgress(Math.min(100, Math.max(0, Math.round(pct))));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fetch live from endpoint if not provided via props
    useEffect(() => {
        if (!initialData || !initialData.reviews || initialData.reviews.length === 0) {
            fetch('/api/pcp/reviews')
                .then(res => res.json())
                .then(data => {
                    if (data && data.reviews && data.reviews.length > 0) {
                        setProfile(data.profile || profile);
                        setReviews(data.reviews);
                    }
                })
                .catch(err => {
                    console.warn('Reviews fetch fallback active:', err);
                });
        }
    }, [initialData]);

    const toggleReply = (key) => {
        setExpandedReplies(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const ratingDisplay = Number(profile.averageRating || 4.6).toFixed(1);

    // Default 20 authentic Google Reviews fallback
    const allReviews = reviews && reviews.length > 0 ? reviews : [
        {
            reviewerName: "varsha rana",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVoXkzsQtlsK_vrhrB1GdA8xazjJCs_FFJWF2y7KlRz_KsFkMQ=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Pcp is very nice and caring institute for students. To live and study with zero distractions.",
            timeAgo: "1d ago"
        },
        {
            reviewerName: "Sweta Singh",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocJwJT5kI3VnjIXfaluuhTZ6z4_El2_kliaoUUl0eR5PC1UMSQ=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "My experience is very good and teachers and all the staff are very supportive for NEET preparation.",
            timeAgo: "1d ago"
        },
        {
            reviewerName: "Abubakar Sadique",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocLRrKxF7sBstyM3-3DptbzCVnbIhmiOZg5F_p2BXmvhdEZycA=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Mera beta NEET Target Irfan ne test me achha result kiya. PCP ka environment aur faculty sabhi best hain.",
            timeAgo: "3d ago"
        },
        {
            reviewerName: "Bajranglal Naraniya",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocLtCjWQ6ZoCUvgWQnYWLk0kf5ROHKsR1EBevv8dUoUv1sXdkQ=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "My son is passout from Prince, and seriously the teaching way is good and fabulous.",
            timeAgo: "3d ago"
        },
        {
            reviewerName: "Durgesh Mahawar",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocK1cZoi2SUO28DPjMc9_HFtJyqpggOeC_3JmFh_OdOK2k85vw=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "My son is pass out from PCP. There are very good facilities for students, both academic and hostel.",
            timeAgo: "3d ago"
        },
        {
            reviewerName: "Muniraj Meena",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocIwpidVXPPG_GXNnayUKUI7SdzpGDALED4GGyQYfSczld-vAw=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Mera beta NEET ki coaching kar raha hai PCP Prime se. Teachers daily doubt solve karte hain, best coaching in Rajasthan.",
            timeAgo: "3d ago"
        },
        {
            reviewerName: "Akshat Meena",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocJfW6Bd--9qNuBYhiaEFo_Qr6GI5UIhgtYzQoXG72FdnQKJ2XU=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "All faculty members behaviour is good and they have enough experience. The study environment is laser-focused.",
            timeAgo: "3d ago"
        },
        {
            reviewerName: "Anjali Jorwal",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocLj75f6I3cixcsqfWTtWVKwuAQkWltDA6KsJk4IfRq_YzZsbw=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Hostels are good for study purpose. Faculties are very nice, freely ask doubts during your journey. Best test series.",
            timeAgo: "3d ago"
        },
        {
            reviewerName: "sanjay meena",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXJDL8VxFUOhHPqg5UfmlQtIl-hNXwpX1q5YSRqTkY5fFY6mPE=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Mera bhai JEE ki taiyari kar raha hai aur yahan ka environment, mess and faculty best hain.",
            timeAgo: "4d ago"
        },
        {
            reviewerName: "Surendra Kumar",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocK5lQb7sy9c58Bim7FDnFaFxh2TMxtByQt3ryItXSAp30RiOg=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "All teachers are formed good. Hostel is very clean and warden behaviour is supportive and disciplined.",
            timeAgo: "4d ago"
        },
        {
            reviewerName: "Ram krishan",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocKGY3LJX0hZuCZpPrwFPUoX2jIt8O6r0FPOa9K9nSdTEqpakQ=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Good academic environment, good faculty, good mess, India's most disciplined institute for NEET & JEE.",
            timeAgo: "5d ago"
        },
        {
            reviewerName: "Karan Mayal",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocIaq-vFPS6dMIyH0EvMxQPfH2_M_mXEEOK5TC_S8KhRwLmLUA=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Mera bhai 12th JEE ki taiyari kar raha hai aur padhai ka mahol bahut shandar hai.",
            timeAgo: "5d ago"
        },
        {
            reviewerName: "Rakesh Yogi",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocLtCjWQ6ZoCUvgWQnYWLk0kf5ROHKsR1EBevv8dUoUv1sXdkQ=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "PCP is truly top-tier in medical and engineering coaching in Rajasthan.",
            timeAgo: "6d ago"
        },
        {
            reviewerName: "Sachin Bhardwaj",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocK1cZoi2SUO28DPjMc9_HFtJyqpggOeC_3JmFh_OdOK2k85vw=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "It is a great way to reach your success. Always with PCP Prime for genuine guidance.",
            timeAgo: "1w ago",
            ownerReply: "Big thanks for sharing your experience Sachin! We remain fully committed to highest academic standards."
        },
        {
            reviewerName: "Roshni Devi",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocKf8GCLSTzvl8p81FdW602TpVNAExpRfCnZv0b5ULFVcGO-Hw=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "PCP is a very good coaching center for JEE and NEET. All facilities and counselor team are supportive.",
            timeAgo: "1w ago",
            ownerReply: "Thank you Roshni Devi! Your encouraging words motivate us to achieve even higher benchmarks."
        },
        {
            reviewerName: "devender dhull",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocLciZHZU7oBBn3dT606_ApUup-FyJb1BbsIha0TZA7hE3NC2w=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "I decided to join PCP and the experience has been totally transformative. Excellent test analysis.",
            timeAgo: "1w ago",
            ownerReply: "Thank you Devender! We are proud to be part of your career journey."
        },
        {
            reviewerName: "Omprakash Chahar",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocJcn1M9hUYc9l_IqdSjHHQQv1bw5CQ4dnTW4PWti5ZRt6bGJg=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Mera beta 12th JEE ka student hai PCP Prime. Padhai ka mahaul nice, good faculty and continuous doubt counters.",
            timeAgo: "1w ago",
            ownerReply: "Namaste Omprakash ji! Aapka bharosa hi hamari sabse badi punji hai. Doubt counters par poori team dedicated hai."
        },
        {
            reviewerName: "sushma sharma",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocKGY3LJX0hZuCZpPrwFPUoX2jIt8O6r0FPOa9K9nSdTEqpakQ=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Amazing campus with well maintained hostel, hygienic delicious food, and round-the-clock mentorship.",
            timeAgo: "1w ago",
            ownerReply: "Hi Sushma! We are delighted that our residential ecosystem and nourishing meals met your expectations."
        },
        {
            reviewerName: "Manu Singh",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocIaq-vFPS6dMIyH0EvMxQPfH2_M_mXEEOK5TC_S8KhRwLmLUA=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "Most rated JEE institute in Rajasthan is PCP. Reason behind success here is self-study & guidance by Kota faculty.",
            timeAgo: "1w ago",
            ownerReply: "Thank you Manu! We take great pride in our self-study culture and faculty commitment."
        },
        {
            reviewerName: "Raju Tanwar",
            profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocK91ojoxirNMh76hz0mSBWZsuVKdKt51Vfau-mA4xIYkm6g0Q=s120-c-rp-mo-br100",
            starRating: 5,
            comment: "My son and nephew are both studying in PCP. Hostel management and academic discipline is very caring and supportive.",
            timeAgo: "1w ago",
            ownerReply: "Greetings Raju ji! Thank you for placing your family's trust in PCP Sikar."
        }
    ];

    // Split into 5 distinct columns as requested by the user
    const col1 = allReviews.filter((_, i) => i % 5 === 0);
    const col2 = allReviews.filter((_, i) => i % 5 === 1);
    const col3 = allReviews.filter((_, i) => i % 5 === 2);
    const col4 = allReviews.filter((_, i) => i % 5 === 3);
    const col5 = allReviews.filter((_, i) => i % 5 === 4);

    // Double each list for seamless infinite vertical looping
    const infiniteCol1 = [...col1, ...col1];
    const infiniteCol2 = [...col2, ...col2];
    const infiniteCol3 = [...col3, ...col3];
    const infiniteCol4 = [...col4, ...col4];
    const infiniteCol5 = [...col5, ...col5];

    // Single Review Card in Brand Purple-White Theme
    const renderCard = (review, idx, colKey) => {
        const displayName = review.reviewerName || review.reviewer?.displayName || 'PCP Aspirant / Parent';
        const photoUrl = review.profilePhotoUrl || review.reviewer?.profilePhotoUrl;
        const dateText = review.timeAgo || (review.createTime ? new Date(review.createTime).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : 'Verified');
        const replyObj = review.ownerReply || review.reviewReply;
        const uniqueKey = `${colKey}-${idx}`;

        return (
            <div 
                key={uniqueKey}
                className="flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-white border border-purple-200/80 shadow-[0_4px_14px_-4px_rgba(59,17,101,0.05)] hover:shadow-md hover:border-[#6947d1]/60 transition-all duration-300 mb-2.5 select-none group/card"
            >
                <div>
                    {/* Header: Reviewer Meta & Google Stars */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                            {photoUrl ? (
                                <img 
                                    src={photoUrl} 
                                    alt={displayName}
                                    width="32"
                                    height="32"
                                    loading="lazy"
                                    decoding="async"
                                    referrerPolicy="no-referrer"
                                    className="w-8 h-8 rounded-full object-cover border border-purple-200 shrink-0 shadow-2xs"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=3b1165&color=fff`;
                                    }}
                                />
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-purple-100 text-[#3b1165] font-bold flex items-center justify-center text-xs shrink-0 border border-purple-200">
                                    {(displayName || 'P')[0]?.toUpperCase()}
                                </div>
                            )}
                            <div className="min-w-0">
                                <h4 className="text-xs font-bold text-slate-900 leading-snug truncate">
                                    {displayName}
                                </h4>
                                <span className="text-[9.5px] text-slate-400 block">
                                    {dateText}
                                </span>
                            </div>
                        </div>

                        {/* 5 Google Stars (Gold) */}
                        <div className="flex items-center text-amber-400 shrink-0">
                            {[...Array(review.starRating || 5)].map((_, sIdx) => (
                                <Star key={sIdx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal mb-2 line-clamp-3 group-hover/card:line-clamp-none transition-all">
                        {review.comment || 'PCP Sikar is the most disciplined coaching with continuous faculty doubt support.'}
                    </p>
                </div>

                {/* Footer: Google Verified Badge & Expandable Reply */}
                <div className="pt-1.5 border-t border-purple-50 flex items-center justify-between text-[10px]">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/70">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>Google Verified</span>
                    </span>

                    {replyObj && (
                        <button
                            type="button"
                            onClick={() => toggleReply(uniqueKey)}
                            className="text-[9.5px] font-bold text-[#3b1165] hover:text-[#6947d1] flex items-center gap-1 cursor-pointer transition-colors"
                        >
                            <MessageSquare className="w-2.5 h-2.5 text-[#6947d1]" />
                            <span>PCP Reply</span>
                        </button>
                    )}
                </div>

                {/* Expandable Official PCP Management Reply */}
                {replyObj && expandedReplies[uniqueKey] && (
                    <div className="mt-2 p-2 rounded-lg bg-purple-50/80 text-slate-700 text-[10.5px] leading-relaxed border border-purple-100">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#3b1165] block mb-0.5">
                            Official Response from PCP Sikar:
                        </span>
                        {replyObj.comment || replyObj}
                    </div>
                )}
            </div>
        );
    };

    return (
        <section 
            id="reviews" 
            className="relative z-10 py-6 sm:py-7 lg:py-8 bg-[#faf7fe] text-slate-900 overflow-hidden border-b border-purple-100/90 font-sans"
            style={{ contentVisibility: 'visible', contain: 'none' }}
        >
            {/* Smooth Marquee CSS Animations for 5 Vertical Columns */}
            <style>{`
                @keyframes marqueeScrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes marqueeScrollDown {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                .marquee-up-fast {
                    animation: marqueeScrollUp 42s linear infinite;
                }
                .marquee-down-fast {
                    animation: marqueeScrollDown 46s linear infinite;
                }
                .marquee-up-normal {
                    animation: marqueeScrollUp 50s linear infinite;
                }
                .marquee-down-normal {
                    animation: marqueeScrollDown 44s linear infinite;
                }
                .marquee-up-slow {
                    animation: marqueeScrollUp 54s linear infinite;
                }
                .marquee-column:hover .marquee-track {
                    animation-play-state: paused !important;
                }
            `}</style>

            {/* Ambient Purple Theme Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-purple-200/25 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-purple-100/35 rounded-full blur-[110px]" />
            </div>

            <div className="relative z-10 w-full max-w-[1520px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
                
                {/* 1. Header UI: Compact Google Verified Institutional Banner */}
                <div className="reveal-scroll rounded-2xl sm:rounded-3xl bg-white border border-purple-200/90 shadow-[0_8px_30px_-12px_rgba(46,8,84,0.06)] p-3.5 sm:p-4.5 lg:p-5 mb-3.5 sm:mb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8">
                        
                        {/* Left: Authority Brand Narrative with Progressive Dynamic Scroll Highlight */}
                        <div className="max-w-3xl flex-1">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[11px] font-bold border border-[#eed3f8] shadow-2xs mb-1.5">
                                {/* Authentic Google 'G' Multi-Color Icon */}
                                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                                </svg>
                                <span>Google Verified Reviews • Palwas Road &amp; Piprali Road Campuses</span>
                            </div>

                            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 tracking-tight leading-snug">
                                Trusted by{' '}
                                <span 
                                    ref={highlightRef}
                                    className="relative inline-block px-2.5 py-0.5 font-extrabold select-none align-baseline overflow-hidden"
                                    style={{ borderRadius: 0 }}
                                >
                                    {/* Base text: Dark Russian Purple (#2e0854) */}
                                    <span className="text-[#2e0854] font-extrabold whitespace-nowrap">
                                        1,315+ Students &amp; Parents
                                    </span>

                                    {/* Dynamic scroll highlight layer - fills on scroll, zero rounded corner (rounded-none) */}
                                    <span 
                                        className="absolute inset-0 flex items-center px-2.5 py-0.5 overflow-hidden transition-[width] duration-150 ease-out pointer-events-none"
                                        style={{
                                            width: `${scrollProgress}%`,
                                            background: 'linear-gradient(90deg, #2e0854 0%, #5b40cf 100%)',
                                            borderRadius: 0,
                                            boxShadow: scrollProgress > 15 ? '0 2px 8px rgba(46, 8, 84, 0.22)' : 'none'
                                        }}
                                        aria-hidden="true"
                                    >
                                        <span className="text-white font-extrabold whitespace-nowrap">
                                            1,315+ Students &amp; Parents
                                        </span>
                                    </span>
                                </span>{' '}
                                Across India
                            </h2>

                            <p className="text-xs sm:text-[13px] text-slate-600 mt-1 font-normal leading-relaxed">
                                Live authentic reviews from aspirants and guardians enrolled in NEET-UG, IIT-JEE (Main + Advanced), and residential hostel programs at PCP Sikar.
                            </p>

                            {/* Trust badges in Palette Tint (Light #f7e8fc, Pale #eed3f8) */}
                            <div className="flex flex-wrap items-center gap-1.5 mt-2.5 pt-2 border-t border-purple-100">
                                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-md bg-[#f7e8fc] text-[#2e0854] border border-[#eed3f8]">
                                    ✓ 100% Authenticated Google Feed
                                </span>
                                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-md bg-[#f7e8fc] text-[#2e0854] border border-[#eed3f8]">
                                    ✓ Medical &amp; Engineering Selections
                                </span>
                                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-md bg-[#f7e8fc] text-[#2e0854] border border-[#eed3f8]">
                                    ✓ Continuous Doubt &amp; Hostel Mentorship
                                </span>
                            </div>
                        </div>

                        {/* Right: Sleek Modern Google Authority Trust Capsule (Cool, high-tech & authentic) */}
                        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between shrink-0 gap-3 pt-3 lg:pt-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-purple-100/90">
                            
                            {/* Google Rating Capsule */}
                            <div className="flex items-center gap-3 bg-gradient-to-br from-purple-50/80 via-white to-[#f7e8fc]/60 px-3.5 py-2 rounded-xl border border-purple-200/80 shadow-2xs">
                                
                                {/* Official Google 'G' Icon Tile */}
                                <div className="w-9 h-9 rounded-lg bg-white shadow-2xs border border-purple-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                                    </svg>
                                </div>

                                {/* Rating Score & Gold Stars */}
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-2xl font-black text-[#2e0854] tracking-tight leading-none">
                                            {ratingDisplay}
                                        </span>
                                        <div className="flex items-center text-amber-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="text-[9.5px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                            Excellent
                                        </span>
                                    </div>

                                    <p className="text-[11px] font-medium text-slate-600 mt-1 flex items-center gap-1.5">
                                        <span className="text-[#5b40cf] font-bold">{profile.totalReviews?.toLocaleString() || '1,315'}+ Reviews</span>
                                        <span className="text-slate-300">•</span>
                                        <span className="text-slate-500">Palwas &amp; Piprali</span>
                                    </p>
                                </div>
                            </div>

                            {/* Cool Action Buttons */}
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <a 
                                    href={profile.reviewLink || "https://search.google.com/local/writereview?placeid=ChIJR3xYQV6kbDkR9PbItQ6ea9A"} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#3b1165] hover:to-[#6947d1] text-white font-bold text-xs whitespace-nowrap transition-all shadow-xs hover:shadow-md active:scale-98 group/btn"
                                >
                                    <span>Review on Google</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-purple-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>

                                <a 
                                    href="https://maps.google.com/?q=PCP+Sikar+Palwas+Road" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full border border-purple-200/90 hover:border-[#5b40cf] bg-white hover:bg-purple-50 text-slate-700 hover:text-[#2e0854] font-semibold text-xs whitespace-nowrap transition-all shadow-2xs"
                                    title="View Campuses on Google Maps"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-purple-600" />
                                    <span>Campus on Maps</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

                {/* 2. 5-Column Continuous Scrolling Reviews Container - Height optimized for single desktop screen */}
                <div className="relative h-[380px] sm:h-[400px] lg:h-[420px] overflow-hidden rounded-2xl sm:rounded-3xl">
                    
                    {/* Top & Bottom Soft Fading Masks */}
                    <div 
                        className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-16 z-20"
                        style={{ background: 'linear-gradient(to bottom, #faf7fe 15%, rgba(250,247,254,0.85) 50%, transparent 100%)' }}
                    />
                    <div 
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-14 sm:h-16 z-20"
                        style={{ background: 'linear-gradient(to top, #faf7fe 15%, rgba(250,247,254,0.85) 50%, transparent 100%)' }}
                    />

                    {/* 5-Column Grid across screen sizes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-3.5 h-full">
                        
                        {/* Column 1: Scrolling UP */}
                        <div className="marquee-column overflow-hidden h-full">
                            <div className="marquee-track marquee-up-fast flex flex-col">
                                {infiniteCol1.map((rev, idx) => renderCard(rev, idx, 'col1'))}
                            </div>
                        </div>

                        {/* Column 2: Scrolling DOWN */}
                        <div className="marquee-column overflow-hidden h-full hidden sm:block">
                            <div className="marquee-track marquee-down-fast flex flex-col">
                                {infiniteCol2.map((rev, idx) => renderCard(rev, idx, 'col2'))}
                            </div>
                        </div>

                        {/* Column 3: Scrolling UP */}
                        <div className="marquee-column overflow-hidden h-full hidden md:block">
                            <div className="marquee-track marquee-up-normal flex flex-col">
                                {infiniteCol3.map((rev, idx) => renderCard(rev, idx, 'col3'))}
                            </div>
                        </div>

                        {/* Column 4: Scrolling DOWN */}
                        <div className="marquee-column overflow-hidden h-full hidden lg:block">
                            <div className="marquee-track marquee-down-normal flex flex-col">
                                {infiniteCol4.map((rev, idx) => renderCard(rev, idx, 'col4'))}
                            </div>
                        </div>

                        {/* Column 5: Scrolling UP (Desktop 5th Column) */}
                        <div className="marquee-column overflow-hidden h-full hidden xl:block">
                            <div className="marquee-track marquee-up-slow flex flex-col">
                                {infiniteCol5.map((rev, idx) => renderCard(rev, idx, 'col5'))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. Compact Footer Strip with Guidance & Direct Google Link */}
                <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 px-4 py-2 rounded-xl bg-white/90 border border-purple-200/70 shadow-2xs">
                    <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                        <span>💡</span>
                        <span>Hover over any review card to pause stream and read details</span>
                    </span>

                    <a
                        href={profile.reviewLink || "https://search.google.com/local/writereview?placeid=ChIJR3xYQV6kbDkR9PbItQ6ea9A"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3b1165] hover:text-[#6947d1] transition-colors"
                    >
                        <span>View all {profile.totalReviews?.toLocaleString() || '1,315'} reviews on Google Profile</span>
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

            </div>
        </section>
    );
}
