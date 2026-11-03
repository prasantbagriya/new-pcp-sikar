import { n as GlobalNavbar } from "./GlobalNavbar-qw3J78hM.js";
import { t as BlogFooter } from "./BlogFooter-BCC4IHxH.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { ShieldCheck } from "lucide-react";
//#region resources/js/Pages/Static/FactCheckingPolicy.jsx
function FactCheckingPolicy() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#faf7fe] dark:bg-[#070d1e] min-h-screen flex flex-col font-sans selection:bg-purple-800 selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Fact-Checking Policy | Sikar Education Hub" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Learn how Sikar Education Hub validates coaching results, faculty claims, fee structures, and campus facilities across Sikar institutes."
			})] }),
			/* @__PURE__ */ jsx(GlobalNavbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#120326] text-white overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5b40cf]/25 rounded-full blur-[140px] pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 text-xs font-semibold text-purple-200/80 mb-5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md",
								children: [
									/* @__PURE__ */ jsx(Link, {
										href: "/",
										className: "hover:text-amber-300 transition-colors",
										children: "Home"
									}),
									/* @__PURE__ */ jsx("span", { children: "›" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-amber-300 font-bold",
										children: "Fact-Checking Policy"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-widest mb-4",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ jsx("span", { children: "VERIFICATION & AUTHENTICITY" })]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl sm:text-5xl font-black text-white tracking-normal leading-snug sm:leading-tight mb-3",
								children: "Fact-Checking Policy"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-purple-100/80 text-xs sm:text-sm font-medium",
								children: "Last Updated: September 2026 • 100% Verified Education Data"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("main", {
				className: "max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-20 relative z-20 flex-grow",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white dark:bg-[#0c1428] rounded-3xl border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5 p-6 sm:p-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800 text-xs sm:text-sm text-[#2e0854] dark:text-purple-200 font-medium",
							children: "Our research team strictly verifies all published information against primary sources before releasing articles and institute comparison guides."
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "1. Verification Methodology"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc pl-6 space-y-2",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Topper & Rank Claims:" }), " Cross-verified with official NTA NEET and NTA JEE Advanced merit rolls and authentic scorecard verification."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Fee Schedules:" }), " Authenticated through official prospectus releases and direct admissions desk confirmation."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Hostel & Mess Hygiene:" }), " Documented via physical campus visits, CCTV security audits, and mechanized steam kitchen checks."] })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "2. Multi-Step Review Process"
						}),
						/* @__PURE__ */ jsx("p", { children: "Every educational guide undergoes a two-tier review: first by an educational research journalist, followed by senior academic mentors familiar with Sikar's coaching ecosystem." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "3. Corrections Protocol"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							"If you believe any data point published on our platform requires factual rectification, please submit supporting documentation to ",
							/* @__PURE__ */ jsx("a", {
								href: "mailto:info@sikareducationhub.com",
								className: "text-[#5b40cf] font-semibold hover:underline",
								children: "info@sikareducationhub.com"
							}),
							". Our team investigates and rectifies verified errors within 24 hours."
						] })
					]
				})
			}),
			/* @__PURE__ */ jsx(BlogFooter, {})
		]
	});
}
//#endregion
export { FactCheckingPolicy as default };
