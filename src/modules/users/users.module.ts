import { Module } from '@nestjs/common';
import { UsersService } from './core/users.service';
import { USERS_REPOSITORY } from './constants';
import { UsersMemoryRepository } from './infrastructure/persistence/UsersMemory.repository';

@Module({
  controllers: [],
  providers: [
    UsersService,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersMemoryRepository,
    },
  ],
})
export class UsersModule {}
