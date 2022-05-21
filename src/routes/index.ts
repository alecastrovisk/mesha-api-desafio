import express, { Router, Request, Response } from 'express';
import container from '../modules/container';

const router = Router();

router.use(express.json());

const { createUserController } = container();


router.post('/register', async (req: Request, res: Response ) => 
  await createUserController.handle(req, res)
);

export { router };