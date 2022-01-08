const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("express setting");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
