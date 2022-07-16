import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { instanceToPlain } from 'class-transformer';

import AppContainer from '../../../../../common/container/index';
import AppError from '../../../../../common/errors/AppError';
import ParseZodValidationError from '../../../../../common/errors/ZodError';
import PaginationSchema  from '../../../../../common/infra/http/pagination/schemas/PaginationSchema';

import { CreateUserValidator, UpdateUserValidator } from '../validators/UserValidator';

import CreateUserService from '../../../services/CreateUserService';
import GetByIdUserService from '../../../services/GetByIdUserService';
import ListUserService from '../../../services/ListUserService';
import UpdateUserService from '../../../services/UpdateUserService';
import DeleteUserService from '../../../services/DeleteUserService';

class UserController {
  public async create(req: Request, res: Response){
    const data = await CreateUserValidator.parseAsync(req.body).catch((err) => {
      throw new AppError(ParseZodValidationError(err), StatusCodes.BAD_REQUEST);
    });

    try {
      const createUser = AppContainer.resolve<CreateUserService>(CreateUserService);
      const user = await createUser.execute({ data });
    
      return res.status(StatusCodes.CREATED).json({ id: user.id });

    } catch(err) {
      throw new AppError('Bad request', StatusCodes.BAD_REQUEST);
    }
  }

  public async getById(req: Request, res: Response){
    const userId = +req.params.userId;

    try {
      const user = await AppContainer.resolve<GetByIdUserService>(GetByIdUserService).execute({ userId });

      return res.status(StatusCodes.OK).json(instanceToPlain(user));

    } catch(err) {
      throw new AppError('Bad request', StatusCodes.BAD_REQUEST);
    }
  }

  public async list(req:Request, res:Response): Promise<Response> {
    const data = await PaginationSchema.parseAsync(req.query).catch((err) => {
      throw new AppError(ParseZodValidationError(err), StatusCodes.BAD_REQUEST);
    });

    try {
      const listUsers = AppContainer.resolve<ListUserService>(ListUserService);
      const users = await listUsers.execute({ data });

      return res.status(200).json(instanceToPlain(users));

    }catch(err) {
      throw new AppError('Bad request', StatusCodes.BAD_REQUEST);
    }
  }

  public async update(req: Request, res: Response){
    const data =await UpdateUserValidator.parseAsync(req.body).catch((err) => {
      throw new AppError(ParseZodValidationError(err), StatusCodes.BAD_REQUEST);
    });

    const userId = +req.params.userId;

    try {
      const updateUser = AppContainer.resolve<UpdateUserService>(UpdateUserService);
      const user = await updateUser.execute({ userId ,data });

      return res.status(StatusCodes.OK).json(instanceToPlain(user));

    } catch(err) {
      throw new AppError('Bad request', StatusCodes.BAD_REQUEST);
    }
  }

  public async delete(req: Request, res: Response){
    const userId = +req.params.userId;

    try {
      const deleteUser = AppContainer.resolve<DeleteUserService>(DeleteUserService);
      await deleteUser.execute( userId );

      return res.status(StatusCodes.OK).json({});

    } catch(err) {
      throw new AppError('Bad request', StatusCodes.BAD_REQUEST);
    }
  }
}

export default UserController;