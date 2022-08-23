import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./adminLogin.css";
import logo from "./raw/logoveyazi.png";
import intertechLogo from "./raw/intertechLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const adminLogin = () => {
  return (
    <div className="body justify-content-center">
      {/* Logo Start*/}
      <div
        className="container-fluid justify-content-center text-center"
        style={{ paddingTop: "2%", paddingBottom: "4%" }}
      >
        <div className="col-12 d-flex justify-content-center">
          <img className="img-fluid logo" src={logo} />
        </div>
      </div>
      {/* Logo Ends*/}

      {/* Login Form Start*/}
      <div className="container-fluid d-flex justify-content-center text-center">
        <div className="col-3 justify-content-center d-flex flex-align-center">
          <Form className="justify-content-center self-align-center">
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="form buttons"
                type="email"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form buttons"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check
                className="cBox d-flex"
                type="checkbox"
                label="Remember me"
              />
            </Form.Group>
            <Button variant="submit inter textshadow" type="submit">
              Lets Go{" "}
              <FontAwesomeIcon
                className="ServicesIcon"
                style={{ color: "black" }}
                icon={faArrowRightToBracket}
              />
            </Button>
          </Form>
        </div>
      </div>
      {/* Login Form Ends*/}

      {/* Intertech Logo Starts*/}
      <div>
        <img
          className="container-fluid logo fixed-bottom"
          style={{ paddingBottom: "2%" }}
          src={intertechLogo}
          alt="s"
        />
      </div>
    </div>
  );
};

export default adminLogin;
