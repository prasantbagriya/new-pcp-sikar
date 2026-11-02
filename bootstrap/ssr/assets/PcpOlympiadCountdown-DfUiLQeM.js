import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Calendar, ExternalLink, Sparkles } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpOlympiadCountdown.jsx
function PcpOlympiadCountdown() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200/80",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1045] via-[#2a0e5f] to-[#160b33] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-purple-500/30",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -top-24 -left-24 w-96 h-96 bg-[#ffc107]/10 rounded-full blur-[140px] pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px] pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffc107] text-black text-xs font-black uppercase tracking-wider shadow-md",
									children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-black" }), /* @__PURE__ */ jsx("span", { children: "India's Biggest Talent Discovery & Scholarship Exam" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-xl sm:text-2xl font-black text-white tracking-tight",
											children: "PRINCE"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-xl sm:text-2xl font-black text-[#ffc107] italic tracking-tight",
											children: "Olympiad"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "px-2 py-0.5 rounded text-[10px] font-black uppercase bg-white/20 text-white",
											children: "Classes V - XII"
										})
									]
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white",
									children: [
										"HURRY UP! ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "bg-clip-text text-transparent bg-gradient-to-r from-[#ffc107] via-amber-300 to-[#ffb703]",
											children: "Don't Miss The Last Opportunity"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-sm sm:text-base text-purple-200 font-semibold",
									children: [/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-[#ffc107]" }), /* @__PURE__ */ jsxs("span", { children: ["Last Date to Enroll: ", /* @__PURE__ */ jsx("strong", {
										className: "text-white",
										children: "17 SEPT., 2026"
									})] })]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs sm:text-sm text-purple-200/90 max-w-xl leading-relaxed",
									children: "Win up to 100% Tuition Fee Waivers, Cash Rewards, Laptops, and National Recognition for Classes 5th to 12th. Test centers across Rajasthan, Haryana, Punjab, UP & MP."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "https://www.po.princeeduhub.com",
										target: "_blank",
										rel: "noreferrer",
										className: "btn-brand-yellow px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all",
										children: [/* @__PURE__ */ jsx("span", { children: "Apply ONLINE Now (po.princeeduhub.com)" }), /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })]
									}), /* @__PURE__ */ jsx("a", {
										href: "tel:9610892222",
										className: "px-5 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-colors",
										children: "Helpline: 9610-89-2222"
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-5 flex flex-col items-center justify-center",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative w-full max-w-xs sm:max-w-sm p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-black uppercase tracking-widest text-[#ffc107] mb-4",
										children: "Admissions Closing Soon"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-end justify-center gap-2 w-full my-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex-1 py-4 px-2 rounded-2xl bg-purple-900/50 border border-purple-400/20 text-center opacity-60",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-xl sm:text-2xl font-black text-purple-300",
													children: "6"
												}), /* @__PURE__ */ jsx("div", {
													className: "text-[9px] font-bold text-purple-300 uppercase",
													children: "Days Left"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex-[1.4] py-6 px-3 rounded-2xl bg-white text-slate-900 text-center shadow-2xl border-2 border-[#ffc107] transform -translate-y-2 relative",
												children: [
													/* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#ffc107]" }),
													/* @__PURE__ */ jsx("div", {
														className: "text-4xl sm:text-5xl font-black text-[#2e1065] leading-none",
														children: "5"
													}),
													/* @__PURE__ */ jsx("div", {
														className: "text-xs font-black uppercase tracking-wider text-slate-800 mt-1",
														children: "Days To Go"
													})
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex-1 py-4 px-2 rounded-2xl bg-purple-900/50 border border-purple-400/20 text-center opacity-60",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-xl sm:text-2xl font-black text-purple-300",
													children: "4"
												}), /* @__PURE__ */ jsx("div", {
													className: "text-[9px] font-bold text-purple-300 uppercase",
													children: "Days Left"
												})]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "text-center mt-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-xs text-amber-300 font-bold block",
											children: "⚡ Limited Seats per Exam Center"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-purple-200/80",
											children: "Online Registration Closes at 11:59 PM"
										})]
									})
								]
							})
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { PcpOlympiadCountdown as default };
