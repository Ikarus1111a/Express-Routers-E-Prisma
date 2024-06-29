import { Router } from "express";
import { createUser, getUsers, getUserId } from "../handlers/users";

const router = Router();

// para acessar essa rota você tem que ir a /api/users
router.get('/', getUsers);

// para acessar, /api/users/:id
router.get('/:id', getUserId);

// /api/users

router.post('/', createUser);

// Ambos são acessadas pelas funções handle na outra pasta
// Callback function
export default router;