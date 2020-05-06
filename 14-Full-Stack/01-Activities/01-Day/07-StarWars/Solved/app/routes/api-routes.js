// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {
    if (req.params.characters) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      db.Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      db.Character.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    const character = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    const routeName = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    db.Character.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    }).then(function(result) {
      res.status(204).end();
    });

    //fancier!
    // db.Character.create({
    //   routeName: routeName,
    //   ...character
    // }).then(function(result) {
    //   res.status(204).end();
    // });
  });
};
