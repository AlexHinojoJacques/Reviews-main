const FormatoReview = require("../models/formatoreviewSchema");

exports.formato_review_create = async (req, res) => {
  try {
    const { body } = req;

    let newFormatoReview = new FormatoReview(body);
    await newFormatoReview
      .save()
      .then((newObject) => {
        console.log("Success!", newObject);
        res.send(newObject);
      })
      .catch((err) => {
        console.error("Error!", err);
        res.send({ message: "No se creo la adopcion " });
      });
  } catch (err) {
    res.send({ message: "No se creo la adopcion " });
  }
};

exports.formato_review_update = async (req, res) => {
  try {
    const { solicitudId } = req.params;
    const { body } = req;
  
    const formato_reviewdb = await FormatoReview.findById(solicitudId);
  
    if (formato_reviewdb) {
      const data = await FormatoReview.findOneAndUpdate(
        { _id: solicitudId },
        body,
        { returnOriginal: false }
      );
  
      if (data) {
        res.send(data);
      } else {
        res.send({ message: "No se pudo actualizar la solicitud." });
      }
    } else {
      res.send({ message: "No se pudo encontrar la solicitud." });
    }
  }
  catch (err) {
    res.send({ message: "No se pudo actualizar la solicitud." });
  }
};

exports.formato_review_delete = async (req, res) => {
  try {
    const { solicitudId } = req.params;
  
    const formato_reviewdb = await FormatoReview.findById(solicitudId);
  
    if (formato_reviewdb) {
      // Delete
      const data = await FormatoReview.findOneAndUpdate(
        { _id: solicitudId },
        { isActive: false },
        { returnOriginal: false }
      );

      if (data) {
        res.send(data);
      }
      else {
        res.send({ message: "No se pudo anular la solicitud" });  
      }
    } else {
      res.send({ message: "No se pudo encontrar la solicitud" });
    }
  }
  catch (err) {
    res.send({ message: "No se pudo anular la solicitud" });
  }
};

exports.formato_review_getById = async (req, res) => {
  const { id } = req.params;

  const data = await FormatoReview.findById(id); //.populate('_students');

  if (data && data.isActive == true) {
    res.send(data);
  } else {
    res.send({ message: "No se encontro el post ingresado" });
  }
};

exports.formato_review_getAll = async (req, res) => {
  try {
    const data = await FormatoReview.find({
      isApproved: false,
      isActive: true,
    })
      .sort({ _id: -1 })
      .populate({
        path: "_usuario",
        select: "name",
      })
      .populate({
        path: "_post",
        select: ["name", "isAdopted"],
      });

    if (data) {
      res.send(data);
    } else {
      res.send({ message: "No hay solicitudes de adopciones." });
    }
  } catch (err) {
    res.send({ message: "No hay solicitudes de adopciones." });
  }
};

exports.formato_review_getAllAdoptedByUser = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const data = await FormatoReview.find({ _usuario: usuarioId, isApproved: true, hasFollowUp: false })
    .populate({ path: "_post", select: ["_id", "name"] });

    if (data) {
      res.send(data);
    }
    else {
      res.send({ message: "No se pudo obtener los datos."});
    }
  }
  catch (err) {
    res.send({ message: "No hay solicitudes de adopciones." });
  }
};