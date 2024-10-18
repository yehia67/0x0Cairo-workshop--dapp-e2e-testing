import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { HomePageObject } from "./page-objects/home";

const home = new HomePageObject();

Given("A user with metamask installed connected to {word} network", (network) => {
    cy.changeMetamaskNetwork(network);
});

When("the user accesses the app page", () => {
    cy.visit(Cypress.env("BASE_URL")).wait(1000);
});

When("the user accepts notifications", () => {
    cy.acceptMetamaskAccess();
});

When("the user accepts the transaction", () => {
    cy.confirmMetamaskTransaction();
    cy.wait(15000);
});

When("the user confirms the switch network", () => {
    cy.allowMetamaskToSwitchNetwork().should("be.true").wait(3000);
});

When("the user clicks on the {string} button", (buttonText) => {
  cy.contains("button", buttonText).click();
  cy.wait(1000);
});

When("the user enters the address {word} in the input address field", (address) => {
    home.addressInputField.type(address);
});

When("the user clicks the Submit button", () => {
    home.submitTokenAddressButton.click().wait(2000);
});

When("the user clicks the example token link", () => {
    home.exampleTokenLink.click().wait(2000);
});