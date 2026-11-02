import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Atom, Calendar, Check, CheckCircle2, ChevronDown, Clock, Layers, MessageSquare, Phone, ShieldCheck, Sparkles, Stethoscope, Trophy, X } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpCoursesSection.jsx
function PcpCoursesSection() {
	const [activeTab, setActiveTab] = useState("all");
	const [hoveredCard, setHoveredCard] = useState(null);
	const [activeCardId, setActiveCardId] = useState(null);
	const [selectedCourseModal, setSelectedCourseModal] = useState(null);
	const coursesData = [
		{
			id: "neet-ug",
			category: "neet",
			stream: "MEDICAL DIVISION",
			streamBadgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
			title: "NEET-UG Medical Division",
			classes: "Class 11th, 12th & 12th Pass Repeaters",
			tagline: "AIR 1 NEET Benchmark • 720/720 Pedagogy",
			badge: "AIR 1 NEET SYSTEM",
			badgeColor: "bg-emerald-600 text-white",
			circleGradient: "from-purple-900 via-[#2e0854] to-emerald-600",
			circleBorder: "border-emerald-400/50",
			circleShadow: "shadow-emerald-500/25",
			accentIcon: Stethoscope,
			accentColor: "text-emerald-400",
			avatar: "/uploads/pcp/toppers/devesh_joshi_air1.jpg",
			topperName: "Devesh Joshi (AIR 1 AIIMS)",
			featured: false,
			idlePill: "⭐ AIR 1 Proven System • 1,000+ MBBS Selections",
			description: "Intensive medical entrance classroom coaching designed strictly around NCERT line-by-line depth, continuous AIIMS-level test benchmarking, and 12-hour doctor faculty doubt clearance.",
			stats: [
				{
					label: "MBBS Selections",
					val: "1,000+"
				},
				{
					label: "Highest Score",
					val: "720/720"
				},
				{
					label: "Daily Doubts",
					val: "12 Hrs"
				}
			],
			keyPoints: [
				"Permanent senior doctor & expert medical faculty team",
				"Daily Practice Problem (DPP) sheets with micro-analysis",
				"North India’s only 12-hour non-stop faculty doubt counters",
				"Integrated Schooling + Coaching + AC Residential campus"
			],
			batchInfo: {
				name: "Target NEET Batch 2026-27",
				sub: "Fresh Batches Starting Every Monday",
				cta: "Explore Syllabus",
				accentColor: "from-purple-50 via-indigo-50/50 to-purple-50",
				textColor: "text-slate-900",
				subColor: "text-purple-700 font-semibold",
				btnColor: "bg-[#2e0854] hover:bg-[#5b40cf] text-white"
			},
			modalDetails: {
				subjects: [
					"Physics (Theory + Numericals)",
					"Chemistry (Physical, Organic, Inorganic)",
					"Biology (NCERT Botany & Zoology)"
				],
				tests: "Bi-weekly Minor Tests, Monthly Grand Revision Mocks, Pan-India P-AITS Test Series",
				hostel: "Separate Air-Cooled & AC Hostels for Boys & Girls with Resident Wardens and Nutritious Dining",
				scholarship: "Up to 100% Coaching & Hostel Fee Concession via P-SAT National Talent Exam"
			}
		},
		{
			id: "iit-jee",
			category: "jee",
			stream: "ENGINEERING WING",
			streamBadgeColor: "bg-amber-50 text-amber-900 border-amber-300",
			title: "IIT-JEE (Main + Advanced)",
			classes: "Class 11th, 12th & Super-50 Dropper Batch",
			tagline: "AIR 225 Sikar Coaching Topper • Super-50",
			badge: "SIKAR COACHING TOPPER",
			badgeColor: "bg-[#ffc107] text-slate-950 font-black",
			circleGradient: "from-[#2e0854] via-[#5b40cf] to-[#f59e0b]",
			circleBorder: "border-amber-300/60",
			circleShadow: "shadow-amber-500/30",
			accentIcon: Atom,
			accentColor: "text-amber-300",
			avatar: "/uploads/pcp/toppers/vivek_gupta_air225.jpg",
			topperName: "Vivek Gupta (AIR 225 IIT-B)",
			featured: true,
			idlePill: "⭐ AIR 225 Sikar Topper • 1:4 JEE Adv Ratio",
			description: "Premier analytical coaching for IIT aspirants mentored by full-time IITian and NITian faculties. Produced Sikar coaching topper (AIR 225) in JEE Advanced with an unprecedented 1:4 selection ratio.",
			stats: [
				{
					label: "JEE Adv Ratio",
					val: "1 in 4"
				},
				{
					label: "99+ Percentilers",
					val: "102+"
				},
				{
					label: "Sikar Rank 1",
					val: "AIR 225"
				}
			],
			keyPoints: [
				"100% permanent IITian & NITian core educators pool",
				"Arjuna Advanced & Drona Main dedicated test schedules",
				"High-tech computer lab for real NTA CBT exam simulations",
				"Special Super-50 Rankers Batch with personal mentor"
			],
			batchInfo: {
				name: "Super-50 Rankers Batch",
				sub: "Entrance Merit & Direct Admission Open",
				cta: "Enroll Now",
				accentColor: "from-[#2e0854] via-[#3b0764] to-[#5b40cf]",
				textColor: "text-white",
				subColor: "text-amber-200 font-medium",
				btnColor: "bg-[#ffc107] hover:bg-white text-slate-950 font-black"
			},
			modalDetails: {
				subjects: [
					"Physics (Mechanics to Modern Physics)",
					"Chemistry (In-depth Mechanisms)",
					"Mathematics (Advanced Calculus & Algebra)"
				],
				tests: "NTA CBT Simulation Tests, Weekly Topic Quizzes, Full Syllabus All-India Ranker Mocks",
				hostel: "Strictly monitored residential facilities with high-speed CBT lab access and library counters",
				scholarship: "Direct scholarship based on Class 10th Board % or P-SAT National Scholarship Score"
			}
		},
		{
			id: "pre-foundation",
			category: "foundation",
			stream: "PRE-FOUNDATION & OLYMPIAD",
			streamBadgeColor: "bg-blue-50 text-blue-900 border-blue-200",
			title: "Classes 5th to 10th Division",
			classes: "Pre-Foundation, Olympiads & Board Mastery",
			tagline: "₹108+ Cr Scholarships • National Medals",
			badge: "EARLY EDGE 5TH-10TH",
			badgeColor: "bg-[#5b40cf] text-white",
			circleGradient: "from-[#2e0854] via-[#5b40cf] to-cyan-400",
			circleBorder: "border-cyan-400/50",
			circleShadow: "shadow-cyan-500/25",
			accentIcon: Trophy,
			accentColor: "text-cyan-300",
			avatar: null,
			topperName: "Prince Olympiad Medals",
			featured: false,
			idlePill: "⭐ ₹108+ Cr Scholarships • 500+ Medals",
			description: "Scientific aptitude grooming that builds conceptual brilliance for competitive exams like IJSO, PRMO, NTSE, and STSE while ensuring 95%+ board performance.",
			stats: [
				{
					label: "Scholarship Fund",
					val: "₹108+ Cr"
				},
				{
					label: "Olympiad Medals",
					val: "500+"
				},
				{
					label: "School Sync",
					val: "CBSE & RBSE"
				}
			],
			keyPoints: [
				"Dual synchronization: School Board + Olympiad syllabus",
				"Rigorous mental ability, logic & problem-solving drills",
				"Smart digital concept labs & interactive experiment desks",
				"Holistic growth: Sports, Yoga, personality development"
			],
			batchInfo: {
				name: "Junior Olympiad Batch",
				sub: "Classes 5th to 10th • Day & Boarding",
				cta: "Explore Batch",
				accentColor: "from-purple-50 via-indigo-50/50 to-purple-50",
				textColor: "text-slate-900",
				subColor: "text-purple-700 font-semibold",
				btnColor: "bg-[#2e0854] hover:bg-[#5b40cf] text-white"
			},
			modalDetails: {
				subjects: [
					"Science (Physics, Chemistry, Biology)",
					"Mathematics & Advanced Mental Ability",
					"Social Science & English Language"
				],
				tests: "Weekly Stage-1 & Stage-2 Olympiad Mocks, Term-wise School Board Simulations",
				hostel: "Special junior residential wings with dedicated wardens, evening supervised study tables and sports",
				scholarship: "Prince Olympiad & P-SAT Awards with cash prizes and up to 100% fee waivers"
			}
		}
	];
	const filteredCards = activeTab === "all" ? coursesData : coursesData.filter((c) => c.category === activeTab);
	return /* @__PURE__ */ jsxs("section", {
		id: "courses",
		className: "py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-[#fdfcff] via-[#f7f4fd] to-white relative overflow-hidden border-b border-purple-100 select-none scroll-mt-20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-3xl mx-auto mb-10 sm:mb-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[#2e0854] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-purple-700 animate-pulse" }), /* @__PURE__ */ jsx("span", { children: "Academic Excellence • Session 2026-27" })]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-[1.15]",
							children: [
								"Our Flagship",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#7c3aed]",
									children: "Classroom Programs"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs sm:text-sm text-slate-600 mt-2.5 font-normal max-w-2xl mx-auto leading-relaxed",
							children: "Engineered with 25 years of academic discipline, North India’s only 12-hour continuous faculty doubt desks, and national AIR 1 benchmarks."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md",
							children: [
								{
									id: "all",
									label: "All 3 Flagship Wings"
								},
								{
									id: "neet",
									label: "NEET-UG Medical"
								},
								{
									id: "jee",
									label: "IIT-JEE Engineering"
								},
								{
									id: "foundation",
									label: "Pre-Foundation 5th-10th"
								}
							].map((tab) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setActiveTab(tab.id),
								className: `px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${activeTab === tab.id ? "bg-[#2e0854] text-white shadow-md shadow-purple-950/20" : "text-slate-600 hover:text-slate-900 hover:bg-purple-50/80"}`,
								children: tab.label
							}, tab.id))
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start pt-2",
					children: filteredCards.map((card) => {
						const IconComponent = card.accentIcon;
						const isFeatured = card.featured;
						const isExpanded = hoveredCard === card.id || activeCardId === card.id;
						return /* @__PURE__ */ jsxs("div", {
							onMouseEnter: () => setHoveredCard(card.id),
							onMouseLeave: () => setHoveredCard(null),
							onClick: () => setActiveCardId(activeCardId === card.id ? null : card.id),
							className: `group relative rounded-[32px] sm:rounded-[36px] bg-white/95 backdrop-blur-xl border transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${isFeatured ? "border-purple-300/90 shadow-[0_20px_50px_rgba(91,64,207,0.16)] ring-2 ring-purple-600/25" : "border-purple-100/90 hover:border-purple-300 shadow-[0_12px_36px_rgba(46,8,84,0.06)] hover:shadow-[0_24px_50px_rgba(91,64,207,0.14)]"} ${isExpanded ? "shadow-[0_30px_70px_rgba(91,64,207,0.2)] -translate-y-2" : ""}`,
							children: [
								isFeatured && /* @__PURE__ */ jsxs("div", {
									className: "bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#2e0854] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-inner",
									children: [
										/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-[#ffc107] animate-pulse" }),
										/* @__PURE__ */ jsx("span", { children: "Premier Flagship Classroom Wing" }),
										/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-[#ffc107] animate-pulse" })
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "p-6 sm:p-7 flex-1 flex flex-col justify-between",
									children: [/* @__PURE__ */ jsxs("div", {
										className: `transition-transform duration-400 ease-out transform ${isExpanded ? "-translate-y-2 sm:-translate-y-3" : "translate-y-0"}`,
										children: [/* @__PURE__ */ jsxs("div", {
											className: "relative mx-auto mb-4 flex flex-col items-center",
											children: [/* @__PURE__ */ jsx("div", {
												className: `w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr ${card.circleGradient} ${card.circleShadow} shadow-lg relative transition-all duration-500 border ${card.circleBorder} ${isExpanded ? "scale-105 rotate-2 shadow-2xl ring-4 ring-purple-300/40" : "scale-100"}`,
												children: /* @__PURE__ */ jsx("div", {
													className: "w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#2e0854] to-[#1a0533] relative flex items-center justify-center shadow-inner",
													children: card.avatar ? /* @__PURE__ */ jsxs("div", {
														className: "relative w-full h-full",
														children: [/* @__PURE__ */ jsx("img", {
															src: card.avatar,
															alt: card.topperName,
															width: "160",
															height: "160",
															loading: "lazy",
															decoding: "async",
															className: `w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 ${isExpanded ? "scale-110" : "scale-100"}`,
															onError: (e) => {
																e.currentTarget.style.display = "none";
															}
														}), /* @__PURE__ */ jsx("div", {
															className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-1",
															children: /* @__PURE__ */ jsx("div", {
																className: "w-6 h-6 rounded-full bg-white/95 shadow-md flex items-center justify-center border border-white/80",
																children: /* @__PURE__ */ jsx(IconComponent, { className: "w-3 h-3 text-[#2e0854]" })
															})
														})]
													}) : /* @__PURE__ */ jsxs("div", {
														className: "flex flex-col items-center justify-center text-center p-2",
														children: [/* @__PURE__ */ jsx("div", {
															className: "w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-1",
															children: /* @__PURE__ */ jsx(IconComponent, { className: `w-5 h-5 ${card.accentColor}` })
														}), /* @__PURE__ */ jsx("span", {
															className: "text-[8.5px] font-black uppercase tracking-wider text-purple-200",
															children: "OLYMPIAD"
														})]
													})
												})
											}), /* @__PURE__ */ jsx("div", {
												className: "mt-[-12px] z-10",
												children: /* @__PURE__ */ jsx("span", {
													className: `px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider shadow-md border border-white/80 ${card.badgeColor}`,
													children: card.badge
												})
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "text-center",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "mb-1.5",
													children: /* @__PURE__ */ jsx("span", {
														className: `inline-block px-2.5 py-0.5 rounded-md text-[9.5px] font-black uppercase tracking-wider border ${card.streamBadgeColor}`,
														children: card.stream
													})
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#2e0854] transition-colors",
													children: card.title
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[11.5px] font-bold text-[#5b40cf] mt-0.5",
													children: card.classes
												}),
												/* @__PURE__ */ jsxs("div", {
													className: `transition-all duration-300 overflow-hidden ${isExpanded ? "max-h-0 opacity-0 mt-0 pointer-events-none" : "max-h-12 opacity-100 mt-2.5"}`,
													children: [/* @__PURE__ */ jsx("span", {
														className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50/90 text-purple-900 text-[11px] font-bold border border-purple-200/90 shadow-2xs",
														children: card.idlePill
													}), /* @__PURE__ */ jsxs("div", {
														className: "mt-2 text-[10.5px] text-slate-400 font-medium flex items-center justify-center gap-1",
														children: [/* @__PURE__ */ jsx("span", { children: "Hover to reveal curriculum & doubt counters" }), /* @__PURE__ */ jsx(ChevronDown, { className: "w-3 h-3 text-purple-600 animate-bounce" })]
													})]
												})
											]
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: `transition-all duration-500 ease-out overflow-hidden ${isExpanded ? "max-h-[460px] opacity-100 mt-3 pt-3 border-t border-purple-100/70" : "max-h-0 opacity-0 mt-0 pt-0 pointer-events-none"}`,
										children: [
											/* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-600 leading-relaxed font-normal mb-3.5 text-center",
												children: card.description
											}),
											/* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-3 gap-2 py-2.5 px-2 rounded-2xl bg-slate-50/90 border border-slate-100 mb-3.5",
												children: card.stats.map((st, sIdx) => /* @__PURE__ */ jsxs("div", {
													className: "text-center",
													children: [/* @__PURE__ */ jsx("span", {
														className: "block text-xs sm:text-sm font-black text-[#2e0854]",
														children: st.val
													}), /* @__PURE__ */ jsx("span", {
														className: "block text-[9.5px] text-slate-500 font-medium truncate",
														children: st.label
													})]
												}, sIdx))
											}),
											/* @__PURE__ */ jsx("div", {
												className: "space-y-1.5 text-left mb-2",
												children: card.keyPoints.map((pt, pIdx) => /* @__PURE__ */ jsxs("div", {
													className: "flex items-start gap-2 text-xs font-medium text-slate-700",
													children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", {
														className: "leading-tight",
														children: pt
													})]
												}, pIdx))
											})
										]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-5 sm:px-6 pb-5 pt-0",
									children: /* @__PURE__ */ jsxs("div", {
										onClick: (e) => {
											e.stopPropagation();
											setSelectedCourseModal(card);
										},
										className: `w-full rounded-full p-2.5 sm:p-3 bg-gradient-to-r ${card.batchInfo.accentColor} border border-purple-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between gap-2.5 cursor-pointer group/oval`,
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 pl-2 min-w-0",
											children: [/* @__PURE__ */ jsx("div", {
												className: "w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-purple-100",
												children: /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3 text-purple-700" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "truncate",
												children: [/* @__PURE__ */ jsx("div", {
													className: `text-[11.5px] font-black truncate leading-tight ${card.batchInfo.textColor}`,
													children: card.batchInfo.name
												}), /* @__PURE__ */ jsx("div", {
													className: `text-[9.5px] truncate ${card.batchInfo.subColor}`,
													children: card.batchInfo.sub
												})]
											})]
										}), /* @__PURE__ */ jsx("div", {
											className: "shrink-0",
											children: /* @__PURE__ */ jsxs("span", {
												className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all shadow-sm ${card.batchInfo.btnColor} group-hover/oval:scale-105`,
												children: [/* @__PURE__ */ jsx("span", { children: card.batchInfo.cta }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 group-hover/oval:translate-x-0.5 transition-transform" })]
											})
										})]
									})
								})
							]
						}, card.id);
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 sm:mt-16 pt-8 border-t border-purple-200/70",
					children: /* @__PURE__ */ jsx("div", {
						className: "max-w-4xl mx-auto rounded-3xl bg-white/85 backdrop-blur-md border border-purple-200/80 p-4 sm:p-6 shadow-sm shadow-purple-950/5",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-purple-100",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "pt-2 md:pt-0 px-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xl sm:text-2xl font-black text-[#2e0854]",
										children: "25+ Years"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-slate-500 font-medium",
										children: "Continuous Academic Legacy"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "pt-2 md:pt-0 px-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xl sm:text-2xl font-black text-[#5b40cf]",
										children: "12-Hour Daily"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-slate-500 font-medium",
										children: "Non-Stop Doubt Counters"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "pt-2 md:pt-0 px-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xl sm:text-2xl font-black text-[#2e0854]",
										children: "1,000+ MBBS & IIT"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-slate-500 font-medium",
										children: "Selections Every Year"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "pt-2 md:pt-0 px-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xl sm:text-2xl font-black text-[#ffc107]",
										children: "₹108+ Crore"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-slate-500 font-medium",
										children: "P-SAT Talent Scholarships"
									})]
								})
							]
						})
					})
				})
			]
		}), selectedCourseModal && /* @__PURE__ */ jsx("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
			onClick: () => setSelectedCourseModal(null),
			children: /* @__PURE__ */ jsxs("div", {
				className: "bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-200 p-6 sm:p-8 relative animate-fade-in",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCourseModal(null),
						className: "absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors",
						children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ jsx("span", {
							className: `px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider border ${selectedCourseModal.streamBadgeColor}`,
							children: selectedCourseModal.stream
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold text-purple-700",
							children: "Session 2026-27"
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2",
						children: selectedCourseModal.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed",
						children: selectedCourseModal.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4 mb-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "p-4 rounded-2xl bg-purple-50/60 border border-purple-100",
								children: [/* @__PURE__ */ jsxs("h4", {
									className: "text-xs font-black uppercase tracking-wider text-[#2e0854] mb-2 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(Layers, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "Core Curriculum & Subjects" })]
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-1.5 text-xs text-slate-700 font-medium",
									children: selectedCourseModal.modalDetails.subjects.map((s, idx) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ jsx("span", { children: s })]
									}, idx))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-4 rounded-2xl bg-amber-50/50 border border-amber-100",
								children: [/* @__PURE__ */ jsxs("h4", {
									className: "text-xs font-black uppercase tracking-wider text-amber-950 mb-1 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-amber-700" }), /* @__PURE__ */ jsx("span", { children: "Examination & Mock Test Schedule" })]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-700 font-medium leading-relaxed",
									children: selectedCourseModal.modalDetails.tests
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-4 rounded-2xl bg-slate-50 border border-slate-200",
								children: [/* @__PURE__ */ jsxs("h4", {
									className: "text-xs font-black uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "Residential Hostels & Scholarships" })]
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-xs text-slate-600 font-medium leading-relaxed",
									children: [
										selectedCourseModal.modalDetails.hostel,
										" • ",
										selectedCourseModal.modalDetails.scholarship
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row items-center gap-2.5 pt-4 border-t border-slate-100",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: `/courses/${selectedCourseModal.id}`,
								className: "w-full sm:flex-1 py-3 px-4 rounded-2xl bg-[#2e0854] hover:bg-[#5b40cf] text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md transition-all no-underline text-center",
								children: [/* @__PURE__ */ jsx("span", { children: "View Full Course Syllabus & Routine" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-amber-300" })]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "tel:9610892222",
								className: "w-full sm:w-auto py-3 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100 text-[#2e0854] text-xs font-black flex items-center justify-center gap-1.5 border border-purple-200 transition-all no-underline",
								children: [/* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "9610892222" })]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "https://wa.me/919610892222?text=Hello%20PCP%20Sikar,%20I%20want%20to%20know%20more%20about%20admissions",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "w-full sm:w-auto py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md transition-all no-underline",
								children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "WhatsApp" })]
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { PcpCoursesSection as default };
