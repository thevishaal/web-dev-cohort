import type { Request, Response } from "express";
import { signupPayloadModel, singinPayloadModel } from "./models.js";
import { db } from "../../db/index.js";
import { usersTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import crypto from "node:crypto";
import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
} from "../utils/token.js";

class AuthenticationController {
  private hashToken(token: string) {
    return crypto.createHash("sha256").update(token).digest("hex");
  }

  public async handleSignup(req: Request, res: Response) {
    const validationResult = await signupPayloadModel.safeParseAsync(req.body);

    if (validationResult.error)
      return res.status(400).json({
        message: "body validation failed.",
        error: validationResult.error.issues,
      });

    const { firstName, lastName, email, password } = validationResult.data;

    const [existingUser] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUser)
      return res.status(409).json({
        message: `User already exist with this email ${email}`,
        error: "conflict",
      });

    const salt = crypto.randomBytes(32).toString("hex");
    const hash = crypto
      .createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    const { rawToken, hashToken } = generateResetToken();

    const [user] = await db
      .insert(usersTable)
      .values({
        firstName,
        lastName,
        email,
        password: hash,
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

    // TODO: email send karni h
    console.log("Verification Token:", rawToken);

    return res
      .status(201)
      .json({ message: "user has been created successfully", data: user });
  }

  public async handleSignin(req: Request, res: Response) {
    const validation = await singinPayloadModel.safeParseAsync(req.body);

    if (validation.error) {
      return res.status(400).json({
        message: "body validation failed",
        error: validation.error.issues,
      });
    }

    const { email, password } = validation.data;

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    if (!user.emailVerified)
      return res.json({ message: "Email verified first" });

    const hashPassword = crypto
      .createHmac("sha256", user.salt!)
      .update(password)
      .digest("hex");

    if (hashPassword !== user.password)
      return res.status(401).json({ message: "Inavalid credentials" });

    const accessToken = generateAccessToken({ id: user.id });
    const refreshToken = generateRefreshToken({ id: user.id });

    await db
      .update(usersTable)
      .set({ refreshToken: this.hashToken(refreshToken) })
      .where(eq(usersTable.id, user.id));

    return res.status(200).json({
      message: "Signin Success",
      data: {
        id: user.id,
        accessToken,
        refreshToken,
      },
    });
  }

  public async handleVerifyEmail(req: Request, res: Response) {
    const token: string = String(req.params.token);

    if (!token) return res.json({ message: "Token is missing" });

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.verificationToken, this.hashToken(token)));

    if (!user) return res.status(401).json({ message: "User not found" });

    await db
      .update(usersTable)
      .set({ emailVerified: true, verificationToken: null })
      .where(eq(usersTable.id, user.id));

    return res
      .status(200)
      .json({ message: "User Verified", data: { id: user.id } });
  }
}

export default AuthenticationController;
