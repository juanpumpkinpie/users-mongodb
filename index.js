const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3080;
const app = new express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.listen(port, () => {
  console.log(`Server is listening in the port ${port}`);
});

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

app.post("/post/store", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
