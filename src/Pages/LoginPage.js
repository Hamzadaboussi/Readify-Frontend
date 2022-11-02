

import {AiOutlineCloseCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import img from '../image/bg-01.jpg';
import { color } from '@mui/system';
import {FaBook} from 'react-icons/fa'
import Footer from '../readify/footer';
import './LoginPage.css';
import bootstrap from 'bootstrap';
import React, { Component } from 'react'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ''
        }
    }
    componentDidMount() {
        document.body.style.backgroundImage = '#703056';
    }
    connect()
    {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": this.state.email,
  "password": this.state.password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/login", requestOptions)
  .then(response => response.json())
  .then(result =>{ if (result.success === false) {
    console.log("oups");
    this.setState({ errorMessage:result.message})
} else {
    // connected
    localStorage.setItem('token',result.token)
    this.props.history.push('/');
}
})
.catch(error => console.log('error', error));}
 
  render() {
    return ( 
       

<div className='container-log' >
    <header className="header" style={{backgroundColor:'edede9'}}>

        <div class="header-1">
        
            <a href="./home" className="logo">  <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>
            </div>
            </header>
<div className="loginpage-form-container">


<h3 style={{marginBottom:'40px',marginLeft:'160px',fontSize:'3rem',fontWeight:'700',color:'white'}}>Login</h3>
    <form  onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.connect();


                                                }} >
        
        <span>Email Address</span>
        <input required='true' type="email" name="" className="box" placeholder="enter your email" id=""  onChange={(e) => { this.setState({ email: e.target.value }) }}/>
        <span>Password</span>
        <input required='true' type="password" name="" className="box" placeholder="enter your password" id=""  onChange={(e) => { this.setState({ password: e.target.value }) }}/>
        <div className="checkbox" >
            <input type="checkbox" name="" id="remember-me" style={{top:'2px'}}/>
            <label for="remember-me" > remember me</label>
        </div>
        <input type="submit" value="Login" className="btn" style={{backgroundColor:'#219150'}} />
        <p>forget password ? <a href="#">click here</a></p>
        <p>don't have an account ? <a  href='/signup'>Sign up</a></p>
        {
                                                        this.state.errorMessage !== '' ?
                                                            <div className="alert alert-danger">
                                                                {this.state.errorMessage}
                                                            </div>
                                                            :
                                                            <div></div>
                                                    }
    </form>

</div>
<Footer/>
</div>


);
    
    
    }
}

