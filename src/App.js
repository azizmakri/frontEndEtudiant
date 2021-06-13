import React, { Component } from "react";
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Nav from "./components/nav";
import Nav1 from"./components/dashboard/layout/nav"
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home";
import About from "./components/about";
import Profile from "./components/profile.component";
import Sidebar from'./components/dashboard/layout/sidenav'

import UpdateMetierComponent from './components/dashboard/metier/UpdateMetierComponent'
import ListMetierComponent from '../src/components/dashboard/metier/ListMetierComponent';

import CreateMetierComponent from '../src/components/dashboard/metier/CreateMetierComponent';

import ViewMetierComponent from '../src/components/dashboard/metier/ViewMetierComponent';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {

      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,

      });
    }
  }


  
    
    
    render(){
      const { currentUser } = this.state;

      if(currentUser){
          return (
              <Router>
                  <div className="cont">
                  <Nav1 />
                  <Sidebar></Sidebar>
                  <Switch>
                  
                          <Route path = "/metiers" component = {ListMetierComponent}></Route>
                          <Route path = "/add-metier/:id" component = {CreateMetierComponent}></Route>
                          <Route path = "/view-metier/:id" component = {ViewMetierComponent}></Route>
                          <Route path = "/metiers" component = {ListMetierComponent}></Route>
                          <Route path = "/update-metier/:id" component = {UpdateMetierComponent}></Route> 
                          
                         
                      <Route path="/Profile" component={Profile}></Route>
                      
                  </Switch>
                  
                  </div>
              </Router>
            )
      }
      else{
          return (
              <Router>
                  <Nav />
                  
                  <Switch>
                      
                      <Route path="/home" component={Home}></Route>
                      <Route path="/login" exact component={Login}></Route>
                      <Route path="/signup" component={Register}></Route>
                      
                      <Route path="/about" component={About}></Route>
                      <Route path="/" component={Home}></Route>
                  </Switch>
                 
             
              </Router>
            )
      }
          
    }
  }
export default App;
