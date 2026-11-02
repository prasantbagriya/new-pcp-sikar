import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Award, Building2, CheckCircle, CheckCircle2, Clock, Flame, HeartHandshake, Sparkles, UserCheck, XCircle } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpWhySection.jsx
function PcpWhySection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-3xl mx-auto mb-14",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "The Unfair Academic Advantage" })]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight",
								children: [
									"Why Students & Parents ",
									/* @__PURE__ */ jsx("br", { className: "hidden sm:inline" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-[#3b0764]",
										children: "Choose PCP Sikar Over Others"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal",
								children: "Designed with zero compromises. An academic ecosystem built to maximize student potential and turn rigorous preparation into peak national rank."
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16",
						children: [
							{
								icon: Clock,
								title: "12-Hour Daily Faculty Doubt Desks",
								metric: "99.4%",
								metricLabel: "Doubts Cleared Same-Day",
								badge: "Signature Pillar",
								desc: "While other coachings give tokens or limit questions, PCP runs non-stop 12-hour personal faculty doubt desks from 8 AM to 8 PM every single day.",
								bullets: [
									"Permanent faculties, not temporary assistants",
									"Individual 1-on-1 desk seating",
									"Zero pending doubts before sleeping"
								]
							},
							{
								icon: Flame,
								title: "NEET AIR-1 & JEE AIR-225 Pedagogy",
								metric: "AIR-1",
								metricLabel: "720/720 National Rank",
								badge: "National Benchmarks",
								desc: "The exact curriculum, DPP sets, and test strategies that delivered Sikar's first-ever NEET AIR-1 and JEE Advanced AIR-225.",
								bullets: [
									"Former IITian & Senior Doctor faculty roster",
									"Curated question banks matching NTA trends",
									"Personalized ranker focus groups"
								]
							},
							{
								icon: Building2,
								title: "1-Campus Integrated Residential Safety",
								metric: "1 Campus",
								metricLabel: "Zero Transit Fatigue",
								desc: "Classrooms, AC hostels, pure-veg mess, sports grounds, and CBT labs within one secure, gated perimeter. Students save 2-3 hours of daily travel.",
								badge: "Safe Ecosystem",
								bullets: [
									"Separate secure boys & girls AC hostel wings",
									"Nutritious 4-meal pure vegetarian dining",
									"24/7 CCTV surveillance and resident wardens"
								]
							},
							{
								icon: UserCheck,
								title: "Transparent Biometric & Score Analytics",
								metric: "100%",
								metricLabel: "Transparent to Parents",
								badge: "Live Parent App",
								desc: "Every punch-in attendance, test score, negative marking count, and time-per-question is tracked and delivered to parents instantly.",
								bullets: [
									"Automated attendance SMS notifications",
									"Weekly test percentile progress curves",
									"Scheduled teacher-parent guidance calls"
								]
							},
							{
								icon: HeartHandshake,
								title: "Holistic Wellness & Low-Stress Culture",
								metric: "0% Pressure",
								metricLabel: "Joyful High Performance",
								badge: "Student Wellbeing",
								desc: "We treat students like family. Mental wellness counselors, daily yoga, open sports hours, and motivational workshops ensure peak mental stamina.",
								bullets: [
									"Cricket, basketball and volleyball grounds",
									"Weekly motivational sessions by AIR toppers",
									"Full-time caring residential counselors"
								]
							},
							{
								icon: Award,
								title: "Up to 100% Scholarship Pathway",
								metric: "100%",
								metricLabel: "Tuition Fee Concessions",
								badge: "Merit Rewarded",
								desc: "Deserving students are never held back by finances. Substantial fee waivers through the Prince Olympiad, P-SAT test, and board percentages.",
								bullets: [
									"Direct concession for 90%+ board scorers",
									"State-wide Prince Olympiad scholarships",
									"Weekly Sunday P-SAT testing opportunities"
								]
							}
						].map((p, idx) => {
							const Icon = p.icon;
							return /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col justify-between p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-purple-300 hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start justify-between gap-3 mb-5",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-12 h-12 rounded-2xl bg-[#ffc107] flex items-center justify-center text-black shadow-xs group-hover:scale-105 transition-transform",
											children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-black" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "text-right",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-2xl font-black text-[#2e1065] block leading-none",
												children: p.metric
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-tight",
												children: p.metricLabel
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mb-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-100 text-[#2e1065] inline-block mb-1.5",
											children: p.badge
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-xl font-black text-slate-900 tracking-tight leading-snug",
											children: p.title
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5",
										children: p.desc
									})
								] }), /* @__PURE__ */ jsx("div", {
									className: "space-y-1.5 pt-4 border-t border-slate-200/80",
									children: p.bullets.map((b, bIdx) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-start gap-1.5 text-xs font-semibold text-slate-700",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: b })]
									}, bIdx))
								})]
							}, idx);
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "p-6 sm:p-8 bg-slate-50 border-b border-slate-200/80",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-100 px-3 py-1 rounded-full inline-block mb-2",
									children: "Direct Comparison"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl sm:text-3xl font-black text-slate-900 tracking-tight",
									children: "PCP Sikar vs Generic Coaching Hubs"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs sm:text-sm text-slate-600 mt-1",
									children: "Why hundreds of parents relocate their children from crowded coaching corridors to PCP Sikar every single session."
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full text-left border-collapse",
								children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
									className: "border-b border-slate-200 text-xs uppercase tracking-wider",
									children: [
										/* @__PURE__ */ jsx("th", {
											className: "py-4 px-6 text-slate-700 font-black",
											children: "Critical Academic Parameter"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "py-4 px-6 bg-purple-50 text-[#2e1065] font-black border-x border-purple-200",
											children: "PCP Sikar System"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "py-4 px-6 text-slate-600 font-bold",
											children: "Generic Kota / Metro Coachings"
										})
									]
								}) }), /* @__PURE__ */ jsx("tbody", {
									className: "divide-y divide-slate-100 text-xs sm:text-sm",
									children: [
										{
											feature: "Daily Doubt Resolution Desks",
											pcp: "12 Hours Daily Non-stop Individual Faculty Rooms",
											others: "Token system, 1-2 hours limited or online AI bots"
										},
										{
											feature: "Teacher Stability & Full-Time Mentors",
											pcp: "100% Permanent senior faculties since Day 1",
											others: "Frequent faculty poaching & mid-session teacher shifts"
										},
										{
											feature: "Integrated Campus Security",
											pcp: "Coaching, AC Hostels & Dining in 1 secured campus",
											others: "Students travel between private PGs & coaching daily"
										},
										{
											feature: "National Selection Efficiency",
											pcp: "1:4 in JEE Advanced • 1:5 in NEET-UG (India's Best)",
											others: "Massive enrollment factories with low overall selection ratio"
										},
										{
											feature: "Parent Communication & Analytics",
											pcp: "Live SMS alerts, question-wise test graph & mentor calls",
											others: "Sporadic or no communication until final exams"
										}
									].map((row, rIdx) => /* @__PURE__ */ jsxs("tr", {
										className: "hover:bg-slate-50/60 transition-colors",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-4 px-6 font-bold text-slate-900",
												children: row.feature
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-4 px-6 bg-purple-50/70 border-x border-purple-200 font-bold text-[#2e1065]",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ jsx("span", { children: row.pcp })]
												})
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-4 px-6 text-slate-600 font-normal",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 text-slate-500",
													children: [/* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-rose-500 shrink-0" }), /* @__PURE__ */ jsx("span", { children: row.others })]
												})
											})
										]
									}, rIdx))
								})]
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { PcpWhySection as default };
