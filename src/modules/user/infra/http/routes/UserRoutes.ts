import { Router } from 'express';
import UserController from '../controllers/UserController';
import UploadImage from '../../../../../common/infra/http/middlewares/UploadImage';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.create);
userRouter.get('/:userId', userController.getById);
userRouter.get('/', userController.list);
userRouter.patch('/:userId', userController.update);
userRouter.delete('/:userId', userController.delete);
userRouter.post('/:userId/photo', [UploadImage.single('file')], userController.uploadPhoto);


export default userRouter;