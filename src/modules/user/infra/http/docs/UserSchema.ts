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

  LoginUserResponse: {
    type: 'object',
    properties: {
      acessToken: {
        type: 'string',
      },
      acessTokenExpireIn: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
      },
      refreshTokenExpireIn: {
        type: 'string',
      },
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          login: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          photo: {
            type: 'string',
          },
        },
      },
    },
  },
};

export default UserSchemaDoc;
