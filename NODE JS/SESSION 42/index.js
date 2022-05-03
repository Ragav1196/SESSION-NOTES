/* 
      first publish in vscode
      install MongoDB NodeJS driver module
        this driver helps to convert the code in a language that mongo can understand    
        LINK TO DOWNLOAD THE MODULE => https://www.npmjs.com/package/mongodb
*/

// const { request } = require("express");
/* 
    "require" is old syntax
    setup process to change the syntax to newer method like the one we do in react
      in "package.json" before "scripts" type ""type": "commonjs"" -> this is default one
        to change the syntax to newer method we need to change the "commonjs" to "module"  
        now we cant run with require. instead we should use import method
 */

// const { request } = require("express"); -> this syntax is for "type": "commonjs"
import express from "express"; /* -> this syntax is for "type": "module" */

import { MongoClient } from "mongodb"; /* -> to import mongo(from the module that we installed above) */

const app = express();

// const Movies = [
//   {
//     id: 101,
//     name: "Iron Man",
//     poster:
//       "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
//     rating: 7.9,
//     summary:
//       "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
//     trailer: "https://www.youtube.com/embed/8hYlB38asDY",
//     language: "english",
//     year: 2009,
//   },
//   {
//     id: 102,
//     name: "Iron Man 2",
//     poster:
//       "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg",
//     rating: 7.0,
//     summary:
//       "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
//     trailer: "https://www.youtube.com/embed/wKtcmiifycU",
//     language: "english",
//     year: 2010,
//   },
//   {
//     id: 103,
//     name: "Thor",
//     poster:
//       "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
//     rating: 7.0,
//     summary:
//       "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
//     trailer: "https://www.youtube.com/embed/JOddp-nlNvQ",
//     language: "english",
//     year: 2011,
//   },
//   {
//     id: 104,
//     name: "Captain America: The First Avenger",
//     poster:
//       "https://media.comicbook.com/2017/10/captain-america-the-first-avenger-movie-poster-marvel-cinematic--1038891.jpeg",
//     rating: 6.9,
//     summary:
//       "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
//     trailer: "https://www.youtube.com/embed/JerVrbLldXw",
//     language: "english",
//     year: 2011,
//   },
//   {
//     id: 105,
//     name: "Marvel's The Avengers",
//     poster:
//       "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg",
//     rating: 8.0,
//     summary:
//       "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
//     language: "english",
//     year: 2012,
//   },
//   {
//     id: 106,
//     name: "Iron Man 3",
//     poster:
//       "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg",
//     rating: 7.1,
//     summary:
//       "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
//     trailer: "https://www.youtube.com/embed/YLorLVa95Xo",
//     language: "english",
//     year: 2013,
//   },
// ];

const PORT = 9000;

// CONT. FROM DOWN
// MIDDLEWARE
app.use(express.json());
// express.json() -> inbuilt middleware
// it converts all the request in the app body to be parsed as JSON
// this method is called for all the requests that is made

const MONGO_URL = "mongodb://localhost";


// !CONT. FROM FLOW.TXT
// TO MAKE MONGO DB ONLINE
// const MONGO_URL = "mongodb+srv://ragavendiran:<password>@cluster0.vcsp8.mongodb.net";
/* use this url from atlas to connect Mongo DB online */

// mongodb+srv://ragavendiran:<password>@cluster0.vcsp8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//    this is the full url copied from the atlas website


/*
   WHY WE ARE NOT GIVING ANY PORT NUMBER? HOW MONGO KNOWS WHICH PORT TO RUN? 
    because it has default port number and it run there
    if it doesn't have then we need to mention the port number
    the default port number for mongo DB is  -> 27017
*/

async function createConnection() {
  // this function creates a connection to the mongo DB
  const client = new MongoClient(MONGO_URL);
  /* to get connected to mongo DB it will takes some time */

  await client.connect();
  console.log("Mongo DB Connected");
  /* 
      this creates the connect and it returns a promise
      as it takes time to connect we are doing async and await or .then
   */
  return client;
}

