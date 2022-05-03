import { AddMovies } from "./AddMovies";
import { AddColor } from "./AddColor";
import { MoviesList } from "./MoviesList";
import { Switch, Route, Link } from "react-router-dom";
import { Trailer } from "./Trailer";
import { EditMovies } from "./EditMovies";
import { Context } from "./Context";


export function CreatingNavBar({ Movies, SetMovies }) {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/add-movies">Add Movies</Link>
        <Link to="/color-game">Color Game</Link>
        <Link to="/context">Context</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <div className="homeHeading">
            <h1>WELCOME TO HOME PAGE</h1>
          </div>
        </Route> 

        <Route path="/movies/edit/:id">
          <EditMovies Movies={Movies} SetMovies={SetMovies} />
        </Route>  

        <Route path="/movies/:id">
          <Trailer MoviesList={Movies} />
        </Route>  

        <Route path="/movies">
          <MoviesList moviesList={Movies} SetMovies={SetMovies} />
        </Route>          

        <Route path="/add-movies">
          <AddMovies Movies={Movies} SetMovies={SetMovies} />
        </Route>

        <Route path="/color-game">
          <AddColor />
        </Route> 

        <Route path="/context">
          <Context />
        </Route>                              
         
        <Route path="**">
          <p style={{ textAlign: "center", fontSize: "24px" }}>
            PAGE NOT FOUND
          </p>
        </Route>        
      </Switch>
    </div>
  );
}
