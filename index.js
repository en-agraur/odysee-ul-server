const express = require("express");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 5000;

var aasa = fs.readFileSync("./apple-app-site-association");

app.get("/apple-app-site-association", function (req, res, next) {
  console.log("Am trimis");
  res.set("Content-Type", "application/json");
  res.status(200).send(aasa);
});

app.listen(PORT, () => {
  console.log("Am pornit serverul");
});