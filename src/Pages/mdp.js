import React from 'react';
import './profile.css';
import {FaBook} from 'react-icons/fa';
import './LoginPage.css';
import Footer from '../readify/footer';
import Navbar from '../readify/Navbar';
import Skelette from './skelette';
import Mdp1 from './mdp1';

class Mdp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      id:props.match.params.id
    }
  }
   
    render(){
      return (
<Skelette profile={<Mdp1 id={this.state.id}/>}/>


         );}
}
export default Mdp;