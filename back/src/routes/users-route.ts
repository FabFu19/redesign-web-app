import { Router } from "express";
import {
  listUsers,
  getUser,
  updateUserController,
  deleteUserController,
} from "../controllers/users-c";

export const userRoutes = Router();

userRoutes.get("/", listUsers);
userRoutes.get("/:id", getUser);
userRoutes.put("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);


