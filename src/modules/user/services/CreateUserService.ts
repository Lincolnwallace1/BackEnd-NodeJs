import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';
import * as Z from 'zod';
import * as argon2 from 'argon2';
import randomstring from 'randomstring';

import Types from '../../../common/container/types';
import AppError from '../../../common/errors/AppError';

import User from '../infra/typeorm/entities/User';

import { CreateUserValidator } from '../infra/http/validators/UserValidator';

import IUserRepository from '../repositories/IUserRepository';

interface IRequest{
  data: Z.infer<typeof CreateUserValidator>;
}

@injectable()
class CreateUserService{
  @inject(Types.UserRepository) private userRepository!: IUserRepository;

  public async execute({ data }: IRequest): Promise<User>{
    if (await this.userRepository.find({ email: data.email })) {
      throw new AppError('Email already exist', StatusCodes.CONFLICT);
    }

    const login = `User${randomstring.generate(8)}`; 

    if (await this.userRepository.find({ login: login })){
      throw new AppError('Login already exist', StatusCodes.CONFLICT);
    };

    if (data.password) {
      const hash = await argon2.hash(data.password);
      data.password = hash;
    }

    return await this.userRepository.create({...data, login})
    
  }
}

export default CreateUserService;