import express from "express";

import { create, getTweet } from "../../controllers/tweet-controller.js";
import { signup ,signin} from "../../controllers/user-controller.js";
import { togglelike } from '../../controllers/like-controller.js';
import { createComment ,getMoreComments } from "../../controllers/comment-controller.js";
import {getcomments} from '../../controllers/viewComments-controllers.js'
import { authenticate } from '../../middlewares/authenticate.js'

const router = express.Router();

router.post('/tweets' ,authenticate , create);
router.get('/tweets/:id' , getTweet);

router.post('/users', signup);
router.post('/togglelikes' ,togglelike);
router.post('/comments' , createComment);
router.post('/signin' , signin);
router.get('/viewmore' , getMoreComments);
router.get('/viewcomments' ,getcomments);

export default router;