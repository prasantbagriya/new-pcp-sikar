const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  await page.goto('http://127.0.0.1:8000');
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'C:/Users/1/.gemini/antigravity/brain/44ef8546-4c82-4a71-a23f-c4d289873e2c/home_loaded_check.png' });
  console.log('Screenshot taken');
  await browser.close();
})();
