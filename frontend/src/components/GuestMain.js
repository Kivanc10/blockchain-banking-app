import { Layout, Menu } from "antd";
import React from "react";
import logo from "./raw/logoveyazi.png";
import "./dashboard.css";
import "./GuestMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as V from "victory";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryPie,
  VictoryBar,
} from "victory";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
const { Header, Content, Footer, Sider } = Layout;

const data = [
  { Month: "January", earnings: 13000 },
  { Month: "February", earnings: 17000 },
  { Month: "March", earnings: 14250 },
  { Month: "April", earnings: 15000 },
  { Month: "May", earnings: 17000 },
];

const sampleData = [
  { x: "Guest1", earnings: 10 },
  { x: "Guest2", earnings: 40 },
];
const dataBar = [
  { x: 1, y: 2, y0: 1 },
  { x: 4, y: 6, y0: 1 },
  { x: 3, y: 7, y0: 1 },
  { x: 2, y: 3, y0: 1 },
];

const GuestMain = () => (
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
      <Content className="body">
        <div className="container-fluid d-flex justify-content-end header">
          <button type="button" className="btn-primary">
            <FontAwesomeIcon className="ServiceIcon fa-2x" icon={faUser} />
          </button>
        </div>

        <div className="container-fluid">
          <div className="col-12 Graph">
            <VictoryChart theme={VictoryTheme.material} width={1000}>
              <VictoryLine
                height={500}
                interpolation="natural"
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc" },
                }}
                data={data}
                // data accessor for x values
                x="Month"
                // data accessor for y values
                y="earnings"
              />
            </VictoryChart>
          </div>
          <div className="col-12 Graph d-flex">
            <VictoryPie
              colorScale={["Blue", "orange"]}
              labelRadius={({ innerRadius }) => innerRadius + 5}
              data={[
                { x: "Guest1", y: "%" + 50 },
                { x: "Guest2", y: "%" + 50 },
              ]}
            />
            <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
              <VictoryBar style={{ data: { fill: "blue" } }} data={dataBar} />
            </VictoryChart>
          </div>
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default GuestMain;
