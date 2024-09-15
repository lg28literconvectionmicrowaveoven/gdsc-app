import { db } from '$lib/server/db';
import { userTable } from '$lib/server/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		page_server_data: await db.select().from(userTable)
	};
};
