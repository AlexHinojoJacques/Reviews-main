const Like = require("../models/likeSchema");

exports.like_getAll = async (req, res) => {
  const { id } = req.params;
  const data = await Like.find({ _post: id, isActive: true });

  res.send(data);
};

exports.like_upsert = async (req, res) => {
  try {
    const { body } = req;

    const data = await Like.findOneAndUpdate(
      { _usuario: body._usuario, _post: body._post },
      [{ $set: { isActive: { $not: "$isActive" } } }],
      { upsert: true, returnOriginal: false }
    );

    if (data) {
      res.send(data);
    } else {
      res.send({ message: "No se hizo update al like. " });
    }
  } catch (err) {
    res.send({ message: "Hubo un error con el like." });
  }
};

exports.like_getLikedByUser = async (req, res) => {
  try {
    const { body } = req;

    const data = await Like.find({ _usuario: body._usuario }).populate({
      path: "_post",
      populate: [
        {
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        },
        {
          path: "_imgPost",
          select: "archivo",
        },
      ],
    });

    if (data) {
        res.send(data);
    }
    else {
        res.send({ message: "Error al traer posts."});
    }

  } catch (err) {
    res.send({ message: "Error en general al traer posts."});
  }
};