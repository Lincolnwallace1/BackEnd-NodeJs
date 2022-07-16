import { Request, Response, NextFunction } from 'express';
import AppError from '../../../errors/AppError';
import TypeormErrorHandler from '../../../errors/TypeormError';

const GlobalExceptionMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _: NextFunction,
): Response<AppError> => {
  const handledError = TypeormErrorHandler(err);

  if (handledError instanceof AppError) {
    return res.status(handledError.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err ? err.message : 'Internal Server Error',
  });
};

export default GlobalExceptionMiddleware;
