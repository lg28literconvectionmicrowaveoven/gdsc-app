import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
	const user_id = cookies.get("gdsc_user_id");
	if (user_id == undefined) redirect(302, "/signup");
};
