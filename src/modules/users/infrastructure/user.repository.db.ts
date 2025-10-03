import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
// ADAPTADOR SECUNDARIO - REPOSITORIO (DB SIMULADA)
@Injectable()
export class UserRepositoryDB implements UserRepository {
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
