import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/token.js";

export function authenticationMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    if (!header) return next();

    if (!header?.startsWith("Bearer ")) {
      return res
        .status(400)
        .json({ error: "Authorization header must starts with Bearer" });
    }

    const token = header.split(" ")[1];

    if (!token)
      return res.status(400).json({
        error:
          "Authorization header must starts with Bearer and followed by token",
      });

    try {
      const decoded = verifyAccessToken(token);

      // @ts-ignore
      req.user = decoded;

      return next();
    } catch (error) {
      return res.status(401).json({
        error: "Invalid or expired token",
      });
    }
  };
}

export function restrictToAuthenticatedUser() {
  return function (req: Request, res: Response, next: NextFunction) {
    // @ts-ignore
    if (!req.user)
      return res.status(400).json({ error: "Authentication required" });
    return next();
  };
}
