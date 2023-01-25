const {Router} = require('express');
const UserController = require('../controllers/user.controllers')


const userRouter = Router();


userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAll);
userRouter.get('/:userId', UserController.getOne);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

module.exports = userRouter