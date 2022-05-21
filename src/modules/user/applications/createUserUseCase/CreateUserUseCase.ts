import { UserRepository } from "../../infra/UserRepository";
import { Params } from "../../domain/UserDTO";

interface ContructorParams {
  userRepository: UserRepository;
}

class CreateUserUseCase {
  private userRepository: UserRepository
  constructor({ userRepository }: ContructorParams) {
    this.userRepository = userRepository; 
  }

  async execute({
    name,
    email,
    cpf,
    phone,
    knowledges
   }: Params): Promise<void> {
    await this.userRepository.create({
      name,
      email,
      cpf,
      phone,
      knowledges
    })
  }
}
export default CreateUserUseCase; 