import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { commentsTable, userTable } from "$lib/server/schema";
import { asc, eq } from "drizzle-orm";

// On page load
export const load: PageServerLoad = async ({ cookies }) => {
	// Get user_id, if does not exist, redirect to sign up
	const userId = cookies.get("user_id");
	if (userId == undefined) redirect(302, "/signup");
	// Get current username
	const username = await db
		.select()
		.from(userTable)
		.where(eq(userTable.id, parseInt(userId)));
	// Get comments with usernames
	const comments = await db
		.select({
			comment_id: commentsTable.comment_id,
			username: userTable.username,
			day: commentsTable.day,
			month: commentsTable.month,
			year: commentsTable.year,
			hour: commentsTable.hour,
			minute: commentsTable.minute,
			second: commentsTable.second,
			comment: commentsTable.comment
		})
		.from(commentsTable)
		.innerJoin(userTable, eq(commentsTable.user_id, userTable.id))
		.orderBy(asc(commentsTable.comment_id));
	// Return to frontend for displaying
	return {
		current_username: username[0].username,
		comments: comments
	};
};

// Form actions
export const actions = {
	post_comment: async ({ cookies, request }) => {
		// Receive comment and current timestamp to append into comments table
		const postTime = new Date();
		const formData = await request.formData();
		await db.insert(commentsTable).values({
			user_id: parseInt(cookies.get("user_id")),
			day: postTime.getDate(),
			month: postTime.toLocaleString("default", { month: "long" }),
			year: postTime.getFullYear(),
			hour: postTime.getHours(),
			minute: postTime.getMinutes(),
			second: postTime.getSeconds(),
			comment: formData.get("Comment").trim()
		});
		redirect(302, "/");
	}
};
