import { useState } from 'react';

export function AddMovies({ Movies, SetMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  let AddMovieFn = () => {
    const newMovie = {
      // name: name,
      // poster: poster,
      // rating: rating,
      // summary: summary,
      // when the key and value of an object is same at that time we can write like this simply also this is a coolo feature form JS
      name,
      poster,
      rating,
      summary
    };
    SetMovies([...Movies, newMovie]);
  };

  return (
    <div className="inputFields">
      <input
        value={name}
        onChange={(data) => setName(data.target.value)}
        placeholder="Enter A Movie Name" />
      <input
        type="url"
        value={poster}
        onChange={(data) => setPoster(data.target.value)}
        placeholder="Enter A Movie Poster URL" />
      <input
        type="number"
        min="1"
        max="10"
        value={rating}
        onChange={(data) => setRating(data.target.value)}
        placeholder="Enter A Movie Rating" />
      <input
        value={summary}
        onChange={(data) => setSummary(data.target.value)}
        placeholder="Enter A Movie Summary" />
      <button onClick={AddMovieFn}>Add Movie</button>
    </div>
  );
}
