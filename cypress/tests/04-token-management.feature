@ignore
Feature: Token Management in Metamask

  Background:
    Given A user with metamask installed connected to sepolia network
    And the user accesses the app page

    Scenario: Import new token  
    When the user imports the USDC token

  Scenario: Deploy new token And Approve token spending
    When the user initiates token contract deployment
    Then the deployment should be confirmed in metamask
    And the contract address should be visible
    When the user requests token spending approval
    Then the approval should be processed successfully
  
   
