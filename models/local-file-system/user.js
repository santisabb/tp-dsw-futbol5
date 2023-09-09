import { randomUUID } from 'node:crypto'
import { readJSON } from '../utils.js'

const users = readJSON('../user.json')

export class UserModel {
    static async getAll( {name }) {
        if (name) {
            return users.filter(
                user => user.genre.some(n => n.toLowerCase() === name.toLowerCase())
            )
        }
        return users
    }

    static async getById({ id }) {
        const user = users.find( user => user.id === id)
        return user
    }

    static async create({ input }){
        const newUser = {
            id: randomUUID(),
            ...input
        }

        users.push(newUser)

        return newUser
    }

    static async update({ id, input }) {
        const userIndex = users.findIndex(user => user.id === id)
        if (userIndex === -1) return false

        users[userIndex] = {
            ...users[userIndex],
            ...input
        }

        return users[userIndex]
    }

    static async delete({ id }) {
        const userIndex = users.findIndex(user => user.id === id)
        if (userIndex === -1) return false

        users.splice(id, 1)
        return true
    }
}