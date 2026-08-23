import {
  boolean,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 50 }).notNull(),
  email: varchar("email", { length: 322 }).notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),

  password: text("password"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const tokenNameEnum = pgEnum("token_name", [
  "refresh",
  "access",
  "reset",
  "verification",
]);

export const tokensTable = pgTable("tokens", {
  id: serial("id").primaryKey(),
  tokenName: tokenNameEnum("token_name").notNull(),
  userId: uuid("user_id")
    .references(() => usersTable.id)
    .notNull(),
  used: boolean("used").default(false).notNull(),
  token: text("token"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const clientsTable = pgTable("clients", {
  id: uuid("id").defaultRandom().primaryKey(),
  displayName: varchar("display_name", { length: 200 }).notNull().unique(),
  redirectUri: text("redirect_uri").notNull(),
  appUrl: text("app_url"),
  clientSecret: text("client_secret"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
