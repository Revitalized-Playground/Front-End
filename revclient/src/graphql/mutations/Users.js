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

