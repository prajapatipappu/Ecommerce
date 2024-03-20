//  importing the required package
const express = require('express');

// server connecting on port 
const port = 8004;
// configure passport
const passport=require('passport')
// configure passport-jwt
const Strategy=require('./config/passport-jwt')
// configure mongoose
const db=require('./config/mongoose')

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(express.urlencoded())

// using the routes
app.use("/",require("./routes"));

//  its helps to  starting the server
app.listen(port, function(err){
    if (err){
        console.log("Error in running in the server", err);
    }
    console.log("yup! server is running on port:",port);
})