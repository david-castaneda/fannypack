import { Router } from 'express';

import user from '../controllers/user';

const router = Router();

router.get('/', (req, res) => res.send('Happy Hacking! 🚀'));

/* Example user routes */
router.post('/user', user.create);
router.get('/user', user.read);
router.put('/user/:id', user.update);
router.delete('/user/:id', user.remove);

export { router };
