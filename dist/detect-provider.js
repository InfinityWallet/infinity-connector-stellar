"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openInfinityWallet = void 0;
var deep_link_1 = require("./deep-link");
/**
 * Handle for when no Ethereum Provider is present on the window. In case it has InfinityWallet
 * installed, it will use deeplink to open the current on the wallet dapp explorer. In case it's
 * not installed, it will go to wallet's download page.
 *
 * @param hostname - Domain name of the dapp.
 * @param chain - The chain ID of the chain to connect to
 */
function openInfinityWallet(hostname) {
    var linker = new deep_link_1.DeepLinker({
        onIgnored: function () {
            window.open("https://infinitywallet.io/download");
        }
    });
    if (hostname.includes('://'))
        hostname = hostname.split('://')[1];
    hostname = encodeURIComponent(hostname);
    linker.openURL("infinity:?dapp=" + hostname + "&chain=148");
}
exports.openInfinityWallet = openInfinityWallet;
