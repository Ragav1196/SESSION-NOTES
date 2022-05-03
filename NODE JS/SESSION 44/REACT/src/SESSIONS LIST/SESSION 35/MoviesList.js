import { Movies } from "./Movies";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "./globalConstants";

//   // CONNECTING THE REACT APP TO THE HEROKKU LINK:
//   const API_URL = "https://session-44.herokuapp.com"; /* shifting this to globalConstan.js */
//   /* dont add the "/" at the end */

// OLD MOCK API URL:
// const API_URL = "https://616bc2b216c3fa00171717bf.mockapi.io";
/* to make it easily toggled between them if needed */

export function MoviesList() {
  const history = useHistory();

  const [movies, SetMovies] = useState([]);

  const getMovies = () => {
    /* fetch("https://616bc2b216c3fa00171717bf.mockapi.io/movies", {
			method: "GET",
		}) */

    // INTERPOLATION OF "API_URL" INSTEAD OF LONG LINK:
    fetch(`${API_URL}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => SetMovies(mvs));
  };

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div className="wholeContent">
      {movies.map(({ name, poster, rating, summary, id, _id }, index) => (
        <Movies
          key={_id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          id={_id}
          deleteButton={
            <button
              onClick={() => {
                deleteMovie(_id);
              }}
            >
              Delete
            </button>
          }
          editButton={
            <button onClick={() => history.push("/movies/edit/" + _id)}>
              Edit
            </button>
          }
        />
      ))}
    </div>
  );
}
