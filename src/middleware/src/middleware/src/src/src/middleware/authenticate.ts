import { Request, Response, NextFunction } from 'express';
import { legacySession } from './session';

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await legacySession(req, res, () => {});

  if (!req.session?.userId) {
    return res.status(401).json({ error: 'unauthenticated' });
  }

  next();
}
