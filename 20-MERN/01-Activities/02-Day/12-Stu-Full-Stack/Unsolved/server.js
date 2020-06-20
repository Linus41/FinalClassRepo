const express = require("express");
const mongoose = require("mongoose");

const tweetRoutes = require("./controllers/tweetController");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Attaching the tweet routes
app.use(tweetRoutes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/day2");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
