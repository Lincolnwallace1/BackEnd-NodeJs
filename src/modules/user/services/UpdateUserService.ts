import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';
import * as Z from 'zod';
import * as argon2 from 'argon2';

import Types from '../../../common/container/types';
import AppError from '../../../common/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

import { UpdateUserValidator } from '../infra/http/validators/UserValidator';


interface IRequest{
  userId: number;
  data: Z.infer<typeof UpdateUserValidator>
}

@injectable()
class CreateUserService{
  
  @inject(Types.UserRepository) private userRepository!: IUserRepository;

  public async execute({userId, data }: IRequest): Promise<User>{
    const user = await this.userRepository.find({ id: userId });
    if (!user) {
      throw new AppError('User not found', StatusCodes.NOT_FOUND);
    }

    if(data.email){
      if (await this.userRepository.find({ email: data.email })) {
        throw new AppError('Email already exist', StatusCodes.CONFLICT);
      }
    }

    if (data.password) {
      const hash = await argon2.hash(data.password);
      data.password = hash;
    }

    return await this.userRepository.update(user, data ) 
  }
}

export default CreateUserService;