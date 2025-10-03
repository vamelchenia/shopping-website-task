Feature: Homepage

  Scenario: As a user, I can visit and verify home page, and check navigation
    Given I open the home page
    Then I should see 16 product cards
    Then I should see a shopping cart
    And I verify the source link
    Then I should see the Sizes left panel
    Then I scroll to the bottom of the page
    And I scroll to the top of the page