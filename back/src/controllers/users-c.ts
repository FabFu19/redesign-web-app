import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/users-s";

export const listUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await getUserById(id);
    res.json(user);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await updateUser(id, req.body);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await deleteUser(id);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
