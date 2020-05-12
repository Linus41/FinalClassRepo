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

  // GET route for getting all of the movies
  app.get("/api/movies", function(req, res) {
    db.Movie.findAll({
      include: [db.Genre, db.Actor]
    }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/movies/:id", function(req, res) {
    db.Movie.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Genre, db.Actor]
    }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // POST route for saving a new post
  app.post("/api/movies", function(req, res) {
    db.Movie.create(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // DELETE route for deleting movies
  app.delete("/api/movies/:id", function(req, res) {
    db.Movie.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // PUT route for updating movies
  app.put("/api/movies", function(req, res) {
    db.Movie.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });
};
