const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3080;
const app = new express();
const User = require("./models/users.js");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.listen(port, () => {
  console.log(`Server is listening in the port ${port}`);
});

mongoose.connect(
  "mongodb+srv://juan-admin:<password>@cluster0.k81xt.mongodb.net/users?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

app.post("/post/store", async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
