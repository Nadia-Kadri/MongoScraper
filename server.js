const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

//Passport
require("dotenv").config();
const session = require("express-session");
const passport = require("./config/passport");
app.use(session({ secret: process.env.PASSPORT_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const options = {
  useNewUrlParser: true,
  useFindAndModify: false
};
mongoose.connect(process.env.MONGODB_URI || "mongodb://mongoscraper:mongoscraper1@ds021289.mlab.com:21289/heroku_swr9bhk7", options); 

// ROUTES
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});