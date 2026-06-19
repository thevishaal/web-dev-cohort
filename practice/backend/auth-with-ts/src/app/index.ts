import express from "express";
import type { Application, Request, Response } from "express";

export function createApplicationServer(): Application {
  const app = express();

  // middleware

  //routes

  app.get("/health", (req: Request, res: Response) => {
    return res.status(200).json({
      success: true,
      message: "Server is healthy.",
    });
  });

  return app;
}
