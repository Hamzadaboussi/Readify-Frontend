import { useState } from 'react';
import {  useRef} from "react";
import { Link } from 'react-router-dom';
import bootsrap from 'bootstrap';
import { FaBook,FaSistrix,FaHome,FaListAlt,FaTags,FaBlogger,FaCommentAlt } from 'react-icons/fa';
import {BsFillPersonFill,BsCartFill,BsFillSuitHeartFill} from 'react-icons/bs';
import '../App.css'
import Avatar from '@mui/material/Avatar';
import img1 from "../image/img_569204.png";


    


import React, { Component } from 'react'

export default class Navbar3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
        
        errorMessage: ''
    }}
  componentDidMount(){
this.getConnectedUserData()
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
    .then(result => {this.setState({user:result._id})})
    .catch(error => console.log('error', error));
}
  render() {
   



  

return(
  <nav>
<header className="header">

<div className="header-1">

    <a href="/home" className="logo"> <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>

    <form action="" className="search-form">
        <input type="search" name="" placeholder="search here..." id="search-box"/>
        <label for="search-box" ><i><FaSistrix /></i></label>
    </form>

<div >
<a href={"/profile/"+this.state.user}><Avatar  src={img1} sx={{marginLeft:10,marginRight:2 }} /></a>

</div>

  
   </div>

<div className='header-2'>
<nav className="navbar">
<a href="/" >Home</a>
<a href="/home" >Books</a>
    </nav>
</div>

</header>



<nav className="bottom-navbar">
<a href="/" ><FaHome style={{color: '#27ae60'}}/></a>
<a href="/home" ><FaListAlt style={{color: '#27ae60'}}/></a>

</nav>





</nav>
);

}
}