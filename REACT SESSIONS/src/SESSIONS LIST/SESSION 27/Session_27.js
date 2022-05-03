import { useState } from 'react';
  // this one is HOOK function "useState"
import './App.css';

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
    // to add more number of movies easily to the "Movies" component we use objects
  return (
    <div className="App">
      <Background />         
      {/* {moviesList.map((moviesData) =>
        <Movies
          name={moviesData.name}
          poster={moviesData.poster}
          rating={moviesData.rating}
          summary={moviesData.summary}
            // to pass data to this child component(Movies) of App, we use props
        />)}  */}
      
      {/* DESTRUCTURING THE ABOVE CODE */}

      {/* {moviesList.map(({name, poster, rating, summary}) =>
        <Movies
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
        />)} */}
          {/* converting above code into a seperate component and passing the "moviesList" data as an props to that component */}
      <MoviesList moviesList={moviesList}/>       
      <div className="LiteCounter">
        <h3>LIKE BUTTON INCREMENTING ONLY ON CONSOLE:</h3>
        <Counter />

        <h3>USESTATE FUNCTION EXPLAINED WITH SIMPLE EXAMPLE:</h3>
        <UseStateEg />

        <h3>BUTTON USING HOOK FUNCTION:</h3>
        <h4>EXAMPLE 1:</h4>
        <ButtonWithHookFn_1 />
        
        <h4>EXAMPLE 2:</h4>
        <ButtonWithHookFn_2 />
      </div>                 
    </div>
  );
}

function Background() {
  return(
    <div className="backGroundImg">
      <img src="https://wallpapercave.com/wp/wp2436369.jpg" />
    </div> 
  );
}

function MoviesList({moviesList}){
  console.log(moviesList)
  return(
    <div className="wholeContent">    
      {moviesList.map(({name, poster, rating, summary}) =>
          <Movies
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />)}  
    </div>  
  );
}

// function Movies({ name, poster, rating, summary }) {
//   return (
//     <div>
//       <img className="posterPic" src={poster} alt={name} />
//       <h1>{name}</h1>
//       <p className="rating">{rating}</p>
//       <p>{summary}</p>
//     </div>
//     <p>

//     </p>
//   );
// }
  // in react we can return only one element out of the component. it will throw an error if we try to return more than one element.
  // inside "div" we can have n number of elements but the return should be a single element

function Movies({ name, poster, rating, summary }) {
  // CONDITIONAL STYLING:
    // based on the condition the styling will be applied here
  const styles = { color: rating < 7.5 ? "crimson" : "green", fontWeight: "700" };
    // to give styles to a element
    // this is similar to inline styling
    // we assign the property and value of styling to a variable and use that wherever needed

    // for the "fontWeight" we input it as "font-weight" in a CSS page but here we dont use that format bcoz it will throw an error considering it as a negative symbol
    // so instead we use capital letter for the next word to differentiate
    // or else we can wrap that word inside a quotation and use the same css format  
  // TO HIDE AND SHOW DESCRIPTION

  const [summaryHide, setSummaryHide] = useState(true);
  const summaryStyles = {display: summaryHide ? "none" : "block"}

  // CONDITIONAL RENDERING:
  const [summaryHide_1, setSummaryHide_1] = useState(true);

  
  return (
    <div className="movieContainer">
      <img className="posterPic" src={poster} alt={name} />   
      <div className="movieDetails">
        <div className="MovieSpecs">
          <h3 className="movieName font">{name}</h3>
          <h3 className="movieRating font" style = {styles}><i class="material-icons">star</i> {rating}</h3>
            {/* above created variable is used here to style it */}
        </div>
        {/* CONDITIONAL STYLING: */}
        <button onClick={()=> {
          setSummaryHide(!summaryHide)        
        }}>{summaryHide ? "Show" : "Hide"} Description</button>
        <p className="movieSummary font" style={summaryStyles}>{summary}</p>

        {/* CONDITIONAL RENDERING: */}
          {/* this is another method for the conditional styling */}
          {/* here we are controlling the rendering of the page */}
        <button onClick={()=> {
          setSummaryHide_1(!summaryHide_1)        
        }}>{summaryHide_1 ? "Show" : "Hide"} Description</button>
        {summaryHide_1 ? "" : <p className="movieSummary font">{summary}</p>}
      </div>       
      <ButtonForMovies />
    </div>
  );
}

