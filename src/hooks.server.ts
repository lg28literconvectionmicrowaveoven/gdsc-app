// TODO: create reply system
// TODO: hosting
// TODO: profile pictures
// TODO: comment deletion
import { dbPath, sqliteDB } from "$lib/server/db";
import fs from "fs";

// Create SQLite DB file and tables if they do not exist already
export const handle = async ({ event, resolve }) => {
	if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, "");
	sqliteDB
		.prepare(
			"CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)"
		)
		.run();
	sqliteDB
		.prepare(
			"CREATE TABLE IF NOT EXISTS comments (comment_id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, day INTEGER NOT NULL, month TEXT NOT NULL, year INTEGER NOT NULL, hour INTEGER NOT NULL, minute INTEGER NOT NULL, second INTEGER NOT NULL, comment TEXT)"
		)
		.run();
	const response = await resolve(event);
	return response;
};
