import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpJourneySection.jsx
function PcpJourneySection() {
	const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
	const milestones = [
		{
			year: "2026",
			points: [
				"PCP Super-50 Elite Residential Campus expanded with digital AI Doubt Desks.",
				"NEET AIR-1 System Integration & Pan-India P-SAT ₹5+ Crore Scholarship drive.",
				"Launched PCP On Air 2.0 with real-time biometric progress reports."
			]
		},
		{
			year: "2025",
			points: [
				"Historic 1,000+ MBBS selections in a single academic year.",
				"JEE Advanced AIR-225 & State Top Ranks from Sikar Campus.",
				"Expanded full-fledged residential coaching campus in Jaipur (Gopalpura Bypass)."
			]
		},
		{
			year: "2024",
			points: [
				"Awarded 'Best Coaching Institute for NEET & JEE in North India'.",
				"Formalized 12-Hour Daily continuous faculty doubt resolution counters.",
				"Established Prince Brainy Eco-Campus for holistic sports & academics."
			]
		},
		{
			year: "2023",
			points: ["Prince Olympiad crosses 1,50,000+ registrations across 5 northern states.", "PCP Career Pioneer batch delivers highest selection ratio (1:4 in JEE, 1:5 in NEET)."]
		},
		{
			year: "2021",
			points: ["Opened ultra-modern Palwas Road integrated coaching-cum-residential hub.", "Dedicated separate AC hostels, hygienic mess, and in-house sports facilities."]
		},
		{
			year: "2018",
			points: ["Prince Eduhub alumni network crosses 25,000+ doctors and IITians across India.", "Prince NDA Academy marks 100+ officer recommendations in armed forces."]
		},
		{
			year: "2014",
			points: ["PCP (Prince Career Pioneer) coaching wing founded with top Kota & Delhi faculty.", "Targeted specialized classroom test-series and Daily Practice Problems (DPP) launched."]
		},
		{
			year: "2008",
			points: ["Prince Academy English Medium CBSE schools deliver Rajasthan State Board Top 10 ranks.", "Hostel infrastructure scaled to accommodate 5,000+ outstation students."]
		},
		{
			year: "1999",
			points: ["Prince Shikshan Sansthan established with a visionary pledge by founders to make Sikar India's premier Education Hub."]
		}
	];
	const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
	const milestoneRefs = useRef([]);
	const handleTimelineScroll = (e) => {
		const containerTop = e.currentTarget.getBoundingClientRect().top;
		let activeIdx = 0;
		let minDistance = Infinity;
		milestoneRefs.current.forEach((el, index) => {
			if (el) {
				const rect = el.getBoundingClientRect();
				const distance = Math.abs(rect.top - containerTop - 25);
				if (distance < minDistance) {
					minDistance = distance;
					activeIdx = index;
				}
			}
		});
		setActiveMilestoneIndex(activeIdx);
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "bg-[#faf7fe] text-slate-800 pt-5 sm:pt-8 lg:pt-10 pb-10 sm:pb-16 lg:pb-20 font-sans border-b border-purple-100/90 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
                .journey-timeline-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: #d8b4fe #faf5ff;
                }
                .journey-timeline-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .journey-timeline-scroll::-webkit-scrollbar-track {
                    background: #faf5ff;
                    border-radius: 9999px;
                }
                .journey-timeline-scroll::-webkit-scrollbar-thumb {
                    background: #d8b4fe;
                    border-radius: 9999px;
                }
                .journey-timeline-scroll::-webkit-scrollbar-thumb:hover {
                    background: #c084fc;
                }
            ` }),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 pointer-events-none overflow-hidden",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-1/4 w-[600px] h-[400px] bg-purple-200/35 rounded-full blur-[140px]" }),
					/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-10 w-[500px] h-[350px] bg-purple-100/50 rounded-full blur-[130px]" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-purple-200/25 rounded-full blur-[120px]" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-[1440px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8 flex flex-col items-start gap-6 sm:gap-8 relative z-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "reveal-scroll flex flex-col items-start max-w-3xl",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider border border-purple-200/90 shadow-2xs mb-2.5",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-purple-600" }), "About Prince Eduhub & PCP Sikar"]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-sans font-bold tracking-tight text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight",
								children: "Our Journey & World-Class Campus"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1.5 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed",
								children: "From a visionary beginning in 1999 to Rajasthan's premier coaching and residential ecosystem, built on uncompromising academic discipline."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex w-full min-w-0 flex-col gap-5 sm:gap-6 min-[1324px]:flex-row min-[1324px]:items-stretch",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "w-full min-w-0 min-[1324px]:flex-1",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative hidden overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-purple-200/90 shadow-[0_12px_40px_-15px_rgba(46,16,101,0.07)] md:flex min-h-[460px]",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "absolute bottom-0 left-0 w-[42%]",
										style: { top: "15px" },
										children: /* @__PURE__ */ jsx("img", {
											alt: "Dr. Piyush Sunda - Chairman, Prince Eduhub",
											loading: "lazy",
											decoding: "async",
											width: "320",
											height: "420",
											className: "object-contain object-bottom min-[1324px]:object-[center_70%] grayscale contrast-105 hover:grayscale-0 transition-all duration-500",
											style: {
												position: "absolute",
												height: "100%",
												width: "100%",
												left: 0,
												top: 0,
												right: 0,
												bottom: 0
											},
											src: "/uploads/piyush_sunda_chairman.jpg",
											onError: (e) => {
												e.currentTarget.src = basePath + "/uploads/aboutus.webp";
											}
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "relative z-10 ml-auto flex w-[60%] flex-col pb-6 pt-7 pr-6 sm:pr-8",
										children: [
											/* @__PURE__ */ jsxs("svg", {
												className: "h-[40px] w-[50px] shrink-0",
												viewBox: "0 0 59 50",
												fill: "none",
												xmlns: "http://www.w3.org/2000/svg",
												"aria-hidden": "true",
												children: [/* @__PURE__ */ jsx("path", {
													d: "M24.0324 23.4015H13.7048C10.8841 21.1469 18.2114 15.6914 24.562 11.581C25.1818 11.1798 25.45 10.4053 25.204 9.70911C23.8049 5.74921 23.4824 5.33502 19.6644 0.430118L19.6634 0.428915C17.0772 -2.8935 1.78759 13.8782 0 23.4015V47.4069C0 48.2848 0.711697 48.9965 1.58962 48.9965H24.0324C24.9104 48.9965 25.6221 48.2848 25.6221 47.4069V24.9911C25.6221 24.1132 24.9104 23.4015 24.0324 23.4015Z",
													fill: "#a855f7",
													fillOpacity: "0.25"
												}), /* @__PURE__ */ jsx("path", {
													d: "M57.4074 23.8341H47.0798C44.2591 21.5795 51.5864 16.124 57.937 12.0136C58.5568 11.6124 58.825 10.8379 58.579 10.1417C57.1799 6.18183 56.8574 5.76764 53.0394 0.862735L53.0384 0.861532C50.4522 -2.46089 35.1626 14.3108 33.375 23.8341V47.8395C33.375 48.7174 34.0867 49.4291 34.9646 49.4291H57.4074C58.2854 49.4291 58.9971 48.7174 58.9971 47.8395V25.4237C58.9971 24.5458 58.2854 23.8341 57.4074 23.8341Z",
													fill: "#a855f7",
													fillOpacity: "0.25"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-3.5 space-y-3 pr-2 text-sm sm:text-[15px] tracking-normal text-slate-700 leading-relaxed",
												children: [
													/* @__PURE__ */ jsx("p", {
														className: "font-normal italic",
														children: "When we established Prince Eduhub and PCP Sikar, we saw a clear gap in coaching culture. Students were burdened with immense stress, but the personal doubt mentoring, emotional hand-holding, and rigorous daily follow-ups they needed weren't evolving at the same pace."
													}),
													/* @__PURE__ */ jsx("p", {
														className: "font-normal italic",
														children: "We believed aspirants deserved better: 12-hour continuous faculty doubt desks, integrated residential campuses, uncompromised test analysis, and genuine care that helps them prepare with conviction, not just attend lectures."
													}),
													/* @__PURE__ */ jsx("p", {
														className: "font-normal italic",
														children: "That belief still drives us today. We are continuously building and elevating India's benchmark coaching ecosystem for students who take their IIT-JEE and NEET dreams seriously."
													})
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-auto pt-4 border-t border-purple-100 flex items-center justify-between",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "text-base sm:text-lg font-bold tracking-tight text-slate-800",
													children: "Dr. Piyush Sunda"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-xs text-purple-700 font-semibold mt-0.5",
													children: "Chairman, Prince Eduhub (PCP Sikar & Jaipur)"
												})] }), /* @__PURE__ */ jsx("span", {
													className: "hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200",
													children: "Founding Vision"
												})]
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										"aria-hidden": "true",
										className: "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-20 backdrop-blur-[2px]",
										style: {
											background: "linear-gradient(to top, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0) 100%)",
											maskImage: "linear-gradient(to top, #000 20%, transparent 100%)",
											WebkitMaskImage: "linear-gradient(to top, #000 20%, transparent 100%)"
										}
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-purple-200/85 shadow-xs md:hidden",
								children: [
									/* @__PURE__ */ jsxs("svg", {
										className: "h-[32px] w-[38px] shrink-0",
										viewBox: "0 0 59 50",
										fill: "none",
										xmlns: "http://www.w3.org/2000/svg",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ jsx("path", {
											d: "M24.0324 23.4015H13.7048C10.8841 21.1469 18.2114 15.6914 24.562 11.581C25.1818 11.1798 25.45 10.4053 25.204 9.70911C23.8049 5.74921 23.4824 5.33502 19.6644 0.430118L19.6634 0.428915C17.0772 -2.8935 1.78759 13.8782 0 23.4015V47.4069C0 48.2848 0.711697 48.9965 1.58962 48.9965H24.0324C24.9104 48.9965 25.6221 48.2848 25.6221 47.4069V24.9911C25.6221 24.1132 24.9104 23.4015 24.0324 23.4015Z",
											fill: "#a855f7",
											fillOpacity: "0.25"
										}), /* @__PURE__ */ jsx("path", {
											d: "M57.4074 23.8341H47.0798C44.2591 21.5795 51.5864 16.124 57.937 12.0136C58.5568 11.6124 58.825 10.8379 58.579 10.1417C57.1799 6.18183 56.8574 5.76764 53.0394 0.862735L53.0384 0.861532C50.4522 -2.46089 35.1626 14.3108 33.375 23.8341V47.8395C33.375 48.7174 34.0867 49.4291 34.9646 49.4291H57.4074C58.2854 49.4291 58.9971 48.7174 58.9971 47.8395V25.4237C58.9971 24.5458 58.2854 23.8341 57.4074 23.8341Z",
											fill: "#a855f7",
											fillOpacity: "0.25"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2.5 text-xs sm:text-sm font-normal italic leading-relaxed text-slate-700",
										children: [/* @__PURE__ */ jsx("p", { children: "When we started Prince Eduhub and PCP Sikar, we saw a clear gap in coaching culture. Aspirants deserved better: 12-hour continuous faculty doubt desks, integrated residential campuses, and genuine care that helps them prepare with conviction." }), /* @__PURE__ */ jsx("p", { children: "That belief still drives us today as we continuously elevate India's top academic ecosystem for serious IIT-JEE & NEET-UG students." })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "relative mt-1 h-[220px] w-full overflow-hidden rounded-xl bg-purple-50/50 border border-purple-150",
										children: [
											/* @__PURE__ */ jsx("img", {
												alt: "Dr. Piyush Sunda - Chairman, Prince Eduhub",
												loading: "lazy",
												decoding: "async",
												width: "320",
												height: "220",
												className: "object-contain object-top grayscale",
												style: {
													position: "absolute",
													height: "100%",
													width: "100%",
													left: 0,
													top: 0,
													right: 0,
													bottom: 0
												},
												src: "/uploads/piyush_sunda_chairman.jpg",
												onError: (e) => {
													e.currentTarget.src = basePath + "/uploads/aboutus.webp";
												}
											}),
											/* @__PURE__ */ jsx("div", {
												className: "absolute inset-0",
												style: { backgroundImage: "linear-gradient(to top, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0) 70%)" }
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "absolute bottom-2.5 left-3 z-[2]",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-base font-bold leading-tight text-slate-900",
													children: "Dr. Piyush Sunda"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-[11px] leading-tight text-purple-700 font-semibold",
													children: "Chairman, Prince Eduhub"
												})]
											})
										]
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative isolate h-[420px] sm:h-[460px] w-full min-w-0 overflow-hidden bg-white/95 rounded-2xl sm:rounded-3xl border border-purple-200/90 shadow-[0_12px_40px_-15px_rgba(46,16,101,0.07)] min-[1324px]:h-auto min-[1324px]:min-h-0 min-[1324px]:w-[370px] min-[1324px]:shrink-0 min-[1324px]:self-stretch",
							children: [/* @__PURE__ */ jsx("div", {
								onScroll: handleTimelineScroll,
								className: "journey-timeline-scroll absolute inset-0 overflow-y-auto px-4 sm:px-6 py-5 sm:py-6",
								style: {
									maskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)",
									WebkitMaskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)"
								},
								children: /* @__PURE__ */ jsx("ol", {
									className: "relative ml-[6px] pt-1",
									children: milestones.map((item, idx) => {
										const isDarkBubble = idx === activeMilestoneIndex;
										return /* @__PURE__ */ jsxs("li", {
											ref: (el) => milestoneRefs.current[idx] = el,
											className: "relative pb-5 sm:pb-6 pl-5 sm:pl-6 last:pb-2 group transition-all duration-300",
											children: [
												!(idx === milestones.length - 1) && /* @__PURE__ */ jsx("span", {
													"aria-hidden": "true",
													className: "absolute left-[5px] top-[16px] bottom-0 w-[1.5px] bg-purple-200/90"
												}),
												/* @__PURE__ */ jsx("span", { className: `absolute left-0 top-[5px] h-3 w-3 rounded-full transition-all duration-300 ${isDarkBubble ? "bg-purple-900 ring-3 ring-purple-300/80 scale-110 shadow-xs z-10" : "bg-purple-200 ring-3 ring-purple-50 scale-100"}` }),
												/* @__PURE__ */ jsxs("p", {
													className: "text-base sm:text-lg font-bold leading-tight tracking-tight flex items-center gap-2",
													children: [/* @__PURE__ */ jsx("span", {
														className: isDarkBubble ? "text-slate-800 font-bold transition-colors" : "text-slate-700 font-semibold transition-colors",
														children: item.year
													}), idx === 0 && /* @__PURE__ */ jsx("span", {
														className: "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200",
														children: "Current"
													})]
												}),
												/* @__PURE__ */ jsx("ul", {
													className: "mt-1.5 list-disc space-y-1 pl-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-500",
													children: item.points.map((pt, pIdx) => /* @__PURE__ */ jsx("li", {
														className: "hover:text-slate-800 transition-colors",
														children: pt
													}, pIdx))
												})
											]
										}, idx);
									})
								})
							}), /* @__PURE__ */ jsx("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute inset-0 -z-10",
								style: { background: "linear-gradient(188deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 16%, rgba(255,255,255,0) 34%)" }
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "#reviews",
						className: "mx-auto -mt-1 inline-flex items-center gap-1.5 p-2 text-xs sm:text-sm font-bold tracking-normal text-purple-700 transition-all hover:text-purple-900 hover:translate-x-1 min-[1324px]:mx-0 min-[1324px]:mt-0",
						children: [/* @__PURE__ */ jsx("span", { children: "Read verified reviews from students & parents" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 text-purple-600" })]
					})
				]
			})
		]
	});
}
//#endregion
export { PcpJourneySection as default };
