Feature: DemoBlaze product purchase flow
    Scenario: User adds a product to cart
        Given user launches the DemoBlaze application
        When user selects a product
        And user adds the product to cart
        Then product should be added successfully

