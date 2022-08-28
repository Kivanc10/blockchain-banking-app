import { Layout, Menu, Row } from "antd";
import React, { useEffect, useContext, useState } from "react";
import logo from "./raw/logoveyazi.png";
import "./css/GuestMain.css";
import "./css/logPage.css";
import Count from "./count";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BankingContext } from "../context/BankingContext";
import {
  faHome,
  faWallet,
  faGlobe,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
const { Content, Sider } = Layout;

const App = () => {
  const [childBalance, setChildBalance] = useState(0);
  const [fakeBal,setFakeBal] = useState(0)
  const [parents, setParents] = useState([]);
  const [parentObj, setParentInfo] = useState([{
    name: "",
    address: ""
  }]);
  const [age, setAge] = useState(0)
  // const [name,setName] = useState("")

  const { getCurrentUserInfo, getEtherBalanceOfCurrentUser, currentAccount, formatEther } = useContext(BankingContext);
  useEffect(() => {
    const load = async () => {
      const childBalance = await getEtherBalanceOfCurrentUser(); // setBalance option 2
      setFakeBal(childBalance)
      // window.alert(typeof fakeBal)
      let childObj = await getCurrentUserInfo(currentAccount)
      // window.alert(parseInt(childObj.balance))
      // if(childObj === undefined || childObj === null) {
      //   childObj = await getCurrentUserInfo(currentAccount)
      // }
      // window.alert(childObj)
      console.log("co --> ",childObj)
      // setParents(childObj.parents)

      if(childObj.parents !== undefined || childObj.parents !== null) {
        if(childObj.parents.length !== 0) {
          setParents(childObj.parents)
        }
        if(parents.length !== 0) {
          // window.alert(parents)
          let pObj = []
          for (let i = 0; i < parents.length; i++) {
            let t = await getCurrentUserInfo(parents[i]);
            let tobj = {
              name: t.name,
              address: parents[i]
            }
            pObj.push(tobj);
          }
          setParentInfo(pObj)
          // window.alert("parent obj ---> ", parentObj)
        }
      }else{
        window.alert("hata oluştu")
      }
    }

    load()
  }, [childBalance,fakeBal])

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
            <div className="container-fluid col-6 d-flex justify-content-center">
              <div className="container tRemain">

                <h4 className="text-center">28/12/2027</h4>
                <Count />
                <Row>
                  <div className="container-fluid text-center d-flex justify-content-center">
                    <p style={{ fontSize: '0.7em', fontWeight: 'Bold' }}>Years</p>
                    <p style={{ fontSize: '0.7em', marginLeft: '2.6em', fontWeight: 'Bold' }}>Minutes</p>
                    <p style={{ fontSize: '0.7em', marginLeft: '2.6em', fontWeight: 'Bold' }}>Days</p>
                    <p style={{ fontSize: '0.7em', fontWeight: 'Bold', marginLeft: '2.6em', fontWeight: 'Bold' }}>Hours</p>
                    <p style={{ fontSize: '0.7em', marginLeft: '2.6em', fontWeight: 'Bold' }}>Minutes</p>
                    <p style={{ fontSize: '0.7em', marginLeft: '2.6em', fontWeight: 'Bold' }}>Seconds</p>
                  </div>
                </Row>
                <h3 className="text-center">Remaining</h3>
              </div>
            </div>
          </Row>
          <Row style={{ marginTop: '1em' }}>
            <div className="container-fluid col-8 d-flex justify-content-between ">
              <div style={{ height: "300px" }} className="BPbox portfolioGuest">
                <div style={{ marginTop: "50px" }} className="d-flex justify-content-evenly mb-3 portfolioFont">
                  Portfolio
                </div>
                <div className="d-flex justify-content-evenly mb-1 portfolioFont-2">
               {/* $ {childBalance * 1499} */}
               ${parseInt(fakeBal) * 1499}
                  
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
                      {parents.length >= 1 && (
                        parents.map((e,i) => (
                          <tr>
                          <th scope="row">{i+1}</th>
                          {/* <td>{e.name}</td> */}
                          <td>{e.slice(0,5) + "..." + e.slice(-5)}</td>
                        </tr>
                        ))
                      )}
                      
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

        </Content>
      </Layout>
    </Layout>
  )
};

export default App;
