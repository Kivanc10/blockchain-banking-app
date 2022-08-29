import { Layout, Menu } from "antd";
import React, { Component, useContext, useState, useEffect } from "react";
import logo from "./raw/logoveyazi.png";
import "./css/adminPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as V from "victory";
import intertech from "./raw/intertechLogo.png";
import Chart from "./panelChart";
import Chart2 from "./panelChart2";
import DataList from "./datalist";
import { BankingContext } from "../context/BankingContext";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryPie,
  VictoryBar,
  VictoryScatter,
} from "victory";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
  faUsers,
  faSquareCaretDown,
  faArrowAltCircleRight,
  faCaretDown,
  faMagnifyingGlass,
  faGear,
  faFilter,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import Navbar from "./Navbar";
const { Header, Content, Footer, Sider } = Layout;

const data = [
  { x: "Oct 2011", y: 70 },
  { x: "Jan 2012", y: 99 },
  { x: "Mar 2012", y: 100 },
  { x: "Apr 2012", y: 178 },
  { x: "Jun 2012", y: 245 },
  { x: "Sep 2012", y: 400 },
  { x: "Dec 2012", y: 500 },
];

const sampleData = [
  { x: "1-7", y: 19 },
  { x: "8-18", y: 25 },
  { x: "18>", y: 56 },
];

const App = () => {
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
    <div className="">
      <Layout hasSider>
        <Navbar type="admin"></Navbar>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Content className="body">
            <div className="container-fluid mainWrapper justify-content-center">
              <div className="row ">
                <div class="col-6">
                  <Chart />
                </div>
                <div class="col-6">
                  <Chart2 />
                </div>
              </div>
            </div>
            <div
              className="container-fluid col-10 justify-content-center bg-light"
              style={{ borderRadius: "25px", height: "23  em" }}
            >
              <br />
              <div className="navBarDiv">
                <nav class="navbar navbar-light navBarStyle1">
                  <div class="container-fluid">
                    <a class="navbar-brand">
                      <p className="userListTxt">User List</p>
                    </a>
                  </div>
                </nav>
              </div>

              <DataList transactions={transactions} />
            </div>
            <div className="row"></div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
