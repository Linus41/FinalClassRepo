const db = require("../../models");
const router = require("express").Router();

router.get("/", function(req, res) {
  db.Post.findAll(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.get("/:id", function(req, res) {
  db.Post.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.post("/", function(req, res) {
  db.Post.create({
    UserId: req.user.id,
    ...req.body
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.put("/:id", function(req, res) {
  db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.delete("/:id", function(req, res) {
  db.Post.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
