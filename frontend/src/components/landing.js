import logo from './raw/logo.png';
import logoYazi from './raw/inheritiumLogo.png';
import './landing.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import chart from './raw/Charts Section.png'
import yazi from './raw/Feature 2.png'
import whoarewe from './raw/whoarewe.png'
import React, { useState } from "react";


function App() {
  return (
    <div>
      <Navbar className='App' style={{
        height:'100px',
      }} 
      variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>         
          <img src={logo} style={{scale:'30%'}} />{' '}
          <img src={logoYazi} style={{marginLeft:'-90px',scale:'80%'}} />{' '}
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse >
          <Nav className='coloring' justify="space-between" style={{marginLeft:'60%',fontSize:'30px'}} >
            <Nav.Link className='buttons' style={{borderRadius:'20px'}}>Home</Nav.Link>
            <Nav.Link className='buttons' style={{marginLeft:'10%',borderRadius:'20px'}}>Features</Nav.Link>
            <Nav.Link className='buttons' style={{marginLeft:'10%',borderRadius:'20px'}}>Services</Nav.Link>
            <Nav.Link className='buttons' style={{marginLeft:'10%',borderRadius:'20px'}}>Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div style={{}} className="content">
        <div className='direction'>
        <img src={chart} style={{scale:'60%',marginLeft:'-70px',marginTop:'-120px'}} />
        
        <div style={{marginTop:'10%'}}>
        <l1 className='roboto' style={{fontSize:'50px',color:'#554DDE'}}>Manage your<br/>finances like a pro<br/>in no time</l1>
        </div>
        
        </div>

        <div>
        <img src={whoarewe} style={{scale:'50%',marginLeft:'100px',marginTop:'-300px'}} />
        </div>



      </div>





    </div>
  );
}

export default App;