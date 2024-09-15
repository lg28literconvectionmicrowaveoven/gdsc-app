import { relations } from 'drizzle-orm';
import { int, varchar, text, serial } from 'drizzle-orm/mysql-core';
export const usersTable = {
	id: serial('id').primaryKey(),
	username: varchar('username', { length: 64 }).notNull()
};
export const commentsTable = {
	comment_id: serial('comment_id').primaryKey(),
	user_id: int('user_id').notNull(),
	comment: text('comment')
};
export const userIdRelation = relations(commentsTable, ({ one }) => ({
	user: one(usersTable, {
		fields: [commentsTable.user_id],
		references: [usersTable.id]
	})
}));
export const commentsRelation = relations(usersTable, ({ many }) => ({
	comments: many(commentsTable)
}));
