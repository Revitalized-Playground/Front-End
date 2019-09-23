import { gql } from 'apollo-boost';

export const GET_USERS = gql`
    {
        users {
            id
            password
            email
            firstName
        }
    }
`

