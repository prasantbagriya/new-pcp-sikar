import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Award, ChevronLeft, ChevronRight, Sparkles, Trophy, X, ZoomIn } from "lucide-react";
import { createPortal } from "react-dom";
//#region resources/js/Pages/HomeComponents/PcpGalleryShowcase.jsx
function PcpGalleryShowcase() {
	const sectionRef = useRef(null);
	const trackRef = useRef(null);
	const cardRefs = useRef([]);
	const [mousePos, setMousePos] = useState({
		x: -300,
		y: -300
	});
	const [isHoveringSection, setIsHoveringSection] = useState(false);
	const [activeModalIndex, setActiveModalIndex] = useState(null);
	const [panningX, setPanningX] = useState(0);
	const touchStartX = useRef(0);
	const touchStartPan = useRef(0);
	const galleryItems = [
		{
			id: 1,
			src: "/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg",
			title: "Devesh Joshi",
			rank: "AIR 1 (NEET-UG)",
			badge: "NEET AIR 1",
			score: "720 / 720 Perfect Score",
			batch: "Regular 2-Year Classroom Student",
			exam: "NEET-UG",
			alt: "Devesh Joshi AIR 1 NEET"
		},
		{
			id: 2,
			src: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			title: "Vivek Gupta",
			rank: "AIR 225 (JEE Advanced)",
			badge: "JEE Adv AIR 225",
			score: "IIT Bombay Computer Science Selection",
			batch: "PCP Super-50 Elite Residential Batch",
			exam: "IIT-JEE",
			alt: "Vivek Gupta AIR 225 JEE Adv"
		},
		{
			id: 3,
			src: "/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg",
			title: "Saurabh Agarwal",
			rank: "AIR 87 (AIIMS / NEET)",
			badge: "AIR 87 AIIMS",
			score: "AIIMS New Delhi Selected",
			batch: "PCP Medical Division",
			exam: "NEET-UG",
			alt: "Saurabh Agarwal AIR 87 AIIMS"
		},
		{
			id: 4,
			src: "/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg",
			title: "Navdeep Mann",
			rank: "AIR 469 (JEE Advanced)",
			badge: "AIR 469 JEE Adv",
			score: "IIT Delhi Selection (With XII)",
			batch: "Integrated Schooling + Coaching",
			exam: "IIT-JEE",
			alt: "Navdeep Mann AIR 469 IIT Delhi"
		},
		{
			id: 5,
			src: "/uploads/pcp/theme_toppers/braj_kishor_air677.jpg",
			title: "Braj Kishor",
			rank: "AIR 677 (JEE Advanced)",
			badge: "AIR 677 JEE Adv",
			score: "IIT Roorkee Selection",
			batch: "Classroom Aspirant With XII",
			exam: "IIT-JEE",
			alt: "Braj Kishor AIR 677 IIT Roorkee"
		},
		{
			id: 6,
			src: "/uploads/pcp/theme_toppers/vikas_dhakharwal_air779.jpg",
			title: "Vikas Dhakharwal",
			rank: "AIR 779 (JEE Advanced)",
			badge: "AIR 779 JEE Adv",
			score: "IIT Kanpur Selection",
			batch: "PCP Regular Classroom",
			exam: "IIT-JEE",
			alt: "Vikas Dhakharwal AIR 779 IIT"
		},
		{
			id: 7,
			src: "/uploads/pcp/theme_toppers/nikhil_jeemain.jpg",
			title: "Nikhil & Top Rankers",
			rank: "99.9478 Percentile",
			badge: "99.94%tile JEE",
			score: "Top State Rankers in JEE Main",
			batch: "PCP Doubt Desk Mentorship",
			exam: "JEE Main",
			alt: "Nikhil 99.9478%tile JEE Main"
		},
		{
			id: 8,
			src: "/uploads/pcp/theme_toppers/rahul_kumawat_jeemain.jpg",
			title: "Rahul Kumawat",
			rank: "JEE Main State Ranker",
			badge: "99.85+%tile",
			score: "State Top Percentile Ranker",
			batch: "PCP Classroom Foundation",
			exam: "JEE Main",
			alt: "Rahul Kumawat JEE Main Topper"
		},
		{
			id: 9,
			src: "/uploads/pcp/theme_toppers/devesh_joshi.jpg",
			title: "Devesh Joshi Felicitation",
			rank: "Historic NEET AIR 1",
			badge: "Grand Ceremony",
			score: "₹31 Lakh Cash Prize & Helicopter Tour",
			batch: "PCP Sikar Campus",
			exam: "Felicitation",
			alt: "Devesh Joshi Felicitation"
		},
		{
			id: 10,
			src: "/uploads/pcp/theme_toppers/vivek_gupta.jpg",
			title: "Vivek Gupta (With XII)",
			rank: "Top 1% National Achiever",
			badge: "With Class XII",
			score: "Cracked JEE Advanced in First Attempt",
			batch: "Integrated Hostel-Coaching Batch",
			exam: "IIT-JEE",
			alt: "Classroom Ranker Vivek Gupta"
		}
	];
	const handleMouseMove = (e) => {
		setMousePos({
			x: e.clientX,
			y: e.clientY
		});
		if (activeModalIndex === null && sectionRef.current && trackRef.current) {
			const sectionRect = sectionRef.current.getBoundingClientRect();
			const relX = Math.max(0, Math.min(1, (e.clientX - sectionRect.left) / sectionRect.width));
			const trackWidth = trackRef.current.scrollWidth;
			const viewportWidth = sectionRect.width;
			const maxPan = Math.max(0, trackWidth - viewportWidth + 60);
			setPanningX(-(relX * maxPan));
		}
	};
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
		touchStartPan.current = panningX;
	};
	const handleTouchMove = (e) => {
		if (activeModalIndex !== null) return;
		const diff = e.touches[0].clientX - touchStartX.current;
		if (sectionRef.current && trackRef.current) {
			const sectionWidth = sectionRef.current.offsetWidth;
			const trackWidth = trackRef.current.scrollWidth;
			const maxPan = Math.max(0, trackWidth - sectionWidth + 60);
			const newPan = Math.min(0, Math.max(-maxPan, touchStartPan.current + diff));
			setPanningX(newPan);
		}
	};
	const handleOpenModal = (idx, e) => {
		e.stopPropagation();
		setActiveModalIndex(idx);
	};
	const handleCloseModal = () => {
		setActiveModalIndex(null);
	};
	const handlePrev = (e) => {
		e.stopPropagation();
		setActiveModalIndex((prev) => prev > 0 ? prev - 1 : galleryItems.length - 1);
	};
	const handleNext = (e) => {
		e.stopPropagation();
		setActiveModalIndex((prev) => prev < galleryItems.length - 1 ? prev + 1 : 0);
	};
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (activeModalIndex !== null) {
				if (e.key === "Escape") setActiveModalIndex(null);
				if (e.key === "ArrowLeft") setActiveModalIndex((prev) => prev > 0 ? prev - 1 : galleryItems.length - 1);
				if (e.key === "ArrowRight") setActiveModalIndex((prev) => prev < galleryItems.length - 1 ? prev + 1 : 0);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeModalIndex, galleryItems.length]);
	const activeItem = activeModalIndex !== null ? galleryItems[activeModalIndex] : null;
	return /* @__PURE__ */ jsxs("section", {
		id: "campus-spaces",
		ref: sectionRef,
		onMouseMove: handleMouseMove,
		onTouchStart: handleTouchStart,
		onTouchMove: handleTouchMove,
		onMouseEnter: () => setIsHoveringSection(true),
		onMouseLeave: () => setIsHoveringSection(false),
		style: {
			backgroundColor: "#faf7fe",
			contentVisibility: "visible",
			contain: "none"
		},
		className: "w-full relative overflow-hidden select-none py-8 sm:py-10 lg:py-12 flex flex-col justify-center border-b border-purple-100/90 z-20",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-5 sm:mb-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-[11px] font-bold tracking-wide uppercase",
							children: [/* @__PURE__ */ jsx(Trophy, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "Hall of Fame & Champions" })]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight",
							children: "Meet Our National Rankers & Selections"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs sm:text-sm text-slate-600 font-normal",
							children: "Click on any topper photo to view full high-resolution felicitation card and rank credentials."
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "hidden sm:flex items-center gap-2 text-xs font-semibold text-purple-800 bg-white/80 px-3 py-1.5 rounded-xl border border-purple-200/80 shadow-2xs",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "Interactive Ribbon • Drag to Pan" })]
					})]
				})
			}),
			isHoveringSection && activeModalIndex === null && /* @__PURE__ */ jsxs("div", {
				style: {
					left: `${mousePos.x}px`,
					top: `${mousePos.y}px`
				},
				className: "fixed z-[120] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-[#2e0854] text-white rounded-full flex flex-col items-center justify-center shadow-xl ring-2 ring-purple-300 font-bold transition-all duration-75 ease-out hidden md:flex",
				children: [/* @__PURE__ */ jsx(ZoomIn, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ jsx("span", {
					className: "text-[9px] font-bold tracking-wider uppercase mt-0.5",
					children: "Zoom"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 w-full overflow-visible py-3",
				children: /* @__PURE__ */ jsx("div", {
					ref: trackRef,
					style: {
						transform: `translate3d(${panningX}px, 0px, 0px)`,
						transition: "transform 0.2s ease-out"
					},
					className: "flex items-center gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12 will-change-transform overflow-visible",
					children: galleryItems.map((item, idx) => /* @__PURE__ */ jsxs("div", {
						ref: (el) => cardRefs.current[idx] = el,
						onClick: (e) => handleOpenModal(idx, e),
						className: "group w-[150px] sm:w-[180px] lg:w-[210px] h-[200px] sm:h-[240px] lg:h-[275px] shrink-0 cursor-pointer relative overflow-hidden select-none will-change-transform rounded-2xl border-2 border-purple-200/80 hover:border-purple-400 bg-[#2e0854] shadow-[0_8px_25px_-8px_rgba(46,8,84,0.22)] hover:shadow-[0_16px_35px_-10px_rgba(46,8,84,0.45)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-purple-300/40 text-[10px] font-extrabold text-white shadow-xs",
								children: [/* @__PURE__ */ jsx(Award, { className: "w-3 h-3 text-amber-400" }), /* @__PURE__ */ jsx("span", { children: item.badge })]
							}),
							/* @__PURE__ */ jsx("img", {
								src: item.src,
								alt: item.alt,
								width: "210",
								height: "275",
								loading: "lazy",
								decoding: "async",
								className: "w-full h-full object-cover object-top block select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute inset-x-0 bottom-0 z-20 p-2.5 sm:p-3 bg-gradient-to-t from-[#2e0854] via-[#2e0854]/85 to-transparent text-white",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs sm:text-sm font-bold tracking-tight text-white leading-tight truncate",
									children: item.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[10px] sm:text-[11px] font-semibold text-purple-200 mt-0.5 leading-tight truncate",
									children: item.rank
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 bg-[#2e0854]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex items-center justify-center pointer-events-none",
								children: /* @__PURE__ */ jsx("div", {
									className: "p-2.5 rounded-full bg-white/90 text-[#2e0854] shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-200",
									children: /* @__PURE__ */ jsx(ZoomIn, { className: "w-5 h-5 text-[#2e0854]" })
								})
							})
						]
					}, item.id))
				})
			}),
			activeModalIndex !== null && activeItem && typeof document !== "undefined" && document.body && createPortal(/* @__PURE__ */ jsx("div", {
				onClick: handleCloseModal,
				className: "fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6",
				style: { animation: "pcpFadeIn 0.2s ease-out" },
				children: /* @__PURE__ */ jsxs("div", {
					onClick: (e) => e.stopPropagation(),
					className: "relative w-full max-w-xl sm:max-w-2xl bg-[#1e053a] rounded-3xl border border-purple-400/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "w-full flex items-center justify-between px-4 sm:px-6 py-3 border-b border-purple-800/60 bg-[#2e0854]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "p-1 rounded-lg bg-amber-400/20 text-amber-300",
										children: /* @__PURE__ */ jsx(Trophy, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs sm:text-sm font-extrabold text-amber-300 tracking-wide uppercase",
										children: activeItem.badge
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-[11px] text-purple-300 ml-2 font-medium",
										children: [
											"(",
											activeModalIndex + 1,
											" of ",
											galleryItems.length,
											")"
										]
									})
								]
							}), /* @__PURE__ */ jsx("button", {
								onClick: handleCloseModal,
								"aria-label": "Close dialog",
								className: "p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer",
								children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative w-full flex items-center justify-center p-4 sm:p-6 bg-radial from-[#3b1165] to-[#120224] min-h-[300px] max-h-[62vh] sm:max-h-[68vh]",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: activeItem.src,
									alt: activeItem.alt,
									className: "max-h-[50vh] sm:max-h-[60vh] w-auto max-w-full object-contain rounded-2xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] border border-purple-400/30"
								}),
								/* @__PURE__ */ jsx("button", {
									onClick: handlePrev,
									"aria-label": "Previous topper",
									className: "absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-purple-300/40 transition-all cursor-pointer shadow-xl hover:scale-110",
									children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ jsx("button", {
									onClick: handleNext,
									"aria-label": "Next topper",
									className: "absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-purple-300/40 transition-all cursor-pointer shadow-xl hover:scale-110",
									children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "w-full p-4 sm:p-5 bg-[#250746] border-t border-purple-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-base sm:text-lg font-bold text-white tracking-tight",
										children: activeItem.title
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/30 border border-purple-400/40 text-purple-200",
										children: activeItem.exam
									})]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-xs sm:text-sm font-bold text-amber-300 mt-0.5",
									children: [
										activeItem.rank,
										" • ",
										activeItem.score
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-purple-200/80 mt-0.5",
									children: activeItem.batch
								})
							] }), /* @__PURE__ */ jsxs("a", {
								href: "#apply-now",
								onClick: handleCloseModal,
								className: "inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer shrink-0",
								children: [/* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Enroll with Toppers" })]
							})]
						})
					]
				})
			}), document.body)
		]
	});
}
//#endregion
export { PcpGalleryShowcase as default };
