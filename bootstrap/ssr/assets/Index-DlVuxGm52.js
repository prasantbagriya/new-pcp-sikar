import { t as SeoMeta } from "./SeoMeta-DZtUMvKs.js";
import { n as GlobalNavbar } from "./GlobalNavbar-qw3J78hM.js";
import { t as BlogFooter } from "./BlogFooter-xtVfSwl3.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { ArrowRight, BookOpen, ChevronDown, MessageSquare, Search } from "lucide-react";
//#region resources/js/Pages/Blog/Index.jsx
var Image$1 = ({ src, alt, fill, style, sizes, priority, fetchPriority, ...props }) => {
	return /* @__PURE__ */ jsx("img", {
		src,
		alt,
		style: fill ? {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: "100%",
			height: "100%",
			...style
		} : style,
		sizes,
		width: "600",
		height: "400",
		fetchPriority: priority ? "high" : fetchPriority || "auto",
		loading: priority ? "eager" : "lazy",
		decoding: priority ? "sync" : "async",
		...props
	});
};
var FAQSection = ({ customFaqs }) => {
	const [openIndex, setOpenIndex] = useState(0);
	const faqs = customFaqs && customFaqs.length > 0 ? customFaqs : [
		{
			question: "What kind of topics are covered in the Sikar Education Hub blog?",
			answer: "The blog section covers topics like best coaching institutes in Sikar, top schools and colleges, NEET & JEE guidance, Olympiads, board exam results, education news, and career guidance for students and parents."
		},
		{
			question: "How can students use the blog to prepare for JEE and NEET?",
			answer: "Students can read in-depth blog posts on Top JEE Coaching, Best NEET Coaching in Sikar, preparation strategies, expert tips, test-taking methodologies, and curriculum breakdowns."
		},
		{
			question: "Does the blog help in choosing the right coaching in Sikar?",
			answer: "Yes, Sikar Education Hub shares objective comparison articles, ranking lists, and detailed guides on the premier coaching institutes in Sikar for JEE, NEET, CUET, Foundation, and Olympiad courses."
		},
		{
			question: "Can I find best school information on the blog?",
			answer: "Yes, our school articles cover the top CBSE, RBSE, and residential schools in Sikar, admissions, fee structures, campus facilities, academics, and board results."
		},
		{
			question: "Can students compare coaching institutes through blog articles?",
			answer: "Yes, top coaching institutes and schools are compared on the basis of courses, faculty, fees, facilities, study material, results, test series, and student feedback."
		}
	];
	if (!faqs || faqs.length === 0) return null;
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer
			}
		}))
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "pt-16 pb-16 md:pt-24 md:pb-20 bg-white dark:bg-[#070d1e] border-t border-purple-100 dark:border-slate-800 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: JSON.stringify(faqSchema)
			}) }),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50" }), /* @__PURE__ */ jsx("div", { className: "absolute top-48 -left-24 w-72 h-72 bg-amber-100 dark:bg-amber-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 lg:sticky lg:top-32 space-y-6",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200",
								children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: "FAQs For Educational Guides" })]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-normal leading-snug",
								children: ["Frequently Asked ", /* @__PURE__ */ jsx("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-purple-600",
									children: "Questions"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed",
								children: "Find clear answers to common questions about Sikar's premier coaching institutes, hostels, and academic roadmaps."
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "bg-[#faf7fe] dark:bg-[#0c1428] rounded-2xl p-6 border border-purple-100/90 dark:border-slate-800 shadow-sm flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0",
								children: /* @__PURE__ */ jsx(Search, { className: "w-6 h-6 text-amber-600 dark:text-amber-400" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-bold text-slate-900 dark:text-white mb-1",
									children: "Need Direct Guidance?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-500 dark:text-slate-400 mb-3",
									children: "Speak directly with our senior educational counselors for customized guidance."
								}),
								/* @__PURE__ */ jsxs(Link, {
									href: "/contact",
									className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white text-xs font-bold shadow-md shadow-purple-950/20 hover:opacity-95 transition-all no-underline",
									children: [/* @__PURE__ */ jsx("span", { children: "Contact Counselor" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
								})
							] })]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7 space-y-3",
						children: faqs.map((faq, index) => {
							const isOpen = openIndex === index;
							return /* @__PURE__ */ jsxs("div", {
								className: `group border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white dark:bg-[#0c1428] shadow-lg shadow-purple-950/5 border-purple-200 dark:border-purple-800" : "bg-white/80 dark:bg-[#0c1428]/80 border-purple-100/90 dark:border-slate-800 hover:border-purple-300"}`,
								children: [/* @__PURE__ */ jsxs("button", {
									className: "w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none bg-transparent cursor-pointer",
									onClick: () => setOpenIndex(isOpen ? null : index),
									"aria-expanded": isOpen,
									children: [/* @__PURE__ */ jsx("span", {
										className: `font-bold text-sm sm:text-base pr-4 transition-colors ${isOpen ? "text-[#2e0854] dark:text-purple-300" : "text-slate-800 dark:text-slate-200 group-hover:text-[#5b40cf]"}`,
										children: faq.question
									}), /* @__PURE__ */ jsx("div", {
										className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#2e0854] text-white rotate-180" : "bg-purple-50 text-slate-500 group-hover:bg-purple-100 group-hover:text-[#5b40cf]"}`,
										children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
									})]
								}), isOpen && /* @__PURE__ */ jsx("div", {
									className: "px-5 pb-4 pt-1 border-t border-purple-50 dark:border-slate-800/60",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm m-0",
										children: faq.answer
									})
								})]
							}, index);
						})
					})]
				})
			})
		]
	});
};
var SimpleSlider = ({ sliders }) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	if (!sliders || sliders.length === 0) return null;
	React.useEffect(() => {
		if (sliders.length > 1) {
			const interval = setInterval(() => {
				setCurrentSlideIndex((prev) => (prev + 1) % sliders.length);
			}, 5e3);
			return () => clearInterval(interval);
		}
	}, [sliders.length]);
	return /* @__PURE__ */ jsx("div", {
		className: "relative w-full h-[220px] md:h-[280px] overflow-hidden mb-12 rounded-3xl mx-auto max-w-[1600px] border border-purple-100/90 shadow-md",
		children: sliders.map((slide, index) => {
			const imgUrl = typeof slide === "string" ? slide : slide.image_url || slide.image;
			return /* @__PURE__ */ jsxs("div", {
				className: `absolute inset-0 z-0 h-full w-full transition-opacity duration-1000 ${index === currentSlideIndex ? "opacity-100" : "opacity-0"}`,
				children: [/* @__PURE__ */ jsx("img", {
					src: imgUrl,
					alt: slide.title || "Slider Image",
					width: "1200",
					height: "400",
					loading: "lazy",
					decoding: "async",
					className: "w-full h-full object-cover"
				}), (slide.title || slide.subtitle) && /* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center p-4",
					children: [
						slide.title && /* @__PURE__ */ jsx("h2", {
							className: "text-2xl md:text-4xl font-black text-white mb-2",
							children: slide.title
						}),
						slide.subtitle && /* @__PURE__ */ jsx("p", {
							className: "text-sm md:text-base text-purple-100 max-w-xl",
							children: slide.subtitle
						}),
						slide.link && /* @__PURE__ */ jsx("a", {
							href: slide.link,
							className: "mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs py-2.5 px-6 rounded-full transition shadow-md no-underline",
							children: "Explore Guide →"
						})
					]
				})]
			}, index);
		})
	});
};
function Index({ posts, sliders, meta, faqs = [] }) {
	const formatDate = (dateString) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return isNaN(date.getTime()) ? dateString : date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	};
	const postList = posts?.data || (Array.isArray(posts) ? posts : []);
	const paginationLinks = posts?.links || [];
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#faf7fe] dark:bg-[#070d1e] min-h-screen text-slate-900 dark:text-white transition-colors duration-300 font-sans selection:bg-purple-800 selection:text-white",
		children: [
			/* @__PURE__ */ jsx(SeoMeta, { meta }),
			/* @__PURE__ */ jsx(GlobalNavbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#120326] text-white overflow-hidden mb-8",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5b40cf]/25 rounded-full blur-[140px] pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 text-xs font-semibold text-purple-200/80 mb-4 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md",
								children: [
									/* @__PURE__ */ jsx(Link, {
										href: "/",
										className: "hover:text-amber-300 transition-colors",
										children: "Home"
									}),
									/* @__PURE__ */ jsx("span", { children: "›" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-amber-300 font-bold",
										children: "Educational Guides & Insights"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-widest mb-3",
								children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ jsx("span", { children: "VERIFIED ADMISSION RESEARCH & TOPPER STRATEGIES" })]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl sm:text-5xl font-black text-white tracking-normal leading-snug sm:leading-tight mb-3",
								children: meta?.h1 || "Educational Guides & Articles"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-purple-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed",
								children: "In-depth analyses of NEET & JEE preparation methodologies, hostel life comparisons, and faculty guidance from Sikar's leading coaching hub."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("main", {
				className: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12",
				children: [
					/* @__PURE__ */ jsx(SimpleSlider, { sliders }),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12",
						children: postList.map((post, index) => /* @__PURE__ */ jsxs("article", {
							className: "border border-purple-100/90 dark:border-slate-800 bg-white dark:bg-[#0c1428] rounded-3xl overflow-hidden hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Link, {
								href: (typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "") + (post.url_path || `/${post.slug}`),
								className: "relative h-48 block overflow-hidden bg-purple-50",
								children: [/* @__PURE__ */ jsx(Image$1, {
									src: post.coverImage || "/uploads/read.webp",
									alt: post.title,
									fill: true,
									style: { objectFit: "cover" },
									priority: index === 0,
									className: "hover:scale-105 transition-transform duration-500"
								}), /* @__PURE__ */ jsx("div", {
									className: "absolute top-3 left-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "inline-flex items-center px-2.5 py-1 rounded-lg bg-black/60 text-white backdrop-blur-md text-[10px] font-bold uppercase tracking-wider",
										children: post.category
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-6",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-base sm:text-lg font-bold mb-2.5 text-slate-900 dark:text-white line-clamp-2 hover:text-[#5b40cf] transition-colors",
									children: /* @__PURE__ */ jsx(Link, {
										href: (typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "") + (post.url_path || `/${post.slug}`),
										children: post.title
									})
								}), /* @__PURE__ */ jsx("p", {
									className: "text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed",
									children: post.excerpt
								})]
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "px-6 pb-6 pt-3 border-t border-purple-50 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400",
								children: [/* @__PURE__ */ jsx("span", { children: formatDate(post.date) }), (() => {
									const aName = typeof post.author === "object" && post.author !== null ? post.author.name || post.author.username || "PCP Sikar Editorial" : post.author || "PCP Sikar Editorial";
									const aSlug = aName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
									return /* @__PURE__ */ jsx(Link, {
										href: (typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "") + "/author/" + aSlug,
										className: "font-semibold text-[#5b40cf] hover:underline",
										children: aName
									});
								})()]
							})]
						}, post.id))
					}),
					paginationLinks.length > 3 && /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap justify-center items-center gap-2 mb-16",
						children: paginationLinks.map((link, index) => {
							if (!link.url) return /* @__PURE__ */ jsx("span", {
								className: "px-4 py-2 text-slate-400 bg-purple-50/50 dark:bg-slate-800 rounded-xl text-xs font-bold",
								dangerouslySetInnerHTML: { __html: link.label }
							}, index);
							return /* @__PURE__ */ jsx(Link, {
								href: link.url,
								className: `px-4 py-2 rounded-xl transition-all font-bold text-xs border ${link.active ? "bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white border-purple-800 shadow-md shadow-purple-950/20" : "bg-white dark:bg-[#0c1428] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-slate-800 hover:border-[#5b40cf]"}`,
								dangerouslySetInnerHTML: { __html: link.label }
							}, index);
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(FAQSection, { customFaqs: faqs }),
			/* @__PURE__ */ jsx(BlogFooter, {})
		]
	});
}
//#endregion
export { Index as default };
