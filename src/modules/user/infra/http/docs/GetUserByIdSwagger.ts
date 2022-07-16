const GetByIdUserSwagger = {
  tags: ['User'],
  summary: 'Get By Id User',
  description: 'Get By Id User',
  operationId: 'GetByIdUserSwagger',
  parameters: [{
    in: 'path',
    name: 'user',
    schema: {
      type: 'number',
    },
    required: true,
    description: 'userId',
  }],
  security: [
    {
      BearerAuth: [],
      BasicAuth: [],
    },
  ],
  responses: {
    200: {
      $ref: '#/components/responses/GetByIdUser',
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

export default GetByIdUserSwagger;
