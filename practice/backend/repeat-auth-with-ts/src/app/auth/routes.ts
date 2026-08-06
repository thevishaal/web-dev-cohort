import { Router } from "express";
import * as authController from "./controllers.js";

const router = Router();

router.post("/sign-up", authController.signUp);

export default router;
