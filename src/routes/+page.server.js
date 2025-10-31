import { getDb } from '$lib/db.js';
import { serializeForClient } from '$lib/utils';

export async function load() {
	const db = await getDb();

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
