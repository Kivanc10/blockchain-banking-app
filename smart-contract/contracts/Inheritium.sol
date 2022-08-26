// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


/*import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
*/
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


// our coin that users'll use
contract Inheritium is ERC20 { // inheritance
    address owner;
    //uint256 totalSupply = 1000000000000000000000000;1 milyon
    uint256 count = 0;
    constructor() public ERC20("Inheritum","INHRTM") {
        owner = msg.sender;
        //minting and transferring 1 million tokens for the account that is deploying the smart contract
         _mint(msg.sender,1000000000000000000000000); // 1 milyon
        //count += 100;
    }

    modifier countLessThanTotalSupply() {
        require(totalSupply() > count,"There is no token to mint");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner,"You're not admin");
        _;
    }

    /*function mint(address beneficiary, uint256 mintAmount) countLessThanTotalSupply external {
        _mint(beneficiary,mintAmount);
        count += mintAmount;
    }*/
    /*function mint(address beneficiary, uint256 mintAmount) countLessThanTotalSupply onlyOwner external {
        _mint(beneficiary,mintAmount * 10**uint(decimals()));
        _burn(owner,mintAmount);
        count += mintAmount;
    }*/

    function mint( uint256 mintAmount) countLessThanTotalSupply external {
        _mint(msg.sender,mintAmount * 10**uint(decimals()));
        _burn(owner,mintAmount);
        count += mintAmount;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getBalanceOfContract() public view returns (uint256) {
        return balanceOf(address(this));
    }

    function getCountOfMintedTokens() public view returns(uint256) {
        return count;
    }
}

// 100000000000000000000

