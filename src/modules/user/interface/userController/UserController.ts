import express, { Request, Response } from 'express';

import CreateUserUseCase  from '../../applications/createUserUseCase/CreateUserUseCase';
import ListUserUseCase from '../../applications/listUserUseCase/ListUserUseCase';
import { Params, UserDTO } from '../../domain/UserDTO';

interface CreateUserContructorParams {
  createUserUseCase: CreateUserUseCase;
}

interface ListUserConstructorParams {
  listUserUseCase: ListUserUseCase;
}

class UserController {
  private createUserUseCase: CreateUserUseCase;
  private listUserUseCase: ListUserUseCase;

  constructor(
    { createUserUseCase }: CreateUserContructorParams,
    { listUserUseCase }: ListUserConstructorParams
  ) {
    this.createUserUseCase = createUserUseCase;
    this.listUserUseCase = listUserUseCase;
  }

  async create(request: Request, response: Response): Promise<Response> {
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
  
  async list(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listUserUseCase.execute();
      return response.status(200).send({ users })

    } catch (error) {
      return response.status(400).send(error);
    }
  }
}

export { UserController };