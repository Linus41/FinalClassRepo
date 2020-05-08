const router = require("express").Router();
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);

module.exports = router;
