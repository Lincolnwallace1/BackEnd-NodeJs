const BasicSchemas = {
  'attributes.Id': {
    type: 'integer',
    description: 'ID',
    example: 1,
  },
  BasicResource: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/attributes.Id',
      },
      created: {
        type: 'string',
        format: 'date-time',
      },
      updated: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export default BasicSchemas;
