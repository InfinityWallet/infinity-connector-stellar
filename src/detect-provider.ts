import { DeepLinker } from './deep-link'

/**
 * Handle for when no Ethereum Provider is present on the window. In case it has InfinityWallet
 * installed, it will use deeplink to open the current on the wallet dapp explorer. In case it's
 * not installed, it will go to wallet's download page.
 *
 * @param hostname - Domain name of the dapp.
 * @param chain - The chain ID of the chain to connect to
 */

export function openInfinityWallet(hostname){
    const linker = new DeepLinker({
          onIgnored: function() {
            window.open("https://infinitywallet.io/download")
      }
    });
	if(hostname.includes('://'))
		hostname = hostname.split('://')[1]
  hostname = encodeURIComponent(hostname)
  linker.openURL("infinity:?dapp="+hostname+"&chain=148");
}
