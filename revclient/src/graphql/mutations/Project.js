import { gql } from 'apollo-boost';


export const ADD_COMMENT = gql`
    mutation($data: CreateProjectCommentInput!) {
        createProjectComment(data: $data) {
            id
            comment
            profile {
                id
                firstName
                lastName
                profileImage
            } 
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation($data: CreateProjectInput!) {
        createProject(data: $data) {
            id
        }
    }
`

export const REMOVE_COMMENT = gql`
    mutation($id: ID!) {
        deleteProjectComment(id: $id) {
            id
        }
    }
`

export const EDIT_COMMENT = gql`
    mutation($data: UpdateProjectCommentInput!) {
        updateProjectComment(data: $data) {
            id
            comment
            # likes {
            #     id
            #     profile
            #     comment
            # }
        }
    }
`

