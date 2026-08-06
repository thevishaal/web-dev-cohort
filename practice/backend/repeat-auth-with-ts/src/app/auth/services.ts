import { eq } from "drizzle-orm";
import { db } from "../../common/db/index.js";
import { usersTable } from "../../common/db/schema.js";
import type { SignInPayloadType, SignUpPayloadType } from "./models.js";
import type { Request, Response } from "express";
import crypto from "node:crypto";
import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  type UserTokenPayload,
} from "./utils/jwt.utils.js";

function hashPasswordFn(salt: string, password: string): string {
  return crypto.createHmac("sha256", salt).update(password).digest("hex");
}

function hashRefreshTokenFn(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export const signUp = async (
  data: SignUpPayloadType,
  req: Request,
  res: Response,
) => {
  const { firstName, lastName, email, password } = data;

  const [existingUser] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (existingUser) {
    return res.status(409).json({
      message: `User already exist with this email ${email}`,
      error: "conflict",
    });
  }

  const salt = crypto.randomBytes(32).toString("hex");
  // const hashPassword = crypto
  //   .createHmac("sha256", salt)
  //   .update(password)
  //   .digest("hex");

  const hashPassword = hashPasswordFn(salt, password);

  const { rawToken, hashToken } = generateResetToken();

  // TODO: send email to verify
  console.log("verification token:", rawToken);

  const [user] = await db
    .insert(usersTable)
    .values({
      firstName,
      lastName,
      email,
      password: hashPassword,
      salt,
      verificationToken: hashToken,
    })
    .returning({
      id: usersTable.id,
      firstName: usersTable.firstName,
      lastName: usersTable.lastName,
      email: usersTable.email,
      emailVerified: usersTable.emailVerified,
    });

  return res.status(201).json({
    message: "User has been created successfully",
    data: user,
  });
};

export const signIn = async (
  data: SignInPayloadType,
  req: Request,
  res: Response,
) => {
  const { email, password } = data;

  const [existingUser] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (!existingUser) {
    return res.status(401).json({
      message: `Invalid Credentials`,
      error: null,
    });
  }

  if (!existingUser.emailVerified) {
    return res.status(401).json({
      message: "Email verify first",
      error: null,
    });
  }

  // const hashPassword = crypto
  //   .createHmac("sha256", existingUser.salt!)
  //   .update(password)
  //   .digest("hex");
  const hashPassword = hashPasswordFn(existingUser.salt!, password);

  if (hashPassword !== existingUser.password) {
    return res.status(401).json({
      message: `Invalid Credentials`,
      error: null,
    });
  }

  const payload: UserTokenPayload = {
    id: existingUser.id,
    email: existingUser.email,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // const hashRefreshToken = crypto
  //   .createHash("sha256")
  //   .update(refreshToken)
  //   .digest("hex");

  const hashRefreshToken = hashRefreshTokenFn(refreshToken);

  await db
    .update(usersTable)
    .set({ refreshToken: hashRefreshToken })
    .where(eq(usersTable.id, existingUser.id));

  return res.status(200).json({
    message: "Signin Successfully",
    error: null,
    data: {
      accessToken,
      refreshToken,
    },
  });
};
