import express, { Router } from "express";
import "reflect-metadata";
import cors from 'cors';
import morgan from 'morgan';
import { config } from "./config/config_env";
import { AppDataSource } from "./config/data-src";
import { authRoutes } from "./routes/auth-l-r";
import { userRoutes } from "./routes/users-route";
import { roleRoutes } from "./routes/roles-route";
import { offerRoutes } from "./routes/offers-route";
import { applicationRoutes } from "./routes/applications-route";
import { errorHandler } from './middlewares/errors';
import { seedRoles } from "./test/seed_role";
import { seedUser } from "./test/seed_user";

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/applications", applicationRoutes);

app.use((_req, res, _next) => {
  res.status(404).json({ message: "Path not found!" });
});

app.use(errorHandler);

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");

    await seedRoles();
    await seedUser()

    app.listen(config.PORT, () => {
      console.log(`Server running on http://localhost:${config.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });