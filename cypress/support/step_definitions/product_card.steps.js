
import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { verifyProductCard } from '../pages/home.page'


Then("I can verify all elements of card number {int}", (cardNumber) => {
  verifyProductCard(cardNumber);
});

