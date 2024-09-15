import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
export const userTable = sqliteTable("users", {
	id: integer("id").primaryKey(),
	username: text("username")
});
export const commentsTable = sqliteTable("comments", {
	comment_id: integer("comment_id").primaryKey(),
	user_id: integer("user_id"),
	comment: text("comment")
});
