import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

export const dbPath: string = "comments.sqlite";
export const sqliteDB = new Database(dbPath);
export const db = drizzle(sqliteDB);
