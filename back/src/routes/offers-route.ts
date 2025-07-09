import { Router } from "express";
import {
  listOffers,
  getOffer,
  createOfferController,
  updateOfferController,
  deleteOfferController,
} from "../controllers/offers-c";
import { isAuthenticated } from "../middlewares/auth";
import { authorizeRoles } from "../middlewares/roles";

export const offerRoutes = Router();

offerRoutes.get("/", listOffers);
offerRoutes.get("/:id", getOffer);
offerRoutes.post("/", isAuthenticated, authorizeRoles("hr"), createOfferController);
offerRoutes.put("/:id", updateOfferController);
offerRoutes.delete("/:id", deleteOfferController);

