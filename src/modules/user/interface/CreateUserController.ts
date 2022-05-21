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
    const {
      name,
      cpf,
      email,
      phone,
      knowledges,
    } = request.body;

    const user = new UserDTO({
      name,
      cpf,
      email,
      phone,
      knowledges,
    });

    await user.validate();

    await this.createUserUseCase.execute({
      name,
      cpf,
      email,
      phone,
      knowledges, 
    });

    return response.status(201).send();
  }
}

export { CreateUserController };