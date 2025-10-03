Feature: GitHub repository validation

  Scenario: Validate GitHub link is present and accessible
    Given I open the home page
    When I check for the GitHub repository link
    Then the repository link should be valid and publicly accessible

  Scenario: Validate repository can be downloaded
    Given I have the GitHub repository URL
    When I download the repository as a ZIP
    Then the download should be successful

  Scenario: Validate README.md exists in the repository root
    Given I have the GitHub repository ZIP
    When I extract the archive
    Then it should contain a README.md file in the root
