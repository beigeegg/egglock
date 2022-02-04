const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root/egg",
  password: "0000",
  database: "user",
});

router.post("/signup", (req, res) => {
  console.log("사인업!");
});

module.exports = router;
