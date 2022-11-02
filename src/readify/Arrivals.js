
import React from "react";
import bootstrap from "bootstrap";
import book8 from '../image/hh1.jpg';
import book9 from '../image/hh2.jpg';
import book10 from '../image/hh3.jpg';
import book5 from '../image/hh4.jpg';
import book6 from '../image/hh5.jpg';
import book7 from '../image/hh6.jpg';
import book1 from '../image/hh7.jpg';
import book2 from '../image/hh8.jpg';
import book4 from '../image/hh9.jpg';
import book3 from '../image/content11.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {BsFillStarFill} from 'react-icons/bs';


function Arrivals(){
    
    return (

<section className="arrivals" id="arrivals">

    <h1 className="heading"> <span>new arrivals</span> </h1>
    <div className="swiper arrivals-slider">
     

    <Splide options={ {
    rewind:true,
    pagination:false,
    width : '360rem',
    height:'22rem',
    perPage: 3,
    padding: { left: 0 },
    
    trimSpace:true,
          gap          : '1rem',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
    
  } }
>
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book8} alt=""/>
                </div>
                <div className="content">
                <h3>The dark tower</h3>
                <br/>
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
 
  </SplideSlide>

  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book1} alt=""/>
                </div>
                <div className="content">
                <h3>Dark spaces</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
  
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book2} alt=""/>
                </div>
                <div className="content">
                <h3>Throne of Glass</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book3} alt=""/>
                </div>
                <div className="content">
                <h3>The big orange book of beginner books</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  </Splide>
  <Splide options={ {
    rewind:true,
    pagination:false,
    width : '360rem',
    height:'21rem',
    perPage: 3,
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
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book4} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                    
                    <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
 
  </SplideSlide>

  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book5} alt=""/>
                </div>
                <div className="content">
                <h3>Shattered</h3>
                <br/>
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
  
  </SplideSlide>
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book9} alt=""/>
                </div>
                <div className="content">
                <h3>Staying with the trouble</h3>
                <br/>
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
  
  </SplideSlide>
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book10} alt=""/>
                </div>
                <div className="content">
                <h3>Quantum theory</h3>
                <br/>
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
  
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book6} alt=""/>
                </div>
                <div className="content">
                <h3>Ousama bin Laden</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book7} alt=""/>
                </div>
                <div className="content">
                <h3>What happened at the Lake</h3>
                    
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  </Splide>
  <header><a href='' style={{marginTop:'2rem',right:'20rem',position:'absolute',fontSize:'1.5rem',fontWeight:'300'}}>See more</a></header>
</div>
</section>
);}
export default Arrivals;