import { Layout, Menu } from "antd";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { useState, useEffect } from "react";
import logo from "./raw/logoveyazi.png";
import intertech from "./raw/intertechLogo.png";
import "./css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGlobe,
  faDollarSign,
  faArrowRightFromBracket,
  faCirclePlus,
  faBell,
  faMoneyBillWave,
  faCreditCard,
  faArrowTrendUp,
  faArrowTrendDown,
  faEuroSign,
  faSterlingSign,
  faCoins,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import btc from "./raw/btc.png";
import eth from "./raw/eth.png";
import bnb from "./raw/bnb.png";
import xrp from "./raw/xrp.png";
import ada from "./raw/ada.png";
import sol from "./raw/sol.png";
import doge from "./raw/doge.png";
import Chart from "./monthlyChart";
import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { getExchangeRates } from "../utils/exchangeRate";
const { Content, Sider } = Layout;
const dataBar = [
  { x: "Jan", y: 2, y0: 1 },
  { x: "Feb", y: 5, y0: 1 },
  { x: "Mar", y: 5, y0: 1 },
  { x: "Apr", y: 3, y0: 1 },
  { x: "May", y: 2, y0: 1 },
  { x: "Jun", y: 5, y0: 1 },
  { x: "Jul", y: 5, y0: 1 },
  { x: "Aug", y: 3, y0: 1 },
  { x: "Sep", y: 2, y0: 1 },
  { x: "Oct", y: 5, y0: 1 },
  { x: "Nov", y: 5, y0: 1 },
  { x: "Dec", y: 3, y0: 1 },
];

