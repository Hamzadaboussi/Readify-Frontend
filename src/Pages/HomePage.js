import React, { Component } from 'react';
import ResponsiveDrawer from './SideNav';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import img1 from '../image/1550.jpg';
import img2 from '../image/1551.jpg';
import img3 from '../image/1552.jpg';
import img4 from '../image/1816.png';
import img5 from '../image/1817.png';
import img6 from '../image/1842.png';
import img7 from '../image/1847.png';
import img8 from '../image/1848.png';
import img9 from '../image/1849.png';
import deal from '../image/B9730133504Z.1_20220302180811_000+GK6K0PK98.1-0.jpg';
import book1 from '../image/book-10.png';
import book2 from '../image/book-9.png';
import book3 from '../image/book-8.png';
import book4 from '../image/book-7.png';
import book5 from '../image/book-6.png';
import book6 from '../image/book-5.png';
import book7 from '../image/book-4.png';
import book8 from '../image/book-3.png';
import book9 from '../image/book-2.png';
import book10 from '../image/book-1.png';
import { AiFillFire } from "react-icons/ai";
import Footer from '../readify/footer';
export default class HomePage extends Component {
  render() {
    return (  
         <div id="wrapper">

    

    <div id="content-wrapper" class="d-flex flex-column">
<ResponsiveDrawer />
        <div id="content" >
         
        <Splide options={ {
    rewind:true,
    pagination:false,
    width : '280rem',
    height:'18rem',
    perPage: 4,
    padding: { left: 0 },
    
    gap          : '0rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img1} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
  
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img2} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img3} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img4} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img5} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img6} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img7} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img8} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={img9} alt="" style={{height:'17rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  </Splide>
     
     <section className='Top' style={{width:'100%',padding:'0',marginTop:'40px'}}>
       <header style={{alignItems:'baseline',marginBottom:'60px',fontSize:'2rem',color: '#555',fontWeight: '700'}}>Top this month 🔥<a href='' style={{right:'10rem',position:'absolute',fontSize:'1.5rem',fontWeight:'500'}}>See more</a></header>
  <Splide options={ {
    rewind:true,
    pagination:false,
    width : '280rem',
    height:'30rem',
    perPage: 5,
    padding: { left: 0 },
    
    gap          : '0rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book1} alt="" style={{height:'27rem',borderRadius:'1rem'}}/>
    </div>
  
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book2} alt="" style={{height:'25rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book3} alt="" style={{height:'27rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book4} alt="" style={{height:'27rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book5} alt="" style={{height:'25rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book6} alt="" style={{height:'25rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book7} alt="" style={{height:'27rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book8} alt="" style={{height:'27rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <a><img src={book9} alt="" style={{height:'25rem',borderRadius:'1rem'}}/></a>
         <h3>Title</h3>
    </div>
    <div className="content">
                   
                   
                    
     </div>
</div>
</div>
  </SplideSlide>
  </Splide>
  </section>
  <section className='Top' style={{width:'100%',padding:'0',marginTop:'40px'}}>
       <header style={{alignItems:'baseline',marginBottom:'60px',fontSize:'2rem',color: '#555',fontWeight: '700'}}>The unavoidables💭 <a href='' style={{right:'10rem',position:'absolute',fontSize:'1.5rem',fontWeight:'500'}}>See more</a></header>
  <Splide options={ {
    rewind:true,
    pagination:false,
    width : '280rem',
    height:'20rem',
    perPage: 8,
    padding: { left: 0 },
    
    gap          : '0rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book1} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
  
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book2} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book3} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book4} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book5} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book6} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book7} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book8} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <a><img src={book9} alt="" style={{height:'20rem',borderRadius:'1rem'}}/></a>
         <h3>Title</h3>
    </div>
    <div className="content">
                   
                   
                    
     </div>
</div>
</div>
  </SplideSlide>
  </Splide>
  </section>
<section className="deal" style={{paddingLeft:'3rem',paddingTop:'3rem',backgroundColor: 'rgba(112, 48, 86, 0.2)',marginTop:'30px',borderRadius:'4rem',marginRight:'20px'}}>

<div className="content" style={{left:'0'}}>
    <h3 style={{color:'#495057'}}>Découvrez le nouveau roman de Joël Dicker</h3>
    <p >L'Affaire Alaska Sanders</p>
    <p>La suite de Harry QuebertAvril 1999. Mount Pleasant, une paisible bourgade du New Hampshire, est bouleversée par un meurtre. Le corps d'une jeune femme, Alaska Sanders, est retrouvé au…
    </p>
    <a href="#" className="btn" >Discover</a>
</div>

<div className="image">
    <img style={{height:'30rem'}} src={deal} alt=""/>
</div>

</section>
<section className='Top' style={{width:'100%',padding:'0',marginTop:'40px'}}>
       <header style={{alignItems:'baseline',marginBottom:'60px',fontSize:'2rem',color: '#555',fontWeight: '700'}}>When fear roams 🔪<a href='' style={{right:'10rem',position:'absolute',fontSize:'1.5rem',fontWeight:'500'}}>See more</a>
       <p style={{fontSize:'1.5rem',fontWeight: '600'}}>A word of advice: stay on your toes...</p>
       </header>
  <Splide options={ {
    rewind:true,
    pagination:false,
    width : '280rem',
    height:'20rem',
    perPage: 8,
    padding: { left: 0 },
    
    gap          : '0rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book1} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
  
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book2} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book3} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book4} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book5} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book6} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book7} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book8} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <a><img src={book9} alt="" style={{height:'20rem',borderRadius:'1rem'}}/></a>
         <h3>Title</h3>
    </div>
    <div className="content">
                   
                   
                    
     </div>
