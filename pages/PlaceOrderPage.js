exports.PlaceOrderPage = class PlaceOrderPage {

    constructor(page) {
        this.page = page;
        this.placeOrderBtn = '//button[text()="Place Order"]';
        this.nameInput = '//input[@id="name"]';
        this.countryInput = '//input[@id="country"]';
        this.cityInput = '//input[@id="city"]';
        this.cardInput = '//input[@id="card"]';
        this.monthInput = '//input[@id="month"]';
        this.yearInput = '//input[@id="year"]';
        this.purchaseBtn = '//button[text()="Purchase"]';
        this.okBtn = '//button[text()="OK"]';
        this.confirmationBox = '.sweet-alert h2';
    };

    async placeOrder(name, country, city, card, month, year) {
        await this.page.locator(this.placeOrderBtn).click();
        await this.page.locator(this.nameInput).fill(name);
        await this.page.locator(this.countryInput).fill(country);
        await this.page.locator(this.cityInput).fill(city);
        await this.page.locator(this.cardInput).fill(card);
        await this.page.locator(this.monthInput).fill(month);
        await this.page.locator(this.yearInput).fill(year);
        await this.page.locator(this.purchaseBtn).click();
    };

    async verifyOrderPlaced() {
        const confirmationText = await this.page.locator(this.confirmationBox).textContent();
        console.log('Order Confirmation : ', confirmationText);
        await this.page.locator(this.okBtn).click();
        return confirmationText.includes('Thank you for your purchase!');
    }

}