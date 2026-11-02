const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/1/.gemini/antigravity/brain/6b1a0941-f24b-4755-b8d5-23762b59d6b8';

(async () => {
    console.log('Testing and verifying navbar, marquee, and vertical reviews...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    try {
        await page.goto('http://127.0.0.1:8000', { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(1500);

        // 1. Verify and capture Mega Menu open state
        console.log('Hovering over "Institutes" to test mega menu text...');
        const institutesBtn = await page.$('nav button:has-text("Institutes")');
        if (institutesBtn) {
            await institutesBtn.hover();
            await page.waitForTimeout(800);
            await page.screenshot({ path: path.join(ARTIFACT_DIR, 'nav_megamenu_verified.png') });
            console.log('Captured nav_megamenu_verified.png');
        }

        // 2. Unhover and capture Toppers Horizontal Marquee & Stats
        await page.mouse.move(0, 0);
        await page.evaluate(() => window.scrollTo(0, 380));
        await page.waitForTimeout(1000);
        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toppers_horizontal_marquee.png') });
        console.log('Captured toppers_horizontal_marquee.png');

        // 3. Scroll to Reviews Section and capture the 3-Column Vertical Scrolling
        console.log('Scrolling to Reviews section...');
        await page.evaluate(() => {
            const el = document.getElementById('reviews');
            if (el) el.scrollIntoView();
        });
        await page.waitForTimeout(2000); // Wait for animation progress
        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'reviews_vertical_3col_marquee.png') });
        console.log('Captured reviews_vertical_3col_marquee.png');

        // 4. Scroll to Editorial Feed to check PCP purple/gold theme
        await page.evaluate(() => window.scrollBy(0, 1600));
        await page.waitForTimeout(1000);
        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'feed_color_theme_verified.png') });
        console.log('Captured feed_color_theme_verified.png');

        console.log('Verification finished successfully!');
    } catch (err) {
        console.error('Error during verification:', err);
    } finally {
        await browser.close();
    }
})();
