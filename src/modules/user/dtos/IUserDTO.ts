interface ICreateUserDTO {
  name: string;
  login: string;
  email: string;
  password: string;
}

interface IUpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
}

export { ICreateUserDTO, IUpdateUserDTO };