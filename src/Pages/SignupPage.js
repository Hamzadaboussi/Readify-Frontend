
import React, { Component } from 'react'
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


export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email: "",
            password: "",
            confirmpassword: "",
            lname:"",
            fname:"",
            
            errorMessage: ''
        }}
    componentDidMount() {
        document.body.style.backgroundColor = '#703056';
    }
    createaccount(){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "username":this.state.username,
  "email": this.state.email,
  "password": this.state.password,
  "confirmpassword": this.state.confirmpassword,
  "fname": this.state.fname,
  "lname": this.state.lname
});

var requestOptions = {
    method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/signup", requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.success === false) {
    console.log("oups");
    
    this.setState({ errorMessage:result.message})
} else {
    // connected
    localStorage.setItem('token',result.token)
    this.props.history.push('/choices');
}
})
.catch(error => console.log('error', error));}
createaccountchange(e){
    if(this.state.password===this.state.confirmpassword)
   { 
    this.createaccount()}
    else{
        
        this.setState({errorMessage:"Passwords don't match"})
    }
}

  render() {
    return (
   


       

<div className='container-log' >
    <header className="header" style={{backgroundColor:'#000'}}>

        <div class="header-1">
        
            <a href="./home" className="logo">  <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>
            </div>
            </header>
<div className="loginpage-form-container" >


<h3 style={{marginBottom:'40px',marginLeft:'140px',fontSize:'3rem',fontWeight:'700',color:'white'}}>Sign up</h3>
    <form onSubmit={(e) => {e.preventDefault();
        this.createaccountchange()}} >
                                                    <div class="form-row">
    <div className="form-group col-md-6">
    <span>First name</span>
    <input required='true' type="text" name="" className="box" placeholder="Enter your first name" id=""  onChange={(e) => { this.setState({ fname: e.target.value }) }}/>
    </div>
    <div className="form-group col-md-6" >
    <span>Last name</span>
    <input required='true' type="text" name="" className="box" placeholder="Enter your last name" id=""  onChange={(e) => { this.setState({ lname: e.target.value }) }}/>
   
    </div>
  </div>
  <span>Username</span>
        <input required='true' type="text" name="" className="box" placeholder="Enter your username" id=""  onChange={(e) => { this.setState({ username: e.target.value }) }}/>
    <span>Email Address</span>
        <input required='true' type="email" name="" className="box" placeholder="Enter your email" id=""  onChange={(e) => { this.setState({ email: e.target.value }) }}/>
        <span>Password</span>
        <input type="password" name="" className="box" placeholder="Enter your password" id="" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required onChange={(e) => { this.setState({ password: e.target.value }) }}/>
        <span>Confirm password</span>
        <input required='true' type="password" name="" className="box" placeholder="Confirm your password" id=""pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"   onChange={(e) => { this.setState({ confirmpassword: e.target.value }) }}/>
        <div className="checkbox" >
            <input required='true' type="checkbox" name="" id="remember-me" style={{bottom:'1.6rem'}}/>
            <label for="remember-me" > I would like to receive personalized selections and the latest news*</label>
        </div>
        <input type="submit" value="Register" className="btn" style={{backgroundColor:'#219150'}} />
        {
                                                        this.state.errorMessage !== '' ?
                                                            <div className="mt-3 alert alert-danger">
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
}}
