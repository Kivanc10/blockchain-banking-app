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

  useEffect(() => {
    
  })

  const[fNmae,setFname] = useState("")
  const [lName,setLname] = useState("")
  const [age,setAge] = useState(0)
  const [fakeAgeStr,setFakeAgeStr] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [id,setId] = useState("")



  let navigate = useNavigate();
  const { currentAccount, addUser } = useContext(BankingContext);



  const onChange = (date, dateString) => {
    const birthDate = date._d.getFullYear();
    const currentYear = new Date().getFullYear()
    console.log(date);
    setAge(currentYear - birthDate);
    console.log("age --> ", age)
    
  };


  const addUserToSystem = async (name,age,isLimited) => {
    addUser(name,age,isLimited)
    .then((res) => {
      //console.log(res)
      navigate("/dashboard");
      window.location.reload()
    }).catch((e) => {
      console.log("error ->", e.message)
    })
  }


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
              Create a new guest account
            </h3>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                onChange={e => setFname(e.target.value)}
                value = {fNmae}
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                onChange={e => setLname(e.target.value)}
                value = {lName}
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Phone number</label>
              <input
                type="text"
                className="form-control"
                placeholder="(+123) 9876543210"
                onChange={e => setPhone(e.target.value)}                
                value = {phone}
              />
            </div>
            <div className="mb-3">
              <label>ID number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your ID number"
                onChange={e => setId(e.target.value)}
                value = {id}
              />
            </div>
            <div className="mb-3 date">
              <label>Date of birth</label>
              <div>
                <Space direction="vertical">
                  <DatePicker onChange={onChange} />
                </Space>
              </div>
            </div>
            <div className="d-grid mb-2">
              <button onClick={() => addUserToSystem(fNmae + " " + lName,age,false)} type="submit" className="btn btn-primary continue">
                Continue
              </button>
            </div>
            <p>
              By signing in, you're agree to our{" "}
              <a href="/sign-in">Terms & Condition</a> and{" "}
              <a href="/sign-in">Privacy Policy.</a>
            </p>
          </form>
          {/*FORM END*/}
        </div>
        <div className="col-4 col-md-4"></div>
      </div>
      <div>
        <img
          className="img-fluid intertech"
          src={intertech}
          alt="HeaderImage"
        ></img>
      </div>
    </div>
  );
}
export default Register;
