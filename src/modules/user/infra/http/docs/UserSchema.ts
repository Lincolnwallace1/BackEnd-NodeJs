const UserSchemaDoc = {
  User: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
  },
  GetByIdUserResponse: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
      login:{
        type: 'string',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
    },
  },
  UserResponseBody: {
    allOf: [
      { $ref: '#components/schemas/BasicResource' },
      { $ref: '#components/schemas/User' },
    ],
  },
};

export default UserSchemaDoc;
