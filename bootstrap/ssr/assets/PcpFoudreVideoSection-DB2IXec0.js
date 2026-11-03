import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpFoudreVideoSection.jsx
function PcpFoudreVideoSection() {
	const stories = [
		{
			id: 1,
			title: "Live Classroom Lectures & Faculty Guidance",
			category: "Academic Excellence",
			video: "/uploads/pcp/classroom-lecture.mp4",
			poster: "/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg",
			thumbnail: "/uploads/pcp/theme_toppers/devesh_joshi_air1.jpg",
			tag: "AIR 1 NEET-UG Mentors",
			highlight: "Interactive daily lectures by experienced Kota and Sikar HODs breaking down complex concepts step-by-step."
		},
		{
			id: 2,
			title: "12-Hour Continuous Faculty Doubt Desks",
			category: "Personal Mentorship",
			video: "/uploads/pcp/classroom-study.mp4",
			poster: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			thumbnail: "/uploads/pcp/theme_toppers/vivek_gupta_air225.jpg",
			tag: "AIR 225 JEE Adv Mentors",
			highlight: "One-on-one personal concept clearance directly with senior faculty counters every morning and evening."
		},
		{
			id: 3,
			title: "Focused Night Library & Daily Problem Solving",
			category: "Self-Study Desks",
			video: "/uploads/pcp/study-bg-small.mp4",
			poster: "/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg",
			thumbnail: "/uploads/pcp/theme_toppers/saurabh_agarwal_air87.jpg",
			tag: "AIR 87 AIIMS Delhi Batch",
			highlight: "Supervised study sessions where 50+ Daily Practice Problems (DPPs) are solved with faculty support."
		},
		{
			id: 4,
			title: "Campus Energy & Residential Life",
			category: "Residential Wing",
			video: "/uploads/pcp/skills-visual.mp4",
			poster: "/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg",
			thumbnail: "/uploads/pcp/theme_toppers/navdeep_mann_air469.jpg",
			tag: "AIR 469 First Attempt",
			highlight: "Holistic student development with round-the-clock hostel mentorship, sports, and peer motivation."
		}
	];
	const [activeStoryIdx, setActiveStoryIdx] = useState(0);
	const [isMuted, setIsMuted] = useState(true);
	const [isPlaying, setIsPlaying] = useState(true);
	const videoRef = useRef(null);
	const activeStory = stories[activeStoryIdx];
	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};
	const togglePlay = () => {
		if (videoRef.current) if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};
	const selectStory = (idx) => {
		setActiveStoryIdx(idx);
		setIsPlaying(true);
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.play().catch(() => {});
		}
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "foudre-ecosystem",
		className: "relative scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-[#1f0a38] text-white overflow-hidden font-sans border-b border-purple-900/60 selection:bg-[#ffc1e3] selection:text-[#1f0a38]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 pointer-events-none overflow-hidden",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-10 w-[700px] h-[550px] bg-purple-600/15 rounded-full blur-[160px]" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 right-10 w-[650px] h-[550px] bg-pink-500/10 rounded-full blur-[170px]" }),
				/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#2e0854]/40 rounded-full blur-[150px]" })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-6 flex flex-col items-start justify-center text-left",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative mb-3 sm:mb-4 inline-block",
							children: [/* @__PURE__ */ jsx("div", {
								className: "inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#ffd6e8] text-[#1f0a38] font-bold text-base sm:text-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform cursor-default",
								children: /* @__PURE__ */ jsx("span", {
									className: "tracking-widest",
									children: "📱 💖 😎"
								})
							}), /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 left-6 w-3 h-3 bg-[#ffd6e8] transform rotate-45" })]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] select-none",
							children: [
								"NOUS ",
								/* @__PURE__ */ jsx("br", {}),
								"LES RENDONS, ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-[#ffd6e8]",
									children: "TOPPERS"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm sm:text-base text-purple-200/80 max-w-lg leading-relaxed font-normal",
							children: "We don’t just teach syllabi; we sculpt discipline, habits, and mindset. Watch authentic glimpses of everyday life, faculty doubt desks, and peer study culture across PCP Sikar campuses."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex items-center gap-2.5 sm:gap-3 flex-wrap",
							children: [stories.map((story, idx) => {
								return /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => selectStory(idx),
									className: `relative rounded-full transition-all duration-300 p-0.5 cursor-pointer ${activeStoryIdx === idx ? "ring-3 ring-[#ffd6e8] scale-110 shadow-lg" : "opacity-65 hover:opacity-100 hover:scale-105"}`,
									title: story.title,
									"aria-label": `Watch ${story.title}`,
									children: /* @__PURE__ */ jsx("div", {
										className: "w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/80 bg-slate-800",
										children: /* @__PURE__ */ jsx("img", {
											src: story.thumbnail,
											alt: story.title,
											className: "w-full h-full object-cover"
										})
									})
								}, story.id);
							}), /* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e84393] text-white font-black text-xs sm:text-[13px] flex items-center justify-center border-2 border-white/80 shadow-md",
								children: "+1,315"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-lg",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
										/* @__PURE__ */ jsx("span", {
											className: "text-xs font-black uppercase tracking-wider text-[#ffd6e8]",
											children: activeStory.category
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-white/40",
											children: "•"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-xs text-purple-200 font-bold",
											children: activeStory.tag
										})
									]
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "text-base sm:text-lg font-bold text-white mt-1",
									children: activeStory.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs sm:text-sm text-purple-200/70 mt-1 leading-relaxed",
									children: activeStory.highlight
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 pt-4",
							children: /* @__PURE__ */ jsxs("a", {
								href: "#results-orbit",
								className: "inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-white/80 hover:text-white underline underline-offset-8 decoration-2 decoration-[#ffd6e8] transition-colors",
								children: [/* @__PURE__ */ jsx("span", { children: "CAMPUS LIFE & PROJETS" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-[#ffd6e8]" })]
							})
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-6 flex items-center justify-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative w-full max-w-[420px] sm:max-w-[460px] h-[520px] sm:h-[580px] lg:h-[620px] rounded-[32px] sm:rounded-[40px] overflow-hidden bg-black border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "absolute top-5 left-5 z-30 pointer-events-none",
								children: /* @__PURE__ */ jsxs("div", {
									className: "relative px-3.5 py-2 rounded-2xl bg-[#ffd6e8] text-[#1f0a38] font-black text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform",
									children: [/* @__PURE__ */ jsx("span", { children: "⚡" }), /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-[#ffd6e8] transform rotate-45" })]
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute top-5 right-5 z-30 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: toggleMute,
									className: "w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md",
									"aria-label": isMuted ? "Unmute Video" : "Mute Video",
									children: isMuted ? /* @__PURE__ */ jsx(VolumeX, { className: "w-4 h-4 text-white/80" }) : /* @__PURE__ */ jsx(Volume2, { className: "w-4 h-4 text-[#ffd6e8]" })
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: togglePlay,
									className: "w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md",
									"aria-label": isPlaying ? "Pause Video" : "Play Video",
									children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: "w-4 h-4 text-white/80" }) : /* @__PURE__ */ jsx(Play, { className: "w-4 h-4 text-[#ffd6e8]" })
								})]
							}),
							/* @__PURE__ */ jsx("video", {
								ref: videoRef,
								src: activeStory.video,
								poster: activeStory.poster,
								autoPlay: true,
								loop: true,
								muted: isMuted,
								playsInline: true,
								className: "w-full h-full object-cover transition-opacity duration-500"
							}, activeStory.video),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 bg-gradient-to-t from-black via-black/70 to-transparent z-20 flex flex-col justify-end",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-black uppercase tracking-wider text-[#ffd6e8]",
											children: activeStory.category
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-lg sm:text-xl font-black text-white mt-0.5 tracking-tight drop-shadow-md",
										children: activeStory.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-white/70 mt-1 line-clamp-2 font-normal",
										children: activeStory.highlight
									})
								]
							})
						]
					})
				})]
			})
		})]
	});
}
//#endregion
export { PcpFoudreVideoSection as default };
