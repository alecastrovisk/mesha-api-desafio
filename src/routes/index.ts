import express, { Router, Request, Response } from 'express';
import container from '../modules/container';

const router = Router();

router.use(express.json());

const { userController } = container();

router.post('/register', async (req: Request, res: Response) => 
  await userController.create(req, res)
);

router.get('/register', async(req: Request, res: Response) =>
  await userController.list(req, res)
)
export { router };