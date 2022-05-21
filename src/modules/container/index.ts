import { UserRepository } from "../user/infra/UserRepository";
import { UserController } from "../user/interface/userController/UserController";
import CreateUserUseCase from "../user/applications/createUserUseCase/CreateUserUseCase";
import ListUserUseCase from "../user/applications/listUserUseCase/ListUserUseCase";

const container = () => {
  const userRepository = new UserRepository()

  const createUserUseCase = new CreateUserUseCase({ userRepository });
  const listUserUseCase = new ListUserUseCase({ userRepository });

  const userController = new UserController(
    {createUserUseCase},
    {listUserUseCase}
  );

  return { userController };

}

export default container;
