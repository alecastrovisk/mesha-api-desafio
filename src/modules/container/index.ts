import { UserRepository } from "../user/infra/UserRepository";
import { UserController } from "../user/interface/userController/UserController";
import CreateUserUseCase from "../user/applications/createUserUseCase/CreateUserUseCase";

const container = () => {
  const userRepository = new UserRepository()

  const createUserUseCase = new CreateUserUseCase({ userRepository });

  const userController = new UserController({ createUserUseCase });

  return { userController };

}

export default container;
