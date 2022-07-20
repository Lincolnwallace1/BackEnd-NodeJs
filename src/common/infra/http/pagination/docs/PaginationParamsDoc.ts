const PaginationParamsDoc = {
  PaginationQueryOffset: {
    in: 'query',
    name: 'offset',
    description: 'Offset.',
    schema: {
      type: 'integer',
      minimum: 0,
      default: 0,
    },
    required: false,
  },
  PaginationQueryLimit: {
    in: 'query',
    name: 'limit',
    description: 'Limit.',
    schema: {
      type: 'integer',
      minimum: 0,
      default: 12,
    },
    required: false,
  },
  PaginationQueryDisablePagination: {
    in: 'query',
    name: 'disablePagination',
    description: 'True if want to get all records at once.',
    schema: {
      type: 'boolean',
      default: false,
    },
    required: false,
  },
};

export default PaginationParamsDoc;
