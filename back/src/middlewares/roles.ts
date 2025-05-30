import { Request, Response, NextFunction } from 'express';

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, resp: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
     resp.status(401).json({ message: 'Unauthorized: no user info' });
     return;
    }

    if (!allowedRoles.includes(user.role)) {
      resp.status(403).json({ message: 'Forbidden: insufficient role' });
      return;
    }

    next();
  };
};