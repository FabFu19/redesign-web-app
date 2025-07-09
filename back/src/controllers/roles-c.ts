import { Request, Response } from "express";
import {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../services/role-s";

export const listRoles = async (_req: Request, res: Response) => {
  try {
    const roles = await getAllRoles();
    res.json(roles);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getRole = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const role = await getRoleById(id);
    res.json(role);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const createRoleController = async (req: Request, res: Response) => {
  try {
    const role = await createRole(req.body);
    res.status(201).json(role);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const updateRoleController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const role = await updateRole(id, req.body);
    res.json(role);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteRoleController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await deleteRole(id);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
