import express, { Request, Response } from 'express';

import CreateUserUseCase  from '../../applications/createUserUseCase/CreateUserUseCase';
import ListUserUseCase from '../../applications/listUserUseCase/ListUserUseCase';
import ValidateUserUseCase from '../../applications/validateUserUserCase/ValidateUserUseCase';

import { Params, UserDTO } from '../../domain/UserDTO';

interface CreateUserContructorParams {
  createUserUseCase: CreateUserUseCase;
}

interface ListUserConstructorParams {
  listUserUseCase: ListUserUseCase;
}

interface ValidateUserConstructorParams {
  validateUserUseCase: ValidateUserUseCase
}

class UserController {
  private createUserUseCase: CreateUserUseCase;
  private listUserUseCase: ListUserUseCase;
  private validateUserUseCase: ValidateUserUseCase;

  constructor(
    { createUserUseCase }: CreateUserContructorParams,
    { listUserUseCase }: ListUserConstructorParams,
    { validateUserUseCase }: ValidateUserConstructorParams,
  ) {
    this.createUserUseCase = createUserUseCase;
    this.listUserUseCase = listUserUseCase;
    this.validateUserUseCase = validateUserUseCase;
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

  async validate(request: Request, response: Response): Promise<Response>{
    try {
      const { id } = request.params;
      this.validateUserUseCase.execute(id);

      return response.status(200).send();
    } catch (error) {
      return response.status(404).send(error);
    }
  }
}

export { UserController };