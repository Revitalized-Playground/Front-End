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
`;



export const TASKS_FRAG = gql`
    fragment Tasks on ProjectTask {
        id
        title
        description
        priority
        dueDate
        budgetHours
        completed
    }
`;


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
        applicants {
            id
            licensed
            coverLetter
            jobExperience
            education
            availability
            status
            trade {
                id
                name
                description
            }
            profile {
                ...UserSummary
            }
        }
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
        trades {
            id
            name
            description
        }
        tasks {
            ...Tasks
        }
        # comments {
        #     id
        #     ...Comments
        #     profile {
        #         ...UserSummary
        #     }
        # }
    }
    ${USER_SUMMARY_FRAG}
    ${TASKS_FRAG}
`




