export const prerender = false;

import { DB_NAME } from '$env/static/private';
import { serializeForClient } from '$lib/utils';
import { getClient } from '../db/mongo';

export async function load() {
	const client = getClient();
    const db = client.db(DB_NAME);
	const [source, personal, skills, contacts, about, projects] = await Promise.all([
		db.collection('SOURCE').findOne({}),
		db.collection('PERSONAL').findOne({}),
		db.collection('SKILLS').findOne({}),
		db.collection('CONTACTS').find({}).toArray(),
		db.collection('ABOUT').findOne({}),
		db.collection('PROJECTS').find({}).toArray()
	]);

	return {
		source: serializeForClient(source),
		personal: serializeForClient(personal),
		skills: serializeForClient(skills),
		contacts: serializeForClient(contacts),
		about: serializeForClient(about),
		projects: serializeForClient(projects)
	};
}
