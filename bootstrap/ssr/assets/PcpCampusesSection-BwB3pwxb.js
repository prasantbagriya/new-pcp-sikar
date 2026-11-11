import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Building, CheckCircle2, Compass, MapPin, Phone } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpCampusesSection.jsx
function PcpCampusesSection() {
	return /* @__PURE__ */ jsx("section", {
		id: "campuses",
		className: "py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-100",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3",
						children: [/* @__PURE__ */ jsx(Building, { className: "w-4 h-4 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "World-Class Infrastructure" })]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight",
						children: ["Explore PCP ", /* @__PURE__ */ jsx("span", {
							className: "text-[#3b0764]",
							children: "Campuses in Sikar & Jaipur"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm sm:text-base text-slate-600 mt-1 max-w-2xl font-normal",
						children: "Equipped with high-tech smart classrooms, air-conditioned hostels, biometric security, and pure-veg hygienic dining."
					})
				] }), /* @__PURE__ */ jsxs("a", {
					href: "https://tour.princeeduhub.com/princt34/old-campus/",
					target: "_blank",
					rel: "noreferrer",
					className: "btn-brand-yellow px-5 py-3 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shrink-0 shadow-md",
					children: [/* @__PURE__ */ jsx(Compass, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Experience 360° Virtual Tour" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
				children: [
					{
						name: "PCP Prime Branch (Head Office)",
						tag: "Headquarters & Prime Residential",
						address: "Palwas Road, Sikar, Rajasthan - 332001",
						phone: "+91 96108 92222",
						phoneAlt: "9610-61-2222",
						email: "pcpsikar@gmail.com",
						image: "/uploads/pcp/Neet-2026.jpg",
						tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
						mapQuery: "PCP+Prime+Palwas+Road+Sikar",
						features: [
							"Head branch with administrative council",
							"Full-fledged separate boys & girls AC hostels",
							"12-hour main faculty doubt clearing hub",
							"Central digital library & testing arena"
						],
						badge: "Main Campus"
					},
					{
						name: "PCP Jaipur Branch",
						tag: "New Flagship Jaipur Center",
						address: "Balaji Tower, Near Triveni Nagar, Gopalpura Bypass, Jaipur, Rajasthan",
						phone: "+91 96105 72222",
						phoneAlt: "9610-83-2222",
						email: "pcpjaipur1@gmail.com",
						image: "/uploads/pcp/PCPjaipur.jpg",
						tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
						mapQuery: "Balaji+Tower+Gopalpura+Bypass+Jaipur",
						features: [
							"Prime location at Gopalpura coaching corridor",
							"Smart interactive hybrid classrooms",
							"Dedicated NEET & JEE repeaters wing",
							"Convenient metro & transit connectivity"
						],
						badge: "Jaipur Center"
					},
					{
						name: "PCP Piprali Road Branch",
						tag: "High-Energy Academic Wing",
						address: "Elenza Heights, New Janta Colony, Piprali Road, Sikar, Rajasthan",
						phone: "+91 96105 32222",
						phoneAlt: "9610-83-2222",
						email: "pcppalwasroad@gmail.com",
						image: "/uploads/pcp/PCPjaipur.jpg",
						tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
						mapQuery: "Elenza+Heights+Piprali+Road+Sikar",
						features: [
							"Heart of Sikar coaching landmark",
							"Ultra-modern concept test labs",
							"Pre-medical and IIT-JEE day-scholar wing",
							"Experienced doubt assistance desks"
						],
						badge: "Piprali Road"
					},
					{
						name: "PCP Brainy Branch",
						tag: "Expansive Sports & Eco Campus",
						address: "Jaipur - Bikaner Bypass (Prince Bypass), Sikar, Rajasthan",
						phone: "+91 96106 02222",
						phoneAlt: "9610-89-2222",
						email: "pcpsikar@gmail.com",
						image: "/uploads/pcp/Pre-FoundationBlog.png",
						tourUrl: "https://tour.princeeduhub.com/princt34/old-campus/",
						mapQuery: "Prince+Eduhub+Bypass+Sikar",
						features: [
							"Serene 100+ acre green environment",
							"Pre-Foundation & Olympiad specialized wing",
							"Olympic standard sports grounds & swimming",
							"Zero distraction residential facility"
						],
						badge: "Eco Campus"
					}
				].map((campus, idx) => /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[16/10] w-full overflow-hidden bg-slate-100",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: campus.image,
								alt: campus.name,
								loading: "lazy",
								className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
								onError: (e) => {
									e.currentTarget.src = "/uploads/pcp/Neet-2026.jpg";
								}
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
							/* @__PURE__ */ jsx("div", {
								className: "absolute top-3 left-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "px-2.5 py-1 rounded-md bg-[#ffc107] text-black text-[10px] font-black uppercase tracking-wider shadow",
									children: campus.badge
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6 flex-1 flex flex-col justify-between space-y-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[11px] font-bold text-purple-800 uppercase tracking-wider block mb-1",
								children: campus.tag
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-black text-slate-900 tracking-tight leading-snug mb-3",
								children: campus.name
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-2 text-xs text-slate-600 mb-3",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-purple-700 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: campus.address })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-xs text-slate-900 font-bold mb-3",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-emerald-600 shrink-0" }),
									/* @__PURE__ */ jsx("a", {
										href: `tel:${campus.phone.replace(/[^0-9]/g, "")}`,
										className: "hover:underline",
										children: campus.phone
									}),
									campus.phoneAlt && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
										className: "text-slate-300",
										children: "|"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-slate-600",
										children: campus.phoneAlt
									})] })
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "space-y-1.5 pt-3 border-t border-slate-100",
								children: campus.features.map((feat, fIdx) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-2 text-[11px] text-slate-600 font-medium",
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-purple-700 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: feat })]
								}, fIdx))
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "pt-4 border-t border-slate-100 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ jsxs("a", {
								href: `https://maps.google.com/?q=${encodeURIComponent(campus.mapQuery)}`,
								target: "_blank",
								rel: "noreferrer",
								className: "py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "Directions" })]
							}), /* @__PURE__ */ jsxs("a", {
								href: campus.tourUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#2e1065] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-purple-200",
								children: [/* @__PURE__ */ jsx(Compass, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "360° Tour" })]
							})]
						})]
					})]
				}, idx))
			})]
		})
	});
}
//#endregion
export { PcpCampusesSection as default };
