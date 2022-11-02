import React from 'react';
import map from "../image/worldmap.png" ;
import { AiFillPhone,AiFillTwitterCircle,AiOutlineArrowRight } from "react-icons/ai";
import {BsFacebook}from "react-icons/bs";
import {FaInstagramSquare,FaEnvelope} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {GrPinterest} from "react-icons/gr";
import {ImLinkedin} from "react-icons/im";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../image/e563d97183e6468f0f32f4a01c424e68.png';
function Footer(){


return(
<section className="footer" style={{backgroundColor:'#edebe8'}}>

    <div className="box-container">

        <div className="box">
            <h3>our location</h3>
            <a href="#"> <i><HiLocationMarker style={{color: '#27ae60'}}/></i> Tunisia </a>
            <img style={{height:'10rem',marginTop:'20px'}} src={img1}></img>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#"> <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> home </a>
            <a href="#"> <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> featured </a>
            <a href="#"> <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> arrivals </a>
            <a href="#"> <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> reviews </a>
            <a href="#"> <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> blogs </a>
        </div>

        <div className="box">
            <h3>extra links</h3>
            <a href="#">  <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> account info </a>
            <a href="#"> <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> privacy policy </a>
            <a href="#"> <i><AiOutlineArrowRight style={{color: '#27ae60'}}/></i> our serivces </a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#"><i><AiFillPhone style={{color: '#27ae60'}}/></i>  +216-20-581-287 </a>
            
            <a href="#"><i><FaEnvelope style={{color: '#27ae60'}}/></i> mediounisarra99@gmail.com </a>
            <img src={map}className="map" alt=""/>
        </div>
        
    </div>

    

    <div className="credit"> created by <span>Sara & Sarah</span> | all rights reserved! </div>

</section>);
}
export default Footer;