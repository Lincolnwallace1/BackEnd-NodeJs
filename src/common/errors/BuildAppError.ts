import AppError from './AppError';

interface IInputBuildError {
  statusCode: number;
  data?: never;
  error: {
    message: string;
    code: string;
  }
}

const BuildAppError = (data: IInputBuildError): AppError => new AppError(
  data.error.message,
  data.statusCode,
  data.error.code,
  data.data,
);

export default BuildAppError;
