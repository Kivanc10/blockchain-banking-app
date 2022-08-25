import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faCirclePlus,

} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    console.log(date, dateString);
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
              />
            </div>  
            <div className="mb-3">
              <label>Wallet number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Wallet number"
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
              <button type="submit" className="btn btn-primary continue">
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