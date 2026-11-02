import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Award, Calculator, Sparkles } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpScholarshipSection.jsx
function PcpScholarshipSection() {
	const [targetStream, setTargetStream] = useState("neet");
	const [scoreBracket, setScoreBracket] = useState("95plus");
	const [calculatedScholarship, setCalculatedScholarship] = useState("90% - 100% Fee Waiver");
	const handleCalculate = (bracket, stream) => {
		setScoreBracket(bracket);
		setTargetStream(stream);
		let scholarship = "Up to 25% Fee Waiver";
		if (bracket === "95plus") scholarship = "90% - 100% Tuition Fee Waiver";
		else if (bracket === "90to95") scholarship = "60% - 75% Tuition Fee Waiver";
		else if (bracket === "85to90") scholarship = "40% - 50% Tuition Fee Waiver";
		else if (bracket === "80to85") scholarship = "25% - 35% Tuition Fee Waiver";
		setCalculatedScholarship(scholarship);
	};
	return /* @__PURE__ */ jsx("section", {
		id: "scholarship",
		className: "py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-3xl mx-auto mb-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3",
						children: [/* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "P-SAT & Prince Olympiad 2026-27" })]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight",
						children: [
							"Earn Up to ",
							/* @__PURE__ */ jsx("span", {
								className: "text-[#3b0764]",
								children: "100% Scholarship"
							}),
							" in Fees"
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-sm sm:text-base text-slate-600 mt-2 leading-relaxed font-normal",
						children: [
							"Deserving students should never be held back by financial constraints. Unlock substantial fee waivers through the ",
							/* @__PURE__ */ jsx("strong", { children: "Prince Olympiad" }),
							", ",
							/* @__PURE__ */ jsx("strong", { children: "P-SAT Exam" }),
							", or your board class marks."
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7 rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 pb-4 mb-6 border-b border-slate-100",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-10 h-10 rounded-xl bg-[#ffc107] flex items-center justify-center text-black shadow-xs",
								children: /* @__PURE__ */ jsx(Calculator, { className: "w-5 h-5 text-black" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-black text-slate-900",
								children: "Instant Scholarship Estimator"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: "Select your parameters to check your estimated fee waiver bracket."
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ jsx("label", {
								className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider",
								children: "1. Select Target Exam Stream"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-3 gap-2.5",
								children: [
									{
										id: "neet",
										label: "NEET-UG"
									},
									{
										id: "jee",
										label: "IIT-JEE"
									},
									{
										id: "foundation",
										label: "Pre-Foundation"
									}
								].map((tab) => /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => handleCalculate(scoreBracket, tab.id),
									className: `py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${targetStream === tab.id ? "bg-[#ffc107] text-black shadow-xs" : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"}`,
									children: tab.label
								}, tab.id))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ jsx("label", {
								className: "block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider",
								children: "2. Board Class Percentage or P-SAT Predicted Score"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
								children: [
									{
										id: "95plus",
										label: ">= 95% Marks"
									},
									{
										id: "90to95",
										label: "90% - 94.9%"
									},
									{
										id: "85to90",
										label: "85% - 89.9%"
									},
									{
										id: "80to85",
										label: "80% - 84.9%"
									}
								].map((b) => /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => handleCalculate(b.id, targetStream),
									className: `py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${scoreBracket === b.id ? "bg-[#2e1065] text-white shadow-xs" : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"}`,
									children: b.label
								}, b.id))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 rounded-2xl bg-gradient-to-r from-[#2e1065] to-[#4c1d95] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1",
									children: "Estimated Eligibility"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-2xl sm:text-3xl font-black tracking-tight text-white",
									children: calculatedScholarship
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-purple-200 mt-1",
									children: "Applicable on tuition fee component for session 2026-27."
								})
							] }), /* @__PURE__ */ jsxs("a", {
								href: "#courses",
								className: "btn-brand-yellow px-6 py-3 text-xs font-black uppercase text-black inline-flex items-center gap-1.5 shrink-0 shadow-md",
								children: [/* @__PURE__ */ jsx("span", { children: "Claim Waiver" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-2",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "Exam Pathways" })]
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-xl sm:text-2xl font-black text-slate-900 tracking-tight",
							children: "How to Qualify for Scholarship"
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4 text-xs sm:text-sm",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-lg bg-[#ffc107] text-black font-black flex items-center justify-center shrink-0",
										children: "1"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-slate-900 mb-0.5",
										children: "Prince Olympiad (Pan-India)"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-600 text-xs",
										children: "Massive annual science & maths talent exam held across multiple states with cash rewards, laptops, and up to 100% scholarships."
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-lg bg-[#ffc107] text-black font-black flex items-center justify-center shrink-0",
										children: "2"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-slate-900 mb-0.5",
										children: "P-SAT (PCP Scholarship Test)"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-600 text-xs",
										children: "Weekly admission cum scholarship test conducted every Sunday both online and offline across all PCP Sikar & Jaipur branches."
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-lg bg-[#ffc107] text-black font-black flex items-center justify-center shrink-0",
										children: "3"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-slate-900 mb-0.5",
										children: "Direct Board Marks Waiver"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-600 text-xs",
										children: "Students scoring 90%+ marks in Class 10th or 12th board exams qualify for direct merit-based concession without test."
									})] })]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pt-2",
							children: /* @__PURE__ */ jsx("a", {
								href: "tel:9610892222",
								className: "w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-purple-200",
								children: /* @__PURE__ */ jsx("span", { children: "Speak with Scholarship Desk (9610-89-2222)" })
							})
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { PcpScholarshipSection as default };
