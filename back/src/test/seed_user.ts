// test/see_user.ts for seeding a user in the database
import { AppDataSource } from "../config/data-src";
import { Users } from "../entities/users";
import { Roles } from "../entities/role";
import bcrypt from "bcryptjs";
import e from "express";

export const seedUser = async () => {
    const userRepository = AppDataSource.getRepository(Users);
    const roleRepository = AppDataSource.getRepository(Roles);

    const predUser = [
        {
            email: "jose@ntt.com",
            password: "123456",
            name: "Jose",
            lastname: "Alis",
            role: "admin"
        },
        {
            email: "alexo@ntt.com",
            password: "1234567",
            name: "Alex",
            lastname: "Ortiz",
            role: "hhr"
        },
        {
            email: "julipigna@gmail.com",
            password: "12345678",
            name: "Julia",
            lastname: "Pignatelli",
            role: "candidate"
        }
    ];
    for (const pu of predUser) {
        const existingUser = await userRepository.findOneBy({ email: pu.email });
        if (!existingUser) {
            const role = await roleRepository.findOneBy({ role: pu.role });
            if (!role) {
                console.error(`Role ${pu.role} does not exist.`);
                continue;
            }
            const hashedPassword = await bcrypt.hash(pu.password, 10);
            const newUser = userRepository.create({
                email: pu.email,
                password: hashedPassword,
                name: pu.name,
                lastname: pu.lastname,
                role: role
            });
            await userRepository.save(newUser);
            console.log(`User ${newUser.email} created successfully.`);
        } else {
            console.log(`User ${existingUser.email} already exists.`);
        }
    }
}  