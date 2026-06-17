import { Router } from "express";
import * as controller from "./user.controller.js";
import validate from "../../common/middleware/validate.middleware.js";
import RegisterDto from "./dto/register.dto.js";
import LoginDto from "./dto/login.dto.js";
import ForgotPasswordDto from "./dto/forgotPassword.dto.js";
import ResetPasswordDto from "./dto/resetPassword.dto.js";
import { authenticate } from "./user.middleware.js";

const router = Router();

router.post("/register", validate(RegisterDto), controller.register);
router.get("/verify/:token", controller.verifyEmail);
router.post("/login", validate(LoginDto), controller.login);
router.get("/refresh", controller.refresh);
router.post(
  "/forgot-password",
  validate(ForgotPasswordDto),
  controller.forgotPassword,
);
router.post(
  "/reset-password/:token",
  validate(ResetPasswordDto),
  controller.resetPassword,
);
router.post("/logout", authenticate, controller.logout);
router.get("/getMe", authenticate, controller.getMe);

export default router;
