import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import Types from '../../../common/container/types';
import AppError from '../../../common/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  userId: number ;
}

@injectable()
class GetUserByIdService {
  @inject(Types.UserRepository) private userRepository!: IUserRepository;

  public async execute({ userId }: IRequest): Promise<User> {
    const user = await this.userRepository.find({ id: userId });
    if (!user) throw new AppError( 'User not found', StatusCodes.NOT_FOUND );

    return user;
  }
}

export default GetUserByIdService;
