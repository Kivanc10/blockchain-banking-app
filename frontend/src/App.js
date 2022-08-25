import "antd/dist/antd.css";
import "./components/css/App.css";
import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import AdminPanel from "./components/adminPanel";
import Dashboard from "./components/dashboard";
import GuestMain from "./components/GuestMain"; // needs a lot of tweaking
import Landing from "./components/landing";
import LogPage from "./components/logPage"; // broken background
import Register from "./components/register";
import Transaction from "./components/Transaction";

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
