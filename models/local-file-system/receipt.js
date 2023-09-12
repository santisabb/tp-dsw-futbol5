import { randomUUID } from 'node:crypto'
import receipts from '../../receipt.json' assert { type: 'json'}


export class ReceiptModel {
    static async getAll( {type }) {
        if (type) {
            return receipts.filter()
        }
        return receipts
    }

    static async getById({ id }) {
        const receipt = receipts.find( receipts => receipt.id === id)
        return receipt
    }

    static async create({ input }){
        const newReceipt = {
            id: randomUUID(),
            ...input
        }

        receipts.push(newReceipt)

        return newReceipt
    }

    static async update({ id, input }) {
        const receiptIndex = receipts.findIndex(receipt => receipt.id === id)
        if (receiptIndex === -1) return false

        receipts[receiptIndex] = {
            ...receipts[receiptIndex],
            ...input
        }

        return receipts[receiptIndex]
    }

    static async delete({ id }) {
        const receiptIndex = receipts.findIndex(receipt => receipt.id === id)
        if (receiptIndex === -1) return false

        receipts.splice(id, 1)
        return true
    }
}