const Dashboard = () => {
  const [currencyData, setCurrencyData] = useState({});

  const callApi = async () => {
    const data = await getExchangeRates();
    setCurrencyData(data);
    console.log("hello");
    console.log(data);
  };

  useEffect(() => {
    callApi();

    let interval = setInterval(() => {}, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

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
            <FontAwesomeIcon className="ServiceIcon" icon={faGlobe} />{" "}
            Transactions
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
        <Content className="bodyDashboard">
          <MDBRow
            className="header d-flex justify-content-between text-center align-items-center"
            style={{ marginTop: "25px", marginBottom: "25px", height: "50px" }}
          ></MDBRow>

          <MDBRow className="test3 d-flex justify-content-evenly">
            <MDBCol md="4 box5-2" className="d-flex justify-content-evenly">
              <MDBCol>
                <div
                  className="font2 mb-3"
                  style={{ marginTop: "15px", marginLeft: "20px" }}
                >
                  Latest Transactions
                </div>
                <MDBTable>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">
                        <FontAwesomeIcon
                          className="ServiceIcon iconRed"
                          icon={faCreditCard}
                        ></FontAwesomeIcon>
                      </th>
                      <td className="trans">Personal Payment</td>
                      <td className="d-flex justify-content-end redValue">
                        -$35
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <FontAwesomeIcon
                          className="ServiceIcon iconRed"
                          icon={faMoneyBillWave}
                        ></FontAwesomeIcon>
                      </th>
                      <td className="trans">Purchasing</td>
                      <td className="d-flex justify-content-end redValue">
                        -$128
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <FontAwesomeIcon
                          className="ServiceIcon iconGreen"
                          icon={faCreditCard}
                        ></FontAwesomeIcon>
                      </th>
                      <td className="trans">Personal Payment</td>
                      <td className="d-flex justify-content-end greenValue">
                        $10
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <FontAwesomeIcon
                          className="ServiceIcon iconGreen"
                          icon={faMoneyBillWave}
                        ></FontAwesomeIcon>
                      </th>
                      <td className="trans">Selling</td>
                      <td className="d-flex justify-content-end greenValue">
                        $35
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <FontAwesomeIcon
                          className="ServiceIcon iconRed"
                          icon={faCreditCard}
                        ></FontAwesomeIcon>
                      </th>
                      <td className="trans">Personal Payment</td>
                      <td className="d-flex justify-content-end redValue">
                        -$35
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCol>
            </MDBCol>

            <MDBCol md="4 box5-1 ">
              <MDBRow>
                <MDBCol>
                  <div
                    className="font2 mb-3"
                    style={{ marginTop: "15px", marginLeft: "20px" }}
                  >
                    Inheritors
                  </div>
                </MDBCol>
                <MDBCol>
                  <button
                    type="account"
                    className="btn btn-primary buttons float-end"
                    title="Create new Inheritor"
                  >
                    <FontAwesomeIcon
                      className="ServiceIcon fa-2x"
                      icon={faCirclePlus}
                    />
                  </button>
                </MDBCol>
              </MDBRow>
              <MDBRow
                style={{ marginTop: "15px" }}
                // className="test4 justify-content-between"
              ></MDBRow>
            </MDBCol>

            <MDBCol md="3 box5 boxShadow">
              <div
                className="font2 mb-2"
                style={{ marginTop: "15px", marginLeft: "20px" }}
              >
                Market Values
              </div>
              <MDBTable>
                <MDBTableBody>
                  <tr>
                    <th scope="row">
                      <img
                        className="d-flex mb-3 coins"
                        src={btc}
                        alt="HeaderImage"
                      ></img>
                    </th>
                    <td className="trans">Bitcoin</td>
                    <td className="d-flex justify-content-end trans">
                      ${currencyData.BTC}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                        className="d-flex mb-3 coins"
                        src={eth}
                        alt="HeaderImage"
                      ></img>
                    </th>
                    <td className="trans">Ethereum</td>
                    <td className="d-flex justify-content-end trans">
                      {" "}
                      ${currencyData.ETH}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                        className="d-flex mb-3 coins"
                        src={xrp}
                        alt="HeaderImage"
                      ></img>
                    </th>
                    <td className="trans">XRP</td>
                    <td className="d-flex justify-content-end trans">
                      {" "}
                      ${currencyData.XRP}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                        className="d-flex mb-3 coins"
                        src={ada}
                        alt="HeaderImage"
                      ></img>{" "}
                    </th>
                    <td className="trans">Cardano</td>
                    <td className="d-flex justify-content-end trans">
                      ${currencyData.ADA}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                        className="d-flex mb-3 coins"
                        src={sol}
                        alt="HeaderImage"
                      ></img>
                    </th>
                    <td className="trans">Solana</td>
                    <td className="d-flex justify-content-end trans">
                      ${currencyData.SOL}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                        className="d-flex coins"
                        src={doge}
                        alt="HeaderImage"
                      ></img>
                    </th>
                    <td className="trans">Dogecoin</td>
                    <td className="d-flex justify-content-end trans">
                      ${currencyData.DOGE}
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>

            <MDBCol md="4">
              <MDBCol
                className="TopLine boxShadow"
                style={{ marginTop: "15px" }}
              >
                <MDBRow className="d-flex justify-content-evenly">
                  <div
                    className="d-flex justify-content-evenly mb-3 font3"
                    style={{ marginTop: "30px" }}
                  >
                    Summary
                  </div>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <div className="d-flex justify-content-evenly mb-3 font2">
                      Portfolio
                    </div>
                    <div className="d-flex justify-content-evenly mb-1 font1">
                      $2008.55
                    </div>
                  </MDBCol>
                  <MDBCol>
                    <div className="d-flex justify-content-evenly mb-3 font2">
                      PNL
                    </div>
                    <div className="d-flex justify-content-evenly mb-1 font1">
                      $2008.55
                    </div>

                    <div
                      className="greenBox text-center justify-content-evenly"
                      style={{ width: "6.5em" }}
                    >
                      <FontAwesomeIcon
                        className="faArrowTrendUp greenBoxYazilar"
                        icon={faArrowTrendUp}
                      />
                      <label
                        className="greenBoxYazilar"
                        style={{ paddingLeft: "5px" }}
                      >
                        {" "}
                        +8%
                      </label>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>

              <MDBRow
                style={{ marginTop: "15px" }}
                className="test4 justify-content-between"
              ></MDBRow>
            </MDBCol>

            <MDBCol md="4 " style={{ marginTop: "15px" }}>
              <MDBCol className="boxes boxShadow">
                <div>
                  <Chart />
                </div>
              </MDBCol>
            </MDBCol>
            <MDBCol md="3 box5 boxShadow" style={{ marginTop: "15px" }}>
              <div
                className="font2 mb-4"
                style={{ marginTop: "15px", marginLeft: "20px" }}
              >
                Currency Rates
              </div>
              <MDBTable>
                <MDBTableBody className="tableCorner">
                  <tr>
                    <th scope="row">
                      <FontAwesomeIcon
                        style={{ color: "green", fontWeight: "bold" }}
                        className="currencyLogos"
                        icon={faDollarSign}
                      ></FontAwesomeIcon>
                    </th>
                    <td className="currencyTableText">USD/TL</td>
                    <td className="currencyTableText d-flex justify-content-end currenciesText">
                      {currencyData.USD}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <FontAwesomeIcon
                        style={{ color: "green", fontWeight: "bold" }}
                        className="currencyLogos "
                        icon={faEuroSign}
                      ></FontAwesomeIcon>
                    </th>
                    <td className="currencyTableText">EUR/TL</td>
                    <td className="currencyTableText d-flex justify-content-end currenciesText">
                      {currencyData.EUR}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <FontAwesomeIcon
                        style={{ color: "green", fontWeight: "bold" }}
                        className="currencyLogos "
                        icon={faDollarSign}
                      ></FontAwesomeIcon>
                    </th>
                    <td className="currencyTableText">EUR/USD</td>
                    <td className="currencyTableText d-flex justify-content-end currenciesText">
                      {currencyData.EURUSD}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <FontAwesomeIcon
                        style={{ color: "green", fontWeight: "bold" }}
                        className="currencyLogos "
                        icon={faSterlingSign}
                      ></FontAwesomeIcon>
                    </th>
                    <td className="currencyTableText">GBP/TL</td>
                    <td className="currencyTableText d-flex justify-content-end currenciesText">
                      {currencyData.GBP}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <FontAwesomeIcon
                        style={{ color: "green", fontWeight: "bold" }}
                        className="currencyLogos "
                        icon={faCoins}
                      ></FontAwesomeIcon>
                    </th>
                    <td className="currencyTableText">ONS/USD</td>
                    <td className="currencyTableText d-flex justify-content-end currenciesText">
                      {currencyData.XAU}
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
