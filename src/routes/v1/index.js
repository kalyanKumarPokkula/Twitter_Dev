import express from "express";

import { create } from "../../controllers/tweet-controller.js";
import { usercreate } from "../../controllers/user-controller.js";
import { togglelike } from '../../controllers/like-controller.js';
import { createComment } from "../../controllers/comment-controller.js";

const router = express.Router();

router.post('/tweets' , create);
router.post('/users', usercreate)
router.post('/togglelikes' ,togglelike);
router.post('/comments' , createComment);

export default router;