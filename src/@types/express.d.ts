declare namespace Express {
  export interface Request {
    auth: {
      user: number;
    };
  }
}
