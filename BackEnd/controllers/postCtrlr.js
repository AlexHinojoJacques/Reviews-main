const Post = require("../models/postSchema");

exports.post_create = async (req, res) => {
  try {
    const { body } = req;
    let newPost = new Post(body);

    await newPost
      .save()
      .then((newObject) => {
        console.log("Success!", newObject);
        res.send(newObject);
      })
      .catch((err) => {
        console.error("Error!", err);
        res.send({ message: "No se pudo crear el post." });
      });
  } catch (err) {
    res.send({ message: "No se pudo crear el post." });
  }
};

exports.post_update = async (req, res) => {
  try {
    const { postId } = req.params;
    const { body } = req;

    const postdb = await Post.findById(postId);

    if (postdb) {
      const data = await Post.findOneAndUpdate({ _id: postId }, body, {
        returnOriginal: false,
      });

      if (data) {
        res.send(data);
      } else {
        res.send({ message: "No se pudo actualizar el post." });
      }
    } else {
      res.send({ message: "No se encontró el post a actualizar." });
    }
  } catch (err) {
    res.send({ message: "No se pudo actualizar el post." });
  }
};

exports.post_delete = async (req, res) => {
  const { id } = req.params;

  const postdb = await Usuario.findById(id);

  if (postdb) {
    // Delete
    await Post.findOneAndUpdate({ _id: id }, { isActive: false });
    res.send({ message: "Post eliminado exitosamente" });
  } else {
    // Error msg
    res.send({ message: "No se encontro el post ingresado" });
  }
};

exports.post_getById = async (req, res) => {
  try {
    const { postId } = req.params;

    const data = await Post.findById(postId)
      .populate({ path: "_imgPost", select: "archivo" })
      .populate({
        path: "_usuario",
        select: "_imgUsuario",
        populate: {
          path: "_imgUsuario",
          select: "archivo",
        },
      });

    if (data && data.isActive == true) {
      res.send(data);
    } else {
      res.send({ message: "No se encontro el post ingresado" });
    }
  } catch (err) {
    res.send({ message: "No se encontro el post ingresado" });
  }
};

exports.post_getAll = async (req, res) => {
  try {
    const data = await Post.find({ isActive: true})
      .sort({ _id: -1 })
      //.populate({ path: "_imgPost", select: "archivo" })
    if (data) {
      res.send(data);
    } else {
      res.send({ message: "No hay posts" });
    }
  } catch (err) {
    res.send({ message: "No hay posts" });
  }
};

exports.post_getAllUser = async (req, res) => {
  try {
    const user = req.verifiedData;
    const { userId } = req.params;
    const data = await Post.find({
      isActive: true,
      _usuario: user._id,
      isAdopted: false,
    })
      .populate({ path: "_imgPost", select: "archivo" })
      .populate({
        path: "_usuario",
        select: "_imgUsuario",
        populate: {
          path: "_imgUsuario",
          select: "archivo",
        },
      });
  
      if (data) {
        res.send(data);
      }
      else {
        res.send({ message: "Error al traer los posts." });
      }
  }
  catch (err) {
    res.send({ message: "Error en general al traer los posts." });
  }


};

exports.post_Search = async (req, res) => {
  try {
    const { body } = req;
    let data;
    if (
      body.name === "" &&
      body.isDog === "" &&
      body.isMale === "" &&
      body.size === ""
    ) {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isDog === "" && body.isMale === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        name: new RegExp(body.name, "i"),
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isMale === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isDog === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        isMale: body.isMale,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isDog === "" && body.isMale === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isMale === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        name: new RegExp(body.name, "i"),
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isDog === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        name: new RegExp(body.name, "i"),
        isMale: body.isMale,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isDog === "" && body.isMale === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        name: new RegExp(body.name, "i"),
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        isMale: body.isMale,
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isMale === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isDog === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        isMale: body.isMale,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.size === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        name: new RegExp(body.name, "i"),
        isMale: body.isMale,
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isMale === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        name: new RegExp(body.name, "i"),
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "") {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        isMale: body.isMale,
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else {
      data = await Post.find({
        isActive: true,
        isAdopted: false,
        name: new RegExp(body.name, "i"),
        isMale: body.isMale,
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    }

    res.send(data);
  } catch (err) {
    res.send({ message: "No se encontró nada en la busqueda." });
  }
};