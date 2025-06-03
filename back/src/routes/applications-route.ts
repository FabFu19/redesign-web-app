import { Router } from "express";
import {
  listApplications,
  getApplication,
  createApplicationController,
  updateApplicationController,
  deleteApplicationController,
} from "../controllers/applications-c";

export const applicationRoutes = Router();

applicationRoutes.get("/", listApplications);
applicationRoutes.get("/:id", getApplication);
applicationRoutes.post("/", createApplicationController);
applicationRoutes.put("/:id", updateApplicationController);
applicationRoutes.delete("/:id", deleteApplicationController);

