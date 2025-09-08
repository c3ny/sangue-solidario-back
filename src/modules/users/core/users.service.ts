import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from './ports/users.repository';
import { USERS_REPOSITORY } from '../constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY) private readonly usersRepository: UsersRepository,
  ) {}
}
