import dotenv from 'dotenv';
import api from './api';
import log from '@lib/logger';

const { PORT = 3000 } = process.env;
dotenv.config({ silent: true });

api.listen(PORT, log.info(`> Listening on ${PORT}`));
