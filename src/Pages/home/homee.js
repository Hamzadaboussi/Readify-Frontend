import './home.css';
import React, { Component } from 'react'
import ResponsiveDrawer from '../SideNav';



class Homepage extends Component {
 
  constructor(props) {
    super(props);
   
     
    this.state = {
      user:'',
    }
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
      .then(result => { this.setState({user:result._id}) })
      .catch(error => console.log('error', error));
  }

 /* startIndex  ;
  drawChartBook();
  prev = (subject) => {
    startIndex -= 6;
    if (startIndex <= 0) {
      startIndex = 0;
      drawChartBook(subject, startIndex);
      document.getElementById(`${subject}-prev`).style.display = "none";
    } else {
      document.getElementById(`${subject}-prev`).style.display = "inline-flex";
      drawChartBook(subject, startIndex);
    }
  };
*/


  getBooks = async (book) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}`
    );
    const data = await response.json();
    return data;
  };

  extractThumbnail = ({ imageLinks }) => {
    const DEFAULT_THUMBNAIL = "icons/logo.svg";
    if (!imageLinks || !imageLinks.thumbnail) {
      return DEFAULT_THUMBNAIL;
    }
    return imageLinks.thumbnail.replace("http://", "https://");
  };

  drawChartBook = async (subject, startIndex = 0) => {
    let cbookContainer = document.querySelector(`.${subject}`);
    cbookContainer.innerHTML = `<div class='prompt'><div class="loader"></div></div>`;
    const cdata = await this.getBooks(
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
      cbookContainer.innerHTML = cdata.items;
      cbookContainer.innerHTML = cdata.items
        .map(
          ({ volumeInfo }) =>
            `<div class='book' style={{background: 'linear-gradient(` +
            this.getRandomColor() +
            `, rgba(0, 0, 0, 0))'}}><a href='${volumeInfo.previewLink}' target='_blank'><img class='thumbnail' src='` +
            this.extractThumbnail(volumeInfo) +
            `' alt='cover'></a><div class='book-info'><h3 class='book-title'><a href='${volumeInfo.previewLink}'
             target='_blank'>${volumeInfo.title}</a></h3><div class='book-authors'
              onclick='updateFilter(this,"author");'>${volumeInfo.authors}</div>
              <div class='info' onclick='updateFilter(this,"subject");' style={{background-color: ` +
            `}}>` +
            (volumeInfo.categories === undefined
              ? "Others"
              : volumeInfo.categories) +
            `</div></div></div>`)
        .join("");
    }
  };


  
  updateFilter = ({ innerHTML }, f) => {
    document.getElementById("main").scrollIntoView({
      behavior: "smooth",
    });
    let m;
    switch (f) {
      case "author":
        m = "inauthor:";
        break;
      case "subject":
        m = "subject:";
        break;
    }

    
  };


  
 
  /*constructor() {
    
    window.addEventListener("scroll", (event) => {
      let fromTop = window.scrollY + 64;
      this.mainNavLinks.forEach(({ hash, classList }) => {
        let section = document.querySelector(hash);
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          classList.add("current");
        } else {
          classList.remove("current");
        }
      });
    });
    /*if (localStorage.getItem("marcdownTheme") == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#090b28");
      this.toggleSwitch.checked = true;
      localStorage.setItem("marcdownTheme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#ffffff");
      this.toggleSwitch.checked = false;
      localStorage.setItem("marcdownTheme", "light");
    }
   
    this.toggleSwitch.addEventListener("change", this.switchTheme, false);
    this.trigger.addEventListener("click", this.toggleModal);
  this.closeButton.addEventListener("click", this.toggleModal);
  window.addEventListener("click", this.windowOnClick); 
}*/


