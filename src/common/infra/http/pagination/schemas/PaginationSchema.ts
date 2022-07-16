import * as Z from 'zod';

const defaultPageSize = 50;

const PaginationSchema = Z.object({
  offset: Z.string().default('0').transform((val) => Number(val) || 0),
  limit: Z.string().default(`${defaultPageSize}`).transform((val) => Number(val) || defaultPageSize),
});

export default PaginationSchema;
