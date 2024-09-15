import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

export const db_path: string = "comments.sqlite";
export const sqlite_db = new Database(db_path);
export const db = drizzle(sqlite_db);
