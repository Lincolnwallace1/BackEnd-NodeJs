const UploadPhotoSwagger = {
  tags: ['User'],
  summary: 'Upload User Photo',
  description: 'Upload User Photo',
  operationId: 'Upload Photo Swagger',
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
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            file: {
              type: 'string',
              format: 'binary',
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
    204: {
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

export default UploadPhotoSwagger;
