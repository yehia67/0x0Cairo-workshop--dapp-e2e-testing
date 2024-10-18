import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the user initiates a new transaction", () => {
  cy.get("#sendButton").click();
  cy.wait(10000);
});

Then("the transaction prompt should appear in metamask", () => {
  cy.get("@metamaskTransactionPopup").should("be.visible");
});

When("the user confirms the transaction", () => {
  cy.confirmMetamaskTransaction({
    shouldWaitForPopupClosure: true,
  });
  cy.wait(15000);
});

Then("the transaction should be processed successfully", () => {
  cy.wrap(null).then(() => {
    cy.get("@txConfirmed").should("be.true");
  });
});

When("the user opens transaction details", () => {
  cy.openMetamaskTransactionDetails(0.00001);
  cy.wait(5000);
});

Then("the transaction information should be accurately displayed", () => {
  cy.get("@transactionDetails").should("exist");
  cy.get("@transactionStatus").should("contain.text", "Confirmed");
  cy.closeMetamaskTransactionDetailsPopup();
});

Then("the transaction history should be updated", () => {
  cy.get("#transactionHistory")
    .should("be.visible")
    .and("contain.text", "Transaction Complete");
});

When("the user checks transaction status", () => {
  cy.get("#checkTransactionStatus").click();
  cy.wait(2000);
});

Then("the status should be confirmed", () => {
  cy.get("#transactionStatus")
    .should("be.visible")
    .and("contain.text", "Confirmed");
});