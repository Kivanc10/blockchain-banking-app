import "./components/css/App.css";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import Formm from "./components/formm";
import Landing from "./components/landing";
import Dashboard from "./components/dashboard";
import AdminLogin from "./components/adminLogin";
import Register from "./components/register";
import GuestMain from "./components/GuestMain";
import LogPage from "./components/logPage";
import MyWallet from "./components/myWallet";
import Transaction from "./components/Transaction";
import AdminPanel from "./components/adminPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guestmain" element={<GuestMain />} />
        <Route path="/logpage" element={<LogPage />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}


export default App;
