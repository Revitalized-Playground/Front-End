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
        }
    }
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
        likes {
            id
        }
        applicants {
            id
            project {
                id
                slug
                name
                description
                goalAmount
                duration
                difficulty
                startDate
                featuredImage
            }
            profile {
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
            trade {
                id
                name
                description
            }
            licensed
            coverLetter
            jobExperience
            education
            availability
            status
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
            profile {
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
        }
        students {
            id
            profile {
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
        }
        trades {
            id
            name
            description
        }
        tradeMasters {
            id
            profile {
                id
                profileImage
                firstName
                lastName
                email
                address
                city
                state
                zip                
            }
            project {
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
            }
        }
        tasks {
            id
            title
            description
            priority
            dueDate
            budgetHours
            completed
        }
    }
`




