import { createConnection } from "typeorm";
import DataBaseConfig from '../../../config/DataBaseConfig';

createConnection({
  type: "postgres",
  host: DataBaseConfig.host,
  port: DataBaseConfig.port,
  username: DataBaseConfig.username,
  password: DataBaseConfig.password,
  database: DataBaseConfig.database,
  entities: [],
  synchronize: false,
  logging: DataBaseConfig.logging,
  ssl: DataBaseConfig.ssl,
}).then(() => {
  console.log('Database connected successfully');
}).catch((error) => {
  console.log('Database connection error: ' + error);
});