import gql from 'graphql-tag';
import { USER_SUMMARY_FRAG } from '../fragments';


export const CREATE_USER = gql`
    mutation CreateUser($data: UserAccountInput!) {
        createUser(data: $data) {
            token
            profile {
                ...UserSummary
            }
        }
    }
    ${USER_SUMMARY_FRAG}
`;

export const LOGIN_USER = gql`
    mutation LoginUser($data: UserAccountInput!) {
        loginUser(data: $data) {
            token
            profile {
                ...UserSummary
            }
        }
    }
    ${USER_SUMMARY_FRAG}
`;

export const UPDATE_USER_PROFILE = gql`
    mutation UpdateUser($data: UpdateUserProfileInput!) {
        updateUserProfile(data: $data) {
            id
        }
    }
`
