import {gql} from 'apollo-server-koa'
import {CreateUserResolver, User} from './interfaces/User'

export const typeDefs = gql`
    type User {
        id: Int
        name: String
    }

    type Mutation {
        createUser(login: String, password: String): User
    }
`

const users: Record<string, User> = {}

const createUserResolver: CreateUserResolver = (parent, { login, password }) => {
    const token = password // TODO:
    users[login] = {
        id: Object.keys(users).length,
        name: login
    }
    return users[login]
}

export const resolvers = {
    Mutation: {
        createUser: createUserResolver
    }
}
