import { Layout, Menu, Row, Button } from "antd";
import React, { useEffect, useContext, useState } from "react";
import logo from "./raw/logoveyazi.png";
import "./css/GuestMain.css";
import "./css/logPage.css";
import Count from "./count";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BankingContext } from "../context/BankingContext";
import { useNavigate } from "react-router-dom";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import Navbar from "./Navbar";
const { Content, Sider } = Layout;

const GuestMain = () => {
  const [childBalance, setChildBalance] = useState(0);
  const [fakeBal, setFakeBal] = useState(0);
  const [parents, setParents] = useState([]);
  const [parentObj, setParentInfo] = useState([
    {
      name: "",
      address: "",
    },
  ]);
  const [ageStr, setAgeStr] = useState("");
  const [checkDate, setCheckDate] = useState(true)
  const [fullDate, setFullDate] = useState("")
  let navigate = useNavigate();

  // const [name,setName] = useState("")

  const {
    getCurrentUserInfo,
    getEtherBalanceOfCurrentUser,
    currentAccount,
    formatEther,
    makeAccountisLimited
  } = useContext(BankingContext);
  useEffect(() => {


    const load = async () => {
      let t = await getCurrentUserInfo(currentAccount);
      if (t.isLimited === false) {
        navigate("/dashboard")
      } else {
        const childBalance = await getEtherBalanceOfCurrentUser(); // setBalance option 2
        setFakeBal(childBalance);
        // window.alert(typeof fakeBal)
        let childObj = await getCurrentUserInfo(currentAccount);

        // while(childObj.agestring === undefined) {
        //   childObj = await getCurrentUserInfo(currentAccount);
        // }
        if (childObj.agestring !== undefined) {
          setAgeStr(childObj.agestring)
          console.log("adasd")
          setFullDate(parseInt(ageStr.split("-")[0]) + 18 + "/" + ageStr.split("-")[1] + "/" + ageStr.split("-")[2]);
          // setFullDate("08-31-2022") // denemek için ucmomment yap
          if (new Date(fullDate).getFullYear() === new Date().getFullYear() && new Date(fullDate).getMonth() === new Date().getMonth() && new Date(fullDate).getDate() === new Date().getDate()) {
            // window.alert("time is upppppp");
            setCheckDate(false)
          }
        }
        // console.log("zxczxcxz")




        // window.alert(ageStr)
        // window.alert(parseInt(childObj.balance))
        // if(childObj === undefined || childObj === null) {
        //   childObj = await getCurrentUserInfo(currentAccount)
        // }
        // window.alert(childObj)
        console.log("co --> ", childObj);
        // setParents(childObj.parents)

        if (childObj.parents !== undefined || childObj.parents !== null) {
          if (childObj.parents.length !== 0) {
            setParents(childObj.parents);
          }
          if (parents.length !== 0) {
            // window.alert(parents)
            let pObj = [];
            for (let i = 0; i < parents.length; i++) {
              let t = await getCurrentUserInfo(parents[i]);
              let tobj = {
                name: t.name,
                address: parents[i],
              };
              pObj.push(tobj);
            }
            setParentInfo(pObj);
            // window.alert("parent obj ---> ", parentObj)          

          }
        } else {
          window.alert("hata oluştu");
        }
      }

    };

    load();
  }, [childBalance, fakeBal, ageStr, checkDate])


  const checkIfProcessCompleted = async () => {
    console.log("hey");
    const userObj = await getCurrentUserInfo(currentAccount);
    if (userObj.isLimited !== false) {
      setTimeout(() => {
        checkIfProcessCompleted();
      }, 500);
    } else {
      navigate("/dashboard");
    }
  };

  const _makeAccountisLimited = async () => {
    makeAccountisLimited().then((res) => {
      checkIfProcessCompleted()
      console.log(res)
    }).catch((e) => console.log(e))
  }

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
        <Navbar type="guest"></Navbar>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Content className="body">
          {checkDate ? (
            <div>
              <Row style={{ marginTop: "10em" }}>
                <div className="container-fluid col-6 d-flex justify-content-center">
                  <div className="container tRemain">
                    <h4 className="text-center">{ageStr.split("-")[2] + "/" + ageStr.split("-")[1] + "/" + (parseInt(ageStr.split("-")[0]) + 18)}</h4>
                    {/*  */}

                    <Count d={new Date(parseInt(ageStr.split("-")[0]) + 18 + "/" + ageStr.split("-")[1] + "/" + ageStr.split("-")[2])} />
                    <Row>
                      <div className="container-fluid text-center d-flex justify-content-center">
                        <p style={{ fontSize: "0.7em", fontWeight: "Bold" }}>
                          Years
                        </p>
                        <p
                          style={{
                            fontSize: "0.7em",
                            marginLeft: "2.6em",
                            fontWeight: "Bold",
                          }}
                        >
                          Months
                        </p>
                        <p
                          style={{
                            fontSize: "0.7em",
                            marginLeft: "2.6em",
                            fontWeight: "Bold",
                          }}
                        >
                          Days
                        </p>
                        <p
                          style={{
                            fontSize: "0.7em",
                            fontWeight: "Bold",
                            marginLeft: "2.6em",
                            fontWeight: "Bold",
                          }}
                        >
                          Hours
                        </p>
                        <p
                          style={{
                            fontSize: "0.7em",
                            marginLeft: "2.6em",
                            fontWeight: "Bold",
                          }}
                        >
                          Minutes
                        </p>
                        <p
                          style={{
                            fontSize: "0.7em",
                            marginLeft: "2.6em",
                            fontWeight: "Bold",
                          }}
                        >
                          Seconds
                        </p>
                      </div>
                    </Row>
                    <h3 className="text-center">Remaining</h3>
                  </div>
                </div>
              </Row>
              <Row style={{ marginTop: "1em" }}>
                <div className="container-fluid col-8 d-flex justify-content-between ">
                  <div style={{ height: "300px" }} className="BPbox portfolioGuest">
                    <div
                      style={{ marginTop: "50px" }}
                      className="d-flex justify-content-evenly mb-3 portfolioFont"
                    >
                      Portfolio
                    </div>
                    <div className="d-flex justify-content-evenly mb-1 portfolioFont-2">
                      {/* $ {childBalance * 1499} */}${parseInt(fakeBal) * 1499}
                    </div>
                  </div>
                  <div style={{ height: "300px" }} className=" BPbox">
                    <div className="mb-3 container-fluid col-8 d-flex TopHead">
                      <h3>Parents</h3>
                    </div>
                    <div className="container-fluid d-flex col-8 ">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            {/* <th scope="col">Name</th> */}
                            <th scope="col">Address</th>
                          </tr>
                        </thead>
                        {/* {JSON.stringify(parents)} */}
                        <tbody>
                          {parents.length >= 1 &&
                            parents.map((e, i) => (
                              <tr>
                                <th scope="row">{i + 1}</th>
                                {/* <td>{e.name}</td> */}
                                <td>{e.slice(0, 5) + "..." + e.slice(-5)}</td>
                              </tr>
                            ))}

                          {/* {parentObj.length >= 1 && parentObj[0].address !== "" && (
                         parentObj.map((e, i) => (
                          <tr>
                            <th scope="row">{i+1}</th>
                            <td>{e.name}</td>
                            <td>{e.address.slice(0,5) + "..." + e.address.slice(-5)}</td>
                          </tr>
                        ))
                      )}
                      {parentObj.length === 0 && parentObj[0].address === "" && (
                           <tr>
                           <td>No record</td>
                          <td>No record</td>
                        </tr>
                      )}
                       */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Row>
            </div>

          ) : (
            <div className="container col-2 d-flex justify-content-center align-content-center ">
              <div
                style={{ marginTop: "50px" }}
                className="d-flex justify-content-center align-content-center mb-3 portfolioFont"
              >
                <Button className="" onClick={_makeAccountisLimited}>
                  Make Account Unlimited
                </Button>
              </div>

            </div>

          )}

        </Content>
      </Layout>
    </Layout>
  );
};

export default GuestMain;
