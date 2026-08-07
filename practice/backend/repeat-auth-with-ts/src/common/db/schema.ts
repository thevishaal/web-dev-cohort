import {
  pgTable,
  varchar,
  uuid,
  boolean,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),

  firstName: varchar("first_name", { length: 50 }).notNull(),
  lastName: varchar("last_name", { length: 45 }),

  email: varchar("email", { length: 322 }).notNull().unique(),
  emailVerified: boolean("email_verified").default(false),
  verificationToken: text("verification_token"),

  password: varchar("password", { length: 66 }),
  salt: text("salt"),
  resetToken: text("reset_token"),
  resetTokenExpiry: timestamp("reset_token_expiry"),

  refreshToken: text("refresh_token"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});

export const studentsTable = pgTable("students", {
  id: uuid("id").primaryKey().defaultRandom(),

  name: varchar("name", { length: 79 }).notNull(),
  email: varchar("email", { length: 322 }).notNull().unique(),

  age: varchar("age").notNull(),
  class: varchar("class").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
