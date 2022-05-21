import { UserRepository } from "../user/infra/UserRepository";
import { CreateUserController } from "../user/interface/CreateUserController";
import CreateUserUseCase from "../user/applications/createUserUseCase/CreateUserUseCase";

const container = () => {
  const userRepository = new UserRepository()

  const createUserUseCase = new CreateUserUseCase({ userRepository });

  const createUserController = new CreateUserController({ createUserUseCase });

  return { createUserController };

}

export default container;
