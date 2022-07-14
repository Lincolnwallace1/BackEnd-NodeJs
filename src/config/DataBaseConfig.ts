import 'dotenv/config';

interface IDatabaseConfig {
  type: 'mysql' | 'mariadb' | 'postgres' | 'cockroachdb' | 'sqlite' | 'mssql' | 'sap' | 'oracle' | 'cordova' | 'nativescript' | 'react-native' | 'sqljs' | 'mongoDATABASE' | 'aurora-data-api' | 'aurora-data-api-pg' | 'expo' | 'better-sqlite3';
  host: string;
  username: string;
  password: string;
  database: string;
  port: number;
  logging: boolean;
}

const databaseConfig: IDatabaseConfig = {
  type: 'postgres',
  host: 'localhost',
  username: 'v4h',
  password: 'v4h',
  database: 'users',
  port:  5432,
  logging: true,
};

export default databaseConfig as IDatabaseConfig;
