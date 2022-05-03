import './App.css';
// Named exports and imports
import {Background, Sum} from "./SESSIONS LIST/SESSION 28/Background"
  // this is the code to import any component
  // we no need to say ".js" for the JS file since webpack takescare of that

  // inorder to import multiple component we give the component names seperated by commas
import {MoviesList} from "./SESSIONS LIST/SESSION 28/MoviesList"

// default exports and imports
  // import Background from "./SESSIONS LIST/SESSION 28/Background"
    // here we dont use curly braces for the "background"

import {ColorBox} from "./SESSIONS LIST/SESSION 28/No_#2"
import {AddColor} from "./SESSIONS LIST/SESSION 28/No_#3"

console.log(Sum(10));

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
  return (
    <div className="App">
      {/* <Background /> */}
      <MoviesList moviesList={moviesList} />
      {/* #2 */}
      <h3>TO CHANGE THE BG COLOR ACCORDING TO INPUT</h3>
      <ColorBox />

      {/* #3 */}
      <h3>TO CREATE A NEW DIV COLOR BOX EACH TIME THE BUTTON IS PRESSED</h3>
      <AddColor />
    </div>
  );
}

// IMPORTING AND EXPORTING COMPONENTS:
  // this reduces the stress of scrolling all the way down page to searcg for a component
  
// METHODS OF IMPORTING AND EXPORTING:
  // Named imports and exports 
    // this is the latest one
    // here we have to type export before the component which need to be exported
    // then we need to import that component where ever needed
    // export {component1, component2}
      // instead of giving export in every component we can give like this also    

  // dafault imports and exports
    // this method is a old way of importing and exporting
    // incase of default we cannot export multiple component as easy as "named imports and exports"
    // it can export only one component at a time

    // to import and export easily we can select the component and select the light bulb icon near that componet then select "move to a new selection" option
      // which will automatically move that component to a new file and does all the imports and exports
    // or else we can do this by selecting the component and right click on it and then choose the refactor option then select tha "move to a new selection" option

// VIRTUAL DOM:
  // Virtual DOM is a copy of our real DOM
  // if we are updating the real DOM more than that our system can handle will cause the system to give up 
  // so that we use virtual DOM
    // in this case we are doing all the n number of updation in the virtual DOM and finally comapring the real DOM and updating only the things that is changed
    // so by this way we are not disturbing our real DOM all the things are carried ouit in the virtual DOM only
  // this is why we dont use "document." operation in the react becoz if we are directly accessing the DOM then change will happen directly in real DOM not in the virtual DOM
    // instead we use "useState" to  update the DOM which will do all the process on the virtual DOM first and then update finally on the real DOM

  // the "key" that we are giving for the map method is to help the virtual DOM to comapare and make changes in the real DOM
  // even without key it will work but if we give unique key then it boost the speed of comparison as it has unique keys to it

  // this process of comparing and updating is knowns as reconsilation

  // CODE FROM index.JS
    // ReactDOM.render(
    //   // this is where the virtual DOM starts
    //   <React.StrictMode>
    //     <App />
    //   </React.StrictMode>,
    //   document.getElementById('root')
    // );





// DOUBT:1
  // why the BG color keeps unchanged even after until erasing last before letter of the input field







