//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// to compile --> npx hardhat compile
// to deploy --> npx hardhat run scripts/deploy.js --network name
contract BankingApp {

    string public msg;
    event msgChanged(string ldMsg,string newMsg);

    constructor(string memory firstMsg) {
        msg = firstMsg;
    }

    function update(string memory newmsg) public {
        string memory oldMsg = msg;
        msg = newmsg;
        emit msgChanged(oldMsg, msg);
    }

    function getMessage () public view returns (string memory) {
        return msg;
    }

}