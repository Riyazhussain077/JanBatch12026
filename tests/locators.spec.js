const { test, expect } = require('@playwright/test');

//import {test,expect} from '@playwright/test'

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Click on Login Button           -> CSS

    await page.locator('#login2').click();
    await page.waitForTimeout(1000);
    //await page.click('#login2');

    // Provide Username                -> CSS

    await page.locator('[id="loginusername"]').fill('pavanol');
    await page.waitForTimeout(1000);
    //await page.fill('[id="loginusername"]' , 'pavanol');

    // Provide password                -> Xpath

    //await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.type('//input[@id="loginpassword"]', 'test@123');
    await page.waitForTimeout(1000);

    // Click Submit Button             -> Xpath

    //await page.locator('//button[text()="Log in"]').click();
    await page.click('//button[text()="Log in"]');
    await page.waitForTimeout(1000);

    // verify the welcome${name}       -> Xpath

    const demo = await page.locator('//a[@id="nameofuser"]');
    await expect(demo).toBeVisible();

    await page.waitForTimeout(2000);


});