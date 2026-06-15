import { Router } from "express";
import postController from "../controllers/postController";

const router = Router();

router.post('/', postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);
router.delete('/:id', postController.deletePost);

export default router;