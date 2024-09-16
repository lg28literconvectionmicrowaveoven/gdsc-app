import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { commentsTable, userTable } from "$lib/server/schema";
import { asc, eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ cookies }) => {
	const userId = cookies.get("user_id");
	if (userId == undefined) redirect(302, "/signup");
	const username = await db
		.select()
		.from(userTable)
		.where(eq(userTable.id, parseInt(userId)));
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
	return {
		current_username: username[0].username,
		comments: comments
	};
};

export const actions = {
	post_comment: async ({ cookies, request }) => {
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
			comment: formData.get("Comment")
		});
		redirect(302, "/");
	}
};
