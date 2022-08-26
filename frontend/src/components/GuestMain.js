import { Layout, Menu, Row } from "antd";
import React from "react";
import logo from "./raw/logoveyazi.png";
import "./css/logPage.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
const { Content, Sider } = Layout;

const LogPage = () => (
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
        <Row style={{ marginTop: '10em' }}>
          <div className="container-fluid col-8 d-flex justify-content-center">
            <div className="container tRemain">
              <h3 className="text-center">Days Remaining</h3>
            </div>
          </div>
        </Row>
        <Row style={{ marginTop: '1em' }}>
          <div className="container-fluid col-8 d-flex justify-content-between ">
            <div className="BPbox">
              <h3 className="text-center">Balance</h3>
            </div>
            <div className=" BPbox">
              <h3 className="text-center">Parents</h3>
            </div>
          </div>

        </Row>

      </Content>
    </Layout>
  </Layout>
);

export default LogPage;
