import { Container } from 'inversify';
import Types from './types';

import IUserRepository from '../../../src/modules/user/repositories/IUserRepository';
import UserRepository from '../../../src/modules/user/infra/typeorm/repositories/UserRepository';

const container = new Container();

container.bind<IUserRepository>(Types.UserRepository).to(UserRepository);

export default container;