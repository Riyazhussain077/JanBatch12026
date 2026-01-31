const {Before , After} = require ('@cucumber/cucumber');

Before(async function () {
    await this.init();
    console.log("Scenario Execution started")
});

After(async function () {
    await this.close();
    console.log("Scenario execution completed");
});