import './components/App.css';
import React from 'react'
import 'antd/dist/antd.css';
import Formm from "./components/formm";
import Landing from "./components/landing";
import Dashboard from './components/dashboard';
import AdminLogin from './components/adminLogin'
import Register from "./components/register";


function App() {   
  return (  
    <div>
      <Dashboard/>
    </div>
  );
}

export default App;
