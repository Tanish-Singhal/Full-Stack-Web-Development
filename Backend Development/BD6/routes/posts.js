const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/dataassociation");

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'   // write the reference of the databse from which you want to take the ID
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;