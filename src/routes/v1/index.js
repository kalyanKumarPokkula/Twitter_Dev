import express from "express";

import { create } from "../../controllers/tweet-controller.js";

const router = express.Router();

router.post('/tweets' , create);

export default router;