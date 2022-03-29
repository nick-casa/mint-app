import { ethers } from 'ethers';
import { useState } from 'react';

function App() {

  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      setProvider(provider);
      setLibrary(library);
    } catch (error) {
      console.error(error);
    }
  };
  
 return (
   <div className="App">
       <button onClick={connectWallet}>Connect Wallet</button>  
    </div>
 );
}

export default App;