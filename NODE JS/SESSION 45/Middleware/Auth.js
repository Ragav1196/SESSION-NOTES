// CUSTOM MIDDLEWARE:
// it check if the token is valid or not

import jwt from "jsonwebtoken";

export const auth = (request, response, next) => {
  try {
    const token = request.header("x-auth-token");
    console.log(token)
    /* we send the token as part of header */

    // VERIFYING IF THE TOKEN IS SAME OR NOT:2
    jwt.verify(token, process.env.SECRET_KEY);

    // TO ALLOW THE FUNCTIONS AFTER AUTH TO BE EXECUTED:
    next();
    // this allows the function where the auth is used to execute
  } catch (err) {
    response.status(401).send({ error: err.message });
  }
  /* we are doing try and catch methode to show only the error message no a big parah */
};

// this auth we gonna use in the movies.js.

