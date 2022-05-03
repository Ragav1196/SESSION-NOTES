import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";
import bcrypt from "bcrypt";

// METHOD TO INFORM THE NODE:2
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// METHOD TO INFORM THE NODE:3
app.use(cors());
/* third party middleware */
// for all the requests this cors is used
// cors allow any origin

app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);

  await client.connect();
  console.log("Mongo DB Connected");

  return client;
}

export const client = await createConnection();

app.get("/", (request, response) => {
  response.send("HELLO");
});

app.use("/movies", moviesRouter);

// CONVERTING INTO A HASHED PASSWORDS:
async function genPassword(Password) {
  const NO_OF_ROUNDS = 10;
  const salt =
    await /* awaiting bcoz it take some time to generate the salt */ bcrypt.genSalt(
      NO_OF_ROUNDS
    );
  /* 
      to generate the salt value. arguement inside is the number of rounds for the salt(basically how long the salt value to be)
        to be generated 
  */
  const hashedPassword = await bcrypt.hash(Password, salt);
  /* this one gives the hashed password */
}
/* 
    the retun value from this function will be the hashed password 
    eg:- output => $2b$(what kind of algotithm)10$(how many rounds of salt)ElV00jfN5NQSjAVz/N8rqes2iOHfnxIdzElJGYUUe0KMBkYEuxEta(salt + hashed password)
    !not all the hash value should be 10 digit, it can be more than that too
*/

app.listen(PORT, () => console.log("App is started in", PORT));
