
Feature: Basic Metamask Connection

  Background:
    Given A user with metamask installed connected to sepolia network
    And the user accesses the app page

  Scenario: Connect to dapp successfully
    When the user clicks on the "Use MetaMask" button
    And the user connects to the dapp
    Then the connection should be successful
    And the account address should be visible
@ignore
  Scenario: Perform basic Metamask operations
    When the user requests account information
    Then the account details should be displayed
    When the user requests a personal signature
    Then the signature should be verified successfully