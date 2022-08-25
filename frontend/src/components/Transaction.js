import React, { Component } from "react";
import { Layout, Menu } from "antd";
import logo from "./raw/logoveyazi.png";
import "./css/dashboard.css";
import Table from "react-bootstrap/Table";
import "./css/Transaction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataList from "./datalist";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
  faCircleDown,
  faCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
const { Header, Content, Footer, Sider } = Layout;

const App = () => (
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
      <Content className="bodyTransaction ">
        <div
          className="justify-content-center transactionTable"
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: "7%",
            marginTop: "4%",
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
          <div style={{ marginRight: "10px", marginLeft: "10px" }}>
            <DataList />
          </div>
        </div>
      </Content>
    </Layout>
  </Layout>
);
export default App;