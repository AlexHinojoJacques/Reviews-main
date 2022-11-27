const express = require('express');
const router = express.Router();

const like_controller = require('../controllers/likeCtrlr');

router.put("/like", like_controller.like_upsert);
router.get("/like/:id", like_controller.like_getAll);
router.post("/like/usuario", like_controller.like_getLikedByUser);

module.exports = router;