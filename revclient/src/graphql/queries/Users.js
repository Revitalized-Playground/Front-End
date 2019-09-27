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
export const GET_USER = gql`
    query me {
        me {
            email
            firstName
            lastName
            profileImage
            city
            zip
            address
            state
            aptNumber
        }

    }
`;
