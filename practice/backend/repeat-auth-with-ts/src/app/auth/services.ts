import { eq } from "drizzle-orm";
import { db } from "../../common/db/index.js";
import { usersTable } from "../../common/db/schema.js";
import type { SignUpPayloadType } from "./models.js";
import type { Request, Response } from "express";
import crypto from "node:crypto";

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
  const hashPassword = crypto
    .createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  // Todo: create token

  const [user] = await db
    .insert(usersTable)
    .values({
      firstName,
      lastName,
      email,
      password: hashPassword,
      salt,
      verificationToken: "afdajs",
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
