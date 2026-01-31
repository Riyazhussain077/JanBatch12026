const { test, expect } = require('@playwright/test')

test('Home page Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click('//button[text()="Log in"]');

    // Home Page
    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

    // Logout Page

    await page.locator('//a[@id="logout2"]').click();
});

test('Add Products to cart', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click('//button[text()="Log in"]');

    // Add product to cart

    await page.locator('//a[text()="Sony xperia z5"]').click();
    await page.locator('//a[text()="Add to cart"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    });

    // Logout Page

    await page.locator('//a[@id="logout2"]').click();


});