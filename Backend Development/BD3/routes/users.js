const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");

// Database (Amazon)                    => Database
// Services Data (Amazon Prime Data)    => Model or Collection
// users data who use the service       => Schema or Document

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
});

module.exports = mongoose.model("user", userSchema);
// it will create a collection with name of "user"
// and it will also make a schema with name of "userSchema"