const { test, expect } = require('@playwright/test')

test('Handle Frame', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Frames

    const allFrame = await page.frames();
    console.log("Number of frames: ", allFrame.length);

    // Approach 1 : using name or url..

    //const frameName = await page.frame("frameName"); // if name is present, we can use this method..
    const frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });
    await frame1.locator('[name="mytext1"]').fill("Hello All..");

    // Approach 2 : Using frameLocator

    const inputBox = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
    inputBox.fill('Good Evening');

    await page.waitForTimeout(2000);

});