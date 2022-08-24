import React, { Component } from "react";
import { Layout, Menu } from "antd";
import logo from "./raw/logoveyazi.png";
import "./dashboard.css";
import Table from "react-bootstrap/Table";
import "./Transaction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <FontAwesomeIcon className="ServiceIcon fa-light" icon={faWallet} />{" "}
          My Wallet
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
      <Content className="body ">
        <div
          className="justify-content-center transactionTable"
          style={{
            backgroundColor: "white",
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: "7%",
            marginTop: "4%",
          }}
        >
          <h1
            className="inter"
            style={{
              paddingLeft: "20px",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            History
          </h1>

          <Table striped className="table">
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">Deposit</td>
                <td className="greenText">+$24.78</td>
                <td className="text text-center">11:34PM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="redButton icons"
                    icon={faCircleDown}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">SANDUSDT</td>
                <td className="redText">-$576</td>
                <td className="text text-center ">06.01AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>{" "}
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    className="greenButton icons"
                    icon={faCircleUp}
                  ></FontAwesomeIcon>
                </td>
                <td className="text">DOGUSDT</td>
                <td className="greenText">+$300</td>
                <td className="text text-center">06:45AM</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Content>
    </Layout>
  </Layout>
);
export default App;
