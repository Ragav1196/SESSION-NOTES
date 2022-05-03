import {Movies} from "./Movies"

export function MoviesList({ moviesList, SetMovies }) {
    return (
      <div className="wholeContent">
        {moviesList.map(({ name, poster, rating, summary}, index) =>
          <Movies
            key={index}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
            id={index}

            // PASSING JSX FORMAT AS PROPS:
            // TO DELETE A MOVIE
            deleteButton={<button onClick={()=>{
              const dIndex = index;              
              SetMovies(moviesList.filter((mv, index)=> index !== dIndex))
            }}>Delete</button>}
            editButton={<button>Edit</button>}
          />)}        
      </div>
    );
  }
