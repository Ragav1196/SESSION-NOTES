// USED MATERILA UI FOR DESIGNING 

import { useState } from 'react';
import { AddMovies } from './SESSIONS LIST/SESSION 29/AddMovies'
import './App.css';
import {Background} from "./SESSIONS LIST/SESSION 29/Background"
import {MoviesList} from "./SESSIONS LIST/SESSION 29/MoviesList"



export default function App() {

  let moviesList = [
    {
      name: "Iron Man",
      poster: "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
      rating: 7.9,
      summary: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
    },
    {
      name: "Iron Man 2",
      poster: "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg",
      rating: 7.0,
      summary: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy."
    },
    {
      name: "Thor",
      poster: "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
      rating: 7.0,
      summary: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
    },
    {
      name: "Captain America: The First Avenger",
      poster: "https://media.comicbook.com/2017/10/captain-america-the-first-avenger-movie-poster-marvel-cinematic--1038891.jpeg",
      rating: 6.9,
      summary: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization."
    },
    {
      name: "Marvel's The Avengers",
      poster: "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg",
      rating: 8.0,
      summary: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
      name: "Iron Man 3",
      poster: "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg",
      rating: 7.1,
      summary: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
    }
  ]     

  const [Movies, SetMovies] = useState(moviesList);  
    // when two component shares same data then that data is put on there common parent component
    // this pattern is called as HOC => Higher Order Components
    // here MoviesList and AddMovies both share this above data and they have been put in thier common parent component "app"
  return (
    <div className="App">
      <Background />  
      <AddMovies Movies={Movies} SetMovies={SetMovies} />    
      <MoviesList moviesList={Movies} />
    </div>
  );
}

// WHY WE NEED TO HAVE DIFFERENT PAGES WHY NOT HAVE EVERYTHING IN A SINGLE PAGE
  // Readabilty
  // ease of access
  // performance - because we are not loading all tghe content of the website
    // only the page user want to see is loaded. so performance is improved
  // sharing - paricular content of a website can be shared easily

// PROBLEM OF REACT
  // normally we have different HTML page and different address for the page
  // which can be shared easily

  // but in the case of REACT it has only one HTML page
  // so here we use React router which creates pages for us

  // REACT ROUTER
    // Basically it is a big conditional rendering
    // for example, 
      // when we want to see the contact page it hides the about page and show the contact page and vice versa happens for if we want to see about page

    // import {BrowserRouter as router} from "react-router-dom"
      // in this "as" is like alias
      // we are renaming the BrowserRouter to router and will use it

    // we have two router
      // BrowserRouter - for modern browsers 
        // it has some modern features which will work only in the modern browsers
      // HashRouter - for older browsers like IE

    // if we want to use HashRouter
      // import {BrowserRouter as router} from "react-router-dom" just change this into
        // import {HashRouter as router} from "react-router-dom" thats it
      // we get a hash symboly in the link while using HashRouter

    // LINK TAG
      // we use link tag to change the url not the content of the page

    // ROUTE TAG
      // Match the url that is changed
      // and display the content specified for the url 
    



// TO LEARN
  // Immutabilty      

