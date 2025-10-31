import { MongoClient } from 'mongodb';
import { MONGODB_URI, DB_NAME } from '$env/static/private';

const uri = MONGODB_URI;
const dbName = DB_NAME;

let client;
let clientPromise;

if (!clientPromise) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getDb() {
  const clientConnected = await clientPromise;
  return clientConnected.db(dbName);
}
