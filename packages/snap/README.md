<p align="center">
  <a href="https://www.thewarp.ai">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo512.png">
      <img src=".github/assets/logo512.png" height="150">
    </picture>
  </a>
</p>
<p align="center">
  If you have a MetaMask wallet now you have an XRPL one.<br>
  Securely manage your XRP and interact with XRPL-based DApps directly from MetaMask.<br>
  The Warp expands on XRP Ledger for MetaMask by enabling support for multiple wallets which may be imported using Family Seeds.<br>
</p>
</div>

## Before Your Start

<p>
  The Warp is a postfiat.org community project.<br>
  The Warp is a fork for XRPL Ledger for MetaMask. The Warp is pending approval from Consensys to be added to the MetaMask Allowlist.<br>
  In the interim, users will need to use 
  <a href="https://chromewebstore.google.com/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk?hl=en" target="_blank" rel="noopener noreferrer">
    MetaMask Flask
  </a> 
  to interact with The Warp snap and site.
</p>

## Overview

The Warp is a modified version of XRPL Ledger for MetaMask originally created by Peersyst. 

The XRP Ledger for MetaMask is an extension that allows users to interact with the XRP Ledger (XRPL) directly from their MetaMask wallet. This Snap introduces support for XRPL, enabling users to manage XRP and other tokens on the XRPL, perform transactions, and interact with XRPL-based decentralized applications (DApps).

## XRPL for MetaMask Original Features

- **XRPL Integration**: Manage XRP and XRPL tokens within MetaMask. (limitted 
- **Transaction Support**: Send and receive XRP and other XRPL tokens.
- **DApp Interaction**: Use XRPL-based DApps seamlessly.
- **Account Management**: View account balances, transaction history, and other details.
- **Secure and User-Controlled**: Full control over your XRPL keys and permissions.

- ## The Warp Expanded Features

- **Multiple XRPL Wallet Support**: Import and manage mutltiple XRPL wallets from family seeds.

- **Site Feature Expansion**: Memo transactions, Import Wallet, Switch Wallet, Trust Lines.


## Usage

To use the XRP Ledger, first install it by following these steps:

1. **Open MetaMask**: Ensure you have the latest version of the MetaMask extension installed in your browser.
2. **Navigate to Settings**: Click on the MetaMask icon, go to settings, and look for the Snaps section.
3. **Add XRP Ledger**: In the Snaps section, add the XRP Ledger by providing its URL or selecting it from the Snap store.
4. **Install Snap**: Click on the XRP Ledger and follow the prompts to add it to your MetaMask wallet.
5. **Enable Snap**: Once installed, enable the Snap and grant necessary permissions.

## Development

Here’s a basic guide to get started:

### Prerequisites

- Node.js
- [MetaMask Flask](https://metamask.io/flask/)

### Installation

```bash
yarn
```

### Running

```bash
yarn start
```

- To only start the UI, navigate to `packages/site` and start from there. The same applies to the snap in `packages/snap`.
- If you make changes to the snap, first remove the previously installed version to see the changes.
- Enable the [MetaMask Flask](https://metamask.io/flask/) in your extensions.

## API

### Installation

Use the following request to install the Snap:

```javascript
provider.request({
  method: 'wallet_requestSnaps',
  params: {
    ['npm:xrpl-snap']: {},
  },
});
```

For developing the snap, change the request to:

```javascript
params: {
    ["local:http://localhost:8080"]: {},
},
```

### Interact with the Snap

To make requests using the RPC, use the following code:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:xrpl-snap',
    request: {
      method: 'xrpl_request',
      params: { command: 'account_info', account: 'rBg...' },
    },
  },
});
```

### Account

Get current account:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:xrpl-snap',
    request: {
      method: 'xrpl_getAccount',
    },
  },
});
```

### Network

- Get supported networks:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:xrpl-snap',
    request: {
      method: 'xrpl_getStoredNetworks',
    },
  },
});
```

- Get current network:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:xrpl-snap',
    request: {
      method: 'xrpl_getActiveNetwork',
    },
  },
});
```

- Change the selected network:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:xrpl-snap',
    request: {
      method: 'xrpl_changeNetwork',
      params: { chainId: 1 }, // Example chainId
    },
  },
});
```

### Signing and submitting transactions

To sign and submit transactions

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:xrpl-snap',
    request: {
      method: 'xrpl_signAndSubmit',
      params: {
        TransactionType: 'Payment',
        Account: 'rBg...',
        Destination: 'rPT...',
        Amount: '1000000', // Amount in drops
      },
    },
  },
});
```

- If you only want to sign the transaction use `xrpl_sign`.

## Support

For support and further information, refer to the following resources:

- **XRPL Documentation**: [XRPL.org](https://xrpl.org/)
- **MetaMask Snaps Documentation**: [MetaMask Snaps](https://docs.metamask.io/snaps/)

## Contributing

We welcome contributions to the XRP Ledger project. To contribute, please follow these steps:

1. **Fork the Repository**: Fork the XRP Ledger repository on GitHub.
2. **Create a Branch**: Create a new branch for your feature or bugfix.
3. **Submit a Pull Request**: Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
