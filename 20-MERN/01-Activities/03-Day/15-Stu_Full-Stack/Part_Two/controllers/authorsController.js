const db = require("../models");

// Defining methods for the AuthorsController
module.exports = {
  findAll: function(req, res) {
    db.Author
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Author
      .findOne({where: {id: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Author
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Author
      .update(req.body, { where: { id: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Author
      .destroy({ where: { id: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
