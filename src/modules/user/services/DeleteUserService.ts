import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import Types from '../../../common/container/types';
import AppError from '../../../common/errors/AppError';

import IUserRepository from '../repositories/IUserRepository';

@injectable()
class DeleteUserService {
  @inject(Types.UserRepository) private userRepository!: IUserRepository;

  public async execute(userId: number): Promise<void> {
    const user = await this.userRepository.find({ id: userId });
    if (!user) throw new AppError('Could not find User', StatusCodes.NOT_FOUND);

    await this.userRepository.delete(user.id);
  }
}

export default DeleteUserService;
