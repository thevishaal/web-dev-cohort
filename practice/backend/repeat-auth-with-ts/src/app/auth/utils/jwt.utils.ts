import jwt, { type SignOptions } from "jsonwebtoken";
import crypto from "node:crypto";
import { env } from "../../../env.js";

export interface UserTokenPayload {
  id: string;
  email: string;
}

export const generateResetToken = () => {
  const rawToken: string = crypto.randomBytes(32).toString("hex");
  const hashToken: string = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  return { rawToken, hashToken };
};

export const generateAccessToken = (payload: UserTokenPayload): string => {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });
};

export const verifyAccessToken = (token: string): UserTokenPayload => {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as UserTokenPayload;
};

export const generateRefreshToken = (payload: UserTokenPayload): string => {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

export const verifyRefreshToken = (token: string): UserTokenPayload => {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as UserTokenPayload;
};
