import { useState } from "react";
import { useParams } from "react-router";
import {useHistory} from "react-router-dom"

export function EditMovies({ Movies, SetMovies }) {
  const history = useHistory();

  const {id} = useParams();
  const movies = Movies[id];
  console.log(movies)
  const [name, setName] = useState(movies.name);
  const [poster, setPoster] = useState(movies.poster);
  const [rating, setRating] = useState(movies.rating);
  const [summary, setSummary] = useState(movies.summary);
  const [trailer, setTrailer] = useState(movies.trailer);

  let editMovieFn = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    // SetMovies([...Movies, newMovie]);
    const copiedMovies = [...Movies]
    copiedMovies[id] = newMovie;
    SetMovies(copiedMovies);

    history.push("/movies")
  };

  return (
    <div className="inputFields">
      <input
        value={name}
        onChange={(data) => setName(data.target.value)}
        placeholder="Enter A Movie Name"
      />
      <input
        type="url"
        value={poster}
        onChange={(data) => setPoster(data.target.value)}
        placeholder="Enter A Movie Poster URL"
      />
      <input
        type="number"
        min="1"
        max="10"
        value={rating}
        onChange={(data) => setRating(data.target.value)}
        placeholder="Enter A Movie Rating"
      />
      <input
        value={summary}
        onChange={(data) => setSummary(data.target.value)}
        placeholder="Enter A Movie Summary"
      />
      <input
        value={trailer}
        onChange={(data) => setTrailer(data.target.value)}
        placeholder="Enter A Movie Trailer"
      />
      <button onClick={editMovieFn}>Save</button>
    </div>
  );
}
             