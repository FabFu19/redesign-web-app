import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export const isAuthenticated = (req: Request, resp: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    resp.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.user = payload;
    next();
  } catch (error) {
    resp.status(401).json({ message: 'Invalid token' });
  }
};

