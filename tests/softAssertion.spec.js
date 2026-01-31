const { test, expect } = require('@playwright/test')

test('Soft Assertion', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    // Hard Assertions..

    await expect(page).toHaveURL('https://ww.amazon.in/');
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    await expect(page.locator('//div[@id="nav-logo"]')).toBeVisible();

    // Soft Assertion

    await expect.soft(page).toHaveURL('https://ww.amazon.in/');
    await expect.soft(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    await expect.soft(page.locator('//div[@id="nav-logo"]')).toBeVisible();
    // const logo = await page.locator('//div[@id="nav-logo"]');
    // await expect(logo).toBeVisible();

});