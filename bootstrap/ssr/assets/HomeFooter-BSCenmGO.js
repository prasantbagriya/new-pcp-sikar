import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { a as Twitter, n as Instagram, o as Youtube, t as Facebook } from "./BrandIcons-EKrvry51.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Award, Building2, CheckCircle2, MapPin, Phone, Send, Sparkles } from "lucide-react";
//#region resources/js/Pages/HomeComponents/HomeFooter.tsx
var HomeFooter_exports = /* @__PURE__ */ __exportAll({ default: () => HomeFooter });
function HomeFooter({ global_nav: passedNav }) {
	const pathname = typeof window !== "undefined" ? window.location.pathname : "";
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);
	if (pathname?.startsWith("/blog/admin")) return null;
	const getLinkHref = (page) => {
		if (!page) return "#";
		if (page.startsWith("http://") || page.startsWith("https://")) return page;
		if (page.startsWith("/")) return page;
		const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
		if (page === "landing" || page === "/") return (basePath || "") + "/";
		return (basePath || "") + "/" + page;
	};
	const handleSubscribe = async (e) => {
		e.preventDefault();
		if (!email) return;
		setSubscribed(true);
		setTimeout(() => {
			setEmail("");
		}, 2500);
	};
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative bg-gradient-to-b from-[#faf7fe] via-white to-[#faf7fe] text-slate-800 pt-16 pb-12 overflow-hidden w-full border-t border-purple-200/90 font-sans selection:bg-[#5b40cf] selection:text-white select-none",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-1/4 -left-20 w-[550px] h-[550px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-6 -left-10 w-[420px] h-[420px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#5b40cf]/15 rounded-full blur-[140px] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-10 -right-10 w-[450px] h-[450px] bg-purple-200/35 rounded-full blur-[130px] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#5b40cf]/60 via-[#7c52c9]/60 to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-[1520px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-14 rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-purple-50/90 via-[#fbf7fe] to-purple-50/90 border border-purple-200/90 shadow-[0_12px_40px_-15px_rgba(46,8,84,0.08)] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -top-24 -left-24 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" }),
							/* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -right-24 w-64 h-64 bg-[#5b40cf]/10 rounded-full blur-3xl pointer-events-none" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative z-10 max-w-2xl text-center lg:text-left",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-purple-200 shadow-2xs text-[#2e0854] text-xs font-bold mb-3",
										children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "Admissions Open 2026-27 • NEET-UG & IIT-JEE" })]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight",
										children: "Ready to Turn Your Dream into a Top Rank?"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal",
										children: "Join Rajasthan's most disciplined residential coaching campus. Connect directly with senior counselors for personalized course, hostel, and P-SAT scholarship guidance."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative z-10 flex flex-wrap items-center justify-center gap-3",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "/contact",
									className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2e0854] via-[#3b1165] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-102 active:scale-98",
									children: [/* @__PURE__ */ jsx("span", { children: "Book Free Campus Visit" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-purple-200" })]
								}), /* @__PURE__ */ jsxs("a", {
									href: "tel:9610892222",
									className: "inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-purple-50 text-[#2e0854] font-bold text-xs sm:text-sm border border-purple-200/90 shadow-2xs hover:shadow-xs transition-all",
									children: [/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Talk to Counselor" })]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 hover:border-[#5b40cf] shadow-2xs hover:shadow-md transition-all duration-300 group",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[10.5px] font-bold uppercase tracking-wider border border-[#eed3f8]",
											children: [/* @__PURE__ */ jsx(Building2, { className: "w-3 h-3 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Head Office • Sikar" })]
										}), /* @__PURE__ */ jsx("span", {
											className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
											title: "Open Daily"
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-base font-bold text-slate-900 group-hover:text-[#5b40cf] transition-colors mb-1.5",
										children: "PCP Sikar, Palwas Road Campus"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-xs text-slate-600 mb-4 leading-relaxed font-normal flex items-start gap-1.5",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: "Palwas Road, Sikar, Rajasthan - 332001" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pt-3 border-t border-purple-50 space-y-2 text-xs",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-slate-500 font-medium",
												children: "Helpline:"
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 font-bold text-[#2e0854]",
												children: [
													/* @__PURE__ */ jsx("a", {
														href: "tel:9610892222",
														className: "hover:text-[#5b40cf]",
														children: "9610-89-2222"
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-purple-300",
														children: "|"
													}),
													/* @__PURE__ */ jsx("a", {
														href: "tel:9610612222",
														className: "hover:text-[#5b40cf]",
														children: "61-2222"
													})
												]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-slate-500 font-medium",
												children: "Email:"
											}), /* @__PURE__ */ jsx("a", {
												href: "mailto:pcpsikar@gmail.com",
												className: "font-semibold text-slate-700 hover:text-[#5b40cf] truncate",
												children: "pcpsikar@gmail.com"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 hover:border-[#5b40cf] shadow-2xs hover:shadow-md transition-all duration-300 group",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[10.5px] font-bold uppercase tracking-wider border border-[#eed3f8]",
											children: [/* @__PURE__ */ jsx(Building2, { className: "w-3 h-3 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Piprali Branch • Sikar" })]
										}), /* @__PURE__ */ jsx("span", {
											className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
											title: "Open Daily"
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-base font-bold text-slate-900 group-hover:text-[#5b40cf] transition-colors mb-1.5",
										children: "PCP Sikar, Piprali Road Campus"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-xs text-slate-600 mb-4 leading-relaxed font-normal flex items-start gap-1.5",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: "Elenza Heights, New Janta Colony, Piprali Road, Sikar" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pt-3 border-t border-purple-50 space-y-2 text-xs",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-slate-500 font-medium",
												children: "Helpline:"
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 font-bold text-[#2e0854]",
												children: [
													/* @__PURE__ */ jsx("a", {
														href: "tel:9610532222",
														className: "hover:text-[#5b40cf]",
														children: "9610-53-2222"
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-purple-300",
														children: "|"
													}),
													/* @__PURE__ */ jsx("a", {
														href: "tel:9610832222",
														className: "hover:text-[#5b40cf]",
														children: "83-2222"
													})
												]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-slate-500 font-medium",
												children: "Email:"
											}), /* @__PURE__ */ jsx("a", {
												href: "mailto:pcppalwasroad@gmail.com",
												className: "font-semibold text-slate-700 hover:text-[#5b40cf] truncate",
												children: "pcppalwasroad@gmail.com"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 hover:border-[#5b40cf] shadow-2xs hover:shadow-md transition-all duration-300 group",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7e8fc] text-[#2e0854] text-[10.5px] font-bold uppercase tracking-wider border border-[#eed3f8]",
											children: [/* @__PURE__ */ jsx(Building2, { className: "w-3 h-3 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Jaipur Campus" })]
										}), /* @__PURE__ */ jsx("span", {
											className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
											title: "Open Daily"
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-base font-bold text-slate-900 group-hover:text-[#5b40cf] transition-colors mb-1.5",
										children: "PCP Jaipur, Gopalpura Bypass"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-xs text-slate-600 mb-4 leading-relaxed font-normal flex items-start gap-1.5",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: "Balaji Tower, Gopalpura Bypass, Jaipur, Rajasthan" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pt-3 border-t border-purple-50 space-y-2 text-xs",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-slate-500 font-medium",
												children: "Helpline:"
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 font-bold text-[#2e0854]",
												children: [
													/* @__PURE__ */ jsx("a", {
														href: "tel:9610572222",
														className: "hover:text-[#5b40cf]",
														children: "9610-57-2222"
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-purple-300",
														children: "|"
													}),
													/* @__PURE__ */ jsx("a", {
														href: "tel:9610832222",
														className: "hover:text-[#5b40cf]",
														children: "83-2222"
													})
												]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-slate-500 font-medium",
												children: "Email:"
											}), /* @__PURE__ */ jsx("a", {
												href: "mailto:pcpjaipur1@gmail.com",
												className: "font-semibold text-slate-700 hover:text-[#5b40cf] truncate",
												children: "pcpjaipur1@gmail.com"
											})]
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center mb-8 pb-6 border-b border-purple-100",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-lg sm:text-xl font-extrabold text-[#2e0854]",
									children: "100+ Acres"
								}), /* @__PURE__ */ jsx("span", {
									className: "block text-[11.5px] text-slate-500 font-medium mt-0.5",
									children: "Headquarters Campus Area"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-lg sm:text-xl font-extrabold text-[#2e0854]",
									children: "4 Campuses"
								}), /* @__PURE__ */ jsx("span", {
									className: "block text-[11.5px] text-slate-500 font-medium mt-0.5",
									children: "Sikar & Jaipur Presence"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-lg sm:text-xl font-extrabold text-[#2e0854]",
									children: "24x7 Security"
								}), /* @__PURE__ */ jsx("span", {
									className: "block text-[11.5px] text-slate-500 font-medium mt-0.5",
									children: "CCTV & Warden Monitored"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "py-2.5 px-3 rounded-xl bg-purple-50/50 border border-purple-100/60 hover:border-[#5b40cf]/40 transition-all",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-lg sm:text-xl font-extrabold text-[#2e0854]",
									children: "Transport Hub"
								}), /* @__PURE__ */ jsx("span", {
									className: "block text-[11.5px] text-slate-500 font-medium mt-0.5",
									children: "Direct Bus & Train Connectivity"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 mb-14",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-2 md:col-span-2 lg:col-span-4 space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-start gap-1",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7e8fc] border border-[#eed3f8] text-[#2e0854] text-[11px] font-black tracking-widest uppercase shadow-2xs",
												children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "PRINCE CAREER PIONEER" })]
											}),
											/* @__PURE__ */ jsxs("h2", {
												className: "text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none mt-1",
												children: ["PCP ", /* @__PURE__ */ jsx("span", {
													className: "text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#7c52c9]",
													children: "SIKAR"
												})]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-[#5b40cf] font-bold tracking-wider uppercase mt-0.5",
												children: "Premier IIT-JEE & NEET-UG Division of Prince Eduhub"
											})
										]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1",
										children: [
											/* @__PURE__ */ jsx("strong", { children: "PCP Sikar (Prince Career Pioneer)" }),
											" is North India's premier classroom coaching institute for NEET-UG and IIT-JEE, operational since 2009. Running under the visionary aegis of ",
											/* @__PURE__ */ jsx("strong", { children: "Prince Eduhub" }),
											" (25+ years of academic excellence in Sikar, Rajasthan)."
										]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-2 pt-1",
										children: [
											{
												Icon: Facebook,
												url: "https://www.facebook.com/pcpsikar",
												name: "Facebook"
											},
											{
												Icon: Youtube,
												url: "https://www.youtube.com/@pcpsikar",
												name: "YouTube"
											},
											{
												Icon: Instagram,
												url: "https://www.instagram.com/pcp_sikar",
												name: "Instagram"
											},
											{
												Icon: Twitter,
												url: "https://x.com/pcp_sikar",
												name: "X"
											}
										].map(({ Icon, url, name }, i) => /* @__PURE__ */ jsx("a", {
											href: url,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": `PCP Sikar on ${name}`,
											className: "w-9 h-9 rounded-full bg-white border border-purple-200/90 flex items-center justify-center text-[#5b40cf] hover:text-white hover:bg-[#2e0854] hover:border-[#2e0854] transition-all duration-200 shadow-2xs hover:scale-105",
											children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
										}, i))
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-1 lg:col-span-3 space-y-3",
								children: [/* @__PURE__ */ jsxs("h4", {
									className: "text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-amber-500" }), /* @__PURE__ */ jsx("span", { children: "Courses & Batches" })]
								}), /* @__PURE__ */ jsxs("ul", {
									className: "space-y-2 text-xs text-slate-600 list-none p-0 m-0 font-medium",
									children: [
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("courses/neet-ug"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "NEET-UG Target (Pre-Medical)"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("courses/neet-ug"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "NEET Droppers & Repeaters Batch"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("courses/iit-jee"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "IIT-JEE (Main + Advanced)"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("courses/iit-jee"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "JEE Repeater / Drop Batch"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("courses/pre-foundation"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "Pre-Foundation (Class 5th to 10th)"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("courses/nda-defence"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "Prince Defence Academy (NDA)"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("courses"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform font-bold text-[#5b40cf]",
											children: "Explore All Programs →"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-1 lg:col-span-2 space-y-3",
								children: [/* @__PURE__ */ jsxs("h4", {
									className: "text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Quick Links" })]
								}), /* @__PURE__ */ jsxs("ul", {
									className: "space-y-2 text-xs text-slate-600 list-none p-0 m-0 font-medium",
									children: [
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: "#results-orbit",
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "PCP Hall of Fame"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: "#journey",
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "Our Campus Journey"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: "#reviews",
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "Google Reviews (4.6★)"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: "#faq-section",
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "Frequently Asked Questions"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("about-us"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "About Prince Eduhub"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: getLinkHref("contact"),
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "Contact Counseling Desks"
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
											href: "https://pcpsikar.com/",
											target: "_blank",
											rel: "noreferrer",
											className: "hover:text-[#5b40cf] hover:translate-x-1 inline-block transition-transform",
											children: "Official Portal"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-2 sm:col-span-1 lg:col-span-3 space-y-3",
								children: [
									/* @__PURE__ */ jsxs("h4", {
										className: "text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ jsx("span", { children: "Admissions Updates" })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-600 leading-relaxed font-normal",
										children: "Receive updates on NEET/JEE exam alerts, answer keys, and P-SAT scholarship dates."
									}),
									subscribed ? /* @__PURE__ */ jsxs("div", {
										className: "p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-[#2e0854] font-bold flex items-center gap-2 shadow-2xs",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-600" }), /* @__PURE__ */ jsx("span", { children: "Thank you for subscribing!" })]
									}) : /* @__PURE__ */ jsxs("form", {
										onSubmit: handleSubscribe,
										className: "space-y-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "relative",
											children: [/* @__PURE__ */ jsx("input", {
												type: "email",
												required: true,
												value: email,
												onChange: (e) => setEmail(e.target.value),
												placeholder: "Enter parent/student email",
												className: "w-full px-3.5 py-2.5 rounded-xl bg-white border border-purple-200/90 text-slate-900 placeholder:text-slate-400 text-xs focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
											}), /* @__PURE__ */ jsxs("button", {
												type: "submit",
												className: "absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-xs flex items-center gap-1 transition-all",
												children: [/* @__PURE__ */ jsx("span", { children: "Join" }), /* @__PURE__ */ jsx(Send, { className: "w-3 h-3" })]
											})]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400 block",
											children: "Official alerts only. No spam. Unsubscribe anytime."
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "pt-2",
										children: /* @__PURE__ */ jsxs("div", {
											className: "p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2.5 shadow-2xs",
											children: [/* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-amber-500 shrink-0" }), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] text-slate-700 font-medium",
												children: "Rajasthan's Highest Selection Ratio in NEET & JEE"
											})]
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pt-8 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							/* @__PURE__ */ jsx("strong", { children: "PCP Sikar (Prince Career Pioneer)" }),
							". A constituent unit of ",
							/* @__PURE__ */ jsx("strong", { children: "Prince Eduhub" }),
							". All rights reserved."
						] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4 flex-wrap",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "/terms",
									className: "hover:text-[#5b40cf] transition-colors",
									children: "Terms of Service"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-purple-200",
									children: "•"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/privacy",
									className: "hover:text-[#5b40cf] transition-colors",
									children: "Privacy Policy"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-purple-200",
									children: "•"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/sitemap.xml",
									className: "hover:text-[#5b40cf] transition-colors",
									children: "Sitemap"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-purple-200",
									children: "•"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[#5b40cf] font-semibold",
									children: "Sikar • Jaipur"
								})
							]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { HomeFooter_exports as n, HomeFooter as t };
