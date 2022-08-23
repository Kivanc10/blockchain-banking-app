import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import contract from "../contracts/BankingApp.json";
import contractAddrs from "../contracts/contract-address.json";
import tokenContract from "../contracts/Inheritium.json";

export const BankingContext = React.createContext();

const { ethereum } = window;

// This will be used to call contract functions
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const bankingContract = new ethers.Contract(
    contractAddrs.BankContract, // bank contract
    contract.abi,
    signer
  );

  const inheritiumContract = new ethers.Contract(
    contractAddrs.Token,
    tokenContract.abi,
    signer
  );

  return {
    bankingContract,
    inheritiumContract,
  };
};

export const BankingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [metamaskBtnText, setMetamaskBtnText] = useState(
    "Connect With Metamask"
  );
  const [tokenContract, setTokenContract] = useState(null);
  const [bankContract, setBankContract] = useState(null);

  const isWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        setMetamaskBtnText(metamaskBtnChange(accounts[0].toString()));
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const metamaskBtnChange = (address) => {
    return address.slice(0, 5) + ".." + address.slice(-4);
  };

  const getOwnerTest = async () => {
    if (bankContract == null) {
      window.alert("null");
      // setTokenContract(createEthereumContract().inheritiumContract)
    }
    // let owner = await tokenContract.methods.getOwner().call()
    // console.log(owner);
  };

  useEffect(() => {
    isWalletConnected();

    if (window.ethereum) {
      // if metamask connection is interrupted
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
    const loadContracts = async () => {
      setBankContract(createEthereumContract().bankingContract);
      setTokenContract(createEthereumContract().inheritiumContract);
      //      window.alert("bc --> " ,bankContract)
    };
    loadContracts();
    getOwnerTest();
  }, []);

  return (
    <BankingContext.Provider
      value={{
        connectWallet,
        currentAccount,
        metamaskBtnText,
      }}
    >
      {children}
    </BankingContext.Provider>
  );
};
