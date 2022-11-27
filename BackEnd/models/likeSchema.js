const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    _usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    },
    _post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Like = mongoose.model("like", LikeSchema);
module.exports = Like;