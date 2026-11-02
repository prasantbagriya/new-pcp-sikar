import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Building2, CheckCircle2, ChevronRight, Compass, ExternalLink, GraduationCap, Layers, Map, MapPin, Navigation, Phone, Satellite } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpCampusMapSection.jsx
var PCP_CENTERS = [
	{
		id: "palwas",
		name: "PCP Sikar — Palwas Road Headquarters",
		shortName: "Palwas Road HQ",
		badge: "Main Residential Mega Campus",
		type: "sikar",
		city: "Sikar",
		tagline: "100+ Acre Flagship Residential Coaching & Educational Hub",
		address: "Palwas Road, Sikar, Rajasthan — 332001",
		landmark: "Palwas Road Educational Corridor",
		helpline: "+91 9610-89-2222",
		alternatePhone: "+91 9610-61-2222",
		email: "pcpsikar@gmail.com",
		hours: "Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM",
		lat: 27.60838,
		lng: 75.12351,
		zoom: 15,
		embedQuery: "PCP Sikar Palwas Road",
		image: "/uploads/pcp_campus_building.png",
		googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PCP+Palwas+Road+Sikar",
		facilities: [
			"100+ Acre Residential Hub",
			"Separate AC Hostels (Boys & Girls)",
			"24x7 Central AC Library & Reading Rooms",
			"Olympic-standard Sports Complex",
			"Resident Faculty & Daily Doubt Desks"
		]
	},
	{
		id: "piprali",
		name: "PCP Sikar — Piprali Road Campus",
		shortName: "Piprali Road Branch",
		badge: "City Classroom Hub",
		type: "sikar",
		city: "Sikar",
		tagline: "Day Boarding & Class 6–10 Pre-Foundation Coaching Hub",
		address: "Elenza Heights, New Janta Colony, Piprali Road, Sikar, Rajasthan — 332001",
		landmark: "Opposite Piprali Road Coaching Hub",
		helpline: "+91 9610-53-2222",
		alternatePhone: "+91 9610-83-2222",
		email: "pcppalwasroad@gmail.com",
		hours: "Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM",
		lat: 27.62584,
		lng: 75.16112,
		zoom: 16,
		embedQuery: "PCP Piprali Road Sikar",
		image: "/uploads/pcp_banner.png",
		googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PCP+Piprali+Road+Sikar",
		facilities: [
			"Digital Interactive Classrooms",
			"Pre-Foundation (Class 6-10) Wing",
			"Daily Practice Problem (DPP) Counters",
			"All-India Test Assessment Lab",
			"Parent Counseling & Admission Desk"
		]
	},
	{
		id: "jaipur",
		name: "PCP Jaipur — Gopalpura Bypass Center",
		shortName: "Jaipur Capital Center",
		badge: "Capital City Center",
		type: "jaipur",
		city: "Jaipur",
		tagline: "Premier Admission, Counseling & Classroom Center in Jaipur",
		address: "Balaji Tower, Near Ridhi Sidhi Circle, Gopalpura Bypass, Jaipur, Rajasthan — 302018",
		landmark: "Gopalpura Bypass Educational Hub",
		helpline: "+91 9610-89-2222",
		alternatePhone: "+91 9610-61-2222",
		email: "pcpjaipur@gmail.com",
		hours: "Mon – Sat: 8:30 AM – 7:30 PM | Sun: 9:00 AM – 4:00 PM",
		lat: 26.85295,
		lng: 75.77602,
		zoom: 16,
		embedQuery: "PCP Jaipur Gopalpura Bypass",
		image: "/uploads/pcp/PCPjaipur.jpg",
		googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PCP+Gopalpura+Bypass+Jaipur",
		facilities: [
			"Senior NEET & JEE Career Counselors",
			"Classroom Batches for Droppers & Foundation",
			"Direct Spot Admissions & Scholarship Desk",
			"P-SAT Registration & Verification Hub"
		]
	},
	{
		id: "academy",
		name: "Prince Academy & International Campus",
		shortName: "Prince Academy Hub",
		badge: "Integrated Schooling",
		type: "sikar",
		city: "Sikar",
		tagline: "CBSE & RBSE Day-Boarding + Residential Integrated Schooling",
		address: "Palwas Road, Sikar, Rajasthan — 332001",
		landmark: "Prince Eduhub Main Campus",
		helpline: "+91 9610-89-2222",
		alternatePhone: "+91 9610-61-2222",
		email: "info@princeeduhub.com",
		hours: "Mon – Sat: 8:00 AM – 6:00 PM",
		lat: 27.61012,
		lng: 75.1218,
		zoom: 16,
		embedQuery: "Prince Academy Palwas Road Sikar",
		image: "/uploads/aboutus.webp",
		googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Prince+Academy+Palwas+Road+Sikar",
		facilities: [
			"CBSE / RBSE Integrated Curriculum",
			"Advanced Science, AI & Robotics Labs",
			"Indoor Swimming Pool & Horse Riding",
			"Disciplined Hostel Environment"
		]
	}
];
function PcpCampusMapSection() {
	const [selectedCenter, setSelectedCenter] = useState(PCP_CENTERS[0]);
	const [activeFilter, setActiveFilter] = useState("all");
	const [mapLayer, setMapLayer] = useState("m");
	const [isMapSwitching, setIsMapSwitching] = useState(false);
	const filteredCenters = PCP_CENTERS.filter((c) => {
		if (activeFilter === "all") return true;
		return c.type === activeFilter;
	});
	const handleSelectCenter = (center) => {
		if (center.id === selectedCenter.id) return;
		setIsMapSwitching(true);
		setSelectedCenter(center);
		setTimeout(() => {
			setIsMapSwitching(false);
		}, 350);
	};
	const handleLayerChange = (layer) => {
		setIsMapSwitching(true);
		setMapLayer(layer);
		setTimeout(() => {
			setIsMapSwitching(false);
		}, 300);
	};
	const mapIframeUrl = `https://maps.google.com/maps?q=${encodeURIComponent(selectedCenter.embedQuery)}&t=${mapLayer}&z=${selectedCenter.zoom}&ie=UTF8&iwloc=&output=embed`;
	return /* @__PURE__ */ jsxs("section", {
		id: "campus-locations",
		className: "py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white via-[#faf7fe] to-white relative overflow-hidden border-t border-purple-100 select-none scroll-mt-20 font-sans",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-1/4 -left-40 w-80 h-80 bg-purple-100/50 rounded-full blur-[100px] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-1/4 -right-40 w-80 h-80 bg-[#5b40cf]/10 rounded-full blur-[120px] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-[1520px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-3xl mx-auto mb-6 sm:mb-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6edfd] border border-[#e6d0fa] text-[#2e0854] text-[11px] font-black uppercase tracking-wider mb-2 shadow-2xs",
								children: [/* @__PURE__ */ jsx(Compass, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Interactive Campus Navigator & Google Maps" })]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug",
								children: "Visit PCP Campuses & Coaching Hubs Across Rajasthan"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto",
								children: "Locate our 100+ acre residential headquarters in Sikar, city classroom hubs, and Jaipur center. Select any campus to pinpoint on the interactive map, view campus facilities, and get direct GPS navigation."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center justify-center gap-1.5 mt-3.5",
								children: [
									/* @__PURE__ */ jsxs("button", {
										onClick: () => setActiveFilter("all"),
										className: `px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${activeFilter === "all" ? "bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white shadow-sm scale-105" : "bg-white hover:bg-purple-50 text-slate-700 border border-purple-200/80"}`,
										children: [
											"All Centers (",
											PCP_CENTERS.length,
											")"
										]
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => setActiveFilter("sikar"),
										className: `px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${activeFilter === "sikar" ? "bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white shadow-sm scale-105" : "bg-white hover:bg-purple-50 text-slate-700 border border-purple-200/80"}`,
										children: "Sikar Campuses (3)"
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => setActiveFilter("jaipur"),
										className: `px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${activeFilter === "jaipur" ? "bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white shadow-sm scale-105" : "bg-white hover:bg-purple-50 text-slate-700 border border-purple-200/80"}`,
										children: "Jaipur Center (1)"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-5 space-y-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between pb-0.5 px-1",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "text-[11px] font-black uppercase tracking-wider text-slate-500",
										children: [
											"PCP Learning Centers (",
											filteredCenters.length,
											")"
										]
									}), /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 text-[11px] text-[#5b40cf] font-bold",
										children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }), "All Campuses Open Today"]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-2.5 max-h-[460px] overflow-y-auto pr-1 select-text scrollbar-thin scrollbar-thumb-purple-200",
									children: filteredCenters.map((center) => {
										const isSelected = selectedCenter.id === center.id;
										return /* @__PURE__ */ jsxs("div", {
											onClick: () => handleSelectCenter(center),
											className: `p-3 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${isSelected ? "bg-white border-[#5b40cf] shadow-sm ring-1 ring-[#5b40cf]/20" : "bg-white/90 hover:bg-white border-purple-100 hover:border-purple-300 shadow-2xs hover:shadow-xs"}`,
											children: [
												isSelected && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#2e0854] via-[#5b40cf] to-[#7c52c9]" }),
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-start justify-between gap-2 mb-1.5",
													children: [/* @__PURE__ */ jsxs("span", {
														className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${isSelected ? "bg-[#f7e8fc] text-[#2e0854] border-[#eed3f8]" : "bg-slate-100 text-slate-700 border-slate-200"}`,
														children: [/* @__PURE__ */ jsx(Building2, { className: "w-2.5 h-2.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: center.badge })]
													}), isSelected ? /* @__PURE__ */ jsxs("span", {
														className: "inline-flex items-center gap-1 text-[10px] font-bold text-[#5b40cf] bg-purple-50 px-1.5 py-0.5 rounded-full border border-purple-200",
														children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-2.5 h-2.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "Pinned on Map" })]
													}) : /* @__PURE__ */ jsxs("span", {
														className: "text-[10px] font-semibold text-slate-400 group-hover:text-[#5b40cf] transition-colors flex items-center gap-0.5",
														children: [/* @__PURE__ */ jsx("span", { children: "View Pin" }), /* @__PURE__ */ jsx(ChevronRight, { className: "w-2.5 h-2.5" })]
													})]
												}),
												/* @__PURE__ */ jsx("h3", {
													className: `text-sm sm:text-[14.5px] font-bold tracking-tight mb-1 transition-colors ${isSelected ? "text-[#2e0854]" : "text-slate-900 group-hover:text-[#5b40cf]"}`,
													children: center.name
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "text-[11px] text-slate-600 mb-2 flex items-start gap-1 font-normal leading-relaxed",
													children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3 text-[#5b40cf] shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: center.address })]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "flex flex-wrap gap-1 mb-2.5",
													children: center.facilities.slice(0, 3).map((f, idx) => /* @__PURE__ */ jsxs("span", {
														className: "px-1.5 py-0.5 text-[10px] font-medium bg-[#faf7fe] text-slate-700 rounded border border-purple-100",
														children: ["✓ ", f]
													}, idx))
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "pt-2 border-t border-purple-50 flex items-center justify-between gap-2 text-[11px]",
													children: [/* @__PURE__ */ jsx("div", {
														className: "flex items-center gap-1.5",
														children: /* @__PURE__ */ jsxs("a", {
															href: `tel:${center.helpline.replace(/[^0-9]/g, "")}`,
															onClick: (e) => e.stopPropagation(),
															className: "inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#faf7fe] hover:bg-purple-100/80 text-[#2e0854] font-bold transition-colors",
															children: [/* @__PURE__ */ jsx(Phone, { className: "w-2.5 h-2.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: center.helpline })]
														})
													}), /* @__PURE__ */ jsxs("a", {
														href: center.googleMapsUrl,
														target: "_blank",
														rel: "noopener noreferrer",
														onClick: (e) => e.stopPropagation(),
														className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-[11px] shadow-2xs hover:shadow-xs transition-all",
														children: [
															/* @__PURE__ */ jsx(Navigation, { className: "w-2.5 h-2.5" }),
															/* @__PURE__ */ jsx("span", { children: "Directions" }),
															/* @__PURE__ */ jsx(ExternalLink, { className: "w-2.5 h-2.5 opacity-80" })
														]
													})]
												})
											]
										}, center.id);
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "p-3 rounded-xl bg-gradient-to-r from-purple-50 via-[#fcf9fe] to-purple-50 border border-purple-200/80 flex items-center justify-between gap-2.5 text-xs",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-7 h-7 rounded-full bg-white shadow-2xs flex items-center justify-center shrink-0 border border-purple-100",
											children: /* @__PURE__ */ jsx(GraduationCap, { className: "w-3.5 h-3.5 text-[#5b40cf]" })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "font-bold text-slate-900 block text-[11px]",
											children: "Planning a Campus Tour?"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-slate-500 text-[10px]",
											children: "Free guided campus & hostel tour with counselors."
										})] })]
									}), /* @__PURE__ */ jsx("a", {
										href: "/contact",
										className: "px-2.5 py-1 rounded-full bg-white hover:bg-purple-50 text-[#2e0854] font-black text-[11px] border border-purple-200 shadow-2xs transition-all shrink-0",
										children: "Book Visit"
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-7",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative rounded-2xl overflow-hidden bg-slate-100 border border-purple-200 shadow-sm h-[380px] sm:h-[420px] lg:h-[460px] flex flex-col group",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "absolute top-3.5 inset-x-3.5 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "pointer-events-auto bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-purple-200 shadow-sm flex items-center gap-2 text-xs",
											children: [
												/* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-[#5b40cf] animate-pulse" }),
												/* @__PURE__ */ jsx("span", {
													className: "font-black text-[#2e0854]",
													children: selectedCenter.shortName
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-slate-300",
													children: "|"
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "text-slate-600 text-[11px] hidden sm:inline font-medium",
													children: [selectedCenter.city, ", Rajasthan"]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "pointer-events-auto flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl border border-purple-200 shadow-sm",
											children: [
												/* @__PURE__ */ jsxs("button", {
													onClick: () => handleLayerChange("m"),
													className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${mapLayer === "m" ? "bg-[#2e0854] text-white shadow-2xs" : "text-slate-600 hover:text-slate-900 hover:bg-purple-50"}`,
													children: [/* @__PURE__ */ jsx(Map, { className: "w-3 h-3" }), /* @__PURE__ */ jsx("span", { children: "Map" })]
												}),
												/* @__PURE__ */ jsxs("button", {
													onClick: () => handleLayerChange("k"),
													className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${mapLayer === "k" ? "bg-[#2e0854] text-white shadow-2xs" : "text-slate-600 hover:text-slate-900 hover:bg-purple-50"}`,
													children: [/* @__PURE__ */ jsx(Satellite, { className: "w-3 h-3" }), /* @__PURE__ */ jsx("span", { children: "Satellite" })]
												}),
												/* @__PURE__ */ jsxs("button", {
													onClick: () => handleLayerChange("h"),
													className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${mapLayer === "h" ? "bg-[#2e0854] text-white shadow-2xs" : "text-slate-600 hover:text-slate-900 hover:bg-purple-50"}`,
													children: [/* @__PURE__ */ jsx(Layers, { className: "w-3 h-3" }), /* @__PURE__ */ jsx("span", { children: "Hybrid" })]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "w-full h-full flex-1 relative bg-slate-200",
										children: /* @__PURE__ */ jsx("iframe", {
											title: `Google Maps Location - ${selectedCenter.name}`,
											width: "100%",
											height: "100%",
											style: { border: 0 },
											loading: "lazy",
											allowFullScreen: true,
											referrerPolicy: "no-referrer-when-downgrade",
											src: mapIframeUrl,
											className: `w-full h-full transition-opacity duration-300 ${isMapSwitching ? "opacity-40" : "opacity-100"}`
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "absolute bottom-2.5 inset-x-2.5 z-20 pointer-events-auto",
										children: /* @__PURE__ */ jsxs("div", {
											className: "p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-purple-100 shadow-2xs bg-purple-50",
													children: /* @__PURE__ */ jsx("img", {
														src: selectedCenter.image,
														alt: selectedCenter.name,
														className: "w-full h-full object-cover",
														onError: (e) => {
															e.target.src = "/uploads/pcp_campus_building.png";
														}
													})
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
													className: "flex items-center gap-1.5",
													children: /* @__PURE__ */ jsx("span", {
														className: "font-extrabold text-xs sm:text-sm text-slate-900 leading-tight",
														children: selectedCenter.name
													})
												}), /* @__PURE__ */ jsx("p", {
													className: "text-[11px] text-slate-500 font-normal truncate max-w-xs sm:max-w-md mt-0.5",
													children: selectedCenter.address
												})] })]
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 shrink-0",
												children: [/* @__PURE__ */ jsxs("a", {
													href: `tel:${selectedCenter.helpline.replace(/[^0-9]/g, "")}`,
													className: "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#2e0854] font-bold text-xs transition-colors",
													children: [/* @__PURE__ */ jsx(Phone, { className: "w-3 h-3 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", {
														className: "hidden sm:inline",
														children: "Call Desk"
													})]
												}), /* @__PURE__ */ jsxs("a", {
													href: selectedCenter.googleMapsUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all",
													children: [
														/* @__PURE__ */ jsx(Navigation, { className: "w-3.5 h-3.5" }),
														/* @__PURE__ */ jsx("span", { children: "Start Navigation" }),
														/* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 opacity-80" })
													]
												})]
											})]
										})
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12 pt-8 border-t border-purple-100 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xl sm:text-2xl font-black text-[#2e0854]",
									children: "100+ Acres"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs text-slate-600 font-medium",
									children: "Headquarters Campus Area"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xl sm:text-2xl font-black text-[#2e0854]",
									children: "4 Campuses"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs text-slate-600 font-medium",
									children: "Sikar & Jaipur Presence"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xl sm:text-2xl font-black text-[#2e0854]",
									children: "24x7 Security"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs text-slate-600 font-medium",
									children: "CCTV & Warden Monitored"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xl sm:text-2xl font-black text-[#2e0854]",
									children: "Transport Hub"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs text-slate-600 font-medium",
									children: "Direct Bus & Train Connectivity"
								})]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { PcpCampusMapSection as default };
