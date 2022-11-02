import React from "react";
import './home.css';
import { Splide } from "@splidejs/splide";
import { Block } from "@mui/icons-material";

import bootstrap from 'bootstrap'
import './home.css'



function Homepage () {

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





  let bookContainer = document.querySelector(".search");
let searchBooks = document.getElementById("search-box");
const getBooks = async (book) => {
const response = await fetch(
  `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=12&startIndex=0`
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
const drawChartBook = async (subject) => {
  let cbookContainer = document.querySelector(`.${subject}`);
  cbookContainer.innerHTML = `<div ><div ></div></div>`;
  const cdata = await getBooks(
    `subject:${subject}`
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
  const drawListBook = async () => {
  if (searchBooks.value != "") {
   
    bookContainer.innerHTML = `<div class='prompt'><div  ></div></div>`;
    const data = await getBooks(`${searchBooks.value}&maxResults=12`);
    if (data.error) {
      bookContainer.innerHTML = `<div class='prompt'>ツ Limit exceeded! Try after some time</div>`;
    } else if (data.totalItems == 0) {
      bookContainer.innerHTML = `<div class='prompt'>ツ No results, try a different term!</div>`;
    } else if (data.totalItems == undefined) {
      bookContainer.innerHTML = `<div class='prompt'>ツ Network problem!</div>`;
    } else {
      bookContainer.innerHTML = data.items
        .map(
          ({ volumeInfo }) =>
            `<div class='book' style={{background: 'linear-gradient(` +
            
            `, rgba(0, 0, 0, 0))'}}><a href='${volumeInfo.previewLink}' target='_blank'><img class='thumbnail' src='` +
            extractThumbnail(volumeInfo) +
            `' alt='cover'></a><div class='book-info'><h3 class='book-title'><a href='${volumeInfo.previewLink}' target='_blank'>${volumeInfo.title}</a></h3><div class='book-authors' onclick='updateFilter(this,"author");'>${volumeInfo.authors}</div><div class='info' onclick='updateFilter(this,"subject");' style={{backgroundcolor:' ` +
            +
            `'}}>` +
            (volumeInfo.categories === undefined
              ? "Others"
              : volumeInfo.categories) +
            `</div></div></div>`
        )
        .join("");
    }
  } else {
    bookContainer.style.display = "none";
  }
  };
  

const debounce = (fn, time, to = 0) => {
to ? clearTimeout(to) : (to = setTimeout(drawListBook, time));
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
});








   
  

   
    
   
    return (
        <div className="Home">
           

    <aside>
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
          <li className="nav trigger"><span className="icon">✨</span>More</li>
        </ul>
      </nav>
      <div className="spacer"></div>
      <label className="theme-switch" for="checkbox" title="Night mode">
        <input type="checkbox" id="checkbox" aria-label="Night mode" />
        <div className="slider round"></div>
      </label>
    </aside>
    <main id="main" className="main">
      <article>
        <section id="search" className="results">
          <div className="flex">
            <input
              id="search-box"
              className="search-box"
              placeholder="Search books by name, author, genre and etc ..."
              aria-label="Search books"
            />
         
          </div>
          <div className="list-book search">
            <div className="prompt">Enter a search term</div>
          </div>
        </section>
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
            <div class="list-book love categories">
              
              <div  >
                <div  ></div>
              </div>
            </div>
            <div class="fade left"></div>
            <div class="fade right"></div>
          </section>
          <section id="feminism" class="results">
            <div class="flex">
              <h1 class="section-title">New releases</h1>
             
            </div>
            <div class="list-book feminism categories">
              <div  >
                <div  ></div>
              </div>
            </div>
            <div class="fade left"></div>
            <div class="fade right"></div>
          </section>
          <section id="inspirational" class="results">
            <div class="flex">
              <h1 class="section-title">Bestsellers</h1>
              
            </div>
            <div class="list-book inspirational categories">
              <div  >
                <div></div>
              </div>
            </div>
        
          </section>
          <section id="authors" class="results">
            <div class="flex">
              <h1 class="section-title">Top authors</h1>
             
            </div>
            <div class="list-book authors categories">
              <div  >
                <div  ></div>
              </div>
            
            </div>
            
          </section>
        </div>
        <section id="fiction" class="results">
          <div class="flex">
            <h1 class="section-title">Fiction</h1>
            
          </div>
          <div class="list-book fiction">
            <div  >
              <div  ></div>
            </div>
          </div>
        </section>
        <section id="poetry" class="results">
          <div class="flex">
            <h1 class="section-title">Poetry</h1>
           
          </div>
          <div class="list-book poetry">
            <div  >
              <div  ></div>
            </div>
          </div>
        </section>
        <section id="fantasy" class="results">
          <div class="flex">
            <h1 class="section-title">Fantasy</h1>
          
          </div>
          <div class="list-book fantasy">
            <div  >
              <div  ></div>
            </div>
          </div>
        </section>
        <section id="romance" class="results">
          <div class="flex">
            <h1 class="section-title">Romance</h1>
           
          </div>
          <div class="list-book romance">
            <div  >
              <div  ></div>
            </div>
          </div>
        </section>
        <footer id="footer" class="footer">
          <div  >
            <a
              class="pagination"
              href="https://github.com/liyasthomas/books"
              
              rel="noopener"
              aria-label="GitHub"
              ><img src="icons/github.svg" alt="GitHub"
            /></a>
          </div>
        </footer>
      </article>
      <div class="modal">
        <span class="close-button">✖</span>
        <div class="modal-content">
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Adult
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Anthologies
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Art
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Audiobooks
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Biographies
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Body
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Business
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Children
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Comics
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Contemporary
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Cooking
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Crime
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Engineering
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Entertainment
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Fantasy
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Fiction
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Food
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            General
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Health
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            History
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Horror
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Investing
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Literary
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Literature
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Manga
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Media-help
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Memoirs
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Mind
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Mystery
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Nonfiction
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Religion
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Religion
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Romance
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Science
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Self
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Spirituality
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Sports
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Superheroes
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Technology
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Thrillers
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Travel
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Women
          </h3>
          <h3
            class="book-authors"
            onclick='updateFilter(this,"subject");toggleModal();'
          >
            Young
          </h3>
        </div>
      </div>
    </main>
   
  
    
        </div>
    );
  }


export default Homepage ;