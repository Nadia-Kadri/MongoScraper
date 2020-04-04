const router = require("express").Router();
const userRoutes = require("./user");
const articleRoutes = require("./article");
const noteRoutes = require("./note");

// Routes
router.use("/user", userRoutes);
router.use("/article", articleRoutes);
router.use("/note", noteRoutes);

module.exports = router;