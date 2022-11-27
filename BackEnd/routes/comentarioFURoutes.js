const express = require('express');
const router = express.Router();

const comentarioFU_controller = require('../controllers/comentarioFUCtrlr');

router.post("/comentarioFU", comentarioFU_controller.comentarioFU_create);
router.put("/comentarioFU/:id", comentarioFU_controller.comentarioFU_update);
router.delete("/comentarioFU/:id", comentarioFU_controller.comentarioFU_delete);
router.get("/comentarioFU/:id", comentarioFU_controller.comentarioFU_getById);
router.get("/comentarioFU/FU/:followUpId", comentarioFU_controller.comentarioFU_getAll);

module.exports = router;