
import '../App.css';
import Navbar from './Navbar';
import Footer from './footer';
import Loader from './loader';
import stand from '../image/stand.png';
import deal from '../image/hh7.jpg';
import book99 from '../image/content10.jpg';
import book10 from '../image/content2.jpg';
import book5 from '../image/content3.jpg';

import Arrivals from './Arrivals';
import { useAuth0 } from '@auth0/auth0-react';
import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Featured from './Featured';
import Blogs from './Blogs';
import { FaBook,FaLock } from 'react-icons/fa';
import {MdHeadsetMic } from 'react-icons/md';
import ClientReview from './clientreview';
import Login from './Login';
import Signup from './Signup';
import Navbar2 from './Navbar2';

    
    
    
    import React, { Component } from 'react'
    
    export default class Pageacceuil extends Component {
        constructor(props) {
            super(props);
            this.state = {
              user:null,
                
                errorMessage: ''
            }}
            componentDidMount(){
                this.getConnectedUserData();
               
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
    
    
    
       

    
      
    
   
      return (


<div>

{this.state.user === null ? <Navbar signup={<Signup login={<Login/>}/>}
        login={<Login signup={<Signup/>}
        />}/>:<Navbar2 /> } 
    
        
        
    
 

<section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3>Online library</h3>
            <p>Find the books available in our online bookstore! 
                bookstores in Tunisia, online bookstore </p>
            <a href="./home" className="btn">Explore now</a>
        </div>

        <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <a href="#" ><img src={book10} alt=""/></a>
                <a href="#" ><img src={book99} alt=""/></a>
                <a href="#" ><img src={book5} alt=""/></a>
                
            </div>
            <img src={stand} className="stand" alt=""/>
        </div>

    </div>

</section>


<section className="icons-container" style={{width:'160rem'}}>

    <div className="icons">
    
    <i><FaBook style={{color: '#27ae60'}}/> </i>
        <div className="content">
            <h3> free books</h3>
        </div>
    </div>

    <div className="icons">
        <i><FaLock style={{color: '#27ae60'}}/></i>
        <div className="content">
            <h3>  secure connection</h3>
            
        </div>
    </div>


    <div className="icons">
        <i><MdHeadsetMic style={{color: '#27ae60'}}/></i> 
        <div className="content">
            <h3> 24/7 support</h3>
            
        </div>
    </div>

</section>

<Featured/>
<section class="newsletter">

    <form action="">
        <h3>subscribe for latest updates</h3>
        <input type="email" name="" placeholder="enter your email" id="" class="box"/>
        <input type="submit" value="subscribe" class="btn"/>
    </form>

</section>





<Arrivals/>


<section className="deal">

    <div className="content" style={{marginLeft:'30px'}}>
        <h3>Book of the week</h3>
        <h1>Dark Spaces</h1>
        <p>The most wanted book for this week!
            check it out!
        </p>
        <a href="#" className="btn">Check now</a>
    </div>

    <div className="image" style={{Right:'20px',position:'relative'}}>
        <img src={deal} alt="" style={{height:'35rem',width:'20rem',marginRight:'0',borderRadius:'20px'}}/>
    </div>

</section>











<Footer/>



</div>

);

}
    }



