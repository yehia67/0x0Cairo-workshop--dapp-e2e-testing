import { When, Then } from "@badeball/cypress-cucumber-preprocessor";



When("the user connects to the dapp", () => {
  cy.get("#connectButton").click();
  cy.acceptMetamaskAccess();
  cy.wait(2000);
});

Then("the connection should be successful", () => {
  cy.get("#accounts").should("be.visible");
  cy.get("#accounts").should("not.be.empty");
});

Then("the account address should be visible", () => {
  cy.get("#accounts").should(
    "contain.text",
   Cypress.env("WALLET_ADDRESS")
  );
});

When("the user requests account information", () => {
  cy.get("#getAccounts").click();
  cy.wait(1000);
});

Then("the account details should be displayed", () => {
  cy.get("#getAccountsResult").should(
    "have.text",
   Cypress.env("WALLET_ADDRESS")
  );
});

When("the user requests a personal signature", () => {
  cy.get("#personalSign").click();
  cy.wait(1000);
  cy.confirmMetamaskSignatureRequest();
});

Then("the signature should be verified successfully", () => {
  cy.get("#personalSignVerify").click();
  cy.get("#personalSignVerifySigUtilResult").should(
    "contain.text",
   Cypress.env("WALLET_ADDRESS")
  );
});