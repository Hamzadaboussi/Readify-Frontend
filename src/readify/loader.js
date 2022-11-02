import React from 'react';
import {  useRef, useEffect } from "react";
import img from "../image/loader-img.gif";
import {Helmet} from "react-helmet";

function Loader() {


  

return(
    
    <div className='loader-container'>
       
    <img src={img} alt=""/>
</div>
);

}
export default Loader;