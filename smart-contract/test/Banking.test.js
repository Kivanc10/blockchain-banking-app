const { expect } = require("chai");
//const { ethers, waffle} = require("hardhat");
//const { ethers } = require("hardhat")

const { ethers, waffle } = require("hardhat");
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
    let weiVal = 10 ** 18; // 1 ether
    const tokenAmountAsWei = BigInt(10 ** 20)
    const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
    //    let allowanceAndApprove;

    async function allowanceAndApprove(user_address, amount) {
        let allowance = await InheritumToken.allowance(owner.address, user_address);
        console.log("allowance at first ", allowance);

        if (allowance < amount) { // need to be approved
            await InheritumToken.approve(user_address, amount);
            allowance = await InheritumToken.allowance(owner.address, user_address);
            console.log("new allowance ", allowance);
        }

    }

    async function sendTokenFromOwnerToUserasReward(user_address) {

        allowanceAndApprove(user_address, tokenAmountAsWei);
        await InheritumToken.transfer(user_address, tokenAmountAsWei);

    }

    async function makeLinkedAccountUnLimitedByOwner(linked_account_address) {
        let oldChildNewPerson = await bankContract.makeAccountisLimited(linked_account_address)
        return oldChildNewPerson
    }

    beforeEach(async function () {
        [owner, addr1, addr2, addr3, addr4, ...addrs] = await ethers.getSigners(); // get address;
        Token = await ethers.getContractFactory("Inheritium");
        InheritumToken = await Token.deploy();
        await InheritumToken.deployed(); // wait until it will be deployed
        BankContract = await ethers.getContractFactory("BankingApp");
        bankContract = await BankContract.deploy(InheritumToken.address, InheritumToken.getOwner()); // give inheritum address as argument
        await bankContract.deployed();
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


            allowanceAndApprove(addr1.address, BigInt(weiVal));

            //await bankContract.getMyBalance();
            let etherBalanceOfAddr1Before = await provider.getBalance(addr2.address);
            let inheritumBalanceOfAddr1Before = await bankContract.connect(addr1).getBalanceOfInheritumToken();
            expect(inheritumBalanceOfAddr1Before).to.equal(0)
            console.log("addr1.balance (before) -> ", etherBalanceOfAddr1Before)
            // adr1 must be logged in 
            await expect(bankContract.connect(addr1).sendEther(addr2.address, BigInt(weiVal), {
                value: ethers.utils.parseEther("1.0")
            })).to.be.revertedWith("You can link account after logged in")

            await bankContract.connect(addr1).addPerson("Adr1", 62, false)

            await bankContract.connect(addr1).sendEther(addr2.address, BigInt(weiVal), {
                value: ethers.utils.parseEther("1.0")
            })
            // send token from owner to addr1
            let etherBalanceOfAddr1After = await provider.getBalance(addr2.address);
            console.log("addr1.balance (after) -> ", etherBalanceOfAddr1After)
            // 10000000000000000000000 ->10001000000000000000000 (ether balancı arttı)
            expect(BigInt(etherBalanceOfAddr1Before) + BigInt(10 ** 18)).to.equal(BigInt(etherBalanceOfAddr1After))
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
            //await InheritumToken.transfer(addr1.address,BigInt(weiVal));
            sendTokenFromOwnerToUserasReward(addr1.address)
            let inheritumBalanceOfAddr1After = await bankContract.connect(addr1).getBalanceOfInheritumToken();
            expect(inheritumBalanceOfAddr1After).to.equal(tokenAmountAsWei)
        })

    })

    describe("Add person and add child get child and make transactions", function () {
        // admin cannot be registered
        it("add person to system will be reverted if sender is owner", async function () {
            await expect(bankContract.addPerson("Mustafa", 55, false)).to.be.revertedWith("You're admin") // 
        })

        it("add person to system with an account that except owner one", async function () {
            await bankContract.connect(addr1).addPerson("Mustafa", 55, false); // add addr1 to system as mustafa,55
            let person = await bankContract.getUser(addr1.address); // get user by address
            console.log(person)
            expect(person.name).to.equal("Mustafa")
            expect(person.age).to.equal(55)

            let otherWayToGetPerson = await bankContract.findThePerson("Mustafa", false) // false --> hata vermiyor , true -> exception atıyor
            expect(otherWayToGetPerson[0].name).to.equal("Mustafa")
            //sisteme eklendiğinden emin olundu



        })

        // ether gönderirken bile admin tarafından allowance tanınmalı bunun için reactta ekstra fonk tanımlarız
        it("should that user who logged in to system can send ether or token to anyone", async function () {
            // reactta owner fonk. çağırması gibi
            /* expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(0)
             await InheritumToken.approve(addr1.address,BigInt(weiVal))
             expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(BigInt(weiVal))*/
            allowanceAndApprove(addr1.address, BigInt(weiVal));
            // let persons = await bankContract.getPersons();
            // console.log(persons)

            // ether göndermen için admin tarafından tanınmış limitin olmalı
            await bankContract.connect(addr1).addPerson("Mustafa", 55, false);
            // send ether(1) from adres1 to adres 2 (person to user)
            let etherBalanceOfAddr2Before = await provider.getBalance(addr2.address);

            let etherBalOfAdr1 = await provider.getBalance(addr1.address);

            console.log("bal 1 -> ", etherBalOfAdr1)
            await bankContract.connect(addr1).sendEther(addr2.address, BigInt(weiVal), {
                value: ethers.utils.parseEther("1.0")
            })

            let etherBalanceOfAddr2After = await provider.getBalance(addr2.address);
            // adres 2 balance arttı
            expect(BigInt(etherBalanceOfAddr2Before) + BigInt(10 ** 18)).to.equal(BigInt(etherBalanceOfAddr2After))
            //expect(BigInt() + BigInt(weiVal)).to.equal(etherBalOfAdr1)
            console.log("after bal 1 -> ", await provider.getBalance(addr1.address))
        })

        it("should transaction will be recorded after sending ether operation for both sender and receiver", async function () {
            console.log("adr1 -> ", addr1.address, "adr2 ", addr2.address, "adr3 -> ", addr3.address)
            /*
            await InheritumToken.allowance(owner.address,addr1.address) // 0
            await InheritumToken.approve(addr1.address,BigInt(weiVal))
            await InheritumToken.allowance(owner.address,addr1.address) // weiVal // give allowance to addr1 by owner
            */
            allowanceAndApprove(addr1.address, BigInt(weiVal));
            // adr1 should logged in
            await bankContract.connect(addr1).addPerson("Mustafa", 55, false);
            // adr1 should link adr3 to itself
            //await bankContract.connect(addr1).linkAccount(addr3.address,"Salih",25);
            // çocuk kısıtlaması koyulursa
            /*await expect(bankContract.connect(addr1).sendEther(addr3.address,BigInt(weiVal),{ // send 1 ether from addr1 to adr3
                value : ethers.utils.parseEther("1.0")
            })).to.be.revertedWith("You have not any sub inheritor account") */// revert because of user has not any child

            await bankContract.connect(addr1).linkAccount(addr3.address, "Salih", 25); // adr1 should link adr3 to itself
            console.log("adr1 children ---> ", await bankContract.connect(addr1).getMyChild())
            console.log("adr1 children v2 ---> ", (await bankContract.connect(addr1).getMyChild())[0])

            await bankContract.connect(addr1).sendEther(addr3.address, BigInt(weiVal), { // send 1 ether from addr1 to adr3
                value: ethers.utils.parseEther("1.0")
            })

            let transactionHistoryofP1 = await bankContract.connect(addr1).getTranscationHistory();
            let transactionHistoryofP3 = await bankContract.connect(addr3).getTranscationHistory();
            console.log("transaction h1 -> ", transactionHistoryofP1)
            console.log("transaction h3 -> ", transactionHistoryofP3)
            expect(transactionHistoryofP1.length).to.equal(1)
            expect(transactionHistoryofP3.length).to.equal(1)
            expect(transactionHistoryofP1[0].sender).to.equal(addr1.address)
            console.log("transactionHistoryofP1[0] -> ", transactionHistoryofP1[0])
            expect(transactionHistoryofP3[0].receiver).to.equal(addr3.address)
        })

        // owner tarafından paara aktarılınca event çalışsın (transfer)
        //  

        it("should that user who logged in to system can send token to anyone if user's allowance and balance can afford it", async function () {
            // reactta owner fonk. çağırması gibi
            /* expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(0)
             await InheritumToken.approve(addr1.address,BigInt(weiVal))
             expect(await InheritumToken.allowance(owner.address,addr1.address)).to.equal(BigInt(weiVal))*/

            allowanceAndApprove(addr1.address, BigInt(weiVal));
            // let persons = await bankContract.getPersons();
            // console.log(persons)
            await InheritumToken.transfer(addr1.address, BigInt(weiVal)); // send token to addr1 by owner

            // get inheritum balance of addr1 after owner transfer tokens to addr1
            let tokenBalanceOfAdr1 = await bankContract.connect(addr1).getBalanceOfInheritumToken();
            expect(tokenBalanceOfAdr1).to.equal(BigInt(weiVal)) // tokenlar geldi
            // addr1 send tokens to addr2 (çocuklara para aktarma gibi);
            await InheritumToken.connect(addr1).transfer(addr2.address, BigInt(weiVal));
            // adr 1 balance o(sıfır)landı
            expect(await bankContract.connect(addr1).getBalanceOfInheritumToken()).to.equal(0) // hepsi gönderildi 0 landı
            // adr1 in tokenlarını adr2 aldı
            expect(await bankContract.connect(addr2).getBalanceOfInheritumToken()).to.equal(BigInt(weiVal)) // tüm token adr2 ye gönderildi
        })


        it("add and get child by owner should throw exception", async function () {
            await expect(bankContract.linkAccount(addr1.address, "Salih", 25)).to.be.revertedWith("You're admin") // 

        })

        it("should add and get child by any account that logged in ", async function () {
            await expect(bankContract.connect(addr1).linkAccount(addr2.address, "Salih", 25)).to.be.revertedWith("You can link account after logged in") // invoke linkAccount by addr1
            //consple.log(await bankContract.connect(addr1).getMyChild())
            // add adr1 to system
            await bankContract.connect(addr1).addPerson("Numan", 55, false);
            await bankContract.connect(addr1).linkAccount(addr2.address, "Salih", 25);

            const addr1Child = await bankContract.connect(addr1).getMyChild(); // [address]
            expect(addr1Child[0]).to.equal(addr2.address)

            // other way
            /*
            getPersons --> find normal user by address and access its child by adrress
            */
            /* let persons = await bankContract.getPersons();
             for (let i = 0;i<persons.length;i++) {
                   
             }*/
            /*
            - findThePerson ile ilgili isme sahip person ve index dönüyor (person,index)
            - person obj aldık
            - ismi doğruladık (üstte eklediğimiz isimle (Numan))
            - sonra person objesinin çocuklarını aldık (persona bağlı alt adres listesi)
            - sonra for ile içinde gezerken (çocukların) adresi adr2 ile aynı olan (eklenen çocuk) accountun parentının addr1
            olduğunu ispat ettik
            */
            let relatedPersonInfo = await bankContract.findThePerson("Numan", false); // get person
            const personObj = relatedPersonInfo[0]; // get person obj ( person,index)
            expect(personObj.name).to.equal("Numan")
            const lenChildren = personObj.children.length; // get length of child belong to addr1
            for (let i = 0; i < lenChildren; i++) {
                if (personObj.children[i] == addr2.address) { // find the child that added by addr1
                    //expect().to.equal(addr1.address)
                    let childAddr = personObj.children[i];
                    const childObj = await bankContract.getUser(childAddr)
                    expect(childObj.parents[0]).to.equal(addr1.address)
                }
            }

        })
    })


    describe("Make linked account unlimited by owner and test it", function () {
        it("link adr2 to adr1 as linked account", async function () {
            // add adr1 to system
            await bankContract.connect(addr1).addPerson("Mustafa", 55, false);
            // link adr2 to adr1
            await bankContract.connect(addr1).linkAccount(addr2.address, "Salih", 11);
            console.log("adr1 child -> ", await bankContract.connect(addr1).getMyChild())
            // prove that adr1's linked account is adr2
            expect((await bankContract.connect(addr1).getMyChild())[0]).to.equal(addr2.address)
            // prove that adr2's parent is adr1
            console.log("adr2 -> ",await bankContract.connect(addr2).getUser(addr2.address))
            expect((await bankContract.connect(addr2).getUser(addr2.address)).parents[0]).to.equal(addr1.address)

            makeLinkedAccountUnLimitedByOwner(addr2.address) // make adr2 unlimited , it is not linked account of adr1 anymore

            console.log("adr1 child new -> ",await bankContract.connect(addr1).getMyChild())
            // prove that adr1 child is removed by owner , zero address refers to deleted account(empty)
            expect((await bankContract.connect(addr1).getMyChild())[0]).to.equal(ZERO_ADDRESS)
            // prove that adr2's parent is removed by owner 
            expect((await bankContract.connect(addr2).getUser(addr2.address)).parents[0]).to.equal(ZERO_ADDRESS);

        })
    })

    // npx hardhat test

})
