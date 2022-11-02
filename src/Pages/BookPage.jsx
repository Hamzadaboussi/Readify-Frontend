import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';
import '../App.css'

const BookCard = ({
  thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  publisher,
  previewLink,
  infoLink
}) => {
 

  return (

    <Card style={{ width: '233px',backgroundColor: 'rgba(112, 48, 86, 0.2)',borderRadius:'20px' }} className='m-auto '> 
   
     <a href={previewLink}>
       <img
        top
        style={{ 
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginTop:'8px',marginLeft:'53px',width: '50%', height: '180px',borderRadius:'30px' ,marginBottom:'20px'}}
        src={thumbnail}
        alt={title}
      /></a> 
      <CardBody>
        <CardTitle className='card-title'style={{fontWeight:'700',fontSize:'20px',fontFamily: '"TT Commons",sans-serif'}}>{title}</CardTitle>
        
      </CardBody>
     
    </Card>
    
  );
};

export default BookCard;
