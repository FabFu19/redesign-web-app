import { Router } from "express";
import {
  listRoles,
  getRole,
  createRoleController,
  updateRoleController,
  deleteRoleController,
} from "../controllers/roles-c";

export const roleRoutes = Router();

roleRoutes.get("/", listRoles);
roleRoutes.get("/:id", getRole);
roleRoutes.post("/", createRoleController);
roleRoutes.put("/:id", updateRoleController);
roleRoutes.delete("/:id", deleteRoleController);


