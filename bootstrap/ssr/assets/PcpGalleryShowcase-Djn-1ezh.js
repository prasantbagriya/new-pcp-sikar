import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { Sparkles, Trophy } from "lucide-react";
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
	const [scaledIndex, setScaledIndex] = useState(null);
	const [panningX, setPanningX] = useState(0);
	const [itemWidth, setItemWidth] = useState(190);
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
			batch: "Regular Classroom",
			alt: "Devesh Joshi AIR 1 NEET"
		},
		{
			id: 2,
			src: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			title: "Vivek Gupta",
			rank: "AIR 225 (JEE Adv)",
			badge: "JEE Adv AIR 225",
			score: "IIT Bombay CS",
			batch: "Super-50 Elite",
			alt: "Vivek Gupta AIR 225 JEE Adv"
		},
		{
			id: 3,
			src: "/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg",
			title: "Saurabh Agarwal",
			rank: "AIR 87 (AIIMS/NEET)",
			badge: "AIR 87 AIIMS",
			score: "AIIMS New Delhi",
			batch: "Medical Division",
			alt: "Saurabh Agarwal AIR 87 AIIMS"
		},
		{
			id: 4,
			src: "/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg",
			title: "Navdeep Mann",
			rank: "AIR 469 (JEE Adv)",
			badge: "AIR 469 JEE Adv",
			score: "IIT Delhi Selection",
			batch: "Integrated Schooling",
			alt: "Navdeep Mann AIR 469 IIT Delhi"
		},
		{
			id: 5,
			src: "/uploads/pcp/theme_toppers/braj_kishor_air677.jpg",
			title: "Braj Kishor",
			rank: "AIR 677 (JEE Adv)",
			badge: "AIR 677 JEE Adv",
			score: "IIT Roorkee Selection",
			batch: "Classroom Aspirant",
			alt: "Braj Kishor AIR 677 IIT Roorkee"
		},
		{
			id: 6,
			src: "/uploads/pcp/theme_toppers/vikas_dhakharwal_air779.jpg",
			title: "Vikas Dhakharwal",
			rank: "AIR 779 (JEE Adv)",
			badge: "AIR 779 JEE Adv",
			score: "IIT Kanpur Selection",
			batch: "Regular Classroom",
			alt: "Vikas Dhakharwal AIR 779 IIT Kanpur"
		},
		{
			id: 7,
			src: "/uploads/pcp/theme_toppers/nikhil_jeemain.jpg",
			title: "Nikhil & Top Rankers",
			rank: "99.9478 Percentile",
			badge: "99.94%tile JEE",
			score: "State Rankers JEE Main",
			batch: "Doubt Desk Mentorship",
			alt: "Nikhil 99.9478%tile JEE Main"
		},
		{
			id: 8,
			src: "/uploads/pcp/theme_toppers/rahul_kumawat_jeemain.jpg",
			title: "Rahul Kumawat",
			rank: "Top State Ranker",
			badge: "JEE Main Topper",
			score: "NIT Top Engineering",
			batch: "Classroom Regular",
			alt: "Rahul Kumawat JEE Main Topper"
		},
		{
			id: 9,
			src: "/uploads/pcp/theme_toppers/devesh_joshi.jpg",
			title: "Devesh Joshi",
			rank: "All India Rank 1",
			badge: "NEET Champion",
			score: "AIIMS New Delhi Selected",
			batch: "PCP Sikar Classroom",
			alt: "Devesh Joshi Felicitation"
		},
		{
			id: 10,
			src: "/uploads/pcp/theme_toppers/saurabh_agarwal.jpg",
			title: "Saurabh Agarwal",
			rank: "AIIMS New Delhi Selected",
			badge: "AIIMS Delhi",
			score: "Top Medical Ranker",
			batch: "Medical Division",
			alt: "Saurabh Agarwal Classroom Ranker"
		}
	];
	const updateMeasurements = useCallback(() => {
		if (cardRefs.current[0]) setItemWidth(cardRefs.current[0].offsetWidth || 190);
	}, []);
	useEffect(() => {
		updateMeasurements();
		window.addEventListener("resize", updateMeasurements);
		return () => window.removeEventListener("resize", updateMeasurements);
	}, [updateMeasurements]);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setScaledIndex(null);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	const handleMouseMove = (e) => {
		setMousePos({
			x: e.clientX,
			y: e.clientY
		});
		if (scaledIndex === null && sectionRef.current && trackRef.current) {
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
		if (scaledIndex !== null) return;
		const diff = e.touches[0].clientX - touchStartX.current;
		if (sectionRef.current && trackRef.current) {
			const sectionWidth = sectionRef.current.offsetWidth;
			const trackWidth = trackRef.current.scrollWidth;
			const maxPan = Math.max(0, trackWidth - sectionWidth + 60);
			const newPan = Math.min(0, Math.max(-maxPan, touchStartPan.current + diff));
			setPanningX(newPan);
		}
	};
	const handleCardClick = (idx, e) => {
		e.stopPropagation();
		if (scaledIndex === idx) setScaledIndex(null);
		else {
			setScaledIndex(idx);
			if (sectionRef.current && trackRef.current) {
				const sectionWidth = sectionRef.current.offsetWidth;
				const cardEl = cardRefs.current[idx];
				if (cardEl) {
					const idealPan = -(cardEl.offsetLeft + cardEl.offsetWidth / 2 - sectionWidth / 2);
					const trackWidth = trackRef.current.scrollWidth;
					const maxPan = Math.max(0, trackWidth - sectionWidth + 60);
					const clampedPan = Math.min(0, Math.max(-maxPan, idealPan));
					setPanningX(clampedPan);
				}
			}
		}
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "campus-spaces",
		ref: sectionRef,
		onMouseMove: handleMouseMove,
		onMouseEnter: () => setIsHoveringSection(true),
		onMouseLeave: () => {
			setIsHoveringSection(false);
			setMousePos({
				x: -300,
				y: -300
			});
		},
		onTouchStart: handleTouchStart,
		onTouchMove: handleTouchMove,
		onClick: () => setScaledIndex(null),
		className: "relative w-full pt-6 pb-10 sm:pt-8 sm:pb-12 bg-white overflow-visible select-none border-t border-purple-100",
		style: {
			cursor: isHoveringSection ? "none" : "default",
			contain: "none"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 pointer-events-none overflow-hidden",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-purple-100/40 rounded-full blur-[140px]" }), /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-amber-100/30 rounded-full blur-[130px]" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-2.5",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-50 text-[#2e0854] text-xs font-black uppercase tracking-wider border border-purple-200/60 mb-1.5",
							children: [/* @__PURE__ */ jsx(Trophy, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "HALL OF FAME & CHAMPIONS" })]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-normal mb-1",
							children: "Meet Our National Rankers & Selections"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-slate-600 text-xs sm:text-sm",
							children: "Click any topper card to expand details in-place. Move mouse horizontally to browse."
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50/80 border border-purple-200/60 text-xs font-bold text-[#2e0854] shrink-0",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ jsx("span", { children: "Interactive Ribbon • Click to Expand" })]
					})]
				})
			}),
			isHoveringSection && /* @__PURE__ */ jsx("div", {
				style: {
					left: `${mousePos.x}px`,
					top: `${mousePos.y}px`
				},
				className: `fixed z-[120] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-150 ease-out hidden md:flex ${scaledIndex !== null ? "w-[50px] h-[50px] bg-[#2e0854] text-white shadow-xl ring-1 ring-purple-300" : "w-[44px] h-[44px] bg-white text-[#2e0854] shadow-md ring-1 ring-purple-200 font-bold"}`,
				children: /* @__PURE__ */ jsx("span", {
					className: "text-[9px] font-bold tracking-wider uppercase select-none",
					children: scaledIndex !== null ? "Close" : "Scale"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-20 w-full overflow-visible pt-5 sm:pt-7 pb-4 sm:pb-6",
				children: /* @__PURE__ */ jsx("div", {
					ref: trackRef,
					style: {
						transform: `translate3d(${panningX}px, 0px, 0px)`,
						transition: scaledIndex !== null ? "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)" : "transform 0.2s ease-out"
					},
					className: "flex items-start gap-3 sm:gap-3.5 px-4 sm:px-8 lg:px-12 will-change-transform overflow-visible",
					children: galleryItems.map((item, idx) => {
						const isScaled = scaledIndex === idx;
						const siblingShift = Math.round(itemWidth * .42);
						let siblingTransform = "translate3d(0px, 0px, 0px)";
						if (scaledIndex !== null) {
							if (idx < scaledIndex) siblingTransform = `translate3d(-${siblingShift}px, 0px, 0px)`;
							else if (idx > scaledIndex) siblingTransform = `translate3d(${siblingShift}px, 0px, 0px)`;
						}
						return /* @__PURE__ */ jsxs("div", {
							ref: (el) => cardRefs.current[idx] = el,
							onClick: (e) => handleCardClick(idx, e),
							style: {
								transformOrigin: "50% 20%",
								transform: isScaled ? "scale(1.4, 1.4)" : `${siblingTransform} scale(1, 1)`,
								zIndex: isScaled ? 90 : 10,
								boxShadow: isScaled ? "0 18px 36px -8px rgba(46, 8, 84, 0.35)" : "0 2px 8px -2px rgba(46, 8, 84, 0.08)",
								transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.1s ease, box-shadow 0.3s ease"
							},
							className: `w-[145px] sm:w-[170px] lg:w-[195px] h-[190px] sm:h-[220px] lg:h-[250px] shrink-0 cursor-pointer relative overflow-hidden select-none will-change-transform rounded-xl border ${isScaled ? "border-purple-400 bg-[#2e0854]" : "border-purple-100/90 bg-[#250646] hover:border-purple-300"}`,
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "absolute top-1.5 left-1.5 z-20",
									children: /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-amber-300 font-extrabold text-[8.5px] uppercase tracking-wide border border-amber-300/30",
										children: [/* @__PURE__ */ jsx(Trophy, { className: "w-2.5 h-2.5 text-amber-400 shrink-0" }), /* @__PURE__ */ jsx("span", { children: item.badge })]
									})
								}),
								/* @__PURE__ */ jsx("img", {
									src: item.src,
									alt: item.alt,
									width: "195",
									height: "250",
									loading: "lazy",
									decoding: "async",
									className: "w-full h-full object-cover object-top block select-none pointer-events-none transition-transform duration-500"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute inset-x-0 bottom-0 z-20 p-2 bg-gradient-to-t from-[#2e0854] via-[#2e0854]/85 to-transparent text-white",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] sm:text-xs font-bold tracking-tight text-white leading-tight truncate",
											children: item.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[9px] sm:text-[10px] font-semibold text-purple-200 leading-tight truncate mt-0.5",
											children: item.rank
										}),
										isScaled && /* @__PURE__ */ jsx("p", {
											className: "text-[8px] text-amber-300 font-bold leading-tight truncate mt-0.5 animate-fade-in",
											children: item.score
										})
									]
								})
							]
						}, item.id);
					})
				})
			})
		]
	});
}
//#endregion
export { PcpGalleryShowcase as default };
