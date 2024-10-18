import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the user requests to add a new network", () => {
  cy.addMetamaskNetwork({
    networkName: "Optimism Network",
    rpcUrl: "https://mainnet.optimism.io",
    chainId: 10,
    symbol: "oETH",
    blockExplorer: "https://optimistic.etherscan.io",
    isTestnet: false,
  }).then((networkAdded) => {
    expect(networkAdded).to.be.true;
  });
});

Then("the network addition prompt should appear on the platform", () => {
  cy.get("#network").contains("10");
  cy.get("#chainId").contains("0xa");
});


When("the user requests to switch networks", () => {
  cy.changeMetamaskNetwork("Sepolia").then((networkChanged) => {
    expect(networkChanged).to.be.true;
  });
  cy.get("#network").contains("11155111");
  cy.get("#chainId").contains("0xaa36a7");
});

