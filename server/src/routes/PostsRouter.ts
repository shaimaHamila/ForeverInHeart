import express, { Request, Response } from 'express';
import { createPost, getPost } from '../controllers/PostController';

const router = express.Router();

router.get('/', getPost);
router.post('/', createPost)

export default router