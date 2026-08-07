import { Router } from "express";
import * as authController from "./controllers.js";
import { restrictToAuthenticatedUser } from "./utils/auth-middleware.js";

const router = Router();

router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);

router.get("/me", restrictToAuthenticatedUser(), authController.me);

export default router;
