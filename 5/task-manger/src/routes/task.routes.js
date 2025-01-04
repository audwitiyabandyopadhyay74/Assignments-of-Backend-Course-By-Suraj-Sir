import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
const router = Router();

router.get('/', authMiddleware, getAllTasks);
router.post("/", authMiddleware, createTask);
router.get("/:id", authMiddleware, updateTask);
router.put("/:id", authMiddleware, deleteTask);