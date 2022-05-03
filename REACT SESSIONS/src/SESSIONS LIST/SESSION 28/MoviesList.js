import {Movies} from "./Movies"

export function MoviesList({ moviesList }) {
    console.log(moviesList)
    return (
      <div className="wholeContent">
        {moviesList.map(({ name, poster, rating, summary }) =>
          <Movies
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />)}
      </div>
    );
  }