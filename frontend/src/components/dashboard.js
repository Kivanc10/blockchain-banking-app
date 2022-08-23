import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Container from "react-bootstrap/Container";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import logo from "./raw/logoveyazi.png";
import intertech from "./raw/intertechLogo.png";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWallet,
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
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import * as V from "victory";
import btc from "./raw/btc.png";
import eth from "./raw/eth.png";
import usdt from "./raw/usdt.png";
import usdc from "./raw/usdc.png";
import bnb from "./raw/bnb.png";
import xrp from "./raw/xrp.png";
import ada from "./raw/ada.png";
import sol from "./raw/sol.png";
import doge from "./raw/doge.png";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryPie,
  VictoryBar,
} from "victory";
const { Header, Content, Footer, Sider } = Layout;
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
        <MDBRow
          className="header d-flex justify-content-between text-center align-items-center"
          style={{ marginTop: "25px" }}
        >
          <MDBCol md="3" className="top1 align-items-center">
            {/*<Swiper
              spaceBetween={1}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><button type="button" className="btn btn-primary months">January</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary months">February</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary months">March</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary months">April</button></SwiperSlide>
    </Swiper>*/}
            <MDBCarousel showControls>
              <MDBCarouselInner className="months">
                <MDBCarouselItem className="active">January</MDBCarouselItem>
                <MDBCarouselItem>February</MDBCarouselItem>
                <MDBCarouselItem>March</MDBCarouselItem>
                <MDBCarouselItem>April</MDBCarouselItem>
                <MDBCarouselItem>May</MDBCarouselItem>
                <MDBCarouselItem>June</MDBCarouselItem>
                <MDBCarouselItem>July</MDBCarouselItem>
                <MDBCarouselItem>August</MDBCarouselItem>
                <MDBCarouselItem>September</MDBCarouselItem>
                <MDBCarouselItem>October</MDBCarouselItem>
                <MDBCarouselItem>November</MDBCarouselItem>
                <MDBCarouselItem>December</MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCol>
          <MDBCol md="5" className="top2">
            <Swiper
              spaceBetween={1}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <button type="button" className="btn btn-primary account">
                  Main Account
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type="button" className="btn btn-primary account">
                  Inheritor
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type="button" className="btn btn-primary account">
                  Inheritor
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type="button" className="btn btn-primary account">
                  Inheritor
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type="button" className="btn btn-primary account">
                  Inheritor
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type="button" className="btn btn-primary account">
                  Inheritor
                </button>
              </SwiperSlide>
            </Swiper>
          </MDBCol>
          <MDBCol
            md="3"
            className="d-flex justify-content-evenly text-center top3"
          >
            <button type="account" className="btn btn-primary buttons">
              <FontAwesomeIcon
                className="ServiceIcon fa-2x"
                icon={faCirclePlus}
              />
              <div>Create New Account</div>
            </button>
            <button type="notifications" className="btn btn-primary buttons">
              <FontAwesomeIcon className="ServiceIcon fa-2x" icon={faBell} />
              <div>Notifications</div>
            </button>
          </MDBCol>
        </MDBRow>

        <MDBRow className="test3 d-flex justify-content-evenly">
          <MDBCol md="4">
            <MDBCol className="TopLine boxShadow">
              <MDBRow className="d-flex justify-content-evenly">
                <MDBCol md="8">
                  <div
                    className="d-flex justify-content-evenly mb-3 font3"
                    style={{ marginTop: "30px" }}
                  >
                    My Wallet Summary
                  </div>
                  <div className="d-flex justify-content-evenly mb-3 font2">
                    Total Balance
                  </div>
                  <div className="d-flex justify-content-evenly mb-1 font1">
                    +$2008.55
                  </div>
                  <div className="d-flex justify-content-evenly mb-4">
                    Last Transaction
                  </div>

                  <div className="d-flex justify-content-evenly">
                    <button type="button" className="btn btn-primary wallet">
                      Withdraw
                    </button>
                    <button type="button" className="btn btn-primary wallet">
                      Top up
                    </button>
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <div className="mb-3 font4" style={{ marginTop: "90px" }}>
                    <p>$273.58</p>
                  </div>
                  <div className="font5">Wallets Amount</div>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBRow
              style={{ marginTop: "15px" }}
              className="test4 justify-content-between"
            >
              <MDBCol
                md="5 box"
                className="justify-content-center p-4 boxShadow"
              >
                <div className="box-title" style={{ paddingTop: "0.8em" }}>
                  Total Income
                </div>
                <div className="box-subtitle ">$ 18531.31</div>
                <div
                  className="greenBox text-center"
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
                    +11%
                  </label>
                </div>
              </MDBCol>
              <MDBCol
                md="5 box2"
                className="justify-content-center p-4 boxShadow"
              >
                <div className="box-title" style={{ paddingTop: "0.8em" }}>
                  Total Saves
                </div>
                <div className="box-subtitle ">$ 137.43</div>
                <div className="redBox text-center" style={{ width: "6.5em" }}>
                  <FontAwesomeIcon
                    className="faArrowTrendDown redBoxYazilar"
                    icon={faArrowTrendDown}
                  />
                  <label
                    className="redBoxYazilar"
                    style={{ paddingLeft: "5px" }}
                  >
                    {" "}
                    -8%
                  </label>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <MDBCol md="4 box4 ">
            <MDBCol className="boxes boxShadow">
              <VictoryChart
                className="chart"
                width={600}
                theme={VictoryTheme.material}
                domainPadding={10}
              >
                <VictoryBar
                  className="chart"
                  style={{ data: { fill: "blue" } }}
                  data={dataBar}
                />
              </VictoryChart>
            </MDBCol>
            <MDBRow
              style={{ marginTop: "15px" }}
              className="test4 justify-content-between"
            >
              <MDBCol
                md="5 box"
                className="justify-content-center p-4 boxShadow"
              >
                <div className="box-title" style={{ paddingTop: "0.8em" }}>
                  Input
                </div>
                <div className="box-subtitle ">$ 5000.00</div>
                <div
                  className="greenBox text-center"
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
              <MDBCol
                md="5 box2"
                className="justify-content-center p-4 boxShadow"
              >
                <div className="box-title" style={{ paddingTop: "0.8em" }}>
                  Output
                </div>
                <div className="box-subtitle ">$ 201.48</div>
                <div className="redBox text-center" style={{ width: "6.5em" }}>
                  <FontAwesomeIcon
                    className="faArrowTrendDown redBoxYazilar"
                    icon={faArrowTrendDown}
                  />
                  <label
                    className="redBoxYazilar"
                    style={{ paddingLeft: "5px" }}
                  >
                    {" "}
                    -3%
                  </label>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <MDBCol md="3 box5 boxShadow">
            <div
              className="font2 mb-2"
              style={{ marginTop: "15px", marginLeft: "20px" }}
            >
              Chain Allocation
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
                    $21,280.84
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
                    $1,573.05
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img
                      className="d-flex mb-3 coins"
                      src={bnb}
                      alt="HeaderImage"
                    ></img>
                  </th>
                  <td className="trans">BNB</td>
                  <td className="d-flex justify-content-end trans"> $296.41</td>
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
                  <td className="d-flex justify-content-end trans"> $0.3354</td>
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
                  <td className="d-flex justify-content-end trans">$0.4518</td>
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
                  <td className="d-flex justify-content-end trans">$34.74</td>
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
                  <td className="d-flex justify-content-end trans">$0.06689</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>

          <MDBCol
            md="4"
            className="d-flex justify-content-evenly"
            style={{ marginTop: "15px" }}
          >
            <MDBCol className="boxes boxShadow">
              <div
                className="font2 mb-4"
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
          <MDBCol md="4 " style={{ marginTop: "15px" }}>
            <MDBCol className="boxes boxShadow">
              <div
                className="text-center mb-12 font2"
                style={{ paddingTop: "10px", marginBottom: "-25px" }}
              >
                Transaction History Of This Month
              </div>
              <div className="chartpie">
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

              <div className="d-flex justify-content-evenly">
                <div className="historyText1">Own Upload</div>
                <div className="historyText2">Shopping</div>
                <div className="historyText3">Saving</div>
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
                    18.11
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
                    18.15
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
                    1.002
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
                    20.48
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
                    1783.2
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

export default App;
