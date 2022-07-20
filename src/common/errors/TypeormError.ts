import { QueryFailedError } from 'typeorm';
import { StatusCodes } from 'http-status-codes';
import AppError from './AppError';

interface TypeormDriverError extends QueryFailedError {
  code: string,
  detail: string,
  query: string,
  lenght: number,
  schema: string,
  table: string,
  constraint: string
}

const TypeormErrorHandler = (error: Error): AppError | Error => {
  if (error instanceof QueryFailedError) {
    const postgresError = error as TypeormDriverError;

    // TODO add strings file
    return new AppError(
      'Query could not be executed',
      StatusCodes.UNPROCESSABLE_ENTITY,
      undefined,
      postgresError,
    );
  }

  return error;
};

export default TypeormErrorHandler;
