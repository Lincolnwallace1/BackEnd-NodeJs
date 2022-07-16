import UserDocs from '../../../../src/modules/user/infra/http/docs/UserDocs';

const Paths = {
  // User endpoints
  '/users/': { post: UserDocs.CreateUser, get: UserDocs.ListAllUser },
  '/users/{user}': { patch: UserDocs.UpdateUser, delete: UserDocs.DeleteUser, get: UserDocs.ListByIdUser },
  // '/users/{user}/avatar': { post: UserDocs.UploadAvatar },
};

export default Paths;