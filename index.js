const express = require("express");

const app = new express();

const port = 4000;

app.listen(port, () => {
  console.log("App is listening in the port 4000");
});
