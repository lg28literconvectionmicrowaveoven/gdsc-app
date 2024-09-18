// TODO: implement a password based login system so users can come back to their users
// TODO: check for null username, username that already exists
import { db } from "$lib/server/db";
import { userTable } from "$lib/server/schema";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
export const load: PageServerLoad = async ({ cookies }) => {
	// Check if user_id cookie exists, if does, then redirect to main site
	const userId = cookies.get("user_id");
	if (userId != undefined) redirect(302, "/");
};

// Form actions
export const actions = {
	register_user: async ({ cookies, request }) => {
		// Create entry in users table with serialized user_id stored in cookie for username retrieval
		const formData = await request.formData();
		const userId = await db
			.insert(userTable)
			.values({ username: formData.get("Username").trim() })
			.returning({ insertedId: userTable.id });
		cookies.set("user_id", userId[0].insertedId, { path: "/", httpOnly: true, secure: true });
		redirect(302, "/");
	}
};
