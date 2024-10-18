import { When, Then } from "@badeball/cypress-cucumber-preprocessor";



When('the user clicks the "Get Accounts" button', () => {
  cy.get("#getAccounts").click(); // Find and click the Get Accounts button
});

Then(
  "the result should display the account address {string}",
  (expectedAddress) => {
    cy.get("#getAccountsResult").should("have.text", expectedAddress); // Verify account address
  }
);

When('the user clicks the "Personal Sign" button', () => {
  cy.get("#personalSign").click(); // Find and click the Personal Sign button
});

When("the user confirms the MetaMask signature request", () => {
  cy.confirmMetamaskSignatureRequest(); // MetaMask-specific command to confirm the signature request
});

When('the user clicks the "Personal Sign Verify" button', () => {
  cy.get("#personalSignVerify").click(); // Find and click the Personal Sign Verify button
});

Then(
  "the result should verify the signature with address {string}",
  (expectedAddress) => {
    cy.get("#personalSignVerifySigUtilResult").contains(expectedAddress); // Verify the signature result
  }
);
