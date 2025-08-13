import { Router } from 'express';
import * as userController from '../controllers/user.controller.ts';

const router = Router();

// POST /api/users - Create new user
router.post('/', userController.createUser);

// GET /api/users - Get all users
router.get('/', userController.getUsers);

// GET /api/users/:id - Get user by ID
router.get('/:id', userController.getUserById);

// PUT /api/users/:id - Update user
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Delete user
router.delete('/:id', userController.deleteUser);

export default router;
