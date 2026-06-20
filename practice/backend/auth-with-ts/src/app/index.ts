import express from "express";
import type { Application, Request, Response } from "express";
import { authRouter } from "./auth/routes.js";

export function createApplicationServer(): Application {
  const app = express();

  // middleware
  app.use(express.json());

  //routes

  app.get("/health", (req: Request, res: Response) => {
    return res.status(200).json({
      success: true,
      message: "Server is healthy.",
    });
  });

  app.use("/auth", authRouter);

  return app;
}
