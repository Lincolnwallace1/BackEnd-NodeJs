import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import Types from '../../../common/container/types';
import AppError from '../../../common/errors/AppError';
import StorageConfig from '../../../config/StorageConfig';

import IUserRepository from '@modules/user/repositories/IUserRepository';

interface IRequest {
  userId?: number;
  filename: string;
}

@injectable()
class UploadPhotoUserService {
  @inject(Types.UserRepository) private userRepository!: IUserRepository;

  public async execute({ userId, filename }: IRequest): Promise<void> {
    const user = await this.userRepository.find({ id: userId });
    if (!user) throw new AppError('User not found.', StatusCodes.NOT_FOUND); 

    await this.userRepository.update(user, { photo: `${StorageConfig.local.uploadFolder}/${filename}` });
  }
}

export default UploadPhotoUserService;
