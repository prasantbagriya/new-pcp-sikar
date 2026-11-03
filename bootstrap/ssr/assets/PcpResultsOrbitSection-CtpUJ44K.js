import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowRight, Award, CheckCircle2, Sparkles, Trophy } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpResultsOrbitSection.jsx
function PcpResultsOrbitSection() {
	const toppers = [
		{
			id: 1,
			name: "Devesh Joshi",
			exam: "NEET-UG 2024",
			rank: "AIR 1",
			score: "720/720 Perfect Score",
			college: "AIIMS New Delhi Selected",
			badge: "All India Rank 1",
			highlightLine: "Historic 720/720 Score in NEET-UG",
			story: "Devesh made history as the first classroom student from Sikar coaching history to deliver All India Rank 1 with an absolute 720/720 score in NEET. His structured daily testing and residential doubt support laid the bedrock for this milestone.",
			image: "/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg",
			category: "NEET-UG",
			batch: "NEET Elite Classroom"
		},
		{
			id: 2,
			name: "Vivek Gupta",
			exam: "JEE Advanced",
			rank: "AIR 225",
			score: "99.9677 %tile Club",
			college: "IIT Bombay Qualified",
			badge: "Sikar Coaching Topper",
			highlightLine: "Top Rank Among All Sikar Coachings",
			story: "Vivek secured AIR 225 in JEE Advanced alongside his 12th board exams, marking the highest rank produced by any coaching institute in Sikar. He is currently pursuing Engineering at IIT Bombay.",
			image: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			category: "JEE Advanced",
			batch: "Super-50 JEE Batch"
		},
		{
			id: 3,
			name: "Saurabh Agarwal",
			exam: "NEET-UG",
			rank: "AIR 87",
			score: "710/720 Marks",
			college: "AIIMS New Delhi Selected",
			badge: "Top-100 All India",
			highlightLine: "Sikar's Only Top-100 Medical Rank",
			story: "Saurabh is one of only two students in the entire Sikar district to secure a Top-100 All India Rank in NEET-UG with 710/720 marks, qualifying directly for AIIMS New Delhi through intensive faculty guidance.",
			image: "/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg",
			category: "NEET-UG",
			batch: "Target Medical Pioneer"
		},
		{
			id: 4,
			name: "Navdeep Mann",
			exam: "JEE Advanced",
			rank: "AIR 469",
			score: "99.9768 %tile (Sikar #1)",
			college: "IIT Delhi Qualified",
			badge: "Sikar JEE-Main Topper",
			highlightLine: "JEE Main Session-1 Sikar Topper",
			story: "Navdeep topped Sikar coaching in JEE Main Session-1 with a remarkable 99.9768 percentile and cracked JEE Advanced in his very first attempt with Class 12th through PCP's integrated academic system.",
			image: "/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg",
			category: "JEE Advanced",
			batch: "Class 12th Integrated"
		},
		{
			id: 5,
			name: "Nikhil",
			exam: "JEE Main",
			rank: "99.9478 %tile",
			score: "99.9478 %tile Club",
			college: "Top NIT / IIT Selected",
			badge: "With XII • 99.94%tile",
			highlightLine: "Conquered JEE Main in 1st Attempt",
			story: "Nikhil achieved 99.9478 percentile in JEE Main with Class 12th board exams. PCP's round-the-clock faculty doubt counters and disciplined hostel schedule ensured his uninterrupted focus.",
			image: "/uploads/pcp/theme_toppers/nikhil_jeemain.jpg",
			category: "JEE Main",
			batch: "PCP Residential Wing"
		},
		{
			id: 6,
			name: "Braj Kishor Meena",
			exam: "JEE Advanced",
			rank: "AIR 677",
			score: "99.9451 %tile Club",
			college: "IIT Roorkee Qualified",
			badge: "First Attempt IITian",
			highlightLine: "Direct IIT Selection with 12th",
			story: "Braj Kishor cracked JEE Advanced alongside 12th standard with a high national rank, transitioning seamlessly from pre-foundation to elite JEE batches at PCP Sikar.",
			image: "/uploads/pcp/theme_toppers/braj_kishor_air677.jpg",
			category: "JEE Advanced",
			batch: "Board + IIT Pioneer"
		},
		{
			id: 7,
			name: "Vikas Dhakharwal",
			exam: "JEE Advanced",
			rank: "AIR 779",
			score: "99.9519 %tile Club",
			college: "IIT Kanpur Qualified",
			badge: "Premier Tech College",
			highlightLine: "IIT Kanpur Computer Science Seat",
			story: "Vikas secured top percentile in JEE Main (99.9519) and conquered JEE Advanced in the same year, qualifying for prestigious engineering branches at IIT Kanpur.",
			image: "/uploads/pcp/theme_toppers/vikas_dhakharwal_air779.jpg",
			category: "JEE Advanced",
			batch: "Target JEE Advanced"
		},
		{
			id: 8,
			name: "Rahul Kumawat",
			exam: "JEE Main",
			rank: "99.9423 %tile",
			score: "99.9423 %tile Marks",
			college: "Premier Tech Institute",
			badge: "Target Batch Star",
			highlightLine: "Mastered JEE in Single Attempt",
			story: "Rahul was part of PCP's dedicated Target batch, systematically mastering advanced physics and mathematics through comprehensive test desk series to score 99.9423 percentile.",
			image: "/uploads/pcp/theme_toppers/rahul_kumawat_jeemain.jpg",
			category: "JEE Main",
			batch: "Target Achiever Batch"
		}
	];
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((curr) => (curr + 1) % toppers.length);
		}, 2e3);
		return () => clearInterval(interval);
	}, [toppers.length]);
	const activeTopper = toppers[activeIndex];
	const cx = 225;
	const cy = 270;
	const R_main = 195;
	const R_orbit = 244;
	const R_left = 212;
	const slotAngles = {
		exit: -70,
		top: -52,
		upper: -26,
		center: 0,
		lower: 26,
		bottom: 52,
		entry: 70
	};
	const getCoord = (deg) => {
		const rad = deg * Math.PI / 180;
		return {
			x: Math.round(cx + R_orbit * Math.cos(rad)),
			y: Math.round(cy + R_orbit * Math.sin(rad))
		};
	};
	const slotCoords = {
		exit: getCoord(slotAngles.exit),
		top: getCoord(slotAngles.top),
		upper: getCoord(slotAngles.upper),
		center: getCoord(slotAngles.center),
		lower: getCoord(slotAngles.lower),
		bottom: getCoord(slotAngles.bottom),
		entry: getCoord(slotAngles.entry)
	};
	const arcStartRad = -65 * Math.PI / 180;
	const arcEndRad = 65 * Math.PI / 180;
	const arcStart = {
		x: Math.round(cx + R_orbit * Math.cos(arcStartRad)),
		y: Math.round(cy + R_orbit * Math.sin(arcStartRad))
	};
	const arcEnd = {
		x: Math.round(cx + R_orbit * Math.cos(arcEndRad)),
		y: Math.round(cy + R_orbit * Math.sin(arcEndRad))
	};
	const centerPointX = slotCoords.center.x;
	const centerPointY = slotCoords.center.y;
	const mainRimX = 420;
	const mainRimY = cy;
	const leftTop = {
		x: Math.round(cx + R_left * Math.cos(215 * Math.PI / 180)),
		y: Math.round(cy + R_left * Math.sin(215 * Math.PI / 180))
	};
	const leftBottom = {
		x: Math.round(cx + R_left * Math.cos(145 * Math.PI / 180)),
		y: Math.round(cy + R_left * Math.sin(145 * Math.PI / 180))
	};
	const leftInnerTop = {
		x: Math.round(cx + (R_left - 6) * Math.cos(212 * Math.PI / 180)),
		y: Math.round(cy + (R_left - 6) * Math.sin(212 * Math.PI / 180))
	};
	const leftInnerBottom = {
		x: Math.round(cx + (R_left - 6) * Math.cos(148 * Math.PI / 180)),
		y: Math.round(cy + (R_left - 6) * Math.sin(148 * Math.PI / 180))
	};
	const N = toppers.length;
	const visibleSlots = [
		{
			key: "top",
			topper: toppers[(activeIndex + 2) % N],
			coord: slotCoords.top,
			opacity: 1,
			topperIdx: (activeIndex + 2) % N
		},
		{
			key: "upper",
			topper: toppers[(activeIndex + 1) % N],
			coord: slotCoords.upper,
			opacity: 1,
			topperIdx: (activeIndex + 1) % N
		},
		{
			key: "center",
			topper: toppers[activeIndex],
			coord: slotCoords.center,
			opacity: 1,
			isCenter: true,
			topperIdx: activeIndex
		},
		{
			key: "lower",
			topper: toppers[(activeIndex - 1 + N) % N],
			coord: slotCoords.lower,
			opacity: 1,
			topperIdx: (activeIndex - 1 + N) % N
		},
		{
			key: "bottom",
			topper: toppers[(activeIndex - 2 + N) % N],
			coord: slotCoords.bottom,
			opacity: 1,
			topperIdx: (activeIndex - 2 + N) % N
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		id: "results-orbit",
		className: "relative scroll-mt-24 pt-14 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 bg-gradient-to-b from-white via-[#faf7fe] to-white text-slate-900 overflow-hidden font-sans border-b border-purple-100/90 select-none",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 pointer-events-none overflow-hidden",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-10 w-[600px] h-[500px] bg-purple-200/25 rounded-full blur-[140px]" }), /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-[550px] h-[450px] bg-purple-100/35 rounded-full blur-[130px]" })]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "reveal-scroll lg:col-span-6 flex flex-col justify-center items-center",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative w-[360px] sm:w-[540px] h-[390px] sm:h-[540px] flex items-center justify-center overflow-visible",
						children: /* @__PURE__ */ jsxs("div", {
							className: "absolute w-[540px] h-[540px] origin-center scale-[0.70] sm:scale-100 transition-transform duration-300",
							children: [
								/* @__PURE__ */ jsxs("svg", {
									className: "absolute inset-0 w-full h-full pointer-events-none z-10",
									viewBox: "0 0 540 540",
									children: [
										/* @__PURE__ */ jsxs("defs", { children: [
											/* @__PURE__ */ jsxs("linearGradient", {
												id: "activeBeamGrad",
												x1: "0%",
												y1: "0%",
												x2: "100%",
												y2: "0%",
												children: [/* @__PURE__ */ jsx("stop", {
													offset: "0%",
													stopColor: "#5b40cf",
													stopOpacity: "0.85"
												}), /* @__PURE__ */ jsx("stop", {
													offset: "100%",
													stopColor: "#2e0854",
													stopOpacity: "1"
												})]
											}),
											/* @__PURE__ */ jsxs("linearGradient", {
												id: "arcGlowGrad",
												x1: "0%",
												y1: "0%",
												x2: "0%",
												y2: "100%",
												children: [
													/* @__PURE__ */ jsx("stop", {
														offset: "0%",
														stopColor: "#7c52c9",
														stopOpacity: "0.25"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "50%",
														stopColor: "#5b40cf",
														stopOpacity: "0.95"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "100%",
														stopColor: "#7c52c9",
														stopOpacity: "0.25"
													})
												]
											}),
											/* @__PURE__ */ jsxs("linearGradient", {
												id: "leftStemGrad",
												x1: "0%",
												y1: "0%",
												x2: "0%",
												y2: "100%",
												children: [
													/* @__PURE__ */ jsx("stop", {
														offset: "0%",
														stopColor: "#7c52c9",
														stopOpacity: "0.3"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "50%",
														stopColor: "#5b40cf",
														stopOpacity: "0.9"
													}),
													/* @__PURE__ */ jsx("stop", {
														offset: "100%",
														stopColor: "#7c52c9",
														stopOpacity: "0.3"
													})
												]
											})
										] }),
										/* @__PURE__ */ jsx("path", {
											d: `M ${arcStart.x} ${arcStart.y} A ${R_orbit} ${R_orbit} 0 0 1 ${arcEnd.x} ${arcEnd.y}`,
											fill: "none",
											stroke: "url(#arcGlowGrad)",
											strokeWidth: "2.5",
											strokeDasharray: "6 6"
										}),
										/* @__PURE__ */ jsxs("g", {
											className: "transition-all duration-300",
											children: [
												/* @__PURE__ */ jsx("line", {
													x1: mainRimX,
													y1: mainRimY,
													x2: centerPointX - 31,
													y2: centerPointY,
													stroke: "#5b40cf",
													strokeWidth: "5",
													strokeOpacity: "0.25",
													strokeLinecap: "round"
												}),
												/* @__PURE__ */ jsx("line", {
													x1: mainRimX,
													y1: mainRimY,
													x2: centerPointX - 31,
													y2: centerPointY,
													stroke: "#5b40cf",
													strokeWidth: "3",
													strokeLinecap: "round"
												}),
												/* @__PURE__ */ jsx("polygon", {
													points: `${centerPointX - 42},${centerPointY - 6} ${centerPointX - 31},${centerPointY} ${centerPointX - 42},${centerPointY + 6}`,
													fill: "#5b40cf",
													stroke: "#2e0854",
													strokeWidth: "1.2"
												}),
												/* @__PURE__ */ jsx("circle", {
													cx: mainRimX,
													cy: mainRimY,
													r: "4.5",
													fill: "#5b40cf",
													stroke: "white",
													strokeWidth: "2"
												})
											]
										}),
										/* @__PURE__ */ jsxs("g", {
											className: "transition-all duration-300",
											children: [
												/* @__PURE__ */ jsx("circle", {
													cx: leftTop.x,
													cy: leftTop.y,
													r: "5.5",
													fill: "white",
													stroke: "#5b40cf",
													strokeWidth: "2.2"
												}),
												/* @__PURE__ */ jsx("circle", {
													cx: leftTop.x,
													cy: leftTop.y,
													r: "2",
													fill: "#5b40cf"
												}),
												/* @__PURE__ */ jsx("path", {
													d: `M ${leftTop.x} ${leftTop.y} A ${R_left} ${R_left} 0 0 0 ${leftBottom.x} ${leftBottom.y}`,
													fill: "none",
													stroke: "#5b40cf",
													strokeWidth: "2.5",
													strokeOpacity: "0.85"
												}),
												/* @__PURE__ */ jsx("path", {
													d: `M ${leftInnerTop.x} ${leftInnerTop.y} A ${R_left - 6} ${R_left - 6} 0 0 0 ${leftInnerBottom.x} ${leftInnerBottom.y}`,
													fill: "none",
													stroke: "#5b40cf",
													strokeWidth: "1.5",
													strokeOpacity: "0.45"
												}),
												/* @__PURE__ */ jsx("circle", {
													cx: leftBottom.x,
													cy: leftBottom.y,
													r: "5.5",
													fill: "white",
													stroke: "#5b40cf",
													strokeWidth: "2.2"
												}),
												/* @__PURE__ */ jsx("circle", {
													cx: leftBottom.x,
													cy: leftBottom.y,
													r: "2",
													fill: "#5b40cf"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute rounded-full p-3 bg-gradient-to-tr from-[#2e0854]/25 via-[#5b40cf]/30 to-purple-200/50 shadow-[0_20px_50px_-10px_rgba(46,8,84,0.3)] flex items-center justify-center shrink-0 z-20 group",
									style: {
										left: `${cx - R_main}px`,
										top: `${cy - R_main}px`,
										width: `${R_main * 2}px`,
										height: `${R_main * 2}px`
									},
									children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-2 border-purple-300/80 pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
										className: "relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-3 border-white shadow-2xl",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: activeTopper.image,
												alt: activeTopper.name,
												width: "340",
												height: "340",
												loading: "lazy",
												decoding: "async",
												className: "w-full h-full object-cover object-center transition-all duration-500 ease-out transform scale-100 group-hover:scale-103"
											}, activeTopper.id),
											/* @__PURE__ */ jsx("div", {
												className: "absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-white/50 text-xs font-black tracking-widest uppercase select-none pointer-events-none z-20",
												children: /* @__PURE__ */ jsx("span", { children: "With XII" })
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "absolute inset-x-0 bottom-0 pt-10 pb-3.5 px-4 bg-gradient-to-t from-[#16032b]/95 via-[#2e0854]/75 via-[#2e0854]/40 to-transparent flex flex-col items-center text-center text-white z-20 transition-all duration-300",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/35 text-white text-[11px] font-black uppercase tracking-wider mb-1 shadow-xs",
														children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ jsxs("span", { children: [
															activeTopper.rank,
															" • ",
															activeTopper.exam
														] })]
													}),
													/* @__PURE__ */ jsx("h3", {
														className: "text-xl sm:text-2xl font-black text-white tracking-tight leading-tight drop-shadow-lg mb-2",
														children: activeTopper.name
													}),
													/* @__PURE__ */ jsxs("a", {
														href: "/category/jee-coachings",
														className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#5b40cf] to-[#7c52c9] hover:from-[#4931b0] hover:to-[#6a3fb8] text-white font-black text-[11px] shadow-md hover:shadow-purple-500/30 transition-all hover:scale-105 active:scale-95",
														children: [/* @__PURE__ */ jsx("span", { children: "View Rank Story" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 text-purple-200" })]
													})
												]
											})
										]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "absolute inset-0 pointer-events-none z-30",
									children: visibleSlots.map(({ key, topper, coord, isCenter, topperIdx }) => {
										const thumbSize = isCenter ? 62 : 56;
										return /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setActiveIndex(topperIdx),
											style: {
												left: `${coord.x}px`,
												top: `${coord.y}px`,
												transform: "translate(-50%, -50%)",
												width: `${thumbSize}px`,
												height: `${thumbSize}px`,
												transition: "left 0.65s cubic-bezier(0.34, 1.25, 0.64, 1), top 0.65s cubic-bezier(0.34, 1.25, 0.64, 1), opacity 0.4s ease-out"
											},
											className: `pointer-events-auto absolute rounded-full flex items-center justify-center cursor-pointer ${isCenter ? "z-40" : "z-20 hover:opacity-100"}`,
											title: `${topper.name} - ${topper.rank}`,
											"aria-label": `Select ${topper.name}`,
											children: [
												isCenter && /* @__PURE__ */ jsx("span", { className: "absolute -inset-2 rounded-full border-2 border-[#5b40cf] animate-ping opacity-75 pointer-events-none" }),
												/* @__PURE__ */ jsx("div", {
													style: {
														width: `${thumbSize}px`,
														height: `${thumbSize}px`
													},
													className: `relative rounded-full overflow-hidden border-2 transition-all shadow-md ${isCenter ? "border-[#5b40cf] ring-4 ring-purple-300 shadow-xl" : "border-white hover:border-[#5b40cf]"}`,
													children: /* @__PURE__ */ jsx("img", {
														src: topper.image,
														alt: topper.name,
														width: "56",
														height: "56",
														loading: "lazy",
														decoding: "async",
														className: "w-full h-full object-cover"
													})
												}),
												isCenter && /* @__PURE__ */ jsx("span", {
													className: "absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full bg-[#5b40cf] text-white text-[10px] font-black uppercase shadow-xs whitespace-nowrap",
													children: topper.rank
												})
											]
										}, topper.id);
									})
								})
							]
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "reveal-scroll lg:col-span-6 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7e8fc] text-[#2e0854] text-xs font-bold border border-[#eed3f8] shadow-2xs w-fit mb-3",
							children: [/* @__PURE__ */ jsx(Trophy, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ jsxs("span", { children: ["★ National Benchmark Spotlight • ", activeTopper.badge] })]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight",
							children: [
								activeTopper.name,
								":",
								" ",
								/* @__PURE__ */ jsxs("span", {
									className: "text-[#2e0854] underline decoration-[#5b40cf]/40 decoration-4 underline-offset-4",
									children: [
										activeTopper.rank,
										" in ",
										activeTopper.exam
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "aquafix-card-hover p-3 rounded-xl bg-purple-50/70 border border-purple-200/80 shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold text-purple-600 uppercase tracking-wider block",
										children: "Examination"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs sm:text-[13px] font-black text-slate-900 mt-0.5 block truncate",
										children: activeTopper.exam
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "aquafix-card-hover p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold text-amber-600 uppercase tracking-wider block",
										children: "All India Rank"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs sm:text-[13px] font-black text-amber-600 mt-0.5 block truncate",
										children: activeTopper.rank
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "aquafix-card-hover p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold text-emerald-600 uppercase tracking-wider block",
										children: "Score / %tile"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs sm:text-[13px] font-black text-slate-900 mt-0.5 block truncate",
										children: activeTopper.score
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "aquafix-card-hover p-3 rounded-xl bg-purple-50/70 border border-purple-200/80 shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold text-[#5b40cf] uppercase tracking-wider block",
										children: "Premier Campus"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs sm:text-[13px] font-black text-[#2e0854] mt-0.5 block truncate",
										children: activeTopper.college
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "aquafix-card-hover mt-4 p-4 rounded-2xl bg-white border border-purple-100 shadow-sm relative overflow-hidden",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-full overflow-hidden border-2 border-[#5b40cf] shrink-0 shadow-xs",
									children: /* @__PURE__ */ jsx("img", {
										src: activeTopper.image,
										alt: activeTopper.name,
										width: "40",
										height: "40",
										loading: "lazy",
										decoding: "async",
										className: "w-full h-full object-cover"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 flex-wrap",
										children: [/* @__PURE__ */ jsxs("h4", {
											className: "text-sm font-black text-slate-900",
											children: [activeTopper.name, "'s Success Journey"]
										}), /* @__PURE__ */ jsx("span", {
											className: "px-2 py-0.5 rounded-full bg-[#f7e8fc] border border-[#eed3f8] text-[#5b40cf] text-[10px] font-bold",
											children: activeTopper.batch
										})]
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed font-normal",
										children: [
											"\"",
											activeTopper.story,
											"\""
										]
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-3 pt-2.5 border-t border-purple-50 flex items-center gap-2 text-xs text-[#5b40cf] font-bold",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-500 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Classroom Verified Student • Supervised Mentorship" })]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3.5 p-3.5 rounded-2xl bg-gradient-to-r from-purple-50/80 via-[#faf7fe] to-pink-50/40 border border-purple-200/70 shadow-2xs",
							children: [/* @__PURE__ */ jsxs("h4", {
								className: "text-xs sm:text-sm font-bold text-[#2e0854] flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-amber-500 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "The PCP Sikar Success Ecosystem" })]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-600 mt-1 leading-relaxed",
								children: "Continuous 12-hour daily faculty doubt desks, integrated school curriculum, dedicated Super-50 batches, and residential hostel discipline convert student dedication into top national percentile ranks."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-4 mt-5 pt-3 border-t border-purple-100/80",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/category/jee-coachings",
								className: "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#3b1165] hover:to-[#6947d1] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 active:scale-98",
								children: [/* @__PURE__ */ jsx("span", { children: "Explore All Merit Lists" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-purple-200" })]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/90 shadow-2xs",
								children: [/* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-[#5b40cf] shrink-0" }), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold text-slate-800",
									children: "AIR 1 Verified in NEET • 720/720"
								})]
							})]
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { PcpResultsOrbitSection as default };
