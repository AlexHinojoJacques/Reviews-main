const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
  bio: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  date: {
    type: String,
  },
  _adopcion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "formato_adopcion",
  },
  _imgFU: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "imagen",
  },
});

const follow = mongoose.model("follow_up", followSchema);
module.exports = follow;