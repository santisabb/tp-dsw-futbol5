import { ReceiptModel } from '../models/local-file-system/receipt.js'
import { validateReceipt, validatePartialReceipt } from '../schemas/receipt.js'

export class ReceiptController {
    static async getAll (req, res) {
        const { type } = req.query
        const receipts = await ReceiptModel.getAll({ type })
        res.json(receipts)
    }

    static async getById (req, res) {
        const { id } = req.params
        const receipt = await ReceiptModel.getById({ id })
        if (receipt) return res.json(receipt)
        res.status(404).json({ message: 'Receipt not found' })
    }

    static async create(req, res) {
        const result = validateReceipt(req.body)

        if (!result.success){
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const newReceipt = await ReceiptModel.create({ input: result.data })

        res.status(201).json(newReceipt)
    }

    static async delete(req, res) {
        const { id } = req.params

        const result = await ReceiptModel.delete({ id })

        if(result === false) {
            return res.status(404).json({ message: 'Receipt not found' })
        }

        return res.json({ message: 'Receipt deleted successfully' })
    }

    static async update(req, res) {
        const result = validatePartialReceipt(req.body)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const { id } = req.params

        const updatedReceipt = await ReceiptModel.update({ id, input: result.data })

        return res.json(updatedReceipt)
    }
}