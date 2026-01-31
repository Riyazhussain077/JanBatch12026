const { test, expect } = require('@playwright/test')

test('Handle Inputbox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page.locator('//input[@id="name"]')).toBeVisible();
    await expect(page.locator('//input[@id="name"]')).toBeEditable();
    await expect(page.locator('//input[@id="name"]')).toBeEnabled();
    await expect(page.locator('//input[@id="name"]')).toBeEmpty();

    await page.locator('//input[@id="name"]').fill("Good Afternoon");

    await page.waitForTimeout(2000);

});