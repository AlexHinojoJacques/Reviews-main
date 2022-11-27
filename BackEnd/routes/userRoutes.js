const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/userCtrlr');

router.post("/usuario", usuario_controller.usuario_create);
router.put("/usuario/:usuarioId", usuario_controller.usuario_update);
router.delete("/usuario/:usuarioId", usuario_controller.usuario_delete);
router.get("/usuario/:usuarioId", usuario_controller.usuario_getById);

router.post("/login", usuario_controller.usuario_logIn);

module.exports = router;