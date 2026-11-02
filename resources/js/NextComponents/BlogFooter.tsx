// @ts-nocheck
"use client"

import React from "react"
import HomeFooter from "../Pages/HomeComponents/HomeFooter"

/**
 * Unified Canonical Footer:
 * Re-exporting HomeFooter so that all pages across the website 
 * (About, Contact, Courses, Blog, Reviews, Privacy, Terms, etc.)
 * share the exact same PCP Sikar Luxury Purple & Iris Brand Footer.
 */
export default function BlogFooter(props) {
  return <HomeFooter {...props} />;
}
