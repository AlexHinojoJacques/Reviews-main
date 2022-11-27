const express = require('express');
const router = express.Router();

const format_review_controller = require('../controllers/formatoReviewCtrlr');

router.post("/formato_review", format_review_controller.formato_review_create);
router.put("/formato_review/:solicitudId", format_review_controller.formato_review_update);
router.delete("/formato_review/:solicitudId", format_review_controller.formato_review_delete);
router.get("/formato_review/:solicitudId", format_review_controller.formato_review_getById);
router.get("/formato_review", format_review_controller.formato_review_getAll);
router.get("/formato_review/usuario/:usuarioId", format_review_controller.formato_review_getAllAdoptedByUser);

module.exports = router;