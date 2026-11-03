import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
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
	const [itemWidth, setItemWidth] = useState(180);
	const touchStartX = useRef(0);
	const touchStartPan = useRef(0);
	const baseItems = [
		{
			id: 1,
			src: "/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg",
			alt: "Devesh Joshi AIR 1 NEET"
		},
		{
			id: 2,
			src: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			alt: "Vivek Gupta AIR 225 JEE Adv"
		},
		{
			id: 3,
			src: "/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg",
			alt: "Saurabh Agarwal AIR 87 AIIMS"
		},
		{
			id: 4,
			src: "/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg",
			alt: "Navdeep Mann AIR 469 IIT Delhi"
		},
		{
			id: 5,
			src: "/uploads/pcp/theme_toppers/braj_kishor_air677.jpg",
			alt: "Braj Kishor AIR 677 IIT Roorkee"
		},
		{
			id: 6,
			src: "/uploads/pcp/theme_toppers/vikas_dhakharwal_air779.jpg",
			alt: "Vikas Dhakharwal AIR 779 IIT Kanpur"
		},
		{
			id: 7,
			src: "/uploads/pcp/theme_toppers/nikhil_jeemain.jpg",
			alt: "Nikhil 99.9478%tile JEE Main"
		},
		{
			id: 8,
			src: "/uploads/pcp/theme_toppers/rahul_kumawat_jeemain.jpg",
			alt: "Rahul Kumawat JEE Main Topper"
		},
		{
			id: 9,
			src: "/uploads/pcp/theme_toppers/devesh_joshi.jpg",
			alt: "Devesh Joshi Felicitation"
		},
		{
			id: 10,
			src: "/uploads/pcp/theme_toppers/saurabh_agarwal.jpg",
			alt: "Saurabh Agarwal AIIMS New Delhi"
		},
		{
			id: 11,
			src: "/uploads/pcp/theme_toppers/vivek_gupta.jpg",
			alt: "Vivek Gupta Classroom Ranker"
		}
	];
	const galleryItems = [...baseItems, ...baseItems.map((item) => ({
		...item,
		id: item.id + 100
	}))];
	const updateMeasurements = useCallback(() => {
		if (cardRefs.current[0]) setItemWidth(cardRefs.current[0].offsetWidth || 180);
	}, []);
	useEffect(() => {
		updateMeasurements();
		window.addEventListener("resize", updateMeasurements);
		return () => window.removeEventListener("resize", updateMeasurements);
	}, [updateMeasurements]);
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
					const cardLeft = cardEl.offsetLeft;
					const cardW = cardEl.offsetWidth;
					const idealCenterPan = -(cardLeft - sectionWidth / 2 + cardW / 2);
					const trackWidth = trackRef.current.scrollWidth;
					const maxPan = Math.max(0, trackWidth - sectionWidth + 60);
					const clampedPan = Math.min(0, Math.max(-maxPan, idealCenterPan));
					setPanningX(clampedPan);
				}
			}
		}
	};
	const handleSectionClick = () => {
		if (scaledIndex !== null) setScaledIndex(null);
	};
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setScaledIndex(null);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		id: "campus-spaces",
		ref: sectionRef,
		onClick: handleSectionClick,
		onMouseMove: handleMouseMove,
		onTouchStart: handleTouchStart,
		onTouchMove: handleTouchMove,
		onMouseEnter: () => setIsHoveringSection(true),
		onMouseLeave: () => {
			setIsHoveringSection(false);
			setMousePos({
				x: -300,
				y: -300
			});
		},
		style: {
			backgroundColor: "#faf7fe",
			cursor: isHoveringSection ? "none" : "default",
			contain: "none"
		},
		className: `w-full relative overflow-visible select-none py-8 sm:py-10 lg:py-12 flex flex-col justify-center border-y border-purple-100/90 transition-all duration-200 ${scaledIndex !== null ? "z-[100]" : "z-30"}`,
		children: [isHoveringSection && /* @__PURE__ */ jsx("div", {
			style: {
				left: `${mousePos.x}px`,
				top: `${mousePos.y}px`
			},
			className: `fixed z-[120] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-150 ease-out hidden md:flex ${scaledIndex !== null ? "w-[52px] h-[52px] bg-[#2e0854] text-white shadow-xl ring-2 ring-purple-300" : "w-[46px] h-[46px] bg-white text-[#2e0854] shadow-md ring-1 ring-purple-200 font-bold"}`,
			children: /* @__PURE__ */ jsx("span", {
				className: "text-[10px] font-bold tracking-wider uppercase select-none",
				children: scaledIndex !== null ? "Close" : "Scale"
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "relative z-20 w-full overflow-visible py-2",
			children: /* @__PURE__ */ jsx("div", {
				ref: trackRef,
				style: {
					transform: `translate3d(${panningX}px, 0px, 0px)`,
					transition: scaledIndex !== null ? "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)" : "transform 0.2s ease-out"
				},
				className: "flex items-center gap-3 sm:gap-3.5 px-4 sm:px-8 lg:px-12 will-change-transform overflow-visible",
				children: galleryItems.map((item, idx) => {
					const isScaled = scaledIndex === idx;
					const siblingShift = Math.round(itemWidth * .55);
					let siblingTransform = "translate3d(0px, 0px, 0px)";
					if (scaledIndex !== null) {
						if (idx < scaledIndex) siblingTransform = `translate3d(-${siblingShift}px, 0px, 0px)`;
						else if (idx > scaledIndex) siblingTransform = `translate3d(${siblingShift}px, 0px, 0px)`;
					}
					return /* @__PURE__ */ jsx("div", {
						ref: (el) => cardRefs.current[idx] = el,
						onClick: (e) => handleCardClick(idx, e),
						style: {
							transformOrigin: "50% 50%",
							transform: isScaled ? "scale(1.65, 1.65)" : `${siblingTransform} scale(1, 1)`,
							zIndex: isScaled ? 90 : 10,
							boxShadow: isScaled ? "0 25px 60px -15px rgba(46, 8, 84, 0.45), 0 0 0 1px rgba(91, 64, 207, 0.3)" : "0 2px 8px -2px rgba(46, 8, 84, 0.08)",
							transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.1s ease, box-shadow 0.35s ease"
						},
						className: `w-[130px] sm:w-[155px] lg:w-[180px] h-[165px] sm:h-[195px] lg:h-[225px] shrink-0 cursor-pointer relative overflow-hidden select-none will-change-transform bg-[#250646] rounded-xl border ${isScaled ? "border-purple-400" : "border-purple-100/90 hover:border-purple-300"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: item.src,
							alt: item.alt,
							width: "180",
							height: "225",
							loading: "lazy",
							decoding: "async",
							className: "w-full h-full object-cover object-top block select-none pointer-events-none rounded-xl"
						})
					}, `${item.id}-${idx}`);
				})
			})
		})]
	});
}
//#endregion
export { PcpGalleryShowcase as default };
