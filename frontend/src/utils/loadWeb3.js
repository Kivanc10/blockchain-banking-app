import Web3 from "web3"; // import window.ethereum
import { setAlert, setGlobalState } from "../store";
import BankingApp from "../contracts/BankingApp.json";
import Inheritium from "../contracts/Inheritium.json";

const { ethereum } = window;

export const connectWallet = async () => {
  try {
    if (!ethereum) {
      return alert("please install metamask");
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0]); // get account from metamask
  } catch (error) {
    setAlert(JSON.stringify(error), "red");
  }
};

export const getCurrentWalletConnected = async () => {
  if (ethereum) {
    try {
      const addrArr = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addrArr.length > 0) {
        setGlobalState("connectedAccount", addrArr[0]);
      } else {
        setGlobalState("connectedAccount", "");
      }
    } catch (error) {
      setAlert(JSON.stringify(error.message), "red");
    }
  } else {
    setGlobalState("connectedAccount", "");
    setAlert(
      "You must install MetaMask, a virtual Ethereum wallet, in your browser",
      "red"
    );
  }
};

export const loadBlockchainDatas = async () => {
  try {
  } catch (error) {}
};
