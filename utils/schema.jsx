import {
  pgTable,
  serial,
  varchar,
  integer,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  amount: integer("amount").notNull(),
  icon: varchar("icon").notNull(),
  createdBy: varchar("createdBy").notNull(),
});
