const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
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
    texto: {
        type: String,
        required: true,
        maxlength: 120
    },
    date: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Comentario = mongoose.model("comentario", comentarioSchema);
module.exports = Comentario;