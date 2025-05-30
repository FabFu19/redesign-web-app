import { Request, Response } from "express";
import {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../services/applications-s";

export const listApplications = async (_req: Request, res: Response) => {
  try {
    const apps = await getAllApplications();
    res.json(apps);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getApplication = async (req: Request, res: Response) => {
  try {
    const app = await getApplicationById(parseInt(req.params.id));
    res.json(app);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const createApplicationController = async (req: Request, res: Response) => {
  try {
    const app = await createApplication(req.body);
    res.status(201).json(app);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const updateApplicationController = async (req: Request, res: Response) => {
  try {
    const app = await updateApplication(parseInt(req.params.id), req.body);
    res.json(app);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteApplicationController = async (req: Request, res: Response) => {
  try {
    const result = await deleteApplication(parseInt(req.params.id));
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};