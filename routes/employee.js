import { Router } from "express"
import { EmployeeController } from '../controllers/employees.js' 

export const employeeRouter = Router()

employeeRouter.get('/employees', EmployeeController.getAll)
employeeRouter.post('/employees', EmployeeController.create)

employeeRouter.get('/employees/:id', EmployeeController.getById)
employeeRouter.patch('/employees/:id', EmployeeController.update)
employeeRouter.delete('/employees/:id,', EmployeeController.delete)