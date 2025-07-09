import jwt from "jsonwebtoken";
import { Users } from "../entities/users";

const SECRET = process.env.JWT_SECRET || "dev-super-secret";

export default {
  signToken: (user: Users) => {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role.role,
      },
      SECRET,
      { expiresIn: "7d" }
    );
  },

  verifyToken: (token: string) => {
    return jwt.verify(token, SECRET);
  },
};
