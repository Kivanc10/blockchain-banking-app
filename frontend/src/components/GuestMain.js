import { Layout, Menu } from "antd";
import React from "react";
import logo from "./raw/logoveyazi.png";
import "./css/dashboard.css";
// import "./css/GuestMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import intertech from "./raw/intertechLogo.png";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import {
  faHome,
  faGlobe,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
const { Header, Content, Footer, Sider } = Layout;

const GuestMain = () => {
  return (
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
            <FontAwesomeIcon className="ServiceIcon" icon={faHome} /> Dashboard
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
        <Content className="bodyDashboard justify-content-evenly">
          <MDBRow style={{ marginTop: "150px", marginLeft: "220px" }}>
            <MDBCol md="10 box5-2" className="d-flex justify-content-center">
              <div style={{ height: "200px" }}>Days remaining</div>
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ marginLeft: "250px", marginTop: "50px" }}>
            <MDBCol md="4 box5-2" className="d-flex justify-content-evenly">
              <div style={{ height: "300px" }}>Balance</div>
            </MDBCol>

            <MDBCol
              md="4 box5-2"
              className="d-flex justify-content-evenly"
              style={{ marginLeft: "150px" }}
            >
              <div>Parents</div>
            </MDBCol>
          </MDBRow>
        </Content>
      </Layout>
    </Layout>
  );

  // zaman sayaci
  // mirastan ne kadar para dusuyor
};

export default GuestMain;
