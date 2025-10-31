import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

let client;
let clientPromise;

export async function getDb() {
	if (!clientPromise) {
		const uri = env.MONGODB_URI;
		const dbName = env.DB_NAME;

		if (!uri || !uri.startsWith('mongodb')) {
			console.error('Invalid or missing MongoDB URI:', uri);
			throw new Error('MONGODB_URI is missing or invalid');
		}

		if (!dbName) {
			console.error('Missing DB_NAME environment variable');
			throw new Error('DB_NAME is missing');
		}

		client = new MongoClient(uri);
		clientPromise = client.connect();
	}

	const connected = await clientPromise;
	const db = connected.db(env.DB_NAME);
	return db;
}
