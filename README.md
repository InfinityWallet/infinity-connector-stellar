# Infinity Wallet Connector SDK for DApps & Web3 platforms

[Infinity Wallet](https://infinitywallet.io/) provides users with the ability to access DApps & Web3 platforms directly within the Infinity Wallet, through a feature we call “Browser-less DApps”. This feature provides users, DApps and chains with a wide range of benefits, while enhancing the overall user experience and allowing for more fluid and uninterrupted use.

<br/>
<div align="center">
  <a href="https://www.youtube.com/watch?v=5B2zaw56dEk">
    <img src="https://i.gyazo.com/11b6a2084bb248fb440dda06172b9338.png" width="600">
  </a>
</div>
<br/>

## Free Promotion
If you integrate the Infinity Connector and make a tweet tagging @infinitywallet on Twitter regarding your support for Infinity Wallet connecting, we may retweet your tweet.

## How to add Infinity Wallet connecting to a DApp?
To integrate Infinity Wallet connecting to your DApp please follow this [Integration Guide](./README.md#integration-guide).

You will need to add to your interface an option to connect with the Infinity Wallet, either with the Infinity Wallet logo or Infinity Wallet logo + text. As an example:

![Connect Wallet UI Example](https://i.imgur.com/hzRpUSy.png)

### Media Assets
- Logo SVG: https://drive.google.com/file/d/1fAl8inVUGeoZiwPD4gA3WKfUW6p7mVza/view?usp=sharing
- Logo PNG: https://drive.google.com/file/d/1RKqsMWC8SvJEPNdRB-hl2_VIjM3inQNl/view?usp=sharing
- Logo + Title (Use for media announcements): https://drive.google.com/file/d/1bgfR0N-xCAonF9MwppUAk-tQz3oEPIGw/view?usp=sharing
- Infinity Wallet Banner: https://drive.google.com/file/d/1dGdocAv4V_RyXZ6MIXjerdzukzHqcLQc/view?usp=sharing

# Integration Guide:
To integrate Infinity Wallet Connector for a DApp on a supported Stellar Network please use the following guide. If you already support the web3 standards within your DApp the integration of Infinity Wallet connecting should take no longer than 5 minutes.

## Package Installation
To use the SDK you can install the package in your project by:

### Using yarn
```yarn add @infinitywallet/infinity-connector-stellar```

### Using npm
```npm install @infinitywallet/infinity-connector-stellar```

## Usage

### Detect Infinity Wallet
The first thing you are going to need to do is detect whether your DApp is being accessed via the Infinity Wallet and if the Infinity Wallet is installed. To do this please use:
```js
import { InfinityWalletConnector } from '@infinitywallet/infinity-connector-stellar';

const infinitywalletConnector = new InfinityWalletConnector();

infinitywalletConnector.isInstalled()
```
If returns **TRUE** then the DApp is currently running within the Infinity Wallet, you can initialize the wallet connection with [Initiate Connector](./README.md#initiate-connector) followed by calling the web3 method [Activate](./README.md#activate-connection)

If returns **FALSE** then it means the Infinity Wallet needs to be opened using Open Infinity Wallet function;

### Initiate Connector
This function should be called when [Detect Infinity Wallet](./README.md#detect-infinity-wallet) returns **TRUE**.
```js
import { InfinityWalletConnector } from '@infinitywallet/infinity-connector-stellar';

const infinitywalletConnector = new InfinityWalletConnector();
```


### Open Infinity Wallet
This function should be called when [Detect Infinity Wallet](./README.md#detect-infinity-wallet) Wallet returns **FALSE**.

By calling this function and passing your DApp url (replace **"YOUR_DAPP_URL"**) it will open your DApp in the Infinity Wallet if the user has the Infinity Wallet installed. If the user does not have Infinity Wallet installed it will redirect them to download the Infinity Wallet.
```js
import { openInfinityWallet } from '@infinitywallet/infinity-connector-stellar';

openInfinityWallet(YOUR_DAPP_URL);
```
## Example
The following is an example on how to use the SDK to detect, connect and open the Infinity Wallet to connect with a DApp.

Using this example make sure to replace the following:

- **YOUR_DAPP_URL** replace this with the URL of your DApp;

```js
import { InfinityWalletConnector, openInfinityWallet } from '@infinitywallet/infinity-connector-stellar';


const infinitywalletConnector = new InfinityWalletConnector();

if(infinitywalletConnector.isInstalled()){
     infinitywalletConnector.connect();
     console.log('Infinity Wallet is connected and can be used with the DApp');
} else {
     openInfinityWallet(YOUR_DAPP_URL);
     console.log('Open DApp on a specific chain in Infinity Wallet if installed, or if not installed it will redirect to download Infinity Wallet');
}
```

## Listen account change

You can listen to the connector event "accountChanged" for getting notified when the account of the connector changes

infinitywalletConnector.on('accountChanged',(account)=>{
  // your handle
})
