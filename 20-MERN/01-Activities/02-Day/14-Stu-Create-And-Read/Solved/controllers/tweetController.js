const db = require("../models");
const router = require("express").Router();

/**
 * Tweet - Read All
 */
router.get("/api/tweets", function (req, res) {
    db.Tweet
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Tweet - Read One
 */
router.get("/api/tweets/:id", function (req, res) {
    db.Tweet
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/** 
 * Tweet - Create
 */
router.post("/api/tweets/", function (req, res) {
    db.Tweet
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Tweet - Update
 */
router.put("/api/tweets/:id", function (req, res) {
    db.Tweet
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Tweet - Delete
 */
router.delete("/api/tweets/:id", function (req, res) {
    db.Tweet
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Defining methods for the tweetsController
module.exports = router;
