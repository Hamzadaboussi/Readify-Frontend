

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
import Signup from './Signup';
import { color } from '@mui/system';
import React, { Component } from 'react'
const AuthenticationContext = React.createContext();
const { Provider, Consumer } = AuthenticationContext;
export default class Login extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      errorMessage:''
    }
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
     this.props.history.push('/home');
}
})
.catch(error => console.log('error', error));}

  render() {
    return (
      





<div className="login-form-container">



    <form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.connect();


                                                }} >
        
        <span>Email Address</span>
        <input type="email" name="" className="box" placeholder="enter your email" id="" onChange={(e) => { this.setState({ email: e.target.value }) }}/>
        <span>password</span>
        <input type="password" name="" className="box" placeholder="enter your password" id="" onChange={(e) => { this.setState({ password: e.target.value }) }}/>
        <div className="checkbox" style={{alignItems:'left',position:'relative'}}>
            <input type="checkbox" name="" id="remember-me"style={{position:'relative',left:'2rem',bottom:'2px'}}/>
            <label for="remember-me" style={{position:'relative'}}> remember me</label>
        </div>
        <input type="submit" value="Login" className="btn"style={{backgroundColor:'#219150'}}/> 
                                                   
        <p>forget password ? <a href="#">click here</a></p>
       {
                                                        this.state.errorMessage !== '' ?
                                                            <div className="alert alert-danger">
                                                                {this.state.errorMessage}
                                                            </div>
                                                            :
                                                            <div ></div> }
    </form>

</div>




    )
  }
}
