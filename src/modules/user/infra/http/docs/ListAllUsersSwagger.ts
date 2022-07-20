const ListAllUsersSwagger = {
  tags: ['User'],
  summary: 'List All Users',
  description: 'List all Users',
  operationId: 'ListAllUsersSwagger',
  parameters: [{
    $ref: '#/components/parameters/PaginationQueryOffset',
  }, {
    $ref: '#/components/parameters/PaginationQueryLimit',
  }],
  security: [
    {
      BearerAuth: [],
      BasicAuth: [],
    },
  ],
  responses: {
    200: {
      $ref: '#/components/responses/ListedUsers',
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

export default ListAllUsersSwagger;
