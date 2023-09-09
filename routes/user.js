import { string, number, object } from 'zod'

const userSchema = object({
    userDNI: string({
        invalid_type_error: 'DNI must be a string'
    }),
    userFullName: string({
        required_error: 'Full name of user is required',
        invalid_type_error: 'Full name of user must be a string'
    }),
    userEmail: string({
        required_error: 'Email address of user is required',
        invalid_type_error: 'Email address of user must be a string',
    }).includes('@', {
        required_error: 'Email address of user requires at character'
    }).includes('.com', {
        required_error: 'Email address of user must be include .com'
    }),
    userPhoneNumber: string({
        required_error: 'Phone number of user is required',
        invalid_type_error: 'Phone number must be a string',
    }),
    userTotalReserves: number().int().positive()
})

export function validateUser(input) {
    return userSchema.safeParse(input)
}

export function validatePartialUser(input) {
    return userSchema.partial().safeParse(input)
}