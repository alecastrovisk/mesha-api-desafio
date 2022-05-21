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

  async validate(id: string, validation: boolean): Promise<void> {
    const foundUser = await this.repository.findOneBy({ id });
    if(foundUser){
      await this.repository.save({
        id: foundUser.id,
        is_valid: validation
      });
    }
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

}

export { UserRepository };