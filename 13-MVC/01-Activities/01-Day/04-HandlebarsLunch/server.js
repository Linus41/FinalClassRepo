// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine, with the default layout set to 'main'
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var lunches = [
  {
    name: "lightlunch",
    food: ["Beet & Goat Cheese Salad", "Minestrone soup"],
    calories: 500
  }, {
    name: "heavylunch",
    food: ["Pizza", "Two double veggie burgers", "fries with a Big Gulp"],
    calories: 1500
  },
  {
    name: "healthylunch",
    food: ["RX Bar", "Kale Smoothie"],
    calories: 400
  }
];

// Routes
app.get("/weekday", function(req, res) {
  res.render("index", lunches[0]);
});

app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
});

app.get("/lunches", function(req, res) {
  res.render("all-lunches", {
    foods: lunches,
    eater: "david"
  });
});

app.get("/lunch/:name", function(req, res) {
  console.log(lunches)
  let lunch =  lunches.filter(lunch => lunch.name === req.params.name);
  if(lunch.length > 0){
    res.render("index", lunch[0]);
  }
  else {
    res.render("error")
  }
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
