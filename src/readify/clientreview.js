import React from "react";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import pic1 from '../image/pic-6.png';
import pic2 from '../image/pic-5.png';
import pic3 from '../image/pic-4.png';
import pic4 from '../image/pic-3.png';
import pic5 from '../image/pic-2.png';
import pic6 from '../image/pic-1.png';
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import '../App.css';
function ClientReview(){
    return (

<section className="reviews" id="reviews">

<h1 className="heading"> <span>clients' reviews</span> </h1>


<div className="swiper reviews-slider">

<Splide options={ {
    rewind:true,
    pagination:false,
    width : 2000,
    height:350,
    perPage: 3,
    padding: { left: 0 },
    
          gap          : '1rem',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
    color:'#fffff'
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <img src={pic6} alt=""/>
    <h3>Sabri</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
    <div className="stars">
    <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">
  <div className="swiper-slide box">
                <img src={pic1} alt=""/>
                <h3>Sarah</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
            </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">
  <div className="swiper-slide box">
                <img src={pic2} alt=""/>
                <h3>Sara</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
            </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">
  <div className="swiper-slide box">
                <img src={pic3} alt=""/>
                <h3>Baraa</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
            </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">
  <div className="swiper-slide box">
                <img src={pic4} alt=""/>
                <h3>Hamza</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
            </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">
  <div className="swiper-slide box">
                <img src={pic6} alt=""/>
                <h3>Amine</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
            </div>
    </div>
  </SplideSlide>
</Splide>
<header><a href='' style={{marginTop:'2rem',right:'20rem',position:'absolute',fontSize:'1.5rem',fontWeight:'300'}}>See more</a></header>
</div>
</section>

);}
export default ClientReview;