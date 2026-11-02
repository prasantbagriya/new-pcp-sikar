import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpToppersMarquee.jsx
function PcpToppersMarquee() {
	const toppers = [
		{
			rank: "AIR-1",
			exam: "NEET-UG",
			name: "Devesh Joshi",
			score: "720/720 Perfect Score",
			badge: "National Topper",
			tag: "NEET History in Sikar"
		},
		{
			rank: "AIR-225",
			exam: "JEE Advanced",
			name: "Braj Mohan",
			score: "Sikar Coaching Topper",
			badge: "IIT Bombay Qualified",
			tag: "Highest Rank in Sikar"
		},
		{
			rank: "AIR-87",
			exam: "NEET-UG",
			name: "Rahul Agarwal",
			score: "710/720 Marks",
			badge: "AIIMS Delhi Selected",
			tag: "Top-100 National AIR"
		},
		{
			rank: "AIR-469",
			exam: "JEE Advanced",
			name: "Navdeep Mann",
			score: "IITian Excellence",
			badge: "IIT Delhi Selected",
			tag: "Top Percentile"
		},
		{
			rank: "102+",
			exam: "JEE Main",
			name: "Elite 99%ile Club",
			score: ">= 99.00 Percentile",
			badge: "99+ Percentile",
			tag: "Record Batch Result"
		},
		{
			rank: "1,000+",
			exam: "NEET-UG",
			name: "Govt Medical Seats",
			score: "1:5 Selection Ratio",
			badge: "MBBS Admissions",
			tag: "Highest Across Rajasthan"
		},
		{
			rank: "AIR-2",
			exam: "KVPY Science",
			name: "National Talent",
			score: "8 Students in Top-50",
			badge: "IISc Bengaluru Eligible",
			tag: "Pre-Foundation Win"
		},
		{
			rank: "500+",
			exam: "IIT / NIT",
			name: "Engineering Wave",
			score: "1:4 Selection Ratio",
			badge: "Premier Tech Colleges",
			tag: "JEE Adv Conversions"
		}
	];
	const infiniteToppers = [...toppers, ...toppers];
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full bg-gradient-to-r from-purple-50/80 via-white to-purple-50/80 py-5 border-y border-slate-200/90 relative overflow-hidden select-none",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" }),
			/* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-4 animate-marquee-left hover:[animation-play-state:paused] w-max",
				children: infiniteToppers.map((t, idx) => /* @__PURE__ */ jsxs("div", {
					className: "inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-200 shrink-0 group cursor-default",
					children: [/* @__PURE__ */ jsx("div", {
						className: "px-2.5 py-1 rounded-lg bg-[#ffc107] text-black font-black text-xs sm:text-sm tracking-tight shadow-2xs group-hover:scale-105 transition-transform",
						children: t.rank
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col text-left",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-black uppercase tracking-wider text-[#2e1065]",
									children: t.exam
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-slate-300",
									children: "•"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-bold text-slate-900 group-hover:text-[#2e1065] transition-colors truncate max-w-[150px]",
									children: t.name
								})
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-[10px] text-slate-500 font-medium",
							children: [
								t.score,
								" (",
								t.tag,
								")"
							]
						})]
					})]
				}, idx))
			})
		]
	});
}
//#endregion
export { PcpToppersMarquee as default };
