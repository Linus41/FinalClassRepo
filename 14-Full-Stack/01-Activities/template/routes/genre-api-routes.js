// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the genres
  app.get("/api/genres", function(req, res) {
    db.Genre.findAll({
     // include: [db.Movie]
    }).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/genres/:id", function(req, res) {
    db.Genre.findOne({
      where: {
        id: req.params.id
      },
     // include: [db.Movie]
    }).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });

  // POST route for saving a new post
  app.post("/api/genres", function(req, res) {
    db.Genre.create(req.body).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });

  // DELETE route for deleting genres
  app.delete("/api/genres/:id", function(req, res) {
    db.Genre.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });

  // PUT route for updating genres
  app.put("/api/genres", function(req, res) {
    db.Genre.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });
};
