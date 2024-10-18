
Feature: Network Management in Metamask

  Background:
    Given A user with metamask installed connected to sepolia network
    And the user accesses the app page

  Scenario: Add and switch networks
    When the user requests to add a new network
    When the user clicks on the "Use MetaMask" button
    Then the network addition prompt should appear on the platform
