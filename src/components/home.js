import React, { Component } from "react";

import AuthService from "../services/auth.service";
import './home.css'
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {


    return (


        <header id="home" style={{ 
            backgroundImage: `url("./images/b3.jpg")` ,
            backgroundRepeat: 'no-repeat',
            
            backgroundSize: 'cover'
       
          }}>
           
          
 
         
              <div className="row banner"  >
     
              <div className="banner-text" >
    
                <div bottom  >
     
                  <h1 >Univers Africa</h1>
                  
                </div>
                <div bottom duration={1200}>
                  <h3 >NOUS , C'EST L'AVENIR</h3>
                </div>
                
              
              </div>
           
            </div>
          
          </header>



    );
  }
}
