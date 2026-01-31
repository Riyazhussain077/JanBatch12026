const { test, expect } = require('@playwright/test')

test('Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select the option from the dropdown

    await page.locator('#country').selectOption({ label: 'Australia' }); // label in visible text
    await page.locator('#country').selectOption('India'); // by visible text
    await page.locator('#country').selectOption({ value: 'usa' }); // by using value
    await page.locator('#country').selectOption({ index: 8 }); // by using index
    await page.selectOption('#country', 'Canada'); // by text..

    // Assertions

    // 1) Check number of options in the dropdown       - method 1

    const option = await page.locator('#country option');
    await expect(option).toHaveCount(10);

    // 2) Check number of options in the dropdown       - method 2

    const options = await page.$$('#country option');
    console.log("Number of options :", options.length);
    await expect(options.length).toBe(10);

    // 3) Check the presence of options in the dropdown   - method 1

    const content = await page.locator('#country').textContent();
    await expect(content.includes('Chennai')).toBeFalsy();

    await page.waitForTimeout(3000);
});