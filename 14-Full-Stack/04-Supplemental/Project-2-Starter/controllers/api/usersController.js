const db = require("../../models");
const router = require("express").Router();

router.get("/", function(req, res) {
  db.User.findAll(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.get("/:id", function(req, res) {
  db.User.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.post("/", function(req, res) {
  db.User.scope("withPassword")
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.put("/:id", function(req, res) {
  db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.delete("/:id", function(req, res) {
  db.User.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
