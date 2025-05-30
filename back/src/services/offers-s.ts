import { AppDataSource } from "../config/data-src";
import { Offers } from "../entities/offers";

const offerRepo = AppDataSource.getRepository(Offers);

export const getAllOffers = async () => {
  return await offerRepo.find();
};

export const getOfferById = async (id: number) => {
  const offer = await offerRepo.findOneBy({ id });
  if (!offer) throw new Error("Offer not found");
  return offer;
};

export const createOffer = async (data: Partial<Offers>) => {
  const offer = offerRepo.create(data);
  return await offerRepo.save(offer);
};

export const updateOffer = async (id: number, data: Partial<Offers>) => {
  const offer = await offerRepo.findOneBy({ id });
  if (!offer) throw new Error("Offer not found");

  Object.assign(offer, data);
  return await offerRepo.save(offer);
};

export const deleteOffer = async (id: number) => {
  const offer = await offerRepo.findOneBy({ id });
  if (!offer) throw new Error("Offer not found");

  await offerRepo.remove(offer);
  return { message: "Offer deleted successfully" };
};