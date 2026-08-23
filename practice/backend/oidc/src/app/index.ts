import "dotenv/config";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { randomBytes } from "node:crypto";
import cookieParser from "cookie-parser";

import { PORT } from "../index.js";
import path from "node:path";
import {
  clientSchema,
  consentSchema,
  signInSchema,
  signUpSchema,
  userInfoSchema,
  type ConsentSchemaType,
} from "./utils/modal.js";
import { email, success, ZodError } from "zod";
import "./db/index.js";
import { clientsTable, tokensTable, usersTable } from "./db/schema.js";
import { eq } from "drizzle-orm";
import { db } from "./db/index.js";
import type { JWTClaims } from "./utils/user-token.js";
import { PRIVATE_KEY, PUBLIC_KEY } from "./utils/cert.js";

export function createApplication(): Express.Application {
  const app = express();

  // middlewares
  app.use(express.json());
  app.use(cookieParser());

  //* set view engine
  app.set("view engine", "ejs");
  app.set("views", path.resolve("views"));

  // get route to check server is running
  app.get("/", (_req, res) => {
    res.status(200).json({
      message: "Hello I am from OIDC AUTH SERVER",
    });
  });

  //* OIDC EndPoints
  app.get("/.well-known/openid-configuration", (req, res) => {
    const ISSUER = process.env.APP_URL ?? `http://localhost:${PORT}`;
    res.status(200).json({
      issuer: ISSUER,
      authorization_endpoint: `${ISSUER}/o/authenticate`,
      token_endpoint: `${ISSUER}/o/token`,
      userinfo_endpoint: `${ISSUER}/o/userinfo`,
      jwks_uri: `${ISSUER}/o/public-certs`,
    });
  });

  //* authenticate screen
  app.get("/o/authenticate", async (req, res) => {
    try {
      const { clientId } = req.query as ConsentSchemaType;

      if (!clientId) {
        res.sendFile(path.resolve("public", "unauthorize.html"));
        return;
      }

      const [client] = await db
        .select()
        .from(clientsTable)
        .where(eq(clientsTable.id, clientId));

      if (!client) {
        res.sendFile(path.resolve("public", "unauthorize.html"));
        return;
      }

      const token = req.cookies["signed-in"];
      if (!token) {
        res.sendFile(path.resolve("public", "signin.html"));
        return;
      }
      const decoded = jwt.verify(token, PRIVATE_KEY) as JWTClaims;

      if (!decoded) {
        res.sendFile(path.resolve("public", "signin.html"));
        return;
      }

      res.render("consent", {
        clientName: client.displayName,
        redirectUri: client.redirectUri,
        user: {
          email: decoded.email,
        },
      });
    } catch (error) {
      console.error("Create client error:", error);

      if (error instanceof ZodError) {
        const message = error.issues.map((e) => e.message).join(", ");

        return res.status(400).json({
          success: false,
          message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  app.get("/o/authenticate/sign-in", (_req, res) => {
    res.sendFile(path.resolve("public", "signin.html"));
  });

  //* signup-screen
  app.get("/o/authenticate/sign-up", (_req, res) => {
    res.sendFile(path.resolve("public", "signup.html"));
  });

  //* create an user
  app.post("/o/authenticate/sign-up", async (req, res) => {
    try {
      const validatedData = signUpSchema.parse(req.body);

      const [existingUser] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, validatedData.email));

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message:
            "An user already exists with this email" + validatedData.email,
        });
      }

      const hashPassword = await bcrypt.hash(validatedData.password, 10);

      const [user] = await db
        .insert(usersTable)
        .values({
          name: validatedData.name,
          email: validatedData.email,
          password: hashPassword,
        })
        .returning({
          id: usersTable.id,
          name: usersTable.name,
          email: usersTable.email,
          emailVerified: usersTable.emailVerified,
          createdAt: usersTable.createdAt,
          updatedAt: usersTable.updatedAt,
        });

      return res.status(200).json({
        success: true,
        message: `User created successfully`,
        data: user,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const message = error.issues.map((e) => e.message).join(", ");
        res.status(400).json({ success: false, message });
        throw new Error(message);
      }
      throw error;
    }
  });

  //* signin user
  app.post("/o/authenticate/sign-in", async (req, res) => {
    try {
      const validatedData = signInSchema.parse(req.body);

      const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, validatedData.email));

      if (!user || !user.password) {
        res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
        return;
      }

      const isMatch = await bcrypt.compare(
        validatedData.password,
        user.password,
      );

      if (!isMatch) {
        res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
        return;
      }

      const ISSUER = process.env.APP_URL || "http://localhost:8080";
      const now = Math.floor(Date.now() / 1000);

      const claims: JWTClaims = {
        iss: ISSUER,
        sub: user.id,
        email: user.email,
        email_verified: user.emailVerified,
        exp: now + 3600,
        name: user.name,
      };

      const token = jwt.sign(claims, PRIVATE_KEY, {
        algorithm: "RS256",
      });

      res.cookie("signed-in", token, {
        secure: true,
        httpOnly: true,
        sameSite: true,
        maxAge: 7 * 24 * 60 * 60,
      });

      await db
        .insert(tokensTable)
        .values({ userId: user.id, tokenName: "refresh", token });

      res.json({ tokenName: "refresh", token });
    } catch (error) {
      if (error instanceof ZodError) {
        const message = error.issues.map((e) => e.message).join(", ");
        res.status(400).json({ success: false, message });
        throw error;
      }
    }
  });

  //* jwks_uri
  app.get("/o/public-certs", (_req, res) => {
    res.status(200).json({
      PUBLIC_KEY: PUBLIC_KEY.toString("utf-8"),
    });
  });

  //* get userInfo
  app.post("/o/userinfo", async (req, res) => {
    try {
      const validatedData = userInfoSchema.parse(req.body);

      if (validatedData.tokenName !== "refresh") {
        res.status(400).json({ success: false, message: "Token is invalid" });
        return;
      }

      const decoded = jwt.verify(validatedData.token, PRIVATE_KEY) as JWTClaims;
      if (!decoded) {
        res.status(400).json({ success: false, message: "Token is invalid" });
        return;
      }
      const [tokenInfo] = await db
        .select()
        .from(tokensTable)
        .where(eq(tokensTable.token, validatedData.token));

      if (
        !tokenInfo ||
        !tokenInfo.tokenName ||
        validatedData.tokenName !== tokenInfo.tokenName
      ) {
        res.status(400).json({ success: false, message: "Token is invalid" });
        return;
      }

      if (tokenInfo.used) {
        res
          .status(400)
          .json({ success: false, message: "Token is already used" });
        return;
      }

      if (tokenInfo.userId !== decoded.sub) {
        res
          .status(404)
          .json({ success: false, message: "User not found. Invalid token" });
        return;
      }

      // const [user] = await db
      //   .select({
      //     id: usersTable.id,
      //     name: usersTable.name,
      //     email: usersTable.email,
      //     emailVerified: usersTable.emailVerified,
      //   })
      //   .from(usersTable)
      //   .where(eq(usersTable.id, tokenInfo.userId));

      // if (!user) {
      //   res
      //     .status(404)
      //     .json({ success: false, message: "User not found. Invalid token" });
      //   return;
      // }

      await db
        .update(tokensTable)
        .set({ used: true })
        .where(eq(tokensTable.token, validatedData.token));

      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: {
          id: decoded.sub,
          name: decoded.name,
          email: decoded.email,
          emailVerified: decoded.email_verified,
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const message = error.issues.map((e) => e.message).join(", ");
        res.status(400).json({ success: false, message });
        throw error;
      }
      throw error;
    }
  });

  //* show the client form
  app.get("/o/client", (_req, res) => {
    res.sendFile(path.resolve("public", "client.html"));
  });

  //* create a client
  app.post("/o/client", async (req, res) => {
    try {
      const validatedData = clientSchema.parse(req.body);

      const [existingClient] = await db
        .select()
        .from(clientsTable)
        .where(eq(clientsTable.displayName, validatedData.displayName))
        .limit(1);

      if (existingClient) {
        res
          .status(409)
          .json({ success: false, message: "Client already exists." });
        return;
      }

      const clientSecret = randomBytes(32).toString("hex");

      const [client] = await db
        .insert(clientsTable)
        .values({
          displayName: validatedData.displayName,
          appUrl: validatedData.appUrl,
          redirectUri: validatedData.redirectUri,
          clientSecret,
        })
        .returning({ clientId: clientsTable.id });

      return res.status(200).json({
        success: true,
        data: { clientId: client?.clientId, clientSecret },
      });
    } catch (error) {
      console.error("Create client error:", error);

      if (error instanceof ZodError) {
        const message = error.issues.map((e) => e.message).join(", ");

        return res.status(400).json({
          success: false,
          message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  return app;
}
