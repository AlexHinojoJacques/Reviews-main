const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  _usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario",
  },
  name: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  date: {
    type: String,
  }
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;