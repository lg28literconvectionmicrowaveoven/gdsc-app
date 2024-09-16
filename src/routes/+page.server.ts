import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { commentsTable, userTable } from "$lib/server/schema";
import { asc } from "drizzle-orm";

export const load: PageServerLoad = async ({ cookies }) => {
	const user_id = await cookies.get("user_id");
	if (user_id == undefined) redirect(302, "/signup");
	const users = await db.select().from(userTable);
	const comments = await db.select().from(commentsTable).orderBy(asc(commentsTable.comment_id));
	return {
		current_user_id: parseInt(user_id),
		users: users,
		comments: comments
	};
};

export const actions = {
	post_comment: async ({ cookies, request }) => {
		const post_time = new Date();
		await db.insert(commentsTable).values({
			user_id: parseInt(cookies.get("user_id")),
			day: post_time.getDate(),
			month: post_time.toLocaleString("default", { month: "long" }),
			year: post_time.getFullYear(),
			hour: post_time.getHours(),
			minute: post_time.getMinutes(),
			second: post_time.getSeconds(),
			comment: await request.formData().get("Comment")
		});
		redirect(302, "/");
	}
};
