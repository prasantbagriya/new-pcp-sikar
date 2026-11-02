import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
//#region resources/js/Layouts/GuestLayout.jsx
function GuestLayout({ children }) {
	const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col justify-center items-center bg-[#f8fafc] dark:bg-[#071324] font-sans selection:bg-[#f2650b]/20 selection:text-[#082755] relative overflow-hidden px-4 py-12",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 -left-20 w-96 h-96 bg-[#082755]/10 dark:bg-[#082755]/30 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 -right-20 w-96 h-96 bg-[#f2650b]/10 dark:bg-[#f2650b]/15 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-md relative z-10",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col items-center mb-8 text-center",
						children: /* @__PURE__ */ jsxs(Link, {
							href: `${basePath}/`,
							className: "group flex items-center gap-3 no-underline",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-12 px-3 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 group-hover:scale-105 transition-all",
								children: /* @__PURE__ */ jsx("img", {
									src: `${basePath}/uploads/2026/07/Logo_sikareducationhub.png`,
									alt: "Sikar Education Hub Logo",
									className: "h-8 w-auto object-contain"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-left",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xl font-extrabold text-[#082755] dark:text-white tracking-tight",
									children: "Sikar Education Hub"
								}), /* @__PURE__ */ jsx("span", {
									className: "block text-xs font-semibold text-[#f2650b] uppercase tracking-wider",
									children: "Rajasthan's Premier Portal"
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-white dark:bg-[#0b1c36] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl",
						children
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 text-center text-xs text-slate-500 dark:text-slate-400",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Sikar Education Hub. All rights reserved."
						]
					})
				]
			})
		]
	});
}
//#endregion
export { GuestLayout as t };
