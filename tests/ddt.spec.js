const { test, expect } = require('@playwright/test')

// Test Data 
const loginData = [
    { username: 'pavanol', password: 'test@123' },
    { username: '12234232', password: '3123124' },
    { username: 'wronguser1', password: 'wrongpass1' }
];

for (const data of loginData) {
    test(`Login test with multiple data : ${data.username}`, async ({ page }) => {

        await page.goto('https://www.demoblaze.com/');

        await page.locator('#login2').click();

        await page.fill('#loginusername', data.username);
        await page.fill('#loginpassword', data.password);

        await page.click('//button[text()="Log in"]');

        // For Valid user -> expect logout to be visible
        if (data.username === 'pavanol' && data.password === 'test@123') {
            const logoutLink = page.locator('//a[text()="Log out"]');
            await expect(logoutLink).toBeVisible({ timeout: 5000 });
        } else {
            page.on('dialog', async (dialog) => {
                console.log(`Dialog message : ${dialog.message()}`);
                await dialog.accept();
            });
        }
        await page.waitForTimeout(3000);

    });
}