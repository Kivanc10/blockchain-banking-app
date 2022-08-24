import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import contract from "../contracts/BankingApp.json";
import contractAddrs from "../contracts/contract-address.json";
import tokenContract from "../contracts/Inheritium.json";
import {
  setGlobalState,
  getGlobalState
} from "../store";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";

window.web3 = new Web3(window.web3.currentProvider)
const web3 = window.web3; // BankContract



const contractBank = new web3.eth.Contract(contract.abi, contractAddrs.BankContract)

const contractToken = new web3.eth.Contract(tokenContract.abi, contractAddrs.Token)



export const BankingContext = React.createContext();

const { ethereum } = window;

// This will be used to call contract functions
/*const createEthereumContract = async () => {

  try {
    if (!ethereum) {
      return window.alert("Please install metamask");
    }
    window.web3 = new Web3(ethereum)
    await ethereum.enable()
    window.web3 = new Web3(window.web3.currentProvider)
    const web3 = window.web3;

    const contractBank = new web3.eth.Contract(contract.abi, contractAddrs.BankContract);

    const contractToken = new web3.eth.Contract(tokenContract.abi, contractAddrs.Token);

    setGlobalState("contractBank",contractBank)
    setGlobalState("contractToken",contractToken)

    const _contractToken = getGlobalState("contractToken");

    console.log("_contractToken  --> ",_contractToken)


  } catch (error) {
       console.log(error)
         alert('Please connect your metamask wallet! or load contracts again')
  }
};
*/
export const loadWeb3ForBank = async () => {
  try {
    if (!ethereum) {
      return alert("Please install metamask !")
    }
    window.web3 = new Web3(ethereum)
    await ethereum.enable()
    const networkId = await web3.eth.net.getId()
  } catch (error) {
    console.log(error)
    //alert('Please connect your metamask wallet!')
  }
}

export const BankingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [metamaskBtnText, setMetamaskBtnText] = useState("Connect With Metamask")
  let navigate = useNavigate();

  const isWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        setMetamaskBtnText(metamaskBtnChange(accounts[0].toString()));
        navigate("/dashboard");
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
      navigate("/dashboard");
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
    console.log("contractToken from func --> ",contractToken)
    let owner = await contractToken.methods.getOwner().call();
    console.log("owner --> ", owner);

  }

  const addUser = async (name,age,isLimited = false) => {
    try {
      await contractBank.methods.addPerson(name,age,isLimited).send({
        from : currentAccount,
        gasLimit: 50000
      })
      let persons = await contractBank.methods.getPersons().call()
      console.log("persons -> ",persons)

    } catch (error) {
        console.log(error.message)
    }
  }


  useEffect(() => {
    isWalletConnected();
    const load = async () => {
      //await createEthereumContract();
      await loadWeb3ForBank();
    }
    load()


    if (window.ethereum) { // if metamask connection is interrupted
      window.ethereum.on('chainChanged', () => {
        //window.location.reload();
        navigate("/")
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        //window.location.reload();
        navigate("/")
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
        addUser
      }}
    >
      {children}
    </BankingContext.Provider>
  );
};
