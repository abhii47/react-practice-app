import { Router } from "express";
import commentController from "../controllers/commentController";

const router = Router();

router.post('/', commentController.postComment);
router.delete('/:id', commentController.deleteComment);

export default router;