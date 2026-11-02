const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:8000');
  await page.waitForSelector('nav');
  const buttons = await page.$$eval('button', btns => btns.map(b => b.innerText.trim()).filter(Boolean));
  console.log('Buttons:', buttons);
  await browser.close();
})();
