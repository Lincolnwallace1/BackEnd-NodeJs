class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly body: object | null;

  constructor(message: string, statusCode = 502, body: object | null = null) {
    this.message = message;
    this.statusCode = statusCode;
    this.body = body;
  }
}

export default AppError;
