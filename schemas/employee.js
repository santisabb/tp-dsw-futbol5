import { string, number, object } from "zod";

const employeeSchema = object({
    cuil: string(number({
        required_error: 'Cuil is required',
        invalid_type_error: 'Cuil must be an array of numbers'
    }).int().positive({
        invalid_type_error: 'Cuil must be an array of numbers integers and positive'
    })),
    nameAndSurname: string({
        required_error: 'Name and surname is required',
        invalid_type_error: 'Name and surname must be a string'
    })
})

export function validateEmployee(input){
    return employeeSchema.safeParse(input)
}

export function validatePartialEmployee(input){
    return employeeSchema.partial().safeParse(input)
}