doc(){ document.addEventListener("DOMContentLoaded", () => {
  this.drawChartBook("love");
  this.drawChartBook("feminism");
  this.drawChartBook("inspirational");
  this.drawChartBook("authors");
  this.drawChartBook("fiction");
  this.drawChartBook("poetry");
  this.drawChartBook("fantasy");
  this.drawChartBook("romance");
  this.drawChartBook("drama");
  this.drawChartBook("humor");
});};
  mainNavLinks = document.querySelectorAll(".scrolltoview");
 
  
  
  


   componentDidMount (){
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
    cbookContainer.innerHTML = cdata.items;
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
  drawChartBook("love");
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
           
<ResponsiveDrawer />
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
            <a className="nav scrolltoview" href="/foryou"
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
       
        <div id="foryou">
          <section className="results">
            <div className="list-book foryou">
              <a className="category" href="#love">
                <div className="book">
                  <div className="book-info">
                    <h1 className="section-title">Daily Top 100</h1>
                  </div>
                </div>
              </a>
              <a className="category" href="#feminism">
                <div className="book">
                  <div className="book-info">
                    <h1 className="section-title">New releases</h1>
                  </div>
                </div>
              </a>
              <a className="category" href="#inspirational">
                <div className="book">
                  <div className="book-info">
                    <h1 className="section-title">Bestsellers</h1>
                  </div>
                </div>
              </a>
              <a class="category" href="#authors">
                <div class="book">
                  <div class="book-info">
                    <h1 class="section-title">Top authors</h1>
                  </div>
                </div>
              </a>
            </div>
          </section>
          <section id="love" class="results">
            <div class="flex">
              <h1 class="section-title">Daily Top 100</h1>
              
            </div>
            <div class="list-book love ">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
            <div class="fade left"></div>
            <div class="fade right"></div>
          </section>
          <section id="feminism" class="results">
            <div class="flex">
              <h1 class="section-title">New releases</h1>
              
            </div>
            <div class="list-book feminism ">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
            <div class="fade left"></div>
            <div class="fade right"></div>
          </section>
          <section id="inspirational" class="results">
            <div class="flex">
              <h1 class="section-title">Bestsellers</h1>
             
            </div>
            <div class="list-book inspirational ">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
            <div class="fade left"></div>
            <div class="fade right"></div>
          </section>
          <section id="authors" class="results">
            <div class="flex">
              <h1 class="section-title">Top authors</h1>
            
            </div>
            <div class="list-book authors ">
              <div class="prompt">
                <div class="loader"></div>
              </div>
            </div>
            <div class="fade left"></div>
            <div class="fade right"></div>
          </section>
        </div>
        <section id="fiction" class="results">
          <div class="flex">
            <h1 class="section-title">Fiction</h1>
            
          </div>
          <div class="list-book fiction">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="poetry" class="results">
          <div class="flex">
            <h1 class="section-title">Poetry</h1>
           
          </div>
          <div class="list-book poetry">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="fantasy" class="results">
          <div class="flex">
            <h1 class="section-title">Fantasy</h1>
            
          </div>
          <div class="list-book fantasy">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="romance" class="results">
          <div class="flex">
            <h1 class="section-title">Romance</h1>
            
          </div>
          <div class="list-book romance">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="horror" class="results">
          <div class="flex">
            <h1 class="section-title">Horror</h1>
            
          </div>
          <div class="list-book horror">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="adventure" class="results">
          <div class="flex">
            <h1 class="section-title">adventure</h1>
            
          </div>
          <div class="list-book adventure">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="thriller" class="results">
          <div class="flex">
            <h1 class="section-title">Thriller</h1>
            
          </div>
          <div class="list-book thriller">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="mystery" class="results">
          <div class="flex">
            <h1 class="section-title">Mystery</h1>
            
          </div>
          <div class="list-book mystery">
            <div class="prompt">
              <div class="loader"></div>
            </div>
          </div>
        </section>
        <section id="humor" class="results">
          <div class="flex">
            <h1 class="section-title">Humor</h1>
            
          </div>
          <div class="list-book humor">
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
export default Homepage ;