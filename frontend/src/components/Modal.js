import { Button, Modal, Slider, Switch } from 'antd';
import React, { useState } from 'react';
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBRow, MDBCol, } from "mdb-react-ui-kit";
import {
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const [disabled, setDisabled] = useState(false);

    const onChange2 = (checked) => {
        setDisabled(checked);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };


    return (
        <>
            <MDBRow
                >
                <MDBCol md='12' className="mb-2 d-flex justify-content-center">
                    <Button type="primary iButton" onClick={showModal}>
                        Inheritor 1
                    </Button>
                    <Modal title="Settings" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <div className="col-12 col-md-12 register">
                            {/*FORM START*/}
                            <form style={{ marginTop: '-3.4em' }}>
                                <div className="mb-3">
                                    <label>Inheritance Age</label>
                                    <Slider defaultValue={18} disabled={disabled} />
                                </div>
                                <div className="mb-3">
                                    <label>Remaining Day : </label>
                                    <div style={{ width: '50px', borderRadius: '25px', backgroundColor: 'rgba(83, 89, 85,0.6)' }} className='text-center'>
                                        <span style={{}}>352</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label>Amount of inheritance</label>
                                    <Slider defaultValue={25} disabled={disabled} />
                                </div>
                                <hr />
                                <div className="d-grid mb-2">
                                    <button type="submit" className="btn btn-primary continue">
                                        Confirm
                                    </button>
                                </div>
                                <div className="d-grid mb-2">
                                    <button type="submit" className="btn btn-danger continue sButton">
                                        Delete This Account
                                        <FontAwesomeIcon
                                            className="ServiceIcon"
                                            icon={faTrash}
                                            style={{ marginLeft: '5px' }}
                                        />
                                    </button>
                                </div>

                            </form>
                            {/*FORM END*/}
                        </div>
                    </Modal>
                </MDBCol>
            </MDBRow>
        </>
    );
};

export default App;