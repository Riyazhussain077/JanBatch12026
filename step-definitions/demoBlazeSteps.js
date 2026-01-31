const {Given , When , Then} = require ('@cucumber/cucumber')
const {expect} = require ('@playwright/test');

Given('user launches the DemoBlaze application' , async function () {
    await this.page.goto('https://www.demoblaze.com/');
});

When('user selects a product' , async function () {
    await this.page.locator('//a[text()="Sony xperia z5"]').click();
});

When('user adds the product to cart' , async function () {
    await this.page.locator('//a[text()="Add to cart"]').click();
    this.page.once('dialog' , dialog => dialog.accept());
});

Then('product should be added successfully' ,async function () {
    await this.page.click('#cartur');
    await expect(this.page).toHaveURL('https://www.demoblaze.com/cart.html')
});
