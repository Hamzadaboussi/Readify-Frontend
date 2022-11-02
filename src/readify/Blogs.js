
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';

import img1 from '../image/blog-5.jpg';
import img2 from '../image/blog-4.jpg';
import img3 from '../image/blog-3.jpg';
import img4 from '../image/blog-2.jpg';
import img5 from '../image/blog-1.jpg';



function Blogs(){
    return (

<section class="blogs" id="blogs">

    <h1 className="heading"> <span> Our Blogs</span> </h1>
   
    <div className="swiper blogs-slider">
<Splide options={ {
    rewind:true,
    pagination:false,
    width : '160rem',
    height:470,
    perPage: 3,
    padding: { left: 0 },
    
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img2} alt="" style={{height:'25rem'}}/>
    </div>
    <div className="content">
        <h3>blog title goes here</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
        <a href="#" className="btn">read more</a>
    </div>
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img5} alt="" style={{height:'25rem'}}/>
    </div>
    <div className="content">
        <h3>blog title goes here</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
        <a href="#" className="btn">read more</a>
    </div>
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img1} alt="" style={{height:'25rem'}}/>
    </div>
    <div className="content">
        <h3>blog title goes here</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
        <a href="#" className="btn">read more</a>
    </div>
</div>
</div>
  </SplideSlide>
</Splide>
<header><a href='' style={{marginTop:'2rem',right:'20rem',position:'absolute',fontSize:'1.5rem',fontWeight:'300'}}>See more</a></header>

</div>
</section>
);}
export default Blogs;