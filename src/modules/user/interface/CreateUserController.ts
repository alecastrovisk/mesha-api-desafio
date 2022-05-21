import express, { Request, Response } from 'express';

import CreateUserUseCase  from '../applications/createUserUseCase/CreateUserUseCase';
import { Params, UserDTO } from '../domain/UserDTO';

interface ContructorParams {
  createUserUseCase: CreateUserUseCase;
}

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(
    { createUserUseCase }: ContructorParams
  ) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data: Params = {
        name: request.body.name,
        cpf: request.body.cpf,
        email: request.body.email,
        phone: request.body.phone,
        knowledges: request.body.knowledges
      } 
  
      const user = new UserDTO({
        ...data
      });
  
      await user.validate();
  
      await this.createUserUseCase.execute({
        ...data 
      });
  
      return response.status(201).send();
    } catch (error) {
      return response.status(400).send(error);
    }
  }
}

export { CreateUserController };