import { Button, Layout, Menu } from "antd";
import React, { Component, useContext, useState, useEffect } from "react";
import logo from "./raw/logoveyazi.png";
import "./css/logPage.css";
import Form from "react-bootstrap/Form";
import { BankingContext } from "../context/BankingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataList from './datalist';
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
const { Content, Sider } = Layout;

const LogPage = () => {
  const { getTransactionHistory, getEtherBalanceOfCurrentUser,getAllTransactionByOwner , formatEther} = useContext(BankingContext);
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [balance, setBalance] = useState("");
  const [searchedName, setSearchedName] = useState("")
  const [searchedAddress, setSearchedAddress] = useState("")

  const [show, setShow] = useState(false)

useEffect(() => {
  const load = async () => {
    // let transactions = await getTransactionHistory();
    let tow = await getAllTransactionByOwner();
    // window.alert(tow)
    // window.alert(users)
    let balance = await getEtherBalanceOfCurrentUser();
    setBalance(balance)
    setAllTransactions(tow)
    // console.log(transactions)
  }

  load().catch((e) => console.log("err ---> ", e.message))
  // search(setSearchedAddress,allTransactions)

}, [balance])



  return(
  <Layout hasSider>
    <Sider
      className="menu"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu className="menu" defaultSelectedKeys={["4"]}>
        <img className="img-fluid test" src={logo} alt="HeaderImage"></img>
        <Menu.Item className="item">
          <FontAwesomeIcon className="ServiceIcon" icon={faHome} /> Dashboard
        </Menu.Item>
        <Menu.Item className="item">
          <FontAwesomeIcon className="ServiceIcon" icon={faGlobe} />{" "}
          Transactions
        </Menu.Item>
        <Menu.Item className="item">
          <FontAwesomeIcon
            className="ServiceIcon"
            icon={faArrowRightFromBracket}
          />{" "}
          Signout
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Content className="body">
        <div className="container-fluid col-8 d-flex TopHead">
          <h3>Log Information</h3>
        </div>
        {/* Form  Start*/}
        <div className="container-fluid d-flex justify-content-between col-8">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Customer</Form.Label>
              <Form.Control onChange={e => setSearchedAddress(e.target.value)} type="email" placeholder="Enter Customer Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search</Form.Label><br />
              <Button onClick={() => {
                setShow(!show)
                // setSearchedAddress("")
              }} className="form-control" style={{ height: '2.4em' }}><FontAwesomeIcon className="ServiceIcon" icon={faSearch} /></Button>
            </Form.Group>
          </div>
          {/* Form  End*/}
          {/* Table  Start*/}
          <div className="container-fluid d-flex col-8 ">
            <table class="table log_Table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Sender</th>
                  {/* <th scope="col">Last</th> */}
                  <th scope="col">Receiver</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>

                {(show && (allTransactions.length >= 1 && allTransactions !== undefined && allTransactions !== null)) ? (

                  allTransactions.map((e, i) => (

                    (searchedAddress === "" ? (
                      <tr key={e.timestamp.toString()} >
                        <th scope="row">{i + 1}</th>
                        <td>{e.sender}</td>
                        <td>{e.receiver} </td> {/*{e.address}*/}
                        <td>{formatEther(e.amount.toString()) + " ETH"}</td>
                        <td>{e.timestamp.toString()}</td>
                      </tr>
                    ) : (
                      ((Number("" + e.sender) === Number(searchedAddress) || Number("" + e.receiver) === Number(searchedAddress)) ? (
                        <tr key={e.timestamp.toString()} >
                          <th scope="row">{i + 1}</th>
                          <td>{e.sender}</td>
                          <td>{e.receiver} </td> {/*{e.address}*/}
                          <td>{formatEther(e.amount.toString())+ " ETH"}</td>
                          <td>{e.timestamp.toString()}</td>
                        </tr>
                      ) : (
                        <p></p>
                      ))

                    ))



                  ))
                ) : (
                  <p></p>
                )}


              </tbody>
            </table>
          </div>
          {/* Table  End*/}
        {/* <div className="container-fluid col-8 justify-content-center bg-light ">
        <DataList transactions={allTransactions} style={{width:'100%'}} />
        </div> */}
        {/* Table  End*/}
      </Content>
    </Layout>
  </Layout>
);
    };

export default LogPage;
