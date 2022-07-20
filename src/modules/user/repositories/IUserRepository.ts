import User from '../infra/typeorm/entities/User';

import { ICreateUserDTO, IUpdateUserDTO } from '../dtos/IUserDTO';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  find(where: object | object[], relations?: string[]): Promise<User | null>;
  list(where?: object | object[], relations?: string[], take?: number, skip?: number): Promise<[User[], number]>;
  update(user: User, data: IUpdateUserDTO): Promise<User>;
  delete(id: number): Promise<boolean>;
}

export default IUserRepository;