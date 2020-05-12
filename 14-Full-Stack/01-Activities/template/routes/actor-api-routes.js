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

  // GET route for getting all of the actors
  app.get("/api/actors", function(req, res) {
    db.Actor.findAll({
      include: [db.Movie]
    }).then(function(dbActor) {
      res.json(dbActor);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/actors/:id", function(req, res) {
    db.Actor.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Movie]
    }).then(function(dbActor) {
      res.json(dbActor);
    });
  });

  // POST route for saving a new post
  app.post("/api/actors", function(req, res) {
    db.Actor.create(req.body).then(function(dbActor) {
      res.json(dbActor);
    });
  });

  // DELETE route for deleting actors
  app.delete("/api/actors/:id", function(req, res) {
    db.Actor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbActor) {
      res.json(dbActor);
    });
  });

  // PUT route for updating actors
  app.put("/api/actors", function(req, res) {
    db.Actor.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbActor) {
      res.json(dbActor);
    });
  });
};
