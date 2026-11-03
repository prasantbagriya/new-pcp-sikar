import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, Bell, BookOpen, ChevronLeft, ChevronRight, Clock, ExternalLink, Flame, Sparkles } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpBlogUpdatesSection.jsx
function PcpBlogUpdatesSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [progress, setProgress] = useState(0);
	const SLIDE_DURATION = 5e3;
	const progressIntervalRef = useRef(null);
	const featuredStories = [
		{
			id: 1,
			tag: "NEET Masterclass",
			tagColor: "bg-purple-100 text-[#2e0854] border-purple-200",
			title: "How Devesh Joshi Scored 720/720 in NEET-UG: Daily Revision Blueprint & Error Elimination Log",
			excerpt: "An in-depth breakdown of NCERT line-by-line active recall, 3-tier biology diagrams, and how utilizing PCP Sikar’s 12-hour continuous faculty doubt desk converted weak areas into 100 percentile.",
			image: "/uploads/pcp/theme_toppers/devesh_joshi.jpg",
			readTime: "8 min read",
			date: "Oct 28, 2026",
			author: "Dr. M.R. Poonia",
			role: "Chairman, Prince Eduhub",
			link: "/blog/devesh-joshi-neet-720-strategy",
			stats: "AIR 1 (Classroom)"
		},
		{
			id: 2,
			tag: "National Scholarship",
			tagColor: "bg-amber-100 text-amber-950 border-amber-200",
			title: "P-SAT 2026: North India’s ₹108+ Crore Scholarship Exam Syllabus, Test Centers & 100% Fee Waivers",
			excerpt: "Everything parents and students must know about North India’s largest pre-selection talent exam covering Class 5th to 12th & Target Droppers. Discover how to secure up to 100% tuition + residential fee waiver.",
			image: "/uploads/pcp/Olympiad.jpg",
			readTime: "6 min read",
			date: "Oct 26, 2026",
			author: "Academic Directorate",
			role: "P-SAT Examination Board",
			link: "/psat-2026-scholarship-guide",
			stats: "₹108 Cr Scholarship Pool"
		},
		{
			id: 3,
			tag: "Ecosystem Analysis",
			tagColor: "bg-purple-100 text-[#2e0854] border-purple-200",
			title: "Why 1 in 4 Serious Aspirants is Choosing Sikar Over Kota: The Distraction-Free Residential Culture",
			excerpt: "A data-backed comparative study on student mental well-being, mobile-free residential hostels, round-the-clock mentor supervision, and verified classroom selection ratios that have made Sikar India’s new coaching capital.",
			image: "/uploads/pcp_campus_building.png",
			readTime: "9 min read",
			date: "Oct 22, 2026",
			author: "Education Research Cell",
			role: "PCP Academic Forum",
			link: "/blog/why-sikar-is-beating-kota",
			stats: "1,000+ MBBS Selections"
		},
		{
			id: 4,
			tag: "JEE Advanced Edge",
			tagColor: "bg-amber-100 text-amber-950 border-amber-200",
			title: "JEE Advanced Physics: Cracking Multi-Concept Rotational & Electrodynamics Questions with Veteran HODs",
			excerpt: "Subject HODs analyze the previous 5 years of JEE Advanced pattern shifts and present a high-yield formula sheet with solved step-by-step illustrations for aspiring IITians.",
			image: "/uploads/pcp/slider/JEE-ADVANCED-2025.jpg",
			readTime: "7 min read",
			date: "Oct 18, 2026",
			author: "Er. O.P. Choudhary",
			role: "HOD Physics, PCP Sikar",
			link: "/blog/jee-advanced-physics-mastery",
			stats: "AIR 225 Sikar Topper"
		}
	];
	useEffect(() => {
		if (isHovered) {
			if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
			return;
		}
		const step = 50;
		const increment = step / SLIDE_DURATION * 100;
		progressIntervalRef.current = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					setCurrentSlide((curr) => (curr + 1) % featuredStories.length);
					return 0;
				}
				return prev + increment;
			});
		}, step);
		return () => {
			if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
		};
	}, [
		isHovered,
		currentSlide,
		featuredStories.length
	]);
	const handlePrevSlide = () => {
		setProgress(0);
		setCurrentSlide((curr) => (curr - 1 + featuredStories.length) % featuredStories.length);
	};
	const handleNextSlide = () => {
		setProgress(0);
		setCurrentSlide((curr) => (curr + 1) % featuredStories.length);
	};
	const liveBulletins = [
		{
			id: "b1",
			category: "EXAM ALERT",
			badgeClass: "bg-rose-50 text-rose-800 border-rose-200 ring-rose-500/10",
			dotColor: "bg-rose-500",
			time: "12 mins ago",
			title: "NTA NEET-UG 2026 Advisory Released",
			desc: "Official notification on category certificate deadlines (OBC-NCL / EWS) and document upload specifications. Download PCP guidance checklist.",
			linkText: "Download Guidelines PDF",
			linkHref: "#neet-notice",
			isHot: true
		},
		{
			id: "b2",
			category: "ADMISSIONS OPEN",
			badgeClass: "bg-purple-50 text-[#2e0854] border-purple-200 ring-purple-500/10",
			dotColor: "bg-[#5b40cf]",
			time: "1 hour ago",
			title: "Target Dropper Batch 2026-27 (NEET & JEE)",
			desc: "Phase-1 registrations now active. Early-bird residential hostel rooms allocated on priority merit basis. Seats strictly limited to 60 students per section.",
			linkText: "Apply Online for Target Batch",
			linkHref: "#admissions-target",
			isHot: true
		},
		{
			id: "b3",
			category: "P-SAT UPDATE",
			badgeClass: "bg-amber-50 text-amber-900 border-amber-200 ring-amber-500/10",
			dotColor: "bg-[#f59e0b]",
			time: "Today, 10:45 AM",
			title: "P-SAT Phase 2 Offline Admit Cards Out",
			desc: "Students can now download roll numbers and check allotted test center locations across 350+ district venues in Rajasthan, Haryana, UP, and Bihar.",
			linkText: "Download P-SAT Hall Ticket",
			linkHref: "#psat-admit-card",
			isHot: false
		},
		{
			id: "b4",
			category: "ACADEMIC NOTICE",
			badgeClass: "bg-purple-50 text-[#2e0854] border-purple-200 ring-purple-500/10",
			dotColor: "bg-[#5b40cf]",
			time: "Today, 08:30 AM",
			title: "Bi-Weekly CBT Minor Test 04 Detailed Syllabus",
			desc: "CBT Test 04 for 11th & 12th NEET/JEE scheduled for this Sunday. Physics (Rotational Dynamics), Chemistry (Thermodynamics) question blueprints live.",
			linkText: "View Syllabus Breakdown",
			linkHref: "#minor-test-04",
			isHot: false
		},
		{
			id: "b5",
			category: "TOPPER HONOUR",
			badgeClass: "bg-amber-50 text-amber-900 border-amber-200 ring-amber-500/10",
			dotColor: "bg-[#f59e0b]",
			time: "Yesterday",
			title: "AIR 225 JEE Adv Vivek Gupta Awarded ₹11 Lakh",
			desc: "Grand felicitation celebration at Palwas Road Mega Campus honoring Vivek Gupta with a ₹11,00,000 cash incentive and traditional turban honor.",
			linkText: "Watch Felicitation Ceremony",
			linkHref: "#topper-felicitation",
			isHot: false
		},
		{
			id: "b6",
			category: "HOSTEL & CAMPUS",
			badgeClass: "bg-purple-50 text-[#2e0854] border-purple-200 ring-purple-500/10",
			dotColor: "bg-[#5b40cf]",
			time: "Oct 29, 2026",
			title: "Parent-Teacher Meeting (PTM) & Digital Cards",
			desc: "Residential campus quarterly PTM scheduled for November 9th. Outstation parents can access live biometric attendance and test logs on the Prince app.",
			linkText: "Access Parent Portal",
			linkHref: "#parent-portal",
			isHot: false
		},
		{
			id: "b7",
			category: "PRE-FOUNDATION",
			badgeClass: "bg-amber-50 text-amber-900 border-amber-200 ring-amber-500/10",
			dotColor: "bg-[#f59e0b]",
			time: "Oct 28, 2026",
			title: "National Science Olympiad (NSO) Special Camp",
			desc: "Daily 2-hour problem-solving camp launched for Class 8, 9 & 10 aspirants preparing for Stage-1 Olympiad and NTSE benchmarks.",
			linkText: "Check Workshop Schedule",
			linkHref: "#pre-foundation-nso",
			isHot: false
		}
	];
	const infiniteBulletins = [...liveBulletins, ...liveBulletins];
	return /* @__PURE__ */ jsxs("section", {
		id: "pcp-intelligence-newsroom",
		style: {
			contentVisibility: "visible",
			contain: "none"
		},
		className: "w-full relative py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#faf7fe] via-white to-[#faf7fe] border-b border-purple-100/70 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes pulseTickerUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .bulletin-marquee-track {
                    animation: pulseTickerUp 34s linear infinite;
                    will-change: transform;
                }
                .bulletin-marquee-container:hover .bulletin-marquee-track {
                    animation-play-state: paused !important;
                }
            ` }),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 pointer-events-none overflow-hidden",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute top-10 left-1/4 w-[420px] h-[320px] bg-purple-200/20 rounded-full blur-[110px]" }), /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-[460px] h-[340px] bg-amber-100/25 rounded-full blur-[120px]" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-4xl",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-purple-900 text-xs font-bold tracking-wide uppercase shadow-2xs mb-2",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "PCP Academic Newsroom & Live Updates" })]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-extrabold text-[#2e0854] tracking-tight leading-tight",
								children: ["Educational Insights & ", /* @__PURE__ */ jsx("span", {
									className: "bg-gradient-to-r from-[#5b40cf] via-[#7c3aed] to-[#f59e0b] bg-clip-text text-transparent",
									children: "Live Campus Pulse"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1.5 text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-3xl",
								children: "Explore in-depth ranker preparation blueprints and academic guides on the left, while tracking continuous real-time exam circulars, admission alerts, and scholarship schedules on the right."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "shrink-0 flex items-center gap-3",
						children: /* @__PURE__ */ jsxs("a", {
							href: "/blog",
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-purple-200 text-[#3b1165] font-semibold text-xs sm:text-sm hover:bg-[#3b1165] hover:text-white hover:border-[#3b1165] shadow-2xs transition-all duration-200 group",
							children: [/* @__PURE__ */ jsx("span", { children: "Browse All 48+ Articles & Updates" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-[#5b40cf] group-hover:text-white group-hover:translate-x-1 transition-transform" })]
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex-1 min-w-0 flex flex-col",
						onMouseEnter: () => setIsHovered(true),
						onMouseLeave: () => setIsHovered(false),
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative rounded-2xl overflow-hidden bg-[#2e0854] border border-purple-200/80 shadow-lg group h-[470px] sm:h-[500px] lg:h-[520px] flex flex-col justify-end p-6 sm:p-8 lg:p-10 select-none",
							children: [
								/* @__PURE__ */ jsx("div", {
									style: { width: `${progress}%` },
									className: "absolute top-0 left-0 h-1 bg-gradient-to-r from-[#5b40cf] via-[#7c3aed] to-[#ffc107] transition-all duration-75 z-30"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute inset-0 z-0",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: featuredStories[currentSlide].image,
											alt: featuredStories[currentSlide].title,
											width: "800",
											height: "450",
											loading: "lazy",
											decoding: "async",
											className: "w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2e0854] via-[#2e0854]/85 to-transparent" }),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#2e0854]/95 via-[#2e0854]/65 to-transparent" })
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2.5 pointer-events-auto",
										children: [/* @__PURE__ */ jsxs("span", {
											className: `inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border backdrop-blur-md ${featuredStories[currentSlide].tagColor} bg-white/95 shadow-xs`,
											children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: featuredStories[currentSlide].tag })]
										}), /* @__PURE__ */ jsxs("span", {
											className: "hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 bg-[#2e0854]/75 backdrop-blur-md border border-purple-300/30",
											children: [/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-[#ffc107]" }), /* @__PURE__ */ jsx("span", { children: featuredStories[currentSlide].readTime })]
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 bg-[#2e0854]/85 backdrop-blur-md p-1.5 rounded-full border border-purple-300/30 pointer-events-auto shadow-md",
										children: [
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: handlePrevSlide,
												"aria-label": "Previous Slide",
												className: "w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer",
												children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "text-xs font-bold text-white px-2.5 tracking-wider font-mono",
												children: [
													"0",
													currentSlide + 1,
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "text-white/40",
														children: "/"
													}),
													" 0",
													featuredStories.length
												]
											}),
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: handleNextSlide,
												"aria-label": "Next Slide",
												className: "w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer",
												children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative z-10 flex flex-col gap-3 max-w-3xl",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-md bg-[#ffc107] text-[#2e0854] text-xs font-black tracking-wide uppercase shadow-xs",
											children: [/* @__PURE__ */ jsx(Award, { className: "w-3.5 h-3.5 text-[#2e0854]" }), /* @__PURE__ */ jsx("span", { children: featuredStories[currentSlide].stats })]
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug drop-shadow-sm line-clamp-2",
											children: featuredStories[currentSlide].title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs sm:text-sm lg:text-base text-purple-100/90 leading-relaxed line-clamp-2 sm:line-clamp-3",
											children: featuredStories[currentSlide].excerpt
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "pt-3 sm:pt-4 border-t border-purple-300/20 flex items-center justify-between gap-4 flex-wrap",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-9 h-9 rounded-full bg-gradient-to-tr from-[#5b40cf] to-[#7c3aed] border border-purple-300/40 flex items-center justify-center text-white font-bold text-sm shadow-xs",
													children: featuredStories[currentSlide].author.charAt(0)
												}), /* @__PURE__ */ jsxs("div", {
													className: "flex flex-col",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-xs sm:text-sm font-bold text-white leading-none",
														children: featuredStories[currentSlide].author
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[11px] text-purple-200/80 leading-tight mt-1",
														children: [
															featuredStories[currentSlide].role,
															" • ",
															featuredStories[currentSlide].date
														]
													})]
												})]
											}), /* @__PURE__ */ jsxs("a", {
												href: featuredStories[currentSlide].link,
												className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ffc107] hover:bg-white text-[#2e0854] font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200",
												children: [/* @__PURE__ */ jsx("span", { children: "Read Full Story" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-[#2e0854]" })]
											})]
										})
									]
								})
							]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "w-full lg:w-[380px] xl:w-[410px] shrink-0 flex flex-col",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative rounded-2xl border border-purple-200/90 bg-white shadow-sm flex flex-col h-[470px] sm:h-[500px] lg:h-[520px] overflow-hidden",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "px-3.5 py-2 sm:px-4 sm:py-2.5 border-b border-purple-100 bg-gradient-to-r from-purple-50/80 via-white to-purple-50/40 flex items-center justify-between shrink-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 sm:gap-2.5",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "relative flex h-2.5 w-2.5 shrink-0",
											children: [/* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" })]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col justify-center",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "text-xs sm:text-[12.5px] font-black text-[#2e0854] uppercase tracking-wide leading-none m-0 p-0",
												children: "Live PCP Bulletins & Alerts"
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-none mt-1 m-0 p-0",
												children: "Official circulars, exam dates & admission notices"
											})]
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 text-[#2e0854] border border-purple-200 text-[10px] font-bold shrink-0",
										children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#5b40cf] animate-pulse" }), /* @__PURE__ */ jsx("span", { children: "STREAM ACTIVE" })]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "bulletin-marquee-container relative flex-1 min-h-0 overflow-hidden px-4 sm:px-5 py-2",
									children: [
										/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" }),
										/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" }),
										/* @__PURE__ */ jsx("div", {
											className: "bulletin-marquee-track flex flex-col gap-3 py-1",
											children: infiniteBulletins.map((item, idx) => /* @__PURE__ */ jsxs("div", {
												className: "group p-3.5 rounded-xl border border-purple-100/90 bg-white hover:bg-purple-50/50 hover:border-purple-300 transition-all duration-200 shadow-2xs relative",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-center justify-between gap-2 mb-1.5",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5",
															children: [
																/* @__PURE__ */ jsx("span", { className: `w-1.5 h-1.5 rounded-full ${item.dotColor}` }),
																/* @__PURE__ */ jsx("span", {
																	className: `text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md border ${item.badgeClass}`,
																	children: item.category
																}),
																item.isHot && /* @__PURE__ */ jsxs("span", {
																	className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-rose-500 text-white text-[9px] font-extrabold uppercase",
																	children: [/* @__PURE__ */ jsx(Flame, { className: "w-2.5 h-2.5" }), /* @__PURE__ */ jsx("span", { children: "HOT" })]
																})
															]
														}), /* @__PURE__ */ jsx("span", {
															className: "text-[10px] text-slate-400 font-medium",
															children: item.time
														})]
													}),
													/* @__PURE__ */ jsx("h5", {
														className: "text-xs sm:text-sm font-bold text-[#2e0854] group-hover:text-[#5b40cf] transition-colors leading-snug",
														children: item.title
													}),
													/* @__PURE__ */ jsx("p", {
														className: "mt-1 text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2",
														children: item.desc
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "mt-2 pt-2 border-t border-purple-50 flex items-center justify-between",
														children: [/* @__PURE__ */ jsxs("a", {
															href: item.linkHref,
															className: "inline-flex items-center gap-1 text-[11px] font-bold text-[#5b40cf] group-hover:text-[#3b1165] hover:underline",
															children: [/* @__PURE__ */ jsx("span", { children: item.linkText }), /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 text-[#5b40cf] group-hover:translate-x-0.5 transition-transform" })]
														}), /* @__PURE__ */ jsxs("span", {
															className: "text-[10px] text-slate-400 font-mono",
															children: ["REF #", item.id.toUpperCase()]
														})]
													})
												]
											}, `${item.id}-${idx}`))
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "p-3 sm:p-3.5 bg-purple-50/70 border-t border-purple-100 flex items-center justify-between gap-2 shrink-0",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "text-[11px] text-slate-500 font-medium flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(Bell, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Hover to freeze bulletin stream" })]
									}), /* @__PURE__ */ jsxs("a", {
										href: "https://api.whatsapp.com/send?phone=919610532222&text=Subscribe%20to%20PCP%20Exam%20Alerts",
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2e0854] text-white hover:bg-[#5b40cf] text-[11px] font-bold shadow-xs transition-colors",
										children: [/* @__PURE__ */ jsx("span", { children: "Get WhatsApp Alerts" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
									})]
								})
							]
						})
					})]
				})]
			})
		]
	});
}
//#endregion
export { PcpBlogUpdatesSection as default };
