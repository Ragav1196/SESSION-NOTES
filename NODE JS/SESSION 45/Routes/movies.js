import express from "express";
import { auth } from "../Middleware/Auth.js";

import {
  getMovies,
  createMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
} from "../movedFunctions.js";

const router = express.Router();

router
  .route("/")
  // CUSTOM MIDDLEWARE:
  .get(auth, async (request, response) => {
    /* 
        only when the auth passes the function will be called or else this whole steps below will not start 
        this "auth" we can add to every required the path so without token user cannot go to that particular path too
    */
    console.log(request.query);

    const filter = request.query;

    const filterMovies = await getMovies(filter);

    response.send(filterMovies);
  })
  .post(auth, async (request, response) => {
    const data = request.body;

    const result = await createMovies(data);

    response.send(result);
  });

router
  .route("/:id")
  .get(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;

    const movie = await getMovieById(id);

    movie ? response.send(movie) : response.send(movie);
  })
  .delete(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;

    const result = await deleteMovieById(id);

    result.deletedCount > 0
      ? response.send(result)
      : response.status(404).send({ Message: "No matching movie found" });
  })
  .put(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const data = request.body;

    const result = await updateMovieById(id, data);

    const movie = await getMovieById(id);

    response.send(movie);
  });

export const moviesRouter = router;
