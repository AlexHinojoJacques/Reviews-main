const express = require('express');
const router = express.Router();

const comentario_controller = require('../controllers/ComentarioCtrlr');

router.post("/comentario", comentario_controller.comentario_create);
router.put("/comentario/:comentarioId", comentario_controller.comentario_update);
router.delete("/comentario/:comentarioId", comentario_controller.comentario_delete);
router.get("/comentario/:comentarioId", comentario_controller.comentario_getById);
router.get("/comentario/post/:postId", comentario_controller.comentario_getAll);

module.exports = router;