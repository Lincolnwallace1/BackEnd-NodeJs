import * as Z from 'zod';

const CreateUserValidator = Z.object({
  name: Z.string().min(3).max(255),
  email: Z.string().min(3).max(255),
  password: Z.string().min(3).max(255),
});

const UpdateUserValidator = Z.object({
  name: Z.string().min(3).max(255).optional(),
  email: Z.string().min(3).max(255).optional(),
  password: Z.string().min(3).max(255).optional(),
});

export { CreateUserValidator, UpdateUserValidator };