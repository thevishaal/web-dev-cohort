import express from "express";
import type { Application, Request, Response } from "express";

import studentRouter from "./student/routes.js";

export function createApplicationServer(): Application {
  const app = express();

  app.use(express.json());

  app.get("/health", (req: Request, res: Response) => {
    return res.status(200).json({
      status: "success",
      message: "Server is healthy",
    });
  });

  app.use("/students", studentRouter);
  return app;
}
