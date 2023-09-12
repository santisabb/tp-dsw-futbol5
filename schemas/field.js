import { string, number, boolean, object } from "zod";

const fieldSchema = object({
    fieldType: number({
        required_error: 'Field type is required',
        invalid_type_error: 'Field type is invalid, must be a number'
    }).int().positive().gte(5, {
        invalid_type_error: 'Field type is invalid, must be a number bigger than 5'
    }).lte(11,{
        invalid_type_error: 'Field type must be a number beetween 5 and 11'
    }),
    fieldDimensions: string({
        required_error: 'Field dimensions are required',
        invalid_type_error: 'Field dimensions must be a string'
    }).includes('15x25', '25x45', '45x90', {
        invalid_type_error: 'Field dimensions are invalid'
    })
})

export function validateField(input){
    return fieldSchema.safeParse(input)
}

export function validatePartialField(input){
    return fieldSchema.partial().safeParse(input)
}