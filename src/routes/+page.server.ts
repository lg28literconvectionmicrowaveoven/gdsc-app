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
	const comments = await db.select().from(commentsTable).orderBy(asc(commentsTable.comment_id));
	return {
		username: username[0].username,
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