// COUNTER
  // here we are going to create elements that can interect with the user

  // BUTTON:
    // LIKE BUTTON INCREMENTING ONLY ON CONSOLE:
    function Counter() {
      let like = 1;
      return (
        <div className="likeButton">          
          <button
            onClick={() => {
              like = like + 1;
              console.log(like);
            }}
          >
            Like
          </button>
          <p>{like}</p>
        </div>
      );
    }
      // in the above case the "like" variable value gets incremented in console but not rendered on the screen
      // this is because the react doesnt get to know that "like" has been incremented
      // to render the changes we need to inform react about the change
      // to inform react we use "HOOK FUNCTION"

    // HOOK:
      // It starts with "use"
      // first HOOK function that we are going to use is "USE STATE"
      // its pattern is,
        // const [state, setState] = useState(InitialValue)

      // const [like, setLike] = useState(0);
        // first we need to import useState from the react inorder to use it
        // import { useState } from 'react';
          // This is the code to import "useState", which has to be on the top of the page
        // "useState" is a function that returns an array of current state(state) and a function to change that state(setState) and that array is being destructured
        // "useState" can take any data type as it value

      // USESTATE FUNCTION EXPLAINED WITH SIMPLE EXAMPLE:
      function UseStateEg () {
        function double(n){
          return [n, n*2]
        }
        let [z1, z2] = double(5);
        return(
          <div>            
            <p>{[z1, " ", z2]}</p>              
          </div>
        );
      }
        // in the above case the function returns an array of numbers and that array is destructured
        // same operation happens in the Usestate also 
      
      // BUTTON USING HOOK FUNCTION:
      
      // EXAMPLE 1:
      function ButtonWithHookFn_1() {
        const [like, setLike] = useState(0);        
          // useState has initial value 0 which will be passed to the "like" and rendered on the page
        return(
          <div>
            <button onClick={()  => {
              setLike(1000)
                // whenever the setLike is called, it changes the value of "like" that is given as argument to it and also it informs react about the change in like and the react re render the page (update the page) with current like value                
            }              
            }>
              like

            </button>
            <p>{like}</p>   
          </div>                 
        );
      }

      // EXAMPLE 2:
      function ButtonWithHookFn_2() {
        const [like, setLike] = useState(0);    
        const[dislike, setDislike] = useState(0);
          // useState has initial value 0 which will be passed to the "like" and rendered on the page
        return(
          <div className="ButtonWithHookFn_2">
            <button onClick={()  => {
              setLike(like + 1) 
                // here each time the like button is pressed "setLike" function is called and it argument is given as value to the "like". so each time like button is presed "like" gets incremented
            }              
            }>
              <i class="material-icons">thumb_up</i>  Like {like}
            </button>   
            <button onClick={()=> {
              setDislike(dislike + 1)
            }}
            > <i class="material-icons">thumb_down</i>  Dislike {dislike}
            </button>          
        </div>  
        )
      }  
      
      // TO ADD INTO THE MOVIES LIST CREATED ABOVE:
      function ButtonForMovies() {
        const [like, setLike] = useState(0);    
        const[dislike, setDislike] = useState(0);
          // useState has initial value 0 which will be passed to the "like" and rendered on the page
        return(
          <div className="ButtonForMovies">
            <button onClick={()  => {
              setLike(like + 1) 
                // here each time the like button is pressed "setLike" function is called and it argument is given as value to the "like". so each time like button is presed "like" gets incremented
            }              
            }>
              <i class="material-icons">thumb_up</i>  Like {like}
            </button>   
            <button onClick={()=> {
              setDislike(dislike + 1)
            }}
            > <i class="material-icons">thumb_down</i>  Dislike {dislike}
            </button>          
        </div>  
        )
      } 

