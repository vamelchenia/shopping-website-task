
import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { addProductToCart, verifyProductInCart, checkout } from '../pages/home.page'


Then("I can add product number {int} to the cart", (productNumber) => {
  addProductToCart(productNumber);
});


Then("I verify my product {string} in the cart", (productName) => {
  verifyProductInCart(productName);
});


Then("I complete my order", () => {
  checkout();
});
