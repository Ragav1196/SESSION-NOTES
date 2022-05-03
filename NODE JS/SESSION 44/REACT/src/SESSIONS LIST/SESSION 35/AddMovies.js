/* import { useState } from "react"; */
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { API_URL } from "./globalConstants";

export function AddMovies() {
  const history = useHistory();

  let AddMovieFn = (newMovie) => {
    fetch(`${API_URL}/movies`, {
      method: "POST",
      body: JSON.stringify([newMovie]),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/movies"));
  };

  const formValidationSchema = yup.object({
    name: yup.string().required("Why not fill this name"),
    poster: yup
      .string()
      .required("Why not fill this poster")
      .min(4, "Need a bigger poster"),
    rating: yup
      .number()
      .required("Why not fill this rating")
      .min(0, "Need a bigger rating")
      .max(10, "Too much rating"),
    summary: yup
      .string()
      .required("Why not fill this summary")
      .min(20, "Need a bigger summary"),
    trailer: yup
      .string()
      .required("Why not fill this trailer")
      .min(4, "Need a bigger trailer"),
  });

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },

      validationSchema: formValidationSchema,

      onSubmit: (newMovie) => {
        AddMovieFn(newMovie);
      },
    });

  return (
    <form onSubmit={handleSubmit} className="inputFields">
      <TextField
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        name="name"
        label="name"
        id="name"
        placeholder="Enter A Movie Name"
        variant="standard"
        helperText={errors.name && touched.name && errors.name}
        error={errors.name && touched.name}
      />      
      <TextField
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        name="poster"
        label="poster"
        id="poster"
        placeholder="Enter A Movie Poster URL"
        variant="standard"
        helperText={errors.poster && touched.poster && errors.poster}
        error={errors.poster && touched.poster}
      />      
      <TextField
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        name="rating"
        label="rating"
        id="rating"
        placeholder="Enter A Movie Rating"
        variant="standard"
        helperText={errors.rating && touched.rating && errors.rating}
        error={errors.rating && touched.rating}
      />      
      <TextField
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        name="summary"
        label="summary"
        id="summary"
        placeholder="Enter A Movie Summary"
        variant="standard"
        helperText={errors.summary && touched.summary && errors.summary}
        error={errors.summary && touched.summary}
      />      
      <TextField
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        name="trailer"
        label="trailer"
        id="trailer"
        placeholder="Enter A Movie Trailer"
        variant="standard"
        helperText={errors.trailer && touched.trailer && errors.trailer}
        error={errors.trailer && touched.trailer}
      />      
      <button type="submit">Add Movie</button>
    </form>
  );
}
