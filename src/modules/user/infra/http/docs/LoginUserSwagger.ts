const LoginUserSwagger = {
  tags: ['User'],
  summary: 'Login endpoint',
  description: 'Login endpoint',
  operationId: 'Login User Swagger',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
          },
          required: ['email', 'password'],
        },
        examples: {
          default: {
            value: {
              email: 'linkin10@gmail.com',
              password: 'senha123',
            },
          },
        },
      },
    },
    required: true,
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      $ref: '#/components/responses/SuccessfullyLogged',
    },
    400: {
      description: 'Problem with request body',
    },
    401: {
      description: 'Password incorrect',
    },
    404: {
      description: 'User Not Found',
    },
  },
};

export default LoginUserSwagger;
