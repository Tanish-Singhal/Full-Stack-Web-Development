const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/dataassociation");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'     // write the reference of the databse from which you want to take the ID
  }],
  dp: {
    type: String,   // as dp is stored as the file path not the image format
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;