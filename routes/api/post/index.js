const postRouter = require("express").Router();
const postRoutes = require("./posts");
// const userRoutes = require("./user");

// Post routes
postRouter.use("/posts", postRoutes);
// router.use("/user", userRoutes);

module.exports = postRouter;
