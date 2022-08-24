import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import contract from "../contracts/BankingApp.json";
import contractAddrs from "../contracts/contract-address.json";
import tokenContract from "../contracts/Inheritium.json";
import {
  setGlobalState,
  getGlobalState
} from "../store";




export const BankingContext = React.createContext();

const { ethereum } = window;

// This will be used to call contract functions
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  //const signer = provider.getSigner(); // bundan dolayı hata
  const wallet = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY, provider);
  const signer = wallet.provider.getSigner(wallet.address);


  const bankingContractForAdmin = new ethers.Contract(
    contractAddrs.BankContract, // bank contract
    contract.abi,
    signer
  );

  const inheritiumContractForAdmin = new ethers.Contract(
    contractAddrs.Token,
    tokenContract.abi,
    signer
  );

  const bankingContractForUsers = new ethers.Contract(
    contractAddrs.BankContract,
    contract.abi,
    provider
  )
  
  const inheritiumContractForUsers = new ethers.Contract(
    contractAddrs.Token,
    tokenContract.abi,
    provider
  )

  return {
    bankingContractForAdmin,
    inheritiumContractForAdmin,
    bankingContractForUsers,
    inheritiumContractForUsers
  };
};


const loadWeb3 = async () => {
  // window.web3 = new Web3(ethereum)
  // await ethereum.enable()
  // window.web3 = new Web3(window.web3.currentProvider)
  // const networkId = await Web3.eth.net.getId()

}

export const BankingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [metamaskBtnText, setMetamaskBtnText] = useState("Connect With Metamask")
  // const [tokenContract, setTokenContract] = useState(null);
  // const [bankContract, setBankContract] = useState(null);

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
    return address.slice(0, 5) + ".." + address.slice(-4)
  }

  const getOwnerTest = async () => {
    // const contractToken = getGlobalState("contractTokenForOwner") // run
    const contractToken = getGlobalState("contractTokenForUsers") // run


    let owner = await contractToken.getOwner();
    console.log("owner --> ", owner);
    console.log("token name -> ", await contractToken.name())

  }

  const testAddPerson = async () => {
    const contractBank = getGlobalState("contractBankForOwner")

    await contractBank.addPerson("Numan", 55, false)
  }

  const loadContracts = () => {
    setGlobalState("contractBankForOwner", createEthereumContract().bankingContractForAdmin);
    setGlobalState("contractTokenForOwner", createEthereumContract().inheritiumContractForAdmin);
    setGlobalState("contractBankForUsers",createEthereumContract().bankingContractForUsers);
    setGlobalState("contractTokenForUsers",createEthereumContract().inheritiumContractForUsers);
  }

  useEffect(() => {
    isWalletConnected();
    loadContracts();
    if (window.ethereum) { // if metamask connection is interrupted
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
    }

    // // window.alert(process.env.REACT_APP_PRIVATE_KEY)

    getOwnerTest()
    // testAddPerson()


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
