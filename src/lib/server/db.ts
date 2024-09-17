import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

export const dbPath: string = "comments.db"; // Define location of local database
export const sqliteDB = new Database(dbPath); // Create database object
export const db = drizzle(sqliteDB); // Drizzle ORM wrapper for SQLite database
