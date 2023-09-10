import { boolean, object } from "zod"

const grillSchema = object({
    grillState: boolean({
        invalid_type_error: 'grillState must be a boolean'
    })
})

export function validateGrill(input) {
    return grillSchema.safeParse(input)
}

export function validatePartialGrill(input) {
    return grillSchema.partial().safeParse(input)
}