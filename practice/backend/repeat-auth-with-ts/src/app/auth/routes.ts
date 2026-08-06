import { Router } from "express";
import * as authController from "./controllers.js";

const router = Router();

router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);

export default router;
