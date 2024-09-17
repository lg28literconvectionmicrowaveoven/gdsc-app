import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
// Define table schemas for the Database
export const userTable = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	username: text("username")
});
export const commentsTable = sqliteTable("comments", {
	comment_id: integer("comment_id").primaryKey({ autoIncrement: true }),
	user_id: integer("user_id").notNull(),
	day: integer("day").notNull(),
	month: text("month").notNull(),
	year: integer("year").notNull(),
	hour: integer("hour").notNull(),
	minute: integer("minute").notNull(),
	second: integer("second").notNull(),
	comment: text("comment").notNull()
});
