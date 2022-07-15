import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { instanceToPlain } from 'class-transformer';

import AppContainer from '@common/container';
import AppError from '@common/errors/AppError';
import ParseZodValidationError from '@common/errors/ZodError';

import { CreateUserValidator, UpdateUserValidator } from '../validators/UserValidator';

import CreateUserService from '../../../services/CreateUserService';

class UserController {
  public async create(req: Request, res: Response){
    const data = await CreateUserValidator.parseAsync(req.body).catch((err) => {
      throw new AppError(ParseZodValidationError(err), StatusCodes.BAD_REQUEST);
    });

    const createUser = AppContainer.get<CreateUserService>(CreateUserService);
    const user = await createUser.execute({ data });

    return res.status(StatusCodes.CREATED).json({ id: user.id });

  }
}

export default UserController;