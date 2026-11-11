import { t as HomeFooter } from "./HomeFooter-D1PJw1_P.js";
import { jsx } from "react/jsx-runtime";
import "react";
//#region resources/js/NextComponents/BlogFooter.tsx
/**
* Unified Canonical Footer:
* Re-exporting HomeFooter so that all pages across the website 
* (About, Contact, Courses, Blog, Reviews, Privacy, Terms, etc.)
* share the exact same PCP Sikar Luxury Purple & Iris Brand Footer.
*/
function BlogFooter(props) {
	return /* @__PURE__ */ jsx(HomeFooter, { ...props });
}
//#endregion
export { BlogFooter as t };
