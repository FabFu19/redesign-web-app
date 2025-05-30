import { Router } from "express";
import {
  listApplications,
  getApplication,
  createApplicationController,
  updateApplicationController,
  deleteApplicationController,
} from "../controllers/applications-c";

const router = Router();

router.get("/", listApplications);
router.get("/:id", getApplication);
router.post("/", createApplicationController);
router.put("/:id", updateApplicationController);
router.delete("/:id", deleteApplicationController);

export default router;