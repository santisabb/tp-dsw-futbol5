import { string, number, object } from "zod";

const receiptSchema = object({
    total: number({
        required_error: 'Total is required',
        invalid_type_error: 'Total must be a NUMBER'
    }).positive({
        invalid_type_error: 'Total must be a POSITIVE NUMBER'
    }),
    type: string({
        required_error: 'Receipt type is required',
    }).length(1,{
        invalid_type_error: 'Receipt type must be just a LETTER, A OR B',
    }).includes('A').includes('B'),
    registeredName: string({
        required_error: 'Registration name is required',
        invalid_type_error: 'Registration name must be a string',
    })
})

export function validateReceipt(input) {
    return receiptSchema.safeParse(input)
}

export function validatePartialReceipt(input) {
    return receiptSchema.partial().safeParse(input)
}