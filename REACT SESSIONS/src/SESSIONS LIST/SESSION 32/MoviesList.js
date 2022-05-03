import { Movies } from "./Movies";
import { useHistory } from "react-router-dom";

export function MoviesList({ moviesList, SetMovies }) {
  const history = useHistory();
  return (
    <div className="wholeContent">
      {moviesList.map(({ name, poster, rating, summary }, index) => (
        <Movies
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          id={index}
          deleteButton={
            <button
              onClick={() => {
                const dIndex = index;
                SetMovies(moviesList.filter((mv, index) => index !== dIndex));
              }}
            >
              Delete
            </button>
          }
          // TO EDIT MOVIES
          editButton={
            <button onClick={() => history.push("/movies/edit/" + index)}>
              Edit
            </button>
          }
        />
      ))}
    </div>
  );
}
