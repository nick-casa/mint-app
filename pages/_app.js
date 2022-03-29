import '../styles/globals.css'
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export const providerOptions = {
 walletlink: {
   package: CoinbaseWalletSDK, 
   options: {
     appName: "Web 3 Modal Demo",
     infuraId: process.env.INFURA_KEY 
   }
 },
 walletconnect: {
   package: WalletConnect, 
   options: {
     infuraId: process.env.INFURA_KEY 
   }
 }
};
const web3Modal = new Web3Modal({
  providerOptions // required
});


export default MyApp
