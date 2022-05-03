import { Movies } from "./Movies";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export function MoviesList() {
	const history = useHistory();

	const [movies, SetMovies] = useState([]);

	const getMovies = () => {
		fetch("https://616bc2b216c3fa00171717bf.mockapi.io/movies", {
			method: "GET",
		})
			.then((data) => data.json())
			.then((mvs) => SetMovies(mvs));
	};

	// FETCHING DATA FROM API:
	useEffect(getMovies, []);

	const deleteMovie = (id) => {
		fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/movies/${id}`, {
			method: "DELETE",
		}).then(() => getMovies());
	};

	return (
		<div className="wholeContent">
			{movies.map(({ name, poster, rating, summary, id }, index) => (
				<Movies
					key={id}
					name={name}
					poster={poster}
					rating={rating}
					summary={summary}
					id={id}
					deleteButton={
						<button
							onClick={() => {
								deleteMovie(id);
							}}
						>
							Delete
						</button>
					}
					// TO EDIT MOVIES
					editButton={
						<button onClick={() => history.push("/movies/edit/" + id)}>
							Edit
						</button>
					}
				/>
			))}
		</div>
	);
}
