import express from "express";

import { create } from "../../controllers/tweet-controller.js";
import { usercreate } from "../../controllers/user-controller.js";

const router = express.Router();

router.post('/tweets' , create);
router.post('/users', usercreate)

export default router;