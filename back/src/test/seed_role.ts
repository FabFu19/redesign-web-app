// test/seed_role.ts for seeding roles in the database
import { AppDataSource } from "../config/data-src";
import { Roles } from "../entities/role";

const predRoles = [
  { role: "admin", description: "Administrator with full access" },
  { role: "hr", description: "Recruiter with access to manage offers and applications" },
  { role: "candidate", description: "Candidate with access to apply for offers" }
];

export const seedRoles = async () => {
    const roleRepository = AppDataSource.getRepository(Roles);

    for (const pr of predRoles) {
        const existingRole = await roleRepository.findOneBy({ role: pr.role });
        if (!existingRole) {
            const newRole = roleRepository.create(pr);
            await roleRepository.save(newRole);
            console.log(`Role ${newRole.role} created successfully.`);
        } else {
            console.log(`Role ${existingRole.role} already exists.`);
        }
    }
}