import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post('/', userController.postUser);
router.get('/', userController.getUsers);
router.delete('/:id', userController.deleteUser);

export default router