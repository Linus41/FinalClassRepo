const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Post - Read All
 */
router.get("/", isAuthenticated, function (req, res) {
  db.Post.find({})
    .populate("user")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Post - Read One
 */
router.get("/:id", isAuthenticated, function (req, res) {
  db.Post.findById(req.params.id)
    .populate("user")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * Post - Create
 * Notice how we are also taking in the User Id! Important!
 */
router.post("/", isAuthenticated,  function (req, res) {
  if(req.user === null || req.user.id === null){
    res.status(401).json("NOT AUTHORIZED");
  }
  db.Post.create({
    user: req.user._id,
    ...req.body
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Post - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.Post.findByIdAndUpdate(params.id, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Post - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.Post.findByIdAndDelete(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
