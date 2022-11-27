const ComentarioFU = require("../models/comentarioFUSchema");

exports.comentarioFU_create = async (req, res) => {
  try {
    const { body } = req;
    let newComentarioFU = new ComentarioFU(body);

    await newComentarioFU
      .save()
      .then((newObject) => {
        console.log("Success!", newObject);
        res.send(newObject);
      })
      .catch((err) => {
        console.error("Error!", err);
        res.send({ message: "No se creo el comentario." });
      });
  } catch (err) {
    res.send({ message: "No se creo el comentario." });
  }
};

exports.comentarioFU_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const comentarioFUdb = await ComentarioFU.findById(id);

  if (comentarioFUdb && comentarioFUdb._usuario == body.usuario) {
    const data = await ComentarioFU.findOneAndUpdate(
      { _id: id },
      { texto: body.texto },
      { returnOriginal: false }
    );
    res.send({ message: "El comentario se actualizado exitosamente" });
  } else {
    res.send({ message: "El comentario que se intentó actualizar no existe" });
  }
};

exports.comentarioFU_delete = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const comentarioFUdb = await ComentarioFU.findById(id);

  if (comentarioFUdb && comentarioFUdb._usuario == body._usuario) {
    // Delete
    await ComentarioFU.findOneAndUpdate({ _id: id }, { isActive: false });
    res.send({ message: "Comentario eliminado exitosamente" });
  } else {
    // Error msg
    res.send({ message: "No se encontro el comentario ingresado" });
  }
};

exports.comentarioFU_getById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await ComentarioFU.findById(id); //.populate('_students');

  if (data && data.isActive == true && data._usuario == body) {
    res.send(data);
  } else {
    res.send({ message: "No se encontro el comentario ingresado" });
  }
};

exports.comentarioFU_getAll = async (req, res) => {
  try {
    const { followUpId } = req.params;
    const data = await ComentarioFU.find({
      _followUp: followUpId,
      isActive: true,
    }).populate({
      path: "_usuario",
      select: ["_imgUsuario", "name"],
      populate: {
        path: "_imgUsuario",
        select: "archivo",
      },
    });

    if (data) {
      res.send(data);
    } else {
      res.send({ message: "No se encontraron los comentarios de este post." });
    }
  } catch (err) {
    res.send({ message: "No se encontraron los comentarios de este post." });
  }
};