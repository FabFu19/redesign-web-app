import { AppDataSource } from "../config/data-src";
import { Applications } from "../entities/applications";

const applicationRepo = AppDataSource.getRepository(Applications);

export const getAllApplications = async () => {
  return await applicationRepo.find({ relations: ["user", "offer"] });
};

export const getApplicationById = async (id: number) => {
  const application = await applicationRepo.findOne({ where: { id }, relations: ["user", "offer"] });
  if (!application) throw new Error("Application not found");
  return application;
};

export const createApplication = async (data: Partial<Applications>) => {
  const newApplication = applicationRepo.create(data);
  return await applicationRepo.save(newApplication);
};

export const updateApplication = async (id: number, data: Partial<Applications>) => {
  const app = await applicationRepo.findOneBy({ id });
  if (!app) throw new Error("Application not found");
  Object.assign(app, data);
  return await applicationRepo.save(app);
};

export const deleteApplication = async (id: number) => {
  const app = await applicationRepo.findOneBy({ id });
  if (!app) throw new Error("Application not found");
  await applicationRepo.remove(app);
  return { message: "Application deleted successfully" };
};