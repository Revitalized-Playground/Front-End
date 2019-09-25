import { gql } from 'apollo-boost';

export const GET_USERS = gql`
    query getUsers {
        users {
            id
            email
        }
    }
`
export const GET_USER = gql`
    query me {
        email
        firstName
        lastName
        profileImage
        city
        zip
        address
        state
        aptNumber
        projects
    }
`;
