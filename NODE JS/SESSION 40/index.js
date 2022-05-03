// 3
// NODE EXPRESS
/* 
        this is a framework for node js
        we can also build a server on our own fromn scratch
        or we can use this node e+xpress framework to build a server
        frameWork make life easier
        with just 10 lines of code we can build a server
*/

// INSTALLATION PROCEDURE FOR NODE EXPRESS
/* 
    for the node express to be installed we need a package json
    for that type "npm init" in the terminal
    press enter for everything to set the default values

    then type "npm i express"
 */

// STARTING A SERVER

// IMPORTING EXPRESS
const express = require("express");
const app = express();

// PORT FOR THE SERVER TO RUN
// unlike react running only in port number 3000, it can be anything for the node js to run
const PORT = 9000;

app.get("/" /* home path */, (request, response) /* call back */ => {
  response.send("Hello");
    // this is the one that is going to be visble in the server page
    // anything can be returned here array, number etc
});

app.listen(PORT, () /* callback to notify when the app is started */ =>
  console.log("App is started in", PORT));