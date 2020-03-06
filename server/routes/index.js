const express = require("express");
const router = express.Router();
const { login } = require("../controllers/login");
const { register } = require("../controllers/register");

// middleware
const { auth } = require("../middleware/auth");

//home
router.get("/", (req, res) => {
  res.send("<strong>Hello DumbWays Rumah Tengah cuy</strong>");
});

// auth
router.post("/login", login);
router.post("/register", register);

module.exports = router;
