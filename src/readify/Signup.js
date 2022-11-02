
import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';

import  { Component } from 'react'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email:"",
            password: "",
            confirmpassword: "",
            lname:"",
            fname:"",
            user:"",
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
    
    this.props.history.push('/choices');
}
})
.catch(error => console.log('error', error));}
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
      .then(result => this.setState({user:result.InsertedId}))
      .catch(error => console.log('error', error));
  }
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
        <div className="login-form-container">



        <form  onSubmit={(e) => {e.preventDefault();
        this.createaccountchange()}} >
       <div style={{alignItems:"baseline"}}> 
            <span>First name</span>
            <input type="text" name="" className="box" placeholder="Enter your last name" id="" onChange={(e) => { this.setState({ fname: e.target.value }) }}/>
            <span>Last name</span>
            <input type="text" name="" className="box" placeholder="Enter your first name" id=""  onChange={(e) => { this.setState({ lname: e.target.value }) }}/>
    </div> <span>Username</span>
            <input type="text" name="" className="box" placeholder="Enter your email" id=""  onChange={(e) => { this.setState({ username: e.target.value }) }}/>
            <span>Email Address</span>
            <input type="email" name="" className="box" placeholder="Enter your email" id="" onChange={(e) => { this.setState({ email: e.target.value }) }}/>
            <span>Password</span>
            <input type="password" name="" className="box" placeholder="Enter your password" id="" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required onChange={(e) => { this.setState({ password: e.target.value }) }}/>
            <span>Confirm password</span>
            <input type="password" name="" className="box" placeholder="Confirm your password" id=""pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required onChange={(e) => { this.setState({ confirmpassword: e.target.value }) }}/>
            <div className="checkbox" style={{alignItems:'left',position:'relative'}}>
                <input type="checkbox" name="" id="remember-me"style={{position:'relative',left:'2rem',bottom:'1.4rem'}}/>
                <label for="remember-me" style={{position:'relative'}}> I would like to receive personalized selections and the latest news*</label>
            </div>
            <input type="submit" value="Register" className="btn" style={{backgroundColor:'#219150'}}/>
            
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
    
    )
  }
}







