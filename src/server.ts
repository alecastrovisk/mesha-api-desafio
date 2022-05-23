import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json';

import { router } from "../src/routes/index";

import './database';

const app = express();

app.use(router);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world'});
});

app.listen(3333, () => console.log('running on port 3333!'));
