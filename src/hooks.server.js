import { connect } from "./db/mongo";

connect()
  .then(() => console.log('MongoDB connection established before server start'))
  .catch((e) => console.error('MongoDB connection failed:', e));
