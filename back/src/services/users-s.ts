import { AppDataSource } from "../config/data-src";
import { Users } from "../entities/users";
import { Roles } from "../entities/role";


const userRepo = AppDataSource.getRepository(Users);

export const getAllUsers = async () => {
  const users = await userRepo.find({ relations: ["role"] });

  return users.map(user => ({
    id: user.id, 
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    role: user.role?.role || "No role assigned",
  })); 
};

export const getUserById = async (id: number) => {
  const user = await userRepo.findOne({ where: { id }, relations: ["role"] });
  if (!user) throw new Error("User not found");
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    role: user.role?.role || "No role assigned",
  };
};

export const updateUser = async (id: number, data: Partial<Users>) => {
  const user = await userRepo.findOneBy({ id });

  if (!user) throw new Error("User not found!");

  // Convert role string to role entity if provided
  if (data.role && typeof data.role === "string") {
      const roleRep = AppDataSource.getRepository(Roles);
      const selectedRole = await roleRep.findOneBy({ role: data.role });

      if (!selectedRole) throw new Error("Role not found!");

      data.role = selectedRole; 
  }

  Object.assign(user, data);

  const savedUser = await userRepo.save(user);
  return {
    id: savedUser.id,
    email: savedUser.email,
    name: savedUser.name,
    lastname: savedUser.lastname,
    role: savedUser.role?.role || "No role assigned",
  };
};

export const deleteUser = async (id: number) => {
  const user = await userRepo.findOneBy({ id });
  if (!user) throw new Error("User not found");

  await userRepo.remove(user);
  return { message: "User deleted successfully" };
};
