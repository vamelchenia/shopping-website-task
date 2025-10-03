Feature: Product Card

  Scenario: As a user, I can see all parts of a product card
    Given I open the home page
    Then I should see 16 product cards
    Then I can verify all elements of card number 0