const puppeteer = require('puppeteer');
const url = 'http://quotes.toscrape.com/js/';

async function QuotesScraping() {
  try {
    const headlessBrowser = await puppeteer.launch({ headless: true });
    const newTab = await headlessBrowser.newPage();
    await newTab.goto(url);
    await newTab.waitForSelector('.quote');
 
    let scrapedQuotes = await newTab.evaluate(() => {
        let allQuoteDivs = document.querySelectorAll(".quote");
        let quotes= "";
        allQuoteDivs.forEach((quote) => {
          let text = quote.querySelector(".text").innerHTML;
          let author = quote.querySelector(".author").innerHTML;
          quotes += `${text} \n ${author} \n\n`;
        });
        return quotes;
      });
    console.log(scrapedQuotes);
    headlessBrowser.close();
    
  } catch (error) {
    console.error(error)
  }
}
 
QuotesScraping();