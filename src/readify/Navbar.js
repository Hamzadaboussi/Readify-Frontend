import React, { useState } from 'react';
import {  useRef} from "react";
import { Link } from 'react-router-dom';

import { FaBook,FaSistrix,FaHome,FaListAlt,FaTags,FaBlogger,FaCommentAlt } from 'react-icons/fa';
import {BsFillPersonFill,BsCartFill,BsFillSuitHeartFill} from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Login from './Login';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
    
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(0),
  },
  
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[200],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};






function Navbar(props){
  
const[fix,setfix]=useState(false)
function setfixed(){
if(window.scrollY > 80){
  setfix(true);
}else{
 setfix(false);
}}
window.addEventListener("scroll",setfixed)


  

return(
  <nav>
<header className="header">

<div class="header-1">

    <a href="/" className="logo"> <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>

    <form action="" className="search-form">
        <input type="search" name="" placeholder="search here..." id="search-box"/>
        <label for="search-box" ><i><FaSistrix /></i></label>
    </form>

    <div className="icons">
        
        
        <a  className='btn-nav1' href='/signup'>Sign up</a>
      
        <a  className='btn-nav2' href='/login'>Login</a>
        </div>
      
</div>

<div className={fix ? 'navbar-fixed':'header-2'}>
    <nav className="navbar">
        <a href="/">home</a>
        <a href="#featured">featured</a>
        <a href="#arrivals">arrivals</a>
        
    </nav>
</div>

</header>



<nav className="bottom-navbar">
<a href="#home" ><FaHome style={{color: '#27ae60'}}/></a>
<a href="#featured" ><FaListAlt style={{color: '#27ae60'}}/></a>
<a href="#arrivals" ><FaTags style={{color: '#27ae60'}}/></a>
<a href="#reviews" ><FaCommentAlt style={{color: '#27ae60'}}/></a>
<a href="#blogs" ><FaBlogger style={{color: '#27ae60'}}/></a>
</nav>





</nav>
);

}
export default Navbar;