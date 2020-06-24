const router = require("express").Router();
const authorsController = require("../../controllers/authorsController");

// Matches with "/api/authors"
router.route("/")
  .get(authorsController.findAll)
  .post(authorsController.create);

// Matches with "/api/authors/:id"
router
  .route("/:id")
  .get(authorsController.findById)
  .put(authorsController.update)
  .delete(authorsController.remove);

module.exports = router;
