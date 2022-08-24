import { Layout, Menu } from "antd";
import React from "react";
import logo from "./raw/logoveyazi.png";
import "./logPage.css";
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
        <div className="container-fluid col-8 d-flex TopHead">
          <h3>Transaction Information</h3>
        </div>
        {/* Form  Start*/}
        <div className="container-fluid d-flex justify-content-between col-8">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Customer</Form.Label>
            <Form.Control type="email" placeholder="Enter Customer name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Invoice ID</Form.Label>
            <Form.Control type="email" placeholder="Enter Invoice ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="Enter email" />
          </Form.Group>
        </div>
        {/* Form  End*/}
        {/* Table  Start*/}
        <div className="container-fluid d-flex col-8 ">
          <table class="table log_Table">
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
              <tr>
                <th scope="row">4</th>
                <td>Stephen</td>
                <td>Curry</td>
                <td>Basketball Player</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Michael</td>
                <td>Jordan</td>
                <td>Basketball Player</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Carlos</td>
                <td>Sainz</td>
                <td>F1 Pilot</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Cristiano</td>
                <td>Ronaldo</td>
                <td>Football Player</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Larry</td>
                <td>Bird</td>
                <td>Basketball Player</td>
              </tr>
              <tr>
                <th>9</th>
                <td>Larry</td>
                <td>Bird</td>
                <td>Basketball Player</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table  End*/}
      </Content>
    </Layout>
  </Layout>
);

export default LogPage;
