import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json';

import cors from 'cors'; 

import { router } from "../src/routes/index";

import './database';

//Configuração do servidor
const app = express();

app.use(cors());
app.use(router);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world'});
});

app.listen(3333, () => console.log('running on port 3333!'));
