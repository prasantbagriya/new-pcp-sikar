import { t as SeoMeta } from "./SeoMeta-DZtUMvKs.js";
import { n as GlobalNavbar } from "./GlobalNavbar-CLKqeU09.js";
import { t as BlogFooter } from "./BlogFooter-CvQ4tjQi.js";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowBigDown, ArrowBigUp, BookOpen, Calendar, Check, ChevronRight, Clock, Copy, MessageSquare, Send, ShieldCheck, Sparkles } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
//#region resources/js/Pages/Blog/Show.jsx
dayjs.extend(relativeTime);
var Image$1 = ({ src, alt, fill, style, sizes, priority, fetchPriority, className = "", ...props }) => {
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
		fetchPriority: priority ? "high" : fetchPriority || "auto",
		loading: priority ? "eager" : "lazy",
		decoding: priority ? "sync" : "async",
		className,
		...props
	});
};
var ShareRail = ({ url, title, summary }) => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "hidden md:flex flex-col items-center gap-2.5 p-2 bg-white/95 dark:bg-[#0c1c38]/95 backdrop-blur-md shadow-md shadow-slate-200/50 dark:shadow-black/50 rounded-2xl border border-slate-200/80 dark:border-slate-800 sticky top-32 shrink-0 z-20",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 py-1",
				children: "Share"
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + (summary ? "\n\n" + summary : "") + "\n\n" + url)}`,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "group relative p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-600 transition-all hover:scale-110",
				"aria-label": "Share on WhatsApp",
				children: /* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 24 24",
					fill: "currentColor",
					className: "w-5 h-5",
					children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "group relative p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all hover:scale-110",
				"aria-label": "Share on X",
				children: /* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 24 24",
					fill: "currentColor",
					className: "w-5 h-5",
					children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "group relative p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 text-[#1877F2] transition-all hover:scale-110",
				"aria-label": "Share on Facebook",
				children: /* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 24 24",
					fill: "currentColor",
					className: "w-5 h-5",
					children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary || "")}`,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "group relative p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/40 text-[#0A66C2] transition-all hover:scale-110",
				"aria-label": "Share on LinkedIn",
				children: /* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 24 24",
					fill: "currentColor",
					className: "w-5 h-5",
					children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
				})
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: handleCopy,
				className: "group relative p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all hover:scale-110 cursor-pointer",
				"aria-label": "Copy link",
				children: copied ? /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "w-5 h-5" })
			})
		]
	});
};
var CommentThread = ({ comment, postId, postAuthorId, auth, userCommentVotes }) => {
	const userVote = userCommentVotes?.[comment.id] || 0;
	const [showReplyForm, setShowReplyForm] = useState(false);
	const { data, setData, post, processing, reset } = useForm({
		content: "",
		parent_id: comment.id
	});
	const submitReply = (e) => {
		e.preventDefault();
		post(route("post.comment.store", postId), { onSuccess: () => {
			setShowReplyForm(false);
			reset();
		} });
	};
	return /* @__PURE__ */ jsx("div", {
		className: "mt-5 border-l-2 border-slate-100 dark:border-slate-800/80 pl-4 sm:pl-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex flex-col items-center",
				children: /* @__PURE__ */ jsx("img", {
					src: `https://ui-avatars.com/api/?name=${comment.author?.username || comment.author?.name || "User"}&background=082755&color=fff`,
					alt: `${comment.author?.username || comment.author?.name || "User"} avatar`,
					width: "34",
					height: "34",
					className: "w-8 h-8 rounded-full shadow-sm"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-1 pb-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 mb-1.5 flex-wrap",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-bold text-[13px] text-[#2e0854] dark:text-white",
								children: comment.author?.username || comment.author?.name || "Reader"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-slate-400 dark:text-slate-500 text-[11px]",
								children: dayjs(comment.created_at).fromNow()
							}),
							comment.is_pinned == 1 && /* @__PURE__ */ jsx("span", {
								className: "flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/50",
								children: "Pinned"
							}),
							comment.author_id === postAuthorId && /* @__PURE__ */ jsx("span", {
								className: "text-[10px] font-bold text-[#5b40cf] bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-full border border-purple-200 dark:border-orange-800/50",
								children: "Author"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-[14px] text-slate-800 dark:text-slate-200 mb-3 leading-relaxed",
						children: comment.content
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center bg-slate-100 dark:bg-slate-800/80 rounded-full px-1 py-0.5",
							children: [
								/* @__PURE__ */ jsx("button", {
									"aria-label": "Upvote comment",
									onClick: (e) => {
										e.preventDefault();
										router.post("/vote", {
											votable_type: "comment",
											votable_id: comment.id,
											value: 1
										}, { preserveScroll: true });
									},
									className: `flex items-center justify-center w-7 h-7 rounded-full transition-all ${userVote === 1 ? "text-rose-600 bg-rose-50 dark:bg-rose-950/40" : "text-slate-600 dark:text-slate-400 hover:text-rose-600"}`,
									children: /* @__PURE__ */ jsx(ArrowBigUp, {
										size: 16,
										className: userVote === 1 ? "fill-current" : ""
									})
								}),
								/* @__PURE__ */ jsx("span", {
									className: `text-[12px] font-extrabold px-1.5 ${userVote === 1 ? "text-rose-600" : userVote === -1 ? "text-blue-600" : "text-slate-700 dark:text-slate-300"}`,
									children: comment.score
								}),
								/* @__PURE__ */ jsx("button", {
									"aria-label": "Downvote comment",
									onClick: (e) => {
										e.preventDefault();
										router.post("/vote", {
											votable_type: "comment",
											votable_id: comment.id,
											value: -1
										}, { preserveScroll: true });
									},
									className: `flex items-center justify-center w-7 h-7 rounded-full transition-all ${userVote === -1 ? "text-blue-600 bg-blue-50 dark:bg-blue-950/40" : "text-slate-600 dark:text-slate-400 hover:text-blue-600"}`,
									children: /* @__PURE__ */ jsx(ArrowBigDown, {
										size: 16,
										className: userVote === -1 ? "fill-current" : ""
									})
								})
							]
						}), /* @__PURE__ */ jsxs("button", {
							onClick: () => setShowReplyForm(!showReplyForm),
							className: "flex items-center gap-1.5 px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300 text-xs font-bold cursor-pointer",
							children: [/* @__PURE__ */ jsx(MessageSquare, { size: 14 }), /* @__PURE__ */ jsx("span", { children: "Reply" })]
						})]
					}),
					showReplyForm && /* @__PURE__ */ jsx("div", {
						className: "mt-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: submitReply,
							children: [/* @__PURE__ */ jsx("textarea", {
								value: data.content,
								onChange: (e) => setData("content", e.target.value),
								placeholder: "Write your reply...",
								rows: 3,
								className: "w-full text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 outline-none focus:border-[#5b40cf] focus:ring-2 focus:ring-[#5b40cf]/20",
								required: true,
								autoFocus: true
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex justify-end gap-2 mt-3",
								children: [/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setShowReplyForm(false),
									className: "px-4 py-1.5 font-bold text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 rounded-lg transition-colors cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									disabled: processing || !data.content,
									className: "px-5 py-1.5 font-bold text-xs bg-[#5b40cf] hover:bg-[#2e0854] text-white rounded-lg transition-transform active:scale-95 disabled:opacity-50 shadow-md shadow-purple-900/20 cursor-pointer",
									children: "Reply"
								})]
							})]
						})
					}),
					comment.replies && comment.replies.length > 0 && /* @__PURE__ */ jsx("div", {
						className: "mt-4 space-y-4",
						children: comment.replies.map((reply) => /* @__PURE__ */ jsx(CommentThread, {
							comment: reply,
							postId,
							postAuthorId,
							auth,
							userCommentVotes
						}, reply.id))
					})
				]
			})]
		})
	});
};
function Show({ post, recentPosts = [], meta, comments = [], userCommentVotes = {} }) {
	const { auth } = usePage().props;
	const { data, setData, post: submitForm, processing, reset } = useForm({
		content: "",
		parent_id: null
	});
	const [readingProgress, setReadingProgress] = useState(0);
	const [copiedShare, setCopiedShare] = useState(false);
	const [isTocOpen, setIsTocOpen] = useState(true);
	const contentRef = useRef(null);
	const [toc, setToc] = useState([]);
	const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
	useEffect(() => {
		const handleScroll = () => {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (totalHeight > 0) setReadingProgress(Math.min(100, Math.max(0, window.scrollY / totalHeight * 100)));
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const submitComment = (e) => {
		e.preventDefault();
		submitForm(route("post.comment.store", post.id), { onSuccess: () => reset() });
	};
	if (post?.seoRating || post?.seo_rating) try {
		const raw = post.seoRating || post.seo_rating;
		typeof raw === "string" && JSON.parse(raw);
	} catch (e) {}
	const readTimeMinutes = useMemo(() => {
		if (!post?.content) return 4;
		const wordCount = post.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
		return Math.max(2, Math.ceil(wordCount / 220));
	}, [post?.content]);
	useEffect(() => {
		if (!contentRef.current) return;
		contentRef.current.querySelectorAll("img").forEach((img, index) => {
			if (index === 0) {
				img.removeAttribute("loading");
				img.setAttribute("fetchpriority", "high");
				return;
			}
			if (!img.getAttribute("loading")) img.setAttribute("loading", "lazy");
		});
		const headings = contentRef.current.querySelectorAll("h2");
		const tocItems = [];
		headings.forEach((heading, index) => {
			const id = `heading-section-${index}`;
			heading.id = id;
			tocItems.push({
				id,
				text: heading.textContent
			});
		});
		setToc(tocItems);
	}, [post]);
	if (!post) return /* @__PURE__ */ jsx("div", {
		className: "p-12 text-center text-lg",
		children: "Post not found"
	});
	const formatDate = (dateString) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return isNaN(date.getTime()) ? dateString : date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	};
	const finalCanonicalUrl = post.canonicalUrl || `https://sikareducationhub.com${post.url_path || "/" + post.slug}`;
	const authorObj = typeof post.author === "object" && post.author !== null ? post.author : null;
	const rawAuthorName = post.author_name || authorObj?.name || authorObj?.username || (typeof post.author === "string" && post.author ? post.author : "") || "Prasant";
	const displayAuthor = [
		"super administrator",
		"admin",
		"root"
	].includes(rawAuthorName.toLowerCase()) ? "Prasant" : rawAuthorName;
	const authorSlug = "prasant";
	const handleCopyMobile = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(finalCanonicalUrl);
			setCopiedShare(true);
			setTimeout(() => setCopiedShare(false), 2e3);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#ffffff] dark:bg-[#070d1e] min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854] transition-colors duration-200",
		children: [
			/* @__PURE__ */ jsx(SeoMeta, { meta }),
			/* @__PURE__ */ jsx("div", {
				className: "fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200/50 dark:bg-slate-800",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full bg-gradient-to-r from-[#2e0854] via-[#5b40cf] to-[#2e0854] transition-all duration-150",
					style: { width: `${readingProgress}%` }
				})
			}),
			/* @__PURE__ */ jsx(GlobalNavbar, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-[1500px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-6 pb-16",
				children: [/* @__PURE__ */ jsxs("nav", {
					className: "flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6 flex-wrap",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: `${basePath}/`,
							className: "hover:text-[#5b40cf] transition-colors",
							children: "Home"
						}),
						/* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-slate-400" }),
						post.category ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Link, {
							href: `${basePath}/category/${post.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
							className: "hover:text-[#5b40cf] transition-colors",
							children: post.category
						}), /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-slate-400" })] }) : null,
						/* @__PURE__ */ jsx("span", {
							className: "text-slate-700 dark:text-slate-300 truncate max-w-xs sm:max-w-md",
							children: post.title
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row gap-8 lg:gap-12",
					children: [/* @__PURE__ */ jsx("main", {
						className: "w-full lg:w-[70%]",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex gap-6 sm:gap-8 items-start",
							children: [/* @__PURE__ */ jsx(ShareRail, {
								url: finalCanonicalUrl,
								title: meta?.title || post.title,
								summary: post.seoDescription || post.excerpt || ""
							}), /* @__PURE__ */ jsxs("article", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ jsxs("header", {
										className: "mb-8",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3 mb-4 flex-wrap",
												children: [
													post.category && /* @__PURE__ */ jsx(Link, {
														href: `${basePath}/category/${post.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
														className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#5b40cf] bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-orange-900/50 hover:bg-[#5b40cf] hover:text-white transition-all no-underline",
														children: post.category
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400",
														children: [/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-slate-400" }), /* @__PURE__ */ jsxs("span", { children: [readTimeMinutes, " min read"] })]
													}),
													post.date && /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400",
														children: [/* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5 text-slate-400" }), /* @__PURE__ */ jsx("span", { children: formatDate(post.date) })]
													})
												]
											}),
											/* @__PURE__ */ jsx("h1", {
												className: "text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2e0854] dark:text-white tracking-tight leading-[1.18] mb-6",
												children: post.title
											}),
											post.excerpt && /* @__PURE__ */ jsx("p", {
												className: "text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6",
												children: post.excerpt
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-[#0c1c38]/70 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-3.5",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "relative",
														children: [/* @__PURE__ */ jsx("img", {
															loading: "eager",
															src: post.authorImage && (post.authorImage.startsWith("http") || post.authorImage.startsWith("/")) ? post.authorImage : "/uploads/logo.png",
															alt: displayAuthor,
															className: "w-12 h-12 rounded-full object-cover ring-2 ring-[#5b40cf]/30 shadow-sm"
														}), /* @__PURE__ */ jsx("div", {
															className: "absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow",
															children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 stroke-[3]" })
														})]
													}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ jsx(Link, {
															href: `${basePath}/author/${authorSlug}`,
															className: "font-bold text-base text-[#2e0854] dark:text-white hover:text-[#5b40cf] transition-colors",
															children: displayAuthor
														}), /* @__PURE__ */ jsxs("span", {
															className: "text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1",
															children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3 h-3" }), "Verified Analyst"]
														})]
													}), /* @__PURE__ */ jsx("p", {
														className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
														children: post.authorJobTitle || "Senior Education Analyst, Sikar Education Hub"
													})] })]
												}), /* @__PURE__ */ jsx("div", {
													className: "flex items-center gap-2",
													children: /* @__PURE__ */ jsxs("a", {
														href: "https://google.com/preferences/source?q=sikareducationhub.com",
														target: "_blank",
														rel: "noopener noreferrer",
														className: "inline-flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-[#070d1e] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all no-underline shrink-0",
														children: [/* @__PURE__ */ jsxs("svg", {
															className: "w-4 h-4",
															viewBox: "0 0 24 24",
															children: [
																/* @__PURE__ */ jsx("path", {
																	fill: "#4285F4",
																	d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
																}),
																/* @__PURE__ */ jsx("path", {
																	fill: "#34A853",
																	d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
																}),
																/* @__PURE__ */ jsx("path", {
																	fill: "#FBBC05",
																	d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
																}),
																/* @__PURE__ */ jsx("path", {
																	fill: "#EA4335",
																	d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
																})
															]
														}), /* @__PURE__ */ jsx("span", { children: "Follow on Google News" })]
													})
												})]
											}),
											post.factCheckedBy && /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 text-emerald-950 dark:text-emerald-300 text-xs sm:text-sm mb-8",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm",
													children: /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 stroke-[3]" })
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
													className: "font-extrabold uppercase tracking-wider text-[11px] text-emerald-700 dark:text-emerald-400 mr-2",
													children: "FACT-CHECKED & VERIFIED:"
												}), /* @__PURE__ */ jsxs("span", { children: [
													"Reviewed by ",
													/* @__PURE__ */ jsx("strong", { children: post.factCheckedBy }),
													" ",
													post.factCheckerRole ? `(${post.factCheckerRole})` : "",
													" for accuracy against official Rajasthan board and coaching fee disclosures."
												] })] })]
											}),
											post.coverImage && /* @__PURE__ */ jsx("div", {
												className: "relative w-full rounded-3xl overflow-hidden mb-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200/60 dark:border-slate-800",
												style: { aspectRatio: "16/9" },
												children: /* @__PURE__ */ jsx(Image$1, {
													src: post.coverImage,
													alt: post.coverImageAlt || post.title,
													fill: true,
													style: { objectFit: "cover" },
													priority: true
												})
											})
										]
									}),
									toc.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50 dark:bg-[#0c1c38]/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 mb-10 shadow-sm",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between cursor-pointer select-none",
											onClick: () => setIsTocOpen(!isTocOpen),
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5 text-[#5b40cf]" }), /* @__PURE__ */ jsx("h2", {
													className: "text-lg font-bold text-[#2e0854] dark:text-white",
													children: "Table of Contents"
												})]
											}), /* @__PURE__ */ jsx("span", {
												className: "text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-[#5b40cf]",
												children: isTocOpen ? "Collapse" : "Expand"
											})]
										}), isTocOpen && /* @__PURE__ */ jsx("ol", {
											className: "mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 space-y-2.5",
											children: toc.map((item, index) => /* @__PURE__ */ jsx("li", {
												className: "text-sm font-medium",
												children: /* @__PURE__ */ jsxs("a", {
													href: `#${item.id}`,
													className: "text-slate-700 dark:text-slate-300 hover:text-[#5b40cf] dark:hover:text-[#5b40cf] transition-colors flex items-start gap-2.5",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "font-bold text-xs text-[#5b40cf] mt-0.5",
														children: [index + 1, "."]
													}), /* @__PURE__ */ jsx("span", { children: item.text })]
												})
											}, item.id))
										})]
									}),
									post.keyTakeaways && post.keyTakeaways.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "bg-gradient-to-br from-amber-50 to-purple-50/40 dark:from-[#13233f] dark:to-[#0c1c38] border-l-4 border-[#5b40cf] rounded-2xl p-6 sm:p-7 mb-10 shadow-sm",
										children: [/* @__PURE__ */ jsxs("h2", {
											className: "text-lg font-extrabold text-[#2e0854] dark:text-white mb-4 flex items-center gap-2",
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-[#5b40cf]" }), "Key Highlights & Takeaways"]
										}), /* @__PURE__ */ jsx("ul", {
											className: "space-y-3",
											children: post.keyTakeaways.map((takeaway, index) => /* @__PURE__ */ jsxs("li", {
												className: "flex items-start gap-3 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-5 h-5 rounded-full bg-[#5b40cf]/20 flex items-center justify-center shrink-0 mt-0.5",
													children: /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-[#5b40cf]" })
												}), /* @__PURE__ */ jsx("span", { children: takeaway })]
											}, index))
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										ref: contentRef,
										className: "prose prose-lg dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed font-sans\n                                    [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:text-[#2e0854] dark:[&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight\n                                    [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#2e0854] dark:[&_h3]:text-slate-100 [&_h3]:mt-8 [&_h3]:mb-3\n                                    [&_p]:text-base sm:[&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6\n                                    [&_a]:text-[#5b40cf] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-orange-300 hover:[&_a]:decoration-[#5b40cf]\n                                    [&_blockquote]:border-l-4 [&_blockquote]:border-[#5b40cf] [&_blockquote]:bg-purple-50/50 dark:[&_blockquote]:bg-[#0c1c38]/40 [&_blockquote]:p-5 [&_blockquote]:rounded-r-2xl [&_blockquote]:font-medium [&_blockquote]:italic\n                                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-6\n                                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-6\n                                    [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:shadow-sm\n                                    [&_th]:bg-[#2e0854] [&_th]:text-white [&_th]:font-bold [&_th]:p-3.5 [&_th]:text-left\n                                    [&_td]:p-3.5 [&_td]:border-b [&_td]:border-slate-200 dark:[&_td]:border-slate-800\n                                    [&_img]:rounded-2xl [&_img]:shadow-lg [&_img]:my-8",
										dangerouslySetInnerHTML: { __html: post.content }
									}),
									post.tags && post.tags.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 flex-wrap",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold uppercase tracking-wider text-slate-400 mr-2",
											children: "Topics:"
										}), post.tags.map((tag, idx) => /* @__PURE__ */ jsxs(Link, {
											href: `${basePath}/category/${typeof tag === "string" ? tag.toLowerCase().replace(/[^a-z0-9]+/g, "-") : String(tag)}`,
											className: "px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-700 dark:text-slate-300 hover:text-[#5b40cf] rounded-xl text-xs font-bold transition-all no-underline border border-transparent hover:border-purple-200",
											children: ["#", tag]
										}, idx))]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "xl:hidden mt-8 p-4 bg-slate-50 dark:bg-[#0c1c38] rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold text-[#2e0854] dark:text-white uppercase tracking-wider",
											children: "Share this guide:"
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("a", {
												href: `https://api.whatsapp.com/send?text=${encodeURIComponent((meta?.title || post.title) + " " + finalCanonicalUrl)}`,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "p-2.5 rounded-xl bg-emerald-500 text-white",
												"aria-label": "Share on WhatsApp",
												children: /* @__PURE__ */ jsx("svg", {
													viewBox: "0 0 24 24",
													fill: "currentColor",
													className: "w-4 h-4",
													children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
												})
											}), /* @__PURE__ */ jsx("button", {
												onClick: handleCopyMobile,
												className: "p-2.5 rounded-xl bg-slate-900 text-white cursor-pointer",
												"aria-label": "Copy link",
												children: copiedShare ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
											})]
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-12 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-3xl p-7 sm:p-9 shadow-lg shadow-slate-200/40 dark:shadow-black/40",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col sm:flex-row gap-6 items-start",
											children: [/* @__PURE__ */ jsx("img", {
												loading: "lazy",
												src: post.authorImage && (post.authorImage.startsWith("http") || post.authorImage.startsWith("/")) ? post.authorImage : "/uploads/logo.png",
												alt: displayAuthor,
												className: "w-20 h-20 rounded-2xl object-cover shrink-0 ring-4 ring-purple-900/20 shadow-md"
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex-1",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2 mb-1 flex-wrap",
														children: [/* @__PURE__ */ jsx("h2", {
															className: "text-xl font-extrabold text-[#2e0854] dark:text-white",
															children: displayAuthor
														}), /* @__PURE__ */ jsx("span", {
															className: "text-xs font-bold text-[#5b40cf] bg-purple-50 dark:bg-purple-950/40 px-2.5 py-0.5 rounded-full border border-purple-200/80",
															children: post.authorJobTitle || "Editorial Lead"
														})]
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-4",
														children: post.authorBio || "Senior Education Analyst and Content Lead at Sikar Education Hub with over 5+ years of experience researching coaching institutes, school benchmarks, and competitive exams in Rajasthan."
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400",
														children: [
															/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
																className: "font-bold text-slate-900 dark:text-slate-200",
																children: "5+ Years"
															}), " Experience"] }),
															/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
																className: "font-bold text-slate-900 dark:text-slate-200",
																children: "100+"
															}), " Verified Reviews"] }),
															/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
																className: "font-bold text-emerald-600",
																children: "✓ Fact-Checked"
															}), " Accuracy"] })
														]
													})
												]
											})]
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-12 p-8 sm:p-10 bg-gradient-to-br from-[#2e0854] to-[#051329] rounded-3xl text-white shadow-xl relative overflow-hidden",
										children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-[#5b40cf]/20 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
											className: "relative z-10 max-w-xl",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 border border-white/15",
													children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "Stay Updated with Sikar Education" })]
												}),
												/* @__PURE__ */ jsx("h2", {
													className: "text-2xl sm:text-3xl font-extrabold text-white mb-3",
													children: "Never Miss a Sikar Admission or Scholarship Alert"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-slate-300 text-sm sm:text-base leading-relaxed mb-6",
													children: "Get direct alerts for PCP Olympiad, Matrix scholarship tests, NEET UG batch announcements, and CBSE school admissions directly in your inbox."
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex flex-col sm:flex-row gap-3",
													children: [/* @__PURE__ */ jsxs(Link, {
														href: `${basePath}/blog`,
														className: "inline-flex items-center justify-center gap-2 bg-[#5b40cf] hover:bg-[#2e0854] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-purple-900/25 transition-all text-sm no-underline active:scale-98",
														children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }), "Explore All Educational Guides"]
													}), /* @__PURE__ */ jsx(Link, {
														href: `${basePath}/contact`,
														className: "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-2xl border border-white/20 transition-all text-sm no-underline",
														children: "Ask Our Counselors"
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-12 bg-white dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm",
										children: [
											/* @__PURE__ */ jsxs("h2", {
												className: "text-xl font-bold text-[#2e0854] dark:text-white mb-6 flex items-center gap-2.5",
												children: [/* @__PURE__ */ jsx(MessageSquare, {
													size: 20,
													className: "text-[#5b40cf]"
												}), /* @__PURE__ */ jsxs("span", { children: [
													"Reader Discussion (",
													comments.length,
													")"
												] })]
											}),
											auth?.user ? /* @__PURE__ */ jsxs("div", {
												className: "mb-8",
												children: [/* @__PURE__ */ jsxs("p", {
													className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2",
													children: ["Posting as ", /* @__PURE__ */ jsx("strong", {
														className: "text-[#5b40cf]",
														children: auth.user.username || auth.user.name
													})]
												}), /* @__PURE__ */ jsxs("form", {
													onSubmit: submitComment,
													children: [/* @__PURE__ */ jsx("textarea", {
														value: data.content,
														onChange: (e) => setData("content", e.target.value),
														placeholder: "Share your experience, ask a question about Sikar coachings...",
														rows: 4,
														className: "w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm text-slate-900 dark:text-white outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-purple-900/15 transition-all",
														required: true
													}), /* @__PURE__ */ jsx("div", {
														className: "flex justify-end mt-3",
														children: /* @__PURE__ */ jsxs("button", {
															type: "submit",
															disabled: processing || !data.content,
															className: "inline-flex items-center gap-2 px-6 py-2.5 font-bold text-sm bg-[#5b40cf] hover:bg-[#2e0854] text-white rounded-xl shadow-md shadow-purple-900/25 transition-transform active:scale-95 disabled:opacity-50 cursor-pointer",
															children: [/* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }), "Post Comment"]
														})
													})]
												})]
											}) : /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col sm:flex-row items-center justify-between border border-slate-200 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/40 rounded-2xl p-5 mb-8 gap-4",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
													className: "text-sm font-bold text-[#2e0854] dark:text-white",
													children: "Have questions about coaching or admissions?"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
													children: "Log in or register to share your feedback or ask our community."
												})] }), /* @__PURE__ */ jsxs("div", {
													className: "flex gap-2.5 w-full sm:w-auto",
													children: [/* @__PURE__ */ jsx(Link, {
														href: `${basePath}/login`,
														className: "flex-1 sm:flex-none text-center px-4 py-2 font-bold text-xs text-slate-700 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 shadow-sm no-underline",
														children: "Log In"
													}), /* @__PURE__ */ jsx(Link, {
														href: `${basePath}/register`,
														className: "flex-1 sm:flex-none text-center px-4 py-2 font-bold text-xs text-white bg-[#2e0854] hover:bg-[#240642] rounded-xl shadow-sm no-underline",
														children: "Sign Up Free"
													})]
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "space-y-4",
												children: comments.length > 0 ? comments.map((comment) => /* @__PURE__ */ jsx(CommentThread, {
													comment,
													postId: post.id,
													postAuthorId: post.author_id,
													auth,
													userCommentVotes
												}, comment.id)) : /* @__PURE__ */ jsxs("div", {
													className: "text-center py-10 border-t border-slate-100 dark:border-slate-800",
													children: [
														/* @__PURE__ */ jsx(MessageSquare, {
															size: 36,
															className: "mx-auto text-slate-300 dark:text-slate-700 mb-3"
														}),
														/* @__PURE__ */ jsx("h4", {
															className: "text-sm font-bold text-slate-700 dark:text-slate-300",
															children: "No Comments Yet"
														}),
														/* @__PURE__ */ jsx("p", {
															className: "text-xs text-slate-500 dark:text-slate-500 mt-1",
															children: "Be the first student or parent to share thoughts on this guide."
														})
													]
												})
											})
										]
									})
								]
							})]
						})
					}), /* @__PURE__ */ jsx("aside", {
						className: "w-full lg:w-[30%] pt-6 sm:pt-10 lg:pt-16 xl:pt-20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "sticky top-28 xl:top-32 max-h-[calc(100vh-130px)] overflow-y-auto space-y-4 pr-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "bg-white dark:bg-[#0c1c38] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm",
								children: [/* @__PURE__ */ jsxs("h2", {
									className: "text-base font-bold text-[#2e0854] dark:text-white mb-3.5 pt-1 pb-2.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", { children: "Recent Educational Guides" }), /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#5b40cf]" })]
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-col gap-2.5",
									children: recentPosts && recentPosts.slice(0, 4).map((rp) => /* @__PURE__ */ jsxs(Link, {
										href: `${basePath}${rp.url_path || "/" + rp.slug}`,
										className: "flex gap-3 group no-underline p-1.5 -mx-1.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors",
										children: [/* @__PURE__ */ jsx("div", {
											className: "relative w-16 h-14 shrink-0 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50",
											children: /* @__PURE__ */ jsx(Image$1, {
												src: rp.coverImage || "/uploads/read.webp",
												alt: rp.title,
												fill: true,
												style: { objectFit: "cover" },
												className: "transition-transform duration-300 group-hover:scale-105"
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col justify-center min-w-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-[#5b40cf] uppercase tracking-wider line-clamp-1",
												children: rp.category
											}), /* @__PURE__ */ jsx("h3", {
												className: "font-bold text-xs leading-snug text-slate-800 dark:text-slate-200 group-hover:text-[#5b40cf] transition-colors line-clamp-2 mt-0.5",
												children: rp.title
											})]
										})]
									}, rp.id))
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "bg-slate-50/90 dark:bg-[#0c1c38]/70 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2.5 mb-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-[#5b40cf] shrink-0",
										children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" })
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xs font-extrabold text-[#2e0854] dark:text-white",
										children: "Editorial Independence & Verification"
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed",
									children: "All coaching analyses on Sikar Education Hub are compiled from verified campus visits, fee schedules, and verified alumni reviews."
								})]
							})]
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsx(BlogFooter, {})
		]
	});
}
//#endregion
export { Show as default };
