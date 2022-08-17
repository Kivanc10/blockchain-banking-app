// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Inheritum.sol";

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
        uint age;
        uint balance;
        bool isLimited;
        address[] child;
        address[] parent;
        uint256 createdTime;
        address myAddress;
        HaveParent parentInfo;
      }

    // çocuk objesinin parentı hakkında bilgi edinme alt objesi (hasParent : true, parentAddr : 0x.......)
      struct HaveParent {
          bool have;
          address parent;
      }
    // debug için eventler başka eventler yazılcak
      event SentMoney(address from,address to,string childName,uint amount); //
      event BalanceGot(address owner,string child);
      event InheritumSent(address from,address to,uint amount);
        event allowanceTest(address recipient,uint amount);
    // persona ait transactionlar
      mapping(address => Transaction[]) personTransactions;

      mapping(address => Transaction[]) childTransactions;
      // person listeleri
      mapping(address => Person) public personList;
      // child listeleri
      mapping(address => Person) childList; //

    // balancelar
      mapping(address => uint) balances;

    // child ve normal person depolama yeri (db gibi düşün)
      Person[] persons;

    // msg.value ekleyebilmek için payable yapıldı
        constructor(address _token,address _owner) public payable {
            token = IERC20(_token); // Inheritum(_token)
            owner = _owner;
            
        }

    // para gönderilince persona transaction ekleme (direk çağırılmaz)
    // burdaki ayrım account un sender olup olmadığıdır. (gönderen veya alan olarak if check yapılır)
    //     (time,sender,receiver,amount) => Transaction struct
    // inputs -> 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,100000000000000000 (gibi)
      function addTransactionToPerson(address _to,uint _amount,bool isSender) internal {
        // (bool sent, bytes memory data) = _to.call{value: _amount}(""); // msg.value
         //require(sent, "Failed to send Ether");
         if (isSender) {
             personTransactions[msg.sender].push(
             Transaction(
                 block.timestamp,
                 msg.sender, // gönderen
                 _to, // alan
                 _amount
             )
         );
         }else{
             personTransactions[msg.sender].push(
             Transaction(
                 block.timestamp,
                 _to, // gönderen
                 msg.sender, // alan
                 _amount
             )
         );
         }
         
      }
    /*
    bu fonk child objesine transaction eklemeye yarar. eklemedeki ayrım accountun sender olup olmadığıdır.  (gönderen veya alan olarak if check yapılır)
    (time,sender,receiver,amount) => Transaction struct
    */
      function addTransactionToChild(address childAccount,address parentAccount,uint _amount,bool isSender) internal {
          if (isSender) {
            childTransactions[childAccount].push(
                        Transaction(
                            block.timestamp,                            
                            childAccount, // gönderen
                            parentAccount, // alan
                            _amount
                        )
                    );
          }else{
            childTransactions[childAccount].push(
              Transaction(
                  block.timestamp,
                  parentAccount, // gönderen
                  childAccount, // alan
                  _amount
              )
          );
          }
          
      }

      
        // persona göre transaction history getir
      function getTranscationHistory() public view returns (Transaction[] memory) { // public
          return personTransactions[msg.sender];
      }
    // child a göre transaction history getir
      function getTranscationHistoryForChild() public view returns(Transaction [] memory) {
          return childTransactions[msg.sender];
      }


    modifier isNotAdmin() {
        require(msg.sender != owner,"You're admin");
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
      function addPerson(string memory _name,uint _age) public userAlreadyExist /*checkAllowance(100000000000000000000)*/ returns (Person memory) {
          require(msg.sender != owner,"You're admin !!!");
          Person storage personPointer = personList[msg.sender];
          personPointer.name = _name;
          personPointer.age = _age;
          personPointer.balance = balances[msg.sender];
          personPointer.isLimited = false; //_isLimited
          personPointer.child = new address[](0);
          personPointer.parent = new address[](0);
          personPointer.createdTime = block.timestamp;
          personPointer.parentInfo = HaveParent(false,address(0));
          personPointer.myAddress = msg.sender;
          Person memory person_instance = personPointer;
          persons.push(person_instance);
         
          //emit InheritumSent(owner,msg.sender,100000000000000000000);
         // tokens will be transferred by owner in fronted....
          
          return person_instance;
      }

        modifier checkAllowance(uint amount) { // >= işlem yapmak için
        require(token.allowance(owner, msg.sender) >= amount, "allowance error , owner should increase your allowance");
        _;
    }

    /* çocuk ekleme ve normal accounta ekleme 2 aşamada yapılıyor
        bu ilk fonku, çocuk ekleme fonku.
        (salih,25) gibi.
        bunu çağırabilmek için msg.sender ın bir accountu olmalı (kontrolu HasAnAccount (modifier) yapıyor) 
    */

       /* modifier childAccountAlreadyExist(address candidate_child) {
            for (uint i = 0;i<personList[msg.sender].child.length;i++) {
                if (personList[msg.sender].child[i] == candidate_child) {
                    require(personList[msg.sender].child[i] == candidate_child,"Duplicate address error");
                }
            }
            //require(keccak256(bytes(childL[candidate_child].name)) == "","The child account already exist(address duplicate)");
            _;
        }*/

      function addChild(string memory _name,uint _age) internal DuplicateName(_name) returns (Person memory) {
        Person storage childPointer = childList[msg.sender];
         childPointer.name = _name;
          childPointer.age = _age;
          childPointer.balance = balances[msg.sender];
          childPointer.isLimited = true; //_isLimited
          childPointer.child = new address[](0);
          childPointer.parent = new address[](0);
          childPointer.createdTime = block.timestamp;
          childPointer.parentInfo = HaveParent(true,msg.sender);          
           Person memory child_instance = childPointer;
          persons.push(child_instance);
          return child_instance;
      }

    /*
    çocuk eklemenin son fonku (son adımı)
    eklenen çocuk(addChild() ile) ilgili normal accounta (msg.sender) bağlanıyor
    personListden çekilen normal account ın child arrayına çocuğun adresi ekleniyor
     ardından findTheChild fonk ile persons arrayına pushlanan child personun kopyası ve indeksi alınır
     en son bu person objesi childListe eklenir ve chidl objesine çocuğun adresi eklenir
    */
      function addAndLinkChild(string memory _name,uint _age,address childAccount) public HasAnAccountForChild(childAccount) returns(Person memory) { // childAccountAlreadyExist(childAccount)
        /*Person memory chidlInstance = addChild(_name,_age);
        chidlInstance.myAddress = childAccount; // myAddress will not write on storage just write on copy
        */
        addChild(_name,_age);
        //(Person memory childInstance,uint index) = findTheChild(_name);

        //personList[msg.sender].child[index] = childAccount; // write on the storage
        
        Person storage person = personList[msg.sender];
        //uint len = person.child.length;
        /*if (len == 0) person.child.push(childAccount);
        else{
            person.child.push(childAccount);
        }*/
        person.child.push(childAccount);
        (Person memory childInstance,uint index) = findTheChild(_name,true);
        persons[index].myAddress = childAccount; // add child address to object
        childList[childAccount] = childInstance; // add child to child list
        //person.child[index] = childAccount;  
        Person memory temp;
        childList[msg.sender] = temp; // make empty for msg.sender
        Person memory parentIns = personList[msg.sender];
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
        uint count = 0;
          for (uint i= 0;i < persons.length;i++) {  
              if (persons[i].isLimited && persons[i].myAddress != address(0) && persons[i].myAddress != owner) {
                  children[count] = persons[i];
                  count++;
              }
          }
          return children;
      }

      /*function getChildrenv2() public view returns (Person[] memory) public {
          
      }*/


    /*function addChildTheAddress(Person storage) public {

    }*/
    /*
        isme göre genel persons dizisi içinden child objesi ve onun indeksini döndüren kod
        kod sayesinde isme göre çocupu bulabilir ve kalıcı değişiklilkleri yapmak için gerekli indeksi bilgisini elde edebilriiz.
        persons[bulunan_index].name = "new_name" gibi, 
        bool returnErr argümanı ise hata döndürmeyi seçmeyi sağlar. (Başka fonk içinde bu fonk çağırılırsa revert edip kodun patlamasını önlemek için
        returErr false yapılır ve boş person struct döndürülür.
    */
    function findTheChild(string memory _name,bool returnErr) public view returns (Person memory,uint index) {
        for (uint i = 0;i<persons.length;i++) {
            if (persons[i].parentInfo.have && persons[i].parentInfo.parent == msg.sender && keccak256(bytes(persons[i].name)) == keccak256(bytes(_name))) {
                return (persons[i],i);
                /*for (uint j = 0;j<personList[msg.sender].child.length;j++) {
                    if (personList[msg.sender].child[j] == persons[i].parentInfo.parent) {
                        return (persons[i],j);
                    }
                }*/
            }
        }

        if(returnErr) revert("The child did not found");
        else{
            Person memory emptyPerson;
            return (emptyPerson,0);
        }      
    }

    // adrese göre çocuk getiren kod
    function getChildByAddress(address childAddr) public view HaveNotChildAccount(childAddr) returns (Person memory) {
        return childList[childAddr];
    }

    modifier HaveNotChildAccount(address childAddr) {
        require(keccak256(bytes(childList[childAddr].name)) != keccak256(bytes("")),"You already have not an account (child)");
        _;
    }
    // çocuk kaydını kontrol eden middleware(modifier)
       modifier HasAnAccountForChild(address childAddr) {
        require(keccak256(bytes(childList[childAddr].name)) == keccak256(bytes("")),"You already have an account (child)");
        _;
    }
    // farklı adreste ama aynı isimli bve aynı ebeveyne ait çocuk eklemesini engelleme modifieri
    modifier DuplicateName(string memory _name) {
        (Person memory theChild,uint index) = findTheChild(_name,false);
        require(keccak256(bytes(theChild.name)) == keccak256(bytes("")),"Child name already exist"); // 
        _;

    }

    // msg.senderin çocuklarının adresini getiren kod
    function getMyChild() public view returns (address[] memory) {
        return personList[msg.sender].child;
    }
    // add age modifier
    // msg.senderın yetişkin olup olamdığını kontrol eden kod
    modifier isAdult (bool isLimited) {
        require(isLimited == false,"You've a limited account , you're not an adult");
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
    function sendEther(address payable _to,uint amount) public payable isAdult(personList[msg.sender].isLimited) checkAllowance(amount) { // amount kadar token göndermek için kontrol yapılıyor.(admin izin vermeli)        
        //require(personList[msg.sender].isLimited == false,"You have a limited account");
         (bool sent, bytes memory data) = _to.call{value: amount}(""); // msg.value
         require(sent, "Failed to send Ether");
         if(keccak256(bytes(personList[msg.sender].name)) != "") { // if msg.sender is a person
             addTransactionToPerson(_to,amount,true); 
             addTransactionToChild(_to,msg.sender,amount,false); // add transaction to child
             // send token to the user
            // token.transferFrom(owner,msg.sender,amount); // send token to the user 
            // owner will transfer token to the user ---> transfer(user_address,_amount,{from : owner)
         }else if (keccak256(bytes(childList[msg.sender].name)) != "") {
             addTransactionToPerson(_to,amount,false); 
             addTransactionToChild(_to,msg.sender,amount,true);
         }
         //addTransactionToPerson(_to,amount);    
         //addTransactionToChild()

    }


    // send tokens to child
    // bunu çağıran user in balance ı en az amount kadar olmalı. // hata veriyor
    function sendTokenToChild(address _to,uint _amount) public checkBalance(_amount) isAdult(personList[msg.sender].isLimited) {
        token.transfer(_to,_amount);
    }
    

    modifier checkBalance (uint _amount)  {
        require(token.balanceOf(msg.sender) >= _amount);
        _;
    }

    // person olarak (msg.sender) ın hesabının olup olmadığını kontrol eder

    /*modifier HasAnAccount() {
        require(keccak256(bytes(personList[msg.sender].name)) != keccak256(bytes("")),"You even have not an account , please open an account first");
        _;
    }*/
    // eklenecek userin var olup olamdığını kontrol eder
    modifier userAlreadyExist() {
        require(keccak256(bytes(personList[msg.sender].name)) == keccak256(bytes("")),"You already have an account");
        _;
    }

    // isme göre çocuğun balance ını getiren kod
    function getMyChildBalance(string memory _name) public returns (uint) {
        (Person memory theChild,uint index) = findTheChild(_name,true);
        emit BalanceGot(theChild.myAddress,theChild.name);
        return theChild.myAddress.balance;        
    }
    // get my balance(msg.sender)
    function getMyBalance() public view returns (uint) {
        return msg.sender.balance;
    }

    function getBalanceOfInheritumToken() public view returns (uint256) {
        return token.balanceOf(msg.sender);
    }

   
}

