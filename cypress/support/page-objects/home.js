export class HomePageObject {

    get appContent() {
        return cy.get('div[data-test="AppPage__Div__content"]');
    }

    get mataMaskErrorMessage() {
        return cy.get('div[data-test="MetaMaskConnector__Div__error"]');
    }

    get switchNetworkButton() {
        return cy.get('button[data-test="MetaMaskConnector__Button__connect"]');
    }

    get addressInputField() {
        return cy.get('input[data-test="InputAddress__Input__addressValue"]');
    }

    get submitTokenAddressButton() {
        return cy.get('button[data-test="InputAddress__Button__submit"]');
    }

    get exampleTokenLink() {
        return cy.get('span[data-test="InputAddress__Span__exampleTokenLink"]');
    }

    get tokenBalanceInfo() {
        return cy.get('div[data-test="TokenBalance__Div__balanceInfo"]');
    }

    get tokenBalanceAmount() {
        return cy.get('span[data-test="TokenBalance__Div__balanceAmount"]');
    }

    get depositHistoryTable() {
        return cy.get('table[data-test="DepositHistory__Table__history"]');
    }

    get depositInputAmount() {
        return cy.get('input[data-test="DepositToken__Input__depositAmount"]');
    }

    get depositButton() {
        return cy.get('button[data-test="DepositToken__Button__deposit"]');
    }

    get depositErrorMessage() {
        return cy.get('div[data-test="DepositToken__Div__error"]');
    }

    get getMoreExampleTokensAction() {
        return cy.get('div[data-test="TokenBalance__Div__getMoreExampleTokensAction"]');
    }
}