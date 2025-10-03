import { User } from './user.entity';
// CONTRATO QUE VA A TENER EL REPOSITORIO
export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  save(user: User): Promise<User>;
}

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');
