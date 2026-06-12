import { Router } from "express";
import postController from "../controllers/postController";

const router = Router();

router.post('/', postController.createPost);
router.get('/', postController.getPosts);
router.delete('/:id', postController.deletePost);

export default router;