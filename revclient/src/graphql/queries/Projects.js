import gql from 'graphql-tag';

export const GET_PROJECTS = gql`
    query projects {
        projects {
            id
            name
            description
            address
            state
            zip
            city
            goalAmount
            amountFunded
        }
    }
`;

export const GET_PROJECT = gql`
    query project($id: ID!) {
        project(id: $id) {
            id
            name
            description
            address
            state
            zip
            city
            goalAmount
            amountFunded
            profile {
                profileImage
                firstName
                lastName
                email
                state
                city
            }
        }
    }
`;
