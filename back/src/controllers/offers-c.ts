import { Request, Response } from "express";
import {
  getAllOffers,
  getOfferById,
  createOffer,
  updateOffer,
  deleteOffer,
} from "../services/offers-s";

export const listOffers = async (_req: Request, res: Response) => {
  try {
    const offers = await getAllOffers();
    res.json(offers);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getOffer = async (req: Request, res: Response) => {
  try {
    const offer = await getOfferById(parseInt(req.params.id));
    res.json(offer);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const createOfferController = async (req: Request, res: Response) => {
  try {
    // console.log("💬 Body recibido en createOffer:", req.body);
    const offer = await createOffer(req.body);
    res.status(201).json(offer);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const updateOfferController = async (req: Request, res: Response) => {
  try {
    const offer = await updateOffer(parseInt(req.params.id), req.body);
    res.json(offer);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteOfferController = async (req: Request, res: Response) => {
  try {
    const result = await deleteOffer(parseInt(req.params.id));
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};