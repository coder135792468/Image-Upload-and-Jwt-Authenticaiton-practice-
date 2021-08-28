import express from 'express';
import {
	getPosts,
	addPosts,
	getAllPosts,
} from '../controllers/postController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.route('/all').get(getAllPosts);
router.route('/').get(protect, getPosts).post(protect, addPosts);

export default router;
