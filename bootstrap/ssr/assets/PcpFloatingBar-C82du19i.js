import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowUp, CheckCircle, MessageCircle, Phone, Send, Sparkles, X } from "lucide-react";
//#region resources/js/Pages/HomeComponents/PcpFloatingBar.jsx
function PcpFloatingBar({ onOpenModal }) {
	const [showTop, setShowTop] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [course, setCourse] = useState("NEET-UG");
	useEffect(() => {
		const handleScroll = () => {
			setShowTop(window.scrollY > 400);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!name || !phone) return;
		setSubmitted(true);
		setTimeout(() => {
			setIsModalOpen(false);
			setSubmitted(false);
			setName("");
			setPhone("");
		}, 3e3);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5",
		children: [
			showTop && /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: scrollToTop,
				"aria-label": "Scroll to top",
				className: "w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105",
				children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-5 h-5" })
			}),
			/* @__PURE__ */ jsxs("a", {
				href: "https://wa.me/919610892222?text=Hello%20PCP%20Sikar,%20I%20want%20to%20know%20about%20Admissions%20and%20Scholarship%202026-27.",
				target: "_blank",
				rel: "noreferrer",
				className: "flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-200 font-bold text-xs hover:scale-105",
				title: "Chat with Senior Counselor on WhatsApp",
				children: [/* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 sm:w-4 sm:h-4 fill-white" }), /* @__PURE__ */ jsx("span", {
					className: "hidden sm:inline",
					children: "WhatsApp Help"
				})]
			}),
			/* @__PURE__ */ jsxs("a", {
				href: "tel:9610892222",
				className: "flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-[#ffc107] hover:bg-[#ffd600] text-black shadow-2xl transition-all duration-200 font-extrabold text-xs hover:scale-105",
				title: "Call PCP Sikar Helpline",
				children: [/* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 sm:w-4 sm:h-4 fill-black text-black" }), /* @__PURE__ */ jsx("span", {
					className: "hidden sm:inline",
					children: "Call 9610-89-2222"
				})]
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => setIsModalOpen(true),
				className: "hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2e1065] hover:bg-[#3b0764] text-white shadow-2xl transition-all duration-200 font-extrabold text-xs border border-purple-400/40 hover:scale-105 cursor-pointer",
				children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-[#ffc107]" }), /* @__PURE__ */ jsx("span", { children: "Admission 2026-27" })]
			})
		]
	}), isModalOpen && /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-2xl text-slate-900",
			children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setIsModalOpen(false),
					className: "absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors",
					children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mb-4",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "px-2.5 py-0.5 rounded-md bg-[#ffc107] text-black text-[10px] font-black uppercase tracking-wider mb-2 inline-block",
							children: "Quick Callback Request"
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xl font-black text-slate-900",
							children: "Connect with Senior Counselor"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-500 mt-0.5",
							children: "Enter your details and our team will get in touch immediately."
						})
					]
				}),
				submitted ? /* @__PURE__ */ jsxs("div", {
					className: "py-6 text-center space-y-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center",
							children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6" })
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "text-base font-bold text-slate-900",
							children: "Request Received!"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-xs text-slate-600",
							children: [
								"We will contact you shortly on ",
								phone,
								"."
							]
						})
					]
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit: handleFormSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "block text-xs font-semibold text-slate-700 mb-1",
							children: "Your Name *"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Full name",
							className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-[#2e1065] focus:ring-1 focus:ring-[#2e1065] transition-all"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "block text-xs font-semibold text-slate-700 mb-1",
							children: "Mobile Number *"
						}), /* @__PURE__ */ jsx("input", {
							type: "tel",
							required: true,
							pattern: "[0-9]{10}",
							maxLength: 10,
							value: phone,
							onChange: (e) => setPhone(e.target.value.replace(/\D/g, "")),
							placeholder: "10-digit mobile number",
							className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-[#2e1065] focus:ring-1 focus:ring-[#2e1065] transition-all"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "block text-xs font-semibold text-slate-700 mb-1",
							children: "Course Looking For"
						}), /* @__PURE__ */ jsxs("select", {
							value: course,
							onChange: (e) => setCourse(e.target.value),
							className: "w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-[#2e1065] transition-all",
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "NEET-UG",
									children: "NEET-UG (Medical)"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "IIT-JEE",
									children: "IIT-JEE (Engineering)"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "Pre-Foundation",
									children: "Pre-Foundation (7th-10th)"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "Dropper",
									children: "Dropper / Repeater Batch"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("div", {
							className: "pt-2",
							children: /* @__PURE__ */ jsxs("button", {
								type: "submit",
								className: "btn-brand-yellow w-full py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md",
								children: [/* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "Request Immediate Call" })]
							})
						})
					]
				})
			]
		})
	})] });
}
//#endregion
export { PcpFloatingBar as default };
