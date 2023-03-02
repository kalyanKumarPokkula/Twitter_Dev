import express from "express";

import { create, getTweet } from "../../controllers/tweet-controller.js";
import { signup } from "../../controllers/user-controller.js";
import { togglelike } from '../../controllers/like-controller.js';
import { createComment ,getMoreComments } from "../../controllers/comment-controller.js";
import {getcomments} from '../../controllers/viewComments-controllers.js'

const router = express.Router();

router.post('/tweets' , create);
router.get('/tweets/:id' , getTweet);

router.post('/users', signup);
router.post('/togglelikes' ,togglelike);
router.post('/comments' , createComment);
router.get('/viewmore' , getMoreComments);
router.get('/viewcomments' ,getcomments);

export default router;