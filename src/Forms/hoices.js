import React, { Component } from 'react'
import bootstrap from 'bootstrap'
import '../Pages/LoginPage.css'
import {FaBook} from 'react-icons/fa';
import '../Forms/choices.css'
import {FaCheckCircle} from 'react-icons/fa'
export default class choices1 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           user:'',
           username:'',
          
            c1:null,
            c2:null,
            c3:null,
            c4:null,
            c5:null,
            c6:null,
            c7:null,c8:null,c9:null,c10:null,c11:null,c12:null
        };
    }
    
    componentDidMount() {
        document.body.style.backgroundColor = '#703056';
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
          .then(result => {this.setState({user:result._id});
          this.setState({username:result.username})
          }
          )
          .catch(error => console.log('error', error));
      }
    Categorie1 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c1:"EP"})
        } else {
         this.setState({c1:null})
        }
      };
      Categorie2 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c2:"Adventure"})
        } else {
         this.setState({c2:null})
        }
      };
      Categorie3 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c3:"Feminism"})
        } else {
         this.setState({c3:null})
        }
      };
      Categorie4 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c4:"Diverse Lit"})
        } else {
         this.setState({c4:null})
        }
      };
      Categorie5 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c5:"Fiction"})
        } else {
         this.setState({c5:null})
        }
      };
      Categorie6 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c6:"Fantasy"})
        } else {
         this.setState({c6:null})
        }
      };
      Categorie7 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c7:"Thriller"})
        } else {
         this.setState({c7:null})
        }
      };  
      Categorie8 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c8:"Horror"})
        } else {
         this.setState({c8:null})
        }
      };
      Categorie9 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c9:"Humor"})
        } else {
         this.setState({c9:null})
        }
      };
      Categorie10 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c10:"Romance"})
        } else {
         this.setState({c10:null})
        }
      };
      Categorie11 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c11:"Mystery"})
        } else {
         this.setState({c11:null})
        }
      };
      Categorie12 = (e) => {
        const checked = e.target.checked;
        if (checked) {
        this.setState({c12:"Poetry"})
        } else {
         this.setState({c12:null})
        }
      };
      updatecategories(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));
        
        var raw = JSON.stringify({
          "id": this.state.user,
          "c1": this.state.c1,
          "c2": this.state.c2,
          "c3": this.state.c3,
          "c4": this.state.c4,
          "c5": this.state.c5,
          "c6": this.state.c6,
          "c7": this.state.c7,
          "c8": this.state.c8,
          "c9": this.state.c9,
          "c10": this.state.c10,
          "c11": this.state.c11,
          "c12": this.state.c12
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3000/Updatecategories", requestOptions)
          .then(response => response.json())
          .then(result =>{ if (result.success === false) {
            console.log("oups");
            this.setState({ errorMessage:result.message})
            } else {
            // connected
            
                 this.props.history.push('/foryou');
            }
            })
          .catch(error => console.log('error', error));
      }

  render() {
     
    return (
        <div className='container-log' >
        <header className="header" style={{backgroundColor:'edede9'}}>
    
            <div class="header-1">
            
                <a href="./home" className="logo">  <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>
                </div>
                </header>
    <div className="loginpage-form-container"style={{marginLeft:'400px'}}>
    
    
    
        <form   style={{width:'730px'}} onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.updatecategories();


                                                }}>
            
        <div className="greeting">Hi, {this.state.username}</div><div style={{alignContent:'center'}}className="prompt"><strong>Choose 
        up to three genres that you enjoy reading. This will help us better recommend stories you'll love.</strong></div>
        <div className="genres" style={{height:'600px'}}>
            <div class="form-row">



        <div class="form-group col-md-8">
            
            
            <div className="genre-tile"  tabindex="0" role="button"><div className="genre-info"
         style={{backgroundImage: "url(https://static.wattpad.com/image/edschoice-illo@3x.png)"}} >
<div className="genre-name">Editor's Picks</div></div><div className="selected-wrapper">
</div></div><input type="checkbox"  onClick={(e) => {
                                this.Categorie1(e)
                            }}></input></div>
<div class="form-group col-md-8" >
<div className="genre-tile" tabindex="0" role="button" >
<div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/adventure-illo@3x.png)"}}>
<div className="genre-name">Adventure</div></div><div className="selected-wrapper">
<div className="overlay hidden"></div><div className="selected-icon hidden">
<span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}></span></div>
</div></div><input type="checkbox" onClick={(e) => {
                                this.Categorie2(e)
                            }}></input></div>

<div class="form-group col-md-8" >
    <div className="genre-tile" tabindex="0" role="button">
<div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/urban-illo@3x.png)"}}>
<div className="genre-name">Feminism</div></div><div className="selected-wrapper"><div className="overlay hidden"></div>
<div className="selected-icon hidden"><span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}></span>
</div>
</div></div><input type="checkbox" name=""  onClick={(e) => {
                                this.Categorie3(e)
                            }}></input>
