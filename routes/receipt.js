import { Router } from "express"
import { ReceiptController } from '../controllers/receipts.js' 

export const receiptRouter = Router()

receiptRouter.get('/receipts', ReceiptController.getAll)
receiptRouter.post('/receipts', ReceiptController.create)

receiptRouter.get('/receipt/:id', ReceiptController.getById)
receiptRouter.patch('/receipt/:id', ReceiptController.update)
receiptRouter.delete('/receipt/:id,', ReceiptController.delete)