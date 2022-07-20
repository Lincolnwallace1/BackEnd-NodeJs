const PaginationResponseDoc = {
  PaginationResponseMetadata: {
    type: 'object',
    properties: {
      metadata: {
        type: 'object',
        properties: {
          offset: {
            type: 'integer',
            minimum: 0,
            example: 1,
          },
          items: {
            type: 'integer',
            minimum: 0,
            example: 1,
          },
          total: {
            type: 'integer',
            minimum: 0,
            example: 20,
          },
        },
      },
    },
  },
};

export default PaginationResponseDoc;
