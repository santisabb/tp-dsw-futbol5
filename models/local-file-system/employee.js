import { randomUUID } from 'node:crypto'
import employees from '../../employee.json' assert { type: 'json'}

export class EmployeeModel {
    static async getAll( { nameAndSurname }) {
        if (employees.cuil) {
            return employees.filter(
                employee => employee.genre.some(n => n.toLowerCase() === nameAndSurname.toLowerCase())
            )
        }
        return employees
    }

    static async getById({ id }) {
        const employee = employees.find( employee => employee.id === id)
        return employee
    }

    static async create({ input }){
        const newEmployee = {
            id: randomUUID(),
            ...input
        }

        employees.push(newEmployee)

        return newEmployee
    }

    static async update({ id, input }) {
        const employeeIndex = employees.findIndex(employee => employee.id === id)
        if (employeeIndex === -1) return false

        employees[employeeIndex] = {
            ...employees[employeeIndex],
            ...input
        }

        return employees[employeeIndex]
    }

    static async delete({ id }) {
        const employeeIndex = employees.findIndex(employee => employee.id === id)
        if (employeeIndex === -1) return false

        employees.splice(employeeIndex, 1)
        return true
    }
}