import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Apple, ArrowRight, BarChart3, CheckCircle2, ExternalLink, GraduationCap, QrCode, Radio, ShieldCheck, Smartphone, Sparkles, Star, UserCheck, Video, Zap } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpAppEcosystem.jsx
function PcpAppEcosystem() {
	const [activeTab, setActiveTab] = useState(0);
	const [showQrModal, setShowQrModal] = useState(false);
	const [iosQrActive, setIosQrActive] = useState(false);
	const apps = [
		{
			id: "pcp-on-air",
			name: "PCP On Air",
			tagline: "Live Streaming Classes, DPP Video Solutions & Recorded Vault",
			audience: "For IIT-JEE & NEET-UG Aspirants",
			rating: "4.7",
			downloads: "10K+",
			badge: "Digital Learning Engine",
			icon: Radio,
			category: "Lectures & Mock CBT",
			playStoreUrl: "https://play.google.com/store/apps/details?id=com.tucmxt.krjete&hl=en_IN",
			appStoreUrl: null,
			playPackage: "com.tucmxt.krjete",
			description: "The official digital learning app of Prince Career Pioneer. Stream high-definition live lectures from seasoned medical & IITian faculties, replay classes with speed control, and solve daily DPPs with step-by-step video solutions.",
			conditions: [
				{
					label: "Video Quality",
					value: "1080p Adaptive Streaming"
				},
				{
					label: "Replay Speed",
					value: "1.0x to 2.0x Fast Track"
				},
				{
					label: "Offline Access",
					value: "Encrypted Download Vault"
				}
			],
			pills: [
				"Live Lectures",
				"DPP Video Solutions",
				"NCERT Audio Notes",
				"P-AITS Test Series",
				"Faculty Formula Sheets"
			],
			highlights: [
				"Direct streaming from smart interactive classrooms",
				"Chapter-wise DPP sets with video answer keys",
				"NCERT Line-by-Line Biology & Chemistry audio revision",
				"Instant peer chat & digital faculty question submissions"
			]
		},
		{
			id: "pcp-erp",
			name: "PCP Sikar ERP",
			tagline: "Biometric Attendance, Daily Marks, Homework & Fee Management",
			audience: "For Enrolled Students & Management",
			rating: "4.6",
			downloads: "25K+",
			badge: "Student & Academic ERP",
			icon: UserCheck,
			category: "Attendance & Analytics",
			playStoreUrl: "https://play.google.com/store/apps/details?id=com.princeerp&hl=en_IN",
			appStoreUrl: null,
			playPackage: "com.princeerp",
			description: "The administrative backbone for every enrolled PCPian. Log into your verified student profile to view punch-by-punch biometric attendance, weekly minor/major test scorecards with negative marking breakdown, and online fee receipts.",
			conditions: [
				{
					label: "Sync Speed",
					value: "Instant Push Alerts"
				},
				{
					label: "Security",
					value: "Bank-Grade SSL Encryption"
				},
				{
					label: "Scorecards",
					value: "Downloadable PDF Reports"
				}
			],
			pills: [
				"Biometric Punch-In",
				"Test Analytics",
				"Fee Receipts",
				"Batch Timetable",
				"Hostel Mess Menu"
			],
			highlights: [
				"Punch-by-punch campus biometric entry and exit logs",
				"Comprehensive question-wise accuracy & silly mistake graph",
				"Daily homework, assignment and faculty remarks tracker",
				"Online fee installment tracking with verified digital receipts"
			]
		},
		{
			id: "prince-eduhub",
			name: "Prince EduHub",
			tagline: "Unified Institutional Parent Portal — Available on Android & Apple iOS",
			audience: "For Parents & Institutional Oversight",
			rating: "4.6",
			downloads: "50K+",
			badge: "Dual Store (Google Play + Apple App Store)",
			icon: GraduationCap,
			category: "Parent & Campus App",
			playStoreUrl: "https://play.google.com/store/apps/details?id=com.princeeduhub&hl=en_IN",
			appStoreUrl: "https://apps.apple.com/in/app/prince-eduhub/id1581726526",
			playPackage: "com.princeeduhub",
			description: "The flagship institutional application connecting parents with Prince Education Hub across Sikar & Jaipur. Parents receive automated SMS on attendance, monitor hostel night check-ins, approve security gate passes, and check Prince Olympiad results.",
			conditions: [
				{
					label: "Platform Support",
					value: "iOS (iPhone/iPad) & Android"
				},
				{
					label: "Parent Alerts",
					value: "100% Automated SMS Delivery"
				},
				{
					label: "Campus Coverage",
					value: "Coaching, Hostels & Schools"
				}
			],
			pills: [
				"Apple App Store",
				"Google Play",
				"Parent SMS Alerts",
				"Hostel Gate Pass",
				"Olympiad Rank",
				"Direct Mentor Call"
			],
			highlights: [
				"Official Apple App Store listing for iPhone & iPad users",
				"Instant automated SMS to parents upon campus entry & exit",
				"Hostel leave permission & digital security gate pass system",
				"Prince Olympiad state-level scholarship rankings & scorecard"
			]
		}
	];
	const currentApp = apps[activeTab];
	const platformFeatures = [
		{
			icon: Video,
			title: "1080p Zero-Lag Lecture Streaming",
			desc: "Watch live classroom masterclasses or catch up anytime. Stream with adaptive bitrate so you never miss a lecture even on slower 4G networks."
		},
		{
			icon: ShieldCheck,
			title: "Live Biometric Punch-In System",
			desc: "Attendance isn't logged manually. Biometric sensors automatically trigger parent notifications the moment a student steps inside the campus."
		},
		{
			icon: BarChart3,
			title: "P-AITS All India CBT Engine",
			desc: "Simulate the exact NTA NEET & JEE Main computer screen layout. Detailed AI reports break down negative marking, accuracy, and speed."
		},
		{
			icon: Zap,
			title: "12-Hour Online & Offline Doubt Desks",
			desc: "Snap a photo of any tough physics problem or biology query. Get verified step-by-step solutions from permanent PCP senior faculty."
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -right-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[150px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[150px] pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-3 rounded-3xl bg-slate-50 border border-slate-200/90 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 shadow-sm mb-16 overflow-hidden",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "p-6 sm:p-8 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full w-fit mb-2",
										children: "Unified Digital Architecture"
									}),
									/* @__PURE__ */ jsxs("h3", {
										className: "text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug",
										children: [
											"One Brand — ",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[#3b0764]",
												children: "One Ecosystem"
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs sm:text-sm text-slate-600 mt-2",
										children: "Classroom, hostel desks, parent portal, and mobile apps synced in real-time."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-6 sm:p-8 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-3xl sm:text-4xl font-black text-[#2e1065] tracking-tight",
											children: "50,000+"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold text-emerald-600 uppercase",
											children: "Active Users"
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-base font-black text-slate-800 mt-1",
										children: "Learners & Parents on Mobile"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-600 mt-1",
										children: "Over 50K verified downloads across Google Play Store & Apple iOS App Store."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-6 sm:p-8 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-3xl sm:text-4xl font-black text-amber-500 tracking-tight",
											children: "4.6★"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold text-slate-500 uppercase",
											children: "Average Rating"
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-base font-black text-slate-800 mt-1",
										children: "100% Real-Time Biometric Delivery"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-600 mt-1",
										children: "Every lecture, daily attendance punch, and test marksheet delivered without delay."
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 flex flex-col justify-between space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#2e1065] text-xs font-black uppercase tracking-wider mb-3",
										children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-purple-700" }), /* @__PURE__ */ jsx("span", { children: "Official Mobile Application Suite" })]
									}),
									/* @__PURE__ */ jsxs("h2", {
										className: "text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight",
										children: [
											"Your Preparation. ",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[#3b0764]",
												children: "Your Terms."
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm sm:text-base text-slate-600 mt-2 leading-relaxed font-normal",
										children: "Whether revising in your hostel room, traveling home, or parents checking progress 500 km away — PCP's certified mobile suite gives you 24/7 uninterrupted academic power."
									})
								] }),
								/* @__PURE__ */ jsx("div", {
									className: "p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 flex flex-wrap sm:flex-nowrap gap-1",
									children: apps.map((app, idx) => {
										const Icon = app.icon;
										const isActive = activeTab === idx;
										return /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => {
												setActiveTab(idx);
												setIosQrActive(false);
											},
											className: `flex-1 py-3 px-3 rounded-xl text-left transition-all cursor-pointer flex items-center gap-2.5 ${isActive ? "bg-white text-slate-900 shadow-md border border-slate-200 font-black" : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-bold"}`,
											children: [/* @__PURE__ */ jsx("div", {
												className: `w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-[#ffc107] text-black shadow-xs" : "bg-slate-200 text-slate-600"}`,
												children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "truncate",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-xs leading-none",
													children: app.name
												}), /* @__PURE__ */ jsx("div", {
													className: "text-[10px] text-slate-500 font-medium truncate mt-0.5",
													children: app.category
												})]
											})]
										}, app.id);
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-start justify-between gap-3",
											children: [/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 mb-1",
													children: [/* @__PURE__ */ jsx("span", {
														className: "px-2.5 py-0.5 rounded-full bg-purple-100 text-[#2e1065] text-[10px] font-black uppercase tracking-wider",
														children: currentApp.badge
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[11px] font-bold text-amber-700 flex items-center gap-1",
														children: [/* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-[#ffc107] text-[#ffc107]" }), /* @__PURE__ */ jsxs("span", { children: [
															currentApp.rating,
															" (",
															currentApp.downloads,
															" Downloads)"
														] })]
													})]
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "text-2xl font-black text-slate-900 tracking-tight",
													children: currentApp.name
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-xs sm:text-sm font-semibold text-purple-900 mt-0.5",
													children: currentApp.tagline
												})
											] }), /* @__PURE__ */ jsxs("div", {
												className: "text-right hidden sm:block",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-[10px] uppercase font-bold text-slate-400 block",
													children: "Package ID"
												}), /* @__PURE__ */ jsx("code", {
													className: "text-xs font-mono font-bold text-slate-700 bg-white px-2 py-1 rounded border border-slate-200",
													children: currentApp.playPackage
												})]
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal",
											children: currentApp.description
										}),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-2",
											children: "Platform Specifications & SLAs"
										}), /* @__PURE__ */ jsx("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
											children: currentApp.conditions.map((cond, cIdx) => /* @__PURE__ */ jsxs("div", {
												className: "p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-[10px] uppercase font-bold text-slate-400",
													children: cond.label
												}), /* @__PURE__ */ jsx("div", {
													className: "text-xs font-black text-slate-800 mt-0.5",
													children: cond.value
												})]
											}, cIdx))
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-2",
											children: "Included In This App"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex flex-wrap gap-1.5",
											children: currentApp.pills.map((pill, pIdx) => /* @__PURE__ */ jsx("span", {
												className: "px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200 shadow-2xs hover:border-purple-300 transition-colors",
												children: pill
											}, pIdx))
										})] }),
										/* @__PURE__ */ jsx("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-200",
											children: currentApp.highlights.map((h, hIdx) => /* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-2 text-xs font-semibold text-slate-700",
												children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: h })]
											}, hIdx))
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3",
											children: [
												/* @__PURE__ */ jsxs("a", {
													href: currentApp.playStoreUrl,
													target: "_blank",
													rel: "noreferrer",
													className: "px-5 py-3 rounded-2xl bg-slate-900 hover:bg-black text-white text-xs font-black inline-flex items-center gap-3 shadow-md hover:scale-105 transition-all cursor-pointer",
													children: [/* @__PURE__ */ jsx("svg", {
														className: "w-5 h-5 fill-current text-white shrink-0",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ jsx("path", { d: "M3.609 1.814L13.792 12 3.61 22.186a2.316 2.316 0 0 1-.61-.954V2.768c.174-.37.388-.696.609-.954zm11.24 11.24l2.585 2.585-11.83 6.83 9.245-9.415zm0-2.108L5.604 1.531l11.83 6.83-2.585 2.585zm1.488 1.054l3.87 2.235c.78.45.78 1.187 0 1.637l-3.87 2.235-2.228-2.228 2.228-2.879z" })
													}), /* @__PURE__ */ jsxs("div", {
														className: "text-left",
														children: [/* @__PURE__ */ jsx("div", {
															className: "text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none",
															children: "GET IT ON"
														}), /* @__PURE__ */ jsx("div", {
															className: "text-xs font-black text-white leading-tight",
															children: "Google Play"
														})]
													})]
												}),
												currentApp.appStoreUrl ? /* @__PURE__ */ jsxs("a", {
													href: currentApp.appStoreUrl,
													target: "_blank",
													rel: "noreferrer",
													className: "px-5 py-3 rounded-2xl bg-[#3b0764] hover:bg-[#581c87] text-white text-xs font-black inline-flex items-center gap-3 shadow-md hover:scale-105 transition-all cursor-pointer border border-purple-400/30",
													children: [/* @__PURE__ */ jsx(Apple, { className: "w-5 h-5 text-white shrink-0" }), /* @__PURE__ */ jsxs("div", {
														className: "text-left",
														children: [/* @__PURE__ */ jsx("div", {
															className: "text-[9px] uppercase tracking-wider text-purple-200 font-semibold leading-none",
															children: "Download on the"
														}), /* @__PURE__ */ jsx("div", {
															className: "text-xs font-black text-white leading-tight",
															children: "App Store"
														})]
													})]
												}) : /* @__PURE__ */ jsxs("div", {
													className: "px-3.5 py-3 rounded-2xl bg-slate-200/70 text-slate-500 text-xs font-bold inline-flex items-center gap-2 cursor-default",
													children: [/* @__PURE__ */ jsx(Smartphone, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ jsx("span", { children: "Android Certified App" })]
												}),
												/* @__PURE__ */ jsxs("button", {
													type: "button",
													onClick: () => setShowQrModal(!showQrModal),
													className: "px-4 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs text-xs font-bold inline-flex items-center gap-2 cursor-pointer transition-colors",
													children: [/* @__PURE__ */ jsx(QrCode, { className: "w-4 h-4 text-[#2e1065]" }), /* @__PURE__ */ jsx("span", { children: showQrModal ? "Hide QR Code" : "Scan to Install" })]
												})
											]
										}),
										showQrModal && /* @__PURE__ */ jsxs("div", {
											className: "p-4 rounded-2xl bg-white border border-purple-200 shadow-lg flex flex-col sm:flex-row items-center gap-4 animate-fade-in",
											children: [/* @__PURE__ */ jsx("img", {
												src: currentApp.appStoreUrl && iosQrActive ? `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(currentApp.appStoreUrl)}` : `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(currentApp.playStoreUrl)}`,
												alt: `QR Code for ${currentApp.name}`,
												className: "w-28 h-28 rounded-xl border border-slate-200 p-1 bg-white shadow-xs"
											}), /* @__PURE__ */ jsxs("div", {
												className: "space-y-2 text-center sm:text-left",
												children: [
													/* @__PURE__ */ jsx("span", {
														className: "text-xs font-black text-slate-900 block",
														children: "Point Your Phone Camera to Install Instantly"
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-[11px] text-slate-600",
														children: "Opens directly in Google Play Store or Apple App Store on your mobile device."
													}),
													currentApp.appStoreUrl && /* @__PURE__ */ jsxs("div", {
														className: "flex items-center justify-center sm:justify-start gap-2 pt-1",
														children: [/* @__PURE__ */ jsx("button", {
															type: "button",
															onClick: () => setIosQrActive(false),
															className: `px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${!iosQrActive ? "bg-[#ffc107] text-black font-black" : "bg-slate-100 text-slate-700"}`,
															children: "Google Play QR"
														}), /* @__PURE__ */ jsx("button", {
															type: "button",
															onClick: () => setIosQrActive(true),
															className: `px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${iosQrActive ? "bg-[#2e1065] text-white font-black" : "bg-slate-100 text-slate-700"}`,
															children: "Apple iOS QR"
														})]
													})
												]
											})]
										})
									]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-5 flex flex-col items-center justify-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial from-purple-200/50 via-purple-100/20 to-transparent rounded-full blur-2xl pointer-events-none" }),
									/* @__PURE__ */ jsx("div", {
										className: "skills-visual-wrap relative w-full h-full flex items-center justify-center",
										children: /* @__PURE__ */ jsx("video", {
											className: "media-video skills-visual w-full h-full object-contain rounded-full drop-shadow-2xl opacity-90 transition-opacity duration-300",
											src: "/uploads/pcp/skills-visual.mp4",
											autoPlay: true,
											muted: true,
											playsInline: true,
											loop: true,
											"aria-label": "PCP Digital Ecosystem Interactive Visual"
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#1b0633] via-[#3b0764] to-[#240242] text-white shadow-2xl flex flex-col items-center justify-center border-4 border-[#ffc107] p-2 hover:scale-105 transition-transform cursor-pointer",
										onClick: () => setActiveTab(0),
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "w-7 h-7 rounded-full bg-[#ffc107] text-black flex items-center justify-center mb-0.5 shadow-xs",
												children: /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-black" })
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-lg sm:text-xl font-black tracking-tight text-white leading-none",
												children: "PCP"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[8px] font-black uppercase text-[#ffc107] tracking-widest mt-0.5",
												children: "ECOSYSTEM"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "absolute -bottom-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider shadow",
												children: "LIVE"
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										onClick: () => setActiveTab(0),
										className: `absolute top-2 right-0 sm:right-2 z-30 p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex items-center gap-2.5 hover:scale-105 ${activeTab === 0 ? "border-2 border-[#ffc107] ring-4 ring-amber-100 shadow-amber-200" : "border-slate-200/90"}`,
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-8 h-8 rounded-xl bg-purple-100 text-[#2e1065] flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(Radio, { className: "w-4 h-4 text-purple-700" })
										}), /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("div", {
												className: "text-xs font-black text-slate-900 leading-none",
												children: "PCP On Air"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-[10px] font-bold text-purple-700 mt-0.5",
												children: "Live Classes"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-[9px] text-slate-400 font-semibold",
												children: "Google Play"
											})
										] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										onClick: () => setActiveTab(1),
										className: `absolute bottom-4 left-0 sm:left-2 z-30 p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex items-center gap-2.5 hover:scale-105 ${activeTab === 1 ? "border-2 border-[#ffc107] ring-4 ring-amber-100 shadow-amber-200" : "border-slate-200/90"}`,
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-amber-800" })
										}), /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("div", {
												className: "text-xs font-black text-slate-900 leading-none",
												children: "PCP Sikar ERP"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-[10px] font-bold text-amber-700 mt-0.5",
												children: "Biometrics"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-[9px] text-slate-400 font-semibold",
												children: "Google Play"
											})
										] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										onClick: () => setActiveTab(2),
										className: `absolute bottom-2 right-0 sm:right-2 z-30 p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex items-center gap-2.5 hover:scale-105 ${activeTab === 2 ? "border-2 border-[#ffc107] ring-4 ring-amber-100 shadow-amber-200" : "border-slate-200/90"}`,
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2e1065] to-[#4c1d95] text-white flex items-center justify-center shrink-0 shadow-xs",
											children: /* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4 text-white" })
										}), /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("div", {
												className: "text-xs font-black text-slate-900 leading-none",
												children: "Prince EduHub"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-[10px] font-bold text-purple-700 mt-0.5",
												children: "Parent Portal"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-[9px] text-emerald-600 font-bold",
												children: "Android + Apple iOS"
											})
										] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute top-4 left-0 sm:left-2 z-20 p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-md flex items-center gap-2 pointer-events-none",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ jsx(Apple, { className: "w-4 h-4 text-slate-900" }),
												/* @__PURE__ */ jsx("div", { className: "w-0.5 h-3 bg-slate-200" }),
												/* @__PURE__ */ jsx("svg", {
													className: "w-3.5 h-3.5 fill-current text-slate-800",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ jsx("path", { d: "M3.609 1.814L13.792 12 3.61 22.186a2.316 2.316 0 0 1-.61-.954V2.768c.174-.37.388-.696.609-.954zm11.24 11.24l2.585 2.585-11.83 6.83 9.245-9.415zm0-2.108L5.604 1.531l11.83 6.83-2.585 2.585zm1.488 1.054l3.87 2.235c.78.45.78 1.187 0 1.637l-3.87 2.235-2.228-2.228 2.228-2.879z" })
												})
											]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[9px] font-black uppercase text-slate-700",
											children: "Official Mobile Apps"
										})]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-4 max-w-sm w-full shadow-2xs",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("img", {
										src: `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(currentApp.playStoreUrl)}`,
										alt: "QR preview",
										className: "w-12 h-12 rounded-lg border border-slate-200 p-0.5 bg-white shrink-0"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs font-black text-slate-900",
										children: currentApp.name
									}), /* @__PURE__ */ jsx("div", {
										className: "text-[10px] text-slate-500",
										children: "Scan to install directly"
									})] })]
								}), /* @__PURE__ */ jsxs("a", {
									href: currentApp.playStoreUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-bold inline-flex items-center gap-1 shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", { children: "Install" }), /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 text-slate-500" })]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full inline-block mb-2",
							children: "Platform Capabilities"
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-2xl sm:text-3xl font-black text-slate-900 tracking-tight",
							children: "What Our Digital Learning Platform Has to Offer"
						})] }), /* @__PURE__ */ jsx("p", {
							className: "text-xs sm:text-sm text-slate-500 max-w-md",
							children: "Engineered for high performance, zero downtime, and complete parental peace of mind."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: platformFeatures.map((feat, fIdx) => {
							const FIcon = feat.icon;
							return /* @__PURE__ */ jsxs("div", {
								className: "p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-purple-300 hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("div", {
										className: "w-12 h-12 rounded-2xl bg-[#ffc107] text-black flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition-transform",
										children: /* @__PURE__ */ jsx(FIcon, { className: "w-6 h-6 text-black" })
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-base font-black text-slate-900 tracking-tight mb-2",
										children: feat.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-600 leading-relaxed",
										children: feat.desc
									})
								] }), /* @__PURE__ */ jsxs("div", {
									className: "pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-[#2e1065]",
									children: [/* @__PURE__ */ jsx("span", { children: "Included in All Batches" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })]
								})]
							}, fIdx);
						})
					})] })
				]
			})
		]
	});
}
//#endregion
export { PcpAppEcosystem as default };
