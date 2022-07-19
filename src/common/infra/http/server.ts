import express from 'express';
import figlet from 'figlet';
import chalk from 'chalk';
import 'express-async-errors';

import { AppDataSource } from '../typeorm/index';
import swaggerUiExpress = require ("swagger-ui-express");

import Routes from '../http/routes/index';
import swaggerDefinition  from '../docs/SwaggerDefinition';
import GlobalExceptionMiddleware from '../http/middlewares/GlobalExceptionMiddleware';

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json());

  app.use('/api/v1',Routes);
  
  app.use('/api/v1/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDefinition, { customSiteTitle: 'User API'}));
  
  app.use(GlobalExceptionMiddleware);

  return app.listen(3333, () => {
    console.log(chalk.cyan(figlet.textSync('User API')));
    console.log(chalk.redBright("Server started on port 3333"));
  })
})