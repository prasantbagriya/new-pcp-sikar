import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { BookOpen, Building, Compass, HeartPulse, Laptop, ShieldCheck, Sparkles, Trophy, Utensils } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpFacilitiesSection.jsx
function PcpFacilitiesSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-100",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "Unmatched Student Life" })]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight",
						children: ["Facilities in ", /* @__PURE__ */ jsx("span", {
							className: "text-[#3b0764]",
							children: "PCP Sikar"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm sm:text-base text-slate-600 mt-1 max-w-2xl font-normal",
						children: "PCP leaves no stone unturned in student facilities. One unified campus ensuring maximum focus, zero wasted time, and peak physical and mental health."
					})
				] }), /* @__PURE__ */ jsxs("a", {
					href: "https://tour.princeeduhub.com/princt34/old-campus/",
					target: "_blank",
					rel: "noreferrer",
					className: "btn-brand-yellow px-5 py-3 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 shadow-md",
					children: [/* @__PURE__ */ jsx(Compass, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Experience 360° Virtual Tour" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						icon: Building,
						title: "Smart AC Classrooms",
						desc: "Ergonomically designed, fully air-conditioned lecture theaters with high-definition digital smart boards and acoustic sound clarity."
					},
					{
						icon: BookOpen,
						title: "12-Hour Daily Doubt Desks",
						desc: "Dedicated personal faculty counters open throughout the day where teachers personally clear individual doubts without token limits."
					},
					{
						icon: ShieldCheck,
						title: "Secure AC Residential Hostels",
						desc: "Separate high-security residential wings for boys and girls with AC rooms, study desks, attached washrooms, and round-the-clock wardens."
					},
					{
						icon: Utensils,
						title: "Hygienic Pure-Veg Dining",
						desc: "Nutritious and delicious meals prepared under strict dietitian supervision: breakfast, energetic lunch, evening tea snacks, and balanced dinner."
					},
					{
						icon: Trophy,
						title: "Sports & Fitness Arena",
						desc: "Expansive green grounds for cricket, basketball, volleyball, badminton, and regular morning yoga to keep students refreshed and stress-free."
					},
					{
						icon: Laptop,
						title: "Advanced CBT Testing Labs",
						desc: "Modern computer labs equipped with high-speed testing software simulating the exact NTA JEE Main and Advanced exam interface."
					},
					{
						icon: HeartPulse,
						title: "On-Campus Health & Medical Care",
						desc: "Dedicated first-aid infirmary, routine wellness checkups, emergency ambulance tie-up, and visiting doctors to ensure student well-being."
					},
					{
						icon: Compass,
						title: "Silent Reading & Library Halls",
						desc: "Spacious silent reading libraries stocked with national question archives, international reference publications, and individual study carrels."
					}
				].map((fac, idx) => {
					const Icon = fac.icon;
					return /* @__PURE__ */ jsx("div", {
						className: "p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-purple-300 hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between",
						children: /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-2xl bg-[#ffc107] flex items-center justify-center text-black mb-4 shadow-sm group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-black" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-black text-slate-900 tracking-tight mb-2",
								children: fac.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal",
								children: fac.desc
							})
						] })
					}, idx);
				})
			})]
		})
	});
}
//#endregion
export { PcpFacilitiesSection as default };
