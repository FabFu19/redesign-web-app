import { AppDataSource } from "../config/data-src";
import { Users } from "../entities/users";
import { Roles } from "../entities/role";
import bcrypt from "bcryptjs";
import jwt from "../utils/jwt";

const userRepo = AppDataSource.getRepository(Users);
const roleRepo = AppDataSource.getRepository(Roles);

export const register = async (data: {
  email: string;
  password: string;
  name?: string;
  lastname?: string;
  role?: string;
}) => {
  const { email, password, name, lastname, role = "candidate" } = data;

  const existing = await userRepo.findOneBy({ email });
  if (existing) throw new Error("Email already in use");

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const roles = await roleRepo.find();
  console.log("📌 Roles existentes en la base de datos:", roles.map(r => r.role));

  const roleEntity = await roleRepo.findOneBy({ role });
  if (!roleEntity) throw new Error("Invalid role");

  const user = userRepo.create({
    email,
    password: hashedPassword,
    name,
    lastname,
    role: roleEntity,
  });

  await userRepo.save(user);

  return {
    token: jwt.signToken(user),
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      role: user.role.role,
    },
  };
};

export const login = async (data: { email: string; password: string }) => {
  const { email, password } = data;

  const user = await userRepo.findOne({
    where: { email },
    relations: ["role"],
  });

  if (!user) throw new Error("Invalid credentials");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  return {
    token: jwt.signToken(user),
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      role: user.role.role,
    },
  };
};