import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./Routes/movies.js";
import cors from "cors";
import { usersRouter } from "./Routes/users.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());

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

// CREATING NEW LINK "USERS":2
app.use("/users", usersRouter);
/* whenever "users" come in url this method will go to the "usersRouter" */
{
  /* 
    async function genPassword(Password) {
      const NO_OF_ROUNDS = 10;
      const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
      const hashedPassword = await bcrypt.hash(Password, salt);
      return hashedPassword;
    }
*/
}
/* moved the above function to movedFunctions.js */

app.listen(PORT, () => console.log("App is started in", PORT));
