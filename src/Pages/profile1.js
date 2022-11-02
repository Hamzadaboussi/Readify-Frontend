import React from 'react';
import './profile.css';
import {FaBook} from 'react-icons/fa';
import './LoginPage.css';
import Footer from '../readify/footer';
import skelette from './skelette';

import Navbar from '../readify/Navbar';
import Login from '../readify/Login';
import Signup from '../readify/Signup';
import Navbar2 from '../readify/Navbar2';
import { FaceRetouchingOffSharp } from '@mui/icons-material';
import Navbar3 from '../readify/Navbar3';
class Profile1 extends React.Component{
    constructor(props){
      super(props);
      this.state={
        user:[],
        id:this.props.match.params.id
       
      }
    }
    componentDidMount(){
      this.getUserDetails();
      console.log(this.state.id);
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
  logout(){
    localStorage.setItem('token',"");
    
  }
    render(){
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
     {this.state.user.username?this.state.user.username:null}
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
          <div style={{width:'70%'}}>
          
<div className="col-sm-12 col-md-8 col-lg-12"><div><div className="user-profile mt-md-32"><h1 className="headline text-primary mb-40">
    My personal space
  </h1> <section className="bg-surface-low-4 mb-40 br-16 p-24 edit"><h2 className="user-profile__title title-lg">
      My profile
    </h2> <div className="table-responsive"><table className="table table-borderless"><tr><th className="text-on-surface-low pl-0">
            Username
          </th> <td className="text-left text-sm-right">
          {this.state.user.username?this.state.user.username:null}
          </td></tr> <tr><th className="text-on-surface-low pl-0">
            Email
          </th> <td className="text-left text-sm-right">
           {this.state.user.email}
          </td></tr></table></div>
           <div className="button-group--left mt-16"><a href={"/profile/edit/"+this.state.id} className="btn-nav2">
        Edit my profile
      </a></div></section> </div>
      </div>


</div>

</div>
</div>
  </div>
 
  
  </section>
  
  </div><Footer/>
  </div></div>
);}
}
export default Profile1;