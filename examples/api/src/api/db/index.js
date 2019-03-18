import mongoose from 'mongoose';
import log from '@lib/logger';

const { DB_USERNAME, DB_PASSWORD, DB_URL } = process.env;

/**
 * MongoDB options
 */
const options = {
  user: DB_USERNAME,
  pass: DB_PASSWORD,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

const db = async () => {
  if (!DB_URL) return '> No DB Connection found';

  await mongoose.connect(DB_URL, options); //not await?
  return '> DB connected';
};

db()
  .then(message => log.info(message))
  .catch(e => log.error(e.message));
