const mongoose = require("mongoose");
const User = require("./models/users");

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

User.create(
  {
    name: "Izabela Zajecka",
    body: "Wife",
  },
  (error, User) => {
    console.log(error, User);
  }
);

User.create(
  {
    name: "whitehat4u",
    body: "Company",
  },
  (error, User) => {
    console.log(error, User);
  }
);

User.find(
  {
    name: /Ju/,
  },
  (error, User) => {
    console.log(error, User);
  }
);
