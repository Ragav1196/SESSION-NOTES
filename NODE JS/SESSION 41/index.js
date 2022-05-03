// FOLDER NAME GIVEN WITH SEMI COLON SINCE THERE WAS SOME ISSUE IN ADDING TO ".gitignore" AS "SESSION 41" ALONE
// PREVIOUS CLASS TASK
const { request } = require("express");
const express = require("express");
const app = express();

const Movies = [
  {
    id: 101,
    name: "Iron Man",
    poster:
      "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
    rating: 7.9,
    summary:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    trailer: "https://www.youtube.com/embed/8hYlB38asDY",
    language: "english",
    year: 2009,
  },
  {
    id: 102,
    name: "Iron Man 2",
    poster:
      "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg",
    rating: 7.0,
    summary:
      "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    language: "english",
    year: 2010,
  },
  {
    id: 103,
    name: "Thor",
    poster:
      "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
    rating: 7.0,
    summary:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    trailer: "https://www.youtube.com/embed/JOddp-nlNvQ",
    language: "english",
    year: 2011,
  },
  {
    id: 104,
    name: "Captain America: The First Avenger",
    poster:
      "https://media.comicbook.com/2017/10/captain-america-the-first-avenger-movie-poster-marvel-cinematic--1038891.jpeg",
    rating: 6.9,
    summary:
      "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
    trailer: "https://www.youtube.com/embed/JerVrbLldXw",
    language: "english",
    year: 2011,
  },
  {
    id: 105,
    name: "Marvel's The Avengers",
    poster:
      "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg",
    rating: 8.0,
    summary:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    language: "english",
    year: 2012,
  },
  {
    id: 106,
    name: "Iron Man 3",
    poster:
      "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg",
    rating: 7.1,
    summary:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    trailer: "https://www.youtube.com/embed/YLorLVa95Xo",
    language: "english",
    year: 2013,
  },
];
//  need to display the above array of movies
/* 
    the above data is a javascript object 
    the server needs the JSON data only but it is not necessary to convert into JSON data
    because that conversation job is done by the node
 */

const PORT = 9000;

app.get("/", (request, response) => {
  response.send("HELLO");
});

{
  // app.get("/movies", (request, response) => {
  //   response.send(Movies);
  //   // movies is displayed on the server using the above method
  // });
}

// QUERY PARAMETERS:
// CONTINUED FROM DOWN
// TO GET MOVIES GREATER THAN RATING SPECIFIED IN THE URL
{
  // app.get("/movies", (request, response) => {
  //   console.log(request.query);
  //   /*
  //   to print characters after question mark
  //   it prints as an object
  // */
  //   const { rating } = request.query;
  //   const movieFilterByRating = Movies.filter((mv) => mv.rating > rating);
  //   rating ? response.send(movieFilterByRating) : response.send(Movies);
  //   /* if rating is present then it will filter it and print or else it will print entire "Movies" */
  // });
}

// TO GET MOVIES GREATER THAN RATING AND ALSO THE YEAR OF RELEASE SPECIFIED IN TH URL
app.get("/movies", (request, response) => {
  console.log(request.query);

  const { rating, year } = request.query;

  let filterMovies = Movies;
  /* this will make the Movies to get printed when there is no rating and year */

  if (rating) {
    filterMovies = filterMovies.filter((mv) => mv.rating > rating);
  }

  if (year) {
    filterMovies = filterMovies.filter((mv) => mv.year == year);
  }

  response.send(filterMovies);
});

// TO GET THE SELECTED MOVIES ALONE USING THEIR ID
{
  // app.get(
  //   "/movies/:id" /* ":id" is given to take the character given in url as a variable */,
  //   (request, response) => {
  //     console.log(
  //       request.params /* ":id" variable is console logged using the params */
  //     );
  //     const { id } = request.params;
  //     const movie = Movies.filter(
  //       (mv) => mv.id == id
  //     ) /* this will give array of object */[0]; /* this gives us the object only */
  //     response.send(movie);
  //   }
  // );
  // there is no hooks in node
  // but from the "request" we can get the params
  // params is an object
}

// SIMPLER METHOD FOR THE ABOVE ONE USING "FIND" METHOD:
// WORKING OF FIND METHOD
{
  // [2, 4, 5]
  //   .find((x) => x === 4)
  //   [
  //     // returns 4
  //     (2, 4, 5)
  //   ].find((x) => x === 100);
  // // returns undefined
}

// APPLYING ON THE ABOVE GET METHOD
{
  // app.get("/movies/:id", (request, response) => {
  //   console.log(request.params);
  //   const { id } = request.params;
  //   const movie = Movies.find((mv) => mv.id == id);
  //   response.send(movie)
  // });
  // //  when there is no matching id is given in the url then blank page will be shown
  // //      if console logged it will print "undefined"
}

// HANDLING THE BLANK PAGE
{
  app.get("/movies/:id", (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const movie = Movies.find((mv) => mv.id == id);
    movie
      ? response.send(movie)
      : response
          .status(404) /* to get the status 404 in the network page */
          /* whatever the status number we want we can add it here */
          .send({ Message: "No matching movie found" });
  });
}

// QUERY PARAMETERS:
//    in url characters after question mark is called as query parameters
// CONTINUED UP

app.listen(PORT, () => console.log("App is started in", PORT));

// TO MAKE SERVER TO RESTART AUTOMATICALLY WHEN CHANGE MADE
//    type "npm install --save-dev nodemon" in the terminal
/* 
        here it is dev dependency so this package will be used only when it is under development
        not in the production

*/

// then add this object "start": "node index.js" in the package.json under "scripts"
// this one we will use in future
// this will be started using "npm run start"
// this can also be started using npm start
// this one works during production
// then add the object "dev": "nodemon index.js" in the package.json after the "start"
// now start the server by saying " npm run dev"
// this one works during developing

// POSTMAN SETUP
/* 
      postman is very much useful for testing our api
      in chrome we dont get that many options that is available in postman 
    */
