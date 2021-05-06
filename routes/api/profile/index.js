const router = require("express").Router();
const ProfileRoutes = require("./profile");

// User routes
router.use("/profile", ProfileRoutes);

module.exports = router;