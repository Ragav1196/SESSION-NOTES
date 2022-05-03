// CREATING NEW LINK "USERS":3
import express from "express";
import { createUsers, genPassword, getUserByName } from "../movedFunctions.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router = express.Router();

router.route("/signup").post(async (request, response) => {
  const { username, password } = request.body;

  // HOW TO CHECK IF THE USERNAME IS ALREADY EXISTING IN THE DATABASE:2
  const userFromDB = await getUserByName(username);

  if (userFromDB) {
    response.status(400).send({ message: "Username already exists" });
    return;
  }

  // HOW TO CHECK IF THE PASSWORD IS STRONGER OR NOT:2
  if (password.length < 8) {
    response.status(400).send({ message: "Password must be longer" });
    return;
  }

  // CHECKING PASSWORD FOR CERTAIN PATTERN:2
  //    USING REGEX:
  if (
    !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password)
  ) {
    // ABOVE CODE MEANING:
    // !/^(?=.*[0-9]/* checks for atleast one character to be from 0 - 9*/)
    //    (?=.*[a-z]/* checks for atleast one character to be from a - z*/)
    //    (?=.*[A-Z]/* checks for atleast one character to be from A - Z*/)
    //    (?=.*[@!#%&]/* checks for atleast one character to be those special character*/)
    //    .{8,/* should have minimum 8 charaters */}$/g.test(password)
    response.status(400).send({ message: "Password pattern doesnt match" });
        /* status code 400 is for the validation failing */
    return;
  }

  const hashedPassword =
    await /* it is an async function so we need to do await */ genPassword(
      password
    );
  // STORING THE USERS:3
  const result = await createUsers({
    username /* if object key and value are same we can write like this(only specifying the key or value variable) */,
    password: hashedPassword,
  });
  response.send(result);
  /* sending the username and password object */
});

// CREATING LOGIN:
router.route("/login").post(async (request, response) => {
  /* we can do get method too but post method is considered more secure for login process */
  const { username, password } = request.body;

  // CHECKING IF THE USERNAME IS PRESENT IN THE DB OR NOT:
  const userFromDB = await getUserByName(username);

  if (!userFromDB) {
    response.status(401).send({ message: "Invalid credentials" });
    return;
  }

  // CHECKING IF THE PASSWORD MATCH FOR THAT USERNAME:2
  const storedPassword = userFromDB.password;
  const isPasswordMatch = await bcrypt.compare(password, storedPassword);
  /* 
      "bcrypt.compare" method returns a boolean value. if they both match it return true or else false 
      this method takes some time to return the value so we have to do async and await
  */

  if (isPasswordMatch) {
    // TO ISSUE TOKEN TO THE USER AFTER SUCCESSFUL LOGIN:2
    const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
    /* 
        for the first argument "sign" we need to give unique id so that we are using _id given by the mongoDB 
        for the second arguement we are gonna give a secret key. which only, we should know so we are adding that
            in the .env file
    */
    response.send({ message: "successful login", token: token });
    /* everytime user login they get different token which is taken care by the jwt */
  } else {
    response.status(401).send({ message: "Invalid credentials" });
    /* status code 401 is for authorization failure */
  }
});

export const usersRouter = router;
