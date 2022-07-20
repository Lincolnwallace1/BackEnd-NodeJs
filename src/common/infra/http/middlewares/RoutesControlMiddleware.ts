import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../../../errors/AppError';
import Types from '../../../container/types';
import AuthConfig from '../../../../config/SecurityConfig';
import Container from '../../../container';

import IUserRepository from '../../../../../src/modules/user/repositories/IUserRepository';

interface IDecodedParams {
  iat: number;
  exp: number;
  userId: number;
}

const publicKey = AuthConfig.jwt.key;

const RoutesControlMiddleware = {

  required: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userRepository = Container.get<IUserRepository>(Types.UserRepository);

    if (!req.headers.authorization) {
      throw new AppError('Missing authorization header', 401);
    }

    const authHeader = req.headers.authorization;
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer') {
      throw new AppError('Authentication method not supported', 401);
    }

    try {
      const decoded = <IDecodedParams><unknown>verify(token, publicKey);
      const user = await userRepository.find({ id: decoded.userId });
      // req.auth = { user: user ? user.id : 0 };
      return next();
    } catch (err) {
      throw new AppError('Token is incorrect', 401);
    }
  }
}

export default RoutesControlMiddleware;