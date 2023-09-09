import { Router } from "express"
import { GrillController } from '../controllers/grills.js' 

export const grillRouter = Router()

grillRouter.get('/grills', GrillController.getAll)
grillRouter.post('/grills', GrillController.create)

grillRouter.get('/grill/:id', GrillController.getById)
grillRouter.patch('/grill/:id', GrillController.update)
grillRouter.delete('/grill/:id,', GrillController.delete)