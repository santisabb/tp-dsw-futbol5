import { GrillModel } from '../models/local-file-system/grill.js'
import { validateGrill, validatePartialGrill } from '../schemas/grill.js'

export class GrillController {
    static async getAll (req, res) {
        const { status } = req.query
        const grills = await GrillModel.getAll({ status })
        res.json(grills)
    }

    static async getById (req, res) {
        const { id } = req.params
        const grill = await GrillModel.getById({ id })
        if (grill) return res.json(grill)
        res.status(404).json({ message: 'Grill not found' })
    }

    static async create(req, res) {
        const result = validateGrill(req.body)

        if (!result.success){
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const newGrill = await GrillModel.create({ input: result.data })

        res.status(201).json(newGrill)
    }

    static async delete(req, res) {
        const { id } = req.params

        const result = await GrillModel.delete({ id })

        if(result === false) {
            return res.status(404).json({ message: 'Grill not found' })
        }

        return res.json({ message: 'Grill deleted successfully' })
    }

    static async update(req, res) {
        const result = validatePartialGrill(req.body)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const { id } = req.params

        const updatedGrill = await GrillModel.update({ id, input: result.data })

        return res.json(updatedGrill)
    }
}