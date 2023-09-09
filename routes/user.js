import { Router } from "express"
import { UserController } from '../controllers/users.js' 

export const userRouter = Router()

userRouter.get('/users', UserController.getAll)
userRouter.post('/users', UserController.create)

userRouter.get('/user/:id', UserController.getById)
userRouter.patch('/user/:id', UserController.update)
userRouter.delete('/user/:id,', UserController.delete)