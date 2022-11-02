import React, { Component } from 'react'
import ResponsiveDrawer from '../Pages/SideNav';
export default class foryou extends Component {
    constructor(props) {
        super(props);
       
         
        this.state = {
          user:'',
          id:null,
          c:[],
          c1:null,
          c2:null,
          c3:null,
          c4:null,
          c5:null,
          c6:null,
          c7:null,c8:null,c9:null,c10:null,c11:null,c12:null
        }
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
        
        fetch("http://localhost:3000/connected", requestOptions)
          .then(response => response.json())
          .then(result => 
        {this.setState({c1:result.c1})
        console.log(this.state.c1)
        this.setState({c2:result.c2})
        console.log(this.state.c2)
        this.setState({c3:result.c3})
        console.log(this.state.c3)
        this.setState({c4:result.c4})
        console.log(this.state.c4)
        this.setState({c5:result.c5})
        console.log(this.state.c5)
        this.setState({c6:result.c6})
        console.log(this.state.c6)
        this.setState({c7:result.c7})
        console.log(this.state.c7)
        this.setState({c8:result.c8})
        console.log(this.state.c8)
        this.setState({c9:result.c9})
        console.log(this.state.c9)
        this.setState({c10:result.c10})
        console.log(this.state.c10)
        this.setState({c11:result.c11})
        console.log(this.state.c11)
        this.setState({c12:result.c12})
        console.log(this.state.c12)
        
        
        }
          
          
          
          
          )
          .catch(error => console.log('error', error));
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
          .then(result => { this.setState({id:result._id}) })
          .catch(error => console.log('error', error));
      }
   componentDidMount (){
   
this.getUserDetails()

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("sw.js")
          .then(function (registration) {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          })
          .catch(function (err) {
            console.log("ServiceWorker registration failed: ", err);
          });
      })
    };
   
const getBooks = async (book) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}`
  );
  const data = await response.json();
  return data;
};

const extractThumbnail = ({ imageLinks }) => {
  const DEFAULT_THUMBNAIL = "icons/logo.svg";
  if (!imageLinks || !imageLinks.thumbnail) {
    return DEFAULT_THUMBNAIL;
  }
  return imageLinks.thumbnail.replace("http://", "https://");
};
const drawChartBook = async (subject, startIndex = 0) => {
  let cbookContainer = document.querySelector(`.${subject}`);
  if(cbookContainer)
  cbookContainer.innerHTML = `<div class='prompt'><div class="loader"></div></div>`;
  const cdata = await getBooks(
    `subject:${subject}&startIndex=${startIndex}&maxResults=6`
  );
  if (cdata.error) {
    cbookContainer.innerHTML = `<div class='prompt'>ツ Limit exceeded! Try after some time</div>`;
  } else if (cdata.totalItems == 0) {
    cbookContainer.innerHTML = `<div class='prompt'>ツ No results, try a different term!</div>`;
  } else if (cdata.totalItems == undefined) {
    cbookContainer.innerHTML = `<div class='prompt'>ツ Network problem!</div>`;
  } else if (!cdata.items || cdata.items.length == 0) {
    cbookContainer.innerHTML = `<div class='prompt'>ツ There is no more result!</div>`;
  } else {
    if(cbookContainer)
    
    cbookContainer.innerHTML = cdata.items
      .map(
        ({ volumeInfo }) =>
          `<div class='book' style={{background: 'linear-gradient(` +
          
          `, rgba(0, 0, 0, 0))'}}><a href='${volumeInfo.previewLink}' target='_blank'><img class='thumbnail' src='` +
          extractThumbnail(volumeInfo) +
          `' alt='cover'></a><div class='book-info'><h3 class='book-title'><a href='${volumeInfo.previewLink}' target='_blank'>${volumeInfo.title}</a></h3><div class='book-authors' onclick='updateFilter(this,"author");'>${volumeInfo.authors}</div><div class='info' onclick='updateFilter(this,"subject");' style={{background-color: ` +
          
          `}}>` +
          (volumeInfo.categories === undefined
            ? "Others"
            : volumeInfo.categories) +
          `</div></div></div>`
          
      )
      .join("");
  }

};




