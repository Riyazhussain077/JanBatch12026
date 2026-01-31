const { test, expect } = require('@playwright/test')

test('Page Screenshot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(4000);
    await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'HomePage.png' });

});

test('FullPage Screenshot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(4000);
    await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'FullPage.png', fullPage: true });

});


test.only('Element Screenshot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(4000);
    await page.locator('//div[@class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr"]//img[@alt="Samsung | Starting ₹7,499"]')
        .screenshot({ path: 'tests/screenshot/' + Date.now() + 'ElementScreenshot.png' });

});

