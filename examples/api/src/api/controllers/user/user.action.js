import User from '@models/user';
import route from './user.routing';

/**
 * Create a user
 * @param {*} req
 * @param {*} res
 */
const create = async (req, res) => {
  // Requires these fields in the body of the request
  const { firstName, lastName, email } = req.body;

  try {
    const user = await User.create({ firstName, lastName, email });

    res.send({ success: true, data: user });
  } catch (error) {
    res.send({ success: false, error });
  }
};

/**
 * rad a user
 * @param {*} req
 * @param {*} res
 */
const read = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.find({ id });

    res.send({ success: true, data: users });
  } catch (error) {
    res.send({ success: false, error });
  }
};

/**
 * Update a user
 * @param {*} req
 * @param {*} res
 */
const update = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  // Info to be updated
  const info = { firstName, lastName };

  try {
    const user = await User.findByIdAndUpdate(id, info, { new: true });

    res.send({ success: true, data: user });
  } catch (error) {
    res.send({ success: false, error });
  }
};

/**
 * Remove a user
 * @param {*} req
 * @param {*} res
 */
const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findOneAndDelete(id);

    res.send({ success: true });
  } catch (error) {
    res.send({ success: false, error });
  }
};

export default { create, read, update, remove };
