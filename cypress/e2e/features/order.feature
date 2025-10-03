Feature: Product Order

  Scenario: As a user, I can order a product
    Given I open the home page
    Then I should see 16 product cards
    And I can add product number 1 to the cart
    Then I verify my product "Basic Cactus White T-shirt" in the cart
    Then I complete my order
