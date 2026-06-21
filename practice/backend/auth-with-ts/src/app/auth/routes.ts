import expres from "express";
import type { Router } from "express";
import AuthenticationController from "./controller.js";
import { restrictToAuthenticatedUser } from "../middleware/auth-middleware.js";

export const authRouter: Router = expres.Router();

const authenticationController = new AuthenticationController();

authRouter.post(
  "/sign-up",
  authenticationController.handleSignup.bind(authenticationController),
);

authRouter.post(
  "/sign-in",
  authenticationController.handleSignin.bind(authenticationController),
);

authRouter.get(
  "/verify-email/:token",
  authenticationController.handleVerifyEmail.bind(authenticationController),
);

authRouter.get(
  "/me",
  restrictToAuthenticatedUser(),
  authenticationController.handleGetMe.bind(authenticationController),
);

authRouter.post(
  "/forgot-password",
  authenticationController.handleForgetPassword.bind(authenticationController),
);

authRouter.post(
  "/reset-password/:token",
  authenticationController.handleResetPassword.bind(authenticationController),
);
