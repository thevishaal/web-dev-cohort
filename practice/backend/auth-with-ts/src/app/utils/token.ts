import "dotenv/config";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";

export interface UserTokenPayload {
  id: string;
}

export const generateResetToken = () => {
  const rawToken = crypto.randomBytes(32).toString("hex");
  const hashToken = crypto.createHash("sha256").update(rawToken).digest("hex");
  return { rawToken, hashToken };
};

export const generateAccessToken = (payload: UserTokenPayload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET!, {
    expiresIn: parseInt(process.env.JWT_ACCESS_TOKEN_EXPIRES_IN!) || "15m",
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(
    token,
    process.env.JWT_ACCESS_TOKEN_SECRET!,
  ) as UserTokenPayload;
};

export const generateRefreshToken = (payload: UserTokenPayload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET!, {
    expiresIn: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN!) || "7d",
  });
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET!);
};
