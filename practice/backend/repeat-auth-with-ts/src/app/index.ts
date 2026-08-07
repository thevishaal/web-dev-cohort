import express from "express";
import type { Application, Request, Response } from "express";
import authRouter from "./auth/routes.js";
import { authenticationMiddleware } from "./auth/utils/auth-middleware.js";

export function createApplication(): Application {
  const app = express();

  // middlewares
  app.use(express.json());
  app.use(authenticationMiddleware());

  // routes
  app.get("/health", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Server is healthy..." });
  });

  app.use("/auth", authRouter);

  return app;
}
