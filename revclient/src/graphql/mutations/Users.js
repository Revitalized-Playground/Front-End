import gql from 'graphql-tag';


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
    mutation LoginUser($data: UserAccountInput!) {
        loginUser(data: $data) {
            token
            profile {
                id
                email
            }
        }
    }
`;

export const UPDATE_USER_PROFILE = gql`
    mutation UpdateUser($data: UpdateUserProfileInput!) {
        updateUserProfile(data: $data) {
            id
        }
    }
`
