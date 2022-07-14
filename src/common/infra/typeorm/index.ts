import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from '../../../../node_modules/typeorm/index';
import DataBaseConfig from '../../../config/DataBaseConfig';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DataBaseConfig.host,
  port: DataBaseConfig.port,
  username: DataBaseConfig.username,
  password: DataBaseConfig.password,
  database: DataBaseConfig.database,
  entities: [],
  synchronize: false,
  logging: DataBaseConfig.logging,
});