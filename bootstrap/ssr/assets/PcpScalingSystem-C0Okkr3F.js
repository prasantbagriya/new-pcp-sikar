import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Zap } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpScalingSystem.jsx
function PcpScalingSystem() {
	const [currentStep, setCurrentStep] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const stages = [
		{
			stage: "Stage 01",
			level: "Foundational Rigor",
			title: "NCERT Conceptual Mastery & Diagnostics",
			badge: "Concept Lockdown",
			metric: "100% Core Clarity",
			desc: "Every competitive journey begins with rock-solid fundamentals. We bridge the gap between school board curriculum and competitive exam demands through rigorous conceptual teaching.",
			highlights: [
				"Line-by-line NCERT analysis for Biology & Chemistry",
				"Derivation-based deep physics problem solving",
				"Baseline diagnostic test to identify existing conceptual gaps",
				"Daily 15-minute speed arithmetic & formula memorization"
			],
			image: "/uploads/pcp/Pre-FoundationBlog.png",
			tag: "Groundwork"
		},
		{
			stage: "Stage 02",
			level: "Application & Daily Rigor",
			title: "12-Hour Doubt Desks & DPP Mastery",
			badge: "Zero Pending Doubts",
			metric: "99.4% Doubts Cleared Daily",
			desc: "Concept learning without daily problem solving is useless. Students solve daily 20-question DPPs, and any difficult concept is resolved same-day on our 12-hour faculty doubt counters.",
			highlights: [
				"12 hours continuous face-to-face faculty doubt desks",
				"Daily Practice Problems (DPP) checking & grading",
				"Level-1 & Level-2 graded multi-concept question banks",
				"Personal academic mentor assigned for weekly progress reviews"
			],
			image: "/uploads/pcp/NEETUG.jpg",
			tag: "Execution"
		},
		{
			stage: "Stage 03",
			level: "Pan-India CBT Benchmarking",
			title: "P-AITS All India Simulation & AI Analysis",
			badge: "NTA Simulation",
			metric: "100+ Pan-India Mock Exams",
			desc: "Real exam temper is built inside our high-tech CBT simulation computer labs. Students face the exact NTA exam screen, clock pressure, and negative marking rules against 40,000+ peers nationwide.",
			highlights: [
				"PCP Arjuna (IIT-JEE) & Drona (NEET) test schedules",
				"Instant AI breakdown of negative marking & silly mistakes",
				"Time-per-question micro analysis report",
				"Detailed step-by-step video solutions post test completion"
			],
			image: "/uploads/pcp/JeeMain2026.png",
			tag: "Simulation"
		},
		{
			stage: "Stage 04",
			level: "National Rank Conversion",
			title: "Super-Rankers Mentorship & AIR Conversion",
			badge: "AIR-1 Proven Strategy",
			metric: "Top 0.1% National Conversion",
			desc: "The final sprint that produced NEET AIR-1 and JEE Adv AIR-225. High-intensity test series, error-log revisions, time optimization drills, and 1-on-1 counseling to reach AIIMS & IITs.",
			highlights: [
				"Special Super-Rankers revision batches & focus groups",
				"Personal mentoring from faculties who produced AIR-1",
				"Complete full-length revision marathons & formula sprints",
				"Psychological stamina coaching for peak exam-day performance"
			],
			image: "/uploads/pcp/NEET2024.jpg",
			tag: "Peak Rank"
		}
	];
	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(() => {
			setCurrentStep((prev) => (prev + 1) % stages.length);
		}, 6e3);
		return () => clearInterval(interval);
	}, [isAutoPlaying, stages.length]);
	const activeStage = stages[currentStep];
	return /* @__PURE__ */ jsxs("section", {
		className: "py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80",
		onMouseEnter: () => setIsAutoPlaying(false),
		onMouseLeave: () => setIsAutoPlaying(true),
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[150px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[150px] pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200/80",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3",
							children: [/* @__PURE__ */ jsx(Zap, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "The High-Performance Scaling System" })]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight",
							children: [
								"Scaling Students with ",
								/* @__PURE__ */ jsx("br", { className: "hidden sm:inline" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-[#3b0764]",
									children: "World-Class Academic Force"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-normal",
							children: "How PCP systematically scales an average school student into an elite All India Ranker through a 4-stage scientific pipeline."
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "hidden sm:flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-2xs",
							children: stages.map((stg, sIdx) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setCurrentStep(sIdx),
								className: `px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${currentStep === sIdx ? "bg-[#ffc107] text-black shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,
								children: /* @__PURE__ */ jsx("span", { children: stg.stage })
							}, sIdx))
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setCurrentStep((prev) => (prev - 1 + stages.length) % stages.length),
								"aria-label": "Previous scaling stage",
								className: "w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-105",
								children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setCurrentStep((prev) => (prev + 1) % stages.length),
								"aria-label": "Next scaling stage",
								className: "w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-105",
								children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
							})]
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-500",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 items-stretch",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center justify-between gap-3 mb-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "px-3 py-1 rounded-full bg-[#2e1065] text-white text-xs font-black uppercase tracking-wider",
											children: activeStage.stage
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold text-purple-800 uppercase tracking-wider",
											children: activeStage.level
										})]
									}), /* @__PURE__ */ jsx("span", {
										className: "px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-black uppercase",
										children: activeStage.metric
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-3",
									children: activeStage.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6",
									children: activeStage.desc
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100",
									children: activeStage.highlights.map((item, hIdx) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-start gap-2 text-xs font-semibold text-slate-700",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: item })]
									}, hIdx))
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "pt-6 border-t border-slate-100 space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between text-xs font-bold text-slate-500",
										children: [/* @__PURE__ */ jsx("span", { children: "Pipeline Progress" }), /* @__PURE__ */ jsxs("span", { children: [
											"Stage ",
											currentStep + 1,
											" of ",
											stages.length
										] })]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "w-full h-2 bg-slate-100 rounded-full overflow-hidden",
										children: /* @__PURE__ */ jsx("div", {
											className: "h-full bg-gradient-to-r from-[#2e1065] via-[#ffc107] to-[#2e1065] rounded-full transition-all duration-500 ease-out",
											style: { width: `${(currentStep + 1) / stages.length * 100}%` }
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-3 pt-2",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "#scholarship",
											className: "btn-brand-yellow px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-md",
											children: [/* @__PURE__ */ jsx("span", { children: "Enroll in this Pipeline" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
										}), /* @__PURE__ */ jsx("a", {
											href: "#courses",
											className: "px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors",
											children: "View Curriculum"
										})]
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-5 relative bg-slate-900 overflow-hidden min-h-[300px] lg:min-h-[auto]",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: activeStage.image,
									alt: activeStage.title,
									className: "w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105",
									onError: (e) => {
										e.currentTarget.src = "/uploads/pcp/Neet-2026.jpg";
									}
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-white/0 lg:via-black/30 lg:to-black/80" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-6 left-6 right-6 text-white",
									children: [/* @__PURE__ */ jsx("span", {
										className: "px-3 py-1 rounded-md bg-[#ffc107] text-black text-[11px] font-black uppercase tracking-wider inline-block mb-2 shadow",
										children: activeStage.badge
									}), /* @__PURE__ */ jsx("h4", {
										className: "text-lg font-black text-white leading-snug drop-shadow-sm",
										children: activeStage.level
									})]
								})
							]
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { PcpScalingSystem as default };
