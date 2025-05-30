import { Router } from "express";
import {
  listUsers,
  getUser,
  updateUserController,
  deleteUserController,
} from "../controllers/users-c";

const router = Router();

router.get("/", listUsers);
router.get("/:id", getUser);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
