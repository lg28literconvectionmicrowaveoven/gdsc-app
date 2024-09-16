// TODO: implement a password based login system so users can come back to their users
import { db } from "$lib/server/db";
import { userTable } from "$lib/server/schema";
import { redirect } from "@sveltejs/kit";
export const actions = {
	register_user: async ({ cookies, request }) => {
		const formData = await request.formData();
		const userId = await db
			.insert(userTable)
			.values({ username: formData.get("Username") })
			.returning({ insertedId: userTable.id });
		await cookies.set("user_id", userId[0].insertedId, { path: "/" });
		redirect(302, "/");
	}
};