</div>
</div>
  </SplideSlide>
  </Splide>
  </section>
  <section className='Top' style={{width:'100%',padding:'0',marginTop:'40px'}}>
       <header style={{alignItems:'baseline',marginBottom:'60px',fontSize:'2rem',color: '#555',fontWeight: '700'}}>New Fantasy ✨<a href='' style={{right:'10rem',position:'absolute',fontSize:'1.5rem',fontWeight:'500'}}>See more</a>
       <p style={{fontSize:'1.5rem',fontWeight: '600'}}>Bring in the magic!</p>
       </header>
  <Splide options={ {
    rewind:true,
    pagination:false,
    width : '280rem',
    height:'20rem',
    perPage: 9,
    padding: { left: 0 },
    
    gap          : '0rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book1} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
  
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book2} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book3} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book4} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book5} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
 
  </Splide>
  </section>
  <section className='Top' style={{width:'100%',padding:'0',marginTop:'40px'}}>
       <header style={{alignItems:'baseline',marginBottom:'60px',fontSize:'2rem',color: '#555',fontWeight: '700'}}>Sweet moments 💟<a href='' style={{right:'10rem',position:'absolute',fontSize:'1.5rem',fontWeight:'500'}}>See more</a>
       <p style={{fontSize:'1.5rem',fontWeight: '600'}}>For readings rich in emotions.</p>
       </header>
  <Splide options={ {
    rewind:true,
    pagination:false,
    width : '280rem',
    height:'20rem',
    perPage: 8,
    padding: { left: 0 },
    
    gap          : '0rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book1} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
  
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book2} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book3} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book4} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book5} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book6} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book7} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <img src={book8} alt="" style={{height:'20rem',borderRadius:'1rem'}}/>
    </div>
   
</div>
</div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="image">
        <a><img src={book9} alt="" style={{height:'20rem',borderRadius:'1rem'}}/></a>
         <h3>Title</h3>
    </div>
    <div className="content">
                   
                   
                    
     </div>
</div>
</div>
  </SplideSlide>
  </Splide>
  </section>
  <section className="deal" style={{borderRadius:'0.5rem',marginBottom:'10rem',paddingLeft:'3rem',paddingTop:'3rem',backgroundColor: 'rgba(112, 48, 86, 0.2)',marginTop:'30px',borderRadius:'4rem',marginRight:'20px'}}>

<div className="content" style={{left:'0'}}>
    <h3 style={{color:'#495057'}}>Découvrez le nouveau roman de Joël Dicker</h3>
    <p >L'Affaire Alaska Sanders</p>
    <p>La suite de Harry QuebertAvril 1999. Mount Pleasant, une paisible bourgade du New Hampshire, est bouleversée par un meurtre. Le corps d'une jeune femme, Alaska Sanders, est retrouvé au…
    </p>
    <a href="#" className="btn" >Discover</a>
</div>

<div className="image">
    <img style={{height:'30rem'}}src={deal} alt=""/>
</div>

</section>
     </div>
     </div> 

     </div>
    
    )
  }
}