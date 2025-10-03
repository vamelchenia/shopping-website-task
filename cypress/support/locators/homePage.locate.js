/// <reference types="cypress" />
const PRODUCT_CARD = 'div[tabindex="1"]';
const SHOPPING_CART = 'div[title="Products in cart quantity"]';
const GITHUB_LABEL = 'a[aria-label="View source on Github"]';
const LEFT_PANEL = '.sc-ebmerl-2';
const FREE_SHIPPING = 'Free shipping';

// const GITHUB_LINK = 'a[href*="https://github.com/vamelchenia/shopping-website-task"]';
const GITHUB_LINK = "https://github.com/vamelchenia/shopping-website-task";

class homePageLocatorManager {
  getProductCard = () => {
    return cy
      .get(PRODUCT_CARD);
  };

  getShoppingCart = () => {
    return cy
      .get(SHOPPING_CART);
  };

  getGithubLabel = () => {
    return cy
      .get(GITHUB_LABEL);
  };

  getGithubLink = () => {
      return GITHUB_LINK;
  };

  getLeftPanel = () => {
    return cy
      .get(LEFT_PANEL);
  };

  getProductTitleByIndex = (index) => {
    cy.contains(title)
  };

  getFreeShippingByIndex = (index) => {
    return cy.contains(FREE_SHIPPING).eq(index);
  };

  getCheckoutButton = () => {
    return cy.get('button').contains('Checkout');
  };
}

export default new homePageLocatorManager();

