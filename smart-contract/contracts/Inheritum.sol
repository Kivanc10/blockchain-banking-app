// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


/*import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
*/
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


// our coin that users'll use
contract Inheritum is ERC20 { // inheritance
    address owner;
    constructor() public ERC20("Inheritum","INHRTM") {
        owner = msg.sender;
        //minting and transferring 1 million tokens for the account that is deploying the smart contract
        _mint(msg.sender,1000000000000000000000000);
    }


    function getOwner() public view returns (address) {
        return owner;
    }

    


}

// 100000000000000000000

