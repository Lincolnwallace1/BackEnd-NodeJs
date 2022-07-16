const CreateUserSwagger = {
  tags: ['User'],
  summary: 'Create User',
  description: 'Create User',
  operationId: 'Create User Swagger',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          allOf: [
            { $ref: '#components/schemas/User' },
            {
              required: ['name', 'email', 'password'],
            },
          ],
        },
        examples: {
          USER: {
            value: {
              name: 'Lincoln Wallace',
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
      BearerAuth: [],
      BasicAuth: [],
    },
  ],
  responses: {
    201: {
      $ref: '#/components/responses/SuccessfullyCreated',
    },
    400: {
      $ref: '#/components/responses/BadRequest',
    },
    401: {
      $ref: '#/components/responses/UnauthorizedError',
    },
    422: {
      $ref: '#/components/responses/UnprocessableEntity',
    },
  },
};

export default CreateUserSwagger;
