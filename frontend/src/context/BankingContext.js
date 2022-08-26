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
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  //const signer = provider.getSigner(); // bundan dolayı hata
  const wallet = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY, provider);
  const signer = wallet.provider.getSigner(wallet.address);



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

  const inheritiumContractForAdmin = new ethers.Contract(
    contractAddrs.Token,
    tokenContract.abi,
    signer
  )

  const bankContractForAdmin = new ethers.Contract(
    contractAddrs.Token,
    contract.abi,
    signer
  )




  return {
    bankingContractForUsers,
    inheritiumContractForUsers,
    inheritiumContractForAdmin,
    bankContractForAdmin
  };
};


const loadWeb3ForBank = async () => {
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

    try {
      console.log("contractToken from func --> ", contractToken)
      console.log("contractBank from func --> ", contractBank)
      let owner = await contractToken.methods.getOwner().call();
      console.log("owner --> ", owner);
      return owner
    } catch (error) {
      console.log(error.message)
      //window.alert("kontrakt çağırırken hata , tekrar deploy et")
    }

  }

  const sendTokenToUserByAdmin = async (amount) => {
    try {
      await contractToken.methods.mint(amount).send({
        from: currentAccount
      });

      console.log("tokenler usera gönderildi")
    } catch (error) {
      console.log(error.message)
    }
  }


  const sendEthereum = async (address_to, amount) => { // 0X4fs....,"0.1"
    try {
      let weiVal = convertEtherToWei(amount)
      await contractBank.methods.sendEther(address_to, weiVal).send({
        from: currentAccount,
        gasLimit: 5000000,
        value: convertEtherToWei(amount)
      })
      await sendTokenToUserByAdmin(25);
      console.log("balance after reward --> ", await contractToken.methods.balanceOf(currentAccount).call())
    } catch (error) {
      console.log(error.message)
    }
  }



  // 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
  const convertEtherToWei = (etherVal) => {
    return web3.utils.toWei(etherVal, "ether")
  }


  const addUser = async (name, age, isLimited = false) => {
    try {
      await contractBank.methods.addPerson(name, age, isLimited).send({
        from: currentAccount,
        gasLimit: 5000000 // gas fee is increased
      })
      // let persons = await contractBank.methods.getPersons().call()
      // console.log("persons -> ", persons)

    } catch (error) {
      console.log(error.message)
    }
  }

  const getAllUsers = async () => { // by admin
    try {
      let persons = await contractBank.methods.getPersons().call()
      console.log("persons -> ", persons)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getCurrentUserInfo = async (address) => {
    try {
      const user = await contractBank.methods.getUser(address).call()
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }


  const getMyChildren = async () => {
    try {
      let contractV2Bank = getGlobalState("contractBank")
      let children = await contractV2Bank.getMyChild({
        from: currentAccount
      });
      console.log("children -> ", children)
      return children;
    } catch (error) {
      console.log(error.message)
    }
  }

  const getEtherBalanceOfCurrentUser = async () => {
    try {
      let contractV2Bank = getGlobalState("contractBank")
      const myBalance = await contractV2Bank.getMyBalance({
        from: currentAccount
      });
      console.log("my balance -> ", myBalance.toString())
      return myBalance;
    } catch (error) {
      console.log(error.message);
    }
  }



  const getBalanceOfInheritumToken = async (address) => {
    try {
      const balance = await contractToken.methods.balanceOf(address).call();
      console.log("inehritum balance --> ", balance)
      return balance
    } catch (error) {
      console.log("error from token balance -> ", error.message)
    }
  }


  const linkAccountToCurrentUser = async (linked_account, name, age) => {
    try {
      await contractBank.methods.linkAccount(linked_account, name, age).send({
        from: currentAccount,
        gasLimit: 5000000 // gas fee is increased
      });
      console.log("inheritor eklendi")
    } catch (error) {
      console.log(error.message)
    }
  }

  const findTheChild = async (name, sendErrorBool = true) => {
    try {
      let contractV2Bank = getGlobalState("contractBank")
      const child = await contractV2Bank.findTheChild(name, sendErrorBool, {
        from: currentAccount
      })
      console.log("child -> ", child)
      return child
    } catch (error) {
      console.log(error.message)
    }
  }

  const findThePerson = async (name, sendErrorBool = true) => {
    try {
      let contractV2Bank = getGlobalState("contractBank")
      const person = await contractV2Bank.findThePerson(name, sendErrorBool)
      console.log(person)
      return person
    } catch (error) {
      console.log(error.message)
    }
  }

  const getMyChildBalance = async (child_name) => {
    try {
      const child = await findTheChild("salih", false);
      console.log("Child balance --> ", child[0][2].toString());
      child[0][2].toString()
    } catch (error) {
      console.log(error.message)
    }
  }
// sisteme admin olarak giriş yapınca siliyor.
  const makeLimitedAccountLimited = async (child_address) => {
    try {

      let owner = await contractToken.methods.getOwner().call();
      console.log(typeof owner)
      if (Number(owner) === Number(currentAccount)) {
        await contractBank.methods.makeAccountisLimited(child_address).send({
          from: currentAccount,
          gasLimit: 5000000
        });
        const person = await contractBank.methods.getUser(child_address).call();
        if (person.isLimited === false) {
          console.log("linked account normal accounta dönüştü")
        }
        console.log("person --> ", person)
        console.log("hata olustu...")
      } else {
        console.log("you must be admin to make linked account unlimited")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const getTransactionHistory = async () => {
    try {
      let contractV2Bank = getGlobalState("contractBank")
      let transactions = await contractV2Bank.getTranscationHistory({
        from: currentAccount
      })
      console.log("transactions -> ", transactions)
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

    setGlobalState("contractBank", createEthereumContract().bankingContractForUsers)
    setGlobalState("contractToken", createEthereumContract().inheritiumContractForUsers)
    setGlobalState("contractTokenAdmin", createEthereumContract().inheritiumContractForAdmin);
    setGlobalState("contractBankAdmin", createEthereumContract().bankContractForAdmin)

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


    //getOwnerTest()
    getAllUsers()
   // getMyChildren()
    //getBalanceOfCurrentUser()""""
    //getTransactionHistory()
    //getCurrentUserInfo(currentAccount)
    getBalanceOfInheritumToken("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    //0x70997970C51812dc3A010C7d01b50e0d17dc79C8
    // sendTokenToUserByAdmin(25)
    // sendTokenToUserByAdmin(convertEtherToWei("0.5"))
    //console.log("0.1 ether -> ",convertEtherToWei("0.1"))
    //getMyChildBalance("salih")
    //findTheChild("salih",false)
   // makeLimitedAccountLimited("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC")




  }, [currentAccount, contractBank, contractToken]);

  return (
    <BankingContext.Provider
      value={{
        connectWallet,
        currentAccount,
        metamaskBtnText,
        addUser,
        sendEthereum,
        linkAccountToCurrentUser
      }}
    >
      {children}
    </BankingContext.Provider>
  );
};
