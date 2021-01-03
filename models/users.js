const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  body: String,
});

const User = mongoose.model("User", UsersSchema);
module.exports = User;
