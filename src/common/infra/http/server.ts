import express from 'express';
import chalk from 'chalk';

import { AppDataSource } from '../typeorm/index';
import routes from '../http/routes/index';
import swaggerUiExpress = require ("swagger-ui-express");


AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json());

  app.use(routes);

  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'User API',
    },
    servers:[
      {
        url: 'http://localhost:3333/v1',
      }
    ],
    apis: ['./src/http/routes/*.ts']
  };


  app.use('/api/v1/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDefinition,{
    customSiteTitle: 'User API',
  }));


  return app.listen(3333, () => {
    console.log("Server started on port 3333");
    // console.log(chalk.green("Server started on port 3333"));
  })
})