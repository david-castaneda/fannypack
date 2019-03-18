import './env';
import './db';

import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

import { router } from './routes';

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(PORT, console.log(`> Listening on ${PORT}`));
