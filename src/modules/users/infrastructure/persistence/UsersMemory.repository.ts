import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../core/ports/users.repository';
import { User } from '../../core/user.entity';

@Injectable()
export class UsersMemoryRepository implements UsersRepository {
  private users: User[] = [];

  findById(id: string): Promise<User> {
    return Promise.resolve(this.users.find((user) => user.id === id) as User);
  }

  create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  update(id: string, user: User): Promise<User> {
    this.users = this.users.map((user) => (user.id === id ? user : user));
    return Promise.resolve(user);
  }

  delete(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
    return Promise.resolve();
  }
}
