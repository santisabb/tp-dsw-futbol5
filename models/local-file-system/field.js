import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils.js'

const fields = readJSON('../field.json')

export class FieldModel {
    static async getAll( { fieldStatus }) {
        if (fieldStatus) {
            return fields.filter()
        }
        return fields
    }

    static async getById({ fieldId }) {
        const field = fields.find( field => field.fieldId === fieldId)
        return field
    }

    static async create({ input }){
        const newField = {
            id: randomUUID(),
            ...input
        }

        fields.push(newField)

        return newField
    }

    static async update({ fieldId, input }) {
        const fieldIndex = fields.findIndex(field => field.fieldId === fieldId)
        if (fieldIndex === -1) return false

        fields[fieldIndex] = {
            ...fields[fieldIndex],
            ...input
        }

        return fields[fieldIndex]
    }

    static async delete({ fieldId }) {
        const fieldIndex = fields.findIndex(field => field.fieldId === fieldId)
        if (fieldIndex === -1) return false

        fields.splice(fieldIndex, 1)
        return true
    }
}