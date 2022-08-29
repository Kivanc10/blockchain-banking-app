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
  const {getEtherBalanceOfCurrentUser ,getAllUsers,getAllAddressByOwner ,getCurrentUserInfo} =
    useContext(BankingContext);
  const [userBalance, setUserBalance] = useState(0);
  const [allUsers,setAllUsers] = useState([]);
  const [allAddresses,setAllAddresses] = useState([]);
  const [userInfos,setUserInfos] = useState([])

  useEffect(() => {
    const load = async () => {
      const userBalance = await getEtherBalanceOfCurrentUser();
      const users = await getAllUsers();
      const allAddresses = await getAllAddressByOwner();
      // window.alert(allAddresses);
      setUserBalance(userBalance.toString());
      setAllUsers(users);
      setAllAddresses(allAddresses)

            
      // window.alert(allUsers);
      
      //


   
    };
    load().catch((e) => console.log("merr --> ", e.message));
    if (allAddresses.length !== 0) {
      fetchUserInfos()
    }
   
    //window.alert(JSON.stringify(transactions))
    //  return () => previous = transactions.length;
    // return () => clearInterval(interval);
  }, [userBalance,allAddresses.length]);


  const fetchUserInfos = async () => {
    let td = []
    for (let i = 0 ;i < allAddresses.length;i++) {
      let ti = await getCurrentUserInfo(allAddresses[i]);

      
      // ti["address"] = allAddresses[i];
      // window.alert(Object.keys(ti))
      td.push({
        data : ti,
        address : allAddresses[i]
      });
    }
    setUserInfos(td);
  }


  return (
    <div className="">
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
            <img
              className="rounded mx-auto d-block mb-4 test"
              src={logo}
              alt="HeaderImage"
            ></img>
            <Menu.Item className="item mb-3">
              <FontAwesomeIcon className="ServiceIcon" icon={faUsers} /> Users
            </Menu.Item>
            <Menu.Item className="item mb-3">
              <FontAwesomeIcon
                className="fa-solid fa-arrow-right-to-bracket"
                icon={faArrowAltCircleRight}
              />{" "}
              Logs
            </Menu.Item>
            <Menu.Item className="item mb-3">
              <FontAwesomeIcon
                className="ServiceIcon"
                icon={faArrowRightFromBracket}
              />{" "}
              Sign out
            </Menu.Item>
            <img
              className="rounded mx-auto d-block fixed-bottom intertech2"
              src={intertech}
              alt="HeaderImage"
            ></img>
          </Menu>
        </Sider>
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

              <DataList transactions={userInfos} type = "userList" />
              {/* <p>{JSON.stringify(userInfos)}</p> */}
            </div>
            <div className="row"></div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
