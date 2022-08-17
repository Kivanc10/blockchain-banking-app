import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class dashboard extends Component {
  render() {
    return (
      <div><div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    
        <span class="fs-4">Sidebar</span>
      </a>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
           
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
           
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
           
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
       
            Customers
          </a>
        </li>
      </ul>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"></img>
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div></div>
    )
  }
}
