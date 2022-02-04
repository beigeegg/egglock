const express = require("express");
const app = express();
const router = express.Router();
const signup = require("./signup/signup");

router.use("/signup", signup);

module.exports = router;
