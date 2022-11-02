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
import {AiOutlineLeft} from 'react-icons/ai';
import {BiHomeHeart,BiBookHeart} from 'react-icons/bi';
import {FaSistrix} from 'react-icons/fa';
import {ImBooks} from 'react-icons/im';
import {GiWhiteBook} from 'react-icons/gi';
import {BsPersonFill} from 'react-icons/bs';
import ReactDOM from 'react-dom';
import img1 from '../image/e563d97183e6468f0f32f4a01c424e68.png';
import '../Books.module.css';
import { NavLink } from 'react-router-dom';
const drawerWidth = 260;

function BookSide(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
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
      <NavLink exact to={'/'} activeStyle={{backgroundColor:'#703056'}} className='btn-menu'><i style={{fontSize:'2.5rem',marginRight:'5px'}}><FaSistrix/></i>Search</NavLink>
      <NavLink exact to={'/'} activeStyle={{backgroundColor:'#703056'}} className='btn-menu'><i style={{fontSize:'2.5rem',marginRight:'5px'}}><BsPersonFill/></i>My books</NavLink>
      <p className='btn-menu1'><i style={{fontSize:'2.5rem',marginRight:'5px'}}><ImBooks/></i>Books</p>
      
      <List>
        <a href='#'className='btn-menu2'>romans & fictions</a>
        <a href='#' className='btn-menu2'>Leisure & practice</a>
        <a href='#' className='btn-menu2'>Romance</a>
        <a href='#' className='btn-menu2'>Youth</a>
        <a href='#' className='btn-menu2'>Young Adult</a>
        <a href='#' className='btn-menu2'>knowledge and cultures</a>
        <a href='#' className='btn-menu2'>classical literature</a>
        <a href='#' className='btn-menu2'>training</a>
        <a href='#' className='btn-menu2'>imaginary literature</a>
      </List>
      <p className='btn-menu1'><i style={{fontSize:'2.5rem',marginRight:'5px'}}><GiWhiteBook/></i>Blogs</p>
      
      <List>
        <a href='#'className='btn-menu2'>Personal blogs</a>
        <a href='#' className='btn-menu2'>Business/corporate blogs</a>
        <a href='#' className='btn-menu2'>professional blogs</a>
        <a href='#' className='btn-menu2'>Fashion blogs</a>
        <a href='#' className='btn-menu2'>Lifestyle blogs</a>
        <a href='#' className='btn-menu2'>Travel blogs</a>
        <a href='#' className='btn-menu2'>Food blogs</a>
        <a href='#' className='btn-menu2'>Affiliate/review blogs</a>
        <a href='#' className='btn-menu2'>Multimedia blogs</a>
        <a href='#' className='btn-menu2'>News blogs</a>

      </List>
      <hr size="30" />
      <img src={img1} style={{width:'150px',marginLeft:'20px'}}></img>
      </div>
      
      
      
     
      
        
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <div className="icons" style={{alignItems:'baseline'}}>
         <Typography style={{fontSize: '1.5rem',fontWeight: '500'}} noWrap component="div">
           <i><AiOutlineLeft/></i> Retour
         
          </Typography>
        
        <a  href='/signup'className='btn-nav1' style={{right:'130px',top:'0',position:'absolute'}} >Sign up</a>
       
        <a  href='/login'className='btn-nav2'style={{right:'30px',top:'0',position:'absolute'}} >Login</a>
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
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
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

BookSide.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default BookSide;