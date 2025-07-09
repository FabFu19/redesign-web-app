import { AppDataSource } from "../config/data-src";
import { Roles } from "../entities/role";

const roleRepo = AppDataSource.getRepository(Roles);

export const getAllRoles = async () => {
  return await roleRepo.find({ relations: ["users"] });
};

export const getRoleById = async (id: number) => {
  const role = await roleRepo.findOne({ where: { id }, relations: ["users"] });
  if (!role) throw new Error("Role not found");
  return role;
};

export const createRole = async (data: Partial<Roles>) => {
  const existing = await roleRepo.findOneBy({ role: data.role });
  if (existing) throw new Error("Role already exists!");

  const newRole = roleRepo.create(data);
  return await roleRepo.save(newRole);
};

export const updateRole = async (id: number, data: Partial<Roles>) => {
  const role = await roleRepo.findOneBy({ id });
  if (!role) throw new Error("Role not found");

  Object.assign(role, data);
  return await roleRepo.save(role);
};

export const deleteRole = async (id: number) => {
  const role = await roleRepo.findOneBy({ id });
  if (!role) throw new Error("Role not found");

  await roleRepo.remove(role);
  return { message: "Role deleted successfully" };
};
