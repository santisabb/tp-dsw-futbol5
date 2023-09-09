import { EmployeeModel } from '../models/local-file-system/employee.js'
import { validateEmployee, validatePartialEmployee } from '../schemas/employee.js'

export class EmployeeController {
    static async getAll (req, res) {
        const { cuil } = req.query
        const employees = await EmployeeModel.getAll({ cuil })
        res.json(employees)
    }

    static async getById (req, res) {
        const { id } = req.params
        const employee = await EmployeeModel.getById({ id })
        if (employee) return res.json(employee)
        res.status(404).json({ message: 'Employee not found' })
    }

    static async create(req, res) {
        const result = validateEmployee(req.body)

        if (!result.success){
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const newEmployee = await EmployeeModel.create({ input: result.data })

        res.status(201).json(newEmployee)
    }

    static async delete(req, res) {
        const { id } = req.params

        const result = await EmployeeModel.delete({ id })

        if(result === false) {
            return res.status(404).json({ message: 'Employee not found' })
        }

        return res.json({ message: 'Employee deleted successfully' })
    }

    static async update(req, res) {
        const result = validatePartialEmployee(req.body)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const { id } = req.params

        const updatedEmployee = await EmployeeModel.update({ id, input: result.data })

        return res.json(updatedEmployee)
    }
}