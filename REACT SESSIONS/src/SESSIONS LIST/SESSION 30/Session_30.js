import './App.css';
import { useState } from 'react';
import { AddMovies } from './SESSIONS LIST/SESSION 30/AddMovies'
import {AddColor} from "./SESSIONS LIST/SESSION 30/AddColor"
import {MoviesList} from "./SESSIONS LIST/SESSION 30/MoviesList"
import {Switch, Redirect, Route, Link, useParams} from "react-router-dom"
import Typography from "@mui/material/Typography";

export default function App() {
  let moviesList = [
    {
      name: "Iron Man",
      poster: "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
      rating: 7.9,
      summary: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      trailer: "https://www.youtube.com/embed/8hYlB38asDY"
    },
    {
      name: "Iron Man 2",
      poster: "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg",
      rating: 7.0,
      summary: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      name: "Thor",
      poster: "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
      rating: 7.0,
      summary: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      trailer: "https://www.youtube.com/embed/JOddp-nlNvQ"
    },
    {
      name: "Captain America: The First Avenger",
      poster: "https://media.comicbook.com/2017/10/captain-america-the-first-avenger-movie-poster-marvel-cinematic--1038891.jpeg",
      rating: 6.9,
      summary: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
      trailer: "https://www.youtube.com/embed/JerVrbLldXw"
    },
    {
      name: "Marvel's The Avengers",
      poster: "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg",
      rating: 8.0,
      summary: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      name: "Iron Man 3",
      poster: "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg",
      rating: 7.1,
      summary: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      trailer: "https://www.youtube.com/embed/YLorLVa95Xo"
    }
  ]     

  const [Movies, SetMovies] = useState(moviesList);  

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ Movies">Movies</Link>
        <Link to="/ Movies/ AddMovies">Add Movies</Link>
        <Link to="/ ColorGame">Color Game</Link>
        {/* "link" job is to just change the URL */}
        {/* in "to" we can specify the name for the particular link element */}
      </nav>

      <Switch>
        {/* <Route path="/">
          <div className="homeHeading">
            <h1>WELCOME TO HOME PAGE</h1>
          </div>
        </Route> */}
        {/* home page with "/" shouldnt be in the first place it has to be in the last as all the path is statring with the same "/" and the Route get matched by the substring only so it doesnt look for the entire string to get matched.*/}
        {/* it is first come first service so which Route is matched first that routes content will be displayed */}
        {/* Route doesnt see for the full string of the path. on seeing the "path" having "/" that is matching with the "/" in url it prints the content*/}
        {/* as all the "path" is starting with "/" so for every url the content displayed will be of the home page who is having path "/" */}
        {/* so this has to be at the last only */}

        <Route exact path="/">
          <div className="homeHeading">
            <h1>WELCOME TO HOME PAGE</h1>
          </div>
        </Route>
        {/* if we want to keep this on the top only then we can use "exact" attribute which will only match the url if it is exact same conmplete string not by the substring(only by the "/") */}        

        {/* USE HISTORY */}
        <Route path="/ Movies/:id">
          {/* ":id" here the colon is very important then only the "id" will be considered as variable or else it will only be string */}          
          <Trailer MoviesList={moviesList}/>         
        </Route>

        <Route exact path="/ Movies">
          {/* as the word "Movies" is common for this and the below one, so even if the below url is executed content of this url will only be displayed */}
          {/* this is because as said above the Route is checked from the above for the same url and when the "Movies" is matched with it(it doesnt check the next word) it prints the content of the url with "Movies"(this one not the next one) */}
          {/* so we are using exact attribute here */}
          <MoviesList moviesList={Movies} SetMovies={SetMovies} />
        </Route>
        {/* when the url is changed by clicking the link then that url will be checked with the "path" in Route and whose path is matching with the url that "path" Route content will be displayed on the screen*/}
        <Route path="/ Films/ AddFilms">
          <AddMovies Movies={Movies} SetMovies={SetMovies} />
        </Route>        
          {/* what if i want to change th e name of the url to "/ Movies/ AddMovies" */}
          {/* suddenly changing this will affect the old cutomers having the old url, if they sti ll use that old url then they will be pushed to the "not found" page */}

        <Route path="/ Movies/ AddMovies">
          <AddMovies Movies={Movies} SetMovies={SetMovies} />
        </Route>
          {/* this is one of the method to redirect to the same page even with old url */}
          {/* but this is like dublicating the code instead we can follow the next method */}

        <Route path="/ Films/ AddFilms"> 
          <Redirect to="/ Movies/ AddMovies" />
        </Route>
          {/* this is another proper method */}

        <Route path="/ ColorGame">
          <AddColor />``
        </Route>

        {/* <Route path="/">
          <div className="homeHeading">
            <h1>WELCOME TO HOME PAGE</h1>
          </div>
        </Route>  */}

        <Route path="**">
          <p style={{textAlign: "center", fontSize: "24px"}}>PAGE NOT FOUND</p>          
        </Route>
          {/* this "**" path is given to print the content of that when user types some random url that is not created */}
      </Switch>
    </div>
  );
}

// USE HISTORY(HOOK):
  // it change the path of the url like link tag
  // is used when we donot want a link tag to be used like inside a button or any function
  // CONT FROM => "Movies.js/ USE HISTORY"

// USEPARAHMS(HOOK)
  // this is used to take values from the url
  // here we are taking value of "id"
function Trailer({MoviesList}) {
  const {id} = useParams();
  // console.log(useParams())
    // useParams returns an object and that object is destructured
  const movies = MoviesList[id];

  const styles = {
    color: movies.rating < 7.5 ? "crimson" : "green",
    fontWeight: "700",
  };

  return (
    <div>
      <iframe
        width="100%"
        height="540px"
        src={movies.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
        {/* "iframe" is used to input the videos from external site */}
        {/* just copy thr "copy embed code" and paste */}
      <div className="movieDetails">
        <div className="MovieSpecs">
          <h3 className="movieName font">{movies.name}</h3>
          <h3 className="movieRating font" style={styles}>
            <i className="material-icons">star</i> {movies.rating}
          </h3>
        </div>
        <Typography
          variant="body2"
          color="text.secondary" /* className="movieSummary font" */
        >
          {movies.summary}
        </Typography>
      </div>
    </div>
  );
}

// PASSING JSX FORMAT AS PROPS:

// TO DELETE A MOVIE