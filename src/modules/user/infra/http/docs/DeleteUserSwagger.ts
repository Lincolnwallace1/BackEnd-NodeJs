const DeleteUserSwagger = {
  tags: ['User'],
  summary: 'Delete By Id User',
  description: 'Delete by Id User',
  operationId: 'DeleteUserSwagger',
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
    204: {
      description: 'User successfully deleted',
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

export default DeleteUserSwagger;
