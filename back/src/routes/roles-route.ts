import { Router } from "express";
import {
  listRoles,
  getRole,
  createRoleController,
  updateRoleController,
  deleteRoleController,
} from "../controllers/roles-c";

const router = Router();

router.get("/", listRoles);
router.get("/:id", getRole);
router.post("/", createRoleController);
router.put("/:id", updateRoleController);
router.delete("/:id", deleteRoleController);

export default router;
