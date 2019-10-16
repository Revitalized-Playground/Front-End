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
        slug
        name
        description
        address
        state
        zip
        city
        goalAmount
        duration
        difficulty
        startDate
        featuredImage
        images {
            id
            imageUrl
        }
        trades {
            id
            name
            description
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
            profile {
                ...UserSummary
            }
        }
        trades {
            id
            name
            description
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
            title
            description
            priority
            dueDate
            budgetHours
        }
    }
    ${USER_SUMMARY_FRAG}
    #{COMMENTS_FRAG}
`




