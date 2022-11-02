import React, { Component } from 'react';
import BookSide from './SideForBook';
import ResponsiveDrawer from './SideNav';
import book10 from '../image/content (1).jpg';
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai'
import SideNav from './SideNav';
export default class BookPage1 extends Component {
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

   <h1 style={{color: '#444',fontWeight: '600',fontSize: '2.8rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Bel-Ami</h1> 
   <h1 style={{color: '#444',fontWeight: '200',fontSize: '1.5rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Auteur: Guy de Maupassant
</h1> 
   <hr  style={{
       marginTop:'40px',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
   <a href='https://books.google.tn/books?id=u0zqpGG-1cQC&pg=PR49&dq=bel+ami&hl=&cd=9&source=gbs_api&redir_esc=y#v=onepage&q=bel%20ami&f=false' className='btn-book'style={{marginTop:'15%'}}>Read Now</a>
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
    fontSize: '1.7rem',marginTop:'20px'}}>Le roman retrace l’ascension sociale de Georges Duroy (ou Georges Du Roy de Cantel), homme ambitieux et séducteur sans scrupules, arriviste et opportuniste, employé au bureau des chemins de fer du Nord, parvenu au sommet de la pyramide sociale parisienne grâce à ses maîtresses et à la collusion entre la finance, la presse et la politique. Sur fond de politique coloniale, Maupassant décrit les liens étroits entre le capitalisme, la politique, la presse mais aussi l’influence des femmes, privées de vie politique depuis le code Napoléon et qui œuvrent dans l’ombre pour éduquer et conseiller. Satire d'une société d'argent minée par les scandales politiques de la fin du xixe siècle, l’œuvre se présente comme une petite monographie de la presse parisienne dans la mesure où Maupassant fait implicitement part de son expérience de reporter. Ainsi, l’ascension de Georges Duroy peut être comparée à la propre ascension de Maupassant1. En effet, Bel-Ami est la description parfaite de l'inverse de Guy de Maupassant, Georges Duroy devenant une sorte de contraire de l'auteur, dont Maupassant se moquera tout au long du roman.</p>
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
    fontSize: '1.4rem',marginTop:'10px',float:'left',position:'relative'}}>French</p>
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
    fontSize: '1.4rem',marginTop:'60px',float:'right',position:'absolute'}}>243</p>
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
        <div  className='commentaire' style={{height:'30rem',left:'0',position:'absolute',marginTop:'30px'}}><h2 style={{color: '#444',fontWeight: '600',fontSize: '2.2rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Commentaires (0)</h2>
        
        <a href='/addreview'>Add Comment</a>
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