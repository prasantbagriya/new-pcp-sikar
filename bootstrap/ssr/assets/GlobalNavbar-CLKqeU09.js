import { i as Telegram, n as Instagram, o as Youtube, r as PlayStore, t as Facebook } from "./BrandIcons-EKrvry51.js";
import { usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, ChevronDown, Compass, Loader2, Menu, Search, Sparkles, X } from "lucide-react";
//#region resources/js/NextComponents/GlobalNavbar.tsx
var DEFAULT_NAV_LINKS = [
	{
		id: 1,
		parent_id: null,
		label: "Home",
		page: "/"
	},
	{
		id: 10,
		parent_id: null,
		label: "Courses",
		page: "#"
	},
	{
		id: 101,
		parent_id: 10,
		label: "All Coaching Programs",
		page: "courses"
	},
	{
		id: 102,
		parent_id: 10,
		label: "NEET-UG Medical Division",
		page: "courses/neet-ug"
	},
	{
		id: 103,
		parent_id: 10,
		label: "IIT-JEE Engineering Wing",
		page: "courses/iit-jee"
	},
	{
		id: 104,
		parent_id: 10,
		label: "Pre-Foundation (5th to 10th)",
		page: "courses/pre-foundation"
	},
	{
		id: 105,
		parent_id: 10,
		label: "Prince Defence Academy (NDA)",
		page: "courses/nda-defence"
	},
	{
		id: 2,
		parent_id: null,
		label: "Institutes",
		page: "#"
	},
	{
		id: 201,
		parent_id: 2,
		label: "JEE Coachings",
		page: "category/jee-coachings"
	},
	{
		id: 202,
		parent_id: 2,
		label: "NEET UG",
		page: "category/neet-ug"
	},
	{
		id: 203,
		parent_id: 2,
		label: "Pre-Medical Test",
		page: "category/pre-medical-test-coaching"
	},
	{
		id: 204,
		parent_id: 2,
		label: "CBSE Schools",
		page: "category/cbse-schools"
	},
	{
		id: 205,
		parent_id: 2,
		label: "RBSE Sikar",
		page: "category/rbse-sikar"
	},
	{
		id: 206,
		parent_id: 2,
		label: "English Medium Schools",
		page: "category/english-medium-schools"
	},
	{
		id: 207,
		parent_id: 2,
		label: "Defence Coaching",
		page: "category/defence-coaching"
	},
	{
		id: 208,
		parent_id: 2,
		label: "Convent Schools",
		page: "category/convent-schools"
	},
	{
		id: 3,
		parent_id: null,
		label: "Colleges",
		page: "category/colleges"
	},
	{
		id: 4,
		parent_id: null,
		label: "Hospitals",
		page: "category/hospitals"
	},
	{
		id: 5,
		parent_id: null,
		label: "News",
		page: "category/news"
	},
	{
		id: 6,
		parent_id: null,
		label: "About",
		page: "about-us"
	},
	{
		id: 7,
		parent_id: null,
		label: "Contact",
		page: "contact"
	}
];
function NavbarCore({ global_nav: passedNav, auth: passedAuth }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [expandedMenus, setExpandedMenus] = useState([]);
	const [currentPath, setCurrentPath] = useState(() => {
		return typeof window !== "undefined" ? window.location.pathname : "";
	});
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState(null);
	const [isSearching, setIsSearching] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [showBackToTop, setShowBackToTop] = useState(false);
	const [activeDropdownId, setActiveDropdownId] = useState(null);
	const leaveTimerRef = useRef(null);
	const megaMenuRef = useRef(null);
	const handleDropdownEnter = (id) => {
		if (leaveTimerRef.current) {
			clearTimeout(leaveTimerRef.current);
			leaveTimerRef.current = null;
		}
		setActiveDropdownId(String(id));
	};
	const handleDropdownLeave = () => {
		if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
		leaveTimerRef.current = setTimeout(() => {
			setActiveDropdownId(null);
		}, 240);
	};
	const toggleDropdown = (id) => {
		if (leaveTimerRef.current) {
			clearTimeout(leaveTimerRef.current);
			leaveTimerRef.current = null;
		}
		setActiveDropdownId((prev) => String(prev) === String(id) ? null : String(id));
	};
	const desktopSearchRef = useRef(null);
	const mobileSearchRef = useRef(null);
	const [currentUser, setCurrentUser] = useState(() => {
		if (passedAuth?.user) return passedAuth.user;
		return null;
	});
	const [navData, setNavData] = useState(() => {
		if (passedNav && Array.isArray(passedNav) && passedNav.length > 0) return passedNav;
		return [];
	});
	useEffect(() => {
		if (passedNav && Array.isArray(passedNav) && passedNav.length > 0) setNavData(passedNav);
	}, [passedNav]);
	useEffect(() => {
		if (passedAuth?.user) setCurrentUser(passedAuth.user);
	}, [passedAuth]);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const isDarkMode = document.documentElement.classList.contains("dark") || localStorage.theme === "dark";
			setIsDark(isDarkMode);
			setCurrentPath(window.location.pathname);
			const handlePopState = () => {
				setCurrentPath(window.location.pathname);
			};
			const handleInertiaNavigate = (e) => {
				setCurrentPath(window.location.pathname);
				setIsMenuOpen(false);
				setIsSearchOpen(false);
				if (e?.detail?.page?.props) {
					if (e.detail.page.props.auth?.user !== void 0) setCurrentUser(e.detail.page.props.auth.user);
					if (e.detail.page.props.global_nav && Array.isArray(e.detail.page.props.global_nav)) setNavData(e.detail.page.props.global_nav);
				}
			};
			const handleClickOutside = (e) => {
				if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target) && mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)) setIsSearchOpen(false);
			};
			const handleKeyDown = (e) => {
				if (e.key === "Escape") setIsSearchOpen(false);
			};
			const handleScroll = () => {
				const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
				const progress = totalHeight > 0 ? window.scrollY / totalHeight * 100 : 0;
				setScrollProgress(Math.min(100, Math.max(0, progress)));
				setShowBackToTop(window.scrollY > 300);
			};
			window.addEventListener("popstate", handlePopState);
			document.addEventListener("inertia:navigate", handleInertiaNavigate);
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("keydown", handleKeyDown);
			window.addEventListener("scroll", handleScroll, { passive: true });
			return () => {
				window.removeEventListener("popstate", handlePopState);
				document.removeEventListener("inertia:navigate", handleInertiaNavigate);
				document.removeEventListener("mousedown", handleClickOutside);
				document.removeEventListener("keydown", handleKeyDown);
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);
	useEffect(() => {
		const q = searchQuery.trim();
		if (q.length < 2) {
			setSearchResults(null);
			setIsSearching(false);
			return;
		}
		setIsSearching(true);
		const timer = setTimeout(async () => {
			try {
				const res = await fetch(`/api/search/suggestions?q=${encodeURIComponent(q)}`);
				if (res.ok) {
					const data = await res.json();
					setSearchResults(data);
				}
			} catch (err) {
				console.error("Search error:", err);
			} finally {
				setIsSearching(false);
			}
		}, 220);
		return () => clearTimeout(timer);
	}, [searchQuery]);
	const getHref = (page) => {
		if (!page || page === "#") return "#";
		const base = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
		if (page === "landing" || page === "/") return (base || "") + "/";
		if (page === "about" || page === "about-us" || page === "/about" || page === "/about-us") return (base || "") + "/about-us";
		if (page.startsWith("http://") || page.startsWith("https://")) return page;
		if (page.startsWith("/")) return (base || "") + page;
		if (page === "blog") return (base || "") + "/blog";
		if (page === "category") return (base || "") + "/category";
		if (page === "contact" || page === "contacts" || page === "/contact" || page === "/contacts") return (base || "") + "/contact";
		return (base || "") + `/${page}`;
	};
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			setIsSearchOpen(false);
			window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
		}
	};
	const allLinks = navData && Array.isArray(navData) && navData.length > 0 ? (() => {
		const activeNavs = navData.filter((n) => n && (n.is_active === true || n.is_active === 1 || n.is_active === "1" || n.is_active === "true"));
		return activeNavs.length > 0 ? activeNavs.map((n) => ({
			id: n.id,
			parent_id: n.parent_id,
			label: n.name || n.label,
			page: n.url || n.page || "#"
		})) : DEFAULT_NAV_LINKS;
	})() : DEFAULT_NAV_LINKS;
	const topLevelLinks = allLinks.filter((link) => link.parent_id === null || link.parent_id === void 0 || link.parent_id === "" || link.parent_id === 0 || link.parent_id === "0");
	const getChildren = (parentId) => allLinks.filter((link) => link.parent_id !== null && link.parent_id !== void 0 && link.parent_id !== "" && link.parent_id !== 0 && link.parent_id !== "0" && String(link.parent_id) === String(parentId));
	const getSubNavStructure = (parentLink, children) => {
		const isInstitutes = (parentLink.label || parentLink.name || "").toLowerCase().includes("institute");
		const coachingKeywords = [
			"jee",
			"neet",
			"medical",
			"foundation",
			"coaching",
			"test",
			"defence",
			"nda",
			"iit",
			"batch",
			"reviews",
			"fee",
			"stream"
		];
		const schoolKeywords = [
			"school",
			"cbse",
			"rbse",
			"convent",
			"k12",
			"boarding",
			"matric",
			"admission"
		];
		const collegeKeywords = [
			"college",
			"degree",
			"polytechnic",
			"hospital",
			"tech",
			"exam",
			"scholarship",
			"olympiad"
		];
		const coachingItems = children.filter((c) => {
			const txt = ((c.label || c.name || "") + " " + (c.page || c.url || "")).toLowerCase();
			return coachingKeywords.some((k) => txt.includes(k));
		});
		const schoolItems = children.filter((c) => {
			const txt = ((c.label || c.name || "") + " " + (c.page || c.url || "")).toLowerCase();
			return schoolKeywords.some((k) => txt.includes(k)) && !coachingItems.includes(c);
		});
		const collegeItems = children.filter((c) => {
			const txt = ((c.label || c.name || "") + " " + (c.page || c.url || "")).toLowerCase();
			return collegeKeywords.some((k) => txt.includes(k)) && !coachingItems.includes(c) && !schoolItems.includes(c);
		});
		const otherItems = children.filter((c) => !coachingItems.includes(c) && !schoolItems.includes(c) && !collegeItems.includes(c));
		if (isInstitutes || coachingItems.length > 0 && schoolItems.length > 0) return [
			{
				title: "Coaching & Test Prep",
				items: coachingItems
			},
			{
				title: "Schools & Admissions",
				items: schoolItems
			},
			{
				title: "Colleges & Higher Ed",
				items: collegeItems
			},
			{
				title: "About & Verification",
				items: otherItems
			}
		];
		const numCols = children.length <= 4 ? 1 : children.length <= 8 ? 2 : children.length <= 12 ? 3 : 4;
		const perCol = Math.ceil(children.length / numCols);
		const cols = [];
		for (let i = 0; i < numCols; i++) cols.push({
			title: i === 0 ? parentLink.label || parentLink.name : `Section ${i + 1}`,
			items: children.slice(i * perCol, (i + 1) * perCol)
		});
		return cols;
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#ffc107] z-[100] transition-all duration-75 ease-out pointer-events-none",
			style: { width: `${scrollProgress}%` }
		}),
		/* @__PURE__ */ jsx("div", {
			className: "hidden md:flex items-center justify-between py-1.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 bg-[#2e0854] text-white text-[12px] border-b border-purple-900/40 w-full relative z-40",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-[1600px] mx-auto flex items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 overflow-hidden max-w-3xl",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#ffc107] text-[#2e0854] text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3 text-[#2e0854]" }), " Trending"]
					}), /* @__PURE__ */ jsx("span", {
						className: "truncate text-slate-200 font-medium",
						children: "PCP Sikar & Jaipur: Admissions Open 2026-27 • NEET AIR-1 Proven System • 12-Hour Daily Doubt Desks"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5 shrink-0 text-slate-300 text-[11px] font-normal",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-slate-400 font-semibold hidden xl:inline text-[10.5px]",
							children: "Official Apps:"
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "https://play.google.com/store/apps/details?id=com.tucmxt.krjete&hl=en_IN",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-2xs hover:border-white/40 transition-all font-bold text-[10.5px] group",
							title: "Download PCP AIR App on Google Play",
							children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-3.5 h-3.5 group-hover:scale-110 transition-transform shrink-0" }), /* @__PURE__ */ jsx("span", { children: "PCP AIR" })]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-slate-500",
							children: "•"
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "https://play.google.com/store/apps/details?id=com.princeeduhub&hl=en_IN",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-2xs hover:border-white/40 transition-all font-bold text-[10.5px] group",
							title: "Download PCP Sikar App on Google Play",
							children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-3.5 h-3.5 group-hover:scale-110 transition-transform shrink-0" }), /* @__PURE__ */ jsx("span", { children: "PCP Sikar" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("header", {
			className: "sticky top-0 left-0 right-0 z-50 w-full bg-[#ffffff] border-b border-slate-200/90 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] transition-all duration-200 font-sans text-slate-800",
			style: { backgroundColor: "#ffffff" },
			children: /* @__PURE__ */ jsxs("div", {
				id: "main-nav-bar",
				className: "w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 relative",
				children: [/* @__PURE__ */ jsxs("nav", {
					className: "flex items-center justify-between h-[52px] sm:h-[58px] gap-3.5",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: getHref("landing"),
							className: "flex items-center gap-2 group shrink-0 decoration-transparent py-1 select-none",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-start leading-none",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xl sm:text-2xl font-black tracking-tight text-[#2e1065] font-sans",
										children: "PCP Sikar"
									}), /* @__PURE__ */ jsx("span", {
										className: "px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase bg-purple-100 text-[#2e1065] border border-purple-200 shadow-xs",
										children: "IIT-JEE • NEET"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[9.5px] sm:text-[10.5px] font-semibold tracking-normal text-[#3b0764] italic mt-0.5",
									children: "Your Search will End Here..."
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hidden lg:flex items-center space-x-6 h-full",
							children: topLevelLinks.map((link) => {
								const linkPath = getHref(link.page || link.url);
								const children = getChildren(link.id);
								const hasChildren = children.length > 0;
								const hasActiveChild = hasChildren && children.some((child) => {
									const cPath = getHref(child.page || child.url);
									return cPath !== "#" && (currentPath === cPath || cPath !== "/" && currentPath.startsWith(cPath));
								});
								const isActive = linkPath !== "#" && (currentPath === linkPath || (link.page || link.url) !== "landing" && (link.page || link.url) !== "/" && currentPath.startsWith(linkPath)) || hasActiveChild;
								const linkId = String(link.id || link.label || link.name);
								const isDropdownOpen = activeDropdownId === linkId;
								if (hasChildren) {
									const subNavColumns = getSubNavStructure(link, children);
									return /* @__PURE__ */ jsxs("div", {
										className: "group h-full flex items-center",
										onMouseEnter: () => handleDropdownEnter(linkId),
										onMouseLeave: handleDropdownLeave,
										children: [/* @__PURE__ */ jsx("div", {
											className: "relative h-full flex items-center",
											children: /* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: () => toggleDropdown(linkId),
												"aria-expanded": isDropdownOpen,
												className: `flex items-center gap-1.5 text-[13.5px] px-3 py-1.5 transition-colors duration-200 cursor-pointer bg-transparent outline-none ${isActive || isDropdownOpen ? "text-[#3b1165] font-bold" : "text-slate-700 hover:text-[#3b1165] font-medium"}`,
												children: [/* @__PURE__ */ jsx("span", { children: link.label || link.name }), /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#2e1065]" : "text-slate-500 group-hover:rotate-180 group-hover:text-[#2e1065]"}` })]
											})
										}), /* @__PURE__ */ jsxs("div", {
											ref: isDropdownOpen ? megaMenuRef : void 0,
											onMouseEnter: () => handleDropdownEnter(linkId),
											onMouseLeave: handleDropdownLeave,
											style: {
												left: 0,
												right: 0,
												marginLeft: "auto",
												marginRight: "auto"
											},
											className: `absolute top-full left-0 right-0 mx-auto w-[min(1340px,calc(100vw-32px))] max-h-[82vh] overflow-y-auto overscroll-contain bg-white dark:bg-[#18022b] border border-purple-200/90 dark:border-slate-800 rounded-2xl shadow-[0_25px_60px_-15px_rgba(46,16,101,0.12),0_0_0_1px_rgba(46,16,101,0.06)] bg-gradient-to-b from-white via-purple-50/25 to-purple-50/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 p-6 sm:p-7 lg:p-8 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:content-[''] ${isDropdownOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "grid grid-cols-12 gap-6 lg:gap-8 items-start",
												children: [/* @__PURE__ */ jsx("div", {
													className: "col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-5 lg:gap-6",
													children: subNavColumns.map((col, idx) => /* @__PURE__ */ jsxs("div", {
														className: "flex flex-col space-y-1",
														children: [/* @__PURE__ */ jsx("h4", {
															className: "text-[13.5px] font-black uppercase tracking-wider text-[#2e1065] pb-1.5 mb-2.5 border-b border-purple-100",
															children: col.title
														}), col.items.map((item) => /* @__PURE__ */ jsx("a", {
															href: getHref(item.page || item.url),
															onClick: () => setActiveDropdownId(null),
															className: "text-[13.5px] text-slate-700 hover:text-[#2e1065] hover:translate-x-1 transition-all py-1.5 block font-medium leading-snug",
															children: item.label || item.name
														}, item.id || item.label || item.name))]
													}, idx))
												}), /* @__PURE__ */ jsxs("div", {
													className: "col-span-12 lg:col-span-3 flex flex-col justify-between pl-0 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-purple-100 space-y-4",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "p-4 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-purple-50/70 border border-purple-200/90 shadow-sm",
														children: [
															/* @__PURE__ */ jsxs("div", {
																className: "flex items-center justify-between mb-2",
																children: [/* @__PURE__ */ jsxs("span", {
																	className: "text-[11.5px] font-black uppercase tracking-wider text-[#2e1065] inline-flex items-center gap-1.5",
																	children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "PCP Official Apps" })]
																}), /* @__PURE__ */ jsx("span", {
																	className: "text-[9.5px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-purple-200/80 text-[#2e1065]",
																	children: "Free"
																})]
															}),
															/* @__PURE__ */ jsx("p", {
																className: "text-[11px] text-slate-600 mb-3 leading-snug",
																children: "Access live video classes, 12-hr doubt desks, OMR test analytics & attendance."
															}),
															/* @__PURE__ */ jsxs("div", {
																className: "grid grid-cols-2 gap-2",
																children: [/* @__PURE__ */ jsxs("a", {
																	href: "https://play.google.com/store/apps/details?id=com.tucmxt.krjete&hl=en_IN",
																	target: "_blank",
																	rel: "noopener noreferrer",
																	className: "flex flex-col items-center justify-center p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 text-center transition-all group/app shadow-2xs hover:-translate-y-0.5",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "flex items-center gap-1 mb-1",
																		children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
																			className: "text-[11px] font-black text-[#2e1065] group-hover/app:text-purple-900 leading-none",
																			children: "PCP AIR"
																		})]
																	}), /* @__PURE__ */ jsx("span", {
																		className: "text-[9px] text-slate-500 leading-none",
																		children: "Google Play"
																	})]
																}), /* @__PURE__ */ jsxs("a", {
																	href: "https://play.google.com/store/apps/details?id=com.princeeduhub&hl=en_IN",
																	target: "_blank",
																	rel: "noopener noreferrer",
																	className: "flex flex-col items-center justify-center p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 text-center transition-all group/app shadow-2xs hover:-translate-y-0.5",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "flex items-center gap-1 mb-1",
																		children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
																			className: "text-[11px] font-black text-[#2e1065] group-hover/app:text-purple-900 leading-none",
																			children: "PCP Sikar"
																		})]
																	}), /* @__PURE__ */ jsx("span", {
																		className: "text-[9px] text-slate-500 leading-none",
																		children: "Google Play"
																	})]
																})]
															})
														]
													}), /* @__PURE__ */ jsxs("div", {
														className: "p-3.5 rounded-2xl bg-white border border-purple-150 shadow-2xs",
														children: [/* @__PURE__ */ jsx("span", {
															className: "text-[11px] font-black uppercase tracking-wider text-[#2e1065] block mb-2",
															children: "Official Social Media"
														}), /* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between gap-2 px-1",
															children: [
																/* @__PURE__ */ jsx("a", {
																	href: "https://www.youtube.com/@PCPSikar",
																	target: "_blank",
																	rel: "noopener noreferrer",
																	title: "YouTube @PCPSikar",
																	className: "p-2 rounded-xl hover:scale-125 transition-transform duration-200 flex items-center justify-center",
																	children: /* @__PURE__ */ jsx(Youtube, { className: "w-6 h-4.5" })
																}),
																/* @__PURE__ */ jsx("a", {
																	href: "https://www.instagram.com/pcpsikar/",
																	target: "_blank",
																	rel: "noopener noreferrer",
																	title: "Instagram @pcpsikar",
																	className: "p-2 rounded-xl hover:scale-125 transition-transform duration-200 flex items-center justify-center",
																	children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" })
																}),
																/* @__PURE__ */ jsx("a", {
																	href: "https://www.facebook.com/PCPSikarOfficial/",
																	target: "_blank",
																	rel: "noopener noreferrer",
																	title: "Facebook @PCPSikarOfficial",
																	className: "p-2 rounded-xl text-[#1877f2] hover:scale-125 transition-transform duration-200 flex items-center justify-center",
																	children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5 fill-current" })
																}),
																/* @__PURE__ */ jsx("a", {
																	href: "https://t.me/pcpsikar",
																	target: "_blank",
																	rel: "noopener noreferrer",
																	title: "Telegram Channel",
																	className: "p-2 rounded-xl text-[#24a1de] hover:scale-125 transition-transform duration-200 flex items-center justify-center",
																	children: /* @__PURE__ */ jsx(Telegram, { className: "w-5 h-5 fill-current" })
																})
															]
														})]
													})]
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "mt-6 pt-3.5 border-t border-purple-150/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-purple-50/80 via-white to-purple-50/80 dark:bg-purple-950/20 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 lg:-mx-8 lg:-mb-8 px-6 py-3.5 rounded-b-2xl",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300",
													children: [/* @__PURE__ */ jsx("span", {
														className: "px-2 py-0.5 rounded font-black text-[10px] uppercase bg-[#2e1065] text-white",
														children: "P-SAT 2026-27"
													}), /* @__PURE__ */ jsx("span", {
														className: "font-medium text-slate-700",
														children: "Admissions & Up to 100% Scholarship Test open for NEET, JEE & Foundation batches."
													})]
												}), /* @__PURE__ */ jsxs("a", {
													href: "#scholarship",
													onClick: () => setActiveDropdownId(null),
													className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#2e1065] hover:text-purple-800 hover:underline shrink-0",
													children: [/* @__PURE__ */ jsx("span", { children: "Register For Scholarship" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
												})]
											})]
										})]
									}, linkId);
								}
								return /* @__PURE__ */ jsx("a", {
									href: linkPath,
									className: `flex items-center text-[13.5px] px-3 py-1.5 transition-colors duration-200 decoration-transparent ${isActive ? "text-[#3b1165] font-bold" : "text-slate-700 hover:text-[#3b1165] font-medium"}`,
									children: link.label || link.name
								}, link.id || link.label || link.name);
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							ref: desktopSearchRef,
							className: "relative hidden md:block w-48 lg:w-64 xl:w-72 transition-all duration-300 focus-within:w-80",
							children: [/* @__PURE__ */ jsxs("form", {
								onSubmit: handleSearchSubmit,
								className: "relative flex items-center",
								children: [
									/* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" }),
									/* @__PURE__ */ jsx("input", {
										type: "text",
										value: searchQuery,
										onChange: (e) => {
											setSearchQuery(e.target.value);
											setIsSearchOpen(true);
										},
										onFocus: () => setIsSearchOpen(true),
										placeholder: "Search coaching, schools, exams...",
										"aria-label": "Search education guides",
										className: "w-full pl-8 pr-7 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 hover:bg-slate-100 focus:bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5b40cf]/20 focus:border-[#5b40cf] transition-all"
									}),
									isSearching ? /* @__PURE__ */ jsx(Loader2, { className: "absolute right-3 w-3.5 h-3.5 text-[#5b40cf] animate-spin" }) : searchQuery ? /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => {
											setSearchQuery("");
											setSearchResults(null);
										},
										className: "absolute right-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5",
										children: /* @__PURE__ */ jsx(X, { className: "w-3.5 h-3.5" })
									}) : null
								]
							}), isSearchOpen && searchQuery.trim().length >= 2 && /* @__PURE__ */ jsx("div", {
								className: "absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#20023b] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-[460px] overflow-y-auto",
								children: isSearching && !searchResults ? /* @__PURE__ */ jsxs("div", {
									className: "p-4 text-center text-xs text-slate-500 flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin text-[#2e1065] dark:text-[#ffc107]" }), " Searching Sikar Education Hub..."]
								}) : searchResults ? /* @__PURE__ */ jsxs("div", {
									className: "py-2",
									children: [
										searchResults.categories && searchResults.categories.length > 0 && /* @__PURE__ */ jsxs("div", {
											className: "px-3 py-2 border-b border-slate-100 dark:border-slate-800",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5",
												children: "Categories"
											}), /* @__PURE__ */ jsx("div", {
												className: "flex flex-wrap gap-1.5",
												children: searchResults.categories.map((cat) => /* @__PURE__ */ jsxs("a", {
													href: `/category/${cat.slug}`,
													onClick: () => setIsSearchOpen(false),
													className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-purple-50 text-[#2e1065] border border-purple-200 hover:bg-[#ffc107] hover:text-black font-bold transition-all",
													children: [
														/* @__PURE__ */ jsx(Compass, { className: "w-3 h-3" }),
														" ",
														cat.name
													]
												}, cat.id || cat.slug))
											})]
										}),
										searchResults.blogs && searchResults.blogs.length > 0 ? /* @__PURE__ */ jsxs("div", {
											className: "p-2 space-y-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1",
												children: "Guides & Articles"
											}), searchResults.blogs.map((post) => /* @__PURE__ */ jsxs("a", {
												href: post.url_path || `/${post.slug}`,
												onClick: () => setIsSearchOpen(false),
												className: "flex flex-col p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group",
												children: [/* @__PURE__ */ jsx("h4", {
													className: "text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white group-hover:text-[#2e1065] line-clamp-1 transition-colors",
													children: post.title
												}), post.excerpt && /* @__PURE__ */ jsx("p", {
													className: "text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5",
													children: post.excerpt
												})]
											}, post.id))]
										}) : /* @__PURE__ */ jsxs("div", {
											className: "p-4 text-center text-xs text-slate-500",
											children: [
												"No articles found for \"",
												searchQuery,
												"\"."
											]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "p-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40",
											children: /* @__PURE__ */ jsxs("a", {
												href: `/search?q=${encodeURIComponent(searchQuery)}`,
												onClick: () => setIsSearchOpen(false),
												className: "flex items-center justify-between px-3 py-1.5 text-xs font-bold text-[#2e1065] hover:text-purple-900 font-bold",
												children: [/* @__PURE__ */ jsxs("span", { children: [
													"View all results for \"",
													searchQuery,
													"\""
												] }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
											})
										})
									]
								}) : null
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "hidden lg:flex items-center gap-2.5 shrink-0",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "https://princeeduhub.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-9 h-9 min-w-[36px] rounded-full flex items-center justify-center hover:scale-110 hover:bg-purple-100/70 transition-all cursor-pointer p-1 group/360 shrink-0",
									title: "360° Virtual Campus Tour",
									"aria-label": "360° Virtual Campus Tour",
									children: /* @__PURE__ */ jsx("img", {
										src: "/uploads/pcp/360.png",
										alt: "360° Campus Tour",
										width: "28",
										height: "28",
										loading: "lazy",
										decoding: "async",
										className: "w-7 h-7 object-contain group-hover/360:rotate-45 transition-transform duration-300"
									})
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "#courses",
									className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs text-[#2e1065] bg-purple-100/90 hover:bg-purple-200/90 border border-purple-200/90 transition-all shrink-0 decoration-transparent shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" }), /* @__PURE__ */ jsx("span", { children: "Admission 2026" })]
								}),
								/* @__PURE__ */ jsx("a", {
									href: currentUser ? "/dashboard" : "/login",
									className: "relative inline-flex items-center justify-center px-5 sm:px-6 py-2 rounded-full border border-purple-200 hover:border-[#2e0854] bg-white hover:bg-purple-50/50 text-slate-800 hover:text-[#2e0854] font-bold text-xs sm:text-[13px] tracking-tight transition-all duration-200 shadow-none active:scale-95 shrink-0 decoration-transparent leading-normal",
									children: /* @__PURE__ */ jsx("span", { children: currentUser ? currentUser.is_admin ? "Dashboard" : "My Account" : "My Account" })
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lg:hidden flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("a", {
								href: "https://princeeduhub.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all p-1",
								title: "360° Virtual Campus Tour",
								"aria-label": "360° Virtual Campus Tour",
								children: /* @__PURE__ */ jsx("img", {
									src: "/uploads/pcp/360.png",
									alt: "360° Campus Tour",
									width: "24",
									height: "24",
									loading: "lazy",
									decoding: "async",
									className: "w-6 h-6 object-contain"
								})
							}), /* @__PURE__ */ jsx("button", {
								"aria-label": "Toggle mobile menu",
								onClick: () => setIsMenuOpen(!isMenuOpen),
								className: "w-10 h-10 rounded-xl flex items-center justify-center text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
								children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
							})]
						})
					]
				}), isMenuOpen && /* @__PURE__ */ jsxs("div", {
					className: "lg:hidden border-t border-purple-200/80 bg-[#faf7ff] dark:bg-[#1b0231] py-4 absolute left-0 right-0 top-[52px] sm:top-[58px] shadow-2xl max-h-[calc(100vh-74px)] overflow-y-auto z-50",
					children: [
						/* @__PURE__ */ jsxs("div", {
							ref: mobileSearchRef,
							className: "px-4 mb-4",
							children: [/* @__PURE__ */ jsxs("form", {
								onSubmit: handleSearchSubmit,
								className: "relative flex items-center",
								children: [
									/* @__PURE__ */ jsx(Search, { className: "absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" }),
									/* @__PURE__ */ jsx("input", {
										type: "text",
										value: searchQuery,
										onChange: (e) => setSearchQuery(e.target.value),
										placeholder: "Search coaching, schools, exams...",
										className: "w-full pl-9 pr-8 py-2.5 rounded-xl text-xs font-medium bg-purple-100/50 dark:bg-slate-900 border border-purple-200/90 text-purple-950 dark:text-white placeholder:text-purple-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20"
									}),
									searchQuery && /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setSearchQuery(""),
										className: "absolute right-3 text-slate-400",
										children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
									})
								]
							}), searchQuery.trim().length >= 2 && searchResults && /* @__PURE__ */ jsxs("div", {
								className: "mt-2 bg-slate-50 dark:bg-slate-900/90 rounded-xl p-2 border border-slate-200 dark:border-slate-800 space-y-1",
								children: [searchResults.blogs && searchResults.blogs.slice(0, 3).map((post) => /* @__PURE__ */ jsx("a", {
									href: post.url_path || `/${post.slug}`,
									className: "block p-2 text-xs font-semibold text-slate-800 dark:text-white hover:text-[#2e1065] dark:text-[#ffc107]",
									children: post.title
								}, post.id)), /* @__PURE__ */ jsxs("a", {
									href: `/search?q=${encodeURIComponent(searchQuery)}`,
									className: "block p-2 text-xs font-bold text-[#2e1065] dark:text-[#ffc107]",
									children: [
										"All results for \"",
										searchQuery,
										"\" →"
									]
								})]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-col px-4 space-y-1",
							children: topLevelLinks.map((link) => {
								const linkPath = getHref(link.page || link.url);
								const isActive = linkPath !== "#" && (currentPath === linkPath || (link.page || link.url) !== "landing" && (link.page || link.url) !== "/" && currentPath.startsWith(linkPath));
								const children = getChildren(link.id);
								const hasChildren = children.length > 0;
								const linkKey = String(link.id || link.label || link.name);
								const isExpanded = expandedMenus.includes(linkKey);
								if (hasChildren) {
									const subNavColumns = getSubNavStructure(link, children);
									return /* @__PURE__ */ jsxs("div", {
										className: "rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between bg-purple-50/50 hover:bg-purple-100/50 transition-colors",
											children: [/* @__PURE__ */ jsx("span", {
												className: "flex-1 px-4 py-3 text-[15px] font-normal text-slate-800 dark:text-slate-200",
												children: link.label || link.name
											}), /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => {
													setExpandedMenus((prev) => prev.includes(linkKey) ? prev.filter((item) => item !== linkKey) : [...prev, linkKey]);
												},
												className: "p-3 text-slate-500 hover:text-[#2e1065] dark:text-[#ffc107]",
												"aria-label": "Toggle submenu",
												children: /* @__PURE__ */ jsx(ChevronDown, { className: `w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180 text-[#2e1065] dark:text-[#ffc107]" : ""}` })
											})]
										}), isExpanded && /* @__PURE__ */ jsxs("div", {
											className: "bg-white dark:bg-[#08152a] px-4 py-3 space-y-4 border-t border-slate-100 dark:border-slate-800",
											children: [subNavColumns.map((col, idx) => /* @__PURE__ */ jsxs("div", {
												className: `space-y-1 ${idx > 0 ? "pt-2.5 border-t border-slate-100 dark:border-slate-800/80" : ""}`,
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-[11px] font-black uppercase tracking-wider text-[#2e1065] block mb-1",
													children: col.title
												}), col.items.map((item) => /* @__PURE__ */ jsx("a", {
													href: getHref(item.page || item.url),
													className: "block py-1.5 text-[13.5px] font-medium text-slate-700 hover:text-[#2e1065]",
													children: item.label || item.name
												}, item.id || item.label || item.name))]
											}, idx)), /* @__PURE__ */ jsx("div", {
												className: "pt-2",
												children: /* @__PURE__ */ jsxs("a", {
													href: getHref("compare-neet-coaching-programs-beyond-results"),
													className: "block p-3 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-sm",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex items-center justify-between text-[10px] text-orange-400 font-extrabold uppercase mb-1",
														children: [/* @__PURE__ */ jsx("span", { children: "2026 Index" }), /* @__PURE__ */ jsx("span", { children: "Annual Report →" })]
													}), /* @__PURE__ */ jsx("p", {
														className: "text-white text-xs font-bold leading-snug",
														children: "Where the top institutes stand in Sikar"
													})]
												})
											})]
										})]
									}, linkKey);
								}
								return /* @__PURE__ */ jsx("a", {
									href: linkPath,
									className: `px-4 py-2.5 text-[15px] decoration-transparent transition-colors ${isActive ? "text-[#3b1165] font-bold" : "text-slate-700 hover:text-[#3b1165] font-medium"}`,
									children: link.label || link.name
								}, linkKey);
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-5 pt-4 mt-4 border-t border-purple-200/90 flex flex-col gap-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "p-3 rounded-xl bg-purple-50 border border-purple-200/80",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between text-xs font-bold text-[#2e1065] mb-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-4 h-4 shrink-0" }), " PCP Official Apps"]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[10px] uppercase font-black bg-purple-200/80 px-1.5 py-0.5 rounded text-[#2e1065]",
											children: "Free"
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "https://play.google.com/store/apps/details?id=com.tucmxt.krjete&hl=en_IN",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "py-2 px-2.5 rounded-lg bg-white border border-purple-200 flex items-center justify-center gap-1.5 font-bold text-xs text-[#2e1065] shadow-2xs hover:bg-purple-100",
											children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "PCP AIR" })]
										}), /* @__PURE__ */ jsxs("a", {
											href: "https://play.google.com/store/apps/details?id=com.princeeduhub&hl=en_IN",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "py-2 px-2.5 rounded-lg bg-white border border-purple-200 flex items-center justify-center gap-1.5 font-bold text-xs text-[#2e1065] shadow-2xs hover:bg-purple-100",
											children: [/* @__PURE__ */ jsx(PlayStore, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "PCP Sikar" })]
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-around py-2",
									children: [
										/* @__PURE__ */ jsx("a", {
											href: "https://www.youtube.com/@PCPSikar",
											target: "_blank",
											rel: "noopener noreferrer",
											title: "YouTube",
											className: "p-2 hover:scale-125 transition-transform flex items-center justify-center",
											children: /* @__PURE__ */ jsx(Youtube, { className: "w-6 h-4.5" })
										}),
										/* @__PURE__ */ jsx("a", {
											href: "https://www.instagram.com/pcpsikar/",
											target: "_blank",
											rel: "noopener noreferrer",
											title: "Instagram",
											className: "p-2 hover:scale-125 transition-transform flex items-center justify-center",
											children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" })
										}),
										/* @__PURE__ */ jsx("a", {
											href: "https://www.facebook.com/PCPSikarOfficial/",
											target: "_blank",
											rel: "noopener noreferrer",
											title: "Facebook",
											className: "p-2 text-[#1877f2] hover:scale-125 transition-transform",
											children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5 fill-current" })
										}),
										/* @__PURE__ */ jsx("a", {
											href: "https://t.me/pcpsikar",
											target: "_blank",
											rel: "noopener noreferrer",
											title: "Telegram",
											className: "p-2 text-[#24a1de] hover:scale-125 transition-transform",
											children: /* @__PURE__ */ jsx(Telegram, { className: "w-5 h-5 fill-current" })
										})
									]
								}),
								/* @__PURE__ */ jsx("a", {
									href: currentUser ? "/dashboard" : "/login",
									className: "flex items-center justify-center py-2.5 px-5 rounded-full border border-[#4f46e5] hover:border-[#3730a3] bg-white text-slate-900 hover:text-[#4f46e5] font-semibold text-sm transition-all shadow-2xs text-center",
									children: /* @__PURE__ */ jsx("span", { children: currentUser ? currentUser.is_admin ? "Admin Dashboard" : "My Account" : "My Account (Student / Parent Login)" })
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/contact",
									className: "flex items-center justify-center gap-2 py-2.5 px-5 rounded-full border border-[#3b1165] bg-purple-50/80 hover:bg-purple-100 text-[#3b1165] font-bold text-sm transition-all shadow-2xs text-center",
									children: /* @__PURE__ */ jsx("span", { children: "Contact PCP Sikar Helpline" })
								})
							]
						})
					]
				})]
			})
		}),
		showBackToTop && /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			"aria-label": "Back to top",
			className: "fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#2e1065] hover:bg-[#4c1d95] text-white shadow-xl shadow-purple-950/30 border border-purple-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer",
			children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-5 h-5 group-hover:-translate-y-0.5 transition-transform" })
		})
	] });
}
function InertiaNavbarWrapper(props) {
	const page = usePage();
	const effectiveNav = props.global_nav !== void 0 ? props.global_nav : page.props.global_nav;
	const effectiveAuth = props.auth !== void 0 ? props.auth : page.props.auth;
	return /* @__PURE__ */ jsx(NavbarCore, {
		...props,
		global_nav: effectiveNav,
		auth: effectiveAuth
	});
}
var SafeInertiaBoundary = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch() {}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ jsx(NavbarCore, { ...this.props.fallbackProps });
		return this.props.children;
	}
};
function GlobalNavbar(props) {
	if (props.isStandalone || props.global_nav !== void 0 && props.global_nav !== null || typeof window !== "undefined" && document.getElementById("home-app") && !document.getElementById("app")) return /* @__PURE__ */ jsx(NavbarCore, { ...props });
	return /* @__PURE__ */ jsx(SafeInertiaBoundary, {
		fallbackProps: props,
		children: /* @__PURE__ */ jsx(InertiaNavbarWrapper, { ...props })
	});
}
//#endregion
export { GlobalNavbar as n, DEFAULT_NAV_LINKS as t };
