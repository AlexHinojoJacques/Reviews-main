const LikeFU = require('../models/likeFUSchema');

exports.likeFU_upsert = async (req, res) => {
    try {
        const { body } = req;
        
        const data = await LikeFU.findOneAndUpdate(
          { _usuario: body._usuario, _followUp: body._followUp },
          [{ $set: { isActive: { $not: "$isActive" } } }],
          { upsert: true, returnOriginal: false }
        );

        if (data) {
            res.send(data);
        }
        else {
            res.send({ message: "No se hizo update al like." });
        }
    }
    catch (err) {
        res.send({ message: "No se hizo update al like." });
    }
};

exports.likeFU_getLikedByUserFU = async (req, res) => {
    try {
        const { body } = req;
        const data = await LikeFU.find({ _usuario: body._usuario })
        .populate({
            path: "_followUp",
            populate: [
                {
                    path: "_adopcion",
                    populate: [
                        {
                            path: "_post",
                        },
                        {
                            path: "_usuario",
                            select: "_imgUsuario",
                            populate: {
                                path: "_imgUsuario"
                            }
                        }
                    ]
                },
                {
                    path: "_imgFU"
                }
            ]
        });
    
        if (data) {
            res.send(data);
        }
        else {
            res.send({ message: "Error al traer posts."});
        }
    }
    catch (err) {
        res.send({ message: "Error en general al traer posts."});
    }
};