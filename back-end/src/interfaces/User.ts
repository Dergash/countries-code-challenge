export interface User {
    id: Number,
    name: String
}

export interface UserAuth {
    login: string,
    password: string
}

export type CreateUserResolver = (parent: User, args: UserAuth) => Partial<User> | undefined
