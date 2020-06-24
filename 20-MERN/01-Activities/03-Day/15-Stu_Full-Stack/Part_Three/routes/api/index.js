const router = require("express").Router();
const bookRoutes = require("./books");
const authorRoutes = require("./authors");

// Book routes
router.use("/books", bookRoutes);
router.use("/authors", authorRoutes);

module.exports = router;
