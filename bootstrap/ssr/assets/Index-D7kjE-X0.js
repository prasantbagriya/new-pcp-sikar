import { n as GlobalNavbar } from "./GlobalNavbar-CLKqeU09.js";
import { t as BlogFooter } from "./BlogFooter-CvQ4tjQi.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, GraduationCap, MessageSquare, Phone, Sparkles } from "lucide-react";
//#region resources/js/Pages/Courses/Index.jsx
function CoursesIndex({ courses = [], meta }) {
	const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
	const [selectedStream, setSelectedStream] = useState("all");
	const streams = [
		{
			id: "all",
			label: "All Programs"
		},
		{
			id: "neet",
			label: "NEET-UG (Medical)"
		},
		{
			id: "jee",
			label: "IIT-JEE (Engineering)"
		},
		{
			id: "foundation",
			label: "Pre-Foundation (5th-10th)"
		},
		{
			id: "defence",
			label: "NDA & Defence"
		}
	];
	const filteredCourses = selectedStream === "all" ? courses : courses.filter((c) => c.category === selectedStream);
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#faf7fe] dark:bg-[#070b14] min-h-screen text-slate-900 dark:text-white font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854] flex flex-col transition-colors duration-300",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: meta?.title || "Academic Coaching Programs | PCP Sikar & Prince Eduhub" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: meta?.description || "Explore premier classroom and residential coaching programs for NEET-UG, IIT-JEE, Pre-Foundation, and NDA in Sikar & Jaipur."
			})] }),
			/* @__PURE__ */ jsx(GlobalNavbar, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-grow",
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: "relative w-full py-20 md:py-26 overflow-hidden bg-gradient-to-br from-[#2e0854] via-[#190433] to-[#120120] text-white",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 w-96 h-96 bg-[#5b40cf]/30 rounded-full blur-3xl pointer-events-none" }),
							/* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
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
												children: "Academic Programs"
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex justify-center mb-6",
										children: /* @__PURE__ */ jsxs("div", {
											className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/30 to-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-white/15 backdrop-blur-md shadow-inner",
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ jsx("span", { children: "Session 2026-27 Admissions Open • Fresh Batches Every Monday" })]
										})
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto",
										children: ["Empowering India’s Future ", /* @__PURE__ */ jsx("span", {
											className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-200 to-white",
											children: "Doctors, IITians & Officers."
										})]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-3xl mx-auto font-normal mb-10",
										children: [
											"PCP Sikar pairs high-caliber faculties with an uncompromising daily routine, residential care, and authentic academic transparency across ",
											/* @__PURE__ */ jsx("strong", { children: "NEET-UG, IIT-JEE, Pre-Foundation, and NDA Defence" }),
											" divisions."
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center justify-center gap-3.5",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "tel:+919610892222",
											className: "inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-amber-950/20 transition-all hover:scale-102 active:scale-98 no-underline",
											children: [/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-[#2e0854]" }), /* @__PURE__ */ jsx("span", { children: "Admission Helpline: 9610-89-2222" })]
										}), /* @__PURE__ */ jsxs("a", {
											href: "https://api.whatsapp.com/send?phone=919610892222&text=Hello%20PCP%20Counselor,%20I%20want%20information%20about%20PCP%20Courses",
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-white/20 shadow-md transition-all no-underline",
											children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4 fill-white" }), /* @__PURE__ */ jsx("span", { children: "WhatsApp Career Counselor" })]
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative -mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5",
							children: [
								{
									value: "AIR 1",
									label: "NEET-UG Benchmark",
									sub: "National Rank 1 Pedagogy"
								},
								{
									value: "AIR 225",
									label: "Sikar Coaching Topper",
									sub: "JEE Advanced (IIT Bombay)"
								},
								{
									value: "15,000+",
									label: "Selections Produced",
									sub: "MBBS, IIT/NIT & NDA Seats"
								},
								{
									value: "12 Hours",
									label: "Daily Faculty Doubts",
									sub: "Non-stop 8 AM to 8 PM"
								},
								{
									value: "₹108+ Cr",
									label: "Scholarship Corpus",
									sub: "Prince Olympiad & P-SAT"
								}
							].map((s, idx) => /* @__PURE__ */ jsxs("div", {
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
					/* @__PURE__ */ jsxs("section", {
						className: "py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-center max-w-3xl mx-auto mb-10",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2",
									children: "Curated Academic Divisions"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#2e0854] dark:text-white tracking-tight",
									children: "Select Your Competitive Path"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3",
									children: "Each division operates with dedicated permanent faculties, tailored daily practice problem sheets (DPPs), and personalized doubt counters."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-purple-100/70 dark:bg-slate-900 border border-purple-200/80 dark:border-slate-800 max-w-fit mx-auto",
									children: streams.map((st) => /* @__PURE__ */ jsx("button", {
										onClick: () => setSelectedStream(st.id),
										className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${selectedStream === st.id ? "bg-[#2e0854] text-white shadow-md" : "text-slate-700 dark:text-slate-300 hover:text-[#2e0854] hover:bg-white/60 dark:hover:bg-slate-800"}`,
										children: st.label
									}, st.id))
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10",
							children: filteredCourses.map((c) => /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col justify-between rounded-3xl bg-white dark:bg-[#0c1c38] border border-purple-100 dark:border-slate-800 shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300 overflow-hidden",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "p-6 sm:p-8",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between gap-3 mb-4",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-[11px] font-black uppercase tracking-wider border border-purple-200",
												children: [/* @__PURE__ */ jsx(GraduationCap, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: c.stream })]
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-900/60",
												children: c.classes
											})]
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "text-2xl sm:text-3xl font-black text-[#2e0854] dark:text-white tracking-tight leading-snug mb-2",
											children: c.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs sm:text-sm font-semibold text-[#5b40cf] dark:text-purple-300 mb-4",
											children: c.tagline
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal",
											children: c.description
										}),
										/* @__PURE__ */ jsx("div", {
											className: "grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-purple-50/60 dark:bg-slate-900 border border-purple-100/70 dark:border-slate-800 mb-6 text-center",
											children: c.stats.slice(0, 3).map((st, sIdx) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
												className: "text-base sm:text-lg font-black text-[#2e0854] dark:text-purple-200",
												children: st.value
											}), /* @__PURE__ */ jsx("div", {
												className: "text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5",
												children: st.label
											})] }, sIdx))
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2 mb-6",
											children: [/* @__PURE__ */ jsxs("h4", {
												className: "text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Available Batches" })]
											}), /* @__PURE__ */ jsx("div", {
												className: "space-y-1.5",
												children: c.batches.map((b, bIdx) => /* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800",
													children: [/* @__PURE__ */ jsx("span", {
														className: "font-bold text-slate-800 dark:text-white",
														children: b.name
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[11px] text-purple-700 dark:text-purple-300 font-semibold",
														children: b.duration
													})]
												}, bIdx))
											})]
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-5 sm:p-6 bg-purple-50/40 dark:bg-slate-900 border-t border-purple-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3",
									children: [/* @__PURE__ */ jsxs(Link, {
										href: `${basePath}/courses/${c.slug}`,
										className: "w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#2e0854] hover:bg-[#5b40cf] text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md hover:shadow-lg no-underline text-center",
										children: [/* @__PURE__ */ jsx("span", { children: "View Full Course Syllabus & Routine" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
									}), /* @__PURE__ */ jsxs("a", {
										href: "tel:+919610892222",
										className: "w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-purple-100 text-[#2e0854] dark:text-white font-bold py-3 px-4 rounded-xl text-xs border border-purple-200 dark:border-slate-700 transition-colors no-underline whitespace-nowrap",
										children: [/* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "9610-89-2222" })]
									})]
								})]
							}, c.id))
						})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "py-16 sm:py-20 bg-white dark:bg-[#070e1b] border-y border-purple-100/90 dark:border-slate-800",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "text-center max-w-2xl mx-auto mb-12",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-black uppercase tracking-wider text-[#5b40cf] block mb-2",
										children: "Direct Side-by-Side Comparison"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "text-3xl sm:text-4xl font-black text-[#2e0854] dark:text-white tracking-tight",
										children: "Program Matrix At A Glance"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-600 dark:text-slate-300 text-sm mt-3",
										children: "Compare targets, batch structure, doubt hours, and residential boarding arrangements."
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "overflow-x-auto rounded-2xl border border-purple-100 dark:border-slate-800 shadow-sm",
								children: /* @__PURE__ */ jsxs("table", {
									className: "w-full text-left border-collapse text-xs sm:text-sm",
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", {
										className: "bg-[#2e0854] text-white",
										children: [
											"Program",
											"Target Classes",
											"Core Examination",
											"Daily Doubt Desks",
											"Hostel Facility",
											"Scholarship Test",
											"Action"
										].map((head, idx) => /* @__PURE__ */ jsx("th", {
											className: "p-4 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap border-r border-purple-900/50 last:border-r-0",
											children: head
										}, idx))
									}) }), /* @__PURE__ */ jsx("tbody", {
										className: "divide-y divide-purple-100/70 dark:divide-slate-800",
										children: [
											{
												name: "NEET-UG Medical",
												classes: "11th, 12th & Dropper",
												exam: "NTA NEET-UG (MBBS/BDS)",
												doubts: "12 Hours Continuous",
												hostel: "Boys & Girls AC/Air-Cooled",
												test: "P-SAT & Board % Concession",
												slug: "neet-ug"
											},
											{
												name: "IIT-JEE Engineering",
												classes: "11th, 12th & Super-50",
												exam: "JEE Main + JEE Advanced",
												doubts: "12 Hours Continuous",
												hostel: "Boys & Girls Residential",
												test: "P-SAT & JEE Main Concession",
												slug: "iit-jee"
											},
											{
												name: "Pre-Foundation & Olympiad",
												classes: "5th to 10th Standard",
												exam: "Olympiads, NTSE, PRMO, Boards",
												doubts: "Supervised Evening Tables",
												hostel: "Junior Residential Wing",
												test: "Prince Olympiad (₹108+ Cr)",
												slug: "pre-foundation"
											},
											{
												name: "Prince Defence Academy",
												classes: "11th, 12th & 12th Pass",
												exam: "UPSC NDA/NA + SSB Interview",
												doubts: "Classroom + SSB Assessors",
												hostel: "Military Barracks Hostels",
												test: "Defence Talent Exam",
												slug: "nda-defence"
											}
										].map((row, idx) => /* @__PURE__ */ jsxs("tr", {
											className: "hover:bg-purple-50/50 dark:hover:bg-slate-900/50 transition-colors",
											children: [
												/* @__PURE__ */ jsx("td", {
													className: "p-4 font-bold text-[#2e0854] dark:text-white whitespace-nowrap",
													children: row.name
												}),
												/* @__PURE__ */ jsx("td", {
													className: "p-4 text-slate-700 dark:text-slate-300 whitespace-nowrap",
													children: row.classes
												}),
												/* @__PURE__ */ jsx("td", {
													className: "p-4 text-slate-700 dark:text-slate-300 whitespace-nowrap",
													children: row.exam
												}),
												/* @__PURE__ */ jsx("td", {
													className: "p-4 text-emerald-600 dark:text-emerald-400 font-bold whitespace-nowrap",
													children: row.doubts
												}),
												/* @__PURE__ */ jsx("td", {
													className: "p-4 text-slate-700 dark:text-slate-300 whitespace-nowrap",
													children: row.hostel
												}),
												/* @__PURE__ */ jsx("td", {
													className: "p-4 text-amber-600 dark:text-amber-400 font-semibold whitespace-nowrap",
													children: row.test
												}),
												/* @__PURE__ */ jsx("td", {
													className: "p-4 whitespace-nowrap",
													children: /* @__PURE__ */ jsxs(Link, {
														href: `${basePath}/courses/${row.slug}`,
														className: "inline-flex items-center gap-1 font-bold text-[#5b40cf] hover:text-[#2e0854] hover:underline",
														children: [/* @__PURE__ */ jsx("span", { children: "Explore" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
													})
												})
											]
										}, idx))
									})]
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ jsxs("div", {
							className: "p-7 sm:p-10 bg-gradient-to-br from-purple-50/90 via-indigo-50/50 to-amber-50/40 dark:from-[#150e26] dark:via-[#1a1233] dark:to-[#0f172a] rounded-3xl border border-purple-200/80 dark:border-purple-800/50 shadow-lg shadow-purple-950/5 relative overflow-hidden",
							children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-br from-purple-300/25 to-pink-300/20 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
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
										className: "text-2xl sm:text-3xl font-black text-[#2e0854] dark:text-white mb-3 tracking-tight leading-snug",
										children: "Need Help Choosing the Right Batch?"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal",
										children: "Connect with senior academic counselors at PCP Sikar for stream guidance, hostel allocation, and scholarship concessions via the P-SAT National Talent Exam."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-row items-center gap-2 sm:gap-3.5 w-full",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "tel:+919610892222",
											className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#2e0854] hover:bg-[#451378] text-white font-bold py-2.5 sm:py-3 px-2 sm:px-6 rounded-lg shadow-md transition-all text-xs sm:text-sm whitespace-nowrap no-underline text-center",
											children: [/* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc107]" }), /* @__PURE__ */ jsx("span", { children: "Call Admissions: 9610-89-2222" })]
										}), /* @__PURE__ */ jsxs("a", {
											href: "https://api.whatsapp.com/send?phone=919610892222&text=Hello%20PCP%20Counselor,%20I%20want%20information%20about%20PCP%20Courses",
											target: "_blank",
											rel: "noreferrer",
											className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 sm:py-3 px-2 sm:px-6 rounded-lg shadow-md transition-all text-xs sm:text-sm whitespace-nowrap no-underline text-center",
											children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-[#25D366]" }), /* @__PURE__ */ jsx("span", { children: "WhatsApp Desk" })]
										})]
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 dark:bg-[#0c1428]/95 backdrop-blur-md border-t border-purple-200 dark:border-slate-800 shadow-[0_-4px_25px_rgba(46,8,84,0.18)] flex items-center gap-2",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "tel:+919610892222",
						className: "flex-1 py-2.5 px-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-[#2e0854] font-black text-xs flex items-center justify-center gap-1 border border-purple-200 transition-colors no-underline whitespace-nowrap",
						children: [/* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Call Helpline" })]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://api.whatsapp.com/send?phone=919610892222&text=Hello%20PCP%20Counselor,%20I%20want%20information%20about%20PCP%20Courses",
						target: "_blank",
						rel: "noreferrer",
						className: "flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs flex items-center justify-center gap-1 shadow-md transition-colors no-underline whitespace-nowrap",
						children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-3.5 h-3.5 fill-white text-[#25D366]" }), /* @__PURE__ */ jsx("span", { children: "WhatsApp" })]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "#courses",
						className: "flex-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#2e0854] font-black text-xs flex items-center justify-center gap-1 shadow-md transition-all active:scale-98 whitespace-nowrap no-underline text-center",
						children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#2e0854]" }), /* @__PURE__ */ jsx("span", { children: "Explore Batches" })]
					})
				]
			}),
			/* @__PURE__ */ jsx(BlogFooter, {})
		]
	});
}
//#endregion
export { CoursesIndex as default };
