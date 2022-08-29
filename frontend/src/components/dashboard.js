import { Layout, Menu } from "antd";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { useState, useEffect, useContext } from "react";
import logo from "./raw/logoveyazi.png";
import intertech from "./raw/intertechLogo.png";
import "./css/dashboard.css";
import Modal from "./Modal";
import ModalCreate from "./ModalCreate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BankingContext } from "../context/BankingContext";
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
  faArrowLeft,
  faArrowRight,
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
import { getExchangeRates, getETHChange } from "../utils/exchangeRate";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
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
  const [userBalance, setUserBalance] = useState(0);
  const [INHBalance, setINHBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [childObjects, setChildObjects] = useState([]);
  const [ETHChange, setETHChange] = useState(0);
  const {
    currentAccount,
    addUser,
    sendEthereum,
    getEtherBalanceOfCurrentUser,
    getTransactionHistory,
    formatEther,
    getMyChildrenInfos,
    getBalanceOfInheritumToken,
  } = useContext(BankingContext);
  const callApi = async () => {
    const data = await getExchangeRates();
    const change = await getETHChange();
    setCurrencyData(data);
    setETHChange(change);
    console.log("hello");
    console.log(data);
    console.log(change);
  };

  useEffect(() => {
    callApi();

    let interval = setInterval(() => {}, 1000 * 60 * 60);

    const load = async () => {
      const userBalance = await getEtherBalanceOfCurrentUser();
      const INHBalance = await getBalanceOfInheritumToken(currentAccount);
      const transactions = await getTransactionHistory();
      let childObjects = await getMyChildrenInfos();
      setChildObjects(childObjects);
      setUserBalance(userBalance.toString());
      setINHBalance(INHBalance.toString());
      console.log("transactions --> ", transactions);
      setTransactions(transactions);
    };
    load();
    // getChangeRates()
    return () => clearInterval(interval);
  }, [userBalance]);

  const sendEther = async () => {
    sendEthereum("0x70997970C51812dc3A010C7d01b50e0d17dc79C8", "0.5")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addUserToSystem = async () => {
    addUser("Numan", 55, false)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("errro ->", e);
      });
  };

  const getChildrenFeatures = async () => {};

  return (
    <Layout hasSider>
      <Navbar type="normal"></Navbar>
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
            <MDBCol md="4">
              <MDBCol
                className="TopLine boxShadow portfolioDash"
                style={{ marginTop: "15px" }}
              >
                <MDBRow className="d-flex justify-content-evenly">
                  <div
                    className="d-flex justify-content-evenly mb-4 font2"
                    style={{ marginTop: "30px" }}
                  >
                    Portfolio
                  </div>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <div className="d-flex text-center align-items-center justify-content-evenly mb-1 font1">
                      <div
                        style={{
                          fontSize: 20,
                          color: "white",
                        }}
                        className="col-4"
                      >
                        {userBalance}
                      </div>
                      <div
                        style={{
                          fontSize: 20,
                          color: "white",
                        }}
                        className="col-4"
                      >
                        ETH
                      </div>
                    </div>
                    <div
                      className="d-flex text-center align-items-center justify-content-evenly mb-1 font1"
                      style={{ marginTop: "20px" }}
                    >
                      <div
                        style={{
                          fontSize: 20,
                          color: "white",
                        }}
                        className="col-4"
                      >
                        {INHBalance}
                      </div>

                      <div
                        style={{
                          fontSize: 20,
                          color: "white",
                        }}
                        className="col-4"
                      >
                        INH
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol>
                    <div className="d-flex justify-content-evenly mb-3 font2">
                      PNL
                    </div>
                    {ETHChange > 0 ? (
                      <div className="d-flex justify-content-evenly mb-1 font1-2">
                        {userBalance === "0" && <p>$0</p>}
                        {userBalance !== "0" && ( // yapılcak
                          <p>
                            $
                            {(
                              (ETHChange / 100) *
                              currencyData.ETH *
                              userBalance
                            ).toFixed(2)}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="d-flex justify-content-evenly mb-1 font1-3">
                        {userBalance === "0" && <p>$0</p>}
                        {userBalance !== "0" && ( // yapılcak
                          <p>
                            $
                            {(
                              (ETHChange / 100) *
                              currencyData.ETH *
                              userBalance
                            ).toFixed(2)}
                          </p>
                        )}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol></MDBCol>
                  <MDBCol className="justify-content-center d-flex">
                    {ETHChange > 0 ? (
                      <div
                        className="greenBox text-center justify-content-center"
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
                          {ETHChange}
                        </label>
                      </div>
                    ) : (
                      <div
                        className="redBox text-center justify-content-center"
                        style={{ width: "6.5em" }}
                      >
                        <FontAwesomeIcon
                          className="faArrowTrendDown redBoxYazilar"
                          icon={faArrowTrendDown}
                        />
                        <label
                          className="redBoxYazilar"
                          style={{ paddingLeft: "5px" }}
                        >
                          {" "}
                          {ETHChange}
                        </label>
                      </div>
                    )}
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
                  <Chart chartData={childObjects} userBalance={userBalance} />
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
            <MDBCol
              md="4 box5-2"
              className="d-flex justify-content-evenly boxShadow"
            >
              <MDBCol>
                <div
                  className="font2 mb-3"
                  style={{ marginTop: "15px", marginLeft: "20px" }}
                >
                  Latest Transactions
                </div>

                <MDBTable>
                  <MDBTableBody>
                    {transactions.length === 0 && (
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "20px",
                          fontSize: "20px",
                        }}
                      >
                        There is no recorded transactions.
                        <br /> Recorded transactions will be shown here.
                      </p>
                    )}
                    {transactions.map((e) =>
                      Number(e.sender) === Number(currentAccount) ? (
                        // <p>asdsadasd</p>
                        <tr>
                          <th scope="row">
                            <FontAwesomeIcon
                              className="ServiceIcon iconRed"
                              icon={faArrowRight}
                            ></FontAwesomeIcon>
                          </th>
                          <td className="trans">Outgoing</td>
                          <td className="d-flex justify-content-end redValue">
                            - {formatEther(e.amount.toString()) + " ETH"}
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <th scope="row">
                            <FontAwesomeIcon
                              className="ServiceIcon iconGreen"
                              icon={faArrowRight}
                            ></FontAwesomeIcon>
                          </th>
                          <td className="trans">Incoming</td>
                          <td className="d-flex justify-content-end greenValue">
                            + {formatEther(e.amount.toString()) + " ETH"}
                          </td>
                        </tr>
                      )
                    )}
                  </MDBTableBody>
                </MDBTable>
              </MDBCol>
            </MDBCol>

            <MDBCol md="4 box5-1 boxShadow">
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
                  <ModalCreate />
                </MDBCol>
              </MDBRow>

              {childObjects === undefined || childObjects === null ? (
                <p
                  style={{
                    marginLeft: "20px",
                    marginTop: "20px",
                    fontSize: "20px",
                  }}
                >
                  There is no registered inheritor.
                  <br /> If you want to create one, please use the button above.
                </p>
              ) : (
                childObjects.map(
                  (
                    e // veri çekerken balance blockchainden all..(sonra) , reamining day
                  ) => (
                    <Modal
                      inheritor_name={e[0].name}
                      age={e[0].age}
                      remainingDay={(18 - e[0].age) * 365}
                      value={formatEther(e[0].balance.toString())}
                    /> //e[1]
                  )
                )
              )}
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
          </MDBRow>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
