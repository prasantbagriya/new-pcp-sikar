import React, { useEffect } from 'react';
import GlobalNavbar from './HomeComponents/HomeNavbar';
import BlogFooter from './HomeComponents/HomeFooter';
import PcpHeroSection from './HomeComponents/PcpHeroSection';
import PcpJaipurLaunchSection from './HomeComponents/PcpJaipurLaunchSection';
import PcpServicesSection from './HomeComponents/PcpServicesSection';
import PcpResultsOrbitSection from './HomeComponents/PcpResultsOrbitSection';
import PcpCoursesSection from './HomeComponents/PcpCoursesSection';
import PcpJourneySection from './HomeComponents/PcpJourneySection';
import PcpBlogUpdatesSection from './HomeComponents/PcpBlogUpdatesSection';
import PcpReviewsSection from './HomeComponents/PcpReviewsSection';
import PcpGalleryShowcase from './HomeComponents/PcpGalleryShowcase';
import PcpFaqSection from './HomeComponents/PcpFaqSection';

export default function Welcome(props) {
    const { 
        reviewsData = null,
        global_nav = []
    } = props;

    // Aquafix-Style Global Smooth Scroll Reveal System across entire page
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                }
            });
        }, { 
            threshold: 0.05, 
            rootMargin: '0px 0px -20px 0px' 
        });

        // Query all reveal elements and observe them
        const elements = document.querySelectorAll('.reveal-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative bg-white text-slate-900 min-h-screen font-sans selection:bg-purple-800 selection:text-white overflow-x-clip">
            
            <div className="relative z-10 flex flex-col min-h-screen">
                
                {/* Global Brand Header / Navbar (Crisp White & Compact Height) */}
                <GlobalNavbar global_nav={global_nav} isStandalone={true} />
                
                <main className="flex-1">
                    {/* 1. Hero Section with Aquafix-Style Dual Vertical Scrolling Marquees */}
                    <PcpHeroSection />

                    {/* 2. PCP Jaipur Grand Launch (Gopalpura Bypass Center - Official Launch Showcase) */}
                    <PcpJaipurLaunchSection />

                    {/* 3. Aquafix-Style "Our Services" (Academic Programs & Offerings in Brand Theme) */}
                    <div className="cv-auto">
                        <PcpServicesSection />
                    </div>

                    {/* 3. Historic National Results & Benchmarks - Interactive Orbital Showcase */}
                    <div className="cv-auto">
                        <PcpResultsOrbitSection />
                    </div>

                    {/* 4. Flagship Academic Programs & Courses - Stage Ellipse Showcase (Matching Geometric Architecture) */}
                    <div className="cv-auto">
                        <PcpCoursesSection />
                    </div>

                    {/* 5. About Prince Eduhub & PCP Sikar - Our Journey (Fyers Reference) */}
                    <div className="cv-auto">
                        <PcpJourneySection />
                    </div>

                    {/* 6. PCP Newsroom, Blog Insights & Live Bulletins (Dual Slide & Live Pulse Architecture) */}
                    <div className="cv-auto">
                        <PcpBlogUpdatesSection />
                    </div>

                    {/* 7. Live Google Reviews (Continuous Stream) - 5 Columns Real Google Verified Reviews */}
                    <div className="cv-auto">
                        <PcpReviewsSection initialData={reviewsData} />
                    </div>

                    {/* 6. Campus & Student Life Spaces Showcase (Noho-style Ribbon with Custom Scale Cursor & Zoom) */}
                    <div className="cv-auto">
                        <PcpGalleryShowcase />
                    </div>

                    {/* 7. Frequently Asked Questions (Sikar Education Hub Design & Theme) */}
                    <div className="cv-auto">
                        <PcpFaqSection />
                    </div>
                </main>

                {/* Comprehensive Brand Footer */}
                <div className="cv-auto">
                    <BlogFooter global_nav={global_nav} />
                </div>
            </div>
        </div>
    );
}
