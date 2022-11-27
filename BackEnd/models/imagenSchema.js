const mongoose = require('mongoose');

const ImagenSchema = new mongoose.Schema({
    archivo: {
        type: String,
        required: true,
    }
});

const Imagen = mongoose.model("imagen", ImagenSchema);
module.exports = Imagen;