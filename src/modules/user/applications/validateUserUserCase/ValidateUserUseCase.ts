import { UserRepository } from "../../infra/UserRepository";

interface ContructorParams {
  userRepository: UserRepository;
}

class ValidateUserUseCase {
  private userRepository: UserRepository;

  constructor(
    {userRepository}: ContructorParams
  ) {
    this.userRepository = userRepository;
  }

  async execute( userId: string){
    this.userRepository.validate(userId);
    
  }
}

export default ValidateUserUseCase;