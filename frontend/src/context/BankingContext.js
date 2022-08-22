import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import contract from "../contracts/BankingApp.json";
import contractAddr from "../contracts/contract-address.json";

export const BankingContext = React.createContext();

const { ethereum } = window;

// This will be used to call contract functions
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const bankingContract = new ethers.Contract(
    contractAddr.Token,
    contract.abi,
    signer
  );

  return bankingContract;
};

export const BankingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const isWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
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

  useEffect(() => {
    isWalletConnected();
  }, []);

  return (
    <BankingContext.Provider
      value={{
        connectWallet,
        currentAccount,
      }}
    >
      {children}
    </BankingContext.Provider>
  );
};
