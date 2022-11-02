import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {BsPersonFill} from 'react-icons/bs';
import {BiHomeHeart,BiBookHeart} from 'react-icons/bi';
import {FaSistrix,FaHeart} from 'react-icons/fa';
import {ImBooks} from 'react-icons/im';
import {GiWhiteBook} from 'react-icons/gi';
import ReactDOM from 'react-dom';
import { Component } from 'react'
import '../Books.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import img2 from '../image/e563d97183e6468f0f32f4a01c424e68.png'
import img1 from "../image/img_569204.png";

const drawerWidth = 260;

function Drawer1 (){
  return(
  <div className='drawer' style={{backgroundColor:'#219150',color:'#fff',fontSize:'1.2rem',fontFamily:'fantasy',padding:'0.2rem',overflowX:'hidden',overflowY:'scroll'}}>
    
    
    <div className='ins-drawer' style={{borderRadius:'2rem', position:'relative',left:'7px',marginRight:'20px',height:'140px',width:'240px',background:'linear-gradient(245.1deg,rgba(240,28,111,.5) 24.11%,rgba(240,28,111,0) 73.06%),radial-gradient(87.22% 46.99% at 120% -3.77%,#219150 0,rgba(240,28,111,0) 100%),#703056',marginTop:'40px',marginBottom:'20px'}}>

    <h1 style={{fontSize: '1.9rem',fontWeight: 'bolder',color:'#fff',textAlign:'center',position:'absolute',bottom:'25px',marginLeft:'30px'}} >
          Read without limits
          <br/>
          <i style={{fontSize:'3rem'}}><ImBooks/></i>
        </h1>
      
    </div>
    <div className='menu' style={{Left:'9px',color:'#fff'}}> 
    <NavLink exact to={'/home'} activeStyle={{backgroundColor:'#703056'}}  className='btn-menu'><i style={{fontSize:'2.5rem',marginRight:'5px'}} ><BiHomeHeart/></i>Home</NavLink>
    <NavLink exact to={'/search'} activeStyle={{backgroundColor:'#703056'}} className='btn-menu'><i style={{fontSize:'2.5rem',marginRight:'5px'}}><FaSistrix/></i>Search</NavLink>
    <NavLink exact to={'/foryou'} activeStyle={{backgroundColor:'#703056'}} className='btn-menu'><i style={{fontSize:'2.5rem',marginRight:'5px'}}><FaHeart/></i>For you</NavLink>
    <p className='btn-menu1'><i style={{fontSize:'2.5rem',marginRight:'5px'}}><ImBooks/></i>Books</p>
    
    <List>
      <a href='#fiction'className='btn-menu2'> 👽 Fiction</a>
      <a href='#poetry' className='btn-menu2'> 🌈 Poetry</a>
      <a href='#fantasy' className='btn-menu2'> 🌺 Fantasy</a>
      <a href='#romance' className='btn-menu2'> 💕 Romance</a>
      <a href='#mystery' className='btn-menu2'>⭐️ Mystery</a>
      <a href='#adventure' className='btn-menu2'> 🎥 Adventure</a>
      <a href='#feminism' className='btn-menu2'> 👑Feminism</a>
      <a href='#inspirational' className='btn-menu2'> ✨ Inspirational</a>
      <a href='#horror' className='btn-menu2'>🔪 Horror</a>
      <a href='#thriller' className='btn-menu2'>☢️ Triller</a>
      <a href='#humor' className='btn-menu2'>🤣 Humor</a>
    </List>
  
    <hr size="30" />
    <img src={img2} style={{width:'150px',marginLeft:'20px'}}></img>
    </div>
    
    
    
   
    
      
  </div>)}

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
        
        errorMessage: ''
    }}
 componentDidMount(){
  const { window } = this.props;
  

this.getConnectedUserData()
 }
 getConnectedUserData(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", localStorage.getItem('token'));
  

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/connected", requestOptions)
    .then(response => response.json())
    .then(result => this.setState({user:result._id}))
    .catch(error => console.log('error', error));
}
  
  render() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor:'#219150'}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <div className="icons" style={{alignItems:'baseline'}}>
        
         <Typography style={{fontSize: '2.5rem',fontWeight: 'bolder'}} noWrap component="div">
           <i><BiBookHeart/></i> Readify
         
          </Typography>
        
</div>
        <div >
<a href={"/profile/"+this.state.user}><Avatar src={img1} sx={{marginLeft:125,marginRight:2 }} /></a>

</div>
        </Toolbar>
          
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          variant="temporary"
          
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Drawer1/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Drawer1/>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
        <Toolbar />
        
       
      </Box>
    </Box>
  );
}


};

