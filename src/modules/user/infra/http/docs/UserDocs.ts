import UserSchema from './UserSchema';
import CreateUser from './CreateUserSwagger';
import ListByIdUser from './GetUserByIdSwagger';
import UpdateUser from './UpdatedUserSwagger';
import ListAllUser from './ListAllUsersSwagger';
import DeleteUser from './DeleteUserSwagger';
import UploadPhotoUser from './UploadUserPhotoSwagger';

const UserDocs = {
  UserSchema,
  CreateUser,
  ListByIdUser,
  UpdateUser,
  ListAllUser,
  DeleteUser,
  UploadPhotoUser,
};

export default UserDocs;
