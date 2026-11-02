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
	const galleryItems = [
		{
			id: 1,
			src: "/uploads/pcp_campus_building.png",
			alt: "Palwas Road Mega Campus"
		},
		{
			id: 2,
			src: "/uploads/pcp/portraits/devesh_joshi.jpg",
			alt: "Devesh Joshi AIR 1 NEET"
		},
		{
			id: 3,
			src: "/uploads/pcp/toppers/vivek_gupta_air225.jpg",
			alt: "Vivek Gupta AIR 225 JEE Adv"
		},
		{
			id: 4,
			src: "/uploads/pcp/portraits/saurabh_agarwal.jpg",
			alt: "Saurabh Agarwal AIR 87 AIIMS"
		},
		{
			id: 5,
			src: "/uploads/pcp/jaipur.jpg",
			alt: "PCP Jaipur Academic Campus"
		},
		{
			id: 6,
			src: "/uploads/pcp/portraits/navdeep_mann.jpg",
			alt: "Navdeep Mann AIR 469 IIT Delhi"
		},
		{
			id: 7,
			src: "/uploads/pcp/toppers/nikhil_jeemain.jpg",
			alt: "Nikhil 99.9478%tile JEE Main"
		},
		{
			id: 8,
			src: "/uploads/pcp/portraits/vivek_gupta.jpg",
			alt: "Classroom Ranker Vivek Gupta"
		},
		{
			id: 9,
			src: "/uploads/pcp/toppers/braj_kishor_air677.jpg",
			alt: "Braj Kishor AIR 677 IIT Roorkee"
		},
		{
			id: 10,
			src: "/uploads/pcp/toppers/vikas_dhakharwal_air779.jpg",
			alt: "Vikas Dhakharwal AIR 779 IIT Kanpur"
		},
		{
			id: 11,
			src: "/uploads/pcp/portraits/nikhil.jpg",
			alt: "Rankers Study Desk Mentorship"
		},
		{
			id: 12,
			src: "/uploads/pcp/toppers/rahul_kumawat_jeemain.jpg",
			alt: "Rahul Kumawat JEE Main Topper"
		},
		{
			id: 13,
			src: "/uploads/pcp/toppers/devesh_joshi_air1.jpg",
			alt: "AIR 1 NEET Felicitation"
		},
		{
			id: 14,
			src: "/uploads/pcp/360.png",
			alt: "Prince Eduhub Campus"
		}
	];
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
					const minPan = -(trackRef.current.scrollWidth - sectionWidth + 60);
					setPanningX(Math.min(0, Math.max(minPan, idealCenterPan)));
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
		onMouseLeave: () => setIsHoveringSection(false),
		style: {
			backgroundColor: "#faf7fe",
			contentVisibility: "visible",
			contain: "none"
		},
		className: `w-full relative overflow-visible no-contain select-none transition-all duration-200 py-6 sm:py-8 lg:py-10 flex flex-col justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] border-b border-purple-100/90 ${scaledIndex !== null ? "z-[100]" : "z-30"}`,
		children: [isHoveringSection && /* @__PURE__ */ jsx("div", {
			style: {
				left: `${mousePos.x}px`,
				top: `${mousePos.y}px`
			},
			className: `fixed z-[120] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-150 ease-out hidden md:flex ${scaledIndex !== null ? "w-[54px] h-[54px] bg-[#2e0854] text-white shadow-xl ring-2 ring-purple-300" : "w-[48px] h-[48px] bg-white text-[#2e0854] shadow-md ring-1 ring-purple-200 font-bold"}`,
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
				className: "flex items-end gap-[14px] px-5 sm:px-8 lg:px-12 will-change-transform overflow-visible",
				children: galleryItems.map((item, idx) => {
					const isScaled = scaledIndex === idx;
					const siblingShift = Math.round(itemWidth * .72);
					let siblingTransform = "translate3d(0px, 0px, 0px)";
					if (scaledIndex !== null) {
						if (idx < scaledIndex) siblingTransform = `translate3d(-${siblingShift}px, 0px, 0px)`;
						else if (idx > scaledIndex) siblingTransform = `translate3d(${siblingShift}px, 0px, 0px)`;
					}
					return /* @__PURE__ */ jsx("div", {
						ref: (el) => cardRefs.current[idx] = el,
						onClick: (e) => handleCardClick(idx, e),
						style: {
							transformOrigin: "50% 100%",
							transform: isScaled ? "scale(2.35, 2.35)" : `${siblingTransform} scale(1, 1)`,
							zIndex: isScaled ? 90 : 10,
							boxShadow: isScaled ? "0 25px 60px -15px rgba(46, 8, 84, 0.45), 0 0 0 1px rgba(91, 64, 207, 0.25)" : "none",
							transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.1s ease, box-shadow 0.4s ease"
						},
						className: "w-[130px] sm:w-[155px] lg:w-[180px] h-[165px] sm:h-[195px] lg:h-[225px] shrink-0 cursor-pointer relative overflow-hidden select-none will-change-transform bg-slate-900 rounded-none",
						children: /* @__PURE__ */ jsx("img", {
							src: item.src,
							alt: item.alt,
							width: "180",
							height: "225",
							loading: "lazy",
							decoding: "async",
							className: "w-full h-full object-cover object-top block select-none pointer-events-none rounded-none"
						})
					}, item.id);
				})
			})
		})]
	});
}
//#endregion
export { PcpGalleryShowcase as default };
