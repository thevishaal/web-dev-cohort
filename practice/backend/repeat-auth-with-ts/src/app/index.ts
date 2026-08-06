import express from "express";
import type { Application, Request, Response } from "express";

export function createApplication(): Application {
  const app = express();

  // middlewares
  app.use(express.json());

  // routes
  app.get("/health", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Server is healthy..." });
  });

  return app;
}
