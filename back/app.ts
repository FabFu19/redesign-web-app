import express, { Router } from "express";
import "reflect-metadata";
import cors from 'cors';
import morgan from 'morgan';
import { AppDataSource } from "./src/config/data-src";
import authRoutes from "./src/routes/auth-l-r";
import userRoutes from "./src/routes/users-route";
import roleRoutes from "./src/routes/roles-route";
import offerRoutes from "./src/routes/offers-route";
import applicationRoutes from "./src/routes/applications-route";
import { errorHandler } from './src/middlewares/errors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/applications", applicationRoutes);

app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });