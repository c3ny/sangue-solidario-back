import { User } from '../user.entity';

export interface UsersRepository {
  findById(id: string): Promise<User>;
  create(user: User): Promise<User>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
