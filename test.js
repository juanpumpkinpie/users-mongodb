const mongoose = require("mongoose");
const User = require("./models/users");

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

User.create(
  {
    name: "Juan Pumpkinpie",
    body: "Admin",
  },
  (error, User) => {
    console.log(error, User);
  }
);

//generate:
// null {
//     _id: 5ff1f353e8bdf4c9a4d66cf8, Id
//     name: 'Juan Pumpkinpie',
//     body: 'Admin',
//     __v: 0
//   }
