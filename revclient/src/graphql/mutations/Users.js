import { gql } from 'apollo-boost';


export const CREATE_USER = gql`
    mutation CreateUser($data: UserAccountInput!) {
        createUser(data: $data) {
            token
            profile {
                id
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation loginUser($data: UserAccountInput!) {
        loginUser(data: $data) {
            token
            profile {
                id
                email
                profileImage
            }
        }
    }
`;



