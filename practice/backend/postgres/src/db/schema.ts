import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const seatsTable = pgTable("seats", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  isBooked: integer("is_booked").default(0),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdateFn(() => new Date()),
});
