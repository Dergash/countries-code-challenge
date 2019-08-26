import gql from 'graphql-tag';

export const createUser = gql`
mutation CreateUser($login: String, $password: String) {
    createUser(login: $login, password: $password) {
        id,
        name
    }
}
`
