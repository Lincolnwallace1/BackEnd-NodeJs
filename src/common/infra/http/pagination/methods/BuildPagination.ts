import * as Z from 'zod';
import { instanceToInstance } from 'class-transformer';

import PaginationSchema from '../schemas/PaginationSchema';
import IPaginationResponse from '../responses/IPaginationResponse';

const BuildPagination = <T>(records: T[], filters: Z.infer<typeof PaginationSchema>, total: number): IPaginationResponse<T> => ({
  records: instanceToInstance(records),
  metadata: {
    offset: filters.offset,
    items: records.length,
    total,
  },
});

export default BuildPagination;
