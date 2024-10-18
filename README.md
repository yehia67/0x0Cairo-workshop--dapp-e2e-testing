# 0xCairo WorkShop Dapp E2E 

Synpress is a testing framework built on top of [Cypress](https://www.cypress.io/) that provides support for decentralized applications (DApps). It enables end-to-end testing with MetaMask integration, making it ideal for Web3 projects.

## Getting Started

### Installation

To set up the project, first install the necessary dependencies using `npm`:

```bash
npm i
```

### Environment Setup

1. Copy the example environment configuration file:

```bash
cp .env.example .env
```

2. Update the `cypress.env.json` file with your test environment details:

```json
{
  "ENV_NAME": "LOCAL",
  "BASE_URL": "https://metamask.github.io/test-dapp/",
  "WALLET_ADDRESS": "0x7c71a3d85a8d620eeab9339cce776ddc14a8129c"
}
```

Ensure that the wallet address and any other environment-specific settings are correctly updated.

## Running Tests

To execute the test cases, you can use one of the following commands:

1. For running Synpress end-to-end tests:

```bash
npm run e2e:synpress
```

2. For live execution with real-time feedback:

```bash
npm run e2e:synpress:live
```

## Project Overview and Detailed Explanation

For a more in-depth explanation of how this project works, including use cases and testing scenarios, please refer to [this article on Medium](https://medium.com/p/78d64088a137).
