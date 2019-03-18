import mongoose from 'mongoose';

const { DB_USERNAME, DB_PASSWORD, DB_URL } = process.env;

/**
 * MongoDB options
 */
const options = {
  user: DB_USERNAME,
  pass: DB_PASSWORD,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const db = async () => {
  if (DB_URL) {
    Promise.resolve(
      mongoose.connect(
        DB_URL,
        options,
      ),
    );

    return '> DB connected';
  } else {
    return '> No DB Connection found';
  }
};

db()
  .then(message => console.log(message))
  .catch(e => console.log(e.message));
