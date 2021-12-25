import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap';
import TaskList from './TaskList';
import ColorBox from './ColorBox';
import GetGift from './GetGift';
import PostList from './PostList';
import PostForm from './PostForm';
import RestaurantList from './RestaurantList';
import RestaurantCreate from './RestaurantCreate';
import RestaurantUpdate from './RestaurantUpdate';
import TitleBox from './TitleBox';
import FileUploadPage from "./FileUploadPage";

const Header = () => (
  <header>
    <Router>
      <Navbar fixed="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/TaskList' className="nav-link">Todo List</Link>
            <Link to='/ColorBox' className="nav-link">Count</Link>
            <Link to='/GetGift' className="nav-link">Get Gift</Link>
            <Link to='/PostList' className="nav-link">Post List</Link>
            <Link to='/PostForm' className="nav-link">Post Form</Link>
            <Link to='/RestaurantList' className="nav-link">Restaurant List</Link>
            <Link to='/log-out' className="nav-link">Log out</Link>
            <Link to='/upload-image' className="nav-link">Images</Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='container'>
        <div className='col-md-12'>
        <br />
                    <br />
      <Switch>

            <Route path='/TaskList' component={TaskList} />
            <Route path='/ColorBox' component={ColorBox} />
            <Route path='/GetGift' component={GetGift} />
            <Route path='/PostList' component={PostList} />
            <Route path='/PostForm' component={PostForm} />
            <Route path='/RestaurantList' component={RestaurantList} />
            <Route path='/RestaurantCreate' component={RestaurantCreate} />
            <Route path='/update/:id' render={props => (<RestaurantUpdate {...props} />)} />
            <Route path='/log-out' component={TitleBox} />
            <Route path='/upload-image' component={FileUploadPage} />

          </Switch>
          </div>
          </div>
    </Router>
  </header>
);

export default Header;