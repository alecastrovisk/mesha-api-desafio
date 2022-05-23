import { UserRepository } from "../user/infra/UserRepository";
import { UserController } from "../user/interface/userController/UserController";
import CreateUserUseCase from "../user/applications/createUserUseCase/CreateUserUseCase";
import ListUserUseCase from "../user/applications/listUserUseCase/ListUserUseCase";
import ValidateUserUseCase from "../user/applications/validateUserUserCase/ValidateUserUseCase";

//Container do usuário para injeção de dependência
const container = () => {
  const userRepository = new UserRepository()

  const createUserUseCase = new CreateUserUseCase({ userRepository });
  const listUserUseCase = new ListUserUseCase({ userRepository });
  const validateUserUseCase = new ValidateUserUseCase({ userRepository });

  const userController = new UserController(
    {createUserUseCase},
    {listUserUseCase},
    {validateUserUseCase}
  );

  return { userController };

}

export default container;
