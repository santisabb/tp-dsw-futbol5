import { randomUUID } from 'node:crypto'
import { readJSON } from '../utils.js'

const grills = readJSON('../grill.json')

export class GrillModel {
    static async getAll( {grillStatus }) {
        if (grillStatus) {
            return grills.filter()
        }
        return grills
    }

    static async getById({ grillId }) {
        const grill = grills.find( grill => grill.grillId === grillId)
        return grill
    }

    static async create({ input }){
        const newGrill = {
            id: randomUUID(),
            ...input
        }

        grills.push(newGrill)

        return newGrill
    }

    static async update({ grillId, input }) {
        const grilldIndex = grills.findIndex(grill => grill.grillId === grillId)
        if (grilldIndex === -1) return false

        grills[grilldIndex] = {
            ...grills[grilldIndex],
            ...input
        }

        return grills[grilldIndex]
    }

    static async delete({ grillId }) {
        const grilldIndex = grills.findIndex(grill => grill.grillId === grillId)
        if (grilldIndex === -1) return false

        grills.splice(grillId, 1)
        return true
    }
}