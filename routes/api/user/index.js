const useRouter = require("express").Router();
const userRoutes = require("./user");

// User routes
useRouter.use("/user", userRoutes);

module.exports = useRouter;
