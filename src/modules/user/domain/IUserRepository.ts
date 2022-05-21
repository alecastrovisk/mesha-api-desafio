import { User } from '../infra/UserModel';
import { Params } from './UserDTO';

interface IUsersRepository {
  create(data: Params): Promise<void>;
  validate(id: string): Promise<void>;
  list(): Promise<User[]>;
}

export { IUsersRepository };