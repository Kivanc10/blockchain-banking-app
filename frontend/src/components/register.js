import logo from "./raw/logoveyazi.png";
import "./css/register.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillTransfer,
  faChartSimple,
  faBitcoinSign,
  faBuildingColumns,
  faPersonBreastfeeding,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import intertech from "./raw/intertech.png";
import { BankingContext } from "../context/BankingContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  useEffect(() => {});

  const [fNmae, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [age, setAge] = useState(0);
  const [fakeAgeStr, setFakeAgeStr] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  let navigate = useNavigate();
  const { currentAccount, addUser, getCurrentUserInfo } =
    useContext(BankingContext);

  const onChange = (date, dateString) => {
    const birthDate = date._d.getFullYear();
    const currentYear = new Date().getFullYear();
    console.log(date);
    setAge(currentYear - birthDate);
    console.log("age --> ", age);
  };

  const checkIfRegisterCompleted = async () => {
    console.log("hey");
    const userObj = await getCurrentUserInfo(currentAccount);
    if (userObj.name === "" && userObj.age === "0") {
      setTimeout(() => {
        checkIfRegisterCompleted();
      }, 500);
    } else {
      navigate("/dashboard");
    }
  };

  const addUserToSystem = async (e) => {
    e.preventDefault();
    const res = await addUser(fNmae + lName, age, false);
    console.log(res);
    checkIfRegisterCompleted();
  };

  return (
    <div className="body">
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-4 col-md-4 inher">
          <img className="img-fluid" src={logo} alt="HeaderImage"></img>
          {/*<span className='hName'>INHERITIUM</span>*/}
        </div>
        <div className="col-4 col-md-4 register">
          {/*FORM START*/}
          <form>
            <div className="d-grid mb-2" style={{ color: "red" }}>
              <p>
                <a className="back" href="/sign up">
                  &#x276E; Back
                </a>
              </p>
            </div>

            <h3 className="mb-3" style={{ paddingLeft: "17%" }}>
              What should we call you?
            </h3>
            <div className="mb-3">
              <label></label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                onChange={(e) => setFname(e.target.value)}
                value={fNmae}
              />
            </div>

            <div className="d-grid mb-2">
              <button
                onClick={addUserToSystem}
                type="submit"
                className="btn btn-primary continue"
              >
                Continue
              </button>
            </div>
            <p>
              By signing in, you're agree to our{" "}
              <a
                href="https://www.intertech.com.tr/kullanim-kosullari"
                target="_blank"
              >
                Terms & Condition
              </a>{" "}
              and{" "}
              <a
                href="https://www.intertech.com.tr/gizlilik-politikasi"
                target="_blank"
              >
                Privacy Policy.
              </a>
            </p>
          </form>
          {/*FORM END*/}
        </div>
        <div className="col-4 col-md-4"></div>
      </div>
      <div>
        <img
          className="img-fluid intertech fixed-bottom"
          src={intertech}
          alt="HeaderImage"
          style={{ marginBottom: "50px" }}
        ></img>
      </div>
    </div>
  );
}
export default Register;
