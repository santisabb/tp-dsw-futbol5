import express, { json } from 'express';
import { employeeRouter } from './routes/employee.js';
import { fieldRouter } from './routes/field.js';
import { grillRouter } from './routes/grill.js';
import { receiptRouter } from './routes/receipt.js';
import { userRouter } from './routes/user.js';
import { corsMiddleware } from './middlewares/cors.js';

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disabled('x-powered-by')

app.use(employeeRouter)
app.use(fieldRouter)
app.use(grillRouter)
app.use(receiptRouter)
app.use(userRouter)

const port = process.env.PORT ?? 8081

app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
})