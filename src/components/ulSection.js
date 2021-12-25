import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

  import ReactDOM from 'react-dom';
  
  
  function Garage() {
    return (
      <>
          <h1>Who lives in my Garage?</h1>
          <h2 className="post-title"> Xe của <input /></h2>
          
      </>
    );
  }
  
  ReactDOM.render(<Garage />, document.getElementById('root'));