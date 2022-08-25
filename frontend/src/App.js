import "./components/css/App.css";
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
import Transaction from "./components/Transaction";
import AdminPanel from './components/adminPanel'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogPage from "./components/logPage";

function App() {
  return (
    <div className="App">
      <>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Logpage />} />
=======
        {/* <Routes>
          <Route path="/" element={<Landing />} />
>>>>>>> 04d86c6f905bda1dfd9371e09fb10bf88021e743
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> */}
        <Dashboard></Dashboard>
        {/* <Transaction></Transaction> */}
      </>
    </div>
  );
}

export default App;
