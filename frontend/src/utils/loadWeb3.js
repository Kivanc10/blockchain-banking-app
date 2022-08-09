import Web3 from "web3";
const { ethereum } = window // import window.ethereum


export const connectWallet = async () => {
    try {
        if (!ethereum) {
            return alert("please install metamask")
        }
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        return accounts[0]
    } catch (error) {
        //setAlert(JSON.stringify(error), "red")
        console.log(error.message)
    }
}

export const getCurrentWalletConnected = async () => {
    if (ethereum) {
        try {
            const addrArr = await window.ethereum.request({
                method: "eth_accounts",
            })
            if (addrArr.length > 0) {
                return addrArr[0];
            } else {
                return "";
            }
        } catch (error) {
           console.log(error.message);
        }
    } else {
       console.log("You must install MetaMask, a virtual Ethereum wallet, in your browser");
        return ""
    }
}