import { PaginationResponseDoc } from '../http/pagination';
import BasicShemas from '../docs/BasicSchemas';
import UserDoc from '../../../modules/user/infra/http/docs/UserDocs';


export const Schemas = {
  ...PaginationResponseDoc,
  ...BasicShemas,
  ...UserDoc,
};

export default Schemas;