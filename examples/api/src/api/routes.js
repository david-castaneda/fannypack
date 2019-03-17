import express from 'express';
import { user } from './controllers';

const router = express.Router();

// User Routes
router
  .route('/user')
  .post(user.create)
  .put(user.update);

router
  .route('/user/:id')
  .get(user.read)
  .delete(user.remove);

export default router;
