Feature: User performs various MetaMask operations

  Background:
    Given A user with metamask installed connected to sepolia network
    And the user accesses the app page

  Scenario: The user can perform various operations with MetaMask
    When the user clicks the "Get Accounts" button
    Then the result should display the account address "0x7c71a3d85a8d620eeab9339cce776ddc14a8129c"
    When the user clicks the "Personal Sign" button
    And the user confirms the MetaMask signature request
    Then the user clicks the "Personal Sign Verify" button
    Then the result should verify the signature with address "0x7c71a3d85a8d620eeab9339cce776ddc14a8129c"
