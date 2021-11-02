import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const userToSave = new User();
    Object.assign(userToSave, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(userToSave);
    return userToSave;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const userToUpdate = receivedUser;
    userToUpdate.admin = true;
    userToUpdate.updated_at = new Date();
    return userToUpdate;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
