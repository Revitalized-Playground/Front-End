import { gql } from 'apollo-boost';

export const GET_PROJECTS = gql`
    query projects {
        projects {
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
