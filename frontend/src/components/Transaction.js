import React, { Component, useContext, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import logo from "./raw/logoveyazi.png";
import "./css/dashboard.css";
import Table from "react-bootstrap/Table";
import "./css/Transaction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataList from "./datalist";
import { Input } from "antd";
import { Button } from "antd";
import { BankingContext } from "../context/BankingContext";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
  faCircleDown,
  faCircleUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
const { Header, Content, Footer, Sider } = Layout;

const Transaction = () => {
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

  return (
    <Layout hasSider>
      <Navbar type="normal"></Navbar>

      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Content className="bodyTransaction ">
          <div
            className="col-9 transactionTable  "
            style={{
              width: "80%",
              marginTop: "2%",
              height: "4em",
              marginLeft: "10%",
            }}
          >
            <Input
              className="sendButtons "
              size="large"
              style={{ width: "40%", marginLeft: "5%", marginTop: "10px" }}
              placeholder="Wallet Address of Receiving Account"
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <Input
              className="sendButtons"
              size="large"
              style={{ width: "25%", marginLeft: "2%" }}
              placeholder="Transfer Amount(ETH)"
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button
              className="sendButtons"
              style={{ marginLeft: "9%", height: "3em" }}
              onClick={() => sendEther(wallet_address, amount)}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "8px" }}
              />
              Send Ethereum
            </Button>
          </div>

          <div
            className="justify-content-center transactionTable"
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              marginBottom: "7%",
              marginTop: "2%",
            }}
          >
            <h2
              className="inter"
              style={{
                paddingLeft: "20px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Transaction History
            </h2>
            <div
              style={{
                marginRight: "10px",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              <DataList transactions={transactions} type="transaction" />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Transaction;
