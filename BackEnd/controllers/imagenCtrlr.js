const Imagen = require('../models/imagenSchema');
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});

exports.imagen_create = async (req, res) => {
    try {
        const { body, file } = req;
    
        if (!file) {
            res.status(400).send({ code: "400", message: "Archivo no cargado." });
        }
        
        const bucket = storage.bucket(process.env.GCLOUD_BUCKET_URL);
        const blob = bucket.file(file.originalname);
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: file.mimeType,
            },
        });

        blobStream.on("error", (err) => next(err));
        blobStream.on("finish", async () => {
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`
            let newImagen = new Imagen({ ...body, archivo: publicUrl });
        
            await newImagen.save()
            .then((newObject) => {
                console.log("Success!", newObject);
                //res.send({ code: "", message: "" })
                res.send(newObject);
            })
            .catch((err) => {
                console.error("Error!", err);
                res.send(err.errors);
            });
        });

        blobStream.end(file.buffer);
    }
    catch (err) {
        res.status(500).send({ code: "500", message: "Ocurrió un error inesperado." });
    }
};

exports.imagen_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const imagendb = await Imagen.findById(id);

    if (imagendb) {
        const data = await Imagen.findOneAndUpdate( {_id: id}, body, { returnOriginal: false });
        res.send({ message: "Imagen actualizado exitosamente" });
    }
    else {
        res.send({ message: "La imagen que se intentó actualizar no existe"});
    }
};

exports.imagen_getById = async (req, res) => {
    const { id } = req.params;

    const data = await Imagen.findById(id)//.populate('_students');

    if (data && data.isActive == true) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro la imagen ingresado" });
    }
};