document.addEventListener("DOMContentLoaded", () => {
  drawChartBook("feminism");
  drawChartBook("inspirational");
  drawChartBook("authors");
  drawChartBook("fiction");
  drawChartBook("poetry");
  drawChartBook("fantasy");
  drawChartBook("romance");
  drawChartBook("horror");
  drawChartBook("adventure");
  drawChartBook("thriller");
  drawChartBook("mystery");
  drawChartBook("humor");

});
 }
   
   
  
    render() {
        return (
          <div className="Home">
             
  <ResponsiveDrawer user={this.state.user}/>
      <aside style={{width:'100px'}}>
        <div className="logo">
          <a href="/#">
            Books
          </a>
        </div>
        <nav>
          <ul>
            <li className="subhead">DISCOVER</li>
            <li>
              <a className="nav scrolltoview current" href="#search"
                ><span className="icon">🔍</span>Search</a>
            </li>
            <li>
              <a className="nav scrolltoview" href="#foryou"
                ><span class="icon">💖</span>For you</a
              >
            </li>
            <li className="subhead">LIBRARY</li>
            <li>
              <a className="nav scrolltoview" href="#fiction"
                ><span className="icon">👽</span>Fiction</a
              >
            </li>
            <li>
              <a className="nav scrolltoview" href="#poetry"
                ><span className="icon">🌈</span>Poetry</a
              >
            </li>
            <li>
              <a className="nav scrolltoview" href="#fantasy"
                ><span className="icon">🌺</span>Fantasy</a
              >
            </li>
            <li>
              <a className="nav scrolltoview" href="#romance"
                ><span className="icon">💕</span>Romance</a
              >
            </li>
            <li>
              <a className="nav scrolltoview" href="#horror"
                ><span className="icon">💕</span>Horror </a
              >
            </li>
            <li className="nav trigger"><span className="icon">✨</span>More</li>
          </ul>
        </nav>
        <div className="spacer"></div>
        <label className="theme-switch" for="checkbox" title="Night mode">
          <input type="checkbox" id="checkbox" aria-label="Night mode" />
          <div className="slider round"></div>
        </label>
      </aside>
      <main id="main" className="main" style={{width:'100%',paddingLeft:'2rem'}}>
        <article>
        <section >
            <div class="flex">
              <h1 class="section-title">A selection of books for you !</h1>
            
            </div>
           
           
          </section>
         <section id="feminism" style={(this.state.c3===null)?{display:'none'}:null}class="results">
            <div class="flex">
              <h1 class="section-title">Because you like Feminism</h1>
              
            </div>
            <div class="list-book feminism">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
        
          <section id="adventure" style={(this.state.c2===null)?{display:'none'}:null}class="results">
            <div class="flex">
              <h1 class="section-title">Because you like Adventure</h1>
              
            </div>
            <div class="list-book adventure">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
         
          <section id="fiction" class="results"style={(this.state.c5===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Fiction</h1>
              
            </div>
            <div class="list-book fiction">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
       
          <section id="fantasy" class="results"style={(this.state.c6===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Fantasy</h1>
              
            </div>
            <div class="list-book fantasy">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
         
          <section id="thriller" class="results"style={(this.state.c7===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Thriller</h1>
              
            </div>
            <div class="list-book thriller">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
       
          <section id="horror" class="results"style={(this.state.c8===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Horror</h1>
              
            </div>
            <div class="list-book horror">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
       
          <section id="feminism" class="results"style={(this.state.c9===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Humor</h1>
              
            </div>
            <div class="list-book humor">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
        
          <section id="romance" class="results"style={(this.state.c10===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Romance</h1>
              
            </div>
            <div class="list-book romance">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
         
          <section id="mystery" class="results"style={(this.state.c11===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Mystery</h1>
              
            </div>
            <div class="list-book mystery">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
         
          <section id="poetry" class="results"style={(this.state.c12===null)?{display:'none'}:null}>
            <div class="flex">
              <h1 class="section-title">Because you like Poetry</h1>
              
            </div>
            <div class="list-book poetry">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
          </section>
        </article>
  
       
      </main>
     
    
      
          </div>
      );
    }
  
  
}
