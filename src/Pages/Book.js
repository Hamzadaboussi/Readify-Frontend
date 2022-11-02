import React, { Component } from 'react';
import BookSide from './SideForBook';
import ResponsiveDrawer from './SideNav';
import book10 from '../image/content.jpg';
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai'
import SideNav from './SideNav';
export default class BookPage2 extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = '#5555552b';
    }
  render() {
    return (
        <div id="wrapper">

    

        <div id="content-wrapper" class="d-flex flex-column">

    <SideNav/>
    <div className='content'>
        <div style={{left:'30rem',position:'absolute',height:'100%',alignItems:'baseline'}}>

   <h1 style={{color: '#444',fontWeight: '600',fontSize: '2.8rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>The Plague</h1> 
   <h1 style={{color: '#444',fontWeight: '200',fontSize: '1.5rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Auteur: Albert Camus
Vintage Books, 1991</h1> 
   <hr  style={{
       marginTop:'40px',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
   <a href='' className='btn-book'style={{marginTop:'15%'}}>Read Now</a>
   <hr  style={{
       marginTop:'40px',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
   <p style={{width:'60rem',fontWeight: '400',fontFamily: 'Roboto Condensed',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#444',
    fontSize: '1.7rem',marginTop:'20px'}}>"Its relevance lashes you across the face." --Stephen Metcalf, The Los Angeles Times - "A redemptive book, one that wills the reader to believe, even in a time of despair." --Roger Lowenstein, The Washington Post
    A haunting tale of human resilience and hope in the face of unrelieved horror, Albert Camus' iconic novel about an epidemic ravaging the people of a North African coastal town is a classic of twentieth-century literature.
    
    The townspeople of Oran are in the grip of a deadly plague, which condemns its victims to a swift and horrifying death. Fear, isolation and claustrophobia follow as they are forced into quarantine. Each person responds in their own way to the lethal disease: some resign themselves to fate, some seek blame, and a few, like Dr. Rieux, resist the terror.
    
    An immediate triumph when it was published in 1947, The Plague is in part an allegory of France's suffering under the Nazi occupation, and a timeless story of bravery and determination against the precariousness of human existence..</p>
    <hr  style={{
       marginTop:'40px',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
        <div style={{position:'absolute',alignItems:'right'}}>
        <p className='specifbook'style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'20px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    fontSize: '1.4rem',marginTop:'20px',float:'left',position:'relative'}}>Language </p>
    <p className='specifbook'style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'20px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#444',
    fontSize: '1.4rem',marginTop:'10px',float:'left',position:'relative'}}>English</p>
    <div className = "vertical" style={{borderLeft: '1px solid #adb5bd', height: '30px',position:'absolute', left: '20%',top:'30px'}}></div>

<p className='specifbook' style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'180px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    alignContent:'right',
    fontSize: '1.4rem',marginTop:'20px',float:'right',position:'absolute'}}>Pages</p>
    <p className='specifbook'style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'180px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#444',
    fontSize: '1.4rem',marginTop:'60px',float:'right',position:'absolute'}}>308</p>
    <div className = "vertical" style={{borderLeft: '1px solid #adb5bd', height: '30px',position:'absolute', left: '45%',top:'30px'}}></div>

    <p className='specifbook' style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'340px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    alignContent:'right',
    fontSize: '1.4rem',marginTop:'20px',float:'right',position:'absolute'}}>Date</p>
    <div className = "vertical" style={{borderLeft: '1px solid #adb5bd', height: '30px',position:'absolute', left: '70%',top:'30px'}}></div>
    <p className='specifbook' style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'500px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    alignContent:'right',
    fontSize: '1.4rem',marginTop:'20px',float:'right',position:'absolute'}}>Size</p>
    
</div>
<hr  style={{
       marginTop:'10rem',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
        <div  className='commentaire' style={{height:'30rem',left:'0',position:'absolute',marginTop:'30px'}}><h2 style={{color: '#444',fontWeight: '600',fontSize: '2.2rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Commentaires (2)</h2>
        
        <p><h6>LibraryThing Review</h6>  <div className="stars">
                <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><AiOutlineStar style={{color: '#27ae60'}}/></i>
                    </div>I found the stories good (The Plague, The Fall and the short stories). The Myth of Sisophus tough, and the Reflections on the Gillotine interesting.</p>
        <p><h6>Thought provoking</h6><div className="stars">
                <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStar style={{color: '#27ae60'}}/></i>
                    </div>When you read this book, you can't help but imagine yourself in the place of these characters. This book is absolutely great. You can tell Camus wrote this.</p>
        
        </div>
</div>
<div style={{right:'0',top:'0',position:'fixed',height:'100%',width:'60rem',background:'radial-gradient(79.43% 144.53% at 33.33% 86.67%,rgba(233,81,100,.4) 53.22%,rgba(60,52,179,.4) 85.79%)'}}>
<img style={{right:'10rem',position:'fixed',height:'50rem',marginTop:'100px',borderRadius:'12px'}}src={book10}></img>

</div>

    </div>
    </div>
    </div>
    )
  }
}