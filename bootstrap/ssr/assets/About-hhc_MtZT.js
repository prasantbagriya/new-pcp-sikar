import { n as GlobalNavbar } from "./GlobalNavbar-Cn7h43Re.js";
import { t as BlogFooter } from "./BlogFooter-BCC4IHxH.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Award, BadgeCheck, BookOpen, Building2, Check, CheckCircle2, ChevronRight, MapPin, Medal, MessageSquare, Phone, Quote, ShieldCheck, Sparkles, Target, Trophy, Users } from "lucide-react";
//#region resources/js/Pages/Static/About.jsx
function About({ meta }) {
	const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
	const stats = [
		{
			label: "Academic Legacy",
			value: "25+ Years",
			sub: "Since 1999 in Rajasthan"
		},
		{
			label: "Campus Area",
			value: "100+ Acres",
			sub: "Fully Integrated Residential HQ"
		},
		{
			label: "NEET UG Benchmark",
			value: "AIR 1",
			sub: "National Rank 1 Pedagogy"
		},
		{
			label: "Selections Produced",
			value: "15,000+",
			sub: "MBBS & Top IIT/NIT Seats"
		},
		{
			label: "Daily Faculty Support",
			value: "12 Hours",
			sub: "Continuous Doubt Desks"
		}
	];
	const pillars = [
		{
			icon: Target,
			title: "Zero-Leakage Daily Routine",
			desc: "Every hour from 6:00 AM to 10:30 PM is synchronized between classroom teaching, compulsory supervised self-study, and immediate faculty doubt resolution without study lag.",
			badge: "AIR-1 Engine",
			color: "from-purple-500/10 to-indigo-500/10 text-[#5b40cf]"
		},
		{
			icon: Users,
			title: "100% In-House AIIMS & IITian Faculty",
			desc: "Over 250+ permanent full-time faculty members. No visiting teachers, no midterm faculty switches. Every teacher resides in Sikar and is accessible to students daily.",
			badge: "Permanent Mentors",
			color: "from-amber-500/10 to-orange-500/10 text-amber-600"
		},
		{
			icon: ShieldCheck,
			title: "Care-First Residential System",
			desc: "Dedicated boy’s & girl’s campuses with biometric tracking, hygienic food cooked in modern institutional kitchens, CCTV security, wardens, and zero mobile phone distractions.",
			badge: "Safe & Disciplined",
			color: "from-emerald-500/10 to-teal-500/10 text-emerald-600"
		},
		{
			icon: Award,
			title: "P-SAT ₹108+ Crore Scholarships",
			desc: "Every talented student deserves world-class preparation. Through the Prince Olympiad & P-SAT National Talent Exam, deserving students receive up to 100% tuition & hostel waivers.",
			badge: "Merit-First",
			color: "from-rose-500/10 to-pink-500/10 text-rose-600"
		}
	];
	const campuses = [
		{
			name: "PCP Palwas Residential Headquarters",
			location: "Palwas Road, Sikar (Rajasthan)",
			area: "100+ Acre Mega Campus",
			features: [
				"Residential Hostels",
				"Central Library",
				"Sports Complex",
				"Auditorium"
			],
			phone: "9610-89-2222",
			badge: "Main Headquarters"
		},
		{
			name: "PCP Piprali Road Classroom Hub",
			location: "Piprali Road, Sikar (Rajasthan)",
			area: "City Day-Boarding Campus",
			features: [
				"Smart Classrooms",
				"Doubt Desks",
				"Test Centers",
				"Counseling Cell"
			],
			phone: "9610-53-2222",
			badge: "Classroom Hub"
		},
		{
			name: "PCP Jaipur Gopalpura Bypass Center",
			location: "Balaji Tower, Near Ridhi Sidhi Circle, Gopalpura, Jaipur",
			area: "State-of-the-Art Metro Center",
			features: [
				"Target Dropper Batches",
				"Digital Testing Lab",
				"AIR Faculty Cell"
			],
			phone: "9610-57-2222",
			badge: "New Launch 2026"
		}
	];
	const leadership = [{
		name: "Mr. Jogendra Sunda",
		role: "Founder & Director",
		org: "Prince Eduhub",
		qualification: "Visionary Educational Pioneer & Institutional Architect",
		image: `${basePath}/uploads/jogendra_sunda_director.jpg`,
		badge: "Founding Director",
		accent: "from-[#2e0854] to-[#5b40cf]",
		badgeColor: "bg-purple-100 text-[#2e0854] border-purple-200",
		quote: "In 1997, our goal was simple yet audacious: to prove that a student from rural Rajasthan could access the exact same world-class discipline, infrastructure, and teaching as any metropolitan center.",
		bio: "Starting with a humble plot and just 35 students in 1997, Mr. Jogendra Sunda spearheaded the transformation of Sikar into North India’s premier education hub. His unwavering insistence on student discipline, wholesome residential boarding, and Olympic-grade sports infrastructure laid the bedrock of Prince Eduhub.",
		achievements: [
			{
				title: "35 to 35,000+ Students",
				desc: "Scaled Prince Eduhub from a single 35-student school into a 100+ acre mega-conglomerate across schools, colleges, and national coaching wings."
			},
			{
				title: "Pioneered Residential Coaching",
				desc: "Established Rajasthan’s most secure, distraction-free residential hostels with biometric monitoring and dedicated pastoral care."
			},
			{
				title: "50,000+ Alumni Impact",
				desc: "Empowered rural and semi-urban students to become top Doctors, IIT engineers, NDA defense officers, and civil servants."
			}
		],
		awards: [
			"Best Residential Campus Award",
			"National Education Leadership Icon",
			"State Excellence in Student Welfare"
		]
	}, {
		name: "Dr. Piyush Sunda",
		role: "Chairman",
		org: "Prince Eduhub & PCP Sikar",
		qualification: "MBBS (SMS Medical College, Jaipur) • MD / PG (SP Medical College, Bikaner)",
		image: `${basePath}/uploads/piyush_sunda_chairman.jpg`,
		badge: "Academic Chairman",
		accent: "from-[#5b40cf] to-[#2e0854]",
		badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
		quote: "As a medical doctor, I saw coaching aspirants struggling with immense psychological anxiety and isolation. At PCP, we eliminated fear and built a 12-hour continuous faculty doubt ecosystem where students learn with conviction.",
		bio: "A pediatrician by qualification who transitioned from clinical medicine to education, Dr. Piyush Sunda engineered PCP Sikar’s signature academic framework. Under his chairmanship, PCP achieved historic All-India Rank 1 results in NEET-UG and established India’s largest talent hunt scholarships.",
		achievements: [
			{
				title: "AIR-1 NEET & IIT Pedagogy",
				desc: "Designed the zero-leakage academic schedule and 12-hour daily faculty doubt counter system that produced National Rank 1."
			},
			{
				title: "₹108+ Cr P-SAT Scholarships",
				desc: "Founded Prince Olympiad & P-SAT talent exams, awarding over ₹108+ Crore scholarships to meritorious aspirants across India."
			},
			{
				title: "YouTube Silver Play Button",
				desc: "Honored by YouTube for digital educational reach, creating over 1,400+ free academic guidance & motivational lectures."
			}
		],
		awards: [
			"Centre of Excellence Award",
			"Healthcare-to-Education Innovator Honor",
			"YouTube Creator Silver Play Button"
		]
	}];
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#faf7fe] dark:bg-[#070b14] min-h-screen text-slate-900 dark:text-white font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854] flex flex-col transition-colors duration-300",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: meta?.title || "About Us | PCP Sikar & Sikar Education Hub" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: meta?.description || "Learn about PCP Sikar & Sikar Education Hub — Rajasthan’s premier coaching institute with 25+ years of legacy."
			})] }),
			/* @__PURE__ */ jsx(GlobalNavbar, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-grow",
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: "relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#2e0854] via-[#1a0533] to-[#120120] text-white",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 w-96 h-96 bg-[#5b40cf]/30 rounded-full blur-3xl pointer-events-none" }),
							/* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center",
								children: [
									/* @__PURE__ */ jsxs("nav", {
										className: "inline-flex items-center gap-2 text-xs text-purple-200/80 mb-6 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10",
										children: [
											/* @__PURE__ */ jsx(Link, {
												href: `${basePath}/`,
												className: "hover:text-amber-300 transition-colors",
												children: "Home"
											}),
											/* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 text-purple-300" }),
											/* @__PURE__ */ jsx("span", {
												className: "text-white font-bold",
												children: "About Us"
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex justify-center mb-6",
										children: /* @__PURE__ */ jsxs("div", {
											className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/30 to-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-white/15 backdrop-blur-md shadow-inner",
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ jsx("span", { children: "25+ Years of Academic Excellence & Trust" })]
										})
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "text-3xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-snug sm:leading-tight mb-6 max-w-4xl mx-auto",
										children: ["Transforming Aspirations Into ", /* @__PURE__ */ jsx("span", {
											className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-200 to-white",
											children: "National Ranks."
										})]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-3xl mx-auto font-normal mb-10",
										children: [
											"PCP Sikar (Prince Career Pioneer), an integral division of ",
											/* @__PURE__ */ jsx("strong", { children: "Prince Eduhub" }),
											", is North India’s premier residential coaching powerhouse for ",
											/* @__PURE__ */ jsx("strong", { children: "NEET-UG, IIT-JEE, and Pre-Foundation" }),
											". We pair top-tier faculties with an uncompromising daily routine, residential care, and authentic academic transparency."
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-lg mx-auto",
										children: [/* @__PURE__ */ jsxs(Link, {
											href: `${basePath}/#courses`,
											className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-extrabold text-xs sm:text-sm px-3 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-amber-950/20 transition-all hover:scale-102 active:scale-98 no-underline text-center",
											children: [
												/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
												/* @__PURE__ */ jsx("span", {
													className: "sm:hidden",
													children: "Coaching Programs"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "hidden sm:inline",
													children: "Explore Coaching Programs"
												})
											]
										}), /* @__PURE__ */ jsxs("a", {
											href: "tel:+919610892222",
											className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all no-underline text-center",
											children: [
												/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-purple-300" }),
												/* @__PURE__ */ jsx("span", {
													className: "sm:hidden",
													children: "Call Counselor"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "hidden sm:inline",
													children: "Call: 9610-89-2222"
												})
											]
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative -mt-8 z-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5",
							children: stats.map((s, idx) => /* @__PURE__ */ jsxs("div", {
								className: "p-3 sm:p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-900/50 border border-purple-100/60 dark:border-slate-800 text-center flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-xl sm:text-2xl lg:text-3xl font-black text-[#2e0854] dark:text-purple-300 tracking-tight",
										children: s.value
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-xs font-bold text-slate-800 dark:text-slate-200 mt-1",
										children: s.label
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-[10px] text-slate-500 dark:text-slate-400 mt-0.5",
										children: s.sub
									})
								]
							}, idx))
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "py-16 sm:py-24 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base sm:text-lg",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 text-[#2e0854] text-xs font-extrabold uppercase tracking-wider border border-purple-200 shadow-2xs",
										children: [/* @__PURE__ */ jsx(Building2, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "The PCP Story & Ethos" })]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "text-2xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-normal leading-snug",
										children: "How Sikar Evolved Into India’s Most Disciplined Coaching Capital."
									}),
									/* @__PURE__ */ jsxs("p", { children: [
										"Founded in 1999 under the visionary leadership of ",
										/* @__PURE__ */ jsx("strong", { children: "Prince Eduhub" }),
										", PCP Sikar was built to solve a critical flaw in conventional coaching systems: ",
										/* @__PURE__ */ jsx("em", { children: "leaving students alone after classroom lectures" }),
										"."
									] }),
									/* @__PURE__ */ jsxs("p", { children: [
										"While other cities struggled with peer pressure, distractions, and impersonal mass batches, PCP pioneered the ",
										/* @__PURE__ */ jsx("strong", { children: "\"Integrated Residential Mentorship Model\"" }),
										". Here, teachers don't go home when lectures end—they sit with students across 12-hour doubt desks, guiding self-study, reviewing test errors, and building calm, confident exam readiness."
									] }),
									/* @__PURE__ */ jsx("div", {
										className: "p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50/50 to-white dark:bg-slate-900 border-l-4 border-[#2e0854] text-sm text-slate-800 dark:text-slate-200 font-medium",
										children: "\"Our mission is simple: to make quality competitive education accessible, transparent, and completely free from psychological stress. Every student under our care receives parent-like personal attention and faculty mentorship.\""
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "lg:col-span-5",
								children: /* @__PURE__ */ jsxs("div", {
									className: "rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#2e0854] via-[#1f0538] to-[#120120] text-white shadow-2xl relative overflow-hidden border border-purple-400/20",
									children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-[#5b40cf]/20 rounded-full blur-2xl pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
										className: "relative z-10 space-y-6",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black text-amber-300 text-lg border border-white/15",
													children: "PCP"
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
													className: "text-lg font-black text-white",
													children: "Prince Eduhub Ecosystem"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-xs text-purple-200",
													children: "Established 1999 • Rajasthan"
												})] })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "AIR 1 in NEET-UG" }), " proven systematic test frameworks"] })]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "100+ Acre Residential HQ" }), " with Olympic-standard facilities"] })]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "Pan-India Student Base" }), " across 18+ Indian states"] })]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "Jaipur Gopalpura Bypass Center" }), " launched for metro students"] })]
													})
												]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "pt-2",
												children: /* @__PURE__ */ jsxs(Link, {
													href: `${basePath}/blog`,
													className: "w-full inline-flex items-center justify-center gap-2 bg-white text-[#2e0854] hover:bg-amber-300 font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-sm no-underline",
													children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "Read Verified Coaching Comparisons" })]
												})
											})
										]
									})]
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "py-16 sm:py-24 bg-white dark:bg-[#070e1b] border-t border-purple-100/90 dark:border-slate-800",
						children: /* @__PURE__ */ jsxs("div", {
							className: "w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "text-center max-w-3xl mx-auto mb-14",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-950/60 text-[#2e0854] dark:text-purple-300 text-xs font-black uppercase tracking-wider border border-purple-200 dark:border-purple-800 shadow-2xs mb-3",
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-[#5b40cf] dark:text-purple-400" }), /* @__PURE__ */ jsx("span", { children: "Founding Leadership & Track Record" })]
										}),
										/* @__PURE__ */ jsx("h2", {
											className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#2e0854] dark:text-white tracking-normal leading-snug",
											children: "The Visionaries Behind Sikar's Educational Revolution"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3.5 leading-relaxed",
											children: "From a modest 35-student classroom in 1997 to North India’s largest integrated residential coaching conglomerate — meet the leaders who shaped the Sikar pedagogy."
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10",
									children: leadership.map((leader, idx) => /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col justify-between rounded-3xl bg-[#faf7fe] dark:bg-[#0b1329] border border-purple-100/90 dark:border-slate-800 shadow-lg shadow-purple-950/5 hover:shadow-xl transition-all duration-300 overflow-hidden",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "p-6 sm:p-8",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-purple-100 dark:border-slate-800",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "relative shrink-0",
														children: [/* @__PURE__ */ jsx("div", {
															className: "w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 shadow-md bg-purple-100/50",
															children: /* @__PURE__ */ jsx("img", {
																src: leader.image,
																alt: `${leader.name} - ${leader.role}`,
																width: "112",
																height: "112",
																loading: "lazy",
																decoding: "async",
																className: "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500",
																onError: (e) => {
																	e.currentTarget.src = basePath + "/uploads/aboutus.webp";
																}
															})
														}), /* @__PURE__ */ jsx("div", {
															className: "absolute -bottom-2 -right-1",
															children: /* @__PURE__ */ jsxs("span", {
																className: `inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border shadow-2xs ${leader.badgeColor}`,
																children: [/* @__PURE__ */ jsx(BadgeCheck, { className: "w-3 h-3 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: leader.role.split(" ")[0] })]
															})
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "space-y-1",
														children: [
															/* @__PURE__ */ jsxs("div", {
																className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#5b40cf] dark:text-purple-300",
																children: [
																	/* @__PURE__ */ jsx("span", { children: leader.role }),
																	/* @__PURE__ */ jsx("span", { children: "•" }),
																	/* @__PURE__ */ jsx("span", { children: leader.org })
																]
															}),
															/* @__PURE__ */ jsx("h3", {
																className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white tracking-normal",
																children: leader.name
															}),
															/* @__PURE__ */ jsx("p", {
																className: "text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed",
																children: leader.qualification
															})
														]
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "mt-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-[#5b40cf] shadow-2xs relative",
													children: [/* @__PURE__ */ jsx(Quote, { className: "w-6 h-6 text-purple-200 dark:text-purple-900/40 absolute top-3 right-3 pointer-events-none" }), /* @__PURE__ */ jsxs("p", {
														className: "text-xs sm:text-sm font-normal italic text-slate-700 dark:text-slate-300 leading-relaxed pr-6",
														children: [
															"\"",
															leader.quote,
															"\""
														]
													})]
												}),
												/* @__PURE__ */ jsx("p", {
													className: "mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed",
													children: leader.bio
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "mt-6 space-y-3",
													children: [/* @__PURE__ */ jsxs("h4", {
														className: "text-xs font-black uppercase tracking-wider text-[#2e0854] dark:text-purple-300 flex items-center gap-1.5",
														children: [/* @__PURE__ */ jsx(Trophy, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "Key Milestones & Contributions" })]
													}), /* @__PURE__ */ jsx("div", {
														className: "space-y-2.5",
														children: leader.achievements.map((ach, achIdx) => /* @__PURE__ */ jsxs("div", {
															className: "flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300",
															children: [/* @__PURE__ */ jsx("div", {
																className: "w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center shrink-0 mt-0.5",
																children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 text-[#5b40cf] dark:text-purple-300" })
															}), /* @__PURE__ */ jsxs("div", { children: [
																/* @__PURE__ */ jsxs("strong", {
																	className: "text-slate-900 dark:text-white font-bold",
																	children: [ach.title, ":"]
																}),
																" ",
																/* @__PURE__ */ jsx("span", {
																	className: "text-slate-600 dark:text-slate-300 font-normal",
																	children: ach.desc
																})
															] })]
														}, achIdx))
													})]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "p-4 sm:p-5 bg-white/70 dark:bg-slate-900/80 border-t border-purple-100 dark:border-slate-800",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(Award, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "Honors & Recognitions" })]
											}), /* @__PURE__ */ jsx("div", {
												className: "flex flex-wrap gap-2",
												children: leader.awards.map((award, awIdx) => /* @__PURE__ */ jsxs("span", {
													className: "inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-[#2e0854] dark:text-purple-200 border border-purple-100 dark:border-purple-900/60",
													children: [/* @__PURE__ */ jsx(Medal, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: award })]
												}, awIdx))
											})]
										})]
									}, idx))
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#2e0854] via-[#1a0533] to-[#120120] text-white shadow-xl border border-purple-400/20",
									children: /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center",
										children: [
											{
												value: "29 Years",
												title: "Unbroken Legacy",
												desc: "Pioneering Rajasthan education since 1997."
											},
											{
												value: "35,000+",
												title: "Active Students",
												desc: "Studying across Prince Eduhub campuses."
											},
											{
												value: "₹108+ Cr",
												title: "P-SAT Awards",
												desc: "Scholarships granted to deserving talent."
											},
											{
												value: "AIR 1",
												title: "National Benchmark",
												desc: "Produced Top All-India NEET & JEE Ranks."
											}
										].map((imp, impIdx) => /* @__PURE__ */ jsxs("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "text-2xl sm:text-3xl font-black text-amber-300 tracking-tight",
													children: imp.value
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-xs sm:text-sm font-bold text-white",
													children: imp.title
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-[11px] text-purple-200/80 leading-snug",
													children: imp.desc
												})
											]
										}, impIdx))
									})
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "py-16 sm:py-20 bg-white dark:bg-[#070e1b] border-y border-purple-100/90 dark:border-slate-800",
						children: /* @__PURE__ */ jsxs("div", {
							className: "w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "text-center max-w-2xl mx-auto mb-14",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2",
										children: "Why Students Succeed Here"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-normal leading-snug",
										children: "Four Pillars That Drive All-India Selections"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3",
										children: "From foundation building in Class 9-10 to intensive Class 12 Dropper batches, our scientific framework ensures no concept is left unclear."
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8",
								children: pillars.map((pillar, idx) => {
									const IconComponent = pillar.icon;
									return /* @__PURE__ */ jsx("div", {
										className: "p-6 sm:p-8 rounded-3xl bg-[#faf7fe] dark:bg-slate-900 border border-purple-100/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between",
										children: /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between gap-2 mb-4",
												children: [/* @__PURE__ */ jsx("div", {
													className: `w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center border border-purple-200/50`,
													children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6" })
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-purple-100 text-[#2e0854] dark:text-purple-300 shadow-2xs",
													children: pillar.badge
												})]
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-xl font-bold text-[#2e0854] dark:text-white mb-2.5",
												children: pillar.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal",
												children: pillar.desc
											})
										] })
									}, idx);
								})
							})]
						})
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "py-16 sm:py-24 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-center max-w-2xl mx-auto mb-14",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2",
									children: "Infrastructure & Access"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-normal leading-snug",
									children: "World-Class Campuses Across Rajasthan"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3",
									children: "Direct connectivity by rail and road. Visit any campus for immediate admission counseling and facility tours."
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-6",
							children: campuses.map((c, idx) => /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-[#5b40cf] border border-purple-100 mb-4",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3" }), /* @__PURE__ */ jsx("span", { children: c.badge })]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-lg font-black text-[#2e0854] dark:text-white mb-1.5 leading-snug",
										children: c.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium",
										children: c.location
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-xs font-bold text-[#5b40cf] bg-purple-50/50 dark:bg-purple-950/30 p-2 rounded-xl mb-4 border border-purple-100/60",
										children: c.area
									}),
									/* @__PURE__ */ jsx("div", {
										className: "space-y-1.5 mb-6",
										children: c.features.map((f, fIdx) => /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ jsx("span", { children: f })]
										}, fIdx))
									})
								] }), /* @__PURE__ */ jsx("div", {
									className: "pt-4 border-t border-purple-50 dark:border-slate-800",
									children: /* @__PURE__ */ jsxs("a", {
										href: `tel:+91${c.phone.replace(/[^0-9]/g, "")}`,
										className: "inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-[#2e0854] text-[#2e0854] hover:text-white font-bold text-xs border border-purple-200 transition-all no-underline",
										children: [/* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsxs("span", { children: ["Helpline: ", c.phone] })]
									})
								})]
							}, idx))
						})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "pb-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
						children: /* @__PURE__ */ jsxs("div", {
							className: "p-7 sm:p-10 bg-gradient-to-br from-purple-50/90 via-indigo-50/50 to-amber-50/40 dark:from-[#150e26] dark:via-[#1a1233] dark:to-[#0f172a] rounded-3xl border border-purple-200/80 dark:border-purple-800/50 shadow-lg shadow-purple-950/5 relative overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-br from-purple-300/25 to-pink-300/20 rounded-full blur-3xl pointer-events-none" }),
								/* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -left-16 w-72 h-72 bg-gradient-to-tr from-indigo-300/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none" }),
								/* @__PURE__ */ jsxs("div", {
									className: "relative z-10 max-w-2xl",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-950/60 text-[#2e0854] dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-purple-200/80 shadow-2xs",
											children: [
												/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-500 fill-amber-400" }),
												/* @__PURE__ */ jsx("span", { children: "Admissions Session 2026-27 Open" }),
												/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" })
											]
										}),
										/* @__PURE__ */ jsx("h2", {
											className: "text-2xl sm:text-3xl font-black text-[#2e0854] dark:text-white mb-3 tracking-normal leading-snug",
											children: "Ready to Begin Your Medical or Engineering Journey?"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal",
											children: "Connect with senior counselors at PCP Sikar for course guidance, hostel allocation, and scholarship concessions via the P-SAT National Talent Exam."
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-row items-center gap-2 sm:gap-3.5 w-full",
											children: [/* @__PURE__ */ jsxs(Link, {
												href: `${basePath}/#courses`,
												className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#2e0854] hover:bg-[#451378] text-white font-bold py-2.5 sm:py-3 px-2 sm:px-6 rounded-lg shadow-md shadow-purple-950/20 hover:shadow-lg transition-all text-xs sm:text-sm whitespace-nowrap no-underline active:scale-98 text-center",
												children: [
													/* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" }),
													/* @__PURE__ */ jsx("span", {
														className: "hidden sm:inline whitespace-nowrap",
														children: "Explore All Educational Programs"
													}),
													/* @__PURE__ */ jsx("span", {
														className: "sm:hidden whitespace-nowrap",
														children: "Explore Programs"
													})
												]
											}), /* @__PURE__ */ jsxs("a", {
												href: "https://api.whatsapp.com/send?phone=919610892222&text=Hello%20PCP%20Counselor,%20I%20want%20information%20about%20Admissions",
												target: "_blank",
												rel: "noreferrer",
												className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 sm:py-3 px-2 sm:px-6 rounded-lg shadow-md shadow-emerald-900/15 hover:shadow-lg transition-all text-xs sm:text-sm whitespace-nowrap no-underline active:scale-98 text-center",
												children: [
													/* @__PURE__ */ jsx(MessageSquare, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-white text-[#25D366]" }),
													/* @__PURE__ */ jsx("span", {
														className: "hidden sm:inline whitespace-nowrap",
														children: "WhatsApp Admission Desk"
													}),
													/* @__PURE__ */ jsx("span", {
														className: "sm:hidden whitespace-nowrap",
														children: "WhatsApp Desk"
													})
												]
											})]
										})
									]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(BlogFooter, {})
		]
	});
}
//#endregion
export { About as default };
