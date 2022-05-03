import { AddMovies } from "./AddMovies";
import { AddColor } from "./AddColor";
import { MoviesList } from "./MoviesList";
import { Switch, Route } from "react-router-dom";
import { Trailer } from "./Trailer";
import { EditMovies } from "./EditMovies";
import { Buttons } from "./ButtonsUsingProps_and_Context";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from "react";
import { TicTacToe } from "./TicTacToe";

export function CreatingNavBar({ Movies, SetMovies, setMode, mode }) {
  const history = useHistory();
  return (
    <div className="App">
      <div className="Nav">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button
              onClick={() => history.push("/")}
              variant="text"
              color="inherit"
            >
              Home
            </Button>

            <Button
              onClick={() => history.push("/movies")}
              variant="text"
              color="inherit"
            >
              Movies
            </Button>

            <Button
              onClick={() => history.push("/add-movies")}
              variant="text"
              color="inherit"
            >
              Add Movies
            </Button>

            <Button
              onClick={() => history.push("/color-game")}
              variant="text"
              color="inherit"
            >
              Color Game
            </Button>

            <Button
              onClick={() => history.push("/context")}
              variant="text"
              color="inherit"
            >
              Context
            </Button>

            <Button
              onClick={() => history.push("/tic-tac-toe")}
              variant="text"
              color="inherit"
            >
              GAME
            </Button>

            <Button
              style={{ marginLeft: "auto" }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              variant="text"
              color="inherit"
            >
              <IconButton sx={{ ml: 1 }} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              {mode === "light" ? "DARK MODE" : "LIGHT MODE"}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
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
          <Buttons />
        </Route>

        <Route path="/tic-tac-toe">
          <TicTacToe />
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


