import express, { urlencoded } from "express";
import authRouter from "./module/auth/user.routes.js";
import cookieParser from "cookie-parser";

export default function createApplication() {
  const app = express();

  app.use(express.json());
  app.use(urlencoded({ extended: true }));
  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to my application" });
  });

  app.use("/api/auth", authRouter);
  return app;
}
