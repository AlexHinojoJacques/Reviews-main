const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth")

const post_controller = require('../controllers/postCtrlr');

router.post("/post", post_controller.post_create);
router.put("/post/:postId", post_controller.post_update);
router.delete("/post/:postId", post_controller.post_delete);
router.get("/post/:postId", post_controller.post_getById);
router.get("/post", post_controller.post_getAll);
router.get("/post/usuario/:userId", auth, post_controller.post_getAllUser);
router.post("/search", post_controller.post_Search);

module.exports = router;