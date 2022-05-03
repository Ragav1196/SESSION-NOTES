import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

export function EditMovies() {
	const { id } = useParams();

	const [Movies, setMovie] = useState(null);

	useEffect(() => {
		fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/movies/${id}`, {
			method: "GET",
		})
			.then((data) => data.json())
			.then((mvs) => setMovie(mvs));
	}, [id]);
	/*  // to avoid the error for the "useEffect", instead of giving a empty dependecncy we can add "id" to it 
		  // it still act as the empty dependency useEffect only
      // even though we add "id", as it doesnt change after rendering the page so this useEffect will not be called after the page id rendered */
      

	// RACE CONDITION
	console.log(Movies);
	/*   // when edit is clicked on web page this component is renderd on the page
    // but the fetch operaion would be running by that time it takes some time to complete the fetch process
    // but rendering process would be completed before the fetch process this is know as RACE CONDITION */

	return Movies ? <UpdateMovie Movies={Movies} /> : "";
	/*   // to tackle the race condition we have created a new component and we are doing conditional rendering */
}

function UpdateMovie({ Movies }) {
	const history = useHistory();

	const [name, setName] = useState(Movies.name);
	const [poster, setPoster] = useState(Movies.poster);
	const [rating, setRating] = useState(Movies.rating);
	const [summary, setSummary] = useState(Movies.summary);
	const [trailer, setTrailer] = useState(Movies.trailer);

	let editMovieFn = () => {
		const newMovie = {
			name,
			poster,
			rating,
			summary,
			trailer,
		};

		// TO EDIT THE MOVIES
		fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/movies/${Movies.id}`, {
			method: "PUT",
			body: JSON.stringify(newMovie),
			headers: { "Content-Type": "application/json" },
		}).then(() => history.push("/movies"));
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
