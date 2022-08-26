import { Button, Modal } from 'antd';
import React, { useState,useContext } from 'react';
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BankingContext } from "../context/BankingContext";

import {

  faCirclePlus,

} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name,setName] = useState("");
  const [wallet_address,setWalletAddress] = useState("")
  const [age,setAge] = useState(0);
  const {linkAccountToCurrentUser} = useContext(BankingContext);

  const linkAccount = async (wallet_address,name,age) => {
    console.log(wallet_address,name,age)
    linkAccountToCurrentUser(wallet_address,name,age)
    .then((res) => {
      console.log(res)
      //window.location.reload();
      //linkAccount("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC","salih",25)
    }).catch((e) => {
      console.log("errro ->", e)
    })
  }


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChange = (date, dateString) => {
    // ---
    const birthDate = date._d.getFullYear();
    const currentYear = new Date().getFullYear()
    console.log(date);
    setAge(currentYear - birthDate);
    console.log("age --> ",age)
  };

  return (
    <>
      <button       
                    onClick={showModal}
                    type="account"
                    className="btn btn-primary buttons float-end"
                    title="Create new Inheritor"
                  >
                    <FontAwesomeIcon
                      className="ServiceIcon fa-2x"
                      icon={faCirclePlus}
                    />
                  </button>
      <Modal title="Connect a new Inheritor account" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div className="col-12 col-md-12 register">
          {/*FORM START*/}
          <form style={{marginTop:'-3.4em'}} >
            <div className="mb-3">
              <label>Full name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Full name"
                onChange={e => setName(e.target.value)}
              />
            </div>  
            <div className="mb-3">
              <label>Wallet number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Wallet number"
                onChange={e => setWalletAddress(e.target.value)}
              />
            </div>
            <div className="mb-3 date">
              <label>Date of birth</label>
              <div>
                <Space direction="vertical">
                  <DatePicker onChange={onChange} />
                </Space>
              </div>
            </div>
            <div className="d-grid mb-2">
              <button onClick={() => linkAccount(wallet_address,name,age)} type="submit" className="btn btn-primary continue">
                Continue
              </button>
            </div>
            <p>
              By signing in, you're agree to our{" "}
              <a href="https://www.intertech.com.tr/kullanim-kosullari" target='_blank'>Terms & Condition</a> and{" "}
              <a href="https://www.intertech.com.tr/gizlilik-politikasi" target='_blank'>Privacy Policy.</a>
            </p>
          </form>
          {/*FORM END*/}
        </div>
      </Modal>
    </>
  );
};

export default App;