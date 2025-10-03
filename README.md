# Test Project

End-to-end tests for the **Shopping Cart** app using **Cypress + Cucumber**.

---

## Setup

Clone the repo and install dependencies:

```bash```
git clone <repository-url>
cd test-project
npm install

---

## Run Tests

**Cypress GUI:**

npm run cypress:open


**Cypress headless:** 

npm run cypress:run


## Assumptions & Limitations

* Tests cover the homepage only.
* Product data is loaded from cypress/fixtures/products.json.
* Tests rely on the current UI structure and some dynamic locators; changes may break them.
* Primarily tested in Chrome.