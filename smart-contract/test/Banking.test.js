const { expect } = require("chai");
//const { ethers, waffle} = require("hardhat");
//const { ethers } = require("hardhat")

const { ethers, waffle} = require("hardhat");
const provider = waffle.provider;

describe("Token contract", function () {

    let Token;
    let InheritumToken;
    let owner;
    let addr1;
    let addr2;
    let addr3;
    let addr4;
    let addrs;
    let BankContract;
    let bankContract;
    let weiVal = 10**18; // 1 ether

    beforeEach(async function () {
        [owner, addr1, addr2, addr3, addr4, ...addrs] = await ethers.getSigners(); // get address;
        Token = await ethers.getContractFactory("Inheritum");
        InheritumToken = await Token.deploy();
        await InheritumToken.deployed(); // wait until it will be deployed
        BankContract = await ethers.getContractFactory("BankingApp");
        bankContract = await BankContract.deploy(InheritumToken.address, InheritumToken.getOwner()); // give inheritum address as argument
        await bankContract.deployed()
    })

    describe("deployment", function () {
        it("Should set the right owner", async function () {
            expect(await InheritumToken.getOwner()).to.equal(owner.address);
            console.log("Token name", await InheritumToken.name())
        })

        it("should get the total supply of tokens to the owner (initally)", async function () {
            const ownerBalance = await InheritumToken.balanceOf(owner.address);
            expect(await InheritumToken.totalSupply()).to.equal(ownerBalance);
            expect(await bankContract.getBalanceOfInheritumToken()).to.equal(ownerBalance)
        })
        it("should the balance of users except owner of the token is 0", async function () {
            const addr1Balance = await InheritumToken.balanceOf(addr1.address);
            const addr2Balance = await InheritumToken.balanceOf(addr2.address);
            // başka hesap adına fonk çağırmak , aynı işlevi yapan 2 fonk ama farklı kontratlardan
            const adr3BalanceFromBankContract = await bankContract.connect(addr3).getBalanceOfInheritumToken();

            expect(addr1Balance).to.equal(0);
            expect(addr2Balance).to.equal(0);
            expect(adr3BalanceFromBankContract).to.equal(0)

        })

        it("should token address of the Banking app equal to address of the Inheritum token", async function () {
            const tokenAddressOfBankContract = await bankContract.token();
            expect(tokenAddressOfBankContract).to.equal(InheritumToken.address);
        })

    })

    describe("Transfer Inheritum Token between accounts with owner and Allowances", function () {
        it("allow a user to spend token by admin then send ether to another user and give user1 token(inheritum)", async function () {
           
           // console.log(weiVal.toString())
            //const ethVal = ethers.utils.formatEther(weiVal);
            //console.log(await InheritumToken.approve(addr1.address,BigInt(weiVal)))
            // reacttaki müdahale gibi düşün
            /*
            sendEther fonk çağırılmadan önce admin tarafından imzalanmış fonk. çağırılmalı
            */
            await InheritumToken.approve(addr1.address,BigInt(weiVal))
           // expect(await InheritumToken.approve(addr1.address,BigInt(weiVal))).to.equal(true)
            expect(await InheritumToken.allowance(owner.address, addr1.address)).to.equal(BigInt(weiVal));
            // izin verilmeyen kullanıcının limiti 0
            expect(await InheritumToken.allowance(owner.address,addr2.address)).to.equal(BigInt(0));
            //expect(await InheritumToken.approve(addr1.address,BigInt(weiVal))).to.equal(true);

            //await bankContract.sendEther(addr2.address,BigInt(weiVal)); // *connect(addr1)*/
            //await bankContract.getMyBalance();
            let etherBalanceOfAddr1Before = await provider.getBalance(addr2.address);
            let inheritumBalanceOfAddr1Before = await bankContract.connect(addr1).getBalanceOfInheritumToken();
            expect(inheritumBalanceOfAddr1Before).to.equal(0)
            console.log("addr1.balance (before) -> ",etherBalanceOfAddr1Before)
            await bankContract.connect(addr1).sendEther(addr2.address,BigInt(weiVal),{
                value : ethers.utils.parseEther("1.0")
            })
            let etherBalanceOfAddr1After = await provider.getBalance(addr2.address);
            console.log("addr1.balance (after) -> ",etherBalanceOfAddr1After)
            // 10000000000000000000000 ->10001000000000000000000 (ether balancı arttı)
            expect(BigInt(etherBalanceOfAddr1Before) + BigInt(10**18)).to.equal(BigInt(etherBalanceOfAddr1After))
            // adres 1 için ether balancı yap
            /*
                reacttaki işlem gibi düşün
                send ether işlemi bittikten sonra react tarafında bu fonk. admin
                tarafından çağırılmalı
            */ 
            // after the operation , user should transfer money to related user
            /*
            adress 1 in token balancı arttı
            */
            await InheritumToken.transfer(addr1.address,BigInt(weiVal));
            let inheritumBalanceOfAddr1After = await bankContract.connect(addr1).getBalanceOfInheritumToken();
            expect(inheritumBalanceOfAddr1After).to.equal(BigInt(weiVal))
        })

    })

    describe("Add person and add child get child",function () {
        // admin cannot be registered
        it("add person to system will be reverted if sender is owner",async function () {
            await expect(bankContract.addPerson("Mustafa",55)).to.be.revertedWith("You're admin") // 
        })
        
        it("add person to system with an account that except owner one",async function () {
            await bankContract.connect(addr1).addPerson("Mustafa",55); // add addr1 to system as mustafa,55
            let persons = await bankContract.getPersons();
            //console.log(persons)
            /*for (let i = 0;i<persons.length;i++) {
                if (persons)
            }*/
            /*
            sisteme eklendiğinden emin olundu
            */
            let fetchAdr1 = await bankContract.personList(addr1.address)
            expect(fetchAdr1.name).to.equal("Mustafa");
            expect(fetchAdr1.myAddress).to.equal(addr1.address)
        })
        it("should that user who logged in to system can send ether or token to anyone",async function() {
           // reactta owner fonk. çağırması gibi
           expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(0)
           await InheritumToken.approve(addr1.address,BigInt(weiVal))
           expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(BigInt(weiVal))
           // let persons = await bankContract.getPersons();
           // console.log(persons)

           // ether göndermen için admin tarafından tanınmış limitin olmalı
            await bankContract.connect(addr1).addPerson("Mustafa",55); 
            // send ether(1) from adres1 to adres 2 (person to user)
            let etherBalanceOfAddr2Before = await provider.getBalance(addr2.address);
            let etherBalOfAdr1 = await provider.getBalance(addr1.address);
            console.log("bal 1 -> ",etherBalOfAdr1)
            await bankContract.connect(addr1).sendEther(addr2.address,BigInt(weiVal),{
                value : ethers.utils.parseEther("1.0")
            })

            let etherBalanceOfAddr2After = await provider.getBalance(addr2.address);
            // adres 2 balance arttı
            expect(BigInt(etherBalanceOfAddr2Before) + BigInt(10**18)).to.equal(BigInt(etherBalanceOfAddr2After))
            //expect(BigInt() + BigInt(weiVal)).to.equal(etherBalOfAdr1)
            console.log("after bal 1 -> ",await provider.getBalance(addr1.address))
        })

        it("should that user who logged in to system can send token to anyone",async function () {
             // reactta owner fonk. çağırması gibi
             expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(0)
             await InheritumToken.approve(addr1.address,BigInt(weiVal))
             expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(BigInt(weiVal))
             // let persons = await bankContract.getPersons();
             // console.log(persons)
             await InheritumToken.transfer(addr1.address,BigInt(weiVal)); // send token to addr1 by owner

             let tokenBalanceOfAdr1 = await bankContract.connect(addr1).getBalanceOfInheritumToken();
             expect(tokenBalanceOfAdr1).to.equal(BigInt(weiVal)) // tokenlar geldi

             await InheritumToken.connect(addr1).transfer(addr2.address,BigInt(weiVal));

             expect(await bankContract.connect(addr1).getBalanceOfInheritumToken()).to.equal(0) // hepsi gönderildi 0 landı
             expect(await bankContract.connect(addr2).getBalanceOfInheritumToken()).to.equal(BigInt(weiVal)) // tüm token adr2 ye gönderildi
        })

        it("add and get child",async function() {
            
        })
    })

    // npx hardhat test

})
