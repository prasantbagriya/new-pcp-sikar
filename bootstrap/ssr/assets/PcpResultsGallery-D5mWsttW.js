import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Award, Trophy } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpResultsGallery.jsx
function PcpResultsGallery() {
	const [activeFilter, setActiveFilter] = useState("all");
	const resultCards = [
		{
			exam: "neet",
			rank: "AIR-1",
			badge: "Historic National Rank",
			title: "NEET (UG) All India Rank 1",
			year: "NEET 2024",
			detail: "First time in Sikar coaching history that an institute delivered All India Rank 1 in NEET.",
			metric: "720/720 Perfect Score",
			image: "/uploads/pcp/NEET2024.jpg",
			highlight: true
		},
		{
			exam: "jee",
			rank: "AIR-225",
			badge: "Sikar Coachings Topper",
			title: "JEE Advanced Sikar Topper",
			year: "JEE Adv 2026",
			detail: "Highest rank among all Sikar coachings in JEE Advanced, leading hundreds into premier IIT campuses.",
			metric: "Top Sikar Coaching Rank",
			image: "/uploads/pcp/JeeAdv-2026.jpg",
			highlight: true
		},
		{
			exam: "neet",
			rank: "AIR-87",
			badge: "Top 100 All India",
			title: "NEET Top 100 National Rank",
			year: "NEET 2026",
			detail: "One of the only two Top 100 AIRs in entire Sikar district, qualifying for AIIMS New Delhi.",
			metric: "AIIMS New Delhi Selected",
			image: "/uploads/pcp/Neet-2026.jpg",
			highlight: false
		},
		{
			exam: "neet",
			rank: "1,000+",
			badge: "Govt MBBS Selections",
			title: "Record MBBS Admissions",
			year: "NEET 2026 Record",
			detail: "Highest selection ratio across Rajasthan: 1 out of every 5 students qualified for Govt Medical College.",
			metric: "1:5 Selection Ratio",
			image: "/uploads/pcp/Neet-2026.jpg",
			highlight: false
		},
		{
			exam: "jee",
			rank: "102",
			badge: "99+ Percentile Club",
			title: "Students >= 99%ile in JEE Main",
			year: "JEE Mains 2026",
			detail: "Massive achievement with over 102 students crossing the elite 99 percentile threshold in JEE Mains.",
			metric: "102 Students >= 99%ile",
			image: "/uploads/pcp/JeeMain2026.png",
			highlight: false
		},
		{
			exam: "jee",
			rank: "500+",
			badge: "IITs, NITs & IIITs",
			title: "500+ Engineering Selections",
			year: "JEE 2026 Total",
			detail: "Seamlessly securing engineering seats in IIT Bombay, IIT Delhi, IIT Roorkee, and premier NITs.",
			metric: "1:4 Selection Ratio",
			image: "/uploads/pcp/JeeAdv-2026.jpg",
			highlight: false
		},
		{
			exam: "olympiad",
			rank: "AIR-2",
			badge: "National Science Talent",
			title: "KVPY Final Merit Rank 2",
			year: "National Talent",
			detail: "8 PCP students ranked in Top 50 of KVPY national merit list, proving foundational superiority.",
			metric: "8 Students in Top-50",
			image: "/uploads/pcp/Olympiad.jpg",
			highlight: false
		}
	];
	const filtered = activeFilter === "all" ? resultCards : resultCards.filter((r) => r.exam === activeFilter);
	return /* @__PURE__ */ jsx("section", {
		id: "results",
		className: "py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200/80",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3",
						children: [/* @__PURE__ */ jsx(Trophy, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "PCP Sikar Hall of Fame" })]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight",
						children: ["Results That Set ", /* @__PURE__ */ jsx("span", {
							className: "text-[#3b0764]",
							children: "National Benchmarks"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm sm:text-base text-slate-600 mt-1 max-w-2xl font-normal",
						children: "Not just ranks for advertising — PCP consistently delivers the highest selection ratios in both IIT-JEE and NEET-UG nationwide."
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs",
					children: [
						{
							id: "all",
							label: "All Results"
						},
						{
							id: "neet",
							label: "NEET-UG Ranks"
						},
						{
							id: "jee",
							label: "IIT-JEE Ranks"
						},
						{
							id: "olympiad",
							label: "Olympiad & KVPY"
						}
					].map((btn) => /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setActiveFilter(btn.id),
						className: `px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${activeFilter === btn.id ? "bg-[#ffc107] text-black shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,
						children: btn.label
					}, btn.id))
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
				children: filtered.map((item, idx) => /* @__PURE__ */ jsxs("div", {
					className: `flex flex-col justify-between rounded-3xl overflow-hidden bg-white border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${item.highlight ? "border-purple-300 ring-2 ring-purple-100 shadow-purple-950/5" : "border-slate-200 hover:border-purple-300"}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[16/10] w-full overflow-hidden bg-slate-100",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: item.image,
								alt: item.title,
								loading: "lazy",
								className: "w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105",
								onError: (e) => {
									e.currentTarget.src = "/uploads/pcp/Neet-2026.jpg";
								}
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" }),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute bottom-3 left-3 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("div", {
									className: "px-3 py-1 rounded-lg bg-[#ffc107] text-black text-sm font-black uppercase tracking-tight shadow-md",
									children: item.rank
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-bold text-white drop-shadow",
									children: item.year
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute top-3 right-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider",
									children: item.badge
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-5 flex-1 flex flex-col justify-between space-y-3",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug mb-1",
							children: item.title
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-600 leading-relaxed font-normal",
							children: item.detail
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "pt-3 border-t border-slate-100 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-50 text-[#2e1065] text-xs font-bold border border-purple-100",
								children: [/* @__PURE__ */ jsx(Award, { className: "w-3.5 h-3.5 text-purple-700" }), item.metric]
							}), /* @__PURE__ */ jsxs("a", {
								href: "#scholarship",
								className: "text-xs font-bold text-purple-900 hover:text-amber-600 inline-flex items-center gap-0.5",
								children: [/* @__PURE__ */ jsx("span", { children: "Target Next" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
							})]
						})]
					})]
				}, idx))
			})]
		})
	});
}
//#endregion
export { PcpResultsGallery as default };
