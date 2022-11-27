const mongoose = require('mongoose');

const formatoreviewSchema = new mongoose.Schema({
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
    fullName: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
        maxlength: 140
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    hasFollowUp: {
        type: Boolean,
        default: false
    }
});

const formatoreview = mongoose.model("formato_review", formatoreviewSchema);
module.exports = formatoreview;