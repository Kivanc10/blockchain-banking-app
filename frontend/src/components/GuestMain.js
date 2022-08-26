import { Layout, Menu, Row } from "antd";
import React from "react";
import logo from "./raw/logoveyazi.png";
import "./css/logPage.css";
import Count from "./count";
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
          <div className="container-fluid col-6 d-flex justify-content-center">
            <div className="container tRemain">
              
              <h4 className="text-center">28/12/2027</h4>
              <Count />
              <Row>
                <div className="container-fluid text-center d-flex justify-content-center">
                  <p style={{fontSize:'0.7em',fontWeight:'Bold'}}>Years</p>
                  <p style={{fontSize:'0.7em' , marginLeft:'2.6em',fontWeight:'Bold'}}>Minutes</p>
                  <p style={{fontSize:'0.7em' , marginLeft:'2.6em',fontWeight:'Bold'}}>Days</p>
                  <p style={{fontSize:'0.7em',fontWeight:'Bold', marginLeft:'2.6em',fontWeight:'Bold'}}>Hours</p>
                  <p style={{fontSize:'0.7em' , marginLeft:'2.6em',fontWeight:'Bold'}}>Minutes</p>
                  <p style={{fontSize:'0.7em' , marginLeft:'2.6em',fontWeight:'Bold'}}>Seconds</p>
                </div>
              </Row>
              <h3 className="text-center">Remaining</h3>
            </div>
          </div>
        </Row>
        <Row style={{ marginTop: '1em' }}>
          <div className="container-fluid col-8 d-flex justify-content-between ">
            <div style={{ height: "300px" }} className="BPbox">
              <div style={{ marginTop: "50px" }} className="d-flex justify-content-evenly mb-3 portfolioFont">
                Portfolio
              </div>
              <div className="d-flex justify-content-evenly mb-1 portfolioFont-2">
                $2008.55
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
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Job</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Zuckerberg</td>
                      <td>Developer</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Lebron</td>
                      <td>James</td>
                      <td>Basketball Player</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Charles</td>
                      <td>Leclerc</td>
                      <td>F1 Pilot</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </Row>

      </Content>
    </Layout>
  </Layout>
);

export default LogPage;
