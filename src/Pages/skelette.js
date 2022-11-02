import React, { useState } from 'react'
import './profile.css';
import {FaBook} from 'react-icons/fa';
import './LoginPage.css';
import Footer from '../readify/footer';
import Navbar from '../readify/Navbar';
import Login from '../readify/Login';
import Signup from '../readify/Signup';
import Navbar2 from '../readify/Navbar2';

function componentDidMount() {
        document.body.style.backgroundColor = '#fff';
    }

function Skelette({profile,user}) {

 console.log(user)

    

  return (
      <div>
       {{user}? <Navbar2/>:<Navbar signup={<Signup login={<Login/>}/>}
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
    {user}
  </p> </div> <ul className="profile__nav"><li className="mb-16"><a href="/profile" className="text--link link--exact link--active" aria-current="page">
        My personal space
      </a></li> <li className="mb-16"><a href="/profile/edit" className="text--link">
        My profile
      </a></li> <li className="mb-16"><a href="/profile/mdp" className="text--link link--prefered">
       Update my password
      </a></li>  <li className="mb-16"><a href="https://support.youboox.fr" target="_blank" className="text--link">
        Need help ?
      </a></li></ul> <button className="btn-nav2">
    Logout
  </button></aside>
{profile}

  </div>
  </div>
 
  
  </section>
  
  </div><Footer/>
  </div></div>
  )
}

export default Skelette;