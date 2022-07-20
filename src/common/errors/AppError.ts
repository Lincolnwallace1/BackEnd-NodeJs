class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly internalCode: string | undefined;

  public readonly data: any;

  constructor(message: string, statusCode = 500, internalCode?: string, data?: any) {
    this.message = message;
    this.statusCode = statusCode;
    this.internalCode = internalCode;
    this.data = data;
  }
}

export default AppError;
