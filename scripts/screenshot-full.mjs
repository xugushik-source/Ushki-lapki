import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3100/en";
const out = process.argv[3] || "/tmp/screenshot.png";

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

// Scroll down in steps so whileInView animations fire in order, like a real visitor.
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 500) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(180);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("saved", out);
