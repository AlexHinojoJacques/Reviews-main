const express = require('express');
const router = express.Router();
const uploader = require("../middleware/multer");

const imagen_controller = require('../controllers/imagenCtrlr');

router.post("/imagen", uploader.single("archivo"), imagen_controller.imagen_create);
router.put("/imagen/:id", imagen_controller.imagen_update);
router.get("/imagen/:id", imagen_controller.imagen_getById);

module.exports = router;