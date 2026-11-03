import { n as GlobalNavbar } from "./GlobalNavbar-qw3J78hM.js";
import { t as BlogFooter } from "./BlogFooter-BCC4IHxH.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Building2, CheckCircle2, MapPin, MessageSquare, Phone, Send, ShieldCheck, Sparkles } from "lucide-react";
//#region resources/js/Pages/Static/Contact.jsx
function Contact() {
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		student_name: "",
		phone: "",
		course: "NEET-UG Medical",
		campus: "Palwas Road Residential HQ, Sikar",
		message: ""
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.student_name.trim() || !formData.phone.trim()) return;
		setIsSubmitting(true);
		try {
			const basePath = typeof window !== "undefined" && window.BASE_PATH ? window.BASE_PATH : "";
			if ((await (await fetch(`${basePath}/api/inquiries`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
					"X-CSRF-TOKEN": document.querySelector("meta[name=\"csrf-token\"]")?.getAttribute("content") || ""
				},
				body: JSON.stringify({
					student_name: formData.student_name,
					phone: formData.phone,
					course: `${formData.course} (${formData.campus})`,
					business_name: "PCP Sikar",
					source: "contact_page_form",
					message: `Preferred Campus: ${formData.campus} | Query: ${formData.message}`
				})
			})).json()).success) setSubmitted(true);
		} catch (err) {
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#faf7fe] dark:bg-[#070d1e] min-h-screen flex flex-col font-sans selection:bg-purple-800 selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Contact Us & Campus Helpline | PCP Sikar & Sikar Education Hub" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Get in touch with PCP Sikar and Sikar Education Hub. Palwas Road HQ, Piprali Road campus, and Jaipur center helplines, location maps, and admission counselor contact."
			})] }),
			/* @__PURE__ */ jsx(GlobalNavbar, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#120326] text-white overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#5b40cf]/25 rounded-full blur-[140px] pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-20 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 text-xs font-semibold text-purple-200/80 mb-6 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md",
								children: [
									/* @__PURE__ */ jsx(Link, {
										href: "/",
										className: "hover:text-amber-300 transition-colors",
										children: "Home"
									}),
									/* @__PURE__ */ jsx("span", { children: "›" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-amber-300 font-bold",
										children: "Contact & Counseling"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-widest mb-4 shadow-sm",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ jsx("span", { children: "24/7 ADMISSION HELPLINE & CAMPUS VISITS" })]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-normal leading-snug max-w-4xl mx-auto mb-4",
								children: ["We're Here to Guide Your ", /* @__PURE__ */ jsx("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400",
									children: "Medical & IIT Journey."
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-purple-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal",
								children: "Visit our 100+ acre residential campus in Sikar, connect with experienced faculty counselors, or get instant batch and scholarship guidance over phone and WhatsApp."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-md mx-auto",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "tel:+919610892222",
									className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all no-underline text-center",
									children: [
										/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-slate-950" }),
										/* @__PURE__ */ jsx("span", {
											className: "sm:hidden",
											children: "Call Helpline"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "hidden sm:inline",
											children: "Call Helpline: 9610-89-2222"
										})
									]
								}), /* @__PURE__ */ jsxs("a", {
									href: "https://wa.me/919610892222?text=Hello%20PCP%20Sikar,%20I%20want%20to%20know%20more%20about%20admissions.",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all no-underline text-center",
									children: [
										/* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4 text-white" }),
										/* @__PURE__ */ jsx("span", {
											className: "sm:hidden",
											children: "WhatsApp"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "hidden sm:inline",
											children: "Chat on WhatsApp"
										})
									]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative z-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 -mt-10 sm:-mt-12",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5",
					children: [
						{
							title: "Palwas Road Headquarters",
							category: "Main Residential Campus",
							phone: "9610-89-2222",
							phoneSec: "9610-61-2222",
							email: "pcpsikar@gmail.com",
							address: "Palwas Road, Sikar (Raj.) 332001",
							badge: "100+ Acre Campus"
						},
						{
							title: "Piprali Road Classroom Wing",
							category: "Classroom & Test Center",
							phone: "9610-53-2222",
							phoneSec: "9610-83-2222",
							email: "pcppalwasroad@gmail.com",
							address: "Elenza Heights, Piprali Road, Sikar",
							badge: "Coaching Hub"
						},
						{
							title: "Jaipur Gopalpura Center",
							category: "Metro Target Division",
							phone: "9610-57-2222",
							phoneSec: "9610-83-2222",
							email: "pcpjaipur1@gmail.com",
							address: "Balaji Tower, Gopalpura Bypass, Jaipur",
							badge: "New 2026 Center"
						},
						{
							title: "Central Admissions Desk",
							category: "24/7 Student Counseling",
							phone: "9610-89-2222",
							phoneSec: "1800-123-2222",
							email: "info@sikareducationhub.com",
							address: "Open 8:00 AM to 8:00 PM (All 7 Days)",
							badge: "Quick Helpline"
						}
					].map((camp, idx) => /* @__PURE__ */ jsxs("div", {
						className: "bg-white dark:bg-[#0c1428] rounded-2xl p-5 border border-purple-100/90 dark:border-slate-800 shadow-lg shadow-purple-950/5 hover:border-[#5b40cf] hover:shadow-xl transition-all duration-300 flex flex-col justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 text-[#2e0854] text-[10px] font-bold uppercase tracking-wider border border-purple-200",
									children: [/* @__PURE__ */ jsx(Building2, { className: "w-3 h-3 text-[#5b40cf]" }), /* @__PURE__ */ jsx("span", { children: camp.badge })]
								}), /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" })]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-extrabold text-slate-900 dark:text-white text-base mb-1",
								children: camp.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-[#5b40cf] font-semibold mb-3",
								children: camp.category
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-start gap-1.5 leading-relaxed",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-[#5b40cf] shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: camp.address })]
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "pt-3 border-t border-purple-50 dark:border-slate-800 space-y-1.5 text-xs",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-slate-500",
									children: "Helpline:"
								}), /* @__PURE__ */ jsx("a", {
									href: `tel:${camp.phone.replace(/-/g, "")}`,
									className: "font-bold text-[#2e0854] dark:text-purple-300 hover:text-[#5b40cf]",
									children: camp.phone
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-slate-500",
									children: "Email:"
								}), /* @__PURE__ */ jsx("a", {
									href: `mailto:${camp.email}`,
									className: "font-medium text-slate-700 dark:text-slate-300 hover:text-[#5b40cf] truncate max-w-[150px]",
									children: camp.email
								})]
							})]
						})]
					}, idx))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 sm:py-20 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex-grow",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 space-y-8",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#2e0854] text-xs font-bold uppercase tracking-wider mb-3 border border-purple-200",
									children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-[#5b40cf]" }), "Direct Admission Desk"]
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-normal leading-snug",
									children: ["Plan Your Campus Visit or ", /* @__PURE__ */ jsx("span", {
										className: "text-transparent bg-clip-text bg-gradient-to-r from-[#2e0854] to-[#5b40cf]",
										children: "Request Counseling."
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed",
									children: "Our senior academic counselors provide transparent evaluation of your child's stream selection, dropper batch eligibility, and hostel arrangements."
								})
							] }),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3.5",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider",
									children: "What to expect when you contact us:"
								}), [
									"Direct consultation with experienced NEET/JEE subject mentors.",
									"Complete syllabus roadmap & fee structure explanation.",
									"Hostel accommodation & steam mess walk-through booking.",
									"Prince Olympiad & P-SAT scholarship evaluation (up to 100% waiver).",
									"Zero pressure, honest academic counseling based on aptitude."
								].map((item, idx) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200",
										children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#5b40cf]" })
									}), /* @__PURE__ */ jsx("span", { children: item })]
								}, idx))]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl p-6 bg-gradient-to-br from-[#2e0854] to-[#5b40cf] text-white shadow-xl shadow-purple-950/10",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "font-black text-lg mb-1",
										children: "Have Real Doubts About Hostels?"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-purple-100 text-xs sm:text-sm mb-4 leading-relaxed font-normal",
										children: "Read our full parent doubts breakdown covering mobile phone restrictions, 12-hour faculty doubt counters, and weekly dropper batches."
									}),
									/* @__PURE__ */ jsxs(Link, {
										href: "/courses/neet-ug#faq",
										className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#2e0854] hover:bg-amber-300 font-bold text-xs transition-colors no-underline shadow-sm",
										children: [/* @__PURE__ */ jsx("span", { children: "Read Parent FAQs" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ jsx("div", {
							className: "bg-white dark:bg-[#0c1428] rounded-3xl p-6 sm:p-10 border border-purple-100 dark:border-slate-800 shadow-xl shadow-purple-950/5",
							children: submitted ? /* @__PURE__ */ jsxs("div", {
								className: "text-center py-12 space-y-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-200 shadow-sm",
										children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8" })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl font-black text-slate-900 dark:text-white",
										children: "Inquiry Received!"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed",
										children: [
											"Thank you, ",
											/* @__PURE__ */ jsx("strong", { children: formData.student_name }),
											". A senior academic counselor from PCP Sikar will call you shortly on ",
											/* @__PURE__ */ jsx("strong", { children: formData.phone }),
											"."
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pt-4 flex justify-center gap-3",
										children: [/* @__PURE__ */ jsx("button", {
											onClick: () => setSubmitted(false),
											className: "px-5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#2e0854] font-bold text-xs border border-purple-200 transition-colors",
											children: "Submit Another Query"
										}), /* @__PURE__ */ jsxs("a", {
											href: "https://wa.me/919610892222",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors no-underline flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "Chat on WhatsApp" })]
										})]
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								onSubmit: handleSubmit,
								className: "space-y-5",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold text-[#5b40cf] uppercase tracking-wider block mb-1",
											children: "Direct Student Form"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "text-2xl font-black text-slate-900 dark:text-white tracking-normal",
											children: "Send Us An Inquiry"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-slate-500 mt-1",
											children: "Fill your details below. We typically respond within 15 to 30 minutes."
										})
									] }),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1",
											children: "Student Full Name *"
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											required: true,
											value: formData.student_name,
											onChange: (e) => setFormData({
												...formData,
												student_name: e.target.value
											}),
											placeholder: "e.g. Aman Sharma",
											className: "w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1",
											children: "WhatsApp Mobile Number *"
										}), /* @__PURE__ */ jsx("input", {
											type: "tel",
											required: true,
											value: formData.phone,
											onChange: (e) => setFormData({
												...formData,
												phone: e.target.value
											}),
											placeholder: "10-digit mobile number",
											className: "w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1",
											children: "Course of Interest"
										}), /* @__PURE__ */ jsxs("select", {
											value: formData.course,
											onChange: (e) => setFormData({
												...formData,
												course: e.target.value
											}),
											className: "w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "NEET-UG Medical",
													children: "NEET-UG Medical (11th, 12th & Target)"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "IIT-JEE Engineering",
													children: "IIT-JEE Engineering (Main + Advanced)"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Pre-Foundation",
													children: "Pre-Foundation (Class 5th - 10th)"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "NDA Defence Academy",
													children: "NDA & Defence Academy (Prince)"
												})
											]
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1",
											children: "Preferred Campus"
										}), /* @__PURE__ */ jsxs("select", {
											value: formData.campus,
											onChange: (e) => setFormData({
												...formData,
												campus: e.target.value
											}),
											className: "w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "Palwas Road Residential HQ, Sikar",
													children: "Palwas Road Residential HQ, Sikar"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Piprali Road Campus, Sikar",
													children: "Piprali Road Campus, Sikar"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Jaipur Gopalpura Bypass Center",
													children: "Jaipur Gopalpura Bypass Center"
												})
											]
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1",
										children: "Your Question or Hostel Requirements (Optional)"
									}), /* @__PURE__ */ jsx("textarea", {
										rows: 4,
										value: formData.message,
										onChange: (e) => setFormData({
											...formData,
											message: e.target.value
										}),
										placeholder: "Ask about batch timings, hostel accommodation, dropper batches, or fee concessions...",
										className: "w-full px-4 py-2.5 rounded-xl border border-purple-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-[#5b40cf] focus:ring-2 focus:ring-purple-100 outline-none shadow-2xs"
									})] }),
									/* @__PURE__ */ jsx("button", {
										type: "submit",
										disabled: isSubmitting,
										className: "w-full py-3.5 px-6 rounded-xl font-black text-sm bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#492ea3] text-white shadow-lg shadow-purple-950/20 hover:shadow-purple-950/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70",
										children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Submitting Details..." })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", { children: "Submit Counseling Inquiry" }), /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })] })
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-center pt-1",
										children: /* @__PURE__ */ jsx("span", {
											className: "text-[11px] text-slate-500 font-medium",
											children: "🔒 Your contact information is 100% private. PCP Sikar never shares student phone numbers."
										})
									})
								]
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(BlogFooter, {})
		]
	});
}
//#endregion
export { Contact as default };
