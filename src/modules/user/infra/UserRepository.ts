import { Repository } from "typeorm";
import { AppDataSource } from "../../../database";

import { User } from "./UserModel";

import {
  IUsersRepository,
} from "../domain/IUserRepository";

import { Params } from "../domain/UserDTO";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    cpf,
    email,
    phone,
    knowledges
  }: Params): Promise<void> {
    const user = this.repository.create({
      name,
      cpf,
      email,
      phone,
      knowledges
    });

    await this.repository.save(user);
  }

  async validate(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

export { UserRepository };