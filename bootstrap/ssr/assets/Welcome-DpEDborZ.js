import { n as GlobalNavbar } from "./GlobalNavbar-qw3J78hM.js";
import { t as HomeFooter } from "./HomeFooter-D1PJw1_P.js";
import "./HomeNavbar-DHTI60cE.js";
import PcpBlogUpdatesSection from "./PcpBlogUpdatesSection-D5Nud3qs.js";
import PcpCoursesSection from "./PcpCoursesSection-Dn60Y6LF.js";
import PcpFaqSection from "./PcpFaqSection-B5hfmR20.js";
import PcpGalleryShowcase from "./PcpGalleryShowcase-DufQ7uhe.js";
import PcpHeroSection from "./PcpHeroSection-C-xeIMu5.js";
import PcpJaipurLaunchSection from "./PcpJaipurLaunchSection-yxXhLa1V.js";
import PcpJourneySection from "./PcpJourneySection-B4ry74_L.js";
import PcpResultsOrbitSection from "./PcpResultsOrbitSection-CtpUJ44K.js";
import PcpReviewsSection from "./PcpReviewsSection-Co2U9s_G.js";
import PcpServicesSection from "./PcpServicesSection-CcxV8A_V.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
//#region resources/js/Pages/Welcome.jsx
function Welcome(props) {
	const { reviewsData = null, global_nav = [] } = props;
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("is-revealed");
			});
		}, {
			threshold: .05,
			rootMargin: "0px 0px -20px 0px"
		});
		document.querySelectorAll(".reveal-scroll").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: "relative bg-white text-slate-900 min-h-screen font-sans selection:bg-purple-800 selection:text-white overflow-x-clip",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 flex flex-col min-h-screen",
			children: [
				/* @__PURE__ */ jsx(GlobalNavbar, {
					global_nav,
					isStandalone: true
				}),
				/* @__PURE__ */ jsxs("main", {
					className: "flex-1",
					children: [
						/* @__PURE__ */ jsx(PcpHeroSection, {}),
						/* @__PURE__ */ jsx(PcpJaipurLaunchSection, {}),
						/* @__PURE__ */ jsx("div", {
							className: "cv-auto",
							children: /* @__PURE__ */ jsx(PcpServicesSection, {})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cv-auto",
							children: /* @__PURE__ */ jsx(PcpResultsOrbitSection, {})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cv-auto",
							children: /* @__PURE__ */ jsx(PcpCoursesSection, {})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cv-auto",
							children: /* @__PURE__ */ jsx(PcpJourneySection, {})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cv-auto",
							children: /* @__PURE__ */ jsx(PcpBlogUpdatesSection, {})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cv-auto",
							children: /* @__PURE__ */ jsx(PcpReviewsSection, { initialData: reviewsData })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "relative z-30 overflow-visible",
							children: /* @__PURE__ */ jsx(PcpGalleryShowcase, {})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cv-auto",
							children: /* @__PURE__ */ jsx(PcpFaqSection, {})
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "cv-auto",
					children: /* @__PURE__ */ jsx(HomeFooter, { global_nav })
				})
			]
		})
	});
}
//#endregion
export { Welcome as default };
