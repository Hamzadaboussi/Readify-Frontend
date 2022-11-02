import React from 'react';
import './profile.css';
import {FaBook} from 'react-icons/fa';
import './LoginPage.css';
import Footer from '../readify/footer';
import Skelette from './skelette';
import Profile1 from './profile1';

class Profile extends React.Component{
    constructor(props){
      super(props);
      this.state={
        id:props.match.params.id
      }
    }
   
    render(){
      return (
 <Skelette profile={<Profile1 id={this.state.id}/>}/>

);}
}
export default Profile;