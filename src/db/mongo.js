import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

export async function connect() {
  if (!client.isConnected?.()) { // For newer mongodb client use appropriate check
    await client.connect();
    console.log('Connected to MongoDB');
  }
}

export function getClient() {
  return client;
}
