import { db } from "$lib/server/db";
import { userTable } from "$lib/server/schema";
import { redirect } from "@sveltejs/kit";
export const actions = {
	register_user: async ({ cookies, request }) => {
		const username = await request.formData();
		const user_id = await db
			.insert(userTable)
			.values({ username: username.get("Username") })
			.returning({ insertedId: userTable.id });
		await cookies.set("user_id", user_id[0].insertedId, { path: "/" });
		redirect(302, "/");
	}
};
