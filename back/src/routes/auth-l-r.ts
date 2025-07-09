import { Router } from "express";
import { registerUser, loginUser  } from "../controllers/auth-c";

export const authRoutes = Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);


authRoutes.get("/test", (_req, res) => {
    res.json({ message: "Auth route is alive" });
  });