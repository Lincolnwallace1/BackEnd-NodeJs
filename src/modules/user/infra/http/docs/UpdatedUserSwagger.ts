const UpdateUserSwagger = {
  tags: ['User'],
  summary: 'Update User',
  description: 'Update User',
  operationId: 'UpdateUserSwagger',
  parameters: [{
    in: 'path',
    name: 'userId',
    schema: {
      type: 'number',
    },
    required: true,
    description: 'userId',
  }],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          allOf: [
            { $ref: '#components/schemas/User' },
            {
              required: [],
            },
          ],
        },
        examples: {
          User: {
            value: {
              fullname: 'Lincoln Wallace',
              email: 'linkin10@gmail.com',
              password: 'senha123',
            },
          },
        },
      },
    },
  },
  security: [
    {
      BearerAuth: [],
      BasicAuth: [],
    },
  ],
  responses: {
    200: {
      $ref: '#/components/responses/SuccessfulRequestNoResponseBody',
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

export default UpdateUserSwagger;
