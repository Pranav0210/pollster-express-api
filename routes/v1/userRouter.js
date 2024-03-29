const { Router } = require("express");
const userController  = require("../../controllers/userController.js")
const userRouter = Router();

userRouter.route('/')
    .get(userController.getUsers)
    
userRouter.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

userRouter.route('/:id/polls')
    .get(userController.getUserPolls)

module.exports = userRouter;