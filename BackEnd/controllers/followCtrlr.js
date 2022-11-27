const FollowUp = require('../models/followSchema');

exports.follow_up_create = async (req, res) => {
    try {
        const { body } = req;
        let newFollowUp = new FollowUp(body);
    
        await newFollowUp.save()
        .then((newObject) => {
            console.log("Success!", newObject);
            res.send(newObject);
        })
        .catch((err) => {
            console.error("Error!", err);
            res.send({ message: "No se pudo crear el follow up. "});
        });
    }
    catch (err) {
        res.send({ message: "No se pudo crear el follow up. "});
    }
};

exports.follow_up_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const follow_updb = await FollowUp.findById(id);

    if (follow_updb) {
        const data = await FollowUp.findOneAndUpdate( {_id: id}, body, { returnOriginal: false });
        res.send({ message: "El post se actualizado exitosamente" });
    }
    else {
        res.send({ message: "El post que se intentó actualizar no existe"});
    }
};

exports.follow_up_delete = async (req, res) => {
    const { id } = req.params;

    const follow_updb = await FollowUp.findById(id);

    if (follow_updb) {
        // Delete
        await FollowUp.findOneAndUpdate({ _id: id }, { isActive: false });
        res.send({ message: "Post eliminado exitosamente" });
    }
    else {
        // Error msg
        res.send({ message: "No se encontro el post ingresado" });
    }
};

exports.follow_up_getById = async (req, res) => {
    try {
        const { followUpId } = req.params;
    
        const data = await FollowUp.findOne({ _id: followUpId, isActive: true })
        .sort({ _id: -1 })
        .populate([
            {
                path: "_adopcion",
                select: ["_usuario", "_adopcion"],
                populate: [
                    {
                        path: "_usuario",
                        select: "_imgUsuario",
                        populate: {
                            path: "_imgUsuario"
                        }
                    },
                    {
                        path: "_post",
                        select: "name"
                    }
                ]
            },
            {
                path: "_imgFU",
                select: "archivo"
            }
        ]);
    
        if (data) {
            res.send(data);
        }
        else {
            res.send({ message: "No se encontro el post ingresado" });
        }
    }
    catch (err) {
        res.send({ message: "No se encontro el post ingresado" });
    }
};

exports.follow_up_getAll = async (req, res) => {
    try {
        const data = await FollowUp.find({ isActive: true })
        .sort({ _id: -1 })
        .populate([
            {
                path: "_adopcion",
                select: ["_usuario", "_adopcion"],
                populate: [
                    {
                        path: "_usuario",
                        select: "_imgUsuario",
                        populate: {
                            path: "_imgUsuario"
                        }
                    },
                    {
                        path: "_post",
                        select: "name"
                    }
                ]
            },
            {
                path: "_imgFU",
                select: "archivo"
            }
        ]);
    
        res.send(data);

    }
    catch (err) {

    }
};

exports.follow_up_getAllUser = async (req, res) => {
    const { id } = req.params;
    const data = await FollowUp.find({ isActive: true, _usuario: id })

    res.send(data);
};