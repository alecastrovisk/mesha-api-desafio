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

  async execute( userId: string, validation: boolean){
    this.userRepository.validate(userId, validation);
    
  }
}

export default ValidateUserUseCase;