const client = await createConnection();
// to make it globally available

// GETTING MOVIES DATA FROM MONGO DB DATABASE
app.get("/", (request, response) => {
  response.send("HELLO");
});

app.get("/movies", async (request, response) => {
  console.log(request.query);

  {
    /* const { rating, year } = request.query; */
  }
  // destructuring is not needed as the mongo db command directly takes in the object

  // MONGO DB COMMAND WILL BE:
  //    db.movies.find({language: "tamil", rating: 8})
  /*        as it takes object directly destructuring is not needed */

  const filter = request.query;

  // filter.rating = parseInt(filter.rating);
  // filter.year = parseInt(filter.year);

  // console.log(filter.rating, filter.year);

  const filterMovies = await client
    .db("session38")
    .collection("movies")
    .find(filter)
    .toArray(); /* -> explained about "toArray" below */

  {
    /* let filterMovies = Movies;
 
  if (rating) {
    filterMovies = filterMovies.filter((mv) => mv.rating > rating);
  }

  if (year) {
    filterMovies = filterMovies.filter((mv) => mv.year == year);
  } */
  }

  // MONGO DB SHELL COMMAND FOR GETTING ALL THE MOVIES
  //    db.movies.find({})

  {
    /* const filterMovies = await client
    .db("session38")
    .collection("movies")
    .find({}) */
  }
  // we dont get any data in postman as the data is in cursor data type
  // find always returns a cursor
  // here we dont want a cursor but we want a array
  // for that we can use "toArray()"

  {
    /* const filterMovies = await client
    .db("session38")
    .collection("movies")
    .find({})
    .toArray(); */
  }
  // now we will get data displayed on the postman as it is array now not cursor

  // CURSOR:
  /* 
        cursor is nothing but pagination
        in mongo db it gives top 20 documents
    */

  response.send(filterMovies);
});

// TO UNDERSTAND THE CURSOR MORE WE ARE GONNA CREATE MORE MOVIES:
app.post("/movies", async (request, response) => {
  /* 
      post is for creating data 
      we send the data in body of the request
  */
  const data = request.body;
  {
    /* console.log(data); */
  }

  // MONGO DB COMMAND FOR CREATING DATA:
  //    db.movies.insertMany(data)

  const result = await client
    .db("session38")
    .collection("movies")
    .insertMany(data);

  /* 
    it prints as undefined
    this is because the node JS dont know that it is a JSON data
    so we need to inform node js
    this informing can be done for every request or we can do it one time for all the request

    for this one time setup we are gonna use "middleware"
    !CONT. TO UP
  */

  response.send(result);
});
/* in postman select "get all movies" => change get to post => select body
      => select raw => select JSON from drop down menu

    we can easily convert javascript object to JSON data type
    => create a file with .json extension
    => copy and paste the javascript object and use the prettier to format the document
    this converts the JS object to JSON data type

    or else we can paste that object in chrome console as variable x
    then do "JSON.stringify(x)"

    now that JSON data paste in the post man

    after that click send button and the data inside the postman body will be added to mongoDB database
      that we can check in the compass
*/

{
  app.get("/movies/:id", async (request, response) => {
    console.log(request.params);
    const { id } = request.params;

    const movie = await client
      /* 
        since client is an async function it take some time to get data from database
        so we are doing await and async
     */
      .db("session38" /* db name */)
      .collection("movies")
      .findOne({ id: id });

    // MONGO DB SHELL COMMAND FOR GETTING ALL THE MOVIES:
    //    db.movies.findOne({id: "102"})
    {
      /* .findOne({ id: "102" }); */
    }
    /*       
        this above code will only give movie with "id: 102" for every query
        to get the appropriate movie according to users query in the url
        we need to change the "id: 102" to "id: id(destructured from request params)"
    */

    {
      /* const movie = Movies.find((mv) => mv.id == id); */
    }    
    movie
      ? response.send(movie)
      : response.status(404).send({ Message: "No matching movie found" });
  });
}

app.listen(PORT, () => console.log("App is started in", PORT));
