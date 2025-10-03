import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getProductCards, getShoppingCart, getGithubLabel, getLeftPanel } from '../pages/home.page'


Given("I open the home page", () => {
  cy.visit("/");
});

Then("I should see {int} product cards", (count) => {
  getProductCards().should('have.length', count);
});


When("I scroll to the bottom of the page", () => {
  cy.scrollTo("bottom");
});

When("I scroll to the top of the page", () => {
  cy.scrollTo("top");
});

Then("I should see a shopping cart", () => {
  getShoppingCart().should('be.visible');
});

Then("I verify the source link", () => {
   getGithubLabel().should('be.visible')
      .and('have.attr', 'href', 'https://github.com/jeffersonRibeiro/react-shopping-cart');
});

Then("I should see the Sizes left panel", () => {
  getLeftPanel().should('be.visible');
});