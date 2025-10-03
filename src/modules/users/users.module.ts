import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { USER_REPOSITORY } from './domain/user.repository';
import { UserRepositoryDB } from './infrastructure/user.repository.db';
import { UserController } from './infrastructure/user.controller';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryDB,
    },
  ],
})
export class UsersModule {}
