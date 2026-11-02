import { Head, Link, useForm } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
//#region resources/js/Pages/Auth/ForgotPassword.jsx
function ForgotPassword({ status }) {
	const { data, setData, post, processing, errors } = useForm({ email: "" });
	const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
	const submit = (e) => {
		e.preventDefault();
		post(route("password.email"));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#070d1e] font-sans selection:bg-[#5b40cf]/20 selection:text-[#2e0854] px-6 py-12 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 -left-20 w-96 h-96 bg-[#2e0854]/10 dark:bg-[#2e0854]/30 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 -right-20 w-96 h-96 bg-[#5b40cf]/10 dark:bg-[#5b40cf]/15 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ jsx(Head, { title: "Forgot Password | Sikar Education Hub" }),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-md relative z-10",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-center mb-8",
					children: /* @__PURE__ */ jsxs(Link, {
						href: `${basePath}/`,
						className: "inline-flex items-center gap-3 group decoration-transparent no-underline",
						children: [/* @__PURE__ */ jsx("div", {
							className: "h-11 px-2.5 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-md shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 group-hover:scale-105 transition-all",
							children: /* @__PURE__ */ jsx("img", {
								src: `${basePath}/uploads/2026/07/Logo_sikareducationhub.png`,
								alt: "Sikar Education Hub Logo",
								className: "h-8 w-auto object-contain"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-left",
							children: [/* @__PURE__ */ jsx("span", {
								className: "block text-xl font-extrabold text-[#2e0854] dark:text-white tracking-tight leading-none",
								children: "Sikar Education Hub"
							}), /* @__PURE__ */ jsx("span", {
								className: "block text-[11px] font-bold text-[#5b40cf] uppercase tracking-wider mt-1",
								children: "Password Recovery"
							})]
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "bg-white dark:bg-[#0b1c36] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ jsx("h1", {
								className: "text-2xl sm:text-3xl font-extrabold text-[#2e0854] dark:text-white tracking-tight mb-2",
								children: "Forgot Password?"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-slate-600 dark:text-slate-400 text-sm leading-relaxed",
								children: "No problem. Enter your email address and we will send you a password reset link to get back into your account."
							})]
						}),
						status && /* @__PURE__ */ jsxs("div", {
							className: "mb-6 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-4 py-3 rounded-2xl text-sm font-medium flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 shrink-0" }), status]
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: submit,
							className: "space-y-5",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									className: "block text-sm font-bold text-[#2e0854] dark:text-slate-200 mb-1.5",
									children: "Email Address"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative group",
									children: [/* @__PURE__ */ jsx("div", {
										className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
										children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-slate-400 group-focus-within:text-[#5b40cf] transition-colors" })
									}), /* @__PURE__ */ jsx("input", {
										id: "email",
										type: "email",
										name: "email",
										value: data.email,
										onChange: (e) => setData("email", e.target.value),
										className: "block w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-[#0c1c38] border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#5b40cf] focus:ring-4 focus:ring-[#5b40cf]/15 transition-all shadow-sm",
										placeholder: "you@example.com",
										required: true,
										autoFocus: true
									})]
								}),
								errors.email && /* @__PURE__ */ jsx("p", {
									className: "mt-1.5 text-xs font-semibold text-rose-500",
									children: errors.email
								})
							] }), /* @__PURE__ */ jsxs("button", {
								type: "submit",
								disabled: processing,
								className: "group relative w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-[#5b40cf] hover:bg-[#2e0854] focus:outline-none focus:ring-4 focus:ring-[#5b40cf]/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.99] shadow-lg shadow-purple-950/25 cursor-pointer",
								children: [processing ? "Sending Link..." : "Send Reset Link", !processing && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 text-center",
							children: /* @__PURE__ */ jsxs(Link, {
								href: route("login"),
								className: "inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-[#5b40cf] dark:hover:text-[#5b40cf] transition-colors",
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), "Back to Sign In"]
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { ForgotPassword as default };
