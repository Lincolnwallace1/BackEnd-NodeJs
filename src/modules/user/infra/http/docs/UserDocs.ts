import UserSchema from './UserSchema';
import CreateUser from './CreateUserSwagger';
import ListByIdUser from './GetUserByIdSwagger';
import UpdateUser from './UpdatedUserSwagger';
import ListAllUser from './ListAllUsersSwagger';
import DeleteUser from './DeleteUserSwagger';
import UploadPhotoUser from './UploadUserPhotoSwagger';
import LoginUser from './LoginUserSwagger'

const UserDocs = {
  UserSchema,
  CreateUser,
  ListByIdUser,
  UpdateUser,
  ListAllUser,
  DeleteUser,
  UploadPhotoUser,
  LoginUser,
};

export default UserDocs;
