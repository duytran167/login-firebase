import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Section from './components/Section'
import TaskList from './components/TaskList';
import PostItem from './components/PostItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorBox from './components/ColorBox';
import TitleBox from './components/TitleBox';
import GetGift from './components/GetGift';
import { useEffect } from 'react';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import CourseItem from './components/CourseItem';
import Course from './components/Course';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import RestaurantList from './components/RestaurantList';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantUpdate from './components/RestaurantUpdate';
import SignIn from './components/SignIn'
import firebase from 'firebase/compat/app';



// Configure Firebase.


function App() {
  
  const [isuserSignIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  })
  if (isuserSignIn === true) {
    return (

      <Header />
      
    )
  }
  else {
    return (
      <div id="layout">
        <br />
        <Router>
          <div>
            <button className='btnn-google text-center' color='white'> <Link to='/sign-in' className="nav-link">Loggin</Link></button>
            <Switch>
              <Route path='/sign-in' component={SignIn} />
            </Switch>
          </div>
        </Router>

        {/* <div id="wrapper">
              {
                Course.map(course => (
                  <CourseItem
                    key={course.id}
                    course={course}
                  />

                ))}

            </div> */}
      </div>

    );
  }
}

export default App;