// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Inheritium.sol";

contract BankingApp {
    IERC20 public token;
    address owner;
    // define transaction struct
    struct Transaction {
        uint256 timestamp;
        address sender;
        address receiver;
        uint256 amount;
    }
    // define person struct
    struct Person {
        string name;
        uint256 age;
        uint256 balance;
        bool isLimited;
        address[] children;
        address[] parents;
        uint256 createdTime;
    }

    // debug için eventler başka eventler yazılcak
    event SentMoney(address from, address to, string childName, uint256 amount); //
    event BalanceGot(address owner, string child);
    event InheritumSent(address from, address to, uint256 amount);
    event allowanceTest(address recipient, uint256 amount);

    // persona ait transactionlar
    mapping(address => Transaction[]) transactions;
    mapping(address => Person) public userList;

    // child ve normal person depolama yeri (db gibi düşün)
    Person[] persons;

    // msg.value ekleyebilmek için payable yapıldı
    constructor(address _token, address _owner) payable {
        token = IERC20(_token); // Inheritum(_token)
        owner = _owner;
    }

    // para gönderilince persona transaction ekleme (direk çağırılmaz)
    // burdaki ayrım account un sender olup olmadığıdır. (gönderen veya alan olarak if check yapılır)
    //     (time,sender,receiver,amount) => Transaction struct
    // inputs -> 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,100000000000000000 (gibi)
    function addTransaction(
        address _to,
        uint256 _amount,
        bool isSender
    ) internal {
        // (bool sent, bytes memory data) = _to.call{value: _amount}(""); // msg.value
        //require(sent, "Failed to send Ether");
        if (isSender) {
            transactions[msg.sender].push(
                Transaction(
                    block.timestamp,
                    msg.sender, // gönderen
                    _to, // alan
                    _amount
                )
            );
        } else {
            transactions[msg.sender].push(
                Transaction(
                    block.timestamp,
                    _to, // gönderen
                    msg.sender, // alan
                    _amount
                )
            );
        }
    }

    // persona göre transaction history getir
    function getTranscationHistory()
        public
        view
        returns (Transaction[] memory)
    {
        // public
        return transactions[msg.sender];
    }

    modifier isNotAdmin() {
        require(msg.sender != owner, "You're admin");
        _;
    }

    // normal person ekleme fonk. (mehmet,55) gibi
    /*
          before execute this function , you should set something in frontend by owner address;
          - call approve func as owner to allow the user to spend tokens
          - if the tokens will be sent to the user , then user can execute this function
          - so , we execute some functions before user call this function. (allowance cannot be 0 (user))
          token.approve(user_address,100000000000000000000);
          uint allowanceAfter = token.allowance(owner,msg.sender);
          allowanceAfter == 100000000000000000000 (should be)
          ------------------------------------------
           after executing function , owner(admin) transfer money to the user in frontend.
            transfer(user_address,amount) 
*/
    function addPerson(
        string memory _name,
        uint256 _age,
        bool isLimited
    )
        public
        userAlreadyExist /*checkAllowance(100000000000000000000)*/
        returns (Person memory)
    {
        require(msg.sender != owner, "You're admin !!!");

        Person storage newPerson = userList[msg.sender];
        newPerson.name = _name;
        newPerson.age = _age;
        newPerson.balance = 0;
        newPerson.isLimited = isLimited; //_isLimited
        newPerson.children = new address[](0);
        newPerson.parents = new address[](0);
        newPerson.createdTime = block.timestamp;

        Person memory person_instance = newPerson;
        persons.push(person_instance);

        //emit InheritumSent(owner,msg.sender,100000000000000000000);
        // tokens will be transferred by owner in fronted....

        return person_instance;
    }

    modifier checkAllowance(uint256 amount) {
        // >= işlem yapmak için
        require(
            token.allowance(owner, msg.sender) >= amount,
            "allowance error , owner should increase your allowance"
        );
        _;
    }

    /*
    çocuk eklemenin son fonku (son adımı)
    eklenen çocuk(addChild() ile) ilgili normal accounta (msg.sender) bağlanıyor
    userListden çekilen normal account ın child arrayına çocuğun adresi ekleniyor
     ardından findTheChild fonk ile persons arrayına pushlanan child personun kopyası ve indeksi alınır
     en son bu person objesi userListe eklenir ve chidl objesine çocuğun adresi eklenir
    */
    function linkAccount(address childAccount)
        public
        HasAnAccountForChild(childAccount)
        returns (Person memory)
    {
        // childAccountAlreadyExist(childAccount)
        /*Person memory chidlInstance = addChild(_name,_age);
        chidlInstance.myAddress = childAccount; // myAddress will not write on storage just write on copy
        */
        //(Person memory childInstance,uint index) = findTheChild(_name);

        //userList[msg.sender].child[index] = childAccount; // write on the storage

        Person storage person = userList[msg.sender];
        //uint len = person.child.length;
        /*if (len == 0) person.child.push(childAccount);
        else{
            person.child.push(childAccount);
        }*/
        person.children.push(childAccount);

        Person memory parentIns = userList[msg.sender];
        return parentIns;
    }

    // get all persons

    function getPersons() public view returns (Person[] memory) {
        return persons;
    }

    // güncelle child list kullan
    // persons içinden child accountları bulan kod
    function getChildren() public view returns (Person[] memory) {
        Person[] memory children = new Person[](persons.length);
        uint256 count = 0;
        for (uint256 i = 0; i < persons.length; i++) {
            if (persons[i].isLimited) {
                children[count] = persons[i];
                count++;
            }
        }
        return children;
    }

    /*
        isme göre genel persons dizisi içinden child objesi ve onun indeksini döndüren kod
        kod sayesinde isme göre çocupu bulabilir ve kalıcı değişiklilkleri yapmak için gerekli indeksi bilgisini elde edebilriiz.
        persons[bulunan_index].name = "new_name" gibi, 
        bool returnErr argümanı ise hata döndürmeyi seçmeyi sağlar. (Başka fonk içinde bu fonk çağırılırsa revert edip kodun patlamasını önlemek için
        returErr false yapılır ve boş person struct döndürülür.
    */
    function findTheChild(string memory _name, bool returnErr)
        public
        view
        returns (Person memory, uint256 index)
    {
        for (uint256 i = 0; i < persons.length; i++) {
            if (
                persons[i].parents.length > 0 &&
                persons[i].parents[0] == msg.sender && // TODO: CHANGE THIS
                keccak256(bytes(persons[i].name)) == keccak256(bytes(_name))
            ) {
                return (persons[i], i);
                /*for (uint j = 0;j<userList[msg.sender].child.length;j++) {
                    if (userList[msg.sender].child[j] == persons[i].parentInfo.parent) {
                        return (persons[i],j);
                    }
                }*/
            }
        }

        if (returnErr) revert("The child did not found");
        else {
            Person memory emptyPerson;
            return (emptyPerson, 0);
        }
    }

    function getUser(address addr) public view returns (Person memory) {
        return userList[addr];
    }

    modifier HaveNotChildAccount(address childAddr) {
        require(
            keccak256(bytes(userList[childAddr].name)) != keccak256(bytes("")),
            "You already have not an account (child)"
        );
        _;
    }
    // çocuk kaydını kontrol eden middleware(modifier)
    modifier HasAnAccountForChild(address childAddr) {
        require(
            keccak256(bytes(userList[childAddr].name)) == keccak256(bytes("")),
            "You already have an account (child)"
        );
        _;
    }
    // farklı adreste ama aynı isimli bve aynı ebeveyne ait çocuk eklemesini engelleme modifieri
    modifier DuplicateName(string memory _name) {
        (Person memory theChild, uint256 index) = findTheChild(_name, false);
        require(
            keccak256(bytes(theChild.name)) == keccak256(bytes("")),
            "Child name already exist"
        ); //
        _;
    }

    // msg.senderin çocuklarının adresini getiren kod
    function getMyChild() public view returns (address[] memory) {
        return userList[msg.sender].children;
    }

    // add age modifier
    // msg.senderın yetişkin olup olamdığını kontrol eden kod
    modifier isAdult(bool isLimited) {
        require(
            isLimited == false,
            "You've a limited account , you're not an adult"
        );
        _;
    }

    // çocuğa veya herhangi bir adrese kod gönderen kod , işlem sonucu msg.senderin hesabına işlenir.
    /*
        yeni anlayışa göre ->
         - ether gönderen user a ödül olarak tokenımzıdan verelim.
         - tokenı owner atmalı ondan dolayı öncesinde reactta bazı değişiklikler yapılmalı. ( approve(bool) , allowance(uint))
         - msg.value lazım (göndermek için)
         - sonra transferFrom metodu çağır.

    */
    function sendEther(address payable _to, uint256 amount)
        public
        payable
        isAdult(userList[msg.sender].isLimited)
        checkAllowance(amount)
    {
        // amount kadar token göndermek için kontrol yapılıyor.(admin izin vermeli)
        //require(userList[msg.sender].isLimited == false,"You have a limited account");
        (bool sent, ) = _to.call{value: amount}(""); // msg.value
        require(sent, "Failed to send Ether");
        if (keccak256(bytes(userList[msg.sender].name)) != "") {
            // if msg.sender is a person
            addTransaction(_to, amount, true);
            addTransaction(_to, amount, false); // add transaction to child
            // send token to the user
            // token.transferFrom(owner,msg.sender,amount); // send token to the user
            // owner will transfer token to the user ---> transfer(user_address,_amount,{from : owner)
        } else if (keccak256(bytes(userList[msg.sender].name)) != "") {
            addTransaction(_to, amount, false);
            addTransaction(_to, amount, true);
        }
        //addTransactionToPerson(_to,amount);
        //addTransactionToChild()
    }

    // send tokens to child
    // bunu çağıran user in balance ı en az amount kadar olmalı. // hata veriyor
    function sendTokenToChild(address _to, uint256 _amount)
        public
        checkBalance(_amount)
        isAdult(userList[msg.sender].isLimited)
    {
        token.transfer(_to, _amount);
    }

    modifier checkBalance(uint256 _amount) {
        require(token.balanceOf(msg.sender) >= _amount);
        _;
    }

    // person olarak (msg.sender) ın hesabının olup olmadığını kontrol eder

    /*modifier HasAnAccount() {
        require(keccak256(bytes(userList[msg.sender].name)) != keccak256(bytes("")),"You even have not an account , please open an account first");
        _;
    }*/
    // eklenecek userin var olup olamdığını kontrol eder
    modifier userAlreadyExist() {
        require(
            keccak256(bytes(userList[msg.sender].name)) == keccak256(bytes("")),
            "You already have an account"
        );
        _;
    }

    // isme göre çocuğun balance ını getiren kod
    function getMyChildBalance(string memory _name) public returns (uint256) {
        (Person memory theChild, ) = findTheChild(_name, true);
        emit BalanceGot(msg.sender, theChild.name);
        return theChild.balance;
    }

    // get my balance(msg.sender)
    function getMyBalance() public view returns (uint256) {
        return msg.sender.balance;
    }

    function getBalanceOfInheritumToken() public view returns (uint256) {
        return token.balanceOf(msg.sender);
    }
}
