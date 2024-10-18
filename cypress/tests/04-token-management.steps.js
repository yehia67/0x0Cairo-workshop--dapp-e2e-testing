import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const USDC_CONTRACT = "0x45Df5e83B9400421cb3B262b31ee7236b61219D5";

When("the user clicks on the {string} button", (buttonText) => {
  cy.contains("button", buttonText).click();
  cy.wait(1000);
});

When("the user initiates token contract deployment", () => {
  cy.get("#createToken").click();
});

Then("the deployment should be confirmed in metamask", () => {
  cy.activateCustomNonceInMetamask().then((activated) => {
    expect(activated).to.be.true;
  });
  cy.confirmMetamaskTransaction()
    .then((txData) => {
      expect(txData.networkName).to.be.not.empty;
      expect(txData.customNonce).to.be.not.empty;
      expect(txData.confirmed).to.be.true;
    })
    .wait(15000);

  cy.wait(15000); // wait for the contract deployment
});

Then("the contract address should be visible", () => {
  cy.contains("#erc20TokenAddresses", /0x.*/, { timeout: 60000 })
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      cy.log("Token contract address: " + text);
      expect(text).to.match(/^0x[a-fA-F0-9]{40}$/);
    });
});

When("the user imports the USDC token", () => {
  cy.importMetamaskToken(USDC_CONTRACT).then((tokenData) => {
    expect(tokenData.tokenContractAddress).to.be.equal(USDC_CONTRACT);
    expect(tokenData.tokenSymbol).to.be.equal("USDC");
    expect(tokenData.tokenDecimals).to.be.equal("6");
    expect(tokenData.imported).to.be.true;
  });
});

When("the user requests token spending approval", () => {
  cy.get("#approveTokens").click();
  cy.wait(2000);
});

Then("the approval should be processed successfully", () => {
  cy.confirmMetamaskPermissionToSpend({
    spendLimit: "1",
    shouldWaitForPopupClosure: true,
  });
  cy.confirmMetamaskPermissionToSpend().then((approved) => {
    expect(approved).to.be.true;
  });
});