</div>
<div class="form-group col-md-8">

<div className="genre-tile" tabindex="0" role="button">
    <div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/diverselit-illo@3x.png)"}}>
    <div className="genre-name">Diverse Lit</div>
</div>
<div className="selected-wrapper"><div className="overlay hidden"></div><div className="selected-icon hidden">
<span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}></span>
</div>
</div>
</div><input type="checkbox"  onClick={(e) => {
                                this.Categorie4(e)
                            }}></input>


</div>
</div>
<div class="form-row">
<div class="form-group col-md-8">
<div className="genre-tile" tabindex="0" role="button"><div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/fanfic-illo@3x.png)"}}>
<div className="genre-name">Fiction</div></div><div className="selected-wrapper">
<div className="overlay hidden"></div><div className="selected-icon hidden">
<span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}></span></div></div>
</div> <input type="checkbox" onClick={(e) => {
                                this.Categorie5(e)
                            }}></input>    
      
</div>
<div class="form-group col-md-8" >
<div className="genre-tile" tabindex="0" role="button"><div className="genre-info" style={{backgroundImage: " url(https://static.wattpad.com/image/fantasy-illo@3x.png)"}}>
<div className="genre-name">Fantasy</div></div><div className="selected-wrapper">
<div className="overlay hidden"></div><div className="selected-icon hidden">
<span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}>
</span></div></div></div><input type="checkbox" onClick={(e) => {
                                this.Categorie6(e)
                            }}></input>
</div>

<div class="form-group col-md-8" >
<div className="genre-tile" tabindex="0" role="button"><div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/thriller-illo@3x.png)"}}>
                                <div className="genre-name">Thriller</div>
                                </div>
                                <div className="selected-wrapper">
                                    <div className="overlay hidden">
                                        </div>
                                        <div className="selected-icon hidden">
                                            <span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}>
                                                </span>
                                                </div>
                                                </div>
                                                </div><input type="checkbox" onClick={(e) => {
                                this.Categorie7(e)
                            }}></input>
</div>
<div class="form-group col-md-8">
<div className="genre-tile" tabindex="0" role="button">
<div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/horror-illo@3x.png)"}}>
<div className="genre-name">Horror</div></div><div className="selected-wrapper"><div className="overlay hidden">
</div><div className="selected-icon hidden"><span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}>
</span></div></div></div>

<input type="checkbox" onClick={(e) => {
                                this.Categorie8(e)
                            }}></input>
</div>
</div>

<div class="form-row">
<div class="form-group col-md-8">
<div className="genre-tile" tabindex="0" role="button">
<div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/humor-illo@3x.png)"}}>
<div className="genre-name">Humor</div></div><div className="selected-wrapper"><div className="overlay hidden"></div>
<div className="selected-icon hidden">
<span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}></span>
</div></div></div><input type="checkbox" onClick={(e) => {
                                this.Categorie9(e)
                            }}></input>
</div>
<div class="form-group col-md-8" >
<div className="genre-tile" tabindex="0" role="button">
<div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/romance-illo@3x.png)"}}>
<div className="genre-name">Romance</div></div><div className="selected-wrapper"><div className="overlay hidden">
</div>
<div className="selected-icon hidden">
<span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}></span></div>
</div></div><input type="checkbox" onClick={(e) => {
                                this.Categorie10(e)
                            }}></input>
</div>

<div class="form-group col-md-8" >
<div className="genre-tile" tabindex="0" role="button">
<div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/mystery-illo@3x.png)"}}>
<div className="genre-name">Mystery</div></div><div className="selected-wrapper"><div className="overlay hidden">
</div><div className="selected-icon hidden"><span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}>
</span></div></div></div><input type="checkbox" onClick={(e) => {
                                this.Categorie11(e)
                            }}></input>
</div>
<div class="form-group col-md-8">


<div className="genre-tile" tabindex="0" role="button">
<div className="genre-info" style={{backgroundImage: "url(https://static.wattpad.com/image/poetry-illo@3x.png)"}}>
<div className="genre-name">Poetry</div></div><div className="selected-wrapper"><div className="overlay hidden"></div>
<div className="selected-icon hidden">
<span className="fa fa-check fa-wp-neutral-5" aria-hidden="true" style={{fontSize: "14px"}}></span>
</div>
</div></div>
<input type="checkbox" onClick={(e) => {
                                this.Categorie12(e)
                            }}></input>
</div>
</div>





</div>
<div className="finish-button-wrapper">
<button className="finish-button btn-primary"style={{marginTop:'170px',marginRight:'55px'}}>Finish</button></div>
        </form>
    
    </div>
   
    </div>
    )
  }
}
