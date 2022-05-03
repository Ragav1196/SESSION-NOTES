import {Movies} from "./Movies"

export function MoviesList({ moviesList }) {
    return (
      <div className="wholeContent">
        {moviesList.map(({ name, poster, rating, summary}, index) =>
          <Movies
            key={index}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />)}        
      </div>
    );
  }
