import { AppDataSource } from "../config/data-src";
import { Users } from "../entities/users";


const userRepo = AppDataSource.getRepository(Users);

export const getAllUsers = async () => {
  return await userRepo.find({ relations: ["role"] });
};

export const getUserById = async (id: number) => {
  const user = await userRepo.findOne({ where: { id }, relations: ["role"] });
  if (!user) throw new Error("User not found");
  return user;
};

export const updateUser = async (id: number, data: Partial<Users>) => {
  const user = await userRepo.findOneBy({ id });
  if (!user) throw new Error("User not found");

  Object.assign(user, data);
  return await userRepo.save(user);
};

export const deleteUser = async (id: number) => {
  const user = await userRepo.findOneBy({ id });
  if (!user) throw new Error("User not found");

  await userRepo.remove(user);
  return { message: "User deleted successfully" };
};
