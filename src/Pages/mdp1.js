import React, { Component } from 'react'
import Footer from '../readify/footer';
import Navbar from '../readify/Navbar';
import Login from '../readify/Login';
import Signup from '../readify/Signup';
import Navbar2 from '../readify/Navbar2';
import Navbar3 from '../readify/Navbar3';
export default class Mdp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
     user:[],
      password:"",
      confirmpassword:"",
         id:this.props.match.params.id,
        errorMessage: '',
        successMessage:''
    }}

    componentDidMount(){
      this.getUserDetails()
      console.log(this.state.id)
      console.log(this.state.user)
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
    
  updatepassword(){
   
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization",localStorage.getItem('token') );
    
    var raw = JSON.stringify({
      
      "password": this.state.password,
      "id": this.state.id
    });
    console.log(raw)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/Updatepassword", requestOptions)
    .then(result =>{ if (result.success === false) {
      console.log("oups");
      this.setState({ errorMessage:result.message})
  } else {
      // connected
      this.setState({successMessage:"Password updated successfully !"})
      
  }})
    .catch(error => console.log('error', error));
  
    //delete vehicule.user;

    
       
  
}

  update(e){
  console.log(this.state.id)
  if(this.state.password===this.state.confirmpassword)
 { 
this.updatepassword()}
else{
this.setState({errorMessage:"Passwords don't match"})
                }
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
 </p> </div> <ul className="profile__nav"><li className="mb-16"><a href={"/profile/"+this.state.id} className="text--link link--exact link--active" aria-current="page">
       My personal space
     </a></li> <li className="mb-16"><a href={"/profile/edit/"+this.state.id} className="text--link">
       My profile
     </a></li> <li className="mb-16"><a href={"/profile/mdp/"+this.state.id} className="text--link link--prefered">
      Update my password
     </a></li>  <li className="mb-16"><a href="https://support.youboox.fr" target="_blank" className="text--link">
       Need help ?
     </a></li></ul> <a className="btn-nav2" href='/'onClick={this.logout}>
     Logout
   </a></aside>
      <div style={{width:'70%'}}><div className="col-sm-12 col-md-8 col-lg-12">
      <div className="user-profile mt-md-32">
      <section className="user-profile__section edit">
        
     <h2 className="user-profile__title headline mt-16 mt-md-0 text-primary mb-40">
     Update my password
   </h2> 
   <form className="simple-form-group" onSubmit={ (e)=>{
     e.preventDefault();
    this.update()}}>
      
          <div className="mb-24"><label for="newPassword" className="title-md">Nouveau mot de passe</label> <div className="input-container"onChange={ (e)=>{ this.setState({password:e.target.value}) } } >
              <input id="newPassword" placeholder="Enter your new password" autocomplete="" type="password" className="input"/>
               <input type="checkbox" aria-label="Afficher le mot de passe" className="password"/>
               </div>
                </div> 
                <div className="mb-24">
                   <label for="confirmPassword" className="title-md">Confirm your password</label> 
                   <div className="input-container"> 
                   <input id="confirmPassword" placeholder="Entrer your new password  (again ! )" autocomplete="" type="password" className="input" onChange={ (e)=>{ this.setState({confirmpassword:e.target.value}) } } /> 
                   <input type="checkbox" aria-label="Afficher le mot de passe" className="password"/>
                   </div>
                    </div>
                     <div className="button-group--right mt-40"><a href={"/Profile/"+this.state.id} className="btn-nav1">
         Later
       </a> 
       <input type="submit" value="change password" className="btn-nav2" />
    
       </div>   {
                                                        this.state.errorMessage !== '' ?
                                                            <div className="mt-3 alert alert-danger">
                                                                {this.state.errorMessage}
                                                            </div>:null
                                                             
                                                               
                                                                 
                                                              
                                                              
                                                            }
                                                           {this.state.successMessage!== ''?
                                                               <div className="mt-3 alert alert-success">{this.state.successMessage}</div>:null}     
                                                            <div></div>
                                                    
       </form>
       </section>
       </div>
       </div></div>
       </div>
  </div>
 
  
  </section>
  
  </div><Footer/>
  </div></div>
    )
  }
}
