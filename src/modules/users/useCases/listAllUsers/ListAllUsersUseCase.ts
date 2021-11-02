import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExists = this.usersRepository.findById(user_id);
    console.log(userAlreadyExists);
    if (!userAlreadyExists) {
      throw new Error("User not found");
    }

    if (!userAlreadyExists.admin) {
      throw new Error("Not authorize");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
