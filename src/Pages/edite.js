
   import React from 'react';
   import './profile.css';
   import {FaBook} from 'react-icons/fa';
   import './LoginPage.css';
   import Footer from '../readify/footer';
   import Navbar from '../readify/Navbar';
   import Skelette from './skelette';
  
import Edite1 from './edite1';
import { PropaneSharp } from '@mui/icons-material';
   
   class Edite extends React.Component{
     constructor(props){
       super(props);
       this.state={
         id:props.match.params.id,
         user:""
       }
     }
     componentDidMount(){
       this.getUserDetails()
     }
     getUserDetails(){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", localStorage.getItem('token'));
    
    
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/api/users/details?id="+this.state.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
    
            this.setState({user:result.data.username})
            
        })
    
        .catch(error => console.log('error', error));
         
    }
   
       render(){
         return (
   <Skelette profile={<Edite1 id={this.state.id} />}/>
   
   
            );}
   }
 export default Edite;