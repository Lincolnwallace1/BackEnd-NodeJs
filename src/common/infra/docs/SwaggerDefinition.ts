import Parameters from "./Parameters";
import Paths from './Paths';
import Tags from './Tags';
import Schemas from './Schemas';
import Responses from './Responses';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'User API',
    version: '1.0.0',
    description: 'User API',
    host: 'http://localhost:3333/api/v1'
  },
  servers:[
    {
      url: 'http://localhost:3333/api/v1',
      description: 'Server',
    }
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'BearerAuthtentication',
      },
      BasicAuth: {
        type: 'http',
        scheme: 'basic',
      },
    },
    schemas: Schemas,
    parameters: Parameters,
    responses: Responses,
  },
  tags: Tags,
  paths: Paths,
};

export default swaggerDefinition;