import { AppDataSource } from "@common/infra/typeorm";
import { injectable } from 'inversify';

import User from '../entities/User';
import IUserRepository from "../../../repositories/IUserRepository";

import {ICreateUserDTO, IUpdateUserDTO} from '../../../dtos/IUserDTO';

@injectable()
class UserRepository implements IUserRepository {
  private ormRepository = AppDataSource.getRepository(User);

  public async create(data: ICreateUserDTO ): Promise<User>{
    const user = this.ormRepository.create(data);
    return await this.ormRepository.save(user);
  }

  public async find(where: object | object[], relations?: string[] ): Promise<User | null > {
    return await this.ormRepository.findOne({where, relations});
  }

  public async list(where?: object | object[], relations?: string[], take?: number, skip?: number): Promise<[User[], number]> {
    return this.ormRepository.findAndCount({
      where, relations, take, skip,
    });
  }

  public async update(user:User, data: IUpdateUserDTO): Promise<User> {
    this.ormRepository.merge(user,data);
    return await this.ormRepository.save(user);
  }

  public async delete(id: number): Promise<boolean> {
    return this.ormRepository.delete(id).then(() => true).catch(() => false);
  }
}

export default UserRepository;