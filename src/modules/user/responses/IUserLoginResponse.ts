interface IUserLoginResponse {
  accessToken: string;
  accessTokenExpireIn: string;
  refreshToken: string;
  refreshTokenExpireIn: string,
  user: {
    id?: number;
    login?: string;
    name?: string;
    email?: string;
  };
}

export default IUserLoginResponse;
