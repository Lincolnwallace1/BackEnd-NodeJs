import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';
import * as Z from 'zod';


import Types from '../../../common/container/types';
import AppError from '../../../common/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';
import { BuildPagination, IPaginationResponse, PaginationSchema } from '../../../common/infra/http/pagination';

interface IRequest{
  data: Z.infer<typeof PaginationSchema>;
}

@injectable()
class ListUserService {
  @inject(Types.UserRepository) private userRepository!: IUserRepository;

  public async execute({ data }: IRequest): Promise<IPaginationResponse<User>> {
    const [records, count] = await this.userRepository.list({},[], data.limit, data.offset);
    if (!records) throw new AppError('Could not find User', 404);

    return BuildPagination(records, { ...data }, count);
  }
}

export default ListUserService;
