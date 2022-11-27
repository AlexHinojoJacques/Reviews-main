const express = require('express');
const router = express.Router();

const follow_up_controller = require('../controllers/followCtrlr');

router.post("/follow_up", follow_up_controller.follow_up_create);
router.put("/follow_up/:id", follow_up_controller.follow_up_update);
router.delete("/follow_up/:id", follow_up_controller.follow_up_delete);
router.get("/follow_up/:followUpId", follow_up_controller.follow_up_getById);
router.get("/follow_up", follow_up_controller.follow_up_getAll);
router.get("/follow_up/user/:id", follow_up_controller.follow_up_getAllUser);

module.exports = router;