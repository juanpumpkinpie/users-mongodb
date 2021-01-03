const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = new express();

app.use(express.static("public"));

const port = 4000;

app.listen(port, () => {
  console.log("App is listening in the port 4000");
});

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/public/index.html"));
});
