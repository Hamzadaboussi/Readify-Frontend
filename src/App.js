import choices1 from './Forms/hoices';
import Pageacceuil from './readify/Pageacceuil';

import Blogs from './readify/Blogs';
import Featured from './readify/Featured';
import ClientReview from './readify/clientreview';
import Arrivals from './readify/Arrivals';


import NotFound from './Pages/NotFound';
import '@fortawesome/fontawesome';
import '@mui/material';
import 'bootstrap';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/home/homee';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';



import  Edite1 from './Pages/edite1';

import Searchbook from './Pages/searchPage';
import form from './Forms/form';
import Profile1 from './Pages/profile1';
import Mdp1 from './Pages/mdp1';

import Foryou from './Forms/foryou';

import React, { Component } from 'react'
import BookPage2 from './Pages/Book';
import BookPage1 from './Pages/Book1';
import Addreview from './readify/Addreview';

export default class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
       id:null
    }



}
  getConnectedUserData(){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", localStorage.getItem('token'));
      
   
      var requestOptions = {
        method: 'GET',
        headers: myHeaders, 
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/connected", requestOptions)
        .then(response => response.json())
        .then(result => { this.setState({user:result._id}) })
        .catch(error => console.log('error', error));
    }
  render() {
  


   
 
 



 
  return (
    
    <BrowserRouter >
    

    {/* Route components would be visible only at their route */}
    <Switch>
    <Route path="/" component={Pageacceuil} exact />
    <Route path="/home" component={HomePage} exact />
    <Route path="/login" component={LoginPage} exact />
    <Route path="/signup" component={SignupPage} exact />
    <Route path="/addreview" component={Addreview} exact />
    <Route path="/choices" component={choices1} exact />
    <Route path="/profile/:id" component={Profile1} exact />
    <Route path="/profile/edit/:id" component={Edite1} exact />
    <Route path="/profile/mdp/:id" component={Mdp1} exact />
    <Route path="/Featured" component={Featured} exact />
    <Route path="/Arrivals" component={Arrivals} exact />
    <Route path="/Reviews" component={ClientReview} exact />
    <Route path="/Blogs" component={Blogs} exact />
    <Route path="/form" component={form} exact />
    <Route path="/search" component={Searchbook} exact />
    <Route path="/foryou" component={Foryou} exact />
    <Route path="/book/theplague" component={BookPage2} exact />
    <Route path="/book/BelAmi" component={BookPage1} exact />
    <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

}
