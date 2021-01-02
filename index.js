const express = require("express");
const path = require("path");

const app = new express();

app.use(express.static("public"));

const port = 4000;

app.listen(port, () => {
  console.log("App is listening in the port 4000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/public/index.html"));
});
