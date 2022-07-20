import { Router } from 'express';
import RoutesControlMiddleware from '../../../../../common/infra/http/middlewares/RoutesControlMiddleware';
import UserController from '../controllers/UserController';
import UploadImage from '../../../../../common/infra/http/middlewares/UploadImage';


const userRouter = Router();
const userController = new UserController();

userRouter.post('/login', userController.login);
userRouter.post('/', userController.create);
userRouter.get('/:userId', [RoutesControlMiddleware.required], userController.getById);
userRouter.get('/',[RoutesControlMiddleware.required], userController.list);
userRouter.patch('/:userId',[RoutesControlMiddleware.required], userController.update);
userRouter.delete('/:userId',[RoutesControlMiddleware.required], userController.delete);
userRouter.post('/:userId/photo',[RoutesControlMiddleware.required], [UploadImage.single('file')], userController.uploadPhoto);


export default userRouter;