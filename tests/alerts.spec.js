const { test, expect } = require('@playwright/test')

test.skip('Alert with OK', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.locator('//button[text()="Simple Alert"]').click();
    await page.waitForTimeout(2000);

});

test.skip('Confirm Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // close by using OK button
        //await dialog.dismiss(); // close by using Cancel Button
    });

    await page.locator('//button[text()="Confirmation Alert"]').click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
    await page.waitForTimeout(2000);

});

test('Prompt Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Ajay'); // close by using OK button
        //await dialog.dismiss(); // close by using Cancel Button
    });

    await page.locator('//button[text()="Prompt Alert"]').click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Ajay! How are you today?')
    await page.waitForTimeout(2000);

});