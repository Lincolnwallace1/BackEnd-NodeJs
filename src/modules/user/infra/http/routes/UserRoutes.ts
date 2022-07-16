import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.create);
userRouter.get('/:userId', userController.getById);
userRouter.get('/', userController.list);
userRouter.patch('/:userId', userController.update);
userRouter.delete('/:userId', userController.delete);


export default userRouter;