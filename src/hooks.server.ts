// TODO: create reply system
// TODO: comments explaining code, README
import { dbPath, sqliteDB } from "$lib/server/db";
import fs from "fs";
import path from "path";

const absoluteDBPath = path.resolve(dbPath);
export const handle = async ({ event, resolve }) => {
	if (!fs.existsSync(absoluteDBPath)) fs.writeFileSync(absoluteDBPath, "");
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
