import UserDocs from '../../../../src/modules/user/infra/http/docs/UserDocs';

const Paths = {
  // User endpoints
  '/users/login': { post: UserDocs.LoginUser },
  '/users/': { post: UserDocs.CreateUser, get: UserDocs.ListAllUser },
  '/users/{userId}': { get: UserDocs.ListByIdUser, patch: UserDocs.UpdateUser, delete: UserDocs.DeleteUser },
  '/users/{userId}/photo': { post: UserDocs.UploadPhotoUser },
};

export default Paths;