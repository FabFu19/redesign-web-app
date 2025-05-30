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

const router = Router();

router.get("/", listOffers);
router.get("/:id", getOffer);
router.post("/", isAuthenticated, authorizeRoles("hr"), createOfferController);
router.put("/:id", updateOfferController);
router.delete("/:id", deleteOfferController);

export default router;