const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Desktop Light Mode
  await page.setViewportSize({ width: 1280, height: 1024 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(5000); // Wait for animations
  await page.screenshot({ path: '/home/jules/verification/desktop_light.png', fullPage: true });

  // Mobile Light Mode
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: '/home/jules/verification/mobile_light.png', fullPage: true });

  await browser.close();
})();
