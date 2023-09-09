import { Router } from "express"
import { createRequire} from 'node:module'

const require = createRequire(import.meta.url)
const employee = require('./employee.json')

export const employeeRouter = Router()
