import "./App.css";
import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";

function App() {
  const { status, connect, account, chainId } = useMetaMask();

  let networks: any = {
    mainnet: "0x1", // 1
    // Test nets
    goerli: "0x5", // 5
    ropsten: "0x3", // 3
    rinkeby: "0x4", // 4
    kovan: "0x2a", // 42
    mumbai: "0x13881", // 80001
    // Layers 2
    arbitrum: "0xa4b1", // 42161
    optimism: "0xa", // 10
    // Side chains
    polygon: "0x89", // 137
    gnosisChain: "0x64", // 100
    // Alt layer 1
    binanceSmartChain: "0x38", // 56
    avalanche: "0xa86a", // 43114
    cronos: "0x19", // 25
    fantom: "0xfa", // 250
  };

  const getNetworkName = () => {
    for (let network in networks) {
      if (networks[network] == chainId) {
        return network;
      }
    }
    return "Empty";
  };

  getNetworkName();

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center">
        {status == "initializing" && <div>Initalizing with Metamask</div>}
        {status == "connected" && <div>Connected address is {account} </div>}
        <div>Connect to {getNetworkName()} network.</div>
        {status == "connected" ? (
          <button onClick={connect} className=" mt-10">
            Disconnect
          </button>
        ) : (
          <button onClick={connect} className=" mt-10">
            Connect to MetaMask
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
