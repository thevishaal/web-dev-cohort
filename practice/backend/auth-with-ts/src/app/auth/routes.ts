import expres from "express";
import type { Router } from "express";
import AuthenticationController from "./controller.js";

export const authRouter: Router = expres.Router();

const authenticationController = new AuthenticationController();

authRouter.post(
  "/sign-up",
  authenticationController.handleSignup.bind(authenticationController),
);
