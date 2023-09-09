import { Router } from "express"
import { FieldController } from '../controllers/fields.js' 

export const fieldRouter = Router()

fieldRouter.get('/fields', FieldController.getAll)
fieldRouter.post('/fields', FieldController.create)

fieldRouter.get('/field/:id', FieldController.getById)
fieldRouter.patch('/field/:id', FieldController.update)
fieldRouter.delete('/field/:id,', FieldController.delete)