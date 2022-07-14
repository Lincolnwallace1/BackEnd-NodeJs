import 'reflect-metadata';
import { DataSource } from '../../../../node_modules/typeorm/index';
import DataBaseConfig from '../../../config/DataBaseConfig';

import User from '../../../modules/user/infra/typeorm/entities/User';

import {NewDB1657820765188} from '../../../config/migrations/1657820765188-NewDB'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DataBaseConfig.host,
  port: DataBaseConfig.port,
  username: DataBaseConfig.username,
  password: DataBaseConfig.password,
  database: DataBaseConfig.database,
  entities: [User],
  migrations: [NewDB1657820765188], 
  synchronize: false,
  logging: DataBaseConfig.logging,
});