@ignore
Feature: Transaction Management in Metamask

  Background:
    Given A user with metamask installed connected to sepolia network
    And the user accesses the app page

  Scenario: Complete transaction workflow
    When the user initiates a new transaction
    Then the transaction prompt should appear in metamask
    When the user confirms the transaction
    Then the transaction should be processed successfully
    When the user opens transaction details
    Then the transaction information should be accurately displayed