/**
 * Handle for when no Ethereum Provider is present on the window. In case it has InfinityWallet
 * installed, it will use deeplink to open the current on the wallet dapp explorer. In case it's
 * not installed, it will go to wallet's download page.
 *
 * @param hostname - Domain name of the dapp.
 * @param chain - The chain ID of the chain to connect to
 */
export declare function openInfinityWallet(hostname: any): void;
