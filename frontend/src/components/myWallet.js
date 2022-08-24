import { Layout, Menu } from "antd";
import React from "react";
import logo from "./raw/logoveyazi.png";
import "./dashboard.css";
import "./GuestMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import intertech from "./raw/intertechLogo.png";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./myWallet.css";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import Chart from "./monthlyChart";
import { VictoryPie } from "victory";
const { Content, Sider } = Layout;

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
        <img
          className="rounded mx-auto d-block mb-4 test"
          src={logo}
          alt="HeaderImage"
        ></img>
        <Menu.Item className="item mb-3">
          <FontAwesomeIcon className="ServiceIcon" icon={faHome} /> Dashboard
        </Menu.Item>
        <Menu.Item className="item mb-3">
          <FontAwesomeIcon className="ServiceIcon fa-light" icon={faWallet} />{" "}
          My Wallet
        </Menu.Item>
        <Menu.Item className="item mb-3">
          <FontAwesomeIcon className="ServiceIcon" icon={faGlobe} />{" "}
          Transactions
        </Menu.Item>
        <Menu.Item className="item mb-3">
          <FontAwesomeIcon
            className="ServiceIcon"
            icon={faArrowRightFromBracket}
          />{" "}
          Signout
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
        <div>
          <div
            className="d-flex justify-content-end align-items-center text-center"
            style={{ height: "120px" }}
          >
            <div>
              <button type="button" className="btn btn-primary walletButtons">
                Send
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-primary walletButtons">
                Recieve
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary walletButtons d-flex text-center align-items-center justify-content-evenly"
              >
                User
                <FontAwesomeIcon
                  className="ServiceIcon fa-2x"
                  icon={faCircleUser}
                />
              </button>
            </div>
          </div>
          <MDBRow className=" Wallet d-flex justify-content-evenly text-center align-items-center">
            <MDBCol md="3" className="container-box">
              <MDBRow className="m-boxs mb-4 align-items-center">
                First Container
              </MDBRow>
              <MDBRow className="m-boxs mb-4 align-items-center">
                Second Container
              </MDBRow>
              <MDBRow className="m-boxs align-items-center">
                Third Container
              </MDBRow>
            </MDBCol>
            <MDBCol md="7" className="boxs">
              ASDASDASDASD
            </MDBCol>
          </MDBRow>
          <MDBRow
            className="Wallet d-flex justify-content-evenly text-center align-items-center"
            style={{ marginTop: "20px" }}
          >
            <MDBCol md="3" className="boxs">
              <div className="WalletChart d-flex">
                <VictoryPie
                  colorScale={["#ED2482", "#6638F9", "#3D0358"]}
                  labelRadius={({ innerRadius }) => innerRadius + 5}
                  data={[
                    { x: "0", y: "%" + 10 },
                    { x: "0", y: "%" + 20 },
                    { x: "0", y: "%" + 70 },
                  ]}
                />
              </div>
              <div
                className="d-flex justify-content-evenly"
                style={{ marginTop: "-17px" }}
              >
                <div className="childChart1">Lionel Jospin</div>
                <div className="childChart2">Henri Emmanuelli</div>
                <div className="childChart3">Dwayne Johnson</div>
              </div>
            </MDBCol>
            <MDBCol md="7" className="boxs">
              <div className="">
                <Chart />
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default App;
