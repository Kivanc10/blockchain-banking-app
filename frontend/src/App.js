import "./components/App.css";
import React from "react";
import "antd/dist/antd.css";
import Formm from "./components/formm";
import Landing from "./components/landing";
import Dashboard from "./components/dashboard";
import AdminLogin from "./components/adminLogin";
import Register from "./components/register";
import GuestMain from "./components/GuestMain";
import Logpage from "./components/logPage";
import MyWallet from "./components/myWallet";
import Transaction from "./components/Transaction"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  </div>
  );
}

export default App;
