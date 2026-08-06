import type { Request, Response } from "express";
import * as authService from "./services.js";
import { signUpPayloadModel } from "./models.js";

export const signUp = async (req: Request, res: Response) => {
  const validationResult = await signUpPayloadModel.safeParseAsync(req.body);

  if (validationResult.error) {
    return res.status(400).json({
      message: "Body validation failed!",
      error: validationResult.error.issues,
    });
  }

  return await authService.signUp(validationResult.data, req, res);
};
