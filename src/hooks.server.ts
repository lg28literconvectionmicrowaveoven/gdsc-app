import { db_path, sqlite_db } from "$lib/server/db";
import fs from "fs";
import path from "path";

const absolute_db_path = path.resolve(db_path);
export const handle = async ({ event, resolve }) => {
	if (!fs.existsSync(absolute_db_path)) fs.writeFileSync(absolute_db_path, "");
	sqlite_db
		.prepare(
			"CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)"
		)
		.run();
	sqlite_db
		.prepare(
			"CREATE TABLE IF NOT EXISTS comments (comment_id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, day INTEGER NOT NULL, month TEXT NOT NULL, year INTEGER NOT NULL, hour INTEGER NOT NULL, minute INTEGER NOT NULL, second INTEGER NOT NULL, comment TEXT)"
		)
		.run();
	const response = await resolve(event);
	return response;
};
