import React from "react";
import bootstrap from "bootstrap";
import book8 from '../image/content.png';
import book9 from '../image/content1.jpg';
import book99 from '../image/content10.jpg';
import book10 from '../image/content2.jpg';
import book5 from '../image/content3.jpg';
import book6 from '../image/content5.jpg';
import book7 from '../image/content6.jpg';
import book1 from '../image/content7.jpg';
import book2 from '../image/content8.jpg';
import book11 from '../image/content11.jpg';
import book3 from '../image/content9.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Swiper from 'swiper';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FaSistrix } from 'react-icons/fa';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import { AiFillEye} from 'react-icons/ai';

function Featured(){
    return (


<section class="featured" id="featured">

<h1 class="heading"> <span>Featured books</span> </h1>

<div class="swiper featured-slider">

<Splide options={ {
    rewind:true,
    pagination:false,
    width : '160rem',
    height:'50rem',
    perPage: 4,
    padding: { left: 0 },
    loop:true,
    trimSpace:true,
          gap          : '1rem',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper" >

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book10} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>Silent night</h3>
                    <br/>
                   
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book8} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>Lock & key</h3>
                    <br/>
                    
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book9} alt="Image 1"style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>Hit no run</h3>
                    <br/>
                    
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book5} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>Last chance books</h3>
                    <br/>
                    
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book7} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>To all the boys i've loved before</h3>
                    <br/>
                    
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix /></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book99} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>Four blind mice</h3>
                    <br/>
                  
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix /></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book3} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>Love & Gelato</h3>
                    <br/>
                    
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix /></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book2} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>The heart of betrayal</h3>
                    <br/>
                  
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix /></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book1} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>Love me don't leave me</h3>
                    <br/>
                   
                    
     </div>
    </div>
    </div>
  </SplideSlide>
</Splide>

</div>
</section>

);}
export default Featured;