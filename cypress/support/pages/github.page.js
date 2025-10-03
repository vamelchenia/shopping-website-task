import homeLocatorManager from '../locators/homePage.locate.js';

REPO_URL = "https://github.com/vamelchenia/shopping-website-task"
ZIP_URL = `${REPO_URL}/archive/refs/heads/main.zip`
  

  export function getGithubLink() {
    return homeLocatorManager.getGithubLink();
  }

  export function checkRepoAccessible() {
    cy.request(url).its("status").should("eq", 200);
  }
  
  export function downloadRepo() {
    return cy.request({
      url: ZIP_URL,
      encoding: "binary",
    });
  }
