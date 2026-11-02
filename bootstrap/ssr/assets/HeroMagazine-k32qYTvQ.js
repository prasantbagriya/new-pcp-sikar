import { Image as Image$1, Link as Link$1 } from "./utils-BjQF728w.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { ArrowRight, Calendar, Flame } from "lucide-react";
//#region resources/js/Pages/HomeComponents/HeroMagazine.jsx
var HeroMagazine = ({ posts = [], basePath = "", formatDate }) => {
	if (!posts || posts.length === 0) return null;
	const primaryPost = posts[0];
	const secondaryPosts = posts.slice(1, 4);
	const getPostUrl = (post) => {
		if (!post) return "#";
		return `${basePath || ""}${post.url_path || "/" + post.slug}`;
	};
	const getCategoryUrl = (category) => {
		if (!category) return "#";
		const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
		return `${basePath || ""}/category/${slug}`;
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pt-4 pb-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 mb-6",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-50 dark:bg-orange-950/60 text-[#f2650b] dark:text-orange-400 font-bold text-xs uppercase tracking-wider border border-orange-200/60 dark:border-orange-900/40",
				children: [/* @__PURE__ */ jsx(Flame, { className: "w-3.5 h-3.5 fill-current animate-pulse text-[#f2650b]" }), " Featured Stories"]
			}), /* @__PURE__ */ jsx("span", {
				className: "text-xs text-slate-500 dark:text-zinc-400 font-medium hidden sm:inline",
				children: "Handpicked education guides & updates from Sikar"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch",
			children: [primaryPost && /* @__PURE__ */ jsxs("article", {
				className: "lg:col-span-7 group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[#082755] min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] shadow-lg transition-transform duration-300",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 overflow-hidden",
					children: [/* @__PURE__ */ jsx(Image$1, {
						src: primaryPost.coverImage || "/uploads/social-cover.webp",
						alt: primaryPost.title,
						fill: true,
						priority: true,
						className: "object-cover w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#082755] via-[#082755]/70 to-transparent" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 p-6 sm:p-8 flex flex-col justify-end text-white",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5 mb-3",
							children: [/* @__PURE__ */ jsx(Link$1, {
								href: getCategoryUrl(primaryPost.category),
								className: "inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#082755] hover:bg-[#0c3570] text-white border border-[#f2650b]/40 transition-colors shadow-sm",
								children: primaryPost.category
							}), /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1 text-xs text-slate-300",
								children: [/* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3 text-slate-400" }), formatDate(primaryPost.date)]
							})]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug mb-3 text-white group-hover:text-amber-200 transition-colors",
							children: /* @__PURE__ */ jsx(Link$1, {
								href: getPostUrl(primaryPost),
								children: primaryPost.title
							})
						}),
						primaryPost.excerpt && /* @__PURE__ */ jsx("p", {
							className: "text-slate-200 text-sm sm:text-base line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed font-normal max-w-2xl",
							children: primaryPost.excerpt
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between pt-3 border-t border-white/15 text-xs text-slate-300",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "font-semibold text-white",
								children: ["By ", primaryPost.author_name || "Sikar Education Hub"]
							}), /* @__PURE__ */ jsxs(Link$1, {
								href: getPostUrl(primaryPost),
								className: "inline-flex items-center gap-1 text-[#f2650b] font-bold hover:text-amber-300 transition-colors",
								children: ["Read Article ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5 flex flex-col justify-between gap-4",
				children: secondaryPosts.map((post, idx) => /* @__PURE__ */ jsxs("article", {
					className: "group flex gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-[#f2650b]/40 transition-all duration-300 flex-1 items-center",
					children: [/* @__PURE__ */ jsx(Link$1, {
						href: getPostUrl(post),
						className: "relative w-28 sm:w-36 h-24 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-zinc-800",
						children: /* @__PURE__ */ jsx(Image$1, {
							src: post.coverImage || "/uploads/2026/07/Logo_sikareducationhub.png",
							alt: post.title,
							fill: true,
							className: "object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-108"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col flex-1 min-w-0 justify-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 mb-1.5",
								children: [/* @__PURE__ */ jsx(Link$1, {
									href: getCategoryUrl(post.category),
									className: "text-[11px] font-bold uppercase tracking-wider text-[#f2650b] dark:text-orange-400 hover:underline line-clamp-1",
									children: post.category
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-[11px] text-slate-400 dark:text-zinc-500",
									children: ["• ", formatDate(post.date)]
								})]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#f2650b] dark:group-hover:text-orange-400 transition-colors",
								children: /* @__PURE__ */ jsx(Link$1, {
									href: getPostUrl(post),
									children: post.title
								})
							}),
							post.excerpt && /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500 dark:text-zinc-400 line-clamp-1 mt-1 font-normal",
								children: post.excerpt
							})
						]
					})]
				}, post.id || idx))
			})]
		})]
	});
};
//#endregion
export { HeroMagazine as default };
