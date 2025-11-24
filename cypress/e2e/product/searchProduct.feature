Feature: Ecommerce Product Search

    Scenario: Ecommerce product search by name
    Given I am in the Main Page
    When I LogIn into de website
    And I search for a product
    And Product is added to the cart
    Then Validation of the product