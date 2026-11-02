import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronRight, MapPin, Phone, Sparkles, X } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpJaipurLaunchSection.jsx
function PcpJaipurLaunchSection() {
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		studentName: "",
		phone: "",
		course: "NEET-UG (Medical)",
		studentClass: "Class 12th / Dropper",
		preferredDate: ""
	});
	return /* @__PURE__ */ jsxs("section", {
		id: "pcp-jaipur-launch",
		className: "w-full relative py-3 sm:py-4 bg-[#fbf9fe] border-b border-purple-100/70 select-none",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl bg-gradient-to-r from-purple-100/90 via-purple-50 to-amber-50 border border-purple-200 shadow-2xs hover:shadow-xs transition-shadow p-3.5 sm:py-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 sm:gap-3.5 min-w-0",
					children: [/* @__PURE__ */ jsx("div", {
						onClick: () => setIsLightboxOpen(true),
						className: "w-10 h-10 rounded-full bg-[#2e0854] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-2xs cursor-pointer hover:bg-[#5b40cf] transition-colors",
						title: "Click to view Jaipur Launch Poster",
						children: "PCP"
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xs sm:text-sm lg:text-[15px] font-extrabold text-[#2e0854] leading-tight",
								children: "PCP Sikar Now in Jaipur — Gopalpura Bypass Center"
							}), /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/30 border border-amber-300 text-amber-950 text-[10px] font-black uppercase tracking-wider",
								children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" }), /* @__PURE__ */ jsx("span", { children: "Grand Launch" })]
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] sm:text-xs text-slate-600 font-medium leading-tight mt-1",
							children: "Join Sikar's Proven AIR-1 Team & System • Balaji Tower, Near Ridhi Sidhi Circle • Admissions Open 2026-27"
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 sm:gap-3.5 shrink-0 self-end sm:self-center",
					children: [/* @__PURE__ */ jsxs("a", {
						href: "tel:+919610572222",
						className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-purple-100 text-[#2e0854] font-bold text-xs border border-purple-200 transition-colors shadow-2xs whitespace-nowrap",
						title: "Call Jaipur Center Desk",
						children: [/* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", {
							className: "font-mono",
							children: "9610-57-2222"
						})]
					}), /* @__PURE__ */ jsxs("a", {
						href: "/courses",
						className: "inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5b40cf] hover:text-[#2e0854] transition-colors whitespace-nowrap pl-1",
						children: [/* @__PURE__ */ jsx("span", { children: "Explore Courses" }), /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-[#5b40cf] group-hover:translate-x-0.5 transition-transform" })]
					})]
				})]
			})
		}), isLightboxOpen && /* @__PURE__ */ jsx("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200",
			onClick: () => setIsLightboxOpen(false),
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-4xl w-full bg-[#240444] rounded-2xl overflow-hidden border border-purple-400/40 shadow-2xl",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "p-3.5 bg-[#240444] border-b border-purple-400/20 flex items-center justify-between text-white",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ jsx("span", {
								className: "font-extrabold text-xs sm:text-sm",
								children: "PCP Now in Jaipur — Gopalpura Bypass Center Launch"
							})]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setIsLightboxOpen(false),
							className: "p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer",
							children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "p-2 sm:p-4 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto",
						children: /* @__PURE__ */ jsx("img", {
							src: "/uploads/pcp/PCPjaipur.jpg",
							alt: "PCP Jaipur Grand Launch Poster",
							width: "720",
							height: "900",
							loading: "lazy",
							decoding: "async",
							className: "max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-3 bg-[#240444] border-t border-purple-400/20 flex items-center justify-between flex-wrap gap-2 text-white text-xs",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-purple-200",
							children: "Balaji Tower, Near Ridhi Sidhi Circle, Gopalpura Bypass, Jaipur • Helpline: +91 9610-57-2222"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "https://www.google.com/maps/search/?api=1&query=PCP+Gopalpura+Bypass+Jaipur",
								target: "_blank",
								rel: "noreferrer",
								className: "px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center gap-1 transition-colors",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-amber-300" }), /* @__PURE__ */ jsx("span", { children: "Google Maps" })]
							}), /* @__PURE__ */ jsxs("a", {
								href: "tel:+919610572222",
								className: "px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#2e0854] font-extrabold text-xs flex items-center gap-1.5 transition-colors",
								children: [/* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "Call Desk" })]
							})]
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { PcpJaipurLaunchSection as default };
