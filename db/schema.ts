import { relations } from "drizzle-orm";
import {
  integer,
  text,
  boolean,
  pgTable,
  serial,
  timestamp,
  bigint,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  clerkId: text("clerkId").notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  photo: text("photo").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});


export const wallet = pgTable("wallet", {
    chainuid: text("chainuid").primaryKey(),
    username: text("name").notNull().references(() => users.name), // Foreign key for name
    userId: text("user_id").notNull().references(() => users.id), // Foreign key for userId
    useremail: text("email").notNull().references(() => users.email), // Foreign key for email
});



export const accountRelations = relations(users, ({ many }) => ({
    wallets: many(wallet),
}));

export const walletRelations = relations(wallet, ({ one }) => ({
    account: one(users, { fields: [wallet.userId], references: [users.id] }), // Fixing the reference
}));

