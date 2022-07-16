import 'reflect-metadata';
import { DataSource } from '../../../../node_modules/typeorm/index';
import DataBaseConfig from '../../../config/DataBaseConfig';

import User from '../../../modules/user/infra/typeorm/entities/User';

import NewDB from '../../../config/migrations/1658006821946-NewDB'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DataBaseConfig.host,
  port: DataBaseConfig.port,
  username: DataBaseConfig.username,
  password: DataBaseConfig.password,
  database: DataBaseConfig.database,
  entities: [User],
  migrations: [NewDB], 
  synchronize: false,
  logging: DataBaseConfig.logging,
});