import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';
import * as Z from 'zod';


import SecurityConfig from '../../../config/SecurityConfig';
import Types from '../../../common/container/types';
import AppError from '../../../common/errors/AppError';

import { LoginUserValidator } from '../infra/http/validators/UserValidator';
import IResponse from '../responses/IUserLoginResponse';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  data: Z.infer<typeof LoginUserValidator>;
}

@injectable()
class LoginUserService {
  constructor(
    @inject(Types.UserRepository) private userRepository: IUserRepository,
  ) {}

  public async execute({ data }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.find({ email: data.email });
    if (!user) throw new AppError('Could not find user', StatusCodes.NOT_FOUND);

    if (user.password && !await argon2.verify(user.password, data.password)) {
      throw new AppError('Password incorrect', StatusCodes.UNAUTHORIZED);
    }

    const accessToken = jwt.sign({
      userId: user.id, login: user.login, name: user.name, email: user.email,
    }, SecurityConfig.jwt.key, {
      expiresIn: SecurityConfig.jwt.exp,
    });

    const refreshToken = jwt.sign({
      userId: user.id, login: user.login, name: user.name, email: user.email,
    }, SecurityConfig.jwt.keyRefresh, {
      expiresIn: SecurityConfig.jwt.refreshExp,
    });

    return {
      accessToken,
      accessTokenExpireIn: SecurityConfig.jwt.exp,
      refreshToken,
      refreshTokenExpireIn: SecurityConfig.jwt.refreshExp,
      user: {
        ...user,
      },
    };
  }
}

export default LoginUserService;
