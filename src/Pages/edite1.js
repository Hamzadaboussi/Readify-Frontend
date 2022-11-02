import React, { Component } from 'react'
import Profile from './Profile';
import './profile.css';
import {FaBook} from 'react-icons/fa';
import './LoginPage.css';
import Footer from '../readify/footer';
import Navbar from '../readify/Navbar';
import Login from '../readify/Login';
import Signup from '../readify/Signup';
import Navbar2 from '../readify/Navbar2';
import Navbar3 from '../readify/Navbar3';

export default class Edite1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        Username:"",
        fname:"",
        lname:"",
        errorMessage: '',
       id:this.props.match.params.id,
        user:[],
        successMessage:""
    }



}
componentDidMount(){
  this.getUserDetails()
}
getUserDetails(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", localStorage.getItem('token'));
  
  var raw = JSON.stringify({
    "id":this.state.id,
   
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body:raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/finduser", requestOptions)
    .then(response => response.json())
    .then(result => {this.setState({user:result.data})})
    .catch(error => console.log('error', error));
}

updateuser(){
 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", localStorage.getItem('token'));
  
  var raw = JSON.stringify({
    "id":this.state.id,
    "email": this.state.email,
    "username": this.state.username,
    "lname": this.state.lname,
    "fname": this.state.fname
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/Updateuser", requestOptions)
    .then(response => response.json())
    .then(result =>{ if (result.success === false) {
      console.log("oups");
      this.setState({ errorMessage:result.message})
  } else {
      // connected
      
        
      this.setState({successMessage:"Profile updated successfully!"})
  }})
    .catch(error => console.log('error', error));
  
    //delete vehicule.user;
}
    logout(){
      localStorage.setItem('token',"");
      
    }


  render() {
    return (
      <div>
      {this.state.user? <Navbar3 user={this.state.id}/>:<Navbar signup={<Signup login={<Login/>}/>}
       login={<Login signup={<Signup/>}/>}/> } 
        
   <div id="__nuxt">
   <div id="__layout">
    
   <section> 

   
  <div className="container">
      <div className="row">
          <aside className="user__nav col-sm-12 col-md-4 col-lg-3 mt-32">
              <p className="user__see-nav d-block d-md-none">
   Access to your profile menu
 </p> <div><p className="subtitle">
 {this.state.user.username}
 </p> </div> <ul className="profile__nav"><li className="mb-16"><a href={"/profile/"+this.state.id}  className="text--link link--exact link--active" aria-current="page">
       My personal space
     </a></li> <li className="mb-16"><a href={"/profile/edit/"+this.state.id} className="text--link">
       My profile
     </a></li> <li className="mb-16"><a href={"/profile/mdp/"+this.state.id}  className="text--link link--prefered">
      Update my password
     </a></li>  <li className="mb-16"><a href="https://support.youboox.fr" target="_blank" className="text--link">
       Need help ?
     </a></li></ul> <a className="btn-nav2" href='/'onClick={this.logout}>
     Logout
   </a></aside>
      <div style={{width:'70%'}}>
      <div className="col-sm-12 col-md-8 col-lg-12">
         <div className="user-profile mt-md-32">
            <section className="user-profile__section edit">
               
            <h2 className="user-profile__title headline mt-16 mt-md-0 mb-40 text-primary">
        Edit my profile
      </h2> 
      
       <form className="simple-form-group"  onSubmit={ (e)=>{
                                 e.preventDefault();
                                 this.updateuser()
                             } }>
          <div className="mb-24">
             <label for="Username" className="title-md">Username</label> 
             <div className="input-container">
                 <input id="Username" placeholder="Entrer un Username" autocomplete="username" type="text" className="input" onChange={ (e)=>{ this.setState({username:e.target.value}) } } /> 
                 </div> 
                 </div> 
                 <div className="mb-24">
                    <label for="email" className="title-md">Email</label>
                     <div className="input-container"> 
                     <input id="email" placeholder="Email" autocomplete="" required="required" type="email" className="input"onChange={ (e)=>{ this.setState({email:e.target.value}) } } />
                      </div>
                       </div>
                       
        
      
        <div className="mb-24">
           <label for="first_name" className="title-md">First name</label>
            <div className="input-container">
           <input id="first_name" placeholder="First name" autocomplete="given-name" type="text" className="input"onChange={ (e)=>{ this.setState({fname:e.target.value}) } } /> </div> 
           </div> <div className="mb-24"><label for="last_name" className="title-md">Last name</label>
            <div className="input-container"><input id="last_name" placeholder="Entrer votre Last name" autocomplete="family-name" type="text" className="input"onChange={ (e)=>{ this.setState({lname:e.target.value}) } } /> 
            </div>
             </div> 
                  
                     
                      
                       
                       
              
              <div className="button-group--right mt-16"><a href={"/profile/"+this.state.id}  className="btn-nav1">
            Later
          </a> 
          <input type="submit" value="Valider" className="btn-nav2"/>
            
         
          </div>  {
                                                        this.state.errorMessage !== '' ?
                                                            <div className="mt-3 alert alert-danger">
                                                                {this.state.errorMessage}
                                                            </div>:null
                                                             
                                                               
                                                                 
                                                              
                                                              
                                                            }
                                                           {this.state.successMessage!== ''?
                                                               <div className="mt-3 alert alert-success">{this.state.successMessage}</div>:null} 
          </form>
          </section>
          </div>
          
          
         
    
          
          
          </div></div>      </div>
  </div>
 
  
  </section>
  
  </div><Footer/>
  </div></div>
    )
  }
}
