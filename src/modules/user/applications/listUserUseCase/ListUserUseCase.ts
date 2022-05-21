import { UserRepository } from "../../infra/UserRepository";

interface ContructorParams {
  userRepository: UserRepository;
}

class ListUserUseCase {
  private userRepository: UserRepository

  constructor(
    {userRepository}: ContructorParams
  ){
    this.userRepository = userRepository;
  }

  async execute(){
    const users = await this.userRepository.list();
    return users;
  }
}

export default ListUserUseCase;