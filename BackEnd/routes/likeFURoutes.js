const express = require('express');
const router = express.Router();

const likeFU_controller = require('../controllers/likeFUCtrlr');

router.put("/likeFU", likeFU_controller.likeFU_upsert);
router.post("/likeFU/usuario", likeFU_controller.likeFU_getLikedByUserFU);

module.exports = router;