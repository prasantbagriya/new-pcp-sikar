import { Link as Link$1 } from "./utils-BjQF728w.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown, MessageSquare, Search } from "lucide-react";
//#region resources/js/Pages/HomeComponents/FAQSection.jsx
var FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(0);
	const faqs = [
		{
			question: "What is Sikar Education Hub?",
			answer: "Sikar Education Hub is a trusted educational platform that helps students and parents find the best coaching institutes, top schools and colleges, JEE & NEET coaching, exam results, fees, admissions, and other education updates in Sikar, Rajasthan."
		},
		{
			question: "How can I find the best coaching institutes in Sikar?",
			answer: /* @__PURE__ */ jsx(Fragment, { children: "Compare the top JEE, NEET, CUET, Foundation, and Olympiad coaching institutes in Sikar based on verified results, faculty experience, fee structure, student reviews, facilities, and academic support before choosing." })
		},
		{
			question: "Which are the best coaching centers in Sikar?",
			answer: "The Sikar Coaching Center directory helps students explore and compare top coaching centers for JEE, NEET, and competitive exams based on courses, fees, track record, and infrastructure."
		},
		{
			question: "How to choose the best JEE coaching in Sikar?",
			answer: /* @__PURE__ */ jsx(Fragment, { children: "To choose the best JEE coaching in Sikar, compare past JEE Advanced and Main results, qualified faculty, quality study materials, regular test series, doubt clearing sessions, and hostel/campus environment." })
		},
		{
			question: "Which are the best coaching institutes in Sikar with fees?",
			answer: "You can compare the best coaching institutes in Sikar with their fee structures, scholarship test programs, faculty background, and student reviews directly on Sikar Education Hub."
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "pt-16 pb-16 md:pt-24 md:pb-20 bg-slate-50 dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "What is Sikar Education Hub?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Sikar Education Hub is a trusted educational platform that helps students and parents find the best coaching institutes, top schools and colleges, JEE & NEET coaching, exam results, fees, admissions, and other education updates in Sikar, Rajasthan."
							}
						},
						{
							"@type": "Question",
							"name": "How can I find the best coaching institutes in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Compare the top JEE, NEET, CUET, Foundation, and Olympiad coaching institutes in Sikar based on verified results, faculty experience, fee structure, student reviews, facilities, and academic support before choosing."
							}
						},
						{
							"@type": "Question",
							"name": "Which are the best coaching centers in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The Sikar Coaching Center directory helps students explore and compare top coaching centers for JEE, NEET, and competitive exams based on courses, fees, track record, and infrastructure."
							}
						},
						{
							"@type": "Question",
							"name": "How to choose the best JEE coaching in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "To choose the best JEE coaching in Sikar, compare past JEE Advanced and Main results, qualified faculty, quality study materials, regular test series, doubt clearing sessions, and hostel/campus environment."
							}
						},
						{
							"@type": "Question",
							"name": "Which are the best coaching institutes in Sikar with fees?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "You can compare the best coaching institutes in Sikar with their fee structures, scholarship test programs, faculty background, and student reviews directly on Sikar Education Hub."
							}
						},
						{
							"@type": "Question",
							"name": "Which are Top NEET Coachings in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Top NEET coaching institutes in Sikar include renowned institutions known for rigorous medical preparation, experienced doctor/expert faculty, disciplined routine, and high selection rates."
							}
						},
						{
							"@type": "Question",
							"name": "Why do students choose coaching in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Students choose coaching in Sikar for disciplined study culture, national-level faculty, integrated schooling and hostel facilities, competitive peer environment, and personalized attention."
							}
						},
						{
							"@type": "Question",
							"name": "Which RBSE schools are considered among the best in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The best RBSE schools in Sikar can be explored through their board merit records, modern campus, qualified teachers, and dedicated preparation for competitive exams."
							}
						},
						{
							"@type": "Question",
							"name": "What makes a CBSE school one of the best in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The best CBSE schools in Sikar combine strong academic focus with experienced educators, modern smart classrooms, sports infrastructure, and holistic student development."
							}
						},
						{
							"@type": "Question",
							"name": "Where can students prepare for competitive exams in Sikar?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Students can find premier coaching institutes in Sikar offering preparation for NEET, JEE, NDA, CUET, Foundation, and Olympiad exams."
							}
						}
					]
				}) }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" }), /* @__PURE__ */ jsx("div", { className: "absolute top-48 -left-24 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 lg:sticky lg:top-32 space-y-8",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-orange-100/60 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/40 text-[#f2650b] dark:text-orange-400 text-xs font-bold tracking-wider mb-6",
								children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4" }), " Got Questions?"]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl md:text-5xl font-extrabold text-[#082755] dark:text-white mb-6 tracking-tight leading-tight",
								children: ["Frequently Asked ", /* @__PURE__ */ jsx("span", {
									className: "text-[#f2650b]",
									children: "Questions"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed",
								children: "Everything you need to know about coaching institutes, education, and living in Sikar. Can't find the answer you're looking for?"
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-slate-200 dark:border-zinc-700 shadow-sm flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0",
								children: /* @__PURE__ */ jsx(Search, { className: "w-6 h-6 text-[#f2650b] dark:text-orange-400" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-bold text-slate-900 dark:text-white mb-1",
									children: "Still have questions?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-slate-500 dark:text-zinc-400 mb-4",
									children: "Chat with our educational counselors for personalized guidance."
								}),
								/* @__PURE__ */ jsx(Link$1, {
									href: "/contact",
									className: "bg-gradient-to-r from-[#f2650b] to-[#ea580c] hover:from-[#ea580c] text-white font-bold rounded-lg px-5 py-2 text-sm transition-transform hover:scale-105 inline-block shadow-sm",
									children: "Contact Support"
								})
							] })]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7 space-y-2.5",
						children: faqs.map((faq, index) => {
							const isOpen = openIndex === index;
							return /* @__PURE__ */ jsxs("div", {
								className: `group border rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? "bg-white dark:bg-zinc-800 shadow-xl shadow-slate-900/5 dark:shadow-none border-orange-300 dark:border-orange-500/50 ring-1 ring-orange-200 dark:ring-orange-500/20" : "bg-white/60 dark:bg-zinc-800/60 border-slate-200 dark:border-zinc-700 hover:border-orange-300 dark:hover:border-zinc-600 hover:bg-white dark:hover:bg-zinc-800 backdrop-blur-sm"}`,
								children: [/* @__PURE__ */ jsxs("button", {
									className: "w-full px-4 py-3 md:px-4 md:py-3.5 flex items-center justify-between text-left focus:outline-none focus:ring-0 ring-0 border-none bg-transparent cursor-pointer",
									onClick: () => setOpenIndex(isOpen ? null : index),
									"aria-expanded": isOpen,
									children: [/* @__PURE__ */ jsx("span", {
										className: `font-semibold text-[15px] sm:text-[16px] pr-6 transition-colors duration-300 ${isOpen ? "text-[#082755] dark:text-orange-400" : "text-slate-800 dark:text-zinc-200 group-hover:text-[#f2650b] dark:group-hover:text-orange-400"}`,
										children: faq.question
									}), /* @__PURE__ */ jsx("div", {
										className: `flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-[#f2650b] text-white rotate-180 shadow-md shadow-orange-500/25" : "bg-slate-100 dark:bg-zinc-700 text-slate-500 dark:text-zinc-400 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/30 group-hover:text-[#f2650b]"}`,
										children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" })
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: `overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
									children: /* @__PURE__ */ jsxs("div", {
										className: "px-4 pb-3 md:px-4 md:pb-4",
										children: [/* @__PURE__ */ jsx("div", { className: "w-full h-px bg-slate-200 dark:bg-zinc-700 mb-2" }), /* @__PURE__ */ jsx("p", {
											className: "text-slate-600 dark:text-zinc-400 leading-relaxed text-[14px] sm:text-[15px] m-0",
											children: faq.answer
										})]
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
//#endregion
export { FAQSection as default };
