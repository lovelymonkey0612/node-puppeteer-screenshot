const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://oxylabs.io/', {timeout: 0});
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.screenshot({'path': 'oxylabs_js.png'})
  await page.pdf({path: 'oxylabs.pdf', format: 'A4'});

//   await page.goto("https://en.wikipedia.org/wiki/Web_scraping");
 
//   title = await page.evaluate(() => {
//     return document.querySelector("#firstHeading").textContent.trim();
//   });
//   console.log(title);

  await browser.close();
}

main();