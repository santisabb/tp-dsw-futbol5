import { FieldModel } from '../models/local-file-system/field.js'
import { validateField, validatePartialField } from '../schemas/field.js'

export class FieldController {
    static async getAll (req, res) {
        const { status } = req.query
        const fields = await FieldModel.getAll({ status })
        res.json(fields)
    }

    static async getById (req, res) {
        const { id } = req.params
        const field = await FieldModel.getById({ id })
        if (field) return res.json(field)
        res.status(404).json({ message: 'Field not found' })
    }

    static async create(req, res) {
        const result = validateField(req.body)

        if (!result.success){
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const newField = await FieldModel.create({ input: result.data })

        res.status(201).json(newField)
    }

    static async delete(req, res) {
        const { id } = req.params

        const result = await FieldModel.delete({ id })

        if(result === false) {
            return res.status(404).json({ message: 'Field not found' })
        }

        return res.json({ message: 'Field deleted successfully' })
    }

    static async update(req, res) {
        const result = validatePartialField(req.body)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const { id } = req.params

        const updatedField = await FieldModel.update({ id, input: result.data })

        return res.json(updatedField)
    }
}