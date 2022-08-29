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
  const { sendEthereum, getTransactionHistory, getEtherBalanceOfCurrentUser } =
  useContext(BankingContext);
const [wallet_address, setWalletAddress] = useState("");
const [amount, setAmount] = useState("0");
const [transactions, setTransactions] = useState([]);
const [userBalance, setUserBalance] = useState(0);

useEffect(() => {
  // let interval = setInterval(() => { }, 1000 * 60 * 60);

  //console.log("prev -> ",previous)

  const load = async () => {
    const userBalance = await getEtherBalanceOfCurrentUser();
    const transactions = await getTransactionHistory();
    setUserBalance(userBalance.toString());
    console.log("transactions --> ", transactions);
    setTransactions(transactions);
  };
  load().catch((e) => console.log("merr --> ", e.message));
  //window.alert(JSON.stringify(transactions))
  //  return () => previous = transactions.length;
  // return () => clearInterval(interval);
}, [userBalance]);

const sendEther = async (wallet_address, amount) => {
  sendEthereum(wallet_address, amount)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
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
            <Form.Control type="email" placeholder="Enter Customer name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Invoice ID</Form.Label>
            <Form.Control type="email" placeholder="Enter Invoice ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label><br/>
            <Button className="form-control" style={{height:'2.4em'}}><FontAwesomeIcon className="ServiceIcon" icon={faSearch} /></Button>
          </Form.Group>
        </div>
        {/* Form  End*/}
        {/* Table  Start*/}
        <div className="container-fluid col-8 justify-content-center bg-light ">
        <DataList transactions={transactions} style={{width:'100%'}} />
        </div>
        {/* Table  End*/}
      </Content>
    </Layout>
  </Layout>
);
    };

export default LogPage;
