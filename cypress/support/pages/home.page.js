import homeLocatorManager from '../locators/homePage.locate.js';

export function getProductCards() {
  return homeLocatorManager.getProductCard()
}

export function getShoppingCart() {
  return homeLocatorManager.getShoppingCart()
}

export function getGithubLabel() {
  return homeLocatorManager.getGithubLabel()
}

export function getLeftPanel() {
  return homeLocatorManager.getLeftPanel()
}

export function verifyProductCard(cardNumber) {
  cy.fixture('products.json').then((products) => {
    const expectedTestData = products[cardNumber]; 

    homeLocatorManager.getProductCard().eq(cardNumber).should('be.visible');
    homeLocatorManager.getProductCard().eq(cardNumber).contains(expectedTestData.title).should('exist');
    
    if (expectedTestData.freeShipping) {
      homeLocatorManager.getFreeShippingByIndex(cardNumber)
        .should('be.visible');
    } else {
      homeLocatorManager.getFreeShippingByIndex(cardNumber)
        .should('not.exist');
    }
  });
  
}

export function addProductToCart(productNumber) {
  return homeLocatorManager.getProductCard().eq(productNumber).find('button', 'Add to cart').click();
}


export function verifyProductInCart(productName) {
  cy.contains('Cart').should('be.visible');
  cy.contains(productName).should('be.visible');
}


export function checkout() {
  return homeLocatorManager.getCheckoutButton().click()
}
