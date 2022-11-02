
import './choices.css'
import img3 from '../image/both.svg';
import img2 from '../image/write.svg';
import img1 from '../image/read.svg';
import {FaBook} from 'react-icons/fa'
import '../Forms/choices.css'
import React, { Component } from 'react'

export default class form extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        fix:false,
        setfix:false
    };
}
    
   
   
 
  render() {
  
     var setfixed=() => {
  
      this.setState({fix:!this.state.fix});
  } 
  const x=this.state.fix;
    return (
      
    <div className='container-log' >
        <header className="header" style={{backgroundColor:'edede9'}}>
    
            <div class="header-1">
            
                <a href="./home" className="logo">  <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>
                </div>
                </header>
    <div className="loginpage-form-container"style={{marginLeft:'400px'}}>
    
    
    
        <form   style={{width:'670px',height:'400px'}}onClick={this.setfixed}>
            
        <div className="greeting">Hi,</div><div style={{alignContent:'center'}}className="prompt"><strong>To get the best Readify experience, we want to know more about you!</strong></div>
        <div class="form-row" style={{display:'inline'}}>
        <div class="form-group col-md-4">
        <div class="option" role="option" tabindex="0" aria-selected="true">
                  <img src={img1}alt="icon"/>
                  <div>I like to read</div></div>
          
          </div>
          </div>
           
        <div class="form-group col-md-4">
        <div class="option" role="option" tabindex="0" aria-selected="false">
                    <img src={img2} alt="icon"/>
                    <div>I like to write</div></div>
          
          </div>
          <div class="form-group col-md-4">
          <div class="option" role="option" tabindex="0" aria-selected="true">
                      <img src={img3} alt="icon"/>
                      <div>I like both</div></div></div>
                      <div className="finish-button-wrapper"><button className={x?"finish-button btn-primary":"finish-buttondisabled btn-primary"}style={{marginTop:'190px',marginRight:'55px'}}>Next</button></div>
        </form>
    
    </div>
   
    </div>

  

  




  );
}
}
