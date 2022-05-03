import { client } from "./index.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

function updateMovieById(id, data) {
  return client
    .db("session38")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
function createMovies(data) {
  return client.db("session38").collection("movies").insertMany(data);
}

// STORING THE USERS:2
function createUsers(data) {
  return client.db("session38").collection("users").insertOne(data);
}

function getMovies(filter) {
  return client.db("session38").collection("movies").find(filter).toArray();
}
async function deleteMovieById(id) {
  return await client
    .db("session38")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}

function getMovieById(id) {
  return client
    .db("session38")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}

// HOW TO CHECK IF THE USERNAME IS ALREADY EXISTING IN THE DATABASE:3
function getUserByName(username) {
  return client
    .db("session38")
    .collection("users")
    .findOne({ username: username });
}

async function genPassword(Password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(Password, salt);
  return hashedPassword;
}

export {
  getMovies,
  createMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
  genPassword,
  createUsers,
  getUserByName,
};
