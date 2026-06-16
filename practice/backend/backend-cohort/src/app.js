import express from "express";
import authRouter from "./module/auth/user.routes.js";

export default function createApplication() {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to my application" });
  });

  app.use("/api/auth", authRouter);
  return app;
}
