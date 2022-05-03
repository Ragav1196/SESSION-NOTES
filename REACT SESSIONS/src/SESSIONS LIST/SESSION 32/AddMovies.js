import { useState } from "react";
import { useHistory } from "react-router-dom";

export function AddMovies({ Movies, SetMovies }) {
  const history = useHistory();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  let AddMovieFn = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    SetMovies([...Movies, newMovie]);

    history.push("/movies");
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
      <button onClick={AddMovieFn}>Add Movie</button>
    </div>
  );
}
