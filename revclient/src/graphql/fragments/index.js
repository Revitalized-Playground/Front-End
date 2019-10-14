import gql from "graphql-tag";


export const USER_SUMMARY_FRAG = gql`
    fragment UserSummary on UserProfile {
        id
        verified
        email
        firstName
        lastName
        profileImage
        country
        state
        city
        zip
        phone
        address
        aptNumber
    }
`;

export const COMMENTS_FRAG = gql`
    fragment Comments on ProjectComment {
        id
        comment
        likes {
            id
            profile {
                ...UserSummary
            }
        }
    }
    ${USER_SUMMARY_FRAG}
`

export const PROJECT_SUMMARY_FRAG = gql`
    fragment ProjectSummary on Project {
        id
        name
        description
        address
        state
        zip
        city
        goalAmount
        amountFunded
        duration
        difficulty
        startDate
        featuredImage
        images {
            id
            imageUrl
        }
        donations {
            id
            amount
        }
        likes {
            id
        }
        comments {
            id
            ...Comments
        }
        applicants {
            id
            status
        }
        tradeMasters {
            id
            profile {
                ...UserSummary
            }
        }
        students {
            id
            profile {
                ...UserSummary
            }
        }
        tasks {
            id
            description
            priority
            dueDate
            budgetHours
        }
    }
    ${USER_SUMMARY_FRAG}
    #{COMMENTS_FRAG}
`




