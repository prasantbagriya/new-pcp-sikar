import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, Clock, Sparkles, Target, Trophy } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpHeroSection.jsx
function PcpHeroSection() {
	const instituteLogos = [
		{
			name: "AIIMS New Delhi",
			tag: "AIIMS",
			highlight: "AIR 1 • 720/720 Score"
		},
		{
			name: "IIT Bombay",
			tag: "IIT-B",
			highlight: "AIR 225 Qualified"
		},
		{
			name: "IIT Delhi",
			tag: "IIT-D",
			highlight: "AIR 469 • 99.9768 %tile"
		},
		{
			name: "IIT Roorkee",
			tag: "IIT-R",
			highlight: "AIR 677 Qualified"
		},
		{
			name: "IIT Kanpur",
			tag: "IIT-K",
			highlight: "AIR 779 Qualified"
		},
		{
			name: "NTA NEET-UG",
			tag: "NEET",
			highlight: "1,000+ MBBS Selections"
		},
		{
			name: "JEE Advanced",
			tag: "IIT-JEE",
			highlight: "Sikar Top Rank 2024"
		},
		{
			name: "Prince Eduhub",
			tag: "PRINCE",
			highlight: "25+ Yrs Educational Legacy"
		}
	];
	const typingPhrases = [
		"Vision.",
		"Discipline.",
		"AIR 1 NEET.",
		"AIR 225 JEE.",
		"Excellence."
	];
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	useEffect(() => {
		const fullText = typingPhrases[phraseIndex];
		const timer = setTimeout(() => {
			if (!isDeleting) {
				setCurrentText(fullText.substring(0, currentText.length + 1));
				if (currentText.length + 1 === fullText.length) setTimeout(() => setIsDeleting(true), 2e3);
			} else {
				setCurrentText(fullText.substring(0, currentText.length - 1));
				if (currentText.length - 1 === 0) {
					setIsDeleting(false);
					setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
				}
			}
		}, isDeleting ? 35 : 75);
		return () => clearTimeout(timer);
	}, [
		currentText,
		isDeleting,
		phraseIndex
	]);
	const bgRow1 = [
		{
			title: "Devesh Joshi",
			badge: "AIR 1 NEET (720/720)",
			image: "/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg",
			isCircle: false
		},
		{
			title: "Vivek Gupta",
			badge: "AIR 225 JEE Adv",
			image: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			isCircle: true
		},
		{
			title: "PCP Campus",
			badge: "100+ Acres Hub",
			image: "/uploads/pcp/pcp_sikar_campus_square.png",
			isCircle: false
		},
		{
			title: "Saurabh Agarwal",
			badge: "AIR 87 AIIMS",
			image: "/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg",
			isCircle: true
		},
		{
			title: "Vikas Dhakharwal",
			badge: "AIR 779 IIT Kanpur",
			image: "/uploads/pcp/theme_toppers/vikas_dhakharwal_air779.jpg",
			isCircle: false
		}
	];
	const bgRow2 = [
		{
			title: "Navdeep Mann",
			badge: "AIR 469 IIT Delhi",
			image: "/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg",
			isCircle: false
		},
		{
			title: "Smart Classes",
			badge: "Digital AI Desks",
			image: "/uploads/pcp/pcp_classroom_smart_board.png",
			isCircle: true
		},
		{
			title: "Nikhil",
			badge: "99.9478 %tile JEE",
			image: "/uploads/pcp/theme_toppers/nikhil_jeemain.jpg",
			isCircle: true
		},
		{
			title: "Braj Kishor",
			badge: "AIR 677 IIT-R",
			image: "/uploads/pcp/theme_toppers/braj_kishor_air677.jpg",
			isCircle: false
		},
		{
			title: "Doubt Counters",
			badge: "12-Hr Faculty Desks",
			image: "/uploads/pcp/pcp_doubt_counter_mentoring.png",
			isCircle: false
		}
	];
	const bgRow3 = [
		{
			title: "Rahul Kumawat",
			badge: "Top Percentile JEE",
			image: "/uploads/pcp/theme_toppers/rahul_kumawat_jeemain.jpg",
			isCircle: true
		},
		{
			title: "Devesh AIIMS",
			badge: "AIIMS New Delhi",
			image: "/uploads/pcp/theme_toppers/devesh_joshi.jpg",
			isCircle: false
		},
		{
			title: "Vivek IIT-B",
			badge: "IIT Bombay Ranker",
			image: "/uploads/pcp/theme_toppers/vivek_gupta.jpg",
			isCircle: true
		},
		{
			title: "Hostel Life",
			badge: "Disciplined Routine",
			image: "/uploads/pcp/pcp_hostel_study_room.png",
			isCircle: false
		},
		{
			title: "Saurabh AIIMS",
			badge: "Classroom Ranker",
			image: "/uploads/pcp/theme_toppers/saurabh_agarwal.jpg",
			isCircle: true
		}
	];
	const [activeStep, setActiveStep] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveStep((prev) => (prev + 1) % 6);
		}, 1400);
		return () => clearInterval(interval);
	}, []);
	const waveMilestones = [
		{
			id: 0,
			x: 60,
			y: 275,
			isPeak: false,
			title: "Foundation Class 9-10",
			tag: "Base Setup",
			subtitle: "NCERT Groundwork & Science Foundation",
			thumb: null,
			icon: "foundation"
		},
		{
			id: 1,
			x: 200,
			y: 130,
			isPeak: true,
			title: "AIR 779 IIT Kanpur",
			tag: "JEE Advanced",
			subtitle: "Vikas Dhakharwal • PCP Classroom",
			thumb: "/uploads/pcp/theme_toppers/vikas_dhakharwal_air779.jpg",
			icon: "topper"
		},
		{
			id: 2,
			x: 345,
			y: 275,
			isPeak: false,
			title: "12-Hr Faculty Doubt Desks",
			tag: "Personal Counters",
			subtitle: "Continuous 1-on-1 Doubt Solving (8am - 8pm)",
			thumb: null,
			icon: "clock"
		},
		{
			id: 3,
			x: 490,
			y: 130,
			isPeak: true,
			title: "AIR 225 IIT Bombay",
			tag: "JEE Topper",
			subtitle: "Vivek Gupta • 99.99 Percentile",
			thumb: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			icon: "topper"
		},
		{
			id: 4,
			x: 630,
			y: 275,
			isPeak: false,
			title: "1,000+ Real Mocks",
			tag: "DPP & Test Series",
			subtitle: "Weekly All-India NCERT Standard Mocks",
			thumb: null,
			icon: "target"
		},
		{
			id: 5,
			x: 765,
			y: 95,
			isPeak: true,
			title: "AIR 1 NEET (720/720)",
			tag: "🏆 Historic AIR 1",
			subtitle: "Devesh Joshi • AIIMS New Delhi",
			thumb: "/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg",
			isApex: true,
			icon: "trophy"
		}
	];
	const currentMilestone = waveMilestones[activeStep] || waveMilestones[0];
	const journeyWaveSegments = [
		"M 60 275",
		"M 60 275 C 115 275, 145 130, 200 130",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275 C 400 275, 435 130, 490 130",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275 C 400 275, 435 130, 490 130 C 545 130, 575 275, 630 275",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275 C 400 275, 435 130, 490 130 C 545 130, 575 275, 630 275 C 685 275, 715 95, 765 95"
	];
	const journeyAreaSegments = [
		"M 60 275 L 60 370 L 60 370 Z",
		"M 60 275 C 115 275, 145 130, 200 130 L 200 370 L 60 370 Z",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275 L 345 370 L 60 370 Z",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275 C 400 275, 435 130, 490 130 L 490 370 L 60 370 Z",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275 C 400 275, 435 130, 490 130 C 545 130, 575 275, 630 275 L 630 370 L 60 370 Z",
		"M 60 275 C 115 275, 145 130, 200 130 C 255 130, 290 275, 345 275 C 400 275, 435 130, 490 130 C 545 130, 575 275, 630 275 C 685 275, 715 95, 765 95 L 765 370 L 60 370 Z"
	];
	const fullRoadmapGuide = journeyWaveSegments[5];
	const activeWavePath = journeyWaveSegments[activeStep] || journeyWaveSegments[0];
	const activeAreaPath = journeyAreaSegments[activeStep] || journeyAreaSegments[0];
	return /* @__PURE__ */ jsxs("section", {
		id: "hero231",
		className: "relative pt-0 pb-10 sm:pb-14 lg:pb-18 bg-gradient-to-b from-white via-[#faf7fe] to-white text-slate-900 overflow-hidden font-sans border-b border-purple-100/80 select-none",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes heroTickerGlide {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-hero-marquee {
                    display: flex;
                    width: max-content;
                    animation: heroTickerGlide 26s linear infinite;
                }
                .animate-hero-marquee:hover {
                    animation-play-state: paused;
                }

                /* 3 Background Rows Moving Left to Right */
                @keyframes bgMarqueeLTR {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-bg-row-1 {
                    display: flex;
                    width: max-content;
                    animation: bgMarqueeLTR 42s linear infinite;
                }
                .animate-bg-row-2 {
                    display: flex;
                    width: max-content;
                    animation: bgMarqueeLTR 34s linear infinite;
                }
                .animate-bg-row-3 {
                    display: flex;
                    width: max-content;
                    animation: bgMarqueeLTR 48s linear infinite;
                }

                @keyframes centerLineGlow {
                    0%, 100% { filter: drop-shadow(0 0 4px rgba(91, 64, 207, 0.45)); opacity: 0.92; }
                    50% { filter: drop-shadow(0 0 10px rgba(91, 64, 207, 0.95)); opacity: 1; }
                }
                .animate-center-glow {
                    animation: centerLineGlow 2.5s ease-in-out infinite;
                }

                @keyframes centerDashFlow {
                    0% { stroke-dashoffset: 80; }
                    100% { stroke-dashoffset: 0; }
                }
                .animate-center-dash {
                    stroke-dasharray: 8 6;
                    animation: centerDashFlow 4s linear infinite;
                }

                /* Desktop Milestone Card Transforms (Rock-Solid CSS) */
                @media (min-width: 640px) {
                    .wave-card-pos-0 { transform: translate(0%, 18%); }
                    .wave-card-pos-1 { transform: translate(-50%, -115%); }
                    .wave-card-pos-2 { transform: translate(-50%, 18%); }
                    .wave-card-pos-3 { transform: translate(-50%, -115%); }
                    .wave-card-pos-4 { transform: translate(-50%, 18%); }
                    .wave-card-pos-5 { transform: translate(-102%, -25%); }
                }
            ` }),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full bg-[#f8fafc] border-b border-purple-100/90 py-1.5 sm:py-2 flex items-center overflow-hidden relative shadow-2xs z-30 select-none",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "shrink-0 flex items-center gap-1.5 sm:gap-2 pl-3 sm:pl-4 pr-3.5 py-1 bg-[#2e0854] text-white text-[11px] sm:text-xs font-bold rounded-r-full shadow-none z-20",
						children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" }), /* @__PURE__ */ jsxs("span", {
							className: "whitespace-nowrap font-extrabold tracking-wide",
							children: ["Admission Open 2026-27 ", /* @__PURE__ */ jsx("span", {
								className: "hidden sm:inline font-semibold opacity-90",
								children: "• NEET-UG & IIT-JEE Batches"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute left-[160px] sm:left-[350px] top-0 bottom-0 w-8 bg-gradient-to-r from-[#f8fafc] to-transparent pointer-events-none z-10" }),
					/* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#f8fafc] to-transparent pointer-events-none z-10" }),
					/* @__PURE__ */ jsx("div", {
						className: "flex-1 overflow-hidden relative",
						children: /* @__PURE__ */ jsx("div", {
							className: "animate-hero-marquee flex items-center whitespace-nowrap",
							children: [...instituteLogos, ...instituteLogos].map((item, idx) => /* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 mx-4 sm:mx-6 shrink-0 text-slate-800 text-xs sm:text-[13px] font-semibold",
								children: [
									/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#5b40cf]" }),
									/* @__PURE__ */ jsx("span", {
										className: "px-2 py-0.5 rounded-md bg-[#2e0854]/10 text-[#2e0854] font-black text-[10.5px] uppercase tracking-wider",
										children: item.tag
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-slate-900 font-bold",
										children: item.name
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-slate-500 font-normal text-[11px]",
										children: [
											"(",
											item.highlight,
											")"
										]
									})
								]
							}, idx))
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-15 sm:opacity-20 flex flex-col justify-around py-4",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "w-full overflow-hidden",
						children: /* @__PURE__ */ jsx("div", {
							className: "animate-bg-row-1 flex items-center gap-4 sm:gap-6",
							children: [...bgRow1, ...bgRow1].map((item, idx) => /* @__PURE__ */ jsxs("div", {
								className: `relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden border-2 bg-slate-900 shadow-sm ${item.isCircle ? "rounded-full border-[#5b40cf]/70" : "rounded-2xl border-purple-300/80"}`,
								children: [/* @__PURE__ */ jsx("img", {
									src: item.image,
									alt: item.title,
									width: "128",
									height: "128",
									loading: "lazy",
									decoding: "async",
									className: "w-full h-full object-cover grayscale contrast-110"
								}), /* @__PURE__ */ jsx("div", {
									className: "absolute bottom-1.5 inset-x-1 text-center",
									children: /* @__PURE__ */ jsx("span", {
										className: "inline-block px-1.5 py-0.2 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-extrabold uppercase tracking-tight border border-white/20 whitespace-nowrap",
										children: item.badge
									})
								})]
							}, `r1-${idx}`))
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "w-full overflow-hidden",
						children: /* @__PURE__ */ jsx("div", {
							className: "animate-bg-row-2 flex items-center gap-4 sm:gap-6",
							children: [...bgRow2, ...bgRow2].map((item, idx) => /* @__PURE__ */ jsxs("div", {
								className: `relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden border-2 bg-slate-900 shadow-sm ${item.isCircle ? "rounded-full border-[#5b40cf]/70" : "rounded-2xl border-purple-300/80"}`,
								children: [/* @__PURE__ */ jsx("img", {
									src: item.image,
									alt: item.title,
									width: "128",
									height: "128",
									loading: "lazy",
									decoding: "async",
									className: "w-full h-full object-cover grayscale contrast-110"
								}), /* @__PURE__ */ jsx("div", {
									className: "absolute bottom-1.5 inset-x-1 text-center",
									children: /* @__PURE__ */ jsx("span", {
										className: "inline-block px-1.5 py-0.2 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-extrabold uppercase tracking-tight border border-white/20 whitespace-nowrap",
										children: item.badge
									})
								})]
							}, `r2-${idx}`))
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "w-full overflow-hidden",
						children: /* @__PURE__ */ jsx("div", {
							className: "animate-bg-row-3 flex items-center gap-4 sm:gap-6",
							children: [...bgRow3, ...bgRow3].map((item, idx) => /* @__PURE__ */ jsxs("div", {
								className: `relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden border-2 bg-slate-900 shadow-sm ${item.isCircle ? "rounded-full border-[#5b40cf]/70" : "rounded-2xl border-purple-300/80"}`,
								children: [/* @__PURE__ */ jsx("img", {
									src: item.image,
									alt: item.title,
									width: "128",
									height: "128",
									loading: "lazy",
									decoding: "async",
									className: "w-full h-full object-cover grayscale contrast-110"
								}), /* @__PURE__ */ jsx("div", {
									className: "absolute bottom-1.5 inset-x-1 text-center",
									children: /* @__PURE__ */ jsx("span", {
										className: "inline-block px-1.5 py-0.2 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-extrabold uppercase tracking-tight border border-white/20 whitespace-nowrap",
										children: item.badge
									})
								})]
							}, `r3-${idx}`))
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/90" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 pointer-events-none overflow-hidden",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-20 left-1/4 w-[600px] h-[500px] bg-purple-200/20 rounded-full blur-[140px]" }), /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-10 w-[550px] h-[450px] bg-purple-100/30 rounded-full blur-[130px]" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 lg:pt-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 flex flex-col items-start text-left relative z-20",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "reveal-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-[#2e0854] text-xs sm:text-sm font-semibold border border-purple-200/80 mb-5 shadow-none",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Sikar's Premier Coaching Destination" })]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "reveal-scroll text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-normal text-slate-900 leading-snug sm:leading-tight mb-5",
								children: [/* @__PURE__ */ jsx("span", { children: "Rankers Built With " }), /* @__PURE__ */ jsxs("span", {
									className: "inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#7c52c9] underline decoration-[#5b40cf]/30 underline-offset-8",
									children: [currentText || "\xA0", /* @__PURE__ */ jsx("span", { className: "inline-block w-[3px] h-[0.85em] ml-1 bg-[#5b40cf] animate-pulse align-middle" })]
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "reveal-scroll text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal mb-8",
								children: "Classroom excellence powered by Prince Eduhub's 25-year academic legacy. Producing All India Rank 1 in NEET and top percentiles in JEE with continuous 12-hour faculty doubt desks and residential mentorship."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "reveal-scroll flex flex-row items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto mb-8",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "/category/jee-coachings",
									className: "flex-1 sm:flex-initial relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-7 py-2.5 sm:py-3 rounded-full overflow-hidden bg-[#2e0854] border border-[#2e0854] text-white font-bold text-xs sm:text-sm shadow-none transition-all group cursor-pointer text-center",
									children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 w-full h-full bg-[#5b40cf] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none" }), /* @__PURE__ */ jsxs("span", {
										className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "sm:hidden",
												children: "Apply Admission"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "hidden sm:inline",
												children: "Apply for Admission"
											}),
											/* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" })
										]
									})]
								}), /* @__PURE__ */ jsxs("a", {
									href: "#services",
									className: "flex-1 sm:flex-initial relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full bg-slate-100 hover:bg-purple-50 text-slate-900 hover:text-[#2e0854] font-bold text-xs sm:text-sm transition-all border border-slate-300/80 hover:border-purple-300 shadow-none cursor-pointer text-center",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "sm:hidden",
											children: "All Programs"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "hidden sm:inline",
											children: "Explore All Programs"
										}),
										/* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700 shrink-0" })
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "reveal-scroll flex items-center gap-3.5 pt-6 border-t border-purple-100/80 w-full relative",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex -space-x-2.5 overflow-hidden",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: "/uploads/pcp/theme_toppers/devesh_joshi.jpg",
												alt: "Devesh Joshi AIR 1",
												width: "40",
												height: "40",
												loading: "lazy",
												decoding: "async",
												className: "w-10 h-10 rounded-full border-2 border-white object-cover shadow-2xs"
											}),
											/* @__PURE__ */ jsx("img", {
												src: "/uploads/pcp/theme_toppers/vivek_gupta.jpg",
												alt: "Vivek Gupta AIR 225",
												width: "40",
												height: "40",
												loading: "lazy",
												decoding: "async",
												className: "w-10 h-10 rounded-full border-2 border-white object-cover shadow-2xs"
											}),
											/* @__PURE__ */ jsx("img", {
												src: "/uploads/pcp/theme_toppers/saurabh_agarwal.jpg",
												alt: "Saurabh Agarwal AIR 87",
												width: "40",
												height: "40",
												loading: "lazy",
												decoding: "async",
												className: "w-10 h-10 rounded-full border-2 border-white object-cover shadow-2xs"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#2e0854] to-[#5b40cf] border-2 border-white flex items-center justify-center text-white text-[10.5px] font-black shadow-2xs",
												children: "AIR 1"
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-extrabold text-slate-900 text-xs sm:text-sm leading-tight",
										children: "1,000+ MBBS & IIT Selections"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-slate-500 text-[11px] mt-0.5 font-medium flex items-center gap-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "flex text-amber-400 text-xs",
											children: "★★★★★"
										}), /* @__PURE__ */ jsx("span", { children: "4.6/5 Overall Rating (1,315+ Reviews)" })]
									})] }),
									/* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute -right-6 top-1/2 w-8 h-[2px] bg-gradient-to-r from-purple-400 to-transparent pointer-events-none" })
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 relative z-20 flex flex-col justify-center select-none pt-4 lg:pt-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "hidden sm:block relative w-full h-[360px] sm:h-[400px] lg:h-[420px]",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute top-4 right-6 w-44 h-44 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" }),
								/* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-6 w-44 h-44 bg-[#5b40cf]/10 rounded-full blur-3xl pointer-events-none" }),
								/* @__PURE__ */ jsxs("svg", {
									className: "w-full h-full overflow-visible",
									viewBox: "0 0 840 400",
									preserveAspectRatio: "none",
									children: [
										/* @__PURE__ */ jsxs("defs", { children: [
											/* @__PURE__ */ jsxs("linearGradient", {
												id: "waveLineGrad",
												x1: "0%",
												y1: "100%",
												x2: "100%",
												y2: "0%",
												children: [
													/* @__PURE__ */ jsx("stop", {
														offset: "0%",
														stopColor: "#059669"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "25%",
														stopColor: "#5b40cf"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "55%",
														stopColor: "#2e0854"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "85%",
														stopColor: "#7c52c9"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "100%",
														stopColor: "#f59e0b"
													})
												]
											}),
											/* @__PURE__ */ jsxs("linearGradient", {
												id: "waveAreaGrad",
												x1: "0%",
												y1: "0%",
												x2: "0%",
												y2: "100%",
												children: [/* @__PURE__ */ jsx("stop", {
													offset: "0%",
													stopColor: "#5b40cf",
													stopOpacity: "0.10"
												}), /* @__PURE__ */ jsx("stop", {
													offset: "100%",
													stopColor: "#5b40cf",
													stopOpacity: "0.00"
												})]
											}),
											/* @__PURE__ */ jsx("filter", {
												id: "waveLaserGlow",
												x: "-20%",
												y: "-20%",
												width: "140%",
												height: "140%",
												children: /* @__PURE__ */ jsx("feDropShadow", {
													dx: "0",
													dy: "2",
													stdDeviation: "4",
													floodColor: "#5b40cf",
													floodOpacity: "0.4"
												})
											})
										] }),
										/* @__PURE__ */ jsx("path", {
											d: activeAreaPath,
											fill: "url(#waveAreaGrad)",
											className: "transition-all duration-700 ease-out"
										}),
										/* @__PURE__ */ jsx("path", {
											d: "M 40 275 L 800 275 M 40 195 L 800 195 M 40 130 L 800 130",
											fill: "none",
											stroke: "#e2e8f0",
											strokeWidth: "1",
											strokeDasharray: "4 4",
											opacity: "0.45"
										}),
										/* @__PURE__ */ jsx("path", {
											d: fullRoadmapGuide,
											fill: "none",
											stroke: "#cbd5e1",
											strokeWidth: "2",
											strokeDasharray: "4 4",
											opacity: "0.55"
										}),
										/* @__PURE__ */ jsx("path", {
											d: activeWavePath,
											fill: "none",
											stroke: "url(#waveLineGrad)",
											strokeWidth: "4",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "animate-center-glow transition-all duration-700 ease-out",
											filter: "url(#waveLaserGlow)"
										}),
										/* @__PURE__ */ jsx("path", {
											d: activeWavePath,
											fill: "none",
											stroke: "#ffffff",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "animate-center-dash opacity-95 transition-all duration-700 ease-out"
										}),
										/* @__PURE__ */ jsxs("g", { children: [/* @__PURE__ */ jsx("circle", {
											r: "14",
											fill: "#5b40cf",
											opacity: "0.30",
											children: /* @__PURE__ */ jsx("animateMotion", {
												path: fullRoadmapGuide,
												dur: "4.8s",
												repeatCount: "indefinite"
											})
										}), /* @__PURE__ */ jsx("circle", {
											r: "5.5",
											fill: "#f59e0b",
											stroke: "#ffffff",
											strokeWidth: "2.5",
											filter: "url(#waveLaserGlow)",
											children: /* @__PURE__ */ jsx("animateMotion", {
												path: fullRoadmapGuide,
												dur: "4.8s",
												repeatCount: "indefinite"
											})
										})] }),
										waveMilestones.map((node) => {
											const isActive = activeStep === node.id;
											const isCompleted = node.id < activeStep;
											node.id;
											return /* @__PURE__ */ jsxs("g", {
												className: "cursor-pointer",
												onClick: () => setActiveStep(node.id),
												children: [
													isActive && /* @__PURE__ */ jsx("circle", {
														cx: node.x,
														cy: node.y,
														r: node.isApex ? "22" : "18",
														className: "animate-ping opacity-45",
														fill: node.isApex ? "#f59e0b" : "#5b40cf"
													}),
													/* @__PURE__ */ jsx("circle", {
														cx: node.x,
														cy: node.y,
														r: isActive ? node.isApex ? "14" : "12" : isCompleted ? "9" : "7",
														fill: isActive ? node.isApex ? "#f59e0b" : "#5b40cf" : isCompleted ? "#5b40cf" : "#ffffff",
														stroke: isActive ? node.isApex ? "#ffffff" : "#2e0854" : isCompleted ? "#ffffff" : "#94a3b8",
														strokeWidth: isActive ? "3.5" : "2",
														className: "transition-all duration-300"
													}),
													/* @__PURE__ */ jsx("circle", {
														cx: node.x,
														cy: node.y,
														r: isActive ? "5" : isCompleted ? "3" : "2.5",
														fill: isActive ? "#ffffff" : isCompleted ? "#ffffff" : "#cbd5e1",
														className: "transition-all duration-300"
													})
												]
											}, node.id);
										})
									]
								}),
								waveMilestones.map((node) => {
									const isActive = activeStep === node.id;
									const isPeak = node.isPeak;
									return /* @__PURE__ */ jsxs("div", {
										onClick: () => setActiveStep(node.id),
										className: `wave-card-pos-${node.id} absolute z-30 transition-all duration-500 ease-out cursor-pointer ${isActive ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"}`,
										style: {
											left: `${node.x / 840 * 100}%`,
											top: `${node.y / 400 * 100}%`
										},
										children: [/* @__PURE__ */ jsxs("div", {
											className: `flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border shadow-lg whitespace-nowrap transition-all ${node.isApex ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-300 shadow-amber-300/40 ring-2 ring-amber-400/50" : "bg-white border-[#5b40cf] text-[#2e0854] shadow-purple-500/25 ring-2 ring-[#5b40cf]/30"}`,
											children: [
												node.thumb ? /* @__PURE__ */ jsx("img", {
													src: node.thumb,
													alt: node.title,
													width: "44",
													height: "44",
													loading: "lazy",
													decoding: "async",
													className: `w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shrink-0 border-2 ${node.isApex ? "border-white" : "border-[#5b40cf]"}`
												}) : /* @__PURE__ */ jsxs("div", {
													className: `w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0 flex items-center justify-center ${node.isApex ? "bg-white/20 text-white" : "bg-[#2e0854] text-white"}`,
													children: [
														node.icon === "foundation" && /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
														node.icon === "clock" && /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
														node.icon === "target" && /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
														node.icon === "trophy" && /* @__PURE__ */ jsx(Trophy, { className: "w-4 h-4 sm:w-5 sm:h-5 text-amber-300" })
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "text-left whitespace-nowrap",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ jsx("span", {
																className: `px-1.5 py-0.2 rounded text-[9px] sm:text-[10px] font-black uppercase tracking-wider ${node.isApex ? "bg-white text-amber-700" : "bg-[#2e0854] text-white"}`,
																children: node.tag
															}), /* @__PURE__ */ jsxs("span", {
																className: `text-[9.5px] sm:text-[10.5px] font-semibold ${node.isApex ? "text-white/80" : "text-slate-400"}`,
																children: [
																	"Journey Milestone ",
																	node.id + 1,
																	"/6"
																]
															})]
														}),
														/* @__PURE__ */ jsx("p", {
															className: `font-black text-xs sm:text-sm leading-tight mt-0.5 ${node.isApex ? "text-white" : "text-slate-900"}`,
															children: node.title
														}),
														/* @__PURE__ */ jsx("p", {
															className: `text-[10px] sm:text-xs font-medium leading-tight mt-0.5 ${node.isApex ? "text-white/90" : "text-slate-500"}`,
															children: node.subtitle
														})
													]
												}),
												node.isApex && /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-amber-200 animate-spin shrink-0 hidden sm:block" })
											]
										}), /* @__PURE__ */ jsx("div", { className: `w-2.5 h-2.5 mx-auto rotate-45 border-r border-b ${isPeak && node.id !== 5 ? "-mt-1" : !isPeak ? "-mb-1 order-first" : "hidden"} ${node.isApex ? "bg-amber-500 border-amber-300" : "bg-white border-[#5b40cf]"}` })]
									}, node.id);
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "sm:hidden relative w-full h-[250px] flex flex-col justify-center items-center overflow-visible my-1",
							children: [/* @__PURE__ */ jsxs("svg", {
								className: "w-full h-full overflow-visible",
								viewBox: "0 0 360 220",
								preserveAspectRatio: "none",
								children: [
									/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
										id: "mobileWaveGrad",
										x1: "0%",
										y1: "100%",
										x2: "100%",
										y2: "0%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#059669"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "50%",
												stopColor: "#5b40cf"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#f59e0b"
											})
										]
									}) }),
									currentMilestone.isPeak ? /* @__PURE__ */ jsx("path", {
										d: "M 10 160 Q 90 160 130 130 Q 180 85 230 130 Q 270 160 350 160",
										fill: "none",
										stroke: "url(#mobileWaveGrad)",
										strokeWidth: "4",
										strokeLinecap: "round",
										className: "animate-center-glow"
									}) : /* @__PURE__ */ jsx("path", {
										d: "M 10 70 Q 90 70 130 100 Q 180 145 230 100 Q 270 70 350 70",
										fill: "none",
										stroke: "url(#mobileWaveGrad)",
										strokeWidth: "4",
										strokeLinecap: "round",
										className: "animate-center-glow"
									}),
									currentMilestone.isPeak ? /* @__PURE__ */ jsx("path", {
										d: "M 10 160 Q 90 160 130 130 Q 180 85 230 130 Q 270 160 350 160",
										fill: "none",
										stroke: "#ffffff",
										strokeWidth: "2.2",
										strokeLinecap: "round",
										className: "animate-center-dash opacity-90"
									}) : /* @__PURE__ */ jsx("path", {
										d: "M 10 70 Q 90 70 130 100 Q 180 145 230 100 Q 270 70 350 70",
										fill: "none",
										stroke: "#ffffff",
										strokeWidth: "2.2",
										strokeLinecap: "round",
										className: "animate-center-dash opacity-90"
									}),
									/* @__PURE__ */ jsxs("g", { children: [
										/* @__PURE__ */ jsx("circle", {
											cx: "180",
											cy: currentMilestone.isPeak ? 88 : 142,
											r: "20",
											className: "animate-ping opacity-35",
											fill: currentMilestone.isApex ? "#f59e0b" : "#5b40cf"
										}),
										/* @__PURE__ */ jsx("circle", {
											cx: "180",
											cy: currentMilestone.isPeak ? 88 : 142,
											r: "12",
											fill: currentMilestone.isApex ? "#f59e0b" : "#5b40cf",
											stroke: "#ffffff",
											strokeWidth: "3.5",
											className: "transition-all duration-300"
										}),
										/* @__PURE__ */ jsx("circle", {
											cx: "180",
											cy: currentMilestone.isPeak ? 88 : 142,
											r: "4.5",
											fill: "#ffffff"
										})
									] })
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "absolute z-30 transition-all duration-500 ease-out cursor-pointer w-[92%] max-w-[320px]",
								style: {
									left: "50%",
									top: currentMilestone.isPeak ? "78px" : "150px",
									transform: currentMilestone.isPeak ? "translate(-50%, -105%)" : "translate(-50%, 15%)"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									className: `flex items-center gap-3 px-3 py-2 rounded-2xl border shadow-lg transition-all ${currentMilestone.isApex ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-300 shadow-amber-300/40" : "bg-white border-[#5b40cf] text-[#2e0854] shadow-purple-500/20"}`,
									children: [
										currentMilestone.thumb ? /* @__PURE__ */ jsx("img", {
											src: currentMilestone.thumb,
											alt: currentMilestone.title,
											width: "40",
											height: "40",
											loading: "lazy",
											decoding: "async",
											className: `w-10 h-10 rounded-full object-cover shrink-0 border-2 ${currentMilestone.isApex ? "border-white" : "border-[#5b40cf]"}`
										}) : /* @__PURE__ */ jsxs("div", {
											className: `w-9 h-9 rounded-full shrink-0 flex items-center justify-center ${currentMilestone.isApex ? "bg-white/20 text-white" : "bg-[#2e0854] text-white"}`,
											children: [
												currentMilestone.icon === "foundation" && /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
												currentMilestone.icon === "clock" && /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
												currentMilestone.icon === "target" && /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
												currentMilestone.icon === "trophy" && /* @__PURE__ */ jsx(Trophy, { className: "w-4 h-4 text-amber-300" })
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "text-left flex-1 min-w-0",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx("span", {
														className: `px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider ${currentMilestone.isApex ? "bg-white text-amber-700" : "bg-[#2e0854] text-white"}`,
														children: currentMilestone.tag
													}), /* @__PURE__ */ jsxs("span", {
														className: `text-[10px] font-semibold ${currentMilestone.isApex ? "text-white/80" : "text-slate-400"}`,
														children: [
															"Step ",
															currentMilestone.id + 1,
															" of 6"
														]
													})]
												}),
												/* @__PURE__ */ jsx("p", {
													className: `font-black text-xs leading-tight mt-0.5 truncate ${currentMilestone.isApex ? "text-white" : "text-slate-900"}`,
													children: currentMilestone.title
												}),
												/* @__PURE__ */ jsx("p", {
													className: `text-[10px] font-medium leading-tight mt-0.5 truncate ${currentMilestone.isApex ? "text-white/90" : "text-slate-500"}`,
													children: currentMilestone.subtitle
												})
											]
										}),
										currentMilestone.isApex && /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-amber-200 animate-spin shrink-0" })
									]
								}), /* @__PURE__ */ jsx("div", { className: `w-2.5 h-2.5 mx-auto rotate-45 border-r border-b ${currentMilestone.isPeak ? "-mt-1" : "-mb-1 order-first"} ${currentMilestone.isApex ? "bg-amber-500 border-amber-300" : "bg-white border-[#5b40cf]"}` })]
							})]
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { PcpHeroSection as default };
