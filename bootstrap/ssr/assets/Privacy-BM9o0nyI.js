import { n as GlobalNavbar } from "./GlobalNavbar-DtKV_09A.js";
import { t as BlogFooter } from "./BlogFooter-BCC4IHxH.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Lock } from "lucide-react";
//#region resources/js/Pages/Static/Privacy.jsx
function Privacy() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#faf7fe] dark:bg-[#070d1e] min-h-screen flex flex-col font-sans selection:bg-purple-800 selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Privacy Policy & Data Security | PCP Sikar & Sikar Education Hub" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Sikar Education Hub and PCP Sikar Privacy Policy explains how information is collected, used, protected, and handled when you use our website."
			})] }),
			/* @__PURE__ */ jsx(GlobalNavbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#120326] text-white overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5b40cf]/25 rounded-full blur-[140px] pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 text-xs font-semibold text-purple-200/80 mb-5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md",
								children: [
									/* @__PURE__ */ jsx(Link, {
										href: "/",
										className: "hover:text-amber-300 transition-colors",
										children: "Home"
									}),
									/* @__PURE__ */ jsx("span", { children: "›" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-amber-300 font-bold",
										children: "Privacy Policy"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-widest mb-4",
								children: [/* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ jsx("span", { children: "DATA PROTECTION & STUDENT PRIVACY" })]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl sm:text-5xl font-black text-white tracking-normal leading-snug sm:leading-tight mb-3",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-purple-100/80 text-xs sm:text-sm font-medium",
								children: "Last Updated: September 21, 2026 • Official Compliance Notice"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("main", {
				className: "max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-20 relative z-20 flex-grow",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white dark:bg-[#0c1428] rounded-3xl border border-purple-100/90 dark:border-slate-800 shadow-xl shadow-purple-950/5 p-6 sm:p-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800 text-xs sm:text-sm text-[#2e0854] dark:text-purple-200 font-medium",
							children: [/* @__PURE__ */ jsx("strong", { children: "Overview:" }), " This Privacy Policy outlines our procedures on collecting, using, and safeguarding information when you access Sikar Education Hub and Prince Career Pioneer (PCP Sikar) admission services."]
						}),
						/* @__PURE__ */ jsx("p", { children: "We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and only where We have a valid legal basis to do so, including Your consent." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "1. Interpretation and Definitions"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc pl-6 space-y-2",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Account:" }), " A unique account created for You to access Our Service or parts of Our Service."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Company:" }), " Refers to Sikar Education Hub and Prince Career Pioneer (PCP Sikar), Palwas Road, Sikar, Rajasthan."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Cookies:" }), " Small files placed on Your device containing details of Your browsing activity."] }),
								/* @__PURE__ */ jsxs("li", { children: [
									/* @__PURE__ */ jsx("strong", { children: "Service:" }),
									" Refers to the website accessible at ",
									/* @__PURE__ */ jsx("a", {
										href: "https://sikareducationhub.com/",
										className: "text-[#5b40cf] font-semibold hover:underline",
										children: "https://sikareducationhub.com/"
									}),
									"."
								] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Usage Data:" }), " Data collected automatically, such as page duration and browser diagnostics."] })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "2. Collecting and Using Your Personal Information"
						}),
						/* @__PURE__ */ jsx("p", { children: "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You, including:" }),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc pl-6 space-y-2",
							children: [
								/* @__PURE__ */ jsx("li", { children: "Student & Parent Name" }),
								/* @__PURE__ */ jsx("li", { children: "WhatsApp / Mobile Phone Number" }),
								/* @__PURE__ */ jsx("li", { children: "Email Address" }),
								/* @__PURE__ */ jsx("li", { children: "City, State & Target Examination (NEET / IIT-JEE / Pre-Foundation)" })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "3. Zero Commercial Data Sharing Guarantee"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-semibold",
							children: "🔒 Strict Privacy Promise: Student and parent contact numbers submitted for admission inquiries are never sold, rented, or shared with third-party advertisers or external telemarketers. They are solely used by verified PCP Sikar academic counselors."
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "4. Security of Your Personal Data"
						}),
						/* @__PURE__ */ jsx("p", { children: "The security of Your Personal Data is important to Us. We employ industry-standard encryption, SSL protocols, and restricted staff access to protect all stored lead records and inquiry correspondence." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#2e0854] dark:text-white pt-4 border-t border-purple-100 dark:border-slate-800",
							children: "5. Contacting Our Data Privacy Team"
						}),
						/* @__PURE__ */ jsx("p", { children: "If You have any questions regarding this Privacy Policy or wish to request data modification or deletion, please reach out through our official counseling desk:" }),
						/* @__PURE__ */ jsxs("p", {
							className: "font-semibold text-slate-900 dark:text-white",
							children: [
								"Email: ",
								/* @__PURE__ */ jsx("a", {
									href: "mailto:pcpsikar@gmail.com",
									className: "text-[#5b40cf] hover:underline",
									children: "pcpsikar@gmail.com"
								}),
								" | Helpline: ",
								/* @__PURE__ */ jsx("a", {
									href: "tel:9610892222",
									className: "text-[#5b40cf] hover:underline",
									children: "9610-89-2222"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(BlogFooter, {})
		]
	});
}
//#endregion
export { Privacy